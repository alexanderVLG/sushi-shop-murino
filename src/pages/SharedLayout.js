import { Component } from "react";
import { Outlet } from 'react-router-dom';
import Navbar from "../components/Navbar";
import About from "../components/About";
import Footer from '../components/Footer';


class Home extends Component {
  render () {
    return (
      <>
        <header>
          <Navbar />
        </header>
        <Outlet />
        <About />
        <Footer />
      </>
    );
  }
}

export default Home;