import React from 'react';

const Rainbow = (WrappedComponent) =>{
    const color = ['red', 'pink','black', 'orange', 'blue', 'green'];
    const randomColor = color[Math.floor(Math.random()*5)];
    const classname = randomColor + "-text";
    return(props) =>(
        <div className={classname}>
            <WrappedComponent {...props} />
        </div> 
    )
}

export default Rainbow;