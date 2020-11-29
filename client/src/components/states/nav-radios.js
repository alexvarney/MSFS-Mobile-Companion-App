import React, { useCallback } from "react";
import RadioControls from "../organisms/radio-control";
import styled from "styled-components";
import useDataStore from "../../stores/data-store";

const NavStateContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, auto));
  justify-items: center;
  grid-gap: 0.75rem;
`;

export default function NavRadiosState() {
  const {
    state: { NAV1_ACTIVE, NAV1_STANDBY, NAV2_ACTIVE, NAV2_STANDBY },
    trigger,
  } = useDataStore();

  const nav1WholeInc = useCallback(
    () => trigger({ eventName: "NAV1_RADIO_WHOLE_INC", value: 1 }),
    [trigger]
  );
  const nav1WholeDec = useCallback(
    () => trigger({ eventName: "NAV1_RADIO_WHOLE_DEC", value: 1 }),
    [trigger]
  );
  const nav1FractInc = useCallback(
    () => trigger({ eventName: "NAV1_RADIO_FRACT_INC", value: 1 }),
    [trigger]
  );
  const nav1FractDec = useCallback(
    () => trigger({ eventName: "NAV1_RADIO_FRACT_DEC", value: 1 }),
    [trigger]
  );
  const nav1Swap = useCallback(
    () => trigger({ eventName: "NAV1_RADIO_SWAP", value: 0 }),
    [trigger]
  );

  const nav2WholeInc = useCallback(
    () => trigger({ eventName: "NAV2_RADIO_WHOLE_INC", value: 1 }),
    [trigger]
  );
  const nav2WholeDec = useCallback(
    () => trigger({ eventName: "NAV2_RADIO_WHOLE_DEC", value: 1 }),
    [trigger]
  );
  const nav2FractInc = useCallback(
    () => trigger({ eventName: "NAV2_RADIO_FRACT_INC", value: 1 }),
    [trigger]
  );
  const nav2FractDec = useCallback(
    () => trigger({ eventName: "NAV2_RADIO_FRACT_DEC", value: 1 }),
    [trigger]
  );
  const nav2Swap = useCallback(
    () => trigger({ eventName: "NAV2_RADIO_SWAP", value: 0 }),
    [trigger]
  );

  return (
    <NavStateContainer>
      <RadioControls
        label="NAV 1"
        actFreq={NAV1_ACTIVE}
        stbyFreq={NAV1_STANDBY}
        fractInc={nav1FractInc}
        fractDec={nav1FractDec}
        wholeInc={nav1WholeInc}
        wholeDec={nav1WholeDec}
        swap={nav1Swap}
      />
      <RadioControls
        label="NAV 2"
        actFreq={NAV2_ACTIVE}
        stbyFreq={NAV2_STANDBY}
        fractInc={nav2FractInc}
        fractDec={nav2FractDec}
        wholeInc={nav2WholeInc}
        wholeDec={nav2WholeDec}
        swap={nav2Swap}
      />
    </NavStateContainer>
  );
}
