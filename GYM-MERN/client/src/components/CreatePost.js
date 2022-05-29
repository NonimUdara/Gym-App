import React, { Component } from 'react';
import axios from 'axios';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

export default class CreatePost extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      address: "",
      age: "",
      height: "",
      weight: "",
      payment_status: "pending"
    }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value
    })
  }

  onSubmit = (e) => {

    e.preventDefault();

    const { name, email, address, age, height, weight, payment_status } = this.state;

    const data = {
      name: name,
      email: email,
      address: address,
      age: age,
      height: height,
      weight: weight,
      payment_status
    }

    console.log(data)

    axios.post("/post/save", data).then((res) => {
      if (res.data.success) {
        this.setState(
          {
            name: "",
            email: "",
            address: "",
            age: "",
            height: "",
            weight: "",
            payment_status: ""
          }
        )
      }
    })

  }

  render() {
    return (
      <div>

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

        <div className="col-md-8 mt-4 mx-auto">
          <center><h3>Add New Member</h3></center>
          <form className="needs-validation" noValidate>
            <div className="form-group" style={{ marginBottom: '15px' }}>
              <label style={{ marginBottom: '5px' }}>Name</label>
              <input type="text"
                className="form-control"
                name="name"
                placeholder="Enter Name"
                value={this.state.name}
                onChange={this.handleInputChange} />
            </div>

            <div className="form-group" style={{ marginBottom: '15px' }}>
              <label style={{ marginBottom: '5px' }}>Email</label>
              <input type="email"
                className="form-control"
                name="email"
                placeholder="Enter Email"
                value={this.state.email}
                onChange={this.handleInputChange} />
            </div>

            <div className="form-group" style={{ marginBottom: '15px' }}>
              <label style={{ marginBottom: '5px' }}>Address</label>
              <input type="text"
                className="form-control"
                name="address"
                placeholder="Enter Address"
                value={this.state.address}
                onChange={this.handleInputChange} />
            </div>

            <div className="form-group" style={{ marginBottom: '15px' }}>
              <label style={{ marginBottom: '5px' }}>Age</label>
              <input type="text"
                className="form-control"
                name="age"
                placeholder="Enter Age"
                value={this.state.age}
                onChange={this.handleInputChange} />
            </div>

            <div className="form-group" style={{ marginBottom: '15px' }}>
              <label style={{ marginBottom: '5px' }}>Height</label>
              <input type="text"
                className="form-control"
                name="height"
                placeholder="Enter Height"
                value={this.state.height}
                onChange={this.handleInputChange} />
            </div>

            <div className="form-group" style={{ marginBottom: '15px' }}>
              <label style={{ marginBottom: '5px' }}>Weight</label>
              <input type="text"
                className="form-control"
                name="weight"
                placeholder="Enter Weight"
                value={this.state.weight}
                onChange={this.handleInputChange} />
            </div>

            <div className="form-group" style={{ marginBottom: '15px' }}>
              <input type="hidden"
                className="form-control"
                name="payment_status"
                placeholder="Enter Payment Status"
                value={this.state.payment_status}
                onChange={this.handleInputChange} />
            </div>

            <button className="btn btn-success w-100" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
              <i className="far fa-check-square"></i>
              &nbsp; Add User
            </button>

          </form>
        </div>

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
}
