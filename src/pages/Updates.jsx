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
    id: 'mahindra-sml-isuzu',
    title: 'Mahindra to Acquire 59% Stake in SML Isuzu for Rs 555 Crore',
    content: 'Mahindra & Mahindra will buy a majority stake in SML Isuzu at a deep discount, strengthening its commercial vehicle portfolio.',
    created: '2025-04-29'
  },
  {
    id: 'us-tariffs-impact',
    title: 'US Tariffs May Erode Rs 2700-4500 Cr of Indian Auto Component Profits',
    content: 'ICRA reports that US tariffs could significantly impact Indian auto component exporters’ earnings due to higher costs.',
    created: '2025-04-28'
  },
  {
    id: 'royal-enfield-hunter',
    title: 'Royal Enfield Launches 2025 Hunter 350 with New Features',
    content: 'Royal Enfield’s 2025 Hunter 350 introduces updated styling and performance enhancements, targeting urban riders.',
    created: '2025-04-26'
  },
  {
    id: 'maruti-tax-relief',
    title: 'Maruti Chairman: Tax Relief on Small Cars Unlikely to Revive Demand',
    content: 'Maruti Suzuki’s R C Bhargava urges government to ease taxes to boost small car sales, citing affordability issues.',
    created: '2025-04-25'
  },
  {
    id: 'electric-trucking',
    title: 'India Mulls Incentives to Boost Electric Trucking',
    content: 'The government is considering major subsidies to accelerate the adoption of electric commercial vehicles.',
    created: '2025-04-25'
  },
  {
    id: 'nissan-cost-cutting',
    title: 'Nissan Cuts Non-Core Operations to Manage Costs',
    content: 'Nissan is streamlining operations by divesting non-essential units to improve financial efficiency.',
    created: '2025-04-29'
  },
  {
    id: 'skoda-kodiaq',
    title: 'Skoda India Aims for 150% Sales Growth with New Kodiaq SUV',
    content: 'Skoda plans to capitalize on SUV demand with the locally-developed Kodiaq, targeting a significant market share.',
    created: '2025-04-19'
  },
  {
    id: 'mercedes-sales',
    title: 'Mercedes-Benz India Sales Up 4% in FY25',
    content: 'Mercedes-Benz reports steady growth, expecting an RBI rate cut to further spur luxury vehicle demand.',
    created: '2025-04-10'
  },
  {
    id: 'maruti-grand-vitara',
    title: 'Maruti Suzuki Launches 2025 Grand Vitara with Updated Features',
    content: 'The new Grand Vitara offers enhanced tech and styling, aiming to compete in the crowded SUV segment.',
    created: '2025-04-08'
  },
  {
    id: 'goodyear-tyres',
    title: 'Goodyear Plans to Sell India Farm Tyres Business for Rs 2,500 Crore',
    content: 'Goodyear is divesting its farm tyre division to focus on core passenger vehicle tyre production.',
    created: '2025-04-22'
  },
  {
    id: 'auto-exports',
    title: 'Indian Auto Parts Makers Face Minimal US Tariff Impact',
    content: 'Plants in Canada and Mexico help Indian auto component makers avoid significant losses from US tariffs.',
    created: '2025-04-04'
  },
  {
    id: 'uno-minda',
    title: 'Uno Minda Elevates Ravi Mehra as Managing Director',
    content: 'Uno Minda restructures its leadership to drive growth in the auto component sector.',
    created: '2025-04-30'
  },
  {
    id: 'tata-artifex',
    title: 'Tata AutoComp Systems to Acquire 80% Stake in Artifex',
    content: 'Tata AutoComp expands its global footprint with the acquisition of Artifex, enhancing its component portfolio.',
    created: '2025-04-30'
  },
  {
    id: 'safety-norms',
    title: 'New Safety Norms for Trucks and Heavy Vehicles Proposed',
    content: 'Nitin Gadkari announces safety ratings for commercial vehicles, similar to Bharat NCAP, to enhance road safety.',
    created: '2025-04-24'
  },
  {
    id: 'cv-sales',
    title: 'Commercial Vehicle Sales Aim for One Million Units',
    content: 'The commercial vehicle sector targets a seven-year high, driven by infrastructure growth and demand.',
    created: '2025-04-16'
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