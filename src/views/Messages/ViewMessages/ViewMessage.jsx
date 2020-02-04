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

export default class ViewMessage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            fadeIn: true,
            timeout: 300,
            open: false
        };

    }

    toggle() {
        this.setState({
            open: !this.state.open
        });

    }




    render() {
        return (
            <div className="animated fadeIn shadow-lg">
                <Row>
                    <Col xs="12">
                        <Fade timeout={this.state.timeout} in={this.state.fadeIn}>
                            <Card>
                                <CardHeader>
                                    <FormGroup row className="my-0 mt-2">
                                        <Col xs="3">
                                            <p>Rafnid</p>
                                        </Col>
                                        <Col xs="3">
                                            <p>20Jan</p>
                                        </Col>
                                        <Col xs="3">
                                            <Button className="btn btn-danger"><i className="fa fa-trash"></i></Button>
                                        </Col>
                                        <Col xs="3">
                                            <div className="card-header-actions">
                                                <Button color="link" className="card-header-action btn-minimize" aria-expanded={this.open}
                                                    onClick={this.toggle.bind(this)}><i className="icon-arrow-up"></i></Button>
                                            </div>
                                        </Col>
                                    </FormGroup>
                                </CardHeader>
                                <Collapse isOpen={this.state.open}>
                                    <CardBody>
                                        <p>The student was absent on friday and he said that there was an issue.We tried to solve the issue but was irrespomnsible</p>
                                    </CardBody>
                                </Collapse>
                            </Card>
                        </Fade>
                    </Col>
                    <Col xs="12">
                        <Fade timeout={this.state.timeout} in={this.state.fadeIn}>
                            <Card>
                                <CardHeader>
                                    <FormGroup row className="my-0 mt-2">
                                        <Col xs="3">
                                            <p>Ijas</p>
                                        </Col>
                                        <Col xs="3">
                                            <p>20Jan</p>
                                        </Col>
                                        <Col xs="3">
                                            <Button className="btn btn-danger"><i className="fa fa-trash"></i></Button>
                                        </Col>
                                        <Col xs="3">
                                            <div className="card-header-actions">
                                                <Button color="link" className="card-header-action btn-minimize" aria-expanded={this.open}
                                                    onClick={this.toggle.bind(this)}><i className="icon-arrow-up"></i></Button>
                                            </div>
                                        </Col>
                                    </FormGroup>
                                </CardHeader>
                                <Collapse isOpen={this.state.open}>
                                    <CardBody>
                                        <p>The student was absent on friday and he said that there was an issue.We tried to solve the issue but was irrespomnsible</p>
                                    </CardBody>
                                </Collapse>
                            </Card>
                        </Fade>
                    </Col>
                </Row>
            </div>

        )
    }

}