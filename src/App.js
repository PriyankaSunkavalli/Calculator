import "./App.css";
import styled from "styled-components";
import Card from "./components/Card";

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

function App() {
  return (
    <Root>
      <Card />
    </Root>
  );
}

export default App;
