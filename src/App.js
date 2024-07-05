import BlogDetails from "./components/BlogDetails";
import Create from "./components/Create";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NotFound from "./components/NotFound";

function App() {
  // const title = 'Welcome to the new blog';
  // const likes = 50;
  // const link = 'http://www.google.com';
  // const person = {name: "ps" , age: 20}
  // we cannot pass the objects or boolean characters inside the curly bracess. everything else we can do

  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path = "/">
            <Home />
          </Route>
          <Route path = "/create">
            <Create />
          </Route>
          <Route path = "/blogs/:id">
            <BlogDetails />
          </Route>
          <Route path = '*'>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
   </Router>
  );
}

export default App;
