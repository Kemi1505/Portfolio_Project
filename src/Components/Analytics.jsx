import React, { useState } from 'react';
import './Dashboard.css'
import HomeIcon from '@mui/icons-material/Home';
import CalendarIcon from '@mui/icons-material/CalendarMonth';
import FireIcon from '@mui/icons-material/Whatshot';
import SettingsIcon from '@mui/icons-material/Settings';
import AnalyticsIcon from '@mui/icons-material/Analytics';



const Testing = () => {
  const [transactions, setTransactions] = useState([
        { id: 1, name: 'Food' },
        { id: 2, name: 'Housing' },
        { id: 3, name: 'Transportation' },
        { id: 4, name: 'Savings' },
        { id: 5, name: 'Miscellaneous (10%)' },
      ]);


  const [newAddTransaction, setNewAddTransaction] = useState('');
  const [newSubtractTransaction, setNewSubtractTransaction] = useState('');

  const handleAddTransaction = () => {
    if (newAddTransaction !== '') {
      const newTransactionObj = { id: transactions.length + 1, name: newAddTransaction };
      setTransactions([...transactions, newTransactionObj]);
      setNewAddTransaction(''); 
    }
  };

  const handleSubtractTransaction = () => {
    if (newSubtractTransaction !== '') {
      const transactionIndex = transactions.findIndex((transaction) => transaction.name === newSubtractTransaction);
      if (transactionIndex !== -1) {
        setTransactions(transactions.filter((transaction, index) => index !== transactionIndex));
      }
      setNewSubtractTransaction(''); 
    }
  };

  return (
    <div class="containe">
        <div class="sidebar">
            <div className='menu'>Dashboard<HomeIcon  style={{ verticalAlign: 'text-bottom' }}/></div>
            <div className='menu'>Calendar<CalendarIcon  style={{ verticalAlign: 'text-bottom' }}/></div>
            <div className='menu'>Analytics<AnalyticsIcon  style={{ verticalAlign: 'text-bottom' }}/></div>
            <div className='menu'>Settings<SettingsIcon  style={{ verticalAlign: 'text-bottom' }}/></div>
            
        </div>
        <div className="main-content">
         <div className="heade">
            <h1>Welcome User!</h1>
            <div class="date">September 2024</div>
            <div class="streaks">
                <h2>Streaks</h2>
                <div className='number'>9<FireIcon  style={{ verticalAlign: 'text-bottom' }}/></div>        
            </div>
        </div>
         <div class="content">
            <div class="box">
                <h2>Budget</h2>
                <p>Income of the month</p>
                <div class="input-group">
                    <input type="text" placeholder="Enter Your Income" />
                </div>
                <h2>Target Expenses</h2>
                <div class="expenses-list">
                     {transactions.map((transaction) => (<div key={transaction.id} className="transaction">{transaction.name}
                </div>))}
                <div class="input-group">
                    <span onClick={handleAddTransaction}> + </span>
                    <input type="text" value={newAddTransaction}onChange={(e) => setNewAddTransaction(e.target.value)} placeholder="Add Expense"/>
                </div>
                <div class="input-group">
                    <span onClick={handleSubtractTransaction}> - </span>
                    <input type="text"  value={newSubtractTransaction}onChange={(e) => setNewSubtractTransaction(e.target.value)} placeholder="Remove Expense"/>
                </div>
                <div class="input-group">
                    <span> * </span>
                    <input type="text" placeholder="Edit Expense"/>
                </div>
                <div class="curate-plan"><button>Curate a Plan</button></div>
            </div>
            <div class="box">
                <h2>Expense</h2>
                <div class="expenses-list">
                    {transactions.map((transaction) => (<div key={transaction.id} className="transaction">{transaction.name}</div>))} 
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
  );
};

export default Testing;
