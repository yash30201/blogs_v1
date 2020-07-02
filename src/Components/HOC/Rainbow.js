import React from 'react'

const Rainbow = (WrappedComponent) => {

    const colors = ['red','green','orange','blue','pink'];
    const RandomColor = colors[Math.floor(Math.random()*4)];
    const colorClass = RandomColor + '-text';
    return(props) => (
        <div className={colorClass}>
            <WrappedComponent {...props} />
        </div>
    )
}

export default Rainbow;