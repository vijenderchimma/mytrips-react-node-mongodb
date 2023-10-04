import { BrowserRouter,Route,Switch } from 'react-router-dom'
import Home from './components/Home'
import './App.css'
import Temples from './components/Temples';

const App = () =>(
<BrowserRouter>
<Switch>
  <Route exact path ="/" component = {Home} />
  <Route exact path ='/temples' component = {Temples} />
</Switch>
</BrowserRouter>
)


export default App;