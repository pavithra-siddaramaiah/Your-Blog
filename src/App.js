import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  // const title = 'Welcome to the new blog';
  // const likes = 50;
  // const link = 'http://www.google.com';
  // const person = {name: "ps" , age: 20}
  // we cannot pass the objects or boolean characters inside the curly bracess. everything else we can do

  return (
   <div className="App">
    <Navbar />
    <div className="content">
      <Home />
      {/* <h1>{ title }</h1>
      <p>Liked { likes } times</p>
      <a href = {link}>Google site</a> */}

    </div>
   </div>
  );
}

export default App;
