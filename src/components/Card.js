import React from 'react'

export default function Card(props) {
    return (
        <div className='card'>
            <div className='card-image-container'>
                <img className={`card-image${props.item.id}`}
                    src={props.item.imageUrl}
                    alt={props.item.title}
                />
            </div>
            <div className='info-container'>
                <div className='location-info'>
                    <svg className='marker' viewBox="0 0 25 39.86">
                        <path d="M33,13.92A12.66,12.66,0,0,0,20.51,1,12.69,12.69,0,0,0,8,13.93,11.54,11.54,0,0,0,9.42,20h0L20.1,40.62c.4.55.82,0,.82,0C20.56,41.13,31.62,20,31.62,20h0A11.72,11.72,0,0,0,33,13.92Zm-18.25-.39a5.89,5.89,0,0,1,5.76-6,5.89,5.89,0,0,1,5.76,6,5.88,5.88,0,0,1-5.76,6A5.88,5.88,0,0,1,14.75,13.53Z" transform="translate(-8 -1)" />
                    </svg>
                    <p className='country'>{props.item.location}</p>
                    <p className='google-maps'><a href={props.item.googleMapsUrl} target="_blank" rel="noreferrer">View on Google Maps</a></p>
                </div>
                <p className='name'>{ props.item.title }</p>
                <p className='dates'>{ props.item.startDate } - { props.item.endDate }</p>
                <p className='description'>{ props.item.description }</p>
            </div>
        </div>
    )
}
