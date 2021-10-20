import Link from 'next/link';
import Layout from '../components/Layout'

const Index = () => (
  <Layout title="Home">
  
  <p>
    <Link href="/about">
        <a>Go to About</a>
    </Link>
  </p>
  </Layout>
);

export default Index;