import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Text, Input, FormGroup, Label } from 'reactstrap';

class Login extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   text_username: "",
   text_password: ""
  }
 }

 render() {
  return (
   <div>
    <FormGroup>
     <Label for="username">Username</Label>
     <Input 
      id="username"
      onChange={(text) => {
       this.setState({text_username: text.target.value});
      }} 
      placeholder="Username"
      value={this.state.text_username} />
    </FormGroup>
    <FormGroup>
     <Label for="password">Password</Label>
     <Input 
      id="password"
      onChange={(text) => {
       this.setState({text_password: text.target.value});
      }}
      placeholder="Password"
      value={this.state.text_password} />
    </FormGroup>
    <Button onClick={() => {
     console.log(this.state);
    }}
     color="success" size="sm" className="mr-2">
     Login
    </Button>
    <Button onClick={() => {
     this.setState({text_username: ""});
     this.setState({text_password: ""});
    }}
     color="danger" size="sm" className="mr-2">
     Reset
    </Button>
   </div>
  );
 }
}

export default Login;
if (document.getElementById('login')) {
 ReactDOM.render(<Login/>, document.getElementById('login'));
}
