import logo from './logo.svg';
import './App.css';
import{BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import MainPage from './MainPage';
import Pricing from './Pricing';
import Developers from './Developers';
import Home from './Home';
import Channels from './Channels';
import Giveaways from './Giveaways';
import Profile from './Profile';
import DevHelp from './DevHelp';
import Videos from './Videos';

import ChannelInfo from './ChannelInfo';
import Video from './Video';
import AddChannel from './AddChannel';
import Subscribe from './Subscribe';
function App() {
  return (
    <Router>
    <Switch>


 <Route exact path="/" component={MainPage} />
 <Route exact path="/pricing" component={Pricing} />
 <Route exact path="/developers" component={Developers} />
 <Route exact path="/home" component={Home} />
 <Route exact path="/channels" component={Channels} />
 <Route exact path="/giveaways/:id" component={Giveaways} />
 <Route exact path="/profile" component={Profile} />
 <Route exact path="/devs" component={DevHelp} />
 <Route exact path="/view/:id" component={Videos} />
 <Route exact path="/info/:id" component={ChannelInfo} />
 <Route exact path="/video/:id" component={Video} />
 <Route exact path="/addchannel" component={AddChannel} />
 <Route exact path="/subscribe" component={Subscribe} />






 </Switch>
 </Router>
  );
}

export default App;
