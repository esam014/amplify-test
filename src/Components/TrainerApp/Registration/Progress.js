import React from 'react';
import { Badge, Col, Container, Stack, Row } from 'react-bootstrap';

const Progress = () => {
  return (
    <React.Fragment>

      <Stack  direction="horizontal">
        <Col>
          <div className='ms-auto'><Badge pill bg='dark' >1</Badge> Step 1</div>
        </Col>
        <div className='vr' />
        <Col>
          <div className='ms-auto'><Badge pill bg='dark' >2</Badge> Step 2</div>
          </Col>
        <div className='vr' />
        <Col>
          <div className='ms-auto'><Badge pill bg='dark' >3</Badge> Step 3</div>
          </Col>
      </Stack>

    </React.Fragment>
  );
};

export default Progress;
