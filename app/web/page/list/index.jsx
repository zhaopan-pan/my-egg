import React, { Component } from 'react';
import Layout from '../../component/layout.jsx';
import './index.css';
import ZpRouter from "./router"
export default class ListIndex extends Component {
  componentDidMount() {
    console.log('----componentDidMount-----');
  }

  render() {
    return <Layout title={"list"}>
      <div className="main">
        <div className="page-container page-component">
          {this.props.message}
        </div>
      </div>
    </Layout>
  }
}