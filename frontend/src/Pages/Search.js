import "./Allbooks.css";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Search() {
  const [books, setBooks] = useState([]);
  const API_URL = process.env.REACT_APP_API_URL
  const parts = document.URL.split('/');
  


  useEffect(() => {
    axios
      .get(API_URL + 'api/books/search/'+ parts.at(-1) )
      .then((response) => {
        setBooks(response.data);
        console.log(response.data[0].categories[0].categoryName)
      })
      .catch((error) => {
        console.error('There was an error fetching the data!', error);
      });
  }, [API_URL]);


  return (
    <div className="books-page">
      <div className="books">
        {books.map((book, index) => (
          <div className="book-card" key={index}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp16xiXu1ZtTzbLy-eSwEK4Ng6cUpUZnuGbQ&usqp=CAU"
              alt=""
            ></img>
            <p className="bookcard-title">{book.bookName || 'Unknown Title'}</p>
            <p className="bookcard-author">{`By ${book.author || 'Unknown Author'}`}</p>
            <div className="bookcard-category">
            <p>
            {book.categories.map((cc, index) => (
                  <span  >{cc.categoryName || 'Unknown Category'}</span>
              ))}
             </p>

            </div>
            <div className="bookcard-emptybox"></div>
          </div>
        ))}
      </div>
    </div>
  );
}



export default Search;
