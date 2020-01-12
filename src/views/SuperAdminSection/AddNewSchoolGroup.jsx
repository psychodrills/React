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
        first_name: '',
        middle_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        address: '',
        city: '',
        postal_code: '',
        country: ''
    }
    this.state = {
      collapse_school_group: true,
      collapse_school_owner_details: true,
      fadeIn: true,
      timeout: 300,
      status: false
    };
    this.toggleSchoolGroupDetails = this.toggleSchoolGroupDetails.bind(this);
    this.toggleSchoolOwnerDetails = this.toggleSchoolOwnerDetails.bind(this);
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

  toggleSchoolGroupDetails(e) {
    this.setState({ [e.target.name]: !this.state.collapse_school_group });
  }

  toggleSchoolOwnerDetails(e) {
    this.setState({ [e.target.name]: !this.state.collapse_school_owner_details });
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
                      <Button color="link" className="card-header-action btn-minimize" data-target="#collapseSchoolGroup"
                              name="collapse_school_group"
                              onClick={e => this.toggleSchoolGroupDetails(e)}><i className="icon-arrow-up"></i></Button>
                    </div>
                  </CardHeader>
                  <Collapse isOpen={this.state.collapse_school_group} id="collapseSchoolGroup">
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
                          <Col>
                            <FormGroup className="mb-0 float-left w-100">
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
                      </Form>
                    </CardBody>
                  </Collapse>
                </Card>
              </Fade>
            </Col>

            <Col xs="12">
              <Fade timeout={this.state.timeout} in={this.state.fadeIn}>
                <Card>
                  <CardHeader>
                    <i className="fa fa-edit"></i>School Group Details
                    <div className="card-header-actions">
                      <Button color="link" className="card-header-action btn-minimize" data-target="#collapseOwnerDetails"
                              name="collapse_school_owner_details"
                              onClick={e => this.toggleSchoolOwnerDetails(e)}><i className="icon-arrow-up"></i></Button>
                    </div>
                  </CardHeader>
                  <Collapse isOpen={this.state.collapse_school_owner_details} id="collapseOwnerDetails">
                    <CardBody>
                      <Form className="form-horizontal">
                        <FormGroup row className="my-0 mt-2">
                          <Col xs="4">
                            <FormGroup className="mb-0">
                              <Label htmlFor="postal-code">First Name</Label>
                              <Input
                                placeholder="first name"
                                name={'first_name'}
                                onChange={e => this.handleChange(e)}
                              />
                            </FormGroup>
                            <span className="text-danger">
                              {this.validator.message('first_name', this.schoolGroup.first_name, 'required|alpha_space')}
                            </span>
                          </Col>
                          <Col xs="4">
                            <FormGroup className="mb-0">
                              <Label htmlFor="postal-code">Middle Name</Label>
                              <Input
                                placeholder="middle name"
                                name={'middle_name'}
                                onChange={e => this.handleChange(e)}
                              />
                            </FormGroup>
                          </Col>
                          <Col xs="4">
                            <FormGroup className="mb-0">
                              <Label htmlFor="postal-code">Last Name</Label>
                              <Input
                                placeholder="last name"
                                name={'last_name'}
                                onChange={e => this.handleChange(e)}
                              />
                            </FormGroup>
                            <span className="text-danger">
                              {this.validator.message('last_name', this.schoolGroup.last_name, 'required|alpha_space')}
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
                                name={'phone_number'}
                                onChange={e => this.handleChange(e)}
                              />
                            </FormGroup>
                            <span className="text-danger">
                              {this.validator.message('phone_number', this.schoolGroup.phone_number, 'required|phone')}
                            </span>
                          </Col>
                        </FormGroup>
                      </Form>
                    </CardBody>
                  </Collapse>
                </Card>
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
              </Fade>
            </Col>
          </Row>
        </div>
      );
    }
  }
}

export default AddNewSchoolGroup
