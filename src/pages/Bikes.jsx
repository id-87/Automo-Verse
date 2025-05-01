import { Link } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';

const bikeData = [
  {
    id: 'hunter-350',
    name: 'Hunter 350',
    brand: 'Royal Enfield',
    launchDate: '2024-08-15',
    description: 'A stylish retro bike with a 349cc engine, known for its urban appeal and smooth ride.',
    image: 'https://i.pinimg.com/736x/95/77/90/957790fb8ca2e6d919aef171d05e4519.jpg',
    engine: { type: 'Air-cooled Petrol', displacement: '349cc', cylinders: 1 },
    weight: 181,
    horsepower: 20,
    torque: 27,
    gearbox: ['5-speed manual'],
    fuel: ['Petrol']
  },
  {
    id: 'classic-350',
    name: 'Classic 350',
    brand: 'Royal Enfield',
    launchDate: '2024-09-01',
    description: 'An updated classic with improved handling and a refined 349cc engine.',
    image: 'https://i.pinimg.com/736x/a9/a9/48/a9a94883c7215143522bf2139760760d.jpg',
    engine: { type: 'Air-cooled Petrol', displacement: '349cc', cylinders: 1 },
    weight: 195,
    horsepower: 20,
    torque: 27,
    gearbox: ['5-speed manual'],
    fuel: ['Petrol']
  },
  {
    id: 'mt-15-v2',
    name: 'MT 15 V2',
    brand: 'Yamaha',
    launchDate: '2024-07-20',
    description: 'A sporty naked bike with a 155cc engine, ideal for agile city riding.',
    image: 'https://i.pinimg.com/736x/2b/e7/55/2be755f6de827e56e418eea170619a08.jpg',
    engine: { type: 'Liquid-cooled Petrol', displacement: '155cc', cylinders: 1 },
    weight: 138,
    horsepower: 18,
    torque: 13.9,
    gearbox: ['6-speed manual'],
    fuel: ['Petrol']
  },
  {
    id: 'meteor-350',
    name: 'Meteor 350',
    brand: 'Royal Enfield',
    launchDate: '2024-06-10',
    description: 'A cruiser with a 349cc engine, built for relaxed long rides.',
    image: 'https://i.pinimg.com/736x/01/18/e3/0118e38e7fe29a7991ca481e56afc951.jpg',
    engine: { type: 'Air-cooled Petrol', displacement: '349cc', cylinders: 1 },
    weight: 191,
    horsepower: 20,
    torque: 27,
    gearbox: ['5-speed manual'],
    fuel: ['Petrol']
  },
  {
    id: 'rzr-200',
    name: 'RZR 200',
    brand: 'Yamaha',
    launchDate: '2024-05-15',
    description: 'A lightweight sport bike with a 200cc engine for quick acceleration.',
    image: 'https://i.pinimg.com/736x/ac/49/ba/ac49ba459008a6af7424de40988187f7.jpg',
    engine: { type: 'Liquid-cooled Petrol', displacement: '200cc', cylinders: 1 },
    weight: 140,
    horsepower: 20,
    torque: 18,
    gearbox: ['6-speed manual'],
    fuel: ['Petrol']
  },
  {
    id: 'pulsar-ns200',
    name: 'Pulsar NS200',
    brand: 'Bajaj',
    launchDate: '2024-04-20',
    description: 'A naked streetfighter with a 200cc engine, known for its aggressive styling.',
    image: 'https://i.pinimg.com/736x/2e/20/9f/2e209f5a4352d70980b11405377c6a25.jpg',
    engine: { type: 'Liquid-cooled Petrol', displacement: '199.5cc', cylinders: 1 },
    weight: 156,
    horsepower: 24,
    torque: 18.7,
    gearbox: ['6-speed manual'],
    fuel: ['Petrol']
  },
  {
    id: 'apache-rr310',
    name: 'Apache RR310',
    brand: 'TVS',
    launchDate: '2024-03-25',
    description: 'A fully-faired sport bike with a 310cc engine, designed for speed.',
    image: 'https://i.pinimg.com/736x/a2/c0/ca/a2c0ca7bc081165a919636bc3ede8616.jpg',
    engine: { type: 'Liquid-cooled Petrol', displacement: '312cc', cylinders: 1 },
    weight: 174,
    horsepower: 33,
    torque: 27.3,
    gearbox: ['6-speed manual'],
    fuel: ['Petrol']
  },
  {
    id: 'duke-390',
    name: 'Duke 390',
    brand: 'KTM',
    launchDate: '2024-02-15',
    description: 'A high-performance naked bike with a 390cc engine.',
    image: 'https://i.pinimg.com/736x/93/85/01/938501471730357c4d4dcca25ef7ca12.jpg',
    engine: { type: 'Liquid-cooled Petrol', displacement: '373cc', cylinders: 1 },
    weight: 165,
    horsepower: 43,
    torque: 37,
    gearbox: ['6-speed manual'],
    fuel: ['Petrol']
  },
  {
    id: 'gixxer-sf',
    name: 'Gixxer SF',
    brand: 'Suzuki',
    launchDate: '2024-01-10',
    description: 'A sporty faired bike with a 155cc engine, great for city rides.',
    image: 'https://i.pinimg.com/736x/c8/a1/03/c8a103ca999b83a2fca95670cedf9a67.jpg',
    engine: { type: 'Air-cooled Petrol', displacement: '155cc', cylinders: 1 },
    weight: 148,
    horsepower: 13.4,
    torque: 13.8,
    gearbox: ['5-speed manual'],
    fuel: ['Petrol']
  },
  {
    id: 'hornet-2',
    name: 'Hornet 2.0',
    brand: 'Honda',
    launchDate: '2023-12-20',
    description: 'A muscular street bike with a 184cc engine, built for agility.',
    image: 'https://i.pinimg.com/736x/f4/58/93/f45893a75ae39fd9d1360dd2698f4302.jpg',
    engine: { type: 'Air-cooled Petrol', displacement: '184cc', cylinders: 1 },
    weight: 142,
    horsepower: 17,
    torque: 15.9,
    gearbox: ['5-speed manual'],
    fuel: ['Petrol']
  },
  {
    id: 'fzs-fi',
    name: 'FZS-FI',
    brand: 'Yamaha',
    launchDate: '2023-11-15',
    description: 'A stylish commuter with a 149cc engine, known for fuel efficiency.',
    image: 'https://i.pinimg.com/736x/21/8a/12/218a12420996868b8e16f752c49d615c.jpg',
    engine: { type: 'Air-cooled Petrol', displacement: '149cc', cylinders: 1 },
    weight: 135,
    horsepower: 12,
    torque: 13.3,
    gearbox: ['5-speed manual'],
    fuel: ['Petrol']
  },
  {
    id: 'interceptor-650',
    name: 'Interceptor 650',
    brand: 'Royal Enfield',
    launchDate: '2023-10-10',
    description: 'A retro roadster with a 648cc twin-cylinder engine.',
    image: 'https://i.pinimg.com/736x/c6/b8/a6/c6b8a6f2409271463cf433ded5c07def.jpg',
    engine: { type: 'Air-cooled Petrol', displacement: '648cc', cylinders: 2 },
    weight: 202,
    horsepower: 47,
    torque: 52,
    gearbox: ['6-speed manual'],
    fuel: ['Petrol']
  },
];

function Bikes() {
  return (
    <div>
      <h2 className="mb-4 text-primary fw-bold">All Bikes</h2>
      <Row className="mb-5">
        {bikeData.map((bike) => (
          <Col key={bike.id} md={4} className="mb-4">
            <Card className="border-0 shadow-sm rounded-3 transition-hover">
              <Card.Img variant="top" src={bike.image} alt={bike.name} className="rounded-top" onError={(e) => (e.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Found')} />
              <Card.Body>
                <Card.Title className="fw-bold text-primary">{bike.name}</Card.Title>
                <Card.Text className="text-light">{bike.brand}</Card.Text>
                <Card.Text className="text-light">{bike.description}</Card.Text>
                <Card.Text className="card-text-specs">
                  {bike.engine.displacement} {bike.fuel[0]}, {bike.horsepower} bhp, {bike.torque} Nm, {bike.gearbox[0]}, {bike.weight} kg
                </Card.Text>
                <Link to={`/bikes/${bike.id}`} className="btn btn-primary rounded-3 mt-auto">View Details</Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Bikes;