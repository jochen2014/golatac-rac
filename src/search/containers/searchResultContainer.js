import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {getModelDetails} from '../actions'
import CarDetails from '../components/carDetails'

class SearchResultContainer extends Component {
    constructor(props) {
        super(props)
        this.isModelLoaded = this.isModelLoaded.bind(this)
    }

    componentDidMount() {
        const {params, modelDetails, getModelDetails} = this.props
        if (!this.isModelLoaded()) {
            getModelDetails(params.id)
        }
    }

    isModelLoaded() {
        const modelID = parseInt(this.props.params.id)
        const modelDetailsInStore = this.props.modelDetails
        return modelDetailsInStore && modelDetailsInStore.id === modelID
    }

    render() {
        const {error, isFetching, modelDetails} = this.props

        if (error) {
            return <div><h1>The model doesn't exist</h1></div>
        }

        const title = modelDetails ? 'Car details' : 'loading car details...'
        return (
            <div>
                <h1>{title}</h1>
                {this.isModelLoaded() && <CarDetails {...modelDetails} />}
                {isFetching && <span>loading...</span>}
            </div>
        )
    }
}


export default connect(state => ({
    error: state.search.error,
    isFetching: state.search.isFetching,
    modelDetails: state.search.modelDetails,
}), {
        getModelDetails
    })(SearchResultContainer)

export const SearchResultUnitTest = SearchResultContainer