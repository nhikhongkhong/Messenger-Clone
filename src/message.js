import { Card, CardContent, Typography } from "@material-ui/core";
import React, { forwardRef } from "react";
import "./message.css";

const message = forwardRef(({ message, userName }, ref) => {
  const isUser = userName === message.userName;
  return (
    <div ref={ref} className={`message ${isUser && "message_user"}`}>
      <Card className={isUser ? "message_userCard" : "message_guestCard"}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {!isUser && `${message.userName || "Annonymous"}  : `}
            {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default message;
