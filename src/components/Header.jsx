import React from "react";
import { Input, Button } from "semantic-ui-react";
import { PAGE_TITLE } from "./constants";

export const Header = ({
  handleSearch,
  inputValue,
  setInputValue
}) => {
  return (
    <div className="header">
      <h1>{PAGE_TITLE}</h1>
      <form className="search-form" onSubmit={handleSearch}>
        <Input
          focus
          placeholder="Search..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="search-input"
        />
        <Button primary disabled={!inputValue}>
          Search
        </Button>
      </form>
    </div>
  );
};
