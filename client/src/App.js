import React from 'react';
import axios from 'axios';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
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

    const router = createBrowserRouter(
      createRoutesFromElements(
        <>
          <Route path='/' element={
            <div className='main-page'>
              <Main hotels={hotels} />
            </div>
          }/>

          <Route path='/hotels' element={<HotelInfo hotels={hotels}/>}/>
        </>
      )
    )

  
  return (
      <>
        <RouterProvider router={router}/>
     </>
  );
}

export default App;
