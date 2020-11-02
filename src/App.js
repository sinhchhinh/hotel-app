import './App.css';
import  Home from './components/Home';
import  Rooms from './components/Rooms';
import  SingleRoom from './components/SingleRoom';
import  Error from './components/Error';
import  Navbar from './components/Navbar';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar>

      </Navbar>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/rooms/" component={Rooms}/>
        <Route exact path="/rooms/:slug" component={SingleRoom}/>
        <Route component={Error} />
      </Switch>
      
    </div>
  );
}

export default App;
