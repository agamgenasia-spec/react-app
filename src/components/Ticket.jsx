function Ticket ({price ,seat ,hall ,movie ,count})
{
    return(
        <div>
            <h3> {movie} </h3>
            <p>  Hall {hall} | Seat {seat} </p>
            <p> Price: {price} NIS | With popcorn: {price+15} NIS</p>
            <p> Tickets: {count} </p>
            <p> Total: {count*price} NIS</p>
        </div> 

    );
}
export default Ticket;