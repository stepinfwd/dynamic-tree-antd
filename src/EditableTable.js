import React, { Component } from 'react'
import { Table, Input, Button, Popconfirm, Form } from 'antd';
import EditableCell from "./EditableCell"
import EditableRow from "./EditableRow"
 export default class EditableTable extends React.Component {
    constructor(props) {
      super(props);
      this.columns = [
        {
          title: 'category',
          dataIndex: 'category',
          width: '30%',
          editable: true,
        },
  
        {
          title: '',
          dataIndex: 'operation',
          render: (_, record) =>
            this.state.dataSource.length >= 1 ? (
              <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
                <a>Delete</a>
              </Popconfirm>
            ) : null,
        },

        {
            title: '',
            dataIndex: 'create subcategory',
            render: (_, record) =>
              this.state.dataSource.length >= 1 ? (
                <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
                  <a>create subCategory</a>
                </Popconfirm>
              ) : null,
          },
      ];
      this.state = {
        dataSource: [
            {
                key: 1,
                category: "SHOES",
                children: [
                  {
                    key: 11,
                    category: "RUNNING SHOES",
                  },
                  {
                    key: 12,
                    category: "WALKING SHOES",
                    children: [
                      {
                        key: 121,
                        category: "ASICS",
                      },
                      {
                        key: 122,
                        category: "SKETCHERS",
                      },
                    ],
                  },
                  {
                    key: 13,
                    category: "CASUAL SHOES",
                    children: [
                      {
                        key: 131,
                        category: "NIKE",
                        children: [
                          {
                            key: 1311,
                            category: "AIR",
                          },
                          {
                            key: 1312,
                            category: "ZOOM",
                          },
                          {
                            key: 1313,
                            category: "FLYWIRE",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                key: 2,
                category: "Book",
              },
              {
                key: 3,
                category: "laptop",
                children: [
                  {
                    key: 31,
                    category: "apple",
                  },
                  {
                    key: 32,
                    category: "HP",
                  },
                  {
                    key: 33,
                    category: "DELL",
                  },
                ],
              },
        ],
        count: 2,
      };
    }
  
    handleDelete = (key) => {
      const dataSource = [...this.state.dataSource];
      this.setState({
        dataSource: dataSource.filter((item) => item.key !== key),
      });
    };
    handleAdd = () => {
      const { count, dataSource } = this.state;
      const newData = {
        key: count,
        category: `Edward King ${count}`,
        age: '32',
        address: `London, Park Lane no. ${count}`,
      };
      this.setState({
        dataSource: [...dataSource, newData],
        count: count + 1,
      });
    };
    handleSave = (row) => {
      const newData = [...this.state.dataSource];
      const index = newData.findIndex((item) => row.key === item.key);
      const item = newData[index];
      newData.splice(index, 1, { ...item, ...row });
      this.setState({
        dataSource: newData,
      });
    };
  
      
  
    render() {
      const { dataSource } = this.state;
      const components = {
        body: {
          row: EditableRow,
          cell: EditableCell,
        },
      };
      const columns = this.columns.map((col) => {
        if (!col.editable) {
          return col;
        }
  
        return {
          ...col,
          onCell: (record) => ({
            record,
            editable: col.editable,
            dataIndex: col.dataIndex,
            title: col.title,
            handleSave: this.handleSave,
          }),
        };
      });
      const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(
            `selectedRowKeys: ${selectedRowKeys}`,
            "selectedRows: ",
            selectedRows
          );
        },
        onSelect: (record, selected, selectedRows) => {
          console.log(record, selected, selectedRows);
        },
        onSelectAll: (selected, selectedRows, changeRows) => {
          console.log(selected, selectedRows, changeRows);
        },
      };
      return (
        <div>
          <Button
            onClick={this.handleAdd}
            type="primary"
            style={{
              marginBottom: 16,
              marginTop: 16,
              marginLeft: 16,

            }}
          >
            create category
          </Button>
          <Table
            components={components}
            rowClasscategory={() => 'editable-row'}
            bordered
            dataSource={dataSource}
            columns={columns}
            rowSelection={{ ...rowSelection }}
          />
        </div>
      );
    }
  }
  