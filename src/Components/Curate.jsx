import React, { useState, useContext } from 'react';
import './curate.css'
import { Link } from "react-router-dom";
import {TransactionContext} from "../contexts/DashContext";

function Curate() {
  const { list, Income, setResults} = useContext(TransactionContext);

  const [inputValues, setInputValues] = useState({}); 
  const [total, setTotal] = useState(0);
  const [error, setError] = useState(null);

  const calculatePercentage = () => {
    const results = Object.keys(inputValues).map((id) => {
      const inputValue = inputValues[id];
      const result = (inputValue * Income) / 100;
      return { id, result };
    });
    setResults(results);
  };



  const handleCurate = () => {
    if (total > 100) {
      return <button disabled>Curate a Plan</button>;
    } else {
      return <Link to="/dashboard"><button onClick={calculatePercentage}>Curate a Plan</button></Link>;
    }
  };
  const calculateTotal = () => {
    const totalValue = list.reduce((acc, curr) => {
      const inputValue = curr.inputValue ? parseInt(curr.inputValue, 10) : 0;
      return acc + inputValue;
    }, 0);
    setTotal(totalValue);
    if (totalValue > 100) {
      setError('Total percentage exceeds 100%'); // Set the error message if total exceeds 100%
    } else {
      setError(null); // Clear the error message if total is within 100%
      
    }
  };

  const handleInputChange = (id, value) => {
    setInputValues((prevValues) => ({ ...prevValues, [id]: value }));
  };

    return (
    <div className='container'>
      <h1>Curate a plan</h1>
      <p>Enter the percentage you want to spend</p>
      <div className="expenses-list">
        {list.map((item) => (<EditableBox key={item.id} item={item} onChange={() => calculateTotal()} onInputChange={(value) => handleInputChange(item.id, value)}
          />
        ))}
        
      </div> 

      <div className="curate-plan">
        {handleCurate()}
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}     
    </div>
  );
}

const EditableBox = ({ item, onChange, onInputChange}) => {
  const [inputValue, setInputValue] = useState('');
  const [Edit, setEdit] = useState(false);
  

  const Tap = () => {
    setEdit(true);
  };

  

  const InputChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setInputValue(value);
    item.inputValue = value;
    onChange();
    onInputChange(value); // Call the onInputChange function
  };
  const KeyPress = (e) => {
    if (e.key === 'Enter') {
      setEdit(false);
    }
  };
  return (
    <div
      
      style={{
        border: '1px solid #ccc',
        padding: '10px',
        width: '530px',
      }}
      onClick={Tap}
    >
      <span style={{ marginRight: '20px' }}>{item.name}</span>
      {Edit ? (
        <input
          type="text"
          value={inputValue}
          onChange={InputChange}
          onKeyPress={KeyPress}
          style={{
            border: 'none',
            padding: '5px',
            width: '50%',
            display: 'block', // Add this to make the input field block-level
          }}
        />
      ) : (
        <span>
          {inputValue && ` ${inputValue}%`}
          
        </span> // Add the input value beside the text
      )}
      
    </div>
  );
};

export default Curate;




