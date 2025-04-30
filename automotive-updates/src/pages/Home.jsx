import { Link } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';

const popularBikes = [
  {
    id: 'hunter-350',
    name: 'Hunter 350',
    brand: 'Royal Enfield',
    launchDate: '2024-08-15',
    image: 'https://via.placeholder.com/300x200?text=Hunter+350',
  },
  {
    id: 'classic-350',
    name: 'Classic 350',
    brand: 'Royal Enfield',
    launchDate: '2024-09-01',
    image: 'https://via.placeholder.com/300x200?text=Classic+350',
  },
  {
    id: 'mt-15-v2',
    name: 'MT 15 V2',
    brand: 'Yamaha',
    launchDate: '2024-07-20',
    image: 'https://via.placeholder.com/300x200?text=MT+15+V2',
  },
];

const popularCars = [
  {
    id: 'creta',
    name: 'Creta',
    brand: 'Hyundai',
    launchDate: '2024-06-10',
    image: 'https://via.placeholder.com/300x200?text=Creta',
  },
  {
    id: 'thar-roxx',
    name: 'Thar Roxx',
    brand: 'Mahindra',
    launchDate: '2024-08-20',
    image: 'https://via.placeholder.com/300x200?text=Thar+Roxx',
  },
  {
    id: 'seltos',
    name: 'Seltos',
    brand: 'Kia',
    launchDate: '2024-07-15',
    image: 'https://via.placeholder.com/300x200?text=Seltos',
  },
];

function Home() {
  return (
    <div>
      <div className="p-5 text-center bg-primary text-white rounded-3 mb-5">
        <h1 className="fw-bold">Welcome to Automotive Updates</h1>
        <p className="lead">Explore the latest in bikes and cars!</p>
      </div>
      <h2 className="mb-4 text-primary fw-bold">Popular Bikes</h2>
      <Row className="mb-5">
        {popularBikes.map((bike) => (
          <Col key={bike.id} md={4} className="mb-4">
            <Card className="border-0 shadow-sm rounded-3 h-100 transition-hover">
              <Card.Img variant="top" src={bike.image} alt={bike.name} className="rounded-top" />
              <Card.Body>
                <Card.Title className="fw-bold">{bike.name}</Card.Title>
                <Card.Text>{bike.brand}</Card.Text>
                <Link to={`/bikes/${bike.id}`} className="btn btn-primary rounded-3">View Details</Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <h2 className="mb-4 text-primary fw-bold">Popular Cars</h2>
      <Row className="mb-5">
        {popularCars.map((car) => (
          <Col key={car.id} md={4} className="mb-4">
            <Card className="border-0 shadow-sm rounded-3 h-100 transition-hover">
              <Card.Img variant="top" src={car.image} alt={car.name} className="rounded-top" />
              <Card.Body>
                <Card.Title className="fw-bold">{car.name}</Card.Title>
                <Card.Text>{car.brand}</Card.Text>
                <Link to={`/cars/${car.id}`} className="btn btn-primary rounded-3">View Details</Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Home;