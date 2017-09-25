import React from 'react'
import {shallow} from 'enzyme'
import expect from 'expect'
import {HomePageUnitTest} from './index'

describe('should display home page correctly', ()=>{
    let homePage
    const unit_test_props = {
        carOfTheWeek: {
            modelId: 1,
            review: 'unit test'
        }
    }
    beforeEach( ()=>{
        homePage = shallow(<HomePageUnitTest {...unit_test_props} />)
    })
    it('should dispay title and car review', ()=>{
        const title = homePage.find('h1')
        expect(title.node).toExist()
        expect(title.text()).toEqual('Car Of the Week')
    })
})

