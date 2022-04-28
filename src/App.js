import React, {useState} from 'react';
import './App.css';

const serverUrl = 'http://localhost:3001/';
const hashes = {
  SHA256: 'sha256',
  STREEBOG: 'streebog',
}

function App() {

  const [value, setValue] = useState('');
  const [hash, setHash] = useState('');


  const handleSha256Click = async () => {
    try {
      const res = await fetch(serverUrl + `hash/${hashes.SHA256}?value=${value}`);
      const data = await res.json();
      setHash(data.hash);
    } catch(e) {
      console.log(e);
    }
  }

  const handleStreebogClick = async () => {
    try {
      const res = await fetch(serverUrl + `hash/${hashes.STREEBOG}?value=${value}`);
      const data = await res.json();
      setHash(data.hash);
    } catch(e) {
      console.log(e);
    }
  }

  return (
    <div className="App">
      <h1>SHA256 and STREEBOG</h1>
      <div className='container'>
        <div className='row'>
          <input placeholder='String to hash' onChange={(e) => setValue(e.target.value)} value={value}/>
          <button onClick={handleSha256Click} className='hash-button'>SHA-256</button>
          <button onClick={handleStreebogClick} className='hash-button'>STREEBOG</button>
        </div>
        <div className='result'>Result: {hash}</div>
      </div>
    </div>
  );
}

export default App;
