import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h3>Products</h3>
      <Outlet />
    </>
  );
}
export default Home;