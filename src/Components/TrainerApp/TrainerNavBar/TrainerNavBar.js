import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { LinkContainer } from "react-router-bootstrap";
import { Button } from "react-bootstrap";

function TrainerNavBar(props) {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>KFIT</Navbar.Brand>
          </LinkContainer>
          <Nav className="me-auto">
            {props.TrainerPageList.map((page) => {
              return (
                <LinkContainer to={page.path}>
                  <Nav.Item>
                    <Nav.Link eventKey={page.key}>{page.Title}</Nav.Link>
                  </Nav.Item>
                </LinkContainer>
              );
            })}
          </Nav>
          <Form inline className="mx-3">
            <Button variant="outline-secondary" onClick={props.signOut}>
              Sign Out
            </Button>
          </Form>
        </Container>
      </Navbar>
    </>
  );
}

export default TrainerNavBar;
