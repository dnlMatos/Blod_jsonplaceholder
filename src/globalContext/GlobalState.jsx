import React, { useState } from "react";
import { useEffect } from "react";
import { getPosts } from "../requests/requests";
import { Context } from "./context";

export default function GlobalState(props) {  
  const [postsList, setPostsList] = useState([]);

  useEffect(() => {
    getAllPosts();
  }, []);

  const getAllPosts = async () => {
    const response = await getPosts();
    setPostsList(response)
  };

  return <Context.Provider value={{postsList, setPostsList}}>{props.children}</Context.Provider>;
}
