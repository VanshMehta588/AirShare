import { Row, Col } from 'react-bootstrap';
import mockup from '../assets/airshare_mockup.svg';
import logo1 from '../assets/airshare_android_icon.svg';
import logo2 from '../assets/airshare_web_icon.svg';
import logo3 from '../assets/airshare_ios_icon.svg';

export default function SubHeader() {
    const platforms = [
        { name: 'iOS', icon: logo3 },
        { name: 'Web', icon: logo2 },
        { name: 'Android', icon: logo1 }
    ];

    return (
        <Row className="align-items-center mb-5 mt-4">
            {/* Left Section: Mockup */}
            <Col lg={6} xs={12} className="text-center mb-4 mb-lg-0">
                <img
                    src={mockup}
                    alt="Screen Mirroring Devices"
                    className="img-fluid"
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
            </Col>

            {/* Right Section: Platforms */}
            <Col lg={6} xs={12} className="text-center text-lg-start">
                <h1 className="display-5 fw-bold mb-4 font-1">
                    All-Around Cross-Platform Screen Mirroring For Seamless Collaboration
                </h1>

                <div className="d-flex  flex-row justify-content-center justify-content-lg-start gap-2">
                    {platforms.map((platform) => (
                        <div key={platform.name} className="text-center"
                            data-cursor-text={`${platform.name}`}
                        >
                            <div
                                className="bg-navy rounded p-3 mb-2 d-flex align-items-center justify-content-center mx-auto"
                                style={{
                                    width: '100px',
                                    height: '80px'
                                }}
                            >
                                <img
                                    src={platform.icon}
                                    alt={`${platform.name} icon`}
                                    className="img-fluid"
                                    style={{ maxHeight: '60px' }}
                                />
                            </div>
                            <div className="fw-medium">{platform.name}</div>
                        </div>
                    ))}
                </div>
            </Col>
        </Row>
    );
}
