import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';  
import Header from './components/Header.jsx'
import Sidebar from './components/Sidebar.jsx'

function App() {
  return (
   <Router>
    <Header />
    <Sidebar />
    <Routes>
      <Route></Route>  
    </Routes>
   </Router>
  );
}

export default App;
