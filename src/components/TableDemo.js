import React from 'react'
import {Table} from 'antd'

class TableDemo extends React.Component {

  columnsData = [{
    title: 'Name',
    dataIndex: 'name'
  }, {
    title: 'Cash Assets',
    dataIndex: 'money',
  }, {
    title: 'Address',
    dataIndex: 'address',
  }];

  dataSourceData = [{
    key: '1',
    name: 'John Brown',
    money: '￥300,000.00',
    address: 'New York No. 1 Lake Park',
  }, {
    key: '2',
    name: 'Jim Green',
    money: '￥1,256,000.00',
    address: 'London No. 1 Lake Park',
  }, {
    key: '3',
    name: 'Joe Black',
    money: '￥120,000.00',
    address: 'Sidney No. 1 Lake Park',
  }];

  render() {
    return (
      <Table
        dataSource={this.dataSourceData}
        columns={this.columnsData}
      />
    )
  }

}

export default TableDemo
