import React from 'react'
import { Card, CardBody, CardHeader, Row } from 'reactstrap';
import BorderedTable from "../../../components/Tables/BorderedTable";
import School from "../../../lib/api/Schools/School";

class SchoolGroupList extends React.Component{

  constructor(props){
    super(props)
    this.school = new School()
    this.state = {
      headings: '',
      data: ''
    }
  }

  componentDidMount(){
    this.school.fetch_school_groups().then(data => {
      for(let i = 0;i<data.data.result_data.school_groups.length;i++){
      let value = "http://localhost:3000/school-group-data/" + data.data.result_data.school_groups[i].id  
      data.data.result_data.school_groups[i].group_name = <a href={value}>{data.data.result_data.school_groups[i].group_name}</a>
      }
      this.setState({
        headings: data.data.result_data.heads,
        data: data.data.result_data.school_groups
      })
    })
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <strong>School Groups</strong>
          </CardHeader>
          <CardBody>
            <Row className="align-items-center scrolling-container">
              <BorderedTable headings={this.state.headings} data={this.state.data}/>
            </Row>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default SchoolGroupList
