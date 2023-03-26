import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Alarms from "./pages/alarms/Alarms";
import Clean from "./pages/cleanliness/Clean";
import Dashboard from "./pages/dashboard/Dashboard";
import Generator from "./pages/generator/Generator";
import Member from "./pages/member/Member";
import Crac from "./pages/cracs/Crac";
import StatusEquip from "./pages/equipment-status/StatusEquip";
import SplitUnit from "./pages/split-units/SplitUnit";
import Temperature from "./pages/temperatures/Temperature";
import TemperatureEdit from "./pages/temperatures/TemperatureEdit";
import Ups from "./pages/ups/Ups";
import UpsEdit from "./pages/ups/UpsEdit";

function App() {
  const Layout = () =>{

    return (
      <div className="app">
        <Topbar />
        <div style={{display: 'flex'}}>
          <Sidebar />
          <div style={{flex: 6, marginTop: 35}}>
            <Outlet />
          </div>
        </div>        
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children:[
        {
          path: '/',
          element: <Dashboard />
        },
        {
          path: '/members',
          element: <Member />
        },
        {
          path: '/generators',
          element: <Generator />
        },
        {
          path: '/alarms',
          element: <Alarms />
        },
        {
          path: '/cleanliness',
          element: <Clean />
        },
        {
          path: '/cracs',
          element: <Crac />
        },
        {
          path: '/status',
          element: <StatusEquip />
        },
        {
          path: '/split_units',
          element: <SplitUnit />
        },
        {
          path: '/room_temperature',
          element: <Temperature />
        },
        {
          path: '/room_temperature/:id',
          element: <TemperatureEdit />
        },
        {
          path: '/ups',
          element: <Ups />
        },
        {
          path: '/ups/:id',
          element: <UpsEdit />
        },
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
