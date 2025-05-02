// import { Card, Row, Col } from 'react-bootstrap';

// const fakeNews = [
//   {
//     id: 1,
//     title: 'New Electric SUV Unveiled',
//     content: 'A leading brand unveiled an electric SUV with a 400-mile range.',
//     created: '2025-04-28',
//     image: 'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
//   },
//   {
//     id: 2,
//     title: 'Autonomous Driving Breakthrough',
//     content: 'New AI tech promises level 5 autonomy by 2027.',
//     created: '2025-04-27',
//     image: 'https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
//   },
//   {
//     id: 3,
//     title: 'Hybrid Motorcycle Prototype',
//     content: 'A new hybrid bike combines electric and gas for efficiency.',
//     created: '2025-04-26',
//     image: 'https://images.pexels.com/photos/14228829/pexels-photo-14228829.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
//   },
//   {
//     id: 4,
//     title: 'Luxury Sedan Redesign',
//     content: 'A premium brand revealed a sleek, tech-heavy sedan.',
//     created: '2025-04-25',
//     image: 'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
//   },
//   {
//     id: 5,
//     title: 'Off-Road Bike Launch',
//     content: 'A rugged adventure bike hits the market with advanced suspension.',
//     created: '2025-04-24',
//     image: 'https://images.pexels.com/photos/14751235/pexels-photo-14751235.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
//   },
//   {
//     id: 6,
//     title: 'Compact EV Hatchback',
//     content: 'A budget-friendly electric hatchback offers 250-mile range.',
//     created: '2025-04-23',
//     image: 'https://images.pexels.com/photos/35967/mini-cooper-auto-model-vehicle.jpg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
//   },
// ];

// function Updates() {
//   return (
//     <div>
//       <h2 className="mb-4 text-primary fw-bold">Latest Automo Verse News</h2>
//       <Row className="mb-5">
//         {fakeNews.map((item) => (
//           <Col key={item.id} md={6} className="mb-4">
//             <Card className="border-0 shadow-sm rounded-3 h-100 transition-hover">
//               <Card.Img variant="top" src={item.image} alt={item.title} className="rounded-top" onError={(e) => (e.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Found')} />
//               <Card.Body>
//                 <Card.Title className="fw-bold text-primary">{item.title}</Card.Title>
//                 <Card.Text className="text-light">{item.content}</Card.Text>
//                 <Card.Footer className="text-muted small bg-transparent border-0">
//                   Posted on {item.created}
//                 </Card.Footer>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </div>
//   );
// }

// export default Updates;



import { Container, ListGroup } from 'react-bootstrap';

const updates = [
  {
    id: 'maruti-price-hike',
    title: 'Maruti Suzuki Announces Price Hike Up to Rs 62,000 from April 8',
    content: 'Maruti Suzuki, India’s largest carmaker, will increase prices across its vehicle range due to rising input costs and operational expenses.',
    created: '2025-04-08'
  },
  {
    id: 'wagonr-sales',
    title: 'Maruti Suzuki WagonR Remains India’s Top-Selling Car for Fourth Year',
    content: 'WagonR sold 1,98,451 units in FY25, retaining its dominance with advanced engine options and CNG variants.',
    created: '2025-04-10'
  },
  {
    id: 'bajaj-sales',
    title: 'Bajaj Auto Reports 1% Sales Growth in March',
    content: 'Bajaj Auto sold 3,69,823 units in March, with a 7% rise in FY25 sales to 46,50,966 units, driven by strong exports.',
    created: '2025-04-03'
  },
  {
    id: 'us-tariffs',
    title: 'US Tariffs Have Minimal Impact on Indian Auto Exports',
    content: 'Low export volumes to the US mean Indian passenger vehicle makers face negligible impact from new tariffs, says ICRA.',
    created: '2025-04-03'
  },
  {
    id: 'skoda-sales',
    title: 'Skoda Auto India Posts Record 7,422 Units in March',
    content: 'Skoda achieves its highest-ever monthly sales in India, driven by demand for Kushaq and Slavia models.',
    created: '2025-04-01'
  },
  {
    id: 'hmsi-sales',
    title: 'Honda Motorcycle Sales Up 11% in March',
    content: 'HMSI sold 4,27,448 units in March, reflecting strong demand for scooters and motorcycles in India.',
    created: '2025-04-03'
  },
  {
    id: 'hero-sales',
    title: 'Hero MotoCorp Sees 12% Sales Rise in March',
    content: 'Hero MotoCorp reports robust sales growth, driven by new launches and strong rural demand.',
    created: '2025-04-03'
  },
  {
    id: 'royal-enfield',
    title: 'Royal Enfield Sales Surge 34% in March',
    content: 'Royal Enfield sold 1,01,021 units, boosted by the launch of the Classic 650 Twin.',
    created: '2025-04-01'
  },
  {
    id: 'bmw-sales',
    title: 'BMW India Sales Up 7% in Q1 2025',
    content: 'BMW sold 3,914 units in Q1, with luxury models like the 7 Series and X7 driving growth.',
    created: '2025-04-03'
  },
  {
    id: 'ev-adoption',
    title: 'Accelerating EV Adoption Key to Improving Air Quality',
    content: 'Experts emphasize that faster electric vehicle adoption is crucial for reducing urban pollution in India.',
    created: '2025-04-03'
  },
  {
    id: 'michelin-tyres',
    title: 'Michelin to Roll Out Locally-Produced PV Tyres in 2025',
    content: 'Michelin plans to produce passenger vehicle tyres in Chennai, ramping up its India portfolio.',
    created: '2025-03-30'
  },
  {
    id: 'tata-acquisition',
    title: 'Tata Autocomp to Acquire International Automotive Components',
    content: 'Tata Autocomp strengthens its global presence with the acquisition of IAC Group Sweden.',
    created: '2025-03-24'
  },
  {
    id: 'ashok-leyland',
    title: 'Ashok Leyland May Shut Loss-Making UK E-Bus Plant',
    content: 'Ashok Leyland’s Switch Mobility considers closing its UK plant due to financial challenges.',
    created: '2025-03-26'
  },
  {
    id: 'wipro-cloud-car',
    title: 'Wipro Showcases AI-Driven Cloud Car Ecosystem',
    content: 'Wipro’s prototype in Bengaluru highlights software-defined vehicle solutions for automakers.',
    created: '2025-03-25'
  },
  {
    id: 'maruti-tracks',
    title: 'Maruti Suzuki to Automate 12 More Driving Test Tracks',
    content: 'Maruti partners with Uttar Pradesh to automate license test tracks, enhancing road safety.',
    created: '2025-04-15'
  }
];

function Updates() {
  return (
    <Container className="mt-5">
      <h2 className="mb-4 text-primary fw-bold">Latest Automo Verse News</h2>
      <ListGroup>
        {updates.map((item) => (
          <ListGroup.Item
            key={item.id}
            className="bg-dark border-0 mb-2 rounded-3 transition-hover"
            style={{ backgroundColor: '#2c2c2c' }}
          >
            <h5 className="text-primary fw-bold">{item.title}</h5>
            <p className="text-light mb-2">{item.content}</p>
            <p className="text-muted small">Posted on {item.created}</p>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default Updates;