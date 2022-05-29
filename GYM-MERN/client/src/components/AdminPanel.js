import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styles from "./AdminLogin/styles.module.css";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

export default class AdminPanel extends Component {
    render() {
        return (
            <div>

                <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#C4C4C4', marginBottom: "100px" }}>
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
            <div className="container">
                <div className="row">
                <Link to="/memberdetails">
                    <center>
                        <button type="button" className={styles.green_btn} style={{ width: '50%', marginBottom: "30px" }}>
                            Member Details
                        </button>
                    </center>
                </Link>
                <Link to="/viewmessages">
                    <center>
                        <button type="button" className={styles.green_btn} style={{ width: '50%', marginBottom: "30px" }}>
                            View Messages
                        </button>
                    </center>
                </Link>
                <Link to="/comeandleave">
                    <center>
                        <button type="button" className={styles.green_btn} style={{ width: '50%', marginBottom: "60px" }}>
                            Come & Leave
                        </button>
                    </center>
                </Link>
                </div>
                </div>
                

                <MDBFooter style={{ backgroundColor: '#C4C4C4' }} className="font-small pt-4 mt-4">
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

