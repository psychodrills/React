import React from 'react'
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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimezonePicker from 'react-bootstrap-timezone-picker';
import 'react-bootstrap-timezone-picker/dist/react-bootstrap-timezone-picker.min.css';
import { CountryDropdown } from 'react-country-region-selector';
import SelectCurrency from 'react-select-currency'
import getSymbolFromCurrency from 'currency-symbol-map'
import { SketchPicker } from 'react-color';
class SchoolData extends React.Component {
    constructor(props) {
        super(props);
        this.validator = new SimpleReactValidator();
        this.state = {
            country: '',
            displayColorPicker: false,
            languages: [],
            date: '',
            currency_symbol: '',
            time_zone: '',
            background: '#fff',
        }
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
    update_country(val) {
        this.setState({
            country: val
        })
        this.schoolData.country = val
    }
    setSymbolfromCurrency(val) {
        this.schoolData.currrency_code = val.target.value
        this.schoolData.currency_symbol = getSymbolFromCurrency(val.target.value)
        this.setState({ currency_symbol: this.schoolData.currency_symbol })
    }
    setTimezone(val) {
        this.setState({
            time_zone: val
        })
        this.schoolData.time_zone = val
    }
    setDate(val) {
        this.setState({ date: val })
        this.schoolData.date = val
    }
    handleChangeComplete = (color) => {
        this.setState({ background: color.hex });
        this.schoolData.theme_color = color.hex
    };
    handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
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
                                            {this.validator.message('address', this.schoolData.address, 'required|required')}
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
                                                    <Label htmlFor="language">Language</Label>
                                                    <select className="form-control" name={'language'} onChange={e => this.handleChange(e)}>
                                                        <option >--Choose--</option>
                                                        <option >English</option>
                                                        <option >Arabic</option>
                                                        <option >Spanish</option>
                                                        <option >French</option>
                                                    </select>
                                                </FormGroup>
                                                <span className="text-danger">
                                                    {this.validator.message('language', this.schoolData.language, 'required|alpha_space')}
                                                </span>
                                            </Col>
                                            <Col xs="4">
                                                <FormGroup className="mb-0">
                                                    <Label htmlFor="postal-code">Country</Label>
                                                    <CountryDropdown className="form-control" value={this.state.country}
                                                        onChange={val => this.update_country(val)}> </CountryDropdown>
                                                </FormGroup>
                                                <span className="text-danger">
                                                    {this.validator.message('country', this.schoolData.country, 'required|alpha_space')}
                                                </span>
                                            </Col>
                                            <Col xs="4">
                                                <FormGroup className="mb-0">
                                                    <Label htmlFor="currncy-symbol">Currency Code</Label>
                                                    <SelectCurrency className="form-control" name={'currrency_code'} onChange={e => this.setSymbolfromCurrency(e)}></SelectCurrency>
                                                </FormGroup>
                                                <span className="text-danger">
                                                    {this.validator.message('currrency_code', this.schoolData.currrency_code, 'required|required')}
                                                </span>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row className="my-0 mt-2">
                                            <Col xs="4">
                                                <FormGroup>
                                                    <Label htmlFor="currency_symbol">Currency Symbol</Label>
                                                    <Input readOnly value={this.state.currency_symbol} />
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
                                                <span className="text-danger">
                                                    {this.validator.message('precision_count', this.schoolData.precision_count, 'required|integer')}
                                                </span>
                                            </Col>
                                            <Col xs="4">
                                                <FormGroup>
                                                    <Label htmlFor="date">Date</Label><br></br>
                                                    <DatePicker dateFormat="dd/MM/yyyy" selected={this.state.date} onChange={e => this.setDate(e)} className="form-control" />
                                                </FormGroup>
                                                <span className="text-danger">
                                                    {this.validator.message('date', this.schoolData.date, 'required|required')}
                                                </span>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row className="my-0 mt-2">
                                            <Col xs="4">
                                                <FormGroup>
                                                    <Label htmlFor="date">Date Seperator</Label>
                                                    <select className="form-control" name={'date_seperator'} onChange={e => this.handleChange(e)}>
                                                        <option>--Choose--</option>
                                                        <option>-</option>
                                                        <option>/</option>
                                                    </select>
                                                </FormGroup>
                                                <span className="text-danger">
                                                    {this.validator.message('date seperator', this.schoolData.date_seperator, 'required|required')}
                                                </span>
                                            </Col>
                                            <Col xs="4">
                                                <FormGroup className="mb-0">
                                                    <Label htmlFor="time-zone">Timezone</Label><br></br>
                                                    <TimezonePicker placeholder="Select TimeZone" value={this.state.time_zone} onChange={e => this.setTimezone(e)} />
                                                </FormGroup>
                                                <span className="text-danger">
                                                    {this.validator.message('timezone', this.schoolData.time_zone, 'required|required')}
                                                </span>
                                            </Col>
                                            <Col xs="4">
                                                <FormGroup>
                                                    <Label htmlFor="precision_count">Theme Color</Label><br></br>
                                                    <Button color="primary" onClick={() => this.handleClick()}>Pick Color</Button>
                                                    {this.state.displayColorPicker ? <SketchPicker color={this.state.background} onChangeComplete={this.handleChangeComplete} /> : null}
                                                </FormGroup>
                                                <span className="text-danger">
                                                    {this.validator.message('theme color', this.schoolData.theme_color, 'required|required')}
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
                                >Create School Data</Button>
                            </div>
                        </Fade>
                    </Col>
                </Row>
            </div>
        )
    }
}

// render(
//     <ColorPicker defaultValue='#452135'/>,
//     document.getElementById('content')
//   )

export default SchoolData
