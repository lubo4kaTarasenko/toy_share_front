import './App.css';
import Header from './components/header';
import Home from './components/home';
import Footer from './components/footer';
import { BrowserRouter as Router, Switch,  Route } from "react-router-dom";
import Profile from './components/profile';
import UserProfile from './components/userProfile';
import AboutUs from './components/aboutUs';
import ShowProduct from './components/showProduct';

function App() {
  return (
    <div className="App">
       <Router>
        <Header/>         
        <Switch>    
          <Route path="/profile" component={Profile}/>
          <Route path="/userProfile/:email" component={UserProfile}/>
          <Route path="/aboutUs" component={AboutUs} />  
          <Route path="/product/:url_name" component={ShowProduct} />    
          <Route path="/home" component={Home}/>
          <Route path="" component={Home}/>                          
        </Switch>              
       </Router>
     <Footer/>
    </div>
  );
}

export default App;
