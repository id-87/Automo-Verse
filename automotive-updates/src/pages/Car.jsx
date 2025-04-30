import { useParams } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';

const carData = [
  {
    id: 'creta',
    name: 'Creta',
    brand: 'Hyundai',
    launchDate: '2024-06-10',
    description: 'A compact SUV with advanced features and a 1.5L engine, popular for its comfort.',
    image: 'https://images.hindustantimes.com/auto/auto-images/hyundai/creta/exterior_hyundai-creta_front-left-side_600x400_01.jpg',
    engine: { type: 'Turbo Petrol', displacement: '1.5L', cylinders: 4 },
    weight: 1230,
    horsepower: 113,
    torque: 144,
    gearbox: ['6-speed manual', 'IVT'],
    fuel: ['Petrol', 'Diesel']
  },
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
  {
    id: 'seltos',
    name: 'Seltos',
    brand: 'Kia',
    launchDate: '2024-07-15',
    description: 'A stylish SUV with a 1.4L turbo engine, known for its tech and safety features.',
    image: 'https://i.pinimg.com/736x/dc/fb/c0/dcfbc0bc35f55fb175c93687e722d90d.jpg',
    engine: { type: 'Turbo Petrol', displacement: '1.4L', cylinders: 4 },
    weight: 1350,
    horsepower: 138,
    torque: 242,
    gearbox: ['6-speed manual', '7-speed DCT'],
    fuel: ['Petrol', 'Diesel']
  },
  {
    id: 'venue',
    name: 'Venue',
    brand: 'Hyundai',
    launchDate: '2024-05-10',
    description: 'A subcompact SUV with a 1.2L engine, ideal for urban driving.',
    image: 'https://i.pinimg.com/736x/8d/d0/6a/8dd06ace577fa39a65c2ca35f5284df5.jpg',
    engine: { type: 'Petrol', displacement: '1.2L', cylinders: 4 },
    weight: 1080,
    horsepower: 82,
    torque: 114,
    gearbox: ['5-speed manual', 'IVT'],
    fuel: ['Petrol']
  },
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
  {
    id: 'sonet',
    name: 'Sonet',
    brand: 'Kia',
    launchDate: '2024-03-20',
    description: 'A compact SUV with a 1.0L turbo engine, known for its bold design.',
    image: 'https://i.pinimg.com/736x/1a/6c/fd/1a6cfdce8b6d3c9e0508740e9abcf746.jpg',
    engine: { type: 'Turbo Petrol', displacement: '1.0L', cylinders: 3 },
    weight: 1200,
    horsepower: 118,
    torque: 172,
    gearbox: ['6-speed iMT', '7-speed DCT'],
    fuel: ['Petrol', 'Diesel']
  },
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
  {
    id: 'fortuner',
    name: 'Fortuner',
    brand: 'Toyota',
    launchDate: '2024-01-15',
    description: 'A rugged SUV with a 2.8L diesel engine, built for tough terrains.',
    image: 'https://i.pinimg.com/736x/10/7d/90/107d90dc0caf12c969b15c34b3fc028a.jpg',
    engine: { type: 'Diesel', displacement: '2.8L', cylinders: 4 },
    weight: 2100,
    horsepower: 201,
    torque: 500,
    gearbox: ['6-speed manual', '6-speed automatic'],
    fuel: ['Diesel', 'Petrol']
  },
  {
    id: 'verna',
    name: 'Verna',
    brand: 'Hyundai',
    launchDate: '2023-12-10',
    description: 'A sleek sedan with a 1.5L engine, known for its performance.',
    image: 'https://i.pinimg.com/736x/39/b5/76/39b576ff35269b2f84457da95107a3e5.jpg',
    engine: { type: 'Petrol', displacement: '1.5L', cylinders: 4 },
    weight: 1150,
    horsepower: 113,
    torque: 144,
    gearbox: ['6-speed manual', 'IVT'],
    fuel: ['Petrol', 'Diesel']
  },
  {
    id: 'scorpio-n',
    name: 'Scorpio-N',
    brand: 'Mahindra',
    launchDate: '2023-11-20',
    description: 'A bold SUV with a 2.0L turbo engine, popular for its rugged look.',
    image: 'https://i.pinimg.com/736x/c7/ed/cc/c7edcc6c28b2bec2dc7fc082528969eb.jpg',
    engine: { type: 'mStallion Turbo Petrol', displacement: '2.0L', cylinders: 4 },
    weight: 1800,
    horsepower: 200,
    torque: 380,
    gearbox: ['6-speed manual', '6-speed automatic'],
    fuel: ['Petrol', 'Diesel']
  },
  {
    id: 'nexon',
    name: 'Nexon',
    brand: 'Tata',
    launchDate: '2023-10-15',
    description: 'A compact SUV with a 1.2L turbo engine, known for safety.',
    image: 'https://i.pinimg.com/736x/9a/99/cf/9a99cfa19c206f775059196179fb3965.jpg',
    engine: { type: 'Revotron Turbo Petrol', displacement: '1.2L', cylinders: 3 },
    weight: 1250,
    horsepower: 118,
    torque: 170,
    gearbox: ['6-speed manual', '6-speed AMT'],
    fuel: ['Petrol', 'Diesel']
  },
  {
    id: 'carnival',
    name: 'Carnival',
    brand: 'Kia',
    launchDate: '2023-09-10',
    description: 'A luxury MPV with a 2.2L diesel engine, ideal for families.',
    image: 'https://i.pinimg.com/736x/dc/7d/3f/dc7d3f4b70500ae4867824e032618ca7.jpg',
    engine: { type: 'Diesel', displacement: '2.2L', cylinders: 4 },
    weight: 2000,
    horsepower: 197,
    torque: 440,
    gearbox: ['8-speed automatic'],
    fuel: ['Diesel']
  },
];

function Car() {
  const { carId } = useParams();
  const car = carData.find((c) => c.id === carId);

  if (!car) {
    return <div className="text-center mt-5"><h2 className="text-primary">Car Not Found</h2></div>;
  }

  return (
    <div>
      <h2 className="mb-4 text-primary fw-bold">{car.name}</h2>
      <Row>
        <Col md={8} className="mx-auto">
          <Card className="border-0 shadow-sm rounded-3 transition-hover">
            <Card.Img src={car.image} alt={car.name} className="rounded-top" onError={(e) => (e.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Found')} />
            <Card.Body>
              <Card.Title className="fw-bold text-primary">{car.name}</Card.Title>
              <Card.Text className="text-light"><strong>Brand:</strong> {car.brand}</Card.Text>
              <Card.Text className="text-light"><strong>Launch Date:</strong> {car.launchDate}</Card.Text>
              <Card.Text className="text-light"><strong>Description:</strong> {car.description}</Card.Text>
              <Card.Text className="text-light"><strong>Engine:</strong> {car.engine.displacement} {car.engine.type}, {car.engine.cylinders} cylinders</Card.Text>
              <Card.Text className="text-light"><strong>Weight:</strong> {car.weight} kg</Card.Text>
              <Card.Text className="text-light"><strong>Horsepower:</strong> {car.horsepower} bhp</Card.Text>
              <Card.Text className="text-light"><strong>Torque:</strong> {car.torque} Nm</Card.Text>
              <Card.Text className="text-light"><strong>Gearbox:</strong> {car.gearbox.join(', ')}</Card.Text>
              <Card.Text className="text-light"><strong>Fuel:</strong> {car.fuel.join(', ')}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Car;