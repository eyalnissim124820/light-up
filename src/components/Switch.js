import React from 'react';
import '../styles/Switch.css';

const Switch = ({ setToggle, toggle, mode }) => {
    const offMode = {
        left: 'calc(-0% - -3px)',
        transform: 'translateX(0%)'
    }
    const onMode = {
        left: 'calc(100% - 3px)',
        transform: 'translateX(-100%)',
    }


    return (
        <>
            <input className="react-switch-checkbox" id={`react-switch-new`} type="checkbox" onClick={(e) => { e.stopPropagation(); mode = !mode;}} />
            <label className="react-switch-label" htmlFor={`react-switch-new`}>
                <span className={`react-switch-button`} style={mode ? onMode : offMode} />
            </label>
        </>
    );
};

export default Switch;