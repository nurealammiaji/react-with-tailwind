import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Navbar from './components/Navbar/Navbar';
import ProductList from './components/ProductList/ProductList';

function App() {

  return (
    <>
      <Navbar></Navbar>
      <ProductList></ProductList>
      <br /><br /><br />
      <div>
        <h1 className='text-3xl font-bold text-center'>Line Chart</h1>
        <br /><br />
        <Dashboard></Dashboard>
      </div>
    </>
  )
}

export default App;
