import React from "react";
import DataTable from "react-data-table-component";
import activitiesDB from "./DataForTable";
import "bootstrap";
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const columns = [
  {
    name: "Title",
    selector: "title",
    sortable: true
  },
  {
    name: "Content",
    selector: "content",
    sortable: true
  },
  {
    name: "Location",
    selector: "location",
    sortable: true
  },
  {
    name: "Supervisor",
    selector: "supervisor",
    sortable: true
  },
  {
    name: "Date",
    selector: "date",
    sortable: true
  }
];

const BootyCheckbox = React.forwardRef(({ onClick, ...rest }, ref) => (
  <div className="custom-control custom-checkbox">
    <input
      type="checkbox"
      className="custom-control-input"
      ref={ref}
      {...rest}
    />
    <label className="custom-control-label" onClick={onClick} />
  </div>
));

function ActivitiesTable(props) {
  return (
    <div className="ActivitiesTable">
      <div className="card">
        <DataTable
          title="Activities"
          columns={columns}
          data={activitiesDB}
          defaultSortField="title"
          pagination
          selectableRows
          selectableRowsComponent={BootyCheckbox}
        />
      </div>
    </div>
  );
}

export default ActivitiesTable;
