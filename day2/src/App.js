
import './App.css';
import {useState} from 'react';
import Home from './components/Home'

function App() {

  const [color, setcolor] = useState("white")
  const [button, changecolor] = useState("pink")
 
  const colors = ["red", "green", "blue", "aliceblue", "cornflowerblue", "purple", "pink", "violet", "black", "white", "cadebtblue",
   "coral", "aqua", "aquamarine", "beige", "bisque", "blanchedalmond"]
  function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];

    return item;
}
  const change_color =() =>{
    setcolor(getRandomItem(colors));
    changecolor(getRandomItem(colors));
    
  }




  return (
    <body style={{backgroundColor: color, paddingTop: '19%', paddingBottom: '18%'}}>
    <div className='App'>
      <Home bgcolor= {color}/>
      <button onClick={change_color} style={{backgroundColor: button, marginTop: "30px"}}><center>Change Background color</center></button>
    </div>
    </body>
  );
}

export default App;
