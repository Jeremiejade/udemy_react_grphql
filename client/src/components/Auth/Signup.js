import React from 'react';

class Signup extends React.Component{
  render(){
      return(
      <div calssName="App">
      <h2 calssName="App">Signup</h2>
          <form className="form">
            <input type="text" name="username" placeholder="Username"/>
            <input type="email" name="email" placeholder="Email Adress"/>
            <input type="password" name="password" placeholder="Password"/>
            <input type="password" name="passwordConfirmation" placeholder="Confirm Password"/>

          </form>

      </div>
      )
  }  
}

export default Signup;