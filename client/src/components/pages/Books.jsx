import React from 'react';
import { useState, useEffect } from 'react';

const Books = () => {
  const url = 'https://openlibrary.org/search';
  const [data, setData] = useState();

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));
    console.log(data);
  }, []);

  return (
    <div>
      <ul>
        Books by fetch
      </ul>
    </div>
  );
}

export default Books
