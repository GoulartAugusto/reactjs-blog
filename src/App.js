import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import { Route, Switch, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My First Post",
      datetime: "September 22, 2022 18:22:22",
      body: "Lorem ipsum Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
    },
    {
      id: 2,
      title: "My 2nd Post",
      datetime: "September 22, 2022 18:22:22",
      body: "Lorem ipsum Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
    },
    {
      id: 3,
      title: "My 3rd Post",
      datetime: "September 22, 2022 18:22:22",
      body: "Lorem ipsum Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
    },
    {
      id: 4,
      title: "My Fourth Post",
      datetime: "September 22, 2022 18:22:22",
      body: "Lorem ipsum Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
    }
  ]);

  const [search, setSearch] = useState('');
  const [serchResults, setSearchResults] = useState([]);

  return (
    <div className="App">
      <Header title="React JS Blog" />
      <Nav search={search} setSearch={setSearch} />
      <Switch>
        <Route exact path="/">
          <Home posts={posts} />
        </Route>
        <Route exact path="/post">
          <NewPost />
        </Route>
        <Route path="/post/:id">
          <PostPage />
        </Route>
        <Route path="/about" component={About} />
        <Route path="*" component={Missing} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;