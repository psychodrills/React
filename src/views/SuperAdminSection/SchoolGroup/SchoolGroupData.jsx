import React from 'react'
import School from '../../../lib/api/Schools/School';
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Fade,
    Form,
    FormGroup,
    Input,
    Label,
    Row,
} from 'reactstrap';
import SimpleReactValidator from 'simple-react-validator';
import { CountryDropdown } from 'react-country-region-selector';

export default class SchoolGroupData extends React.Component {
    constructor(props) {
        super(props)
        this.school = new School()
        this.validator = new SimpleReactValidator();
        this.state = {
            isEditMode: false,
            userId: this.props.match.params.Id,
            schoolGroup: {
                id: '',
                group_name: '',
                group_domain_name: '',
                first_name: '',
                middle_name: '',
                last_name: '',
                email: '',
                phone_number: '',
                address: '',
                city: '',
                postal_code: '',
                country: ''
            },
            fadeIn: true,
            timeout: 300,
        };
        this.handleChange = this.handleChange.bind(this);
        this.update_country = this.update_country.bind(this);
    }
    handleChange(evt) {
        this.setstate.schoolGroup[evt.target.name] = evt.target.value
    }

    update_country(val) {
        this.setstate.schoolGroup.country = val
    }
    editMode() {
        this.setState({
            isEditMode: true
        })
    }
    submitForm() {
        console.log('updated')
    }

