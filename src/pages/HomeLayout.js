import { Component } from "react";
import { Outlet } from 'react-router-dom';
import Navbar from "../components/Navbar";
import MobileFooter from '../components/MobileFooter';


class HomeLayout extends Component {
  render () {
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
}

export default HomeLayout;