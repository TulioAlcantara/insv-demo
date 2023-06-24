import { Col, Container, Row } from "react-bootstrap";
import Header from "./components/Header/Header.tsx";
import Sidebar from "./components/Sidebar/Sidebar.tsx";
import CSATCliente from "./pages/CSATCliente/CSATCliente.tsx";

function App() {
  return (
    <Container fluid="xs">
      <Row>
        <Col xs="auto" className="pe-0">
          <Sidebar />
        </Col>
        <Col className="page">
          <Header />
          <CSATCliente></CSATCliente>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
