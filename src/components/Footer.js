function Footer(){
    //KEEP FOOTER UNDER CARDS SO IT DOESN'T OBSTRUCT CARDS VIEW
    return(
        <div style={{position:'fixed', width:'100%', backgroundColor:'#0d1163', height:'5vh'}}>
            <p style={{color:'white', fontWeight:'bold', textAlign:'center', zIndex:'2'}}> Developed by: David Joao Sandoval</p>
        </div>
    )
}

export default Footer