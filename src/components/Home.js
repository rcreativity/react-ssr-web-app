import React from "react";
import { connect } from "react-redux";
import { fetchNewsData } from "../store";
import { Helmet } from "react-helmet";

class Home extends React.Component {

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
    this.props.fetchNewsData('svelte', 2);
  }

  render() {
    const { News } = this.props;

    return (
      <div className="wrapper">
        <Helmet>
          <title>Contact Page</title>
          <meta name="description" content="This is a proof of concept for React SSR" />
        </Helmet>
        <table>
          <thead>
            <tr>
              <th>Comments</th>
              <th>Vote Count</th>
              <th>Up Vote</th>
              <th>News Details</th>
            </tr>
          </thead>
          <tbody>
            {News.map(({ points, title, relevancy_score }, index) => (
              <tr key={index}>
                <td>{points}</td>
                <td>{relevancy_score}</td>
                <td>🔼</td>
                <td style={{ textAlign: 'left' }}>{title}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="button_group">
          <button>Previous</button>
          <span></span>
          <button>Next</button>
        </div>
        <br />
        <br />
        <br />
      </div>
    );
  }
}
Home.serverFetch = fetchNewsData;

const mapStateToProps = (state) => {
  console.log(state)
  return {
    News: state.data,
  }
};

const mapDispatchToProps = {
  fetchNewsData
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
