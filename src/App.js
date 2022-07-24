
import './App.css';
import Cards from './components/Card';
import { useState } from 'react' 

function App() {
  
  let [charData, setData ] = useState({

  })

  fetch ('https://rickandmortyapi.com/api/character')
  .then((res) => {return res.json()})
  .then((data) => {
    charData = data;
    
    charData = {
      image: data.results[0].image,
      name: data.results[0].name,
      gender: data.results[0].gender,
      species: data.results[0].species,
      status: data.results[0].status,
      location: data.results[0].location.name,
    }

    setData(charData)

  })
  .catch((err) => {
    console.log(err)
  })

  return (
    <div className="Main">
      <Cards name={charData.name} image={charData.image} gender={charData.gender}
      species={charData.species} status={charData.status} location={charData.location} />
    </div>
  );
}

export default App;
