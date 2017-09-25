import React, {Component, PropTypes} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {browserHistory} from 'react-router'
import * as searchActions from '../actions'
import SearchPage from '../components/searchPage'

class SearchContainer extends Component {
  constructor(props){
    super(props)
    this.onSearch = this.onSearch.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    if(!this.props.makeList){
       this.props.actions.getMakeList()
    }
  }
  
  componentWillReceiveProps(nextProps) {
    if (nextProps.error) {
      browserHistory.push('/error')
    }
  }
  
  handleChange(event) {
    const {name, value} = event.target
    const {setSelectedMake, setSelectedModel, getModelList} = this.props.actions
    if(name === 'selectedMake'){
       setSelectedMake(value)
       if(value){
          getModelList(value)
       }
    }
    else{
      setSelectedModel(value)
    }
  }

  onSearch(){
     const {selectedModel} = this.props
     browserHistory.push(`/make/model/${selectedModel}`)
  }

  render() {
    const { makeList, modelList, selectedMake, selectedModel, isFetching } = this.props
    return (
      <div>
        <div>
          <h1>Search for Cars</h1>
        </div>
        <SearchPage   makeList={makeList}
                      modelList={modelList}
                      selectedMake={selectedMake}
                      selectedModel={selectedModel}
                      onChange = {this.handleChange}
                      onSearch={this.onSearch}
                     />
        {isFetching && <span>loading...</span>}
      </div>
    )
  }
}

const mapStateToProps = state=>(
  { 
    makeList:state.search.makeList,
    modelList:state.search.modelList,
    selectedMake:state.search.selectedMake,
    selectedModel: state.search.selectedModel,
    isFetching:state.search.isFetching,
    error:state.search.error,
  }
)
const mapDispatchToProps = dispatch=>({
   actions: bindActionCreators(searchActions, dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(SearchContainer)
export const SearchContainerUnitTest = SearchContainer