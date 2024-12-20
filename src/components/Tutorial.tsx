import { Container } from 'react-bootstrap';
import airsharetutorial from '../assets/airshare_tutorial.svg';

export default function Tutorial() {
  return (
    <Container fluid className="text-center py-1 font-1" data-cursor-text="Tutorial">
      <h2 className="h4 mb-4 fw-bold"
      data-cursor='-lg'
      >Tutorial <i className="bi bi-arrow-right"></i></h2>
      <div className="position-relative">
        <img
          src={`${airsharetutorial}`}
          alt="Tutorial Devices"
          className="img-fluid"
        />
      </div>
    </Container>
  );
}

