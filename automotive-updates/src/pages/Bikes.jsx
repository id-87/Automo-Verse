import { Link } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';

const bikeData = [
  {
    id: 'hunter-350',
    name: 'Hunter 350',
    brand: 'Royal Enfield',
    launchDate: '2024-08-15',
    description: 'A stylish retro bike with a 349cc engine, known for its urban appeal and smooth ride.',
    image: 'https://images.pexels.com/photos/14228829/pexels-photo-14228829.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
  },
  {
    id: 'classic-350',
    name: 'Classic 350',
    brand: 'Royal Enfield',
    launchDate: '2024-09-01',
    description: 'An updated classic with improved handling and a refined 349cc engine.',
    image: 'https://images.pexels.com/photos/14320756/pexels-photo-14320756.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
  },
  {
    id: 'mt-15-v2',
    name: 'MT 15 V2',
    brand: 'Yamaha',
    launchDate: '2024-07-20',
    description: 'A sporty naked bike with a 155cc engine, ideal for agile city riding.',
    image: 'https://images.pexels.com/photos/14751235/pexels-photo-14751235.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
  },
  {
    id: 'meteor-350',
    name: 'Meteor 350',
    brand: 'Royal Enfield',
    launchDate: '2024-06-10',
    description: 'A cruiser with a 349cc engine, built for relaxed long rides.',
    image: 'https://images.pexels.com/photos/14320756/pexels-photo-14320756.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
  },
  {
    id: 'rzr-200',
    name: 'RZR 200',
    brand: 'Yamaha',
    launchDate: '2024-05-15',
    description: 'A lightweight sport bike with a 200cc engine for quick acceleration.',
    image: 'https://images.pexels.com/photos/14751235/pexels-photo-14751235.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
  },
  {
    id: 'pulsar-ns200',
    name: 'Pulsar NS200',
    brand: 'Bajaj',
    launchDate: '2024-04-20',
    description: 'A naked streetfighter with a 200cc engine, known for its aggressive styling.',
    image: 'https://images.pexels.com/photos/14228829/pexels-photo-14228829.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
  },
  {
    id: 'apache-rr310',
    name: 'Apache RR310',
    brand: 'TVS',
    launchDate: '2024-03-25',
    description: 'A fully-faired sport bike with a 310cc engine, designed for speed.',
    image: 'https://images.pexels.com/photos/14751235/pexels-photo-14751235.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
  },
  {
    id: 'duke-390',
    name: 'Duke 390',
    brand: 'KTM',
    launchDate: '2024-02-15',
    description: 'A high-performance naked bike with a 390cc engine.',
    image: 'https://images.pexels.com/photos/14228829/pexels-photo-14228829.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
  },
  {
    id: 'gixxer-sf',
    name: 'Gixxer SF',
    brand: 'Suzuki',
    launchDate: '2024-01-10',
    description: 'A sporty faired bike with a 155cc engine, great for city rides.',
    image: 'https://images.pexels.com/photos/14751235/pexels-photo-14751235.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
  },
  {
    id: 'hornet-2',
    name: 'Hornet 2.0',
    brand: 'Honda',
    launchDate: '2023-12-20',
    description: 'A muscular street bike with a 184cc engine, built for agility.',
    image: 'https://images.pexels.com/photos/14228829/pexels-photo-14228829.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
  },
  {
    id: 'fzs-fi',
    name: 'FZS-FI',
    brand: 'Yamaha',
    launchDate: '2023-11-15',
    description: 'A stylish commuter with a 149cc engine, known for fuel efficiency.',
    image: 'https://images.pexels.com/photos/14751235/pexels-photo-14751235.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
  },
  {
    id: 'interceptor-650',
    name: 'Interceptor 650',
    brand: 'Royal Enfield',
    launchDate: '2023-10-10',
    description: 'A retro roadster with a 648cc twin-cylinder engine.',
    image: 'https://images.pexels.com/photos/14320756/pexels-photo-14320756.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
  },
];

function Bikes() {
  return (
    <div>
      <h2 className="mb-4 text-primary fw-bold">All Bikes</h2>
      <Row className="mb-5">
        {bikeData.map((bike) => (
          <Col key={bike.id} md={4} className="mb-4">
            <Card className="border-0 shadow-sm rounded-3 h-100 transition-hover">
              <Card.Img variant="top" src={bike.image} alt={bike.name} className="rounded-top" onError={(e) => (e.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Found')} />
              <Card.Body>
                <Card.Title className="fw-bold text-primary">{bike.name}</Card.Title>
                <Card.Text className="text-light">{bike.brand}</Card.Text>
                <Card.Text className="text-light">{bike.description}</Card.Text>
                <Link to={`/bikes/${bike.id}`} className="btn btn-primary rounded-3">View Details</Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Bikes;