import React from "react";
import { connect } from "react-redux";
import { fetchNewsData, upDateNumber } from "../store";
import { Helmet } from "react-helmet";

class About extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    if (this.props.News.length <= 0) {
      this.props.fetchNewsData('vue', 2);
    }
  }

  handleClick() {
    console.log('Click happened');
    this.props.fetchNewsData('svelte', 2);
    this.props.upDateNumber()
  }

  render() {
    const { News, counter } = this.props;

    return (
      <div className="wrapper">
        <Helmet>
          <title>Contact Page</title>
          <meta name="description" content="This is a proof of concept for React SSR" />
        </Helmet>
        <h2>F1 2018 Season Calendar</h2>
        <h1>{counter}</h1>
        <button onClick={this.handleClick}>
          Click Me
        </button>
        <ul>
          {News.map(({ points, title, relevancy_score }, index) => (
            <li key={index} >{points} - { title}, { relevancy_score}</li>
          ))}
        </ul>
        {/* <table>
          <tr>
            <th>Comments</th>
            <th>Vote Count</th>
            <th>Up Vote</th>
            <th>News Details</th>
          </tr>
          {News.map(({ points, title, relevancy_score }, index) => (
            <tr key={index}>
              <td>{points}</td>
              <td>{relevancy_score}</td>
              <td>🔼</td>
              <td>{title}</td>
            </tr>
          ))}
        </table> */}
      </div>
    );
  }
}
About.serverFetch = fetchNewsData; // static declaration of data requirements
// About.serverFetch = upDateNumber; // static declaration of data requirements

const mapStateToProps = (state) => {
  console.log(state)
  return {
    News: state.data,
    counter: state.counter
  }
};

const mapDispatchToProps = {
  fetchNewsData,
  upDateNumber
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
