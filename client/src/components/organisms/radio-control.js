import React from "react";
import styled from "styled-components";
import Button from "../atoms/button";
import useDataStore from "../../stores/data-store";

//TODO: Refactor this

import { MdSwapVert } from "react-icons/md";
import {
  RiArrowDropLeftLine,
  RiArrowDropRightLine,
  RiArrowLeftSFill,
  RiArrowRightSFill,
} from "react-icons/ri";

const Wrapper = styled.div`
  color: #fff;
  background-color: ${(props) => props.theme.colors.grey_medium};
  display: inline-grid;
  grid-template-areas:
    "header header"
    "radios swap"
    "controls controls";
  border-radius: 0.25rem;
  overflow: hidden;
`;

const InnerContent = styled.div`
  padding: 1rem 0 1rem 0.5rem;
  grid-area: radios;
`;

const TypeLabel = styled.span`
  font-weight: 700;
`;

const FreqLabel = styled.span`
  font-weight: 600;
  font-family: monospace;
  font-size: 2rem;
  margin: 0 1rem;
  background: #000;
  padding: 0.25rem;
  border-radius: 0.125rem;
  color: ${(props) => props.theme.colors.orange_light};
`;

const FreqDisplayWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: baseline;
  & + & {
    margin-top: 0.5rem;
  }
`;

const Heading = styled.p`
  background-color: ${(props) => props.theme.colors.orange_dark};
  padding: 0.25rem 0.5rem;
  text-transform: uppercase;
  font-weight: 700;
  grid-area: header;
`;

const SwapButton = styled(Button)`
  grid-area: swap;
  align-self: center;
  justify-self: start;
  margin-right: 0.5rem;
  font-size: 2rem;
  padding: 0.3rem 0;
  line-height: 0;
  background-color: ${(props) => props.theme.colors.grey_light};
`;

const ControlsContainer = styled.div`
  grid-area: controls;
  background-color: ${(props) => props.theme.colors.grey_light};
  color: ${(props) => props.theme.colors.grey_dark};
  display: flex;
  justify-content: center;
  font-size: 3rem;
  align-items: center;
  user-select: none;
  & svg {
    margin: -4px -6px;
  }
`;

const TunerLabel = styled.p`
  flex-grow: 1;
  text-align: center;
  font-size: 0.75rem;
  text-transform: uppercase;
  margin: 0 1rem;
  font-weight: 600;
`;

const ControlButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 2rem;
  line-height: 2rem;
`;

const TunerFreqDisplay = ({ label, frequency }) => {
  return (
    <FreqDisplayWrapper>
      <TypeLabel>{label}</TypeLabel>
      <FreqLabel>{frequency}</FreqLabel>
    </FreqDisplayWrapper>
  );
};

const normalizeFreq = (f) => {
  if (f) {
    return f.toLocaleString("en-US", {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
  }

  return "---.--";
};

export default React.memo(function RadioControl({
  label,
  actFreq,
  stbyFreq,
  fractInc,
  fractDec,
  wholeInc,
  wholeDec,
  swap,
}) {
  const { trigger } = useDataStore();

  return (
    <Wrapper>
      <Heading>{label}</Heading>
      <InnerContent>
        <TunerFreqDisplay label="ACT" frequency={normalizeFreq(actFreq)} />
        <TunerFreqDisplay label="STBY" frequency={normalizeFreq(stbyFreq)} />
      </InnerContent>
      <SwapButton onClick={swap}>
        <MdSwapVert aria-label={`Swap ${label} active/standby frequency`} />
      </SwapButton>
      <ControlsContainer>
        <ControlButton onClick={fractDec}>
          <RiArrowDropLeftLine />
        </ControlButton>
        <ControlButton onClick={wholeDec}>
          <RiArrowLeftSFill />
        </ControlButton>
        <TunerLabel>Tune {label}</TunerLabel>
        <ControlButton onClick={wholeInc}>
          <RiArrowRightSFill />
        </ControlButton>
        <ControlButton>
          <RiArrowDropRightLine onClick={fractInc} />
        </ControlButton>
      </ControlsContainer>
    </Wrapper>
  );
});
