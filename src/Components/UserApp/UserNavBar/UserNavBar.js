import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { LinkContainer } from "react-router-bootstrap";
import { Button } from "react-bootstrap";

function UserNavBar(props) {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>KFIT</Navbar.Brand>
          </LinkContainer>
          <Nav className="me-auto">
            {props.UserPageList.map((page) => {
              return (
                <div key={page.key} >
                <LinkContainer to={page.path}>
                  <Nav.Item>
                    <Nav.Link eventKey={page.key}>{page.Title}</Nav.Link>
                  </Nav.Item>
                </LinkContainer>
                </div>
              );
            })}
          </Nav>
          <Form className="mx-3">
            <Button variant="outline-secondary" onClick={props.signOut}>
              Sign Out
            </Button>
          </Form>
        </Container>
      </Navbar>
    </div>
  );
}

export default UserNavBar;