import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Card1 from '../assets/airshare_cards_1.svg';
import Card2 from '../assets/airshare_cards_2.svg';
import Card3 from '../assets/airshare_cards_3.svg';
import Card4 from '../assets/airshare_cards_4.svg';
import Card5 from '../assets/airshare_cards_5.svg';


const actions = [
    {
        title: 'File Sharing',
        data: 'File Sharing',
        description: 'Share Files And Important Documents Instantly With Identity Decision',
        icon: Card1
    },
    {
        title: 'Screen Pairing',
        data: 'Screen Pairing',
        description: 'Fast Help Collaboration Or Entertainment',
        icon: Card2
    },
    {
        title: 'File Transfer',
        data: 'File Transfer',
        description: 'Transfer Files Of Any Size With Lightning-Fast Speed',
        icon: Card3
    },
    {
        title: 'App Share',
        data: 'App Share',
        description: 'Quickly Share Android Apps For GameBooks',
        icon: Card4
    },
    {
        title: 'No Network Connection Required',
        data: 'No Network Required',
        description: 'Share Files And Mirror Anywhere, Even Offline',
        icon: Card5
    }
];

export default function Cards() {
    return (
        <Container fluid className="pb-3">
            <Row className="g-4 justify-content-center">
                {actions.slice(0, 5).map((action, index) => (
                    <Col key={index} md={4}>
                        <Card className={"h-100 text-center p-4 border border-2"}
                            data-cursor-text={`${action.data}`}
                        >
                            <Card.Body>
                                <div className="mb-3">
                                    <img
                                        src={action.icon}
                                        alt={`${action.title} icon`}
                                        className="img-fluid"
                                    />
                                </div>
                                <h3 className="h4 mb-3 font-1">{action.title}</h3>
                                <p className="font-2 mb-0">{action.description}</p>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            <div className="text-center mt-5">
                <Button variant="" className="me-3 bg-darkblue text-white px-5 py-3" data-cursor-text="Download">
                    Download Now
                </Button>
                <div className=' d-block d-md-none'>
                    <br />
                </div>
                <Button variant="light" className=' px-5 py-3 border border-2' data-cursor-text="Learn More">
                    Buy Now
                </Button>
            </div>
        </Container>
    );
}

