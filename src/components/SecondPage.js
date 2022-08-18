import * as React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { useState } from 'react'
import Cards from "./Cards";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Footer from "./Footer";


function SecondPage(){

    let [ nameChar, setNameChar ] = useState('')
    
    let [ page, setPage ] = useState([{
        name: 'Example',
        gender: 'Male',
        species: 'Human',
        status: 'Alive',
        image: 'https://www.looper.com/img/gallery/the-other-back-to-the-future-reference-you-missed-in-rick-and-morty/intro-1618319353.jpg'

    }])
    
    let [ count, setCount ] = useState(1)


    //HANDLES INCREMENT IN COUNT, RETURNS NEXT PAGE
    const handleIncrement = () => {

        setCount(count+1)
        console.log(count)
        fetch(`https://rickandmortyapi.com/api/character/?page=${count}`)
        .then((res) => res.json())
        .then((data) => {
            page = data.results;
            setPage(page);
        })
        .catch((err) => console.log(err))
    }

    // HANDLES DECREMENT AND RETURNS TO PREVIOUS PAGE
    const handleDecrement = () => {

        setCount(count-1)
    
        fetch(`https://rickandmortyapi.com/api/character/?page=${count}`)
        .then((res) => res.json())
        .then((data) => {
            page = data.results;
            setPage(page);
        })
        .catch((err) => console.log(err))
    }

    //JUST AVOIDS COUNT GOING TO LESS THAN 1

    if(count<1){
        setCount(1)
    }
    
    //GETS VALUE FROM INPUT
    function handleChange(e){

        nameChar = e.target.value;
        setNameChar(nameChar)
    }
    
    //HANDLES SEARCH BUTTON AND RETURNS CARDS WITH USER VALUE
    function handleClick(){
            
    fetch(`https://rickandmortyapi.com/api/character/?name=${nameChar}&page=${count}`)
    .then((res) => res.json())
    .then((data) => {
        page = data.results;
        setPage(page);
    })
    .catch((err) => console.log(err))
    }


    //HANDLES LOAD MORE BUTTON, SHOWS PAGE 1 OF MAIN CHARACTERS
    function handleLoadMore(){

        fetch(`https://rickandmortyapi.com/api/character/?page=${count}`)
        .then((res) => res.json())
        .then((data) => {
            page = data.results;
            setPage(page);
        })
        .catch((err) => console.log(err))
    }

    //RETURNS TO MAIN PAGE (PAGE 1)
    function handleReturn(){

        setCount(count=0)
        fetch(`https://rickandmortyapi.com/api/character/?page=${count}`)
        .then((res) => res.json())
        .then((data) => {
            page = data.results;
            setPage(page);
        })
        .catch((err) => console.log(err))
    }

    return(
        <div className="second-page">

            <div className="specific-search">
                <h2 style={{ color:'white', margin:'0 auto', marginTop:'5%' }}>Look for a specific character</h2>
                <Box style={{ margin: '0 auto', marginTop:'5px', borderRadius:'10px', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    >

                    <TextField onChange={handleChange} style={{ margin: '0 auto', backgroundColor:'rgba(255,255,255,0.7', color:'white', borderRadius:'10px' }} id="outlined-basic" label="Enter a character's name" variant="outlined" />
                    <Button style={{ backgroundColor:'black', color:'white', border:'1px solid white', height:'50px', borderRadius:'10px' }} onClick={handleClick}>Search</Button>
                </Box>

            </div>

                <div className="more-container">
                <h1 style={{color:'white'}}>or</h1>
                 <Button onClick={handleLoadMore} style={{ backgroundColor:'black', color:'white', border:'1px solid white', height:'auto' }}className="more-text">Click to Load More Characters</Button>
    
                </div>

                <ButtonGroup className="button-group" disableElevation variant="contained">
                    <Button style={{ backgroundColor:'black', color:'white', border:'1px solid white' }} onClick={handleDecrement}>Previous Page</Button>
                    <Button style={{ backgroundColor:'black', color:'white', border:'1px solid white' }} onClick={handleIncrement}>Next Page</Button>
                    <Button style={{ backgroundColor:'black', color:'white', border:'1px solid white' }} onClick={handleReturn}>Return to page 1</Button>
                </ButtonGroup>


            <div className="cardss-container">
                {page.map((chars) => (
                    <Cards name={chars.name} image={chars.image} gender={chars.gender} species={chars.species} status={chars.status}/>
                ))}
            </div>
            <ButtonGroup className="button-group2" disableElevation variant="contained">
                <Button style={{ backgroundColor:'black', color:'white', border:'1px solid white' }} onClick={handleDecrement}>Previous Page</Button>
                <Button style={{ backgroundColor:'black', color:'white', border:'1px solid white' }} onClick={handleIncrement}>Next Page</Button>
                <Button style={{ backgroundColor:'black', color:'white', border:'1px solid white' }} onClick={handleReturn}>Return to page 1</Button>
            </ButtonGroup>
            <Footer />
        </div>
    )
}

export default SecondPage