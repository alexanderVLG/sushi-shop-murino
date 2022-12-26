import React from "react";
import { Outlet } from 'react-router-dom';
import Navbar from "../components/Navbar";
import MobileFooter from '../components/MobileFooter';


export default function HomeLayout () {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <MobileFooter />
      </footer>
    </>
  );
}

