import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Components/Home/Home'
import CreateBlog from './Components/CreateBlog/CreateBlog'
import './App.css';
import ViewBlogs from './Components/ViewBlogs/ViewBlogs';

const App = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/create-blog">Create Blog</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/view-blogs">View Blogs</a>
            </li>
          </ul>
        </div>
      </nav>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/create-blog" component={CreateBlog} />
        <Route path="/view-blogs" component={ViewBlogs} />
      </BrowserRouter>
    </div>
  )
}

export default App;