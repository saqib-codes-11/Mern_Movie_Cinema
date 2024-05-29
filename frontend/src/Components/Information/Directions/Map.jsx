
import GoogleMaps from "simple-react-google-maps"
import config from "../../../config.js"

const Map = ({ coord }) => {
    const { lat, lng } = coord;
    return (
        <GoogleMaps
            apiKey={config.googleMapsAPIKey}
            style={{ height: "300px", width: "100%" }}
            zoom={17}
            center={{ lat: lat, lng: lng }}
            markers={{ lat: lat, lng: lng }}
        />
    );
}


export default Map