import styled from "styled-components";

const Pane = styled.div`
  margin: 1rem;
  padding: ${(props) => !props.noPadding && "0.5rem"};
  height: ${(props) => (props.fullHeight ? "auto" : "max-content")};
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.grey_dark};
`;

export default Pane;
