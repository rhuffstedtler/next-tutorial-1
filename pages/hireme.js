import Link from 'next/link';
import Layout from '../components/Layout'

const HireMe = () => (
  <Layout>
    <h1>Hire me</h1>
    <Link href="/">
        <a>Go to home  </a>
    </Link>
    <p>You can hire me at...</p>
  </Layout>
);

export default HireMe;