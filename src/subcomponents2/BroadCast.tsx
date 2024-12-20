import { Container, Row, Col, Card } from 'react-bootstrap';
import Broadcast1 from '../assets/airshare_broadcast_step_1.svg';
import Broadcast2 from '../assets/airshare_broadcast_step_2.svg';
import Broadcast3 from '../assets/airshare_broadcast_step_3.svg';


export default function BroadcastSteps() {
    const steps = [
        {
            number: 1,
            title: 'Installation',
            description: 'Download And Install AirDroid Cast',
            icon: Broadcast1
        },
        {
            number: 2,
            title: 'Connecting The Device',
            description: 'Scan Or Enter The Digital Code To Connect The Two Devices',
            icon: Broadcast2
        },
        {
            number: 3,
            title: 'Start Sharing',
            description: 'Connect Two Devices And Start Broadcasting',
            icon: Broadcast3
        }
    ];

    return (
        <Container className="py-4">
            <h2 className="text-center h2 mb-5 font-1 fw-bold">
                Simple 1-2-3 Steps To Broadcast
            </h2>

            <Row className="g-4 mb-4">
                {steps.map((step, index) => (
                    <Col key={index} sm={12} md={6} lg={4}>
                        <Card className="h-100 border shadow rounded-2 bg-light" data-cursor-text={`Step${step.number}`}>
                            <Card.Body className="text-center p-4">
                                <img
                                    src={step.icon}
                                    alt={`Step ${step.number} icon`}
                                    className="mb-4"
                                    style={{ width: '80px', height: '80px' }}
                                />
                                <h3 className="h4 mb-3 font-1">
                                    Step {step.number}: {step.title}
                                </h3>
                                <p className="font-2 mb-0">
                                    {step.description}
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            <div className="text-center">
                <a
                    href="#"
                    className="text-decoration-none font-1 fw-bold d-inline-flex align-items-center"
                    data-cursor-text="Info"
                >
                    View Detailed Guide &nbsp;<i className="bi bi-arrow-right"></i>
                </a>
            </div>
        </Container>
    );
}

