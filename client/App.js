// ! TO DO
// * Translation library 
// * Nail down color palette
// * Nail down styling framework
// * Double check all controllers work 
// * Booking via mailto links
// * User ratings 
// * Pagination
// * cloudinary (or one image for each language) 

// ! STRETCH GOALS
// * Dark/light mode
// * Translation services 
// * Transferable points 
// * Messenger system 


// import React, { useEffect } from 'react'
// import { BrowserRouter, Switch, Link, Route } from 'react-router-dom'
// import axios from 'axios'

import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './styles/style.scss'
import 'bulma'
// COMPONENT IMPORTS
import NavBar from './components/NavBar.js'
import About from './components/About.js'
import Post from './components/Post.js'
import NewForm from './components/Form.js'
import Home from './components/Home.js'
import Login from './components/Login.js'
import UpdatePost from './components/UpdatePost.js'
import SignUp from './components/SignUp.js'
import Search from './components/Search.js'
import UserProfile from './components/UserProfile.js'
import Footer from './components/Footer.js'
import MyPosts from './components/MyPosts.js'
import LikeButton from './components/LikeButton.js'

const App = () => (
  <BrowserRouter>
    <NavBar></NavBar>
    <Switch>
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/test/backend" component={TestBackend} /> */}
      <Route exact path="/about" component={About} />
      <Route exact path="/post/:post_id" component={Post} />
      <Route exact path="/form" component={NewForm} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/updatepost/:post_id" component={UpdatePost} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/profile/:user_id" component={UserProfile} />
      <Route exact path="/myposts/:user_id" component={MyPosts} />
    </Switch>
    <Footer />
  </BrowserRouter>
)

// const Home = () => <Link to={'/test/backend'}>
//   Go to /hello/world page.
// </Link>

// // ! Just a little component to test that you can talk to your flask server, check if it
// // ! works in network tab.
// const TestBackend = () => {
//   useEffect(() => {
//     // ? This is going to try localhost:5000/api
//     axios.get('/api')
//       .then(({ data }) => console.log(data))
//   }, [])

//   return <p>
//     Hello World
//   </p>
// }

export default App