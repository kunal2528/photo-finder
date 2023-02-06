import React, {useState} from 'react';
import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function App() {

  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const fetchImages = () => {
    fetch(`https://api.unsplash.com/search/photos?client_id=1QY0dySjDyA9BfP6E0Cx9xCtyPq9Jl8L3EHljpD__LU&query=${search}&orientation=squarish&per_page=20`)
    .then(res=>res.json())
    .then(data => {
      setResults(data.results)
    })
  }
  return (
    <div>
      <div className='myDiv'>
        <TextField label="Search here" variant="outlined" value={search} onChange={(e) => setSearch(e.target.value)} size="small" style={{width: '50%'}} />
        <Button style={{marginLeft: '20px', padding: '7px 10px'}} variant="contained" onClick={fetchImages}>Search</Button>
      </div>
      <div className='gallery'>
        {
          results.map((item) => 
            <img className='item' key={item.id} src={item.urls.regular} alt={item.alt_description} />
          )
        }
      </div>
    </div>
    
  );
}

export default App;
