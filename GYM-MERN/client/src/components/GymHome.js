import React, { Component } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

export default class GymHome extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'white' }}>
          <div className="container-fluid">
            <button style={{ margin: '10px' }} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="navbar-brand" aria-current="page" style={{ fontWeight: 'small', fontSize: 20 }} href="/">Home</a>
                </li><li className="nav-item">
                  <a className="navbar-brand" aria-current="page" style={{ fontWeight: 'small', fontSize: 20 }} href="/adminlogin">Admin Login</a>
                </li>
                <li className="nav-item">
                  <a className="navbar-brand" aria-current="page" style={{ fontWeight: 'small', fontSize: 20 }} href="/trainerlogin">Trainer Login</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="conrtainer">
          <div className="row" style={{ position: 'relative', textAlign: 'center', color: 'white' }}>
            <img src="Images/1.png" alt="Snow" />
            <div style={{ marginTop: '60px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
              <h1 style={{ fontSize: '90px'}}>
                A+ Fitness Center
              </h1>
            </div>
          </div>
          <div>
            <center>
              <table>
                <td>
                  <p style={{ color: '#638BD9', fontWeight: 'bold', fontSize: '30px' }}>BUILD</p>
                </td>
                <td>
                  <p style={{ fontWeight: 'bold', fontSize: '45px' }}>YOUR BODY.</p>
                </td>
              </table>
              <table>
                <td>
                  <p style={{ color: '#11A9FF', fontWeight: 'bold', fontSize: '30px' }}>TRANSFORM</p>
                </td>
                <td>
                  <p style={{ fontWeight: 'bold', fontSize: '45px' }}>YOUR LIFE.</p>
                </td>
              </table>
              <table>
                <td>
                  <center>
                    <p style={{ fontWeight: 'regular', fontSize: '15px' }}>We provide best equipments,supplements and trainers for you to make your dream body.</p>
                  </center>
                </td>
              </table>
            </center>
          </div>
          <div className="row">
            <img src="Images/2.png"></img>
          </div>
          <div className="row">
            <div className="col-xl-4" style={{ marginTop: '160px' }}>
              <center><img src="Images/3.png" width="240px" height="350px"></img></center>
            </div>
            <div className="col-xl-4" style={{ marginTop: '100px' }}>
              <center><img src="Images/4.png" width="400px" height="600px"></img></center>
            </div>
            <div className="col-xl-4" style={{ marginTop: '160px' }}>
              <center><img src="Images/5.png" width="280px" height="350px"></img></center>
            </div>
          </div>
          <div className="row" style={{ marginTop: '60px', marginBottom: '40px' }}>
            <center>
              <p style={{ fontWeight: 'regular', fontSize: '15px', color: '#638BD9' }}>We offer quality dietary suplements made with special care to anybody who wants to reach their body’s fullest potential.</p>
            </center>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <center><img src="Images/6.webp" width="1000px" height="600px"></img></center>
            </div>
          </div>
          <div className="row" style={{ marginTop: '40px' }}>
            <center>
              <p style={{ fontWeight: 'bold', fontSize: '40px', color: '#11A9FF' }}>It’s a slow process,but quitting won’t speed it up.</p>
            </center>
          </div>
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
