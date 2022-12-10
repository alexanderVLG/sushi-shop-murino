import { Component } from "react";
import { Outlet } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';


class HomeLayout extends Component {
  render () {
    return (
      <>
        <header>
          <Navbar />
        </header>
        <Outlet />
        <Footer />
      </>
    );
  }
}

export default HomeLayout;