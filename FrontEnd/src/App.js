import React from "react";
import { useState, useEffect } from "react";
import { ethers } from "../node_modules/ethers/dist/ethers.esm.js";

import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";

import poster1 from "./cequestre.jpeg";
import poster2 from "./nike.jpeg";
import poster3 from "./huawei.jpg";
// http://www.omdbapi.com/?apikey=6e486681

const API_URL = 'http://www.omdbapi.com/?apikey=6e486681';


const exp_companies = [
  {
      "Title": "Cequestre",
      "time_limit": "before 4.1.2023",
      "Type": "USDC 434.9 | 50 left",
      "Poster": poster1,
      "description": "Details: carbon capture services"
  },
  {
      "Title": "Nike",
      "time_limit": "before 4.4.2024",
      "Type": "USDC 620.6 | 82 left",
      "Poster": poster2,
      "description": "Details: sportswear"
  },
  {
    "Title": "Huawei",
    "time_limit": "before 3.5.2023",
    "Type": "USDC 500.2 | 74 left",
    "Poster": poster3,
    "description": "Details: electronic products"
  }
]

const company1 = {
    "Title": "Cequestre",
    "time limit": "4.1.2023",
    "Type": "£400 50 left",
    "Poster": "N/A"
}




const App = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);
  
    useEffect(() => {
      searchMovies("Batman");
    }, []);
  
    // design function to connect with API
    const searchMovies = async (title) => {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
  
      setMovies(data.Search);

      console.log(data.Search);
    };





    // connect to polygon

    // Init
        const { ethereum } = window;
        if (!ethereum) {
            alert("You don't have MetaMask!");
            return;
        }

    let accounts = [];

    async function getAccount() {
      accounts = await ethereum.request({ method: 'eth_requestAccounts' });

      // console.log({accounts[0]});
    }

    const transactionParameters = {
      nonce: '0x00', // ignored by MetaMask
      gasPrice: '0x09184e72a000', // customizable by user during MetaMask confirmation.
      gas: '0x2710', // customizable by user during MetaMask confirmation.
      to: '0x0000000000000000000000000000000000000000', // Required except during contract publications.
      from: ethereum.selectedAddress, // must match user's active address.
      value: '094C', // Only required to send ether to the recipient from the initiating external account.
      data:
        '0x7f7465737432000000000000000000000000000000000000000000000000000000600057', // Optional, but used for defining smart contract creation and interaction.
      chainId: '0x3', // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
    };

    
    async function sendTransaction () {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      // const signature = await signer.signMessage('sending transaction to address: 0xB42E438E16999AcB90531eaa621D91B72B9CB855');
      ethereum.request({
        method: 'eth_sendTransaction',
        params: [
          {
            from: '0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199',
            to: '0xB42E438E16999AcB90531eaa621D91B72B9CB855',
            value: '0x29a2241af62c0000',
            gasPrice: '0x09184e72a000',
            gas: '0x2710',
          },
        ],
      });
    };

    





// const movie1 = {
//     "Title": "Harry Potter and the Deathly Hallows: Part 2",
//     "Year": "2011",
//     "imdbID": "tt1201607",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
// };

    return (
      <div className="app">
        <button className="signin_btn" onClick={getAccount}>Sign In</button>

        <h1>Ethical Buy</h1>
  
        <div className="search">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for companies"
          />
          <img
            src={SearchIcon}
            alt="search"
            onClick={() => searchMovies(searchTerm)}
          />
        </div>

        {/* A JSX comment */}
        {/* <div className="container">
            <div className="movie">
                <div>
                    <p>{movie1.Year}</p>
                </div>

                <div>
                    <img src={movie1.Poster !== 'N/A' ? 
                    movie1.Poster : "https://via.placeholder.com/400"} 
                    alt={movie1.Title}/>
                </div>

                <div>
                    <span>{movie1.Type}</span>
                    <h3>{movie1.Title}</h3>
                </div>
            </div>
        </div> */}

        {exp_companies?.length > 0 ? (
          <div className="container">
            {exp_companies.map((movie) => (
              <MovieCard movie={movie} key={movie.Title.toString()}/>
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}
        <div className="buy_btn">
          <button className="send_btn" onClick = {sendTransaction}>BUY</button>
          <button className="send_btn" onClick = {sendTransaction}>BUY</button>
          <button className="send_btn" onClick = {sendTransaction}>BUY</button>
        </div>
      </div>
    );
  };
  
  export default App;
  