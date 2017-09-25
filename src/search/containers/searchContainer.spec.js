import React from 'react'
import {mount} from 'enzyme'
import expect, { createSpy } from 'expect'
import {SearchContainerUnitTest} from './searchContainer'

const setup = (store={}, actions={}) =>{
    return  mount(<SearchContainerUnitTest {...store} actions={actions}/>)
}
describe('should display search page correctly', ()=>{
    it('should load make list when page loaded', ()=>{
        const getMakeListSpy = createSpy()
        const wrapper = setup({},{
            getMakeList: getMakeListSpy
        })
        expect(getMakeListSpy).toHaveBeenCalled()
    })
    it('should render page elements correctly',()=>{
        const wrapper = setup({
            makeList:[{
                id:1,
                name:'test make'
            }]
        })
        expect(wrapper.find('select').length).toEqual(2)
        const searchButton = wrapper.find('button')
        expect(searchButton.node).toExist()
        expect(searchButton.prop('disabled')).toEqual(true)
    })
    it('search button should be enabled when model selected', ()=>{
       const wrapper = setup({
               makeList:[{
                   id: 1,
                   name:'test make'
               }],
               modelList:[{
                   id: 1,
                   name:'test model'
               }],
               selectedMake:'1',
               selectedModel:'1'
       })
       const searchButton = wrapper.find('button')
       expect(searchButton.prop('disabled')).toEqual(false)
    })
})

