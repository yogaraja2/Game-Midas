import React from 'react'
import AssetCard from '../../../components/AssetCard'
import Popup from '../../../components/Popup'

const BuyingCard = ({data}) => {
    const allyProps = {
        className: 'buy-asset-card',
        size: {
            xs: 6,
            md: 3
        }
    }
    
    return (
        <div className="buying-card">
            <AssetCard {...allyProps} {...data}/>
            <p className="item-name">{data.name}</p>
        </div>
    )
}

// type 0 - car, type 1 - house
function BuyPopup({onClose, type}) {
    // asset lists
    // prettier-ignore
    const cars = [
        {name: 'Relisble  Car', img: 'RelisibleCar', value: 60000},
        {name: 'Economy Car', img: 'EconomyCar', value: 80000,
        {name: 'Full Loaded Car', img: 'FullLoadCar', value: 120000},
        {name: 'Luxury Car', img: 'LuxuryCar', value: 1200000 }
    ]
    // prettier-ignore
    const houses = [
        {name: 'Studio Appartment', img: 'StudioApt', value: 60000},
        {name: 'Fixer Upper', img: 'FixerUp', value: 80000},
        {name: 'Rambler', img: 'Rambler', value: 120000},
        {name: 'Mansion', img: 'Mansion', value: 1200000}
    ]

    const handleClick = (data) => console.log(data)

    const assetName = !!type? 'house' : 'car'
    const buyingAsset = !!type? houses : cars

    return ( 
        <Popup className="dash-buy-asset-dlg" title={`Interested in buying ${assetName}`} onClose={onClose}>
            <div className="asset-list-wrap">
                {buyingAsset.map( i => (
                    <BuyingCard data={i} />
                ))}
            </div>
        </Popup>
    )
}

export default BuyPopup
