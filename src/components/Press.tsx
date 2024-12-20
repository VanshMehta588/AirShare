import { Container, Row, Col } from 'react-bootstrap';
import airShareLogo1 from '../assets/airshare_newsmedia_1.svg';
import airShareLogo2 from '../assets/airshare_newsmedia_2.svg';
import airShareLogo3 from '../assets/airshare_newsmedia_3.svg';
import airShareLogo4 from '../assets/airshare_newsmedia_4.svg';
import airShareLogo5 from '../assets/airshare_newsmedia_5.svg';
import airShareLogo6 from '../assets/airshare_newsmedia_6.svg';

export default function Press() {
  const pressLogos = [
    { name: 'Cult of Mac', width: 120, src: airShareLogo1 },
    { name: 'Softpedia', width: 120, src: airShareLogo2 },
    { name: 'MUO', width: 80, src: airShareLogo3 },
    { name: 'Tech Times', width: 120, src: airShareLogo4 },
    { name: 'PC World', width: 120, src: airShareLogo5 },
    { name: 'BBC News', width: 80, src: airShareLogo6 },
  ];

  return (
    <Container fluid className="py-2 py-md-4 bg-light w-75 w-md-100 rounded rounded-4 newsmedia shadow">
      <Row className="align-items-center justify-content-center">
        {pressLogos.map((logo, index) => (
          <Col key={index}className="text-center">
            <img
              src={logo.src}
              alt={`${logo.name} Logo`}
              className="img-fluid opacity-75"
              style={{ width: logo.width }}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

