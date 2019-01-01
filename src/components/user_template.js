import React, { Component } from 'react'
import PropertyTypes from 'prop-types';


const UserTemplate = (props) => {

    console.log(props);

    return (
        <div>
            Template
        </div>
    );

};

UserTemplate.propTypes = {
    name:PropertyTypes.string,
    lastname:PropertyTypes.string,
    age: PropertyTypes.number
};

export default UserTemplate; 
