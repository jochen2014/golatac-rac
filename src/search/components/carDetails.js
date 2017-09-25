import React, {PropTypes} from 'react'

const CarDetails = ({makeName, name, price, imageUrl}) => {
    return (
        <div>
         <div className='row'>
            <div className='col-xs-12'>
                <img className='car-image' name='car-image' src={imageUrl} />
            </div>
        </div>

         <div className='row' style={{marginTop:'40px'}}>
            <div className="form-group col-xs-6">
                <label htmlFor="make-name">Make Name</label>
                <label className='form-control' name="make-name">{makeName}</label>
            </div>
            <div className="form-group col-xs-6">
                <label htmlFor="model-name">Model Name</label>
                <label className='form-control' name="model-name">{name}</label>
            </div>
            <div className="form-group col-xs-6">
                <label htmlFor="price">Price guide</label>
                <label className='form-control' name="price">{'$'+price}</label>
            </div>
        </div>
        </div>
    )
}

CarDetails.propTypes = {
    makeName : PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price:PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired
}

export default CarDetails