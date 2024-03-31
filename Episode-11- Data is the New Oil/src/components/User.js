import { useState } from "react";



const User = ({name}) => {

  return (
    <div className='user-card'>
        <h1>Count = {count}</h1>
        <h1>Count2 = {count2}</h1>
        <h2>Name:{name}</h2>
        <h3>Location:Jamshedpur,Jharkhand</h3>
        <h4>Contact:@mohitsinghparmar038</h4>
    </div>
  );
};

export default User;