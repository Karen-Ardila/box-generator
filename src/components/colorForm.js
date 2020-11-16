import React, {useState} from 'react';

const ColorForm = ({onAdd}) => {
    const [color, setColor] = useState('');
    
    return (
        <div>
            <label for='color'>Color</label>
            <input id='color' type='text' onChange={(e) => setColor(e.target.value)}/> 
            <button onClick={() => onAdd(color)}>ADD</button>
        </div>
    )

}
export default ColorForm;
