import React, {Component} from 'react'
import NaviBar from './common/naviBar'

const App = props => (
    <div name='conentAndFooter' className='contentAndFooter'>
        <div name='content'>
            <NaviBar/>
            <div className='container'>
                {props.children}
            </div>
        </div>
        <div name='footer' className='footer'>
            <p>copyright bochen2014@yahoo.com</p>
        </div>
    </div>
)

export default App