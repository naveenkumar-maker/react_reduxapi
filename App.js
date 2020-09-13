import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Employee from './Componets/Employee';
import CreateEmployee from './Componets/CreateEmployee'
import UpdateEmployee from './Componets/UpdateEmployee';
import GetSingleEmployee from './Componets/GetSingleEmployee';
import DeleteEmployee from './Componets/DeleteEmployee';
import  'bootstrap/dist/css/bootstrap.min.css'

const App=()=>{
   
    return ( 
      <div style={{maxwidth:'30rem',margin:'4rem auto'}}>
        
      <Router>
        <Switch>
        <Route path='/employee' exact component={Employee}/>
        <Route path='/employee:id' exact component={GetSingleEmployee}/>
        <Route path='/create' exact component={CreateEmployee}/>
        <Route path='/update' exact component={UpdateEmployee}/>
        <Route path='/delete:id' exact component={DeleteEmployee}/>
        </Switch>
      </Router>
      </div>
     );
  
}
 
export default App;
