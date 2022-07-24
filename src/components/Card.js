import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { borderRadius, padding } from '@mui/system';

function Cards( { image, name, gender, species, status, location } ){
    return(
        <div className='card-background'>
            <Card className='card-container' 
            style={{ 
                boxShadow:'2px 3px 69px 12px rgba(0,0,0,0.97)', 
                backgroundColor:'rgba(255,255,255,0.7', 
                borderRadius:'10px' }} sx={{ maxWidth: 345 }}>
              <CardActionArea className='card-area'>
                <CardMedia
                    style={{ backgroundColor:'white', padding:'3px', borderRadius:'10px', border:'2px solid black', backgroundSize:'cover'}}
                  component="img"
                  height="140"
                  image={image}
                  alt="character"
                />
                <CardContent className='card-content'>
                  <Typography style={{color:'black'}} gutterBottom variant="h5" component="div">
                    {name}
                  </Typography>
                  <Typography style={{color:'black', fontSize:'20px'}} variant="body2" color="text.secondary">
                    Gender: {gender}
                  </Typography>
                  <Typography style={{color:'black', fontSize:'20px'}} variant="body2" color="text.secondary">
                    Species: {species}
                  </Typography>
                  <Typography style={{color:'black', fontSize:'20px'}} variant="body2" color="text.secondary">
                    Status: {status}
                  </Typography>
                  <Typography style={{color:'black', fontSize:'20px'}} variant="body2" color="text.secondary">
                    Location: {location}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

        </div>
    )
}

export default Cards