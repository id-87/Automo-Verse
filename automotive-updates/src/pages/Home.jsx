import { useState } from 'react';
import { Card, Form, Button, ListGroup, Alert } from 'react-bootstrap';

const fakeNews = [
  {
    id: 1,
    title: 'New Electric SUV Unveiled',
    content: 'A leading brand unveiled an electric SUV with a 400-mile range.',
    created: '2025-04-28',
  },
  {
    id: 2,
    title: 'Autonomous Driving Breakthrough',
    content: 'New AI tech promises level 5 autonomy by 2027.',
    created: '2025-04-27',
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
      {error && <Alert variant="danger">{error}</Alert>}
      <h2>Latest Automotive News</h2>
      <div className="mb-4">
        {fakeNews.map((item) => (
          <Card key={item.id} className="mb-3">
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.content}</Card.Text>
              <Card.Footer className="text-muted">
                Posted on {item.created}
              </Card.Footer>
            </Card.Body>
          </Card>
        ))}
      </div>
      <h2>User Expectations</h2>
      {user && (
        <Form onSubmit={handlePost} className="mb-4">
          <Form.Group className="mb-3">
            <Form.Label>Brand</Form.Label>
            <Form.Control
              type="text"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              placeholder="Enter brand name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Expectation</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={expectation}
              onChange={(e) => setExpectation(e.target.value)}
              placeholder="What do you expect from this brand?"
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Post Expectation
          </Button>
        </Form>
      )}
      <ListGroup>
        {posts.map((post) => (
          <ListGroup.Item key={post.id}>
            <strong>{post.brand}</strong>: {post.expectation}
            <br />
            <small>
              Posted by {post.email} on {post.created}
            </small>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default Home;