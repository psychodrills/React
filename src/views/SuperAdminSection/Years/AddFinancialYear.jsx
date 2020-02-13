import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
    Label,
    CardHeader,
    Row,
    Fade,
    Card,
    Col,
    Button,
    CardBody,
    FormGroup,
    Collapse,
    Input,
    Form

} from 'reactstrap';
class AddFinancialYear extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            startDate: null,
            endDate: null,
            collapse_financial_year: false,
        }
        this.financialYearData = {
            start_date: '',
            end_date: '',
            name: ''
        }
        this.handleChange = this.handleChange.bind(this);

    }
    handleChange(evt) {
        this.financialYearData[evt.target.name] = evt.target.value
    }
    setStartDate(val) {
        this.setState({
            startDate: val
        })
        this.financialYearData.start_date = val
    }
    setEndDate(val) {
        this.setState({
            endDate: val
        })
        this.financialYearData.end_date = val
    }
    submitForm() {
        console.log(this.financialYearData)
    }
    toggleFinancialYearDetails() {
        this.setState({ collapse_financial_year: !this.state.collapse_financial_year })
    }
    render() {
        return (
            <div className="animated fadeIn shadow-lg">
                <Row>
                    <Col xs="12">
                        <Fade >
                            <Card>
                                <CardHeader>
                                    <i className="fa fa-plus"></i>Add Financial Year
                                    <div className="card-header-actions">
                                        <Button color="link" className="card-header-action btn-minimize"
                                            name="collapse_school_group"
                                            onClick={e => this.toggleFinancialYearDetails(e)}> <i className="icon-arrow-up"></i></Button>
                                    </div>
                                </CardHeader>
                                <Collapse isOpen={this.state.collapse_financial_year}>
                                    <CardBody>
                                        <Form className="form-horizontal">
                                            <FormGroup row className="my-0 mt-2">
                                                <Col xs="4">
                                                    <FormGroup>
                                                        <Label>Name</Label>
                                                        <Input placeholder="Please enter Financial year name" name={'name'} onChange={e => this.handleChange(e)} />
                                                    </FormGroup>
                                                </Col>
                                                <Col xs="4">
                                                    <FormGroup>
                                                        <Label>Start Date</Label><br></br>
                                                        <DatePicker dateFormat="dd/MM/yyyy" placeholderText=" Please select startdate" selected={this.state.startDate} onChange={date => this.setStartDate(date)} maxDate={this.state.endDate} />
                                                    </FormGroup>
                                                </Col>
                                                <Col xs="4">
                                                    <FormGroup>
                                                        <Label>End Date</Label><br></br>
                                                        <DatePicker dateFormat="dd/MM/yyyy" placeholderText=" Please select enddate" selected={this.state.endDate} onChange={date => this.setEndDate(date)} minDate={this.state.startDate} />
                                                    </FormGroup>
                                                </Col>
                                            </FormGroup>
                                        </Form>
                                    </CardBody>

                                    <div className="form-actions">
                                        <Button
                                            className="ml-2"
                                            // type="submit"
                                            color="primary"
                                            onClick={e => this.submitForm()}
                                        >Add Financial Year</Button>
                                    </div>
                                    <br></br>
                                </Collapse>
                            </Card>
                        </Fade>
                    </Col>
                </Row>
            </div >
        );
    }
}

export default AddFinancialYear