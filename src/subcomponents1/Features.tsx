import { Container, Row, Col } from 'react-bootstrap';
import feature1 from '../assets/airshare_features_1.svg';
import feature2 from '../assets/airshare_features_2.svg';
import feature3 from '../assets/airshare_features_3.svg';
import feature4 from '../assets/airshare_features_4.svg';


export default function Features() {
  const features = [
    {
      title: 'Local & Remote Screen Casting',
      subtitle: 'Real-Time Casting over Same/Different WiFi or Internet.',
      description: 'With AirDroid Cast, You Can Cast The Screen To Windows, Mac, Android, iOS And Even Android TV In Any Network Condition - Via WiFi, Local Or Cellular Network With Low Latency.',
      image: feature1,
      isReversed: false,
      titleColor: '#4285f4'
    },
    {
      title: 'Cast to TV',
      subtitle: 'Take Big Screen Experience to the Next Level with AirDroid Cast TV',
      description: 'Wirelessly & Effortlessly Mirror Your Phone, Tablet, Or Computer Screen Onto Your Smart Android TV For A Better Visual Experience. Say Goodbye To Annoying HDMI Cables And Other Settings!',
      image: feature2,
      isReversed: true,
      titleColor: '#4285f4'
    },
    {
      title: 'Wireless & USB Connection',
      subtitle: 'Smarter Way To Display',
      description: 'AirDroid Cast Allows You To Share Your Device\'s Screen With Full Audio Anytime You Need In Any Situation. We Made An Effort To Simplify The Display Process, And Focus On The Convenient Experience!',
      image: feature3,
      isReversed: false,
      titleColor: '#4285f4'
    },
    {
      title: 'Remote control',
      subtitle: 'Total control android & ios beyond your finger',
      description: 'AirDroid Cast Enables You To Remotely Control Your iPhone/iPad/Android Devices On A PC, Just Using A Mouse Or Keyboard. With Or Without A USB Cable You Can Enjoy Mobile Entertainment On A Bigger Screen And Also Access Mobile Apps Without Using Any Emulators.',
      image: feature4,
      isReversed: true,
      titleColor: '#4285f4'
    }
  ];

  return (
    <Container className="py-4">
      <h2 className="text-center h1 mb-5 fw-bold font-1">
        Unleash The Full Power Of Your Screen Sharing
      </h2>
      
      {features.map((feature, index) => (
        <Row 
          key={index} 
          className={`align-items-center mb-5 ${index !== features.length - 1 ? 'mb-lg-5' : ''}`}
        >
          {/* Content Column */}
          <Col 
            lg={6} 
            className={`mb-4 mb-lg-0 ${feature.isReversed ? 'order-lg-2' : ''}`}
          >
            <div className="pe-lg-4">
              <h3 
                className="h5 mb-3"
                style={{ color: feature.titleColor }}
                // data-cursor-text={`${feature.title}`}

              >
                {feature.title}
              </h3>
              <h4 className="h3 fw-bold mb-3 font-1">
                {feature.subtitle}
              </h4>
              <p className="mb-0 font-2">
                {feature.description}
              </p>
            </div>
          </Col>

          {/* Image Column */}
          <Col 
            lg={6} 
            className={feature.isReversed ? 'order-lg-1 text-center' : ' text-center'}
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="img-fluid rounded shadow-sm"
            />
          </Col>
        </Row>
      ))}
    </Container>
  );
}

