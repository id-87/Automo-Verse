import { Link } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';

const carData = [
//   {
//     id: 'creta',
//     name: 'Creta',
//     brand: 'Hyundai',
//     launchDate: '2024-06-10',
//     description: 'A compact SUV with advanced features and a 1.5L engine, popular for its comfort.',
//     image: 'https://images.hindustantimes.com/auto/auto-images/hyundai/creta/exterior_hyundai-creta_front-left-side_600x400_01.jpg',
//     engine: { type: 'Turbo Petrol', displacement: '1.5L', cylinders: 4 },
//     weight: 1230,
//     horsepower: 113,
//     torque: 144,
//     gearbox: ['6-speed manual', 'IVT'],
//     fuel: ['Petrol', 'Diesel']
//   },
  {
    id: 'thar-roxx',
    name: 'Thar Roxx',
    brand: 'Mahindra',
    launchDate: '2024-08-20',
    description: 'A rugged off-road SUV with a 2.0L turbo engine and modern design.',
    image: 'https://i.pinimg.com/736x/97/ca/ed/97caed259e84ec78ad7e05138c7ae0ac.jpg',
    engine: { type: 'mStallion Turbo Petrol', displacement: '2.0L', cylinders: 4 },
    weight: 1750,
    horsepower: 150,
    torque: 330,
    gearbox: ['6-speed manual', '6-speed automatic'],
    fuel: ['Petrol', 'Diesel']
  },
//   {
//     id: 'seltos',
//     name: 'Seltos',
//     brand: 'Kia',
//     launchDate: '2024-07-15',
//     description: 'A stylish SUV with a 1.4L turbo engine, known for its tech and safety features.',
//     image: 'https://i.pinimg.com/736x/dc/fb/c0/dcfbc0bc35f55fb175c93687e722d90d.jpg',
//     engine: { type: 'Turbo Petrol', displacement: '1.4L', cylinders: 4 },
//     weight: 1350,
//     horsepower: 138,
//     torque: 242,
//     gearbox: ['6-speed manual', '7-speed DCT'],
//     fuel: ['Petrol', 'Diesel']
//   },
//   {
//     id: 'venue',
//     name: 'Venue',
//     brand: 'Hyundai',
//     launchDate: '2024-05-10',
//     description: 'A subcompact SUV with a 1.2L engine, ideal for urban driving.',
//     image: 'https://i.pinimg.com/736x/8d/d0/6a/8dd06ace577fa39a65c2ca35f5284df5.jpg',
//     engine: { type: 'Petrol', displacement: '1.2L', cylinders: 4 },
//     weight: 1080,
//     horsepower: 82,
//     torque: 114,
//     gearbox: ['5-speed manual', 'IVT'],
//     fuel: ['Petrol']
//   },
  {
    id: 'xuv700',
    name: 'XUV700',
    brand: 'Mahindra',
    launchDate: '2024-04-15',
    description: 'A premium SUV with a 2.2L diesel engine and advanced tech.',
    image: 'https://i.pinimg.com/736x/64/8f/11/648f118048bd0f53efe4a8b7fcb46cc5.jpg',
    engine: { type: 'mHawk Diesel', displacement: '2.2L', cylinders: 4 },
    weight: 1850,
    horsepower: 182,
    torque: 450,
    gearbox: ['6-speed manual', '6-speed automatic'],
    fuel: ['Diesel', 'Petrol']
  },
//   {
//     id: 'sonet',
//     name: 'Sonet',
//     brand: 'Kia',
//     launchDate: '2024-03-20',
//     description: 'A compact SUV with a 1.0L turbo engine, known for its bold design.',
//     image: 'https://i.pinimg.com/736x/1a/6c/fd/1a6cfdce8b6d3c9e0508740e9abcf746.jpg',
//     engine: { type: 'Turbo Petrol', displacement: '1.0L', cylinders: 3 },
//     weight: 1200,
//     horsepower: 118,
//     torque: 172,
//     gearbox: ['6-speed iMT', '7-speed DCT'],
//     fuel: ['Petrol', 'Diesel']
//   },
  {
    id: 'harrier',
    name: 'Harrier',
    brand: 'Tata',
    launchDate: '2024-02-25',
    description: 'A midsize SUV with a 2.0L engine, offering premium comfort.',
    image: 'https://i.pinimg.com/736x/9c/76/3f/9c763f81c804221b1e0496414e75fdbf.jpg',
    engine: { type: 'Kryotec Diesel', displacement: '2.0L', cylinders: 4 },
    weight: 1650,
    horsepower: 168,
    torque: 350,
    gearbox: ['6-speed manual', '6-speed automatic'],
    fuel: ['Diesel']
  },
//   {
//     id: 'fortuner',
//     name: 'Fortuner',
//     brand: 'Toyota',
//     launchDate: '2024-01-15',
//     description: 'A rugged SUV with a 2.8L diesel engine, built for tough terrains.',
//     image: 'https://i.pinimg.com/736x/10/7d/90/107d90dc0caf12c969b15c34b3fc028a.jpg',
//     engine: { type: 'Diesel', displacement: '2.8L', cylinders: 4 },
//     weight: 2100,
//     horsepower: 201,
//     torque: 500,
//     gearbox: ['6-speed manual', '6-speed automatic'],
//     fuel: ['Diesel', 'Petrol']
//   },
//   {
//     id: 'verna',
//     name: 'Verna',
//     brand: 'Hyundai',
//     launchDate: '2023-12-10',
//     description: 'A sleek sedan with a 1.5L engine, known for its performance.',
//     image: 'https://i.pinimg.com/736x/39/b5/76/39b576ff35269b2f84457da95107a3e5.jpg',
//     engine: { type: 'Petrol', displacement: '1.5L', cylinders: 4 },
//     weight: 1150,
//     horsepower: 113,
//     torque: 144,
//     gearbox: ['6-speed manual', 'IVT'],
//     fuel: ['Petrol', 'Diesel']
//   },
//   {
//     id: 'scorpio-n',
//     name: 'Scorpio-N',
//     brand: 'Mahindra',
//     launchDate: '2023-11-20',
//     description: 'A bold SUV with a 2.0L turbo engine, popular for its rugged look.',
//     image: 'https://i.pinimg.com/736x/c7/ed/cc/c7edcc6c28b2bec2dc7fc082528969eb.jpg',
//     engine: { type: 'mStallion Turbo Petrol', displacement: '2.0L', cylinders: 4 },
//     weight: 1800,
//     horsepower: 200,
//     torque: 380,
//     gearbox: ['6-speed manual', '6-speed automatic'],
//     fuel: ['Petrol', 'Diesel']
//   },
//   {
//     id: 'nexon',
//     name: 'Nexon',
//     brand: 'Tata',
//     launchDate: '2023-10-15',
//     description: 'A compact SUV with a 1.2L turbo engine, known for safety.',
//     image: 'https://i.pinimg.com/736x/9a/99/cf/9a99cfa19c206f775059196179fb3965.jpg',
//     engine: { type: 'Revotron Turbo Petrol', displacement: '1.2L', cylinders: 3 },
//     weight: 1250,
//     horsepower: 118,
//     torque: 170,
//     gearbox: ['6-speed manual', '6-speed AMT'],
//     fuel: ['Petrol', 'Diesel']
//   },
//   {
//     id: 'carnival',
//     name: 'Carnival',
//     brand: 'Kia',
//     launchDate: '2023-09-10',
//     description: 'A luxury MPV with a 2.2L diesel engine, ideal for families.',
//     image: 'https://i.pinimg.com/736x/dc/7d/3f/dc7d3f4b70500ae4867824e032618ca7.jpg',
//     engine: { type: 'Diesel', displacement: '2.2L', cylinders: 4 },
//     weight: 2000,
//     horsepower: 197,
//     torque: 440,
//     gearbox: ['8-speed automatic'],
//     fuel: ['Diesel']
//   },
];

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
//   {
//     id: 'classic-350',
//     name: 'Classic 350',
//     brand: 'Royal Enfield',
//     launchDate: '2024-09-01',
//     description: 'An updated classic with improved handling and a refined 349cc engine.',
//     image: 'https://i.pinimg.com/736x/a9/a9/48/a9a94883c7215143522bf2139760760d.jpg',
//     engine: { type: 'Air-cooled Petrol', displacement: '349cc', cylinders: 1 },
//     weight: 195,
//     horsepower: 20,
//     torque: 27,
//     gearbox: ['5-speed manual'],
//     fuel: ['Petrol']
//   },
//   {
//     id: 'mt-15-v2',
//     name: 'MT 15 V2',
//     brand: 'Yamaha',
//     launchDate: '2024-07-20',
//     description: 'A sporty naked bike with a 155cc engine, ideal for agile city riding.',
//     image: 'https://i.pinimg.com/736x/2b/e7/55/2be755f6de827e56e418eea170619a08.jpg',
//     engine: { type: 'Liquid-cooled Petrol', displacement: '155cc', cylinders: 1 },
//     weight: 138,
//     horsepower: 18,
//     torque: 13.9,
//     gearbox: ['6-speed manual'],
//     fuel: ['Petrol']
//   },
//   {
//     id: 'meteor-350',
//     name: 'Meteor 350',
//     brand: 'Royal Enfield',
//     launchDate: '2024-06-10',
//     description: 'A cruiser with a 349cc engine, built for relaxed long rides.',
//     image: 'https://i.pinimg.com/736x/01/18/e3/0118e38e7fe29a7991ca481e56afc951.jpg',
//     engine: { type: 'Air-cooled Petrol', displacement: '349cc', cylinders: 1 },
//     weight: 191,
//     horsepower: 20,
//     torque: 27,
//     gearbox: ['5-speed manual'],
//     fuel: ['Petrol']
//   },
//   {
//     id: 'rzr-200',
//     name: 'RZR 200',
//     brand: 'Yamaha',
//     launchDate: '2024-05-15',
//     description: 'A lightweight sport bike with a 200cc engine for quick acceleration.',
//     image: 'https://i.pinimg.com/736x/ac/49/ba/ac49ba459008a6af7424de40988187f7.jpg',
//     engine: { type: 'Liquid-cooled Petrol', displacement: '200cc', cylinders: 1 },
//     weight: 140,
//     horsepower: 20,
//     torque: 18,
//     gearbox: ['6-speed manual'],
//     fuel: ['Petrol']
//   },
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
//   {
//     id: 'apache-rr310',
//     name: 'Apache RR310',
//     brand: 'TVS',
//     launchDate: '2024-03-25',
//     description: 'A fully-faired sport bike with a 310cc engine, designed for speed.',
//     image: 'https://i.pinimg.com/736x/a2/c0/ca/a2c0ca7bc081165a919636bc3ede8616.jpg',
//     engine: { type: 'Liquid-cooled Petrol', displacement: '312cc', cylinders: 1 },
//     weight: 174,
//     horsepower: 33,
//     torque: 27.3,
//     gearbox: ['6-speed manual'],
//     fuel: ['Petrol']
//   },
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
//   {
//     id: 'gixxer-sf',
//     name: 'Gixxer SF',
//     brand: 'Suzuki',
//     launchDate: '2024-01-10',
//     description: 'A sporty faired bike with a 155cc engine, great for city rides.',
//     image: 'https://i.pinimg.com/736x/c8/a1/03/c8a103ca999b83a2fca95670cedf9a67.jpg',
//     engine: { type: 'Air-cooled Petrol', displacement: '155cc', cylinders: 1 },
//     weight: 148,
//     horsepower: 13.4,
//     torque: 13.8,
//     gearbox: ['5-speed manual'],
//     fuel: ['Petrol']
//   },
//   {
//     id: 'hornet-2',
//     name: 'Hornet 2.0',
//     brand: 'Honda',
//     launchDate: '2023-12-20',
//     description: 'A muscular street bike with a 184cc engine, built for agility.',
//     image: 'https://i.pinimg.com/736x/f4/58/93/f45893a75ae39fd9d1360dd2698f4302.jpg',
//     engine: { type: 'Air-cooled Petrol', displacement: '184cc', cylinders: 1 },
//     weight: 142,
//     horsepower: 17,
//     torque: 15.9,
//     gearbox: ['5-speed manual'],
//     fuel: ['Petrol']
//   },
//   {
//     id: 'fzs-fi',
//     name: 'FZS-FI',
//     brand: 'Yamaha',
//     launchDate: '2023-11-15',
//     description: 'A stylish commuter with a 149cc engine, known for fuel efficiency.',
//     image: 'https://i.pinimg.com/736x/21/8a/12/218a12420996868b8e16f752c49d615c.jpg',
//     engine: { type: 'Air-cooled Petrol', displacement: '149cc', cylinders: 1 },
//     weight: 135,
//     horsepower: 12,
//     torque: 13.3,
//     gearbox: ['5-speed manual'],
//     fuel: ['Petrol']
//   },
//   {
//     id: 'interceptor-650',
//     name: 'Interceptor 650',
//     brand: 'Royal Enfield',
//     launchDate: '2023-10-10',
//     description: 'A retro roadster with a 648cc twin-cylinder engine.',
//     image: 'https://i.pinimg.com/736x/c6/b8/a6/c6b8a6f2409271463cf433ded5c07def.jpg',
//     engine: { type: 'Air-cooled Petrol', displacement: '648cc', cylinders: 2 },
//     weight: 202,
//     horsepower: 47,
//     torque: 52,
//     gearbox: ['6-speed manual'],
//     fuel: ['Petrol']
//   },
];

function Home() {
  return (
    <div>
      <h1 className="mb-5 text-primary fw-bold text-center">Welcome to Automo Verse</h1>
      
      <h2 className="mb-4 text-primary fw-bold">Featured Cars</h2>
      <Row className="mb-5">
        {carData.map((car) => (
          <Col key={car.id} md={4} className="mb-4">
            <Card className="border-0 shadow-sm rounded-3 transition-hover">
              <Card.Img variant="top" src={car.image} alt={car.name} className="rounded-top" onError={(e) => (e.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Found')} />
              <Card.Body>
                <Card.Title className="fw-bold text-primary">{car.name}</Card.Title>
                <Card.Text className="text-light">{car.brand}</Card.Text>
                <Card.Text className="text-light">{car.description}</Card.Text>
                <Card.Text className="card-text-specs">
                  {car.engine.displacement} {car.fuel[0]}, {car.horsepower} bhp, {car.torque} Nm, {car.gearbox[0]}, {car.weight} kg
                </Card.Text>
                <Link to={`/cars/${car.id}`} className="btn btn-primary rounded-3 mt-auto">View Details</Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <h2 className="mb-4 text-primary fw-bold">Featured Bikes</h2>
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

export default Home;