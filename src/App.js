import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import EditableTable from "./EditableTable";
// import renderContent from "./treestruct.jsx"
// import { Table,Space,Switch,rowSelection } from "antd";

function App() {
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
    <>
      <EditableTable rowSelection={{ ...rowSelection }} />
    </>
  );
}

export default App;
