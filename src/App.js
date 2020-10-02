import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import "./App.css";
import Message from "./message";
import { FormControl, IconButton, Input, InputLabel } from "@material-ui/core";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [userName, setUsername] = useState("");

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            message: doc.data(),
          }))
        );
      });
  }, []);

  useEffect(() => {
    setUsername(prompt("Enter your user name"));
  }, []);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection("messages").add({
      message: input,
      userName: userName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" />
      <h1>Messenger Clone</h1>
      <h2>Welcome {userName}</h2>

      {/* input field */}
      {/* button */}
      <form className="app_form">
        <FormControl className="app_formControl">
          <Input
            className="app_input"
            placeholder="Enter a message ..."
            value={input}
            onChange={handleChange}
          />
          <IconButton
            className="app_iconButton"
            disabled={!input}
            onClick={sendMessage}
            variant="contained"
            type="submit"
            color="primary"
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      {/* messeages themselves */}
      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} userName={userName} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
