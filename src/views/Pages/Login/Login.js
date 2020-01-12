import React, { Component } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row
} from 'reactstrap';
import SimpleReactValidator from 'simple-react-validator';
import UserAuthentication from "../../../lib/api/Authentication/Auth";

class Login extends Component {
  constructor(props) {
    super(props)
    this.validator = new SimpleReactValidator();
    this.auth = new UserAuthentication();
    this.state = {
        email: '',
        password: '',
        status: false
    }
  }

  handleChange(evt) {
    this.setState({
        [evt.target.name]: evt.target.value
    })
  }

  submitForm() {
    if (this.validator.allValid()) {
        this.auth.login(this.state).then(data => {
            if (data.data.request_status){
                this.props.history.push("/dashboard")
            }
        })
    } else {
        this.validator.showMessages();
        // rerender to show messages for the first time
        // you can use the autoForceUpdate option to do this automatically`
        this.forceUpdate();
    }
  }

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="5">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-2">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="UserName or Email"
                          type="email"
                          name="email"
                          onChange={evt => this.handleChange(evt)}
                        />
                      </InputGroup>
                      <span className="text-danger f-size-10">
                          {this.validator.message('email', this.state.email, 'required|email')}
                      </span>
                      <InputGroup className="mb-2">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Password"
                          type="password"
                          autoComplete="on"
                          name="password"
                          onChange={evt => this.handleChange(evt)}
                        />
                      </InputGroup>
                      <span className="text-danger f-size-10">
                          {this.validator.message('password', this.state.password, 'required')}
                      </span>
                      <Row>
                        <Col xs="6">
                          <Button
                            className="px-4"
                            color="primary"
                            type="button"
                            onClick={e => this.submitForm()}
                          >
                            Sign in
                          </Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Forgot password?</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
