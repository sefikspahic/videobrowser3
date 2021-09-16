import React, { useState } from "react";
import { Header, Input, Segment, Icon } from "semantic-ui-react";

const Search = ({ setFind }) => {
  const [input, setInput] = useState("");

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const clickHandler = (e) => {
    setFind(input);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      clickHandler();
    }
  };

  return (
    <div style={{ padding: "15px" }}>
      <Segment style={{ padding: "10px" }} clearing>
        <Header as="h3" color="grey" floated="left">
        <Icon
            style={{ padding: "10px" }}
            name="video"
            circular
          
          />
          Video browser
        </Header>
        <Header as="h4" color="grey" floated="right">
          <Input
            icon={<Icon name='search'  onClick={clickHandler}
            onChange={changeHandler} inverted circular link />}
            placeholder="Search..."
            defaultValue={input}
            onClick={clickHandler}
            onChange={changeHandler}
            onKeyDown={handleEnter}
          />
        </Header>
      </Segment>
    </div>
  );
};

export default Search;
