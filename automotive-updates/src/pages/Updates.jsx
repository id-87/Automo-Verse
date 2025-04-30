import { Card, Row, Col } from 'react-bootstrap';

const fakeNews = [
  {
    id: 1,
    title: 'New Electric SUV Unveiled',
    content: 'A leading brand unveiled an electric SUV with a 400-mile range.',
    created: '2025-04-28',
    image: 'https://via.placeholder.com/300x200?text=Electric+SUV',
  },
  {
    id: 2,
    title: 'Autonomous Driving Breakthrough',
    content: 'New AI tech promises level 5 autonomy by 2027.',
    created: '2025-04-27',
    image: 'https://via.placeholder.com/300x200?text=Autonomous+Car',
  },
];

function Updates() {
  return (
    <div>
      <h2 className="mb-4 text-primary fw-bold">Latest Automotive News</h2>
      <Row className="mb-5">
        {fakeNews.map((item) => (
          <Col key={item.id} md={6} className="mb-4">
            <Card className="border-0 shadow-sm rounded-3 h-100 transition-hover">
              <Card.Img variant="top" src={item.image} alt={item.title} className="rounded-top" />
              <Card.Body>
                <Card.Title className="fw-bold">{item.title}</Card.Title>
                <Card.Text>{item.content}</Card.Text>
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