import { Card, Row, Col } from 'react-bootstrap';

const fakeNews = [
  {
    id: 1,
    title: 'New Electric SUV Unveiled',
    content: 'A leading brand unveiled an electric SUV with a 400-mile range.',
    created: '2025-04-28',
    image: 'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
  },
  {
    id: 2,
    title: 'Autonomous Driving Breakthrough',
    content: 'New AI tech promises level 5 autonomy by 2027.',
    created: '2025-04-27',
    image: 'https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
  },
  {
    id: 3,
    title: 'Hybrid Motorcycle Prototype',
    content: 'A new hybrid bike combines electric and gas for efficiency.',
    created: '2025-04-26',
    image: 'https://images.pexels.com/photos/14228829/pexels-photo-14228829.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
  },
  {
    id: 4,
    title: 'Luxury Sedan Redesign',
    content: 'A premium brand revealed a sleek, tech-heavy sedan.',
    created: '2025-04-25',
    image: 'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
  },
  {
    id: 5,
    title: 'Off-Road Bike Launch',
    content: 'A rugged adventure bike hits the market with advanced suspension.',
    created: '2025-04-24',
    image: 'https://images.pexels.com/photos/14751235/pexels-photo-14751235.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
  },
  {
    id: 6,
    title: 'Compact EV Hatchback',
    content: 'A budget-friendly electric hatchback offers 250-mile range.',
    created: '2025-04-23',
    image: 'https://images.pexels.com/photos/35967/mini-cooper-auto-model-vehicle.jpg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
  },
];

function Updates() {
  return (
    <div>
      <h2 className="mb-4 text-primary fw-bold">Latest Automo Verse News</h2>
      <Row className="mb-5">
        {fakeNews.map((item) => (
          <Col key={item.id} md={6} className="mb-4">
            <Card className="border-0 shadow-sm rounded-3 h-100 transition-hover">
              <Card.Img variant="top" src={item.image} alt={item.title} className="rounded-top" onError={(e) => (e.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Found')} />
              <Card.Body>
                <Card.Title className="fw-bold text-primary">{item.title}</Card.Title>
                <Card.Text className="text-light">{item.content}</Card.Text>
                <Card.Footer className="text-muted small bg-transparent border-0">
                  Posted on {item.created}
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Updates;