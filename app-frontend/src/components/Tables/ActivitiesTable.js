import React from "react";
import DataTable from "react-data-table-component";
import movies from "./DataForTable";
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
    name: "Directior",
    selector: "director",
    sortable: true
  },
  {
    name: "Runtime (m)",
    selector: "runtime",
    sortable: true,
    right: true
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

function ActivitiesTable() {
  return (
    <div className="ActivitiesTable">
      <div className="card">
        <DataTable
          title="Movies"
          columns={columns}
          data={movies}
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
