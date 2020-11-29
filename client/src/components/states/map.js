import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import styled from "styled-components";
import useSimData from "../../stores/data-store";
import PlaneIcon from "../../../../static/img/plane.png";
import Leaflet from "leaflet";
import Button from "../atoms/button";

const Wrapper = styled.div`
  display: grid;
  grid-template: 1fr / 1fr;
  height: 100%;

  & > * {
    grid-column: 1;
    grid-row: 1;
  }

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

const ToggleButton = styled(Button)`
  background-color: ${(props) =>
    props.toggled
      ? props.theme.colors.blue_primary
      : props.theme.colors.red_secondary};
  color: #fff;
  justify-self: start;
  align-self: end;
  z-index: 1000;
`;

const usePosition = () => {
  const { state: simData } = useSimData();

  const lat = simData?.LATITUDE ?? 0;
  const long = simData?.LONGITUDE ?? 0;
  const heading = simData?.MAGNETIC_COMPASS ?? 0;
  return { latLng: [lat, long], heading };
};

const UpdateMap = ({ follow }) => {
  const map = useMap();
  const { latLng } = usePosition();

  React.useEffect(() => follow && map.setView(latLng, map.getZoom()), [
    latLng,
    follow,
  ]);

  React.useEffect(() => {
    if (follow) {
      map.dragging.disable();
      map.setView(latLng, map.getZoom());
    } else {
      map.dragging.enable();
    }
  }, [follow]);

  return null;
};

export default function MapState() {
  const { latLng, heading } = usePosition();
  const [followAirfraft, setFollowAircraft] = useState(true);

  return (
    <Wrapper heading={heading}>
      <ToggleButton
        toggled={!followAirfraft}
        onClick={() => setFollowAircraft((x) => !x)}
      >
        {followAirfraft ? "Unfollow" : "Follow"} Plane
      </ToggleButton>
      <MapContainer center={latLng} zoom={12}>
        <UpdateMap follow={followAirfraft} />
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
