import React, { useMemo } from "react";
import SocketContext from "./SocketContext";
import { io } from "socket.io-client";

const SocketProvider = (props) => {

  const socket = useMemo(() => io("localhost:8000"), []);

  return (
    <SocketContext.Provider value={{socket}}>
      {props.children}
    </SocketContext.Provider>
  );
};

export default SocketProvider