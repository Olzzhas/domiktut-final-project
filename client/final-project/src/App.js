import React from 'react';
import axios from 'axios';

import Main from "./pages/main/Main"
import HotelInfo from './pages/hotel_info/HotelInfo';
import './reset.css'
import './app.scss'

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
      <div className='main-page'>
        <Main hotels={hotels} />
      </div>
      
      {/* <HotelInfo/> */}
    </div>
  );
}

export default App;
