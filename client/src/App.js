import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Alarms from "./pages/alarms/Alarms";
import AlarmsEdit from "./pages/alarms/AlarmsEdit";
import Clean from "./pages/cleanliness/Clean";
import CleanEdit from "./pages/cleanliness/CleanEdit";
import Dashboard from "./pages/dashboard/Dashboard";
import Generator from "./pages/generator/Generator";
import GeneratorEdit from "./pages/generator/GeneratorEdit";
import Member from "./pages/member/Member";
import Crac from "./pages/cracs/Crac";
import CracEdit from "./pages/cracs/CracEdit";
import StatusEquip from "./pages/equipment-status/StatusEquip";
import StatusEquipEdit from "./pages/equipment-status/StatusEquipEdit";
import SplitUnit from "./pages/split-units/SplitUnit";
import SplitUnitEdit from "./pages/split-units/SplitUnitEdit";
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
          path: '/generators/:id',
          element: <GeneratorEdit />
        },
        {
          path: '/alarms',
          element: <Alarms />
        },
        {
          path: '/alarms/:id',
          element: <AlarmsEdit />
        },
        {
          path: '/cleanliness',
          element: <Clean />
        },
        {
          path: '/cleanliness/:id',
          element: <CleanEdit />
        },
        {
          path: '/cracs',
          element: <Crac />
        },
        {
          path: '/cracs/:id',
          element: <CracEdit />
        },
        {
          path: '/status',
          element: <StatusEquip />
        },
        {
          path: '/status/:id',
          element: <StatusEquipEdit />
        },
        {
          path: '/split_units',
          element: <SplitUnit />
        },
        {
          path: '/split_units/:id',
          element: <SplitUnitEdit />
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
