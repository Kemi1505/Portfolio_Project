import React from 'react';
import './curate.css'

const Curate = () => {
  return (
    <div className='container'>
        
            <h1>Curate a plan</h1>
            <p>Enter the percentage you want to spend</p>
        
            <div class="expenses-list">
                <div class="transaction">Food</div>
                <div class="transaction">Housing</div>
                <div class="transaction">Transportion</div>
                <div class="transaction">Savings</div>
                <div class="transaction">Miscellaneous(10%)</div>
            </div>
        
        <div class="curate-plan"><button>Curate a Plan</button></div>
    </div>
  );
};

export default Curate;