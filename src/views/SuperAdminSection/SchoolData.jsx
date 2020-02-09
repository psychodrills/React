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
import SimpleReactValidator from 'simple-react-validator';
import Select from 'react-select';

class SchoolData extends React.Component {
    constructor(props) {
        super(props);
        this.validator = new SimpleReactValidator();
        this.schoolData = {
            school_name: '',
            address: '',
            phone_number: '',
            school_email: '',
            date: '',
            date_seperator: '',
            language: '',
            time_zone: '',
            country: '',
            currrency_code: '',
            currency_symbol: '',
            precision_count: '',
            theme_color: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(evt) {
        this.schoolData[evt.target.name] = evt.target.value
    }
    submitForm() {
        if (this.validator.allValid()) {
            alert('Submitted Successfully')
        }
        else {
            this.validator.showMessages();
            // rerender to show messages for the first time
            // you can use the autoForceUpdate option to do this automatically`
            this.forceUpdate()
        }
    }
    render() {
        return (
            <div className="animated fadeIn shadow-lg">
                <Row>
                    <Col xs="12">
                        <Fade>
                            <Card>
                                <CardHeader>
                                    School Data
                            </CardHeader>
                                <CardBody>
                                    <Form className="form-horizontal">
                                        <FormGroup className="mb-0">
                                            <Label htmlFor="company">School Name</Label>
                                            <Input
                                                placeholder="Enter your School Name"
                                                name={'school_name'}
                                                onChange={e => this.handleChange(e)}
                                            />
                                        </FormGroup>
                                        <span className="text-danger">
                                            {this.validator.message('school_name', this.schoolData.school_name, 'required|alpha_space')}
                                        </span>
                                        <FormGroup className="mb-0">
                                            <Label htmlFor="street">Address</Label>
                                            <Input placeholder="Enter your School Address" name={'address'} onChange={e => this.handleChange(e)} />
                                        </FormGroup>
                                        <span className="text-danger">
                                            {this.validator.message('address', this.schoolData.address, 'required|alpha_space')}
                                        </span>
                                        <FormGroup row className="my-0 mt-2">
                                            <Col xs="6">
                                                <FormGroup>
                                                    <Label htmlFor="mobile">Phone</Label>
                                                    <Input placeholder="Enter your Mobile No" name={'phone_number'} onChange={e => this.handleChange(e)} />
                                                </FormGroup>
                                                <span className="text-danger">
                                                    {this.validator.message('phone', this.schoolData.phone_number, 'required|phone')}
                                                </span>
                                            </Col>
                                            <Col xs="6">
                                                <FormGroup>
                                                    <Label htmlFor="email">Email</Label>
                                                    <Input placeholder="Enter your Email" name={'school_email'} onChange={e => this.handleChange(e)} />
                                                </FormGroup>
                                                <span className="text-danger">
                                                    {this.validator.message('email', this.schoolData.school_email, 'required|email')}
                                                </span>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row className="my-0 mt-2">
                                            <Col xs="4">
                                                <FormGroup>
                                                    <Label htmlFor="date">Date</Label>
                                                    <Input placeholder="Select your Date" name={'date'} onChange={e => this.handleChange(e)} />
                                                </FormGroup>
                                                <span className="text-danger">
                                                    {this.validator.message('date', this.schoolData.date, 'required|date')}
                                                </span>
                                            </Col>
                                            <Col xs="4">
                                                <FormGroup>
                                                    <Label htmlFor="date">Date Seperator</Label>
                                                    <Input placeholder="Select your Date Seperator" name={'date_seperator'} onChange={e => this.handleChange(e)} />
                                                </FormGroup>
                                                <span className="text-danger">
                                                    {this.validator.message('date', this.schoolData.date_seperator, 'required|date')}
                                                </span>
                                            </Col>
                                            <Col xs="4">
                                                <FormGroup>
                                                    <Label htmlFor="language">Language</Label>
                                                    <Select value={'language'} onChange={e => this.handleChange(e)}>
                                                        <option>English</option>
                                                    </Select>
                                                </FormGroup>
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
                                >Create School Data</Button>
                            </div>
                        </Fade>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default SchoolData
