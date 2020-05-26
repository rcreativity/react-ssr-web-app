import React from "react";
import { connect } from "react-redux";
import { fetchNewsData, upDateNumber } from "../store";
import { Helmet } from "react-helmet";

class About extends React.Component {

  render() {

    return (
      <div className="wrapper">
        <Helmet>
          <title>Contact Page</title>
          <meta name="description" content="This is a proof of concept for React SSR" />
        </Helmet>
        <h1>About Page</h1>
      </div>
    );
  }
}


export default About;
