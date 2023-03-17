import logo from './logo.svg';
import './App.css';
import {data} from './data'
import { useState } from 'react';
function App() {
  const [people, setPeople] = useState(data);
  function clearAll(){
    setPeople([])
    
  }
  return (
    <div className="App">
      <h2>{`${people.length} Birthdays Today`}</h2>
      {people.map((person) =>{
        const{image, name, age} = person
        return <div className='item'>
          {image}
        <div className="info">
        <h3>{name}</h3>
        <div className="age">
          {age}
        </div>
        </div>
        </div>
      })}

      <button className="btn" onClick={clearAll}>Clear All</button>
    </div>
  );
}

export default App;
