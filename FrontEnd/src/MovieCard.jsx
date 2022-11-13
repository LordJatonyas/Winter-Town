import React from "react";


const MovieCard = ({movie}) => {
    return (
        <div className="movie">
            <div>
                <p>{movie.time_limit}</p>
            </div>
            <div>
                <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"} alt={movie.Title}/>
            </div>

            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
            <div>
                <h3>{movie.description}</h3>
                {/* <button className="sendEthButton btn" onClick = {()=> {}}>BUY</button> */}
            </div>
        </div>
    );
}

export default MovieCard; 