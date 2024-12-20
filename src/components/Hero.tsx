import { Container, Row, Col, Button } from 'react-bootstrap';
import logo from '../assets/airshare_logo.svg';


export default function Hero() {
  return (
    <Container fluid className="text-center">
      <Row className="justify-content-center">
        <Col md={8}>
          <img
            src={`${logo}`}
            data-cursor-text="Drop Files"
            alt="Drop Files Logo Large"
            className="mb-4 d-none d-lg-inline"
            height={100}
            width={300}
          />
          <h1 className="display-4 fw-bold mb-4 font-1">
            Fast, Offline File Sharing & Screen Pairing—All In One Place!
          </h1>
          <p className="lead mb-5 font-2">
            Say Goodbye To Slow Transfers And Connectivity Issues. With Drop Files Air Drop Share,
            You Can Transfer Files, Share Apps, And Mirror Your Screen Effortlessly, Anytime,
            Anywhere.
          </p>
          <div className="d-flex justify-content-center gap-5">
            <Button 
              variant="" 
              className="d-flex align-items-center gap-0 gap-md-3 bg-darkblue text-white px-2 px-lg-5"
              data-cursor-text="Apple"
            >
             <h1><i className="bi bi-apple"></i></h1>
              Download on the<br />App Store
            </Button>
            <Button 
              variant="light" 
              className="d-flex align-items-center gap-0 gap-md-3 px-2 px-lg-5"
              data-cursor-text="Android"
            >
              <h1><i className="bi bi-google-play"></i></h1>
              GET IT ON<br />Google Play
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

