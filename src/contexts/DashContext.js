import { createContext, useState } from 'react';

const TransactionContext = createContext();

const TransactionProvider = ({ children }) => {  
  
  const [List, setList] = useState({
    items: [
    { id: 1, name: 'Food' },
    { id: 2, name: 'Housing' },
    { id: 3, name: 'Transportation' },
    { id: 4, name: 'Savings' },
    { id: 5, name: 'Miscellaneous (10%)' },
    ],
});
const [Income, setIncome] = useState('');
const [results, setResults] = useState({});

  return (
    <TransactionContext.Provider value={{ list: List.items, setList,Income, setIncome,results, setResults }}>
      {children}
    </TransactionContext.Provider>
  );
};

export { TransactionProvider, TransactionContext };