import React from "react";

const InputFeild = ({ name, style, value, onChange }) => {
    return (
        <div>
            <input 
                placeholder= {name}
                type="text" 
                style={style} 
                value={value} 
                onChange={onChange} 
            />
        </div>
    );
};

export default InputFeild;
