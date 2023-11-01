import React, { useState, useEffect } from 'react';

function MyResponse() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/response', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
        console.log("alkf")
        console.log(data)
  }, []);





  return (
    <div>
      <h1>Data forms</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default MyResponse;
