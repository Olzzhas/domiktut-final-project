import React from 'react';
import axios from 'axios';

import Main from "./pages/Main"
import './reset.css'

function App() {
  const [hotels, addToHotels] = React.useState([])

    React.useEffect(() => {
      async function fetchData() {
        try {
          const [itemsResponse] = await Promise.all([
            axios.get('http://localhost:5000/api/getAllHotels'),
          ]);
          const obj = itemsResponse.data
          addToHotels(obj)
        } catch (error) {
          console.log(error);
        }
      }
      fetchData();
    }, []);
  
  return (
    <div>
      <Main hotels={hotels} />
    </div>
  );
}

export default App;
