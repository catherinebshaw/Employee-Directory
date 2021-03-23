import { useEffect, useState } from "react"
import API from '../../utils/API';
import "./style.css";


function TableData(){
    const [employee, setEmployee] = useState({});
    const [employees, setEmployees] = useState([]);
    const [employeeIndex, setEmployeeIndex] = useState(0)

    function getEmployees(){
    API.fetchEmployees()
    .then(employees => {
    setEmployees(employees);
    setEmployee(employees[0]);
        })
        .catch(err => console.log(err));
    }
    
    useEffect(() => {
        getEmployees();
    }, []);
    
    function nextEmployee(employeeIndex) {
        if (employeeIndex >= employees.length){
            employeeIndex = 0
        }
        setEmployee(employees[employeeIndex]);
        setEmployeeIndex(employeeIndex)
    }

    return (
        <div class="container">
            <h1>Employee Directory</h1>
            <table id="table">
            <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Image</th>
                <th>Country</th>
                <th>email</th>
                <th>gender</th>
            </tr>
            </thead>
            <tbody>
                {employees.map(employee => (
                <tr >
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td><img alt={employee.image} src={employee.image}/></td>
                <td>{employee.country}</td>
                <td>{employee.email}</td>
                <td>{employee.gender}</td>
                </tr>))}
            </tbody>
        </table>
    </div>
    );  
};

export default TableData 