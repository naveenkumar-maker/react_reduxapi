import React, {Component} from 'react';
import {Form,FormGroup,Label,Input,Button} from 'reactstrap';
class CreateEmployee extends Component {

    render() { 
        return ( 
            <Form>
                <FormGroup>
                    <label>Name</label>
                    <Input type="text"placeholder="Enter Name"></Input>
                </FormGroup>
                <Button type ="submit">Submit</Button>
            </Form>
         );
    }
}
 
export default CreateEmployee;