    componentDidMount() {
        this.school.fetch_school_groups().then(data => {
            for (let i = 0; i < data.data.result_data.school_groups.length; i++) {
                if (data.data.result_data.school_groups[i].id === this.state.userId) {
                    this.setState({
                        schoolGroup: data.data.result_data.school_groups[i]
                    })
                }
            }
            console.log(this.state.schoolGroup, 'imp')
        })
    }
    render() {
        if (this.state.isEditMode === false) {
            return (
                <div className="animated fadeIn shadow-lg">
                    <Row>
                        <Col xs="12">
                            <Fade timeout={this.state.timeout} in={this.state.fadeIn}>
                                <Card>
                                    <CardHeader>
                                        School Group Details
                                        <div className="card-header-actions">
                                            <Button color="link" className="card-header-action btn-minimize"
                                                onClick={e => this.editMode(e)}><i className="fa fa-edit"></i></Button>
                                        </div>
                                    </CardHeader>
                                    <CardBody>
                                        <Form className="form-horizontal">
                                            <FormGroup className="mb-0">
                                                <Label htmlFor="company">Instituation Group Name</Label>
                                                <Input disabled
                                                    value={this.state.schoolGroup.group_name}
                                                />
                                            </FormGroup>
                                            <FormGroup row className="my-0 mt-2">
                                                <Col>
                                                    <FormGroup className="mb-0 float-left w-100">
                                                        <Label htmlFor="city">Type your group domain name</Label>
                                                        <div>
                                                            <Input disabled
                                                                className="w-px-300 float-left"
                                                                value={this.state.schoolGroup.group_domain_name}
                                                            />
                                                            <span className="w-px-200 float-left mt-3">.admin.psychodrills.com</span>
                                                        </div>
                                                    </FormGroup>
                                                </Col>
                                            </FormGroup>
                                            <FormGroup className="mb-0">
                                                <Label htmlFor="street">Address</Label>
                                                <Input disabled
                                                    value={this.state.schoolGroup.address}
                                                />
                                            </FormGroup>
                                            <FormGroup row className="my-0 mt-2">
                                                <Col xs="4">
                                                    <FormGroup>
                                                        <Label htmlFor="city">City</Label>
                                                        <Input disabled
                                                            value={this.state.schoolGroup.city}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col xs="4">
                                                    <FormGroup className="mb-0">
                                                        <Label htmlFor="postal-code">Postal Code</Label>
                                                        <Input disabled
                                                            value={this.state.schoolGroup.postal_code}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col xs="4">
                                                    <FormGroup className="mb-0">
                                                        <Label htmlFor="postal-code">Country</Label>
                                                        <Input disabled
                                                            value={this.state.schoolGroup.country}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </FormGroup>
                                        </Form>
                                        <Form className="form-horizontal">
                                            <FormGroup row className="my-0 mt-2">
                                                <Col xs="4">
                                                    <FormGroup className="mb-0">
                                                        <Label htmlFor="firstName">First Name</Label>
                                                        <Input disabled
                                                            value={this.state.schoolGroup.first_name}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col xs="4">
                                                    <FormGroup className="mb-0">
                                                        <Label htmlFor="postal-code">Middle Name</Label>
                                                        <Input disabled
                                                            value={this.state.schoolGroup.middle_name}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col xs="4">
                                                    <FormGroup className="mb-0">
                                                        <Label htmlFor="postal-code">Last Name</Label>
                                                        <Input disabled
                                                            value={this.state.schoolGroup.last_name}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </FormGroup>
                                            <FormGroup row className="my-0 mt-2">
                                                <Col xs="6">
                                                    <FormGroup className="mb-0">
                                                        <Label htmlFor="city">Email</Label>
                                                        <Input disabled
                                                            value={this.state.schoolGroup.email}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col xs="6">
                                                    <FormGroup className="mb-0">
                                                        <Label htmlFor="postal-code">Phone number</Label>
                                                        <Input disabled
                                                            value={this.state.schoolGroup.phone_number}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </FormGroup>
                                        </Form>
                                    </CardBody>
                                </Card>
                            </Fade>
                        </Col>
                    </Row>
                </div>
            )
        }
        else {
            return (
                <div className="animated fadeIn shadow-lg">
                    <Row>
                        <Col xs="12">
                            <Fade timeout={this.state.timeout} in={this.state.fadeIn}>
                                <Card>
                                    <CardHeader>
                                        Edit School Group Details
                                    </CardHeader>
                                    <CardBody>
                                        <Form className="form-horizontal">
                                            <FormGroup className="mb-0">
                                                <Label htmlFor="company">Instituation Group Name</Label>
                                                <Input
                                                    placeholder="Enter your Instituation Group Name"
                                                    name={'group_name'}
                                                    value={this.state.schoolGroup.group_name}
                                                    onChange={e => this.handleChange(e)}
                                                />
                                            </FormGroup>
                                            <span className="text-danger">
                                                {this.validator.message('group_name', this.state.schoolGroup.group_name, 'required|alpha_space')}
                                            </span>
                                            <FormGroup row className="my-0 mt-2">
                                                <Col>
                                                    <FormGroup className="mb-0 float-left w-100">
                                                        <Label htmlFor="city">Type your group domain name</Label>
                                                        <div>
                                                            <Input
                                                                className="w-px-300 float-left"
                                                                value={this.state.schoolGroup.group_domain_name}
                                                                placeholder="Enter your group domain name"
                                                                name={'group_domain_name'}
                                                                onChange={e => this.handleChange(e)}
                                                            />
                                                            <span className="w-px-200 float-left mt-3">.admin.psychodrills.com</span>
                                                        </div>
                                                    </FormGroup>
                                                    <span className="text-danger">
                                                        {this.validator.message('group_domain_name', this.state.schoolGroup.group_domain_name, 'required|alpha_space')}
                                                    </span>
                                                </Col>
                                            </FormGroup>
                                            <FormGroup className="mb-0">
                                                <Label htmlFor="street">Address</Label>
                                                <Input
                                                    placeholder="Enter your address"
                                                    value={this.state.schoolGroup.address}
                                                    name={'address'}
                                                    onChange={e => this.handleChange(e)}
                                                />
                                            </FormGroup>
                                            <span className="text-danger">
                                                {this.validator.message('address', this.state.schoolGroup.address, 'required')}
                                            </span>
                                            <FormGroup row className="my-0 mt-2">
                                                <Col xs="4">
                                                    <FormGroup>
                                                        <Label htmlFor="city">City</Label>
                                                        <Input
                                                            placeholder="Enter your city"
                                                            value={this.state.schoolGroup.city}
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
                                                            value={this.state.schoolGroup.postal_code}
                                                            name={'postal_code'}
                                                            onChange={e => this.handleChange(e)}
                                                        />
                                                    </FormGroup>
                                                    <span className="text-danger">
                                                        {this.validator.message('postal_code', this.state.schoolGroup.postal_code, 'required')}
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
                                                        {this.validator.message('country', this.state.schoolGroup.country, 'required')}
                                                    </span>
                                                </Col>
                                            </FormGroup>
                                        </Form>
                                        <Form className="form-horizontal">
                                            <FormGroup row className="my-0 mt-2">
                                                <Col xs="4">
                                                    <FormGroup className="mb-0">
                                                        <Label htmlFor="postal-code">First Name</Label>
                                                        <Input
                                                            placeholder="first name"
                                                            value={this.state.schoolGroup.first_name}
                                                            name={'first_name'}
                                                            onChange={e => this.handleChange(e)}
                                                        />
                                                    </FormGroup>
                                                    <span className="text-danger">
                                                        {this.validator.message('first_name', this.state.schoolGroup.first_name, 'required|alpha_space')}
                                                    </span>
                                                </Col>
                                                <Col xs="4">
                                                    <FormGroup className="mb-0">
                                                        <Label htmlFor="postal-code">Middle Name</Label>
                                                        <Input
                                                            placeholder="middle name"
                                                            value={this.state.schoolGroup.middle_name}
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
                                                            value={this.state.schoolGroup.last_name}
                                                            name={'last_name'}
                                                            onChange={e => this.handleChange(e)}
                                                        />
                                                    </FormGroup>
                                                    <span className="text-danger">
                                                        {this.validator.message('last_name', this.state.schoolGroup.last_name, 'required|alpha_space')}
                                                    </span>
                                                </Col>
                                            </FormGroup>
                                            <FormGroup row className="my-0 mt-2">
                                                <Col xs="6">
                                                    <FormGroup className="mb-0">
                                                        <Label htmlFor="city">Email</Label>
                                                        <Input
                                                            placeholder="Enter your Email"
                                                            value={this.state.schoolGroup.email}
                                                            name={'email'}
                                                            onChange={e => this.handleChange(e)}
                                                        />
                                                    </FormGroup>
                                                    <span className="text-danger">
                                                        {this.validator.message('email', this.state.schoolGroup.email, 'required|email')}
                                                    </span>
                                                </Col>
                                                <Col xs="6">
                                                    <FormGroup className="mb-0">
                                                        <Label htmlFor="postal-code">Phone number</Label>
                                                        <Input
                                                            placeholder="Enter your phone number"
                                                            value={this.state.schoolGroup.phone_number}
                                                            name={'phone_number'}
                                                            onChange={e => this.handleChange(e)}
                                                        />
                                                    </FormGroup>
                                                    <span className="text-danger">
                                                        {this.validator.message('phone_number', this.state.schoolGroup.phone_number, 'required|phone')}
                                                    </span>
                                                </Col>
                                            </FormGroup>
                                        </Form>
                                    </CardBody>
                                </Card>
                                <div className="form-actions">
                                    <Button
                                        className="ml-2"
                                        // type="submit"
                                        color="primary"
                                        onClick={e => this.submitForm()}
                                    >Update School Group</Button>
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
            )
        }
    }
}