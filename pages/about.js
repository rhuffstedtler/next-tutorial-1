import { Component } from 'react';
import Layout from '../components/Layout'
import ErrPage from './_error';

export default class About extends Component {

  static async getInitialProps() {
    const res = await fetch("https://api.github.com/users/reedbarger");
    const statusCode = res.status > 200 ? res.status : false;
    const data = await res.json();
    

    return {user: data, statusCode};
  }

  render() { 
    const {user, statusCode} = this.props;
    if (statusCode) {
      return <ErrPage statusCode={statusCode} />
    }
    return(
        <Layout title="About">
            <p>{user.name}</p>
            <img src={user.avatar_url}
            alt="portrait" />
        </Layout>
    );
  }

}
