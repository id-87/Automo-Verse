import { useState } from 'react';
import { Card, Form, Button, ListGroup, Alert } from 'react-bootstrap';

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

function Home({ user }) {
  const [posts, setPosts] = useState([]);
  const [brand, setBrand] = useState('');
  const [expectation, setExpectation] = useState('');
  const [error, setError] = useState('');

  const handlePost = (e) => {
    e.preventDefault();
    if (!user) {
      setError('Please login to post');
      return;
    }
    const newPost = {
      id: posts.length + 1,
      brand,
      expectation,
      email: user.email,
      created: new Date().toLocaleDateString(),
    };
    setPosts([newPost, ...posts]);
    setBrand('');
    setExpectation('');
    setError('');
  };

  return (
    <div>
      {error && <Alert variant="danger" className="rounded-3">{error}</Alert>}
      <h2 className="mb-4 text-primary fw-bold">Latest Automotive News</h2>
      <div className="row mb-5">
        {fakeNews.map((item) => (
          <div key={item.id} className="col-md-6 mb-4">
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
          </div>
        ))}
      </div>
      <h2 className="mb-4 text-primary fw-bold">User Expectations</h2>
      {user && (
        <Form onSubmit={handlePost} className="mb-5 p-4 bg-light rounded-3 shadow-sm">
          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Brand</Form.Label>
            <Form.Control
              type="text"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              placeholder="Enter brand name"
              required
              className="rounded-3"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Expectation</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={expectation}
              onChange={(e) => setExpectation(e.target.value)}
              placeholder="What do you expect from this brand?"
              required
              className="rounded-3"
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="px-4 rounded-3">
            Post Expectation
          </Button>
        </Form>
      )}
      <div className="row">
        {posts.map((post) => (
          <div key={post.id} className="col-md-4 mb-3">
            <ListGroup.Item className="border-0 shadow-sm rounded-3 p-3 transition-hover">
              <strong className="text-primary">{post.brand}</strong>: {post.expectation}
              <br />
              <small className="text-muted">
                Posted by {post.email} on {post.created}
              </small>
            </ListGroup.Item>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;