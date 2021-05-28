import React, { useState, useEffect } from "react";
import { Header } from "./Header";
import { List } from "./List";
import { API_KEY } from "./constants";
import { LayoutToggle } from "./LayoutToggle";

/* 
  Ubergram is the parent-component which renders the child components and have the api call. 
  @params 
    state : state of the application
    setState: custom method for setting the state of the application
*/

export const Ubergram = ({ state, setState }) => {
  const [load, setLoad] = useState(true);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [checked, setChecked] = useState(false);

  const api_url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchValue}&limit=10&offset=${offset}&rating=G&lang=en`;

  /* API call method to get the list of URLs for the images */
  const getData = () => {
    if (searchValue && load) {
      setLoading(true);
      fetch(api_url)
        .then((response) => response.json())
        .then(
          (response) => {
            setState([
              ...state,
              ...response.data.map((item) => item.images.original.url),
              
            ]);
            setOffset(offset + 5);
            setLoading(false);
          },
          (error) => {
            setState({
              error,
            });
            console.log(error);
            setLoading(false);
          }
        );
    }
  };

  /* API call method to get the list of URLs for the images on scroll*/
  useEffect(() => {
    getData();
    setLoad(false);

    const list = document.querySelector(".list");
    window.addEventListener("scroll", () => {
      if (
        window.scrollY + window.innerHeight ===
        list.clientHeight + list.offsetTop
      ) {
        setLoad(true);
      }
    });
  }, [load]);

  useEffect(() => {
    const list = document.querySelector(".list");
    if (list.clientHeight <= window.innerHeight && list.clientHeight) {
      setLoad(true);
    }
  }, [state]);

   /* Method to reset the state and local state for new search query*/
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchValue(inputValue);
    setState([]);
    setOffset(0);
    setLoad(true);
    getData();
  };

  return (
    <div>
      <Header
        handleSearch={handleSearch}
        inputValue={inputValue}
        setInputValue={setInputValue}
        setChecked={setChecked}
        checked={checked}
      />
      <hr/>
      {state.length > 1 && <LayoutToggle setChecked={setChecked} checked={checked} />}
      <List state={state} checked={checked} loading={loading} />
      {searchValue && state.length === 0 && <div> No data found. Please try a valid query. </div>}
    </div>
  );
};