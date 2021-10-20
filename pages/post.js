import { Component } from 'react';
import { withRouter } from 'next/router';
import Layout from '../components/Layout';


const Post = ({router}) => (
  <Layout title={router.query.title}>
    <p style={{width: "80vw"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a convallis risus. Aliquam consectetur quis nibh sed ullamcorper. Maecenas ultricies ultrices eleifend. Pellentesque eu interdum quam, ac semper mi. Nunc lacinia ullamcorper viverra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc tincidunt pulvinar augue ut scelerisque. Nunc semper orci lectus, et rhoncus ipsum pellentesque eget. Etiam imperdiet malesuada sapien, eu ullamcorper justo molestie id. Morbi feugiat nunc a diam ornare auctor. Mauris imperdiet est eu justo tempor gravida. Morbi at tortor vel nibh varius tristique vel sed odio. Maecenas ac lectus leo.</p>
    
  </Layout>
);

export default withRouter(Post);