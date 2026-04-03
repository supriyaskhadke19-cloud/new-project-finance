function Card({title,value }){
    return (
        <div style={{ border:"1px solid gray",padding: "20px",margin: "10px"}}>
            <h3>{title}</h3>
            <p>{value}</p>
        </div>
    );
}


export default Card;