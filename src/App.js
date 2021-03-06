import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const api = async (keyword) => {
  const page = Math.ceil(Math.random() * 1000);
  const response = await fetch(`https://api.pexels.com/v1/search?query=${keyword}&per_page=1&page=${page}`, {
    headers: {
      Authorization: '563492ad6f9170000100000199559b8bae494fa0bfc8281b854bebd5'
    }
  });
  const result = await response.json();
  return result;
}

function App() {
  const [image, setImage] = useState(logo);
  useEffect(async() => {
    const resp = await api('cat');
    setImage(resp.photos[0].src.medium);
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={image} className="cat" alt="cat" />
      </header>
    </div>
  );
}

export default App;
