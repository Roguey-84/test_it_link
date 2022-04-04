import { useRouter } from 'next/router';
import Link from 'next/link';
import Layout from '@/components/Layout';
import PostsItem from '@/components/PostsItem';
import { API_URL } from '@/config/index';
import Row from 'react-bootstrap/Row';

export default function PostsPage({ posts }) {
  const router = useRouter();
  return (
    <Layout title='Блог | Результаты поиска'>
      <Link href='/posts'>
        <a className='btn btn-secondary mt-3'>Назад</a>
      </Link>
      <h2 className='my-3'>
        Результаты поиска по запросу &quot;{router.query.term}&quot;
      </h2>
      {posts.length === 0 && <h3>Статьи не найдены</h3>}
      <Row xs={1} md={2} lg={3} className='g-3 mb-4'>
        {posts
          //.sort((a, b) => b.createdAt - a.createdAt)
          .map((post) => (
            <PostsItem key={post.id} post={post} />
          ))}
      </Row>
    </Layout>
  );
}

export async function getServerSideProps({ query: { term } }) {
  const res = await fetch(`${API_URL}/api/posts?term=${term}`);
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
