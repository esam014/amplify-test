import React from 'react';
import { Badge, Col, Container, Stack, Row } from 'react-bootstrap';

const Progress = props => {
  
  return (
    <React.Fragment>

      <Stack  direction="horizontal">
        <Col>
          <div className={` ms-auto ${props.step === 1 ? 'text-dark' :'text-secondary'}`}><Badge pill bg={`${props.step === 1 ? 'dark' :'secondary'}`} >1</Badge> Step 1</div>
        </Col>
        <div className='vr' />
        <Col>
          <div className={` ms-auto ${props.step === 2 ? 'text-dark' :'text-secondary'}`}><Badge pill bg={`${props.step === 2 ? 'dark' :'secondary'}`}>2</Badge> Step 2</div>
          </Col>
        <div className='vr' />
        <Col>
          <div className={` ms-auto ${props.step === 3 ? 'text-dark' :'text-secondary'}`}><Badge pill bg={`${props.step === 3 ? 'dark' :'secondary'}`}>3</Badge> Step 3</div>
          </Col>
      </Stack>

    </React.Fragment>
  );
};

export default Progress;
