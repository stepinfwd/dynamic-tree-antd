import { Table, Switch, Space } from "antd";
import React from "react";

const columns = [
  {
    title: "category",
    dataIndex: "category",
    key: "category",
  },
];

const data = [
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
];

// rowSelection objects indicates the need for row selection
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

function TreeData() {
  const [checkStrictly, setCheckStrictly] = React.useState(false);
  return (
    <>
      <Space align="center" style={{ marginBottom: 16 }}>
        CheckStrictly:{" "}
        <Switch checked={checkStrictly} onChange={setCheckStrictly} />
      </Space>
      <Table
        columns={columns}
        rowSelection={{ ...rowSelection, checkStrictly }}
        dataSource={data}
      />
    </>
  );
}

export default TreeData;
