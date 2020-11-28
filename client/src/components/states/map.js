import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import styled from "styled-components";
import useSimData from "../../stores/data-store";
import PlaneIcon from "../../../../static/img/plane.png";
import Leaflet from "leaflet";

const Wrapper = styled.div`
  .leaflet-container {
    width: 100%;
    height: 100%;
  }

  .plane-marker {
    position: relative;

    ::before {
      content: "";
      position: absolute;
      width: 300%;
      height: 300%;
      top: -75%;
      left: -75%;
      z-index: -1;
      background-size: cover;
      background-image: url(${PlaneIcon});
      transform: rotate(${(props) => props.heading}deg);
    }
  }

  strong {
    font-weight: 700;
  }
`;

const usePosition = () => {
  const { state: simData } = useSimData();

  console.log(simData);

  const lat = simData?.LATITUDE ?? 0;
  const long = simData?.LONGITUDE ?? 0;
  const heading = simData?.MAGNETIC_COMPASS ?? 0;
  return { latLng: [lat, long], heading };
};

const UpdateMap = () => {
  const map = useMap();
  const { latLng } = usePosition();

  React.useEffect(() => map.setView(latLng, map.getZoom()), [latLng]);

  return null;
};

export default function MapState() {
  const { latLng, heading } = usePosition();

  console.log(heading);

  return (
    <Wrapper heading={heading}>
      <MapContainer center={latLng} zoom={12}>
        <UpdateMap />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker
          position={latLng}
          icon={Leaflet.divIcon({ className: "plane-marker" })}
        >
          <Popup>
            <p>
              <strong>Position:</strong> {latLng[0]},{latLng[1]}
            </p>
          </Popup>
        </Marker>
      </MapContainer>
    </Wrapper>
  );
}
