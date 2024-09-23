import React, { useState, useContext, useEffect} from 'react';
import { Link } from "react-router-dom";
import './Dashboard.css'
import HomeIcon from '@mui/icons-material/Home';
import CalendarIcon from '@mui/icons-material/CalendarMonth';
import FireIcon from '@mui/icons-material/Whatshot';
import SettingsIcon from '@mui/icons-material/Settings';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import {TransactionContext} from "../contexts/DashContext";


const Dashboard = () => {
  const {list, setList, Income, setIncome, results } = useContext(TransactionContext); 
  const resultValues = Object.values(results);
  const [newAddTransaction, setNewAddTransaction] = useState('');
  const [newSubtractTransaction, setNewSubtractTransaction] = useState('');

  const handleAddTransaction = () => {
    if (newAddTransaction.trim() !== '') {
      setList((prevList) => ({
        items: [...prevList.items,
          { id: prevList.items.length + 1, name: newAddTransaction },
        ],
      }));
      setNewAddTransaction(''); // Reset input field
    }
  };
  
  const handleSubtractTransaction = () => {
    setList((prevList) => ({
      items: prevList.items.filter((item) => item.name.toLowerCase() !== newSubtractTransaction.toLowerCase()),
    }));
    setNewSubtractTransaction(''); // Reset input field
  };


  const handleIncomeChange = (e) => {
    setIncome(e.target.value);
  };


  return (
    <div className="containe">
        <div className="sidebar">
            <Link to="/dashboard" className='menu'>Dashboard<HomeIcon  style={{ verticalAlign: 'text-bottom' }}/></Link>
            <Link to="/settings" className='menu'>Calendar<CalendarIcon  style={{ verticalAlign: 'text-bottom' }}/></Link>
            <Link to="/settings" className='menu'>Analytics<AnalyticsIcon  style={{ verticalAlign: 'text-bottom' }}/></Link>
            <Link to="/settings" className='menu'>Settings<SettingsIcon  style={{ verticalAlign: 'text-bottom' }}/></Link>
        </div>
        <div className="main-content">
         <div className="heade">
            <h1>Welcome User!</h1>
            <div className="date">September 2024</div>
            <div className="streaks">
                <h2>Streaks</h2>
                <div className='number'>9<FireIcon  style={{ verticalAlign: 'text-bottom' }}/></div>        
            </div>
        </div>
         <div className="content">
            <div className="box">
                <h2>Budget</h2>
                <p>Income of the month</p>
                <div className="input-group">
                    <input type="text"  value={Income} onChange={handleIncomeChange} placeholder="Enter Your Income" />
                </div>
                <h2>Target Expenses</h2>
                <div className="expenses-list">
                  {list.map((item, idx) => (<div key={item.id} className='transaction'>{item.name} <span style={{ marginLeft: 20 }}>{resultValues[idx] && resultValues[idx].result}</span></div>))}
                </div>
                
                <div className="input-group">
                    <span onClick={handleAddTransaction}>+</span>
                    <input type="text" value={newAddTransaction}onChange={(e) => setNewAddTransaction(e.target.value)} placeholder="Add Expense"/>
                </div>
                <div className="input-group">
                    <span onClick={handleSubtractTransaction}> - </span>
                    <input type="text" value={newSubtractTransaction}onChange={(e) => setNewSubtractTransaction(e.target.value)} placeholder="Remove Expense"/>
                </div>
                <Link to="/curate" className="curate-plan"><button>Curate a Plan</button></Link>
            </div>
            <div className="box">
                <h2>Expense</h2>
                <div className="expenses-list">
                {list.map((item, idx) => (
  <div key={item.id} className="transaction-wrapper">
    <Transaction key={item.id} className="transaction" item={item} />
  </div>
))}

                </div>
                
            </div>
        </div>
        </div>
    </div>
  );
};

const Transaction = ({ item, resultValues, idx }) => {
  const [inputValue, setInputValue] = useState('');
  const [totalValue, setTotalValue] = useState(0);
  const [showInput, setShowInput] = useState(false);
  const [error, setError] = useState(null);

  const handleTap = () => {
    setShowInput(true);
  };

  const handleInputChange = (e) => {
    const numericValue = e.target.value.replace(/[^0-9.]/g, '');
    setInputValue(numericValue);
  };

  const handleInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      const newValue = parseFloat(inputValue);
      if (!isNaN(newValue)) {
        setTotalValue((prevValue) => prevValue + newValue);
        setInputValue('');
        setShowInput(false);
        
      }
    }
  };

  const handleInputBlur = () => {
    setShowInput(false);
  };

  const handleReset = () => {
    setTotalValue(0);
  };

  

  useEffect(() => {
    const checkBudgetExceeded = () => {
      if (resultValues && resultValues[idx] && resultValues[idx].result) {
        if (totalValue > resultValues[idx].result) {
          setError(<div style={{ color: 'red' }}>Error: Budget exceeded</div>);
        } else {
          setError(null);
        }
      }
    };
    checkBudgetExceeded();
  }, [totalValue, setError, idx, resultValues]);

  return (
    <div key={item.id} className="transaction">
      <div onClick={handleTap}>
        {item.name} <span style={{ marginLeft: 10 }}>{totalValue}</span>
        <button onClick={handleReset}>Reset</button>
      </div>
      {showInput && (
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleInputKeyPress}
          onBlur={handleInputBlur}
        />
      )}
      {error}
    </div>
  );
};


export default Dashboard;