import React from 'react'
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    // Collapse,
    Fade,
    Form,
    FormGroup,
    Input,
    Label,
    Row,
} from 'reactstrap';
import SimpleReactValidator from 'simple-react-validator';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimezonePicker from 'react-timezone';
import { CountryDropdown } from 'react-country-region-selector';
import SelectCurrency from 'react-select-currency'
import { ChromePicker } from 'react-color'
// const onSelectedCurrency = currencyAbbrev => {
//     debug(`Selected ${currencyAbbrev}`)
// }
class SchoolData extends React.Component {
    constructor(props) {
        super(props);
        this.validator = new SimpleReactValidator();
        this.schoolData = {
            school_name: '',
            address: '',
            phone_number: '',
            school_email: '',
            dates: new Date(),
            date_seperator: '',
            language: '',
            time_zone: '',
            country: '',
            currrency_code: '',
            currency_symbol: '',
            precision_count: '',
            theme_color: ''
        };
        this.state = {
            displayColorPicker: false,
            languages: [],
            startDate: new Date()
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(evt) {
        console.log(evt)
        // this.schoolData[evt.target.name] = evt.target.value
    }
    update_country(val) {
        this.schoolData.country = val
    }
    settimezone(val) {
        this.schoolData.time_zone = val
    }
    handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
    };

    handleClose = () => {
        this.setState({ displayColorPicker: false })
    };
    submitForm() {
        console.log(this.schoolData)
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
        // const popover = {
        //     position: 'absolute',
        //     zIndex: '2',
        // }
        // const cover = {
        //     position: 'fixed',
        //     top: '0px',
        //     right: '0px',
        //     bottom: '0px',
        //     left: '0px',
        // }
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
                                                    <Label htmlFor="date">Date</Label><br></br>
                                                    {/* <Input placeholder="Select your Date" name={'date'} onChange={e => this.handleChange(e)} DatePicker /> */}
                                                    <DatePicker name={'dates'} className="form-control"/>
                                                </FormGroup>
                                                <span className="text-danger">
                                                    {this.validator.message('date', this.schoolData.date, 'required|date')}
                                                </span>
                                            </Col>
                                            <Col xs="4">
                                                <FormGroup>
                                                    <Label htmlFor="date">Date Seperator</Label>
                                                    <select className="form-control" name={'date_seperator'} onChange={e => this.handleChange(e)}>
                                                        <option>--Choose--</option>
                                                        <option>-</option>
                                                        <option>/</option>
                                                    </select>
                                                </FormGroup>
                                            </Col>
                                            <Col xs="4">
                                                <FormGroup>
                                                    <Label htmlFor="language">Language</Label>
                                                    <select className="form-control" name={'language'} onChange={e => this.handleChange(e)}>
                                                        <option>--Choose--</option>
                                                        <option >English</option>
                                                        <option >Arabic</option>
                                                        <option >Spanish</option>
                                                        <option >French</option>
                                                    </select>
                                                </FormGroup>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row className="my-0 mt-2">
                                            <Col xs="4">
                                                <FormGroup className="mb-0">
                                                    <Label htmlFor="time-zone">Timezone</Label><br></br>
                                                    <TimezonePicker name={'time_zone'}
                                                        onChange={e => this.settimezone(e)}
                                                    ></TimezonePicker>
                                                </FormGroup>
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
                                            </Col>
                                            <Col xs="4">
                                                <FormGroup className="mb-0">
                                                    <Label htmlFor="currncy-symbol">Currency Code</Label>
                                                    <SelectCurrency value={'USD'} />
                                                </FormGroup>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row className="my-0 mt-2">
                                            <Col xs="4">
                                                <FormGroup>
                                                    <Label htmlFor="currency_symbol">Currency Symbol</Label>
                                                    <select className="form-control" name={'currrency_code'} onChange={e => this.handleChange(e)}>
                                                        <option>--Choose--</option>
                                                        <option>{'\u0024'}</option>
                                                        <option>{'\u00A2'}</option>
                                                        <option>{'\u00A3'}</option>
                                                        <option>{'\u00A5'}</option>
                                                        <option>{'\u20A0'}</option>
                                                        <option>{'\u20B9'}</option>
                                                    </select>
                                                </FormGroup>
                                            </Col>
                                            <Col xs="4">
                                                <FormGroup>
                                                    <Label htmlFor="precision_count">Precision Count</Label>
                                                    <select className="form-control" name={'precision_count'} onChange={e => this.handleChange(e)}>
                                                        <option>--Choose--</option>
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                    </select>
                                                </FormGroup>
                                            </Col>
                                            <Col xs="4">
                                                <FormGroup>
                                                    <Label htmlFor="precision_count">Theme Color</Label><br></br>
                                                    <button onClick={this.handleClick}>Pick Color</button>
                                                    {this.state.displayColorPicker ? <ChromePicker/> : null} 
                                                    {/* <div style={popover}>
                                                        <div style={cover} onClick={this.handleClose} />
                                                        <ChromePicker />
                                                    </div>
                                                     : null} */}

                                                    {/* <select className="form-control" name={'precision_count'} onChange={e => this.handleChange(e)}>
                                                        <option>--Choose--</option>
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                    </select> */}
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
