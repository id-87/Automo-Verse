import { useState } from 'react';
import { Form, Button, ListGroup, Alert, Row, Col } from 'react-bootstrap';

function Expectations({ user }) {
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
      <Row>
        {posts.map((post) => (
          <Col key={post.id} md={4} className="mb-3">
            <ListGroup.Item className="border-0 shadow-sm rounded-3 p-3 transition-hover">
              <strong className="text-primary">{post.brand}</strong>: {post.expectation}
              <br />
              <small className="text-muted">
                Posted by {post.email} on {post.created}
              </small>
            </ListGroup.Item>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Expectations;