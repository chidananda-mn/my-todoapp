import './App.css';
import { useState} from 'react'
import { RenderListItems} from './RenderListItems'

function App() {
  const [currentItem, setCurrentItem] = useState(null);
  const [selectedItemsList, setSelectedItemsList] = useState([]);
  
  const inputHandler = (e)=> {
    setCurrentItem(e.target.value)
  }
  const addItems = ()=> {
    setSelectedItemsList([...selectedItemsList, { item: currentItem,key:Date.now()}])
    setCurrentItem('')
  }
 
  return (
    <div className="App">
      <header className="App-header">
      <div className="Wrapper">  
      <div className="Input-wrapper">
            <input  value={currentItem} onChange={inputHandler}/>
          <button onClick={addItems}>Add</button> 
        </div> 
          <RenderListItems selectedItemsList={selectedItemsList} setSelectedItemsList={setSelectedItemsList}/>       
      </div>
        </header>
    </div>
  );
}

export default App;
