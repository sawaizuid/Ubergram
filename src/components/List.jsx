import React from "react";
import { Loader } from "semantic-ui-react";

/* 
  List is the component which renders the images where the urls are passed in the state array 
  and also controls the toggle layout based on the width with the spinner, Loader
  @params 
    state : array of image urls
    checked: bool,  Layout dimesion to be 1-column or 3-column, deafult is 1 col layout
    loading: bool, for rendering the spinner
*/


export const List = ({ state, checked, loading }) => {
  return (
    <div className="image-list">
    <ul className="list" style={{ maxWidth: checked ? "700px" : "300px" }}>
      {state.map((img, i) => (
        <li style={{ backgroundImage: `url(${img})` }} key={i} />
      ))}
      {loading && <Loader size="big" active inline="centered" />}
    </ul>
    </div>
  );
};
