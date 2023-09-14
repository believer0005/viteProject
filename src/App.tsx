import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import AboutProduct from './components/about/AboutProduct'

function App() {
  
  return (
    <div>
      <Header />
      <AboutProduct />
      <Home />
    </div>
  )
}

export default App
