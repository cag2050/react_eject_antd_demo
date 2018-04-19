import React from 'react'
import {Table, Button} from 'antd'
import './tableDemo.css'

class TableDemo extends React.Component {
  state = {
    columnsData: [
      // {title: 'Full Name', dataIndex: 'name', key: 'name'},
      // {title: 'Age', dataIndex: 'age', key: 'age',},
      // {title: 'Column 1', dataIndex: 'address', key: '1'},
      // {title: 'Column 2', dataIndex: 'address', key: '2'},
      // {title: 'Column 3', dataIndex: 'address', key: '3'},
      // {title: 'Column 4', dataIndex: 'address', key: '4'},
      // {title: 'Column 4', dataIndex: 'address', key: '4'},
      // {title: 'Column 4', dataIndex: 'address', key: '4'},
      // {title: 'Column 4', dataIndex: 'address', key: '4'},
      // {title: 'Column 4', dataIndex: 'address', key: '4'},
      // {title: 'Column 4', dataIndex: 'address', key: '4'},
      // {title: 'Column 4', dataIndex: 'address', key: '4'},
      // {title: 'Column 4', dataIndex: 'address', key: '4'},
      // {title: 'Column 4', dataIndex: 'address', key: '4'},
      // {title: 'Column 4', dataIndex: 'address', key: '4'},
      // {title: 'Column 4', dataIndex: 'address', key: '4'},
      {title: 'Column 4', dataIndex: 'address', key: '4'},
      {title: 'Column 4', dataIndex: 'address', key: '4'},
      {title: 'Column 4', dataIndex: 'address', key: '4'},
      {title: 'Column 4', dataIndex: 'address', key: '4'},
      {title: 'Column 4', dataIndex: 'address', key: '4'},
      {title: 'Column 4', dataIndex: 'address', key: '4'},
      {title: 'Column 4', dataIndex: 'address', key: '4'},
      {title: 'Column 4', dataIndex: 'address', key: '4'},
      {title: 'Column 4', dataIndex: 'address', key: '4'},
      {title: 'Column 4', dataIndex: 'address', key: '4'},
      {title: 'Column 4', dataIndex: 'address', key: '4'},
      // {title: 'Column 4', dataIndex: 'address', key: '4'},
      // {title: 'Column 4', dataIndex: 'address', key: '4'},
      // {title: 'Column 4', dataIndex: 'address', key: '4'},
      // {title: 'Column 4', dataIndex: 'address', key: '4'},
      // {title: 'Column 4', dataIndex: 'address', key: '4'},
      // {title: 'Column 4', dataIndex: 'address', key: '4'},
      // // {title: 'Column 4', dataIndex: 'address', key: '4'},
      // // {title: 'Column 4', dataIndex: 'address', key: '4'},
      // // {title: 'Column 4', dataIndex: 'address', key: '4'},
      // // {title: 'Column 4', dataIndex: 'address', key: '4'},
      {title: 'Column 4', dataIndex: 'address', key: '4'},
      {title: 'Column 4', dataIndex: 'address', key: '4'},
      {title: 'Column 4', dataIndex: 'address', key: '4'},
      // // {title: 'Column 5', dataIndex: 'address', key: '5'},
      // {title: 'Column 6', dataIndex: 'address', key: '6'},
      // {title: 'Column 7', dataIndex: 'address', key: '7'},
      // {title: 'Column 8', dataIndex: 'address', key: '8'},
      {
        title: 'Action',
        key: 'operation',
        // fixed: 'right',
        render: () => <a>action</a>,
      },
    ],

    dataSourceData: []
  }

  setTableData = () => {
    const data = [];
    for (let i = 0; i < 100; i++) {
      data.push({
        key: i,
        name: `Edrward ${i}`,
        age: 32,
        address: `London Park no. ${i}`,
      });
    }
    this.setState({
      dataSourceData: data
    })
  }

  render() {
    return (
      <div>
        <Button onClick={this.setTableData}>点击后setState（设置表格数据）</Button>
        <Table
          dataSource={this.state.dataSourceData}
          columns={this.state.columnsData}
          scroll={{x: true, y: 300}}
          // scroll={{x: 100, y: 300}}
        />
      </div>
    )
  }
}

export default TableDemo
