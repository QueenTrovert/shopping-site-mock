import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Products from './components/Products';
import Header from './components/Header';
import Deals from './components/Deals';
import Categories from './components/Categories';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col xs={2} className="d-none d-lg-block" style={{ width: '100%'}}><Categories /></Col>
          <Col><Deals /></Col>
        </Row>
      
      <Products />
      </Container>
    </div>

  );
}

export default App;
