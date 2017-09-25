import React from 'react'
import {mount} from 'enzyme'
import expect, {createSpy} from 'expect'
import { SearchResultUnitTest } from './searchResultContainer'

const setup = (store , params , getModelDetails) => {
    return mount(<SearchResultUnitTest {...store}  params={params}
                getModelDetails={getModelDetails} />)
}
describe('shuld display search result correctly', () => {

    it('should load car details when first loaded', () => {
        const getModelDetailsSpy = createSpy()
        const wrapper = setup({},{id:100},getModelDetailsSpy)
        expect(getModelDetailsSpy).toHaveBeenCalled()
    })

    it('should not load car details when details already loaded in store', () => {
        const getModelDetailsSpy = createSpy()
        const wrapper = setup({
            modelDetails: {
                id: 100,
                name: 'test model'
            }
        }, { id: 100 }, getModelDetailsSpy)
        expect(getModelDetailsSpy).toNotHaveBeenCalled()
    })

    it('should display all page elements correctly', () => {
        const wrapper = setup({
            modelDetails: {
                id: 100,
                name: 'test model'
            }
        }, { id: 100 })
        expect(wrapper.find('label[name="make-name"]').node).toExist()
        expect(wrapper.find('label[name="model-name"]').node).toExist()
        expect(wrapper.find('label[name="price"]').node).toExist()
        expect(wrapper.find('img[name="car-image"]').node).toExist()
    })

})
