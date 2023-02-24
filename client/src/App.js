import React, { useContext } from 'react';
import axios from 'axios';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import Main from "./pages/main/Main"
import HotelInfo from './pages/hotel_info/HotelInfo';
import Hotel from './pages/hotel/Hotel';
import './reset.css'
import './app.scss'
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import { UserContext } from './UserContext';

function App() {
  const [hotels, addToHotels] = React.useState([])
  const [token, setToken] = React.useState(localStorage.getItem('accessToken'))
  const [user, setUser] = React.useState({})

  React.useEffect(() => {
    async function fetchUser(){
      try {
        localStorage.setItem('accessToken', token);
        if(token === ""){
          return
        }else{
          const [userResponse] = await Promise.all([
            axios.post('http://localhost:5000/api/user/byEmail',{
              email:localStorage.getItem("email")
            })
          ])
          
          console.log(userResponse.data.user);
          localStorage.setItem("currentUser", JSON.stringify(userResponse.data.user))
          setUser(userResponse.data.user)

          let test = JSON.parse(localStorage.getItem("currentUser"))
          console.log(test);
        }
      } catch (error) {
        throw error
      }
    }
    fetchUser()
  }, [token]);

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

          <Route path='/hotel' element={<Hotel/>}/>

          <Route path='/register' element={<Register/>}/>

          <Route path='/login' element={<Login/>} />
        </>
        
      )
    )

  
  return (
      <><UserContext.Provider value={{user, setUser}}>
        <RouterProvider router={router}/>
        </UserContext.Provider>
     </>
  );
}

export default App;
