import React, { Component } from 'react'
import UserTemplate from './user_template';

class User extends Component {

  state = {

    name : 121,
    lastname: "Dubois",
    age: 20

  };

  render() {
    return (
      <div>
        <UserTemplate {...this.state}/>
      </div>
    )
  }
}

export default User; 
