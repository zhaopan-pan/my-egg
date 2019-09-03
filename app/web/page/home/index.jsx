import React, { Component } from 'react';
import Layout from 'component/layout.jsx';
// import List from './componets/list';
// import './index.css';

export default class HomeIndex extends Component {
    componentDidMount() {
        console.log('----componentDidMount-----');
    }

    render() {
        return <Layout>
            <div className="main">
                <div className="page-container page-component">
                    {this.props.message}
                    {/* <List list={this.props.message}></List> */}
                </div>
            </div>
        </Layout>;
    }
}