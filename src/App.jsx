import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';

function App() {
  const res = new Response()
  console.log("res",res)
  return (
    <>
      {
        res.status==200
        ? (
          <>
          <Header/>
          <main><Outlet/></main>
          <Footer/>
          </>
        )
        : (
          <>
          <Header/>
          <main><Home/></main>
          <Footer/>
          </>
        )
      }
    </>
  )
}

export default App
