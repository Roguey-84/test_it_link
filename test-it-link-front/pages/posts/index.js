import Layout from '@/components/Layout';
import PostsItem from '@/components/PostsItem';
import { API_URL } from '@/config/index';
import Row from 'react-bootstrap/Row';

export default function PostsPage({ posts }) {
  return (
    <Layout title='Блог | Список статей'>
      <h2 className='my-3'>Список статей</h2>
      {posts.length === 0 && <h3>Статьи не найдены</h3>}
      <Row xs={1} md={2} lg={3} className='g-3 mb-4'>
        {posts.map((post) => (
          <PostsItem key={post.id} post={post} />
        ))}
      </Row>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/posts`);
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
