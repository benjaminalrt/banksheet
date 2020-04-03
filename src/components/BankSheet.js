import React from 'react';
import RowForm from './RowForm';
import RowList from './RowList';
import '../styles/App.css';

function BankSheet() {
  return (<div className="App">
        <RowForm />
        <RowList />
      </div>);
}

export default BankSheet;
