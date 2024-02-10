import GoogleMapReact from 'google-map-react';

const Map = ({ center, zoom }) => {
    return (
        <div className='map'>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyBXWxdJD0YQnwxT81Mq4KkdD6ZJkm8BceY' }}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                {/* Children components or markers go here */}
            </GoogleMapReact>
        </div>
    );
};

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 6
};

export default Map;