import React, {Component, PropTypes} from 'react'
import SelectInput from '../../common/selectInput'

const SearchPage = props => {

    const { makeList, modelList, onChange, onSearch, selectedMake, selectedModel} = props
    return (
        <div>
            <div className='row'>
                <div className="col-xs-6">
                    <SelectInput name="selectedMake"
                        value={selectedMake}
                        label="Car make"
                        onChange={onChange}
                        defaultOptionText='Select a make'
                        options={makeList} />
                </div>
            </div>
            <div className='row'>
                <div className="col-xs-6">
                    <SelectInput name="selectedModel"
                        value={selectedModel}
                        label="Car model"
                        onChange={onChange}
                        defaultOptionText={modelList ? 'Select a model' : '-- Select a make first --'}
                        options={modelList} />
                </div>
            </div>
            <div className='row' style={{ marginTop: '20px' }}>
                <div className="col-xs-6 form-group">
                    <button className="btn btn-primary"
                        onClick={onSearch}
                        disabled={!selectedModel}>Search</button>
                </div>
            </div>
        </div>
    )
}


SearchPage.propTypes = {
    onSearch: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    makeList: PropTypes.array,
    modelList: PropTypes.array,
    selectedMake: PropTypes.string,
    selectedModel: PropTypes.string
}

export default SearchPage