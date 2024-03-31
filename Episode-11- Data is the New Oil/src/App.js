import React, { lazy,Suspense, useEffect,useState } from "react";
import UserContext from "./utills/UserContext";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";





 const Grocery = lazy(() =>import("./components/Grocery"));

 const About = lazy(() =>import("./components/About"));

const AppLayout = () => {


      const [userName,setUserName] = useState();

      // Authentication

      useEffect(() =>{
         
        const data = {
              name:"Mohit",
        }
         setUserName(data.name);

      },[]);



  return (

    <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
          <div className="app">
              <Header />
              <Outlet/>
          </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
    {
       path: "/",
       element: <AppLayout/>,
       children:[
        {
           path : "/",
           element:<Body/>
        },
        {
          path: "/about",
          element: <Suspense fallback={<h1>Loading...</h1>}><About/></Suspense>,
       },
       {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>,
      },
      {
         path: "/restaurants/:resId",
         element:<RestaurantMenu/>
      }
    ],
       errorElement:<Error/>,
    },
])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);