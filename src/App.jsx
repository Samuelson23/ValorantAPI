import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import './App.css'

function App() {
  const res = new Response()
  console.log("res",res)
  return (
    <>
      <Header/>
      <main><Outlet/></main>
      <Footer/>
    </>
  )
}

export default App
