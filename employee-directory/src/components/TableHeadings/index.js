import React from "react";
import TableData from "../TableData"


function TableHeadings() {

  
  return <thead id="headings">
            <tr>
                <th onClick={sortEmployees}>Name</th>
                <th>Image</th>
                <th>Country</th>
                <th>Email</th>
                <th>Gender</th>
            </tr>
          </thead>
}
export default TableHeadings