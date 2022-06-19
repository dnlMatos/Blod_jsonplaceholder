import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import FilterPost from "../pages/FilterPost";
import ListPosts from "../pages/ListPosts";
import NewPost from "../pages/NewPost";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <ListPosts />
        </Route>
        <Route exact path={"/posts"}>
          <NewPost />
        </Route>
        <Route exact path={`/posts/userId:id`}>
          <FilterPost />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
