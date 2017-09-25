import React, {PropTypes} from 'react'

const SelectInput = ({name, label, value, onChange, defaultOptionText, options}) => {
    return (
        <div className="form-group">
            <label htmlFor={name} >{label}</label>
            <select name={name} value={value} onChange={onChange} className='form-control' >
                <option value="">{defaultOptionText}</option>
                {options && options.map((value, index) =>
                    <option key={'option_' + index} value={value.id}>{value.name}</option>)
                }
            </select>
        </div>
    )
}

SelectInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    defaultOptionText: PropTypes.string.isRequired,
    options: PropTypes.array
}

export default SelectInput