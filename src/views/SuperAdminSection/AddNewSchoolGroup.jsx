import React from 'react'
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Collapse,
  Fade,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from 'reactstrap';
import { CountryDropdown } from 'react-country-region-selector';

import SimpleReactValidator from 'simple-react-validator';
import School from "../../lib/api/Schools/School";

class AddNewSchoolGroup extends React.Component{

  constructor(props) {
    super(props);
    this.validator = new SimpleReactValidator();
    this.school = new School()
    this.schoolGroup = {
        group_name: '',
        head_of_the_group: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        postal_code: '',
        country: ''
    }
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      status: false
    };
    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.update_country = this.update_country.bind(this);
  }

  handleChange(evt) {
    this.schoolGroup[evt.target.name] = evt.target.value
  }

  update_country(val){
    this.schoolGroup.country = val
  }

  submitForm(){
    if (this.validator.allValid()) {
      this.school.create_school_group(this.schoolGroup).then(data => {
        if (data.data.request_status){
          this.setState({
            status: true
          })
        }
      })
    } else {
      this.validator.showMessages();
      // rerender to show messages for the first time
      // you can use the autoForceUpdate option to do this automatically`
      this.forceUpdate();
    }
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    if (this.state.status){
      return <AddNewSchoolGroup/>
    } else {
      return (
        <div className="animated fadeIn shadow-lg">
          <Row>
            <Col xs="12">
              <Fade timeout={this.state.timeout} in={this.state.fadeIn}>
                <Card>
                  <CardHeader>
                    <i className="fa fa-edit"></i>School Group Details
                    <div className="card-header-actions">
                      <Button color="link" className="card-header-action btn-minimize" data-target="#collapseExample"
                              onClick={this.toggle}><i className="icon-arrow-up"></i></Button>
                    </div>
                  </CardHeader>
                  <Collapse isOpen={this.state.collapse} id="collapseExample">
                    <CardBody>
                      <Form className="form-horizontal">
                        <FormGroup className="mb-0">
                          <Label htmlFor="company">Instituation Group Name</Label>
                          <Input
                            placeholder="Enter your Instituation Group Name"
                            name={'group_name'}
                            onChange={e => this.handleChange(e)}
                          />
                        </FormGroup>
                        <span className="text-danger">
                          {this.validator.message('group_name', this.schoolGroup.group_name, 'required|alpha_space')}
                        </span>
                        <FormGroup row className="my-0 mt-2">
                          <Col xs="6">
                            <FormGroup className="mb-0">
                              <Label htmlFor="postal-code">Head of Group of Instituation</Label>
                              <Input
                                placeholder="e.g (Jhon, etc...)"
                                name={'head_of_the_group'}
                                onChange={e => this.handleChange(e)}
                              />
                            </FormGroup>
                            <span className="text-danger">
                              {this.validator.message('head_of_the_group', this.schoolGroup.head_of_the_group, 'required|alpha_space')}
                            </span>
                          </Col>
                          <Col>
                            <FormGroup className="mb-0">
                              <Label htmlFor="city">Type your group domain name</Label>
                              <div>
                                <Input
                                  className="w-px-300 float-left"
                                  placeholder="Enter your group domain name"
                                  name={'group_domain_name'}
                                  onChange={e => this.handleChange(e)}
                                />
                                <span className="w-px-200 float-left mt-3">.admin.psychodrills.com</span>
                              </div>
                            </FormGroup>
                            <span className="text-danger">
                              {this.validator.message('group_domain_name', this.schoolGroup.group_domain_name, 'required|alpha_space')}
                            </span>
                          </Col>
                        </FormGroup>
                        <FormGroup row className="my-0 mt-2">
                          <Col xs="6">
                            <FormGroup className="mb-0">
                              <Label htmlFor="city">Email</Label>
                              <Input
                                placeholder="Enter your Email"
                                name={'email'}
                                onChange={e => this.handleChange(e)}
                              />
                            </FormGroup>
                            <span className="text-danger">
                              {this.validator.message('email', this.schoolGroup.email, 'required|email')}
                            </span>
                          </Col>
                          <Col xs="6">
                            <FormGroup className="mb-0">
                              <Label htmlFor="postal-code">Phone number</Label>
                              <Input
                                placeholder="Enter your phone number"
                                name={'phone'}
                                onChange={e => this.handleChange(e)}
                              />
                            </FormGroup>
                            <span className="text-danger">
                              {this.validator.message('phone', this.schoolGroup.phone, 'required|phone')}
                            </span>
                          </Col>
                        </FormGroup>
                        <FormGroup className="mb-0">
                          <Label htmlFor="street">Address</Label>
                          <Input
                            placeholder="Enter your address"
                            name={'address'}
                            onChange={e => this.handleChange(e)}
                          />
                        </FormGroup>
                        <span className="text-danger">
                          {this.validator.message('address', this.schoolGroup.address, 'required')}
                        </span>
                        <FormGroup row className="my-0 mt-2">
                          <Col xs="4">
                            <FormGroup>
                              <Label htmlFor="city">City</Label>
                              <Input
                                placeholder="Enter your city"
                                name={'city'}
                                onChange={e => this.handleChange(e)}
                              />
                            </FormGroup>
                          </Col>
                          <Col xs="4">
                            <FormGroup className="mb-0">
                              <Label htmlFor="postal-code">Postal Code</Label>
                              <Input
                                placeholder="Postal Code"
                                name={'postal_code'}
                                onChange={e => this.handleChange(e)}
                              />
                            </FormGroup>
                            <span className="text-danger">
                              {this.validator.message('postal_code', this.schoolGroup.postal_code, 'required')}
                            </span>
                          </Col>
                          <Col xs="4">
                            <FormGroup className="mb-0">
                              <Label htmlFor="postal-code">Country</Label>
                              <CountryDropdown className="form-control"
                                               name="country"
                                               onChange={(val) => this.update_country(val)}
                              >
                              </CountryDropdown>
                            </FormGroup>
                            <span className="text-danger">
                              {this.validator.message('country', this.schoolGroup.country, 'required')}
                            </span>
                          </Col>
                        </FormGroup>
                        <div className="form-actions">
                          <Button
                            className="ml-2"
                            // type="submit"
                            color="primary"
                            onClick={e => this.submitForm()}
                          >Create School Group</Button>
                          <Button
                            className="ml-2"
                            color="secondary"
                            onClick={e => this.props.history.push("/sadashboard")}
                          >Cancel</Button>
                        </div>
                      </Form>
                    </CardBody>
                  </Collapse>
                </Card>
              </Fade>
            </Col>
          </Row>
        </div>
      );
    }
  }
}

export default AddNewSchoolGroup
