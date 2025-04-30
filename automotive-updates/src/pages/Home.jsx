import { Link } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';

const popularBikes = [
  {
    id: 'hunter-350',
    name: 'Hunter 350',
    brand: 'Royal Enfield',
    launchDate: '2024-08-15',
    image: 'https://images.pexels.com/photos/14228829/pexels-photo-14228829.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
  },
  {
    id: 'classic-350',
    name: 'Classic 350',
    brand: 'Royal Enfield',
    launchDate: '2024-09-01',
    image: 'https://images.pexels.com/photos/14320756/pexels-photo-14320756.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
  },
  {
    id: 'mt-15-v2',
    name: 'MT 15 V2',
    brand: 'Yamaha',
    launchDate: '2024-07-20',
    image: 'https://images.pexels.com/photos/14751235/pexels-photo-14751235.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
  },
];

const popularCars = [
  {
    id: 'creta',
    name: 'Creta',
    brand: 'Hyundai',
    launchDate: '2024-06-10',
    image: 'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
  },
  {
    id: 'thar-roxx',
    name: 'Thar Roxx',
    brand: 'Mahindra',
    launchDate: '2024-08-20',
    image: 'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
  },
  {
    id: 'seltos',
    name: 'Seltos',
    brand: 'Kia',
    launchDate: '2024-07-15',
    image: 'https://images.pexels.com/photos/35967/mini-cooper-auto-model-vehicle.jpg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
  },
];

function Home() {
  return (
    <div>
      <div className="p-5 text-center bg-dark text-white rounded-3 mb-5">
        <h1 className="fw-bold text-primary">Welcome to Automo Verse</h1>
        <p className="lead text-danger">Explore the latest in bikes and cars!</p>
      </div>
      <h2 className="mb-4 text-primary fw-bold">Popular Bikes</h2>
      <Row className="mb-5">
        {popularBikes.map((bike) => (
          <Col key={bike.id} md={4} className="mb-4">
            <Card className="border-0 shadow-sm rounded-3 h-100 transition-hover">
              <Card.Img variant="top" src={bike.image} alt={bike.name} className="rounded-top" onError={(e) => (e.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Found')} />
              <Card.Body>
                <Card.Title className="fw-bold text-primary">{bike.name}</Card.Title>
                <Card.Text className="text-light">{bike.brand}</Card.Text>
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
              <Card.Img variant="top" src={car.image} alt={car.name} className="rounded-top" onError={(e) => (e.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Found')} />
              <Card.Body>
                <Card.Title className="fw-bold text-primary">{car.name}</Card.Title>
                <Card.Text className="text-light">{car.brand}</Card.Text>
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