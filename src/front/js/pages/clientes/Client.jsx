import React from "react";
import { useParams } from "react-router-dom";

const Client = () => {
  const { name } = useParams();
  return <div>client {name}</div>;
};

export default Client;
