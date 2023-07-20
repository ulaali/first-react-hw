import logo from './logo.svg';
import './App.css';
import parentimg from "./images.jpg"
import Counter from "./Button"
import Heading from "./Heading"

//Parent
function App() {
  console.log("hello from the main page ,the Parent");
  return (
    <div className="App">
      <Heading/>
      <div className='parent'><h1>this is ula ali from main Component</h1>
      <img src={parentimg} /></div>
      <Counter/>
    </div>
  );
}

export default App;
