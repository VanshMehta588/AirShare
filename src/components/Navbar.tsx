import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import logo from '../assets/airshare_logo.svg';


export default function Navigation() {
    return (
        <Navbar bg="transparent" expand="lg" className="py-3 ">
            <Container fluid className='gap-md-5'>
                <Navbar.Brand href="#home" className="d-flex align-items-center">
                    <img
                        src={`${logo}`}
                        alt="Drop Files Logo"
                        className="me-2"
                        data-cursor-text="Drop Files"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav font-1">
                    <Nav className="mx-auto gap-3">
                        <Nav.Link href="#features" data-cursor-text="Features">Features</Nav.Link>
                        <Nav.Link href="#guide" data-cursor-text="Guide">Guide</Nav.Link>
                        <Nav.Link href="#topic" data-cursor-text="Topic">Topic</Nav.Link>
                        <Nav.Link href="#reviews" data-cursor-text="Reviews">Reviews</Nav.Link>
                        <Nav.Link href="#airdroid" className='d-inline d-lg-none' data-cursor-text="Web Cast">Air Droid Cast Web</Nav.Link>

                    </Nav>
                    <Nav.Link href="#airdroid" className='fw-bold d-none d-lg-inline' data-cursor-text="Web Cast">Air Droid Cast Web</Nav.Link>
                    <Button variant="" disabled className='border d-none d-lg-inline'>|</Button>
                    <div className="gap-2 d-none d-lg-flex">
                        <Button className='bg-darkblue' data-cursor-text="Download">Download Now</Button>
                        <Button variant="light" data-cursor-text="Learn More">Buy Now</Button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
