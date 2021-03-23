import { useEffect, useState, useRef } from "react"
import API from '../../utils/API';
import "./style.css";


function TableData(){
    const [employee, setEmployee] = useState({});
    const [employees, setEmployees] = useState([]);
    const [employeeIndex, setEmployeeIndex] = useState(0)
    const [order,setOrder] = useState('descend'); 
    const inputRef = useRef()
    
    function getEmployees(){
    API.fetchEmployees()
    .then(employees => {
    setEmployees(employees);
    setEmployee(employees[0]);
        })
        .catch(err => console.log(err));
    }
    
    function sortEmployees(){
        let newList = [ ...employees, ]
        newList.sort((a, b) => {
            let fa = a.firstName.toLowerCase(),
                fb = b.firstName.toLowerCase();
            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0; 
        })
        setEmployees(newList);
    }

    function filterEmployees(country){
        console.log(`the employees`, employees)
        const myInput = inputRef.current.value
        const newList = employees.filter( employee => employee.country.indexOf( myInput )> -1 )
        //  let newList = employees.filter( employee=>employee.country === {myInput} )
        console.log(`this is the part that broke it all `, newList)
        setEmployees(newList);
    }
    // function setOrder => (a,b){
    //     if(a[firstName] <b [firstName])

    // } 

       
      
    useEffect(() => {
        getEmployees();
    }, []);
    

    return (
        <>
            <div class="input-group mb-3">
                <input type="text" class="form-control" ref={inputRef} placeholder="Enter country"/>
                <button class="btn btn-outline-primary"  onClick={()=>filterEmployees(inputRef.current.value)} type="button" id="button-addon2">Search</button>
            </div>
            <button class="btn btn-secondary" onClick={sortEmployees}>
            Sort Employees
            </button>
            <tbody>
                {employees.map(employee => (
                <tr >   
                <td>{employee.firstName} {employee.lastName}</td>
                <td><img alt={employee.image} src={employee.image}/></td>
                <td>{employee.country}</td>
                <td>{employee.email}</td>
                <td>{employee.gender}</td>
                </tr>))}
            </tbody>
            
        </>     
        );  
};

export default TableData 