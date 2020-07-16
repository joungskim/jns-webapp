import React, { useState } from 'react';
import './RentalCard.css';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import RentalCarousel from './RentalCarousel';
import JSLogo from '../jslogo.png'

const RentalCard = ({ rental }) => {
  const {
    images,
    title,
    description,
    cost,
    phone,
  } = rental;

  const {
    city,
    state,
    address,
    suite,
    zip
  } = rental.location

  const [show, setShow] = useState(false);

  const addressDisplay = suite ?
    address + ", Suite " + suite + ", " + city + ", " + state + " " + zip :
    address + ", " + city + ", " + state + " " + zip;

  return (
    <div>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="rental-card-modal-styling-title"
        size="xl"
      >
        <Modal.Header closeButton>
          <img className='logo-shrink' src={JSLogo} />
          <h3> {title} - ${cost}/Month </h3>
        </Modal.Header>
        <Modal.Body>
        {/* move this to css file. */}
          <div style={{display: 'flex',justifyContent: 'center'}}> 
            <RentalCarousel images={images} />
          </div>
        </Modal.Body>
        <Modal.Body className='overflow-body'>
          <p>
            Location: {addressDisplay}
          </p>
          <p>
            {description} 

          </p>
        </Modal.Body>
        <Modal.Footer>
          <b> Contact Us: {phone} </b>
        </Modal.Footer>
      </Modal>

      <Card
        className="dib br3 pa3 ma2 grow bw2 shadow-3 tc card-adjust"
        style={{ width: '18rem' }}
        onClick={() => setShow(true)}
      >
        <Card.Img variant="top" src={images[0]} />
        <Card.Body>
          <Card.Text>
            <h3> {title} </h3>
            <p> Cost: ${cost}/Mo </p>
            <p> Location: {city}, {state} </p>
            <i>Click For More Information.</i>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default RentalCard;