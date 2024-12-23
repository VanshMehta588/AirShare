import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import logo from '../assets/airshare_logo.svg';
import { useEffect, useState } from 'react';

// Define the type for refs
type NavigationProps = {
  refs: {
    features: React.RefObject<HTMLElement>;
    guide: React.RefObject<HTMLElement>;
    topic: React.RefObject<HTMLElement>;
  };
};

export default function Navigation({ refs }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Handle scroll event to update background and shadow
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to the specific section smoothly with dynamic offset adjustment
  const handleScroll = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      const isSmallScreen = window.innerWidth <= 992; // Check for small screen size
      const yOffset = isSmallScreen ? -350 : -90; // Set different offsets based on screen size
      const yPosition =
        ref.current.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: yPosition, behavior: 'smooth' });
    }
  };

  // Handle link click to close the navbar on mobile
  const handleNavLinkClick = () => {
    setIsNavOpen(false); // Close the navbar when a link is clicked
  };

  return (
    <Navbar
      bg={scrolled ? "white" : "transparent"}
      expand="lg"
      className={`py-3 ${scrolled ? 'scrolledshadow' : ''}`}
      expanded={isNavOpen} // Control navbar expansion
    >
      <Container fluid className="gap-2 gap-lg-5">
        <Navbar.Brand href="#home" className="d-flex align-items-center"  onClick={() => window.location.reload()}>
          <img
            src={`${logo}`}
            alt="Drop Files Logo"
            className="me-2"
            data-cursor-text="Drop Files"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setIsNavOpen(!isNavOpen)} />
        <Navbar.Collapse id="basic-navbar-nav font-1">
          <Nav className="mx-auto gap-3 text-end">
            <Nav.Link
              onClick={() => { handleScroll(refs.features); handleNavLinkClick(); }}
            >
              Features
            </Nav.Link>
            <Nav.Link
              onClick={() => { handleScroll(refs.guide); handleNavLinkClick(); }}
            >
              Guide
            </Nav.Link>
            <Nav.Link
              onClick={() => { handleScroll(refs.topic); handleNavLinkClick(); }}
            >
              Topic
            </Nav.Link>
            <Nav.Link
              href="#reviews"
              data-cursor-text="Reviews"
              onClick={handleNavLinkClick}
            >
              Reviews
            </Nav.Link>
            <Nav.Link
              href="#airdroid"
              className="d-inline d-lg-none"
              data-cursor-text="Web Cast"
              onClick={handleNavLinkClick}
            >
              Air Droid Cast Web
            </Nav.Link>
          </Nav>
          <Nav.Link
            href="#airdroid"
            className="fw-bold d-none d-lg-inline"
            data-cursor-text="Web Cast"
          >
            Air Droid Cast Web
          </Nav.Link>
          <Button variant="" disabled className="border border-0 d-none d-lg-inline">
            |
          </Button>
          <div className="gap-2 d-none d-lg-flex">
            <Button className="bg-darkblue" data-cursor-text="Download">
              Download Now
            </Button>
            <Button variant="light" data-cursor-text="Learn More">
              Buy Now
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
