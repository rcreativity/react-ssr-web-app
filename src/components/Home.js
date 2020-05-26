import React from "react";
import { connect } from "react-redux";
import { fetchNewsData } from "../store";
import { Helmet } from "react-helmet";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    "name": "213",
    "uv": 4000,
    "pv": 2400,
    "amt": 2400
  },
  {
    "name": "324s",
    "uv": 3000,
    "pv": 1398,
    "amt": 2210
  }
]

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPageNumber: 1
    }
    this.getNextPage = this.getNextPage.bind(this);
    this.getPreviousPage = this.getPreviousPage.bind(this);
  }

  componentDidMount() {
    if (this.props.News.length <= 0) {
      this.props.fetchNewsData('react', 1);
      this.setState({
        currentPageNumber: currentPageNumber + 1
      })
    }
  }

  getNextPage() {
    this.props.fetchNewsData('react', this.state.currentPageNumber);
    this.setState({
      currentPageNumber: this.state.currentPageNumber + 1
    }, () => {
      console.log(this.state.currentPageNumber)
    })
  }

  getPreviousPage() {
    if (this.state.currentPageNumber >= 1) {
      this.props.fetchNewsData('react', this.state.currentPageNumber);
      this.setState({
        currentPageNumber: this.state.currentPageNumber - 1
      }, () => {
        console.log(this.state.currentPageNumber)
      })
    }
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
                <td >
                  <span className="up_vote">🔼</span>
                </td>
                <td style={{ textAlign: 'left' }}>{title}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="button_group">
          <button onClick={this.getPreviousPage}>Previous</button>
          <span></span>
          <button onClick={this.getNextPage}>Next</button>
        </div>
        <br />
        <hr size="6" />
        <br />
        <LineChart width={730} height={250} data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </div >
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
