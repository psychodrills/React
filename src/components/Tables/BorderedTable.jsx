// this will create bordered table
// just Call react Component "BorderedTable" with props "headings and data"
// headings will be just a array of headings for the table
// data will be the collections of array of one dimensional arrays

import React from 'react';
import { Table } from 'reactstrap';

const BorderedTable = (props) => {
  let headings =[]
  let data = []

  const tableHeadings = (headings) => {
    return (<th className="table-head-fixed bg-gray">{headings}</th>)
  }

  const tableRow = (data) => {
    var rowData = []
    var values = Object.values(data)
    if (data != null){
      for (let i = 0; i < headings.length; i++) {
        rowData.push(tableRowData(values[i]))
      }
    }
    return (<tr>{rowData}</tr>)
  }

  const tableRowData = (data) => {
    return (<th>{data}</th>)
  }

  if (props.headings != null){
    for (let i = 0; i < props.headings.length; i++) {
      headings.push(tableHeadings(props.headings[i]))
    }
  }

  if (props.data != null){
    for (let i = 0; i < props.data.length; i++) {
      data.push(tableRow(props.data[i]))
    }
  }

  return (
    <Table bordered className="scrolling-table">
      <thead>
      <tr>
        {headings}
      </tr>
      </thead>
      <tbody>
      {data}
      </tbody>
    </Table>
  );
}

export default BorderedTable;
