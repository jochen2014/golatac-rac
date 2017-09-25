import React from 'react'
import {shallow} from 'enzyme'
import expect from 'expect'
import {noop } from 'lodash'
import NaviBar from './naviBar'

describe('should display naviBar correctly', ()=>{
    it('should dispay links to home and search', ()=>{
        const wrapper = shallow(<NaviBar />)
        const links = wrapper.find('Link')
        const homeLink = links.findWhere(l=>l.prop('to') === '/home')
        expect(homeLink.node).toExist()
        const searchLink = links.findWhere(l=>l.prop('to') === '/search')
        expect(searchLink.node).toExist()
    })
})

