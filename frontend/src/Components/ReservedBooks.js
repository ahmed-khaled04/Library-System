import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ReservedBooks.css'

function ReservedBooks() {

    const API_URL = process.env.REACT_APP_API_URL;
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        axios
          .get(API_URL + 'api/transactions/books-on-hold')
          .then((response) => {
            setTransactions(response.data);
          })
          .catch((error) => {
            console.error('There was an error fetching the data!', error);
          });
      }, [API_URL]);

    return (
        <div className='reservedbooks-container'>
            <h className='reservedbooks-title'>Books On Hold</h>
            <table className='reservedbooks-table'>
                {transactions.map((transaction , index) => (
                    <tr key={index}>
                    <th>{transaction.borrowerName}</th>
                    <th>{transaction.bookName}</th>
                    <th>{transaction.fromDate}</th>
                </tr>
                ))}
            </table>
        </div>
    )
}

export default ReservedBooks
