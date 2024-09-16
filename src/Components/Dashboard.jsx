import React from 'react';
import { Link } from "react-router-dom";
import './Dashboard.css'
import HomeIcon from '@mui/icons-material/Home';
import CalendarIcon from '@mui/icons-material/CalendarMonth';
import FireIcon from '@mui/icons-material/Whatshot';
import SettingsIcon from '@mui/icons-material/Settings';
import AnalyticsIcon from '@mui/icons-material/Analytics';



const Dashboard = () => {
  return (
    <div class="containe">
        <div class="sidebar">
            <Link to="/dashboard" className='menu'>Dashboard<HomeIcon  style={{ verticalAlign: 'text-bottom' }}/></Link>
            <Link to="/settings" className='menu'>Calendar<CalendarIcon  style={{ verticalAlign: 'text-bottom' }}/></Link>
            <Link to="/settings" className='menu'>Analytics<AnalyticsIcon  style={{ verticalAlign: 'text-bottom' }}/></Link>
            <Link to="/settings" className='menu'>Settings<SettingsIcon  style={{ verticalAlign: 'text-bottom' }}/></Link>
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
                    <div class="transaction">Food</div>
                    <div class="transaction">Housing</div>
                    <div class="transaction">Transportion</div>
                    <div class="transaction">Savings</div>
                    <div class="transaction">Miscellaneous(10%)</div>
                </div>
                <div class="input-group">
                    <span>+</span>
                    <input type="text" placeholder="Add Expense"/>
                </div>
                <div class="input-group">
                    <span> - </span>
                    <input type="text" placeholder="Remove Expense"/>
                </div>
                <div class="input-group">
                    <span> * </span>
                    <input type="text" placeholder="Edit Expense"/>
                </div>
               
                <Link to="/curate" className="curate-plan"><button>Curate a Plan</button></Link>
            </div>
            <div class="box">
                <h2>Expense</h2>
                <div class="expenses-list">
                    <div class="transaction">Food</div>
                    <div class="transaction">Housing</div>
                    <div class="transaction">Transportion</div>
                    <div class="transaction">Savings</div>
                    <div class="transaction">Miscellaneous(10%)</div>
                </div>
            </div>
        </div>
        </div>
    </div>
  );
};

export default Dashboard;
