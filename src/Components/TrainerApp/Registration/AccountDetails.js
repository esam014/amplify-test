import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import './AccountDetails.css';

const Handlers = (props) => {
  const back = (e) => {
    // e.preventDefault();
    props.prevStep();
  }
  
  const fakeCheckout = (props) => {
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Fake Checkout</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Fake Chekcout Strip integration</p>
      </Modal.Body>
      <Modal.Footer>
        </Modal.Footer>
    </Modal.Dialog>
  }
  const saveAndContinue = (e) => {
    // e.preventDefault();
    props.nextStep();
  };
return(
  <Row>
    <Col>
<button id="checkout-and-portal-button" type="submit" onClick={(event) => back({event, props})}>
  Back
</button>
</Col>
<Col>
<p id="checkout-and-portal-button">
  Checkout
</p>
</Col>
<Col>
<button id="checkout-and-portal-button" type="submit" onClick={(event) => saveAndContinue({event, props})}>
  Next
</button>
</Col>
</Row>
)
};


const ProductDisplay = (props) => (
  <Container className="uniqueBody">
    <section id="uniqueSection">
      <div className="product">
        <Logo />
        <div className="description">
          <h3 id="specialh3">Starter plan</h3>
          <h5 id="specialh5">$20.00 / month</h5>
        </div>
      </div>
      <form >
        {/* Add a hidden field with the lookup_key of your Price */}
        {/* <input type="hidden" name="lookup_key" value="{{PRICE_LOOKUP_KEY}}" /> */}
        {/* <button id="checkout-and-portal-button" type="submit" onClick={(event) => saveAndContinue({event, props})}>
          Checkout
        </button> */}
        <Handlers 
              nextStep={props.nextStep}
              prevStep={props.prevStep}
              handleChange={props.handleChange}
              inputValues={props.inputValues}
              />
      </form>
    </section>
  </Container>
);

const SuccessDisplay = ({ sessionId }) => {
  return (
    <section id="uniqueSection">
      <div className="product Box-root">
        <Logo />
        <div className="description Box-root">
          <h3 id="specialh3">Subscription to starter plan successful!</h3>
        </div>
      </div>
      <form action="/create-portal-session" method="POST">
        <input
          type="hidden"
          id="session-id"
          name="session_id"
          value={sessionId}
        />
        <button id="checkout-and-portal-button" type="submit">
          Manage your billing information
        </button>
      </form>
    </section>
  );
};

const Message = ({ message }) => (
  <section id="specialSection">
    <p id="specialP">{message}</p>
  </section>
);

export default function AccountDetails(props) {
  let [message, setMessage] = useState('');
  let [success, setSuccess] = useState(false);
  let [sessionId, setSessionId] = useState('');

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get('success')) {
      setSuccess(true);
      setSessionId(query.get('session_id'));
    }

    if (query.get('canceled')) {
      setSuccess(false);
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, [sessionId]);

  if (!success && message === '') {
    return <ProductDisplay
      nextStep={props.nextStep}
      prevStep={props.prevStep}
      handleChange={props.handleChange}
      inputValues={props.inputValues}
    />;
  } else if (success && sessionId !== '') {
    return <SuccessDisplay sessionId={sessionId} />;
  } else {
    return <Message message={message} />;
  }
}

const Logo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="14px"
    height="16px"
    viewBox="0 0 14 16"
    version="1.1"
  >
    <defs />
    <g id="Flow" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g
        id="0-Default"
        transform="translate(-121.000000, -40.000000)"
        fill="#E184DF"
      >
        <path
          d="M127,50 L126,50 C123.238576,50 121,47.7614237 121,45 C121,42.2385763 123.238576,40 126,40 L135,40 L135,56 L133,56 L133,42 L129,42 L129,56 L127,56 L127,50 Z M127,48 L127,42 L126,42 C124.343146,42 123,43.3431458 123,45 C123,46.6568542 124.343146,48 126,48 L127,48 Z"
          id="Pilcrow"
        />
      </g>
    </g>
  </svg>
);