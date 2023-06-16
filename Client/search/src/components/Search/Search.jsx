import React, { useEffect, useState } from "react";
import { SearchInput } from "./SearchInput/SearchInput";
import { SearchList } from "./SearchList/SearchList";
import axios from "axios";
import "./Search.css";

const API_URL =
  "http://localhost:3005/api/movies/";

export const Search = () => {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [searchList, setSearchList] = useState([]);

  const handleChange = (event) => {
    setSearchInputValue(event.target.value);
  };


 

  const fetchMovies = async () => {
    try {
      const response = await axios(API_URL, {
        params: {
          movieName:searchInputValue,
        },
      });
 
      setSearchList(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (searchInputValue) {
        fetchMovies();
      }
    }, 300);

    return () => {
      clearTimeout(timeout);
    };
  }, [searchInputValue]);

  return (
    <div className="search-container">
      <div className="heading-section">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3917/3917132.png"
          alt=""
        />
        <h1>Search your Movie here</h1>
      </div>
      <SearchInput
        searchList={searchList}
        searchInputValue={searchInputValue}
        handleChange={handleChange}
       
      />
     
     <SearchList searchList={searchList} />

      
    </div>
  );
};