import { Container, Row, Col, Dropdown } from 'react-bootstrap';

export default function Footer() {
  const socialLinks = [
    { icon: <i className="bi bi-linkedin"></i>, href: "#", data: "LinkedIn" },
    { icon: <i className="bi bi-twitter-x"></i>, href: "#", data: "Twitter" },
    { icon: <i className="bi bi-facebook"></i>, href: "#", data: "Facebook" },
    { icon: <i className="bi bi-youtube"></i>, href: "#", data: "Youtube" }
  ];

  const companyLinks = [
    { name: 'About Sand Studio', href: '#' },
    { name: 'Contact Us', href: '#' },
    { name: 'Partners', href: '#' },
    { name: 'EULA', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Payment Terms', href: '#' },
    { name: 'Security Center', href: '#' },
    { name: 'GDPR', href: '#' },
    { name: 'Newsroom', href: '#' }
  ];

  const resourceLinks = [
    { name: 'Resource Library', href: '#' },
    { name: 'Business Consulting Services', href: '#' },
    { name: 'Help Center', href: '#' },
    { name: 'How-to', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Download', href: '#' }
  ];

  const productLinks = [
    { name: 'AirDroid Business', href: '#' },
    { name: 'AirDroid Remote Support', href: '#' },
    { name: 'ChatInsight.AI', href: '#' },
    { name: 'AirDroid Personal', href: '#' },
    { name: 'AirDroid Cast', href: '#' },
    { name: 'AirDroid Parental Control', href: '#' }
  ];

  return (
    <footer className="footer-bg text-white py-5">
      <Container>
        {/* About Section */}
        <div className="mb-5">
          <h2 className="h4 mb-4">About AirDroid Cast</h2>
          <p className="mb-5">
            AirDroid Cast shares your device screens to a larger display, and even lets you take
            direct control of these mobile devices on a computer. A perfect tool for both individual
            and business users to enhance productivity during remote meetings, remote casting,
            and more.
          </p>
        </div>

        {/* Links Section */}
        <Row className="mb-5">
          <Col md={3} className="mb-4 mb-md-0">
            <h3 className="h5 mb-4">Company</h3>
            <ul className="list-unstyled">
              {companyLinks.map((link, index) => (
                <li key={index} className="mb-2">
                  <a href={link.href} className="text-white text-decoration-none hover-opacity">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </Col>
          <Col md={3} className="mb-4 mb-md-0">
            <h3 className="h5 mb-4">Resources</h3>
            <ul className="list-unstyled">
              {resourceLinks.map((link, index) => (
                <li key={index} className="mb-2">
                  <a href={link.href} className="text-white text-decoration-none hover-opacity">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </Col>
          <Col md={3} className="mb-4 mb-md-0">
            <h3 className="h5 mb-4">Products</h3>
            <ul className="list-unstyled">
              {productLinks.map((link, index) => (
                <li key={index} className="mb-2">
                  <a href={link.href} className="text-white text-decoration-none hover-opacity">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </Col>
          <Col md={3} className="mb-4 mb-md-0">
            <div className="d-flex gap-3 mb-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-white hover-opacity"
                  aria-label="social media"
                  data-cursor-text= {`${social.data}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </Col>
        </Row>

        {/* Bottom Section */}
        <div className="d-flex justify-content-between align-items-center pt-4 border-top">
          <div>© 2011-2024 Sand Studio, Singapore</div>
          <Dropdown>
            <Dropdown.Toggle variant="outline-light" size="sm" id="language-dropdown">
              English
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>English</Dropdown.Item>
              <Dropdown.Item>中文</Dropdown.Item>
              <Dropdown.Item>日本語</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Container>
    </footer>
  );
}

