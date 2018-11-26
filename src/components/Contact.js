import React from 'react';
import Rainbow from '../hoc/Rainbow'

const Contact = (props) =>{
    console.log(props);
    return(
        <div className="Contact">
            <h4>Contact Page</h4>
        </div>
    )
}

export default Rainbow(Contact)