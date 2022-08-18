import { Carousel } from 'react-bootstrap'
import Cards from './Cards'
import { useState } from 'react'

function TheCarousel( ){



  let [charData, setData ] = useState([{}])

    
  fetch ('https://rickandmortyapi.com/api/character')
  .then((res) => {return res.json()})
  .then((data) => {
    charData = data.results;


    setData(charData)

  })
  .catch((err) => {
    console.log(err)
  })

    return(
        <Carousel className='carousel-main'>
          {charData.map((chars) => (
            <Carousel.Item key={chars.id} chars={chars} >
                <Cards name={chars.name} image={chars.image} gender={chars.gender} species={chars.species} status={chars.status}/>
            </Carousel.Item>
            ))}
      </Carousel>
    )
}

export default TheCarousel