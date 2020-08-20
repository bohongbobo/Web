import React, { useState, useEffect } from "react";
import "./AutoCompelete.css";

const AutoCompelete = () => {
  const [users, setUsers] = useState([]);
  const [searchInput, setsearchInput] = useState("");
  const [getTarget, setgetTarget] = useState(false);

  const handleChange = (e) => {
    setsearchInput(e.target.value);
    setgetTarget(true);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleClick = (e) => {
    setsearchInput(e.target.innerText);
    setgetTarget(!getTarget);
  };

  const searchOutput = () => {
    const filteredUser = users.filter((user) =>
      user.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    const searchTarget = filteredUser.map((user) => (
      <p key={user.id} onClick={handleClick}>
        {user.name}
      </p>
    ));
    return searchTarget;
  };

  const showOutput = () => {
    return !getTarget || searchInput === "" ? "" : searchOutput();
  };

  return (
    <div className="autocompelete">
      <div className="input">
        <h4>Auto Complete</h4>
        <p>Enter text</p>
        <input id="autoinput" type="text" value={searchInput} onChange={handleChange} />
        {showOutput()}
      </div>
    </div>
  );
};
export default AutoCompelete;
