import { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = (email) => {
    setUser({ email });
    navigate('/');
  };

  const logout = () => {
    setUser(null);
    navigate('/');
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">Automotive Updates</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {user ? (
                <>
                  <Nav.Link disabled>Welcome, {user.email}</Nav.Link>
                  <Button variant="outline-light" onClick={logout}>Logout</Button>
                </>
              ) : (
                <>
                  <Nav.Link as={Link} to="/login">Login</Nav.Link>
                  <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/login" element={<Login login={login} />} />
          <Route path="/signup" element={<Signup login={login} />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;