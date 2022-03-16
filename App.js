import './App.css';
import './Home.css'
import Policies from './Policies';
import Intro from './Intro';
import Navbar from './Navbar';
import Home from './Home';
import fixback from './fixback.jpg'
import {BrowserRouter,Route} from 'react-router-dom';
import Form from './Form';

export default function App()
{
   return (
         <div>
       <center>
      
         <BrowserRouter>
           <Navbar/>
           <hr></hr>
           
        <Route path="/home" component={Home}/>
       
        <Route path="/Intro" component={Intro}/>
        <Route path="/Policies" component={Policies}/>
        <Route path = "/Login" component= {Form}/>
 
      </BrowserRouter> 
      </center>
         </div>
   );
}