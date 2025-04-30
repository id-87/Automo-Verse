import { useParams } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';

const carData = [
  {
    id: 'creta',
    name: 'Creta',
    brand: 'Hyundai',
    launchDate: '2024-06-10',
    description: 'A compact SUV with advanced features and a 1.5L engine, popular for its comfort.',
    image: 'https://via.placeholder.com/300x200?text=Creta',
  },
  {
    id: 'thar-roxx',
    name: 'Thar Roxx',
    brand: 'Mahindra',
    launchDate: '2024-08-20',
    description: 'A rugged off-road SUV with a 2.0L turbo engine and modern design.',
    image: 'https://via.placeholder.com/300x200?text=Thar+Roxx',
  },
  {
    id: 'seltos',
    name: 'Seltos',
    brand: 'Kia',
    launchDate: '2024-07-15',
    description: 'A stylish SUV with a 1.4L turbo engine, known for its tech and safety features.',
    image: 'https://via.placeholder.com/300x200?text=Seltos',
  },
];

function Car() {
  const { carId } = useParams();
  const car = carData.find((c) => c.id === carId);

  if (!car) {
    return <div className="text-center mt-5"><h2>Car Not Found</h2></div>;
  }

  return (
    <div>
      <h2 className="mb-4 text-primary fw-bold">{car.name}</h2>
      <Row>
        <Col md={6}>
          <Card className="border-0 shadow-sm rounded-3 transition-hover">
            <Card.Img src={car.image} alt={car.name} className="rounded-top" />
            <Card.Body>
              <Card.Title className="fw-bold">{car.name}</Card.Title>
              <Card.Text><strong>Brand:</strong> {car.brand}</Card.Text>
              <Card.Text><strong>Launch Date:</strong> {car.launchDate}</Card.Text>
              <Card.Text><strong>Description:</strong> {car.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Car;