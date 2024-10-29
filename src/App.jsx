import React from 'react'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter,RouterProvider, useLocation  } from 'react-router-dom'
import Login from './Pages/Login'
import Register from './Pages/Register';
import StdHome from './Pages/StdHome';
import AdminHome from './Pages/AdminHome';
import StdDash from './Pages/StdDash';
import StdEvents from './Pages/StdEvents';
import StdLeaderboard from './Pages/StdLeaderboard';
import Navbar from './Pages/Navbar';


const router = createBrowserRouter(
    [
      {path : "/",
        element : <Login />,
      },
      {path : "/register",
        element : <Register />,},

        {path : "/adminhome",
          element : <AdminHome />,},

      {path : "/stdHome",
        element :
         <div>
          <Navbar/>
          <StdHome/>
        </div>
      },

  

      {path : "/stddash",
        element : 
        <div>
        <Navbar/>
        <StdDash/>
      </div>},

      {path : "/stdevents",
        element : 
        <div>
          <Navbar/>
          <StdEvents/>
        </div>},

      {path : "/stdleaderboard",
        element :   <div>
        <Navbar/>
        <StdLeaderboard/>
      </div>},

     
        ]
);




const App = () => {
 
  return (
    <div>
        
         <RouterProvider router={router} />
    </div>
  )
}

export default App

