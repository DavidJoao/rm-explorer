import { Button } from "react-bootstrap"

function More(){



    return(
        <div className="more-container">
            <Button style={{ backgroundColor:'black', color:'white', border:'1px solid white', height:'auto' }}className="more-text">Click to Load More Characters</Button>
            <h1 style={{color:'white'}}>or</h1>

        </div>
    )
}

export default More