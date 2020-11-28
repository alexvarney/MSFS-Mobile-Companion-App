import styled from "styled-components";

const Pane = styled.div`
  margin: 1rem;
  height: calc(100% - 2rem);
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.grey_dark};
`;

export default Pane;
