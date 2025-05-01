import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

function Signup({ login }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [error, setError] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      setError('Passwords do not match');
      return;
    }
    login(email);
  };

  return (
    <div className="w-100 w-md-50 mx-auto p-4 bg-dark rounded-3 shadow-sm">
      <h2 className="mb-4 text-primary fw-bold">Signup</h2>
      {error && <Alert variant="danger" className="rounded-3">{error}</Alert>}
      <Form onSubmit={handleSignup}>
        <Form.Group className="mb-3">
          <Form.Label className="fw-semibold text-danger">Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            required
            className="rounded-3"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="fw-semibold text-danger">Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            required
            className="rounded-3"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="fw-semibold text-danger">Confirm Password</Form.Label>
          <Form.Control
            type="password"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            placeholder="Confirm password"
            required
            className="rounded-3"
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100 rounded-3">
          Signup
        </Button>
      </Form>
    </div>
  );
}

export default Signup;