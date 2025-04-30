import { useParams } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';

const bikeData = [
  {
    id: 'hunter-350',
    name: 'Hunter 350',
    brand: 'Royal Enfield',
    launchDate: '2024-08-15',
    description: 'A stylish retro bike with a 349cc engine, known for its urban appeal and smooth ride.',
    image: 'https://via.placeholder.com/300x200?text=Hunter+350',
  },
  {
    id: 'classic-350',
    name: 'Classic 350',
    brand: 'Royal Enfield',
    launchDate: '2024-09-01',
    description: 'An updated classic with improved handling and a refined 349cc engine.',
    image: 'https://via.placeholder.com/300x200?text=Classic+350',
  },
  {
    id: 'mt-15-v2',
    name: 'MT 15 V2',
    brand: 'Yamaha',
    launchDate: '2024-07-20',
    description: 'A sporty naked bike with a 155cc engine, ideal for agile city riding.',
    image: 'https://via.placeholder.com/300x200?text=MT+15+V2',
  },
];

function Bike() {
  const { bikeId } = useParams();
  const bike = bikeData.find((b) => b.id === bikeId);

  if (!bike) {
    return <div className="text-center mt-5"><h2>Bike Not Found</h2></div>;
  }

  return (
    <div>
      <h2 className="mb-4 text-primary fw-bold">{bike.name}</h2>
      <Row>
        <Col md={6}>
          <Card className="border-0 shadow-sm rounded-3 transition-hover">
            <Card.Img src={bike.image} alt={bike.name} className="rounded-top" />
            <Card.Body>
              <Card.Title className="fw-bold">{bike.name}</Card.Title>
              <Card.Text><strong>Brand:</strong> {bike.brand}</Card.Text>
              <Card.Text><strong>Launch Date:</strong> {bike.launchDate}</Card.Text>
              <Card.Text><strong>Description:</strong> {bike.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Bike;