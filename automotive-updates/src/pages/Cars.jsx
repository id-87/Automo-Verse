import { Link } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';

const carData = [
  {
    id: 'creta',
    name: 'Creta',
    brand: 'Hyundai',
    launchDate: '2024-06-10',
    description: 'A compact SUV with advanced features and a 1.5L engine, popular for its comfort.',
    image: 'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
  },
  {
    id: 'thar-roxx',
    name: 'Thar Roxx',
    brand: 'Mahindra',
    launchDate: '2024-08-20',
    description: 'A rugged off-road SUV with a 2.0L turbo engine and modern design.',
    image: 'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
  },
  {
    id: 'seltos',
    name: 'Seltos',
    brand: 'Kia',
    launchDate: '2024-07-15',
    description: 'A stylish SUV with a 1.4L turbo engine, known for its tech and safety features.',
    image: 'https://images.pexels.com/photos/35967/mini-cooper-auto-model-vehicle.jpg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
  },
  {
    id: 'venue',
    name: 'Venue',
    brand: 'Hyundai',
    launchDate: '2024-05-10',
    description: 'A subcompact SUV with a 1.2L engine, ideal for urban driving.',
    image: 'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
  },
  {
    id: 'xuv700',
    name: 'XUV700',
    brand: 'Mahindra',
    launchDate: '2024-04-15',
    description: 'A premium SUV with a 2.2L diesel engine and advanced tech.',
    image: 'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
  },
  {
    id: 'sonet',
    name: 'Sonet',
    brand: 'Kia',
    launchDate: '2024-03-20',
    description: 'A compact SUV with a 1.0L turbo engine, known for its bold design.',
    image: 'https://images.pexels.com/photos/35967/mini-cooper-auto-model-vehicle.jpg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
  },
  {
    id: 'harrier',
    name: 'Harrier',
    brand: 'Tata',
    launchDate: '2024-02-25',
    description: 'A midsize SUV with a 2.0L engine, offering premium comfort.',
    image: 'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
  },
  {
    id: 'fortuner',
    name: 'Fortuner',
    brand: 'Toyota',
    launchDate: '2024-01-15',
    description: 'A rugged SUV with a 2.8L diesel engine, built for tough terrains.',
    image: 'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
  },
  {
    id: 'verna',
    name: 'Verna',
    brand: 'Hyundai',
    launchDate: '2023-12-10',
    description: 'A sleek sedan with a 1.5L engine, known for its performance.',
    image: 'https://images.pexels.com/photos/35967/mini-cooper-auto-model-vehicle.jpg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
  },
  {
    id: 'scorpio-n',
    name: 'Scorpio-N',
    brand: 'Mahindra',
    launchDate: '2023-11-20',
    description: 'A bold SUV with a 2.0L turbo engine, popular for its rugged look.',
    image: 'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
  },
  {
    id: 'nexon',
    name: 'Nexon',
    brand: 'Tata',
    launchDate: '2023-10-15',
    description: 'A compact SUV with a 1.2L turbo engine, known for safety.',
    image: 'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
  },
  {
    id: 'carnival',
    name: 'Carnival',
    brand: 'Kia',
    launchDate: '2023-09-10',
    description: 'A luxury MPV with a 2.2L diesel engine, ideal for families.',
    image: 'https://images.pexels.com/photos/35967/mini-cooper-auto-model-vehicle.jpg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
  },
];

function Cars() {
  return (
    <div>
      <h2 className="mb-4 text-primary fw-bold">All Cars</h2>
      <Row className="mb-5">
        {carData.map((car) => (
          <Col key={car.id} md={4} className="mb-4">
            <Card className="border-0 shadow-sm rounded-3 h-100 transition-hover">
              <Card.Img variant="top" src={car.image} alt={car.name} className="rounded-top" onError={(e) => (e.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Found')} />
              <Card.Body>
                <Card.Title className="fw-bold text-primary">{car.name}</Card.Title>
                <Card.Text className="text-light">{car.brand}</Card.Text>
                <Card.Text className="text-light">{car.description}</Card.Text>
                <Link to={`/cars/${car.id}`} className="btn btn-primary rounded-3">View Details</Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Cars;