import React from 'react'
import {Table, Button} from 'antd'

class TableDemo extends React.Component {
  state = {
    columnsData: [{
      title: 'Name',
      dataIndex: 'name'
    }, {
      title: 'Cash Assets',
      dataIndex: 'money',
    }, {
      title: 'Address',
      dataIndex: 'address',
    }],

    dataSourceData: [{
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
    }]
  }

  setTableData = () => {
    this.setState({
      dataSourceData: []
    })
  }

  render() {
    return (
      <div>
        <Button onClick={this.setTableData}>点击后setState（设置表格数据列为空）</Button>
        <Table
          dataSource={this.state.dataSourceData}
          columns={this.state.columnsData}
        />
      </div>
    )
  }

}

export default TableDemo
