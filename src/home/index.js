import React,{ Component , PropTypes} from 'react'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'
import * as homeActions from './actions'

class HomePage extends Component {
  
  componentDidMount() {
    const {actions, carOfTheWeek } =  this.props
    if(!carOfTheWeek){
        actions.getCarOfTheWeek()
    }
  }
  
  componentWillReceiveProps(nextProps) {
    if(nextProps.error){
        browserHistory.push('/error')
    }
  }
  

  render() {
    const { isFetching , carOfTheWeek} = this.props
    return (
      <div>
        <div>
          <h1>Car Of the Week</h1>
          <div style={{marginTop:'20px', fontSize:'1.2em'}}>
            <p>{carOfTheWeek && carOfTheWeek.review}</p>
          </div>
        </div>
        {isFetching && <span>loading...</span>}
      </div>
    )
  }
}

HomePage.propTypes={
  actions: PropTypes.object.isRequired,
  carOfTheWeek: PropTypes.object,
  isFetching:PropTypes.bool,
  error: PropTypes.bool
}
const mapStateToProps = state => (
  {
    isFetching: state.home.isFetching,
    error:state.home.error,
    carOfTheWeek: state.home.carOfTheWeek
  })
const mapDispatchToProps = dispatch => (
  {
    actions: bindActionCreators(homeActions, dispatch)
  })

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
export const HomePageUnitTest = HomePage