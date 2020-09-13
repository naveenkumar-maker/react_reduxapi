import {React,Fragment,Component} from 'react';

class Employee extends Component{
    state={
        employee:[],
    };

    async componentDidMount(){
        let res=await window.fetch('http://dummy.restapiexample.com/api/v1/employees');
        const AllEmp=await res.json();
        console.log(AllEmp);
        this.setState({employee:AllEmp.data});
        
        console.log(res);
    }
    render(){
        let data=this.state.employee.map(emp=>
            (<Fragment key={emp.id}>
            <ul>
            <li>{emp.employee_name}</li>
            <li>{emp.employee_salary}</li>
            <li>{emp.employee_age}</li>
            
            </ul>
            </Fragment>
            ));
        return(
        <Fragment>
        <h1>Employee</h1>
        <table style={{border:"1px solid #ddd"}}>
            <tr style={{background:"lightblue"}}>
                <th>id</th>
                <th>Name</th>
                <th>age</th>
                <th>salary</th>
                <th>action</th>
            </tr>
        </table>
        </Fragment>
        )
    }       
}
export default Employee;