import { useState } from 'react';
import './App.css';
import Sign from './Sign';
import Home from './Home';

function App() {
  const [page1,setpage1] = useState(false)
  const [data,setdata] = useState('')

  return (
    <div className="App">
      {page1 ? 
        <Home 
          data={data}
        />
      :
        <Sign 
          setpage1={setpage1}
          setdata={setdata}
        />}
    </div>
  );
}

export default App;