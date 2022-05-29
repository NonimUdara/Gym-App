import React, { Component } from 'react';
import axios from 'axios';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };

  }

  componentDidMount() {
    this.retrievePosts();
  }

  retrievePosts() {
    axios.get("/messages").then(res => {
      if (res.data.success) {
        this.setState({
          posts: res.data.existingPosts
        });

        console.log(this.state.posts);
      }
    });
  }

  filterData(posts, searchKey) {

    const result = posts.filter((post) =>
      post.name.toLowerCase().includes(searchKey) ||
      post.email.toLowerCase().includes(searchKey) ||
      post.message.toLowerCase().includes(searchKey) ||
      post.name.toUpperCase().includes(searchKey) ||
      post.email.toUpperCase().includes(searchKey) ||
      post.message.toUpperCase().includes(searchKey)
    )

    this.setState({ posts: result })

  }

  handleSearchArea = (e) => {

    const searchKey = e.currentTarget.value;

    axios.get("/messages").then(res => {
      if (res.data.success) {

        this.filterData(res.data.existingPosts, searchKey)

      }
    });
  }



  render() {
    return (
      <div className="container">

        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#C4C4C4', marginBottom: '60px' }}>
          <div className="container-fluid">
            <button style={{ margin: '10px' }} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="navbar-brand" aria-current="page" style={{ fontWeight: 'small', fontSize: 20 }} href="/">Home</a>
                </li><li className="nav-item">
                  <a className="navbar-brand" aria-current="page" style={{ fontWeight: 'small', fontSize: 20 }} href="/adminpanel">Admin Panel</a>
                </li>
                <li className="nav-item">
                  <a className="navbar-brand" aria-current="page" style={{ fontWeight: 'small', fontSize: 20 }} href="/">Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="row" style={{ marginBottom: '50px' }}>
          <center>
            <h4>
              Messages
            </h4>
          </center></div>
        <div className="row">
          <div className="col-lg-3 mt-2 mb-2">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              name="searchQuery"
              onChange={this.handleSearchArea}>
            </input>
          </div>
        </div>
        <table class="table" style={{ marginBottom: "60px" }}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Message</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((posts, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>
                  {posts.name}
                </td>
                <td>{posts.email}</td>
                <td>{posts.message}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <MDBFooter style={{ backgroundColor: '#C4C4C4', marginTop: "60px" }} className="font-small pt-4 mt-4">
          <MDBContainer fluid className="text-center text-md-left">
            <MDBRow>
              <MDBCol md="8">
              </MDBCol>
              <MDBCol md="4">
                <p style={{ fontWeight: 'bold' }}>www.A+Fitness.lk</p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>
              <p style={{ fontWeight: 'bold' }}>Copyright © 2022 A+Fitness| Designed by A+Fitness</p>
              <p style={{ fontWeight: 'bold' }}>©All rights reserved</p>
            </MDBContainer>
          </div>
        </MDBFooter>


      </div>


    )
  }
};
