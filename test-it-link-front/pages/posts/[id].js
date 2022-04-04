import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';

export default function PostPage({ post }) {
  const router = useRouter();
  const deletePost = async (e) => {
    e.preventDefault();
    if (confirm('Вы уверены, что хотите удалить статью?'));
    const res = await fetch(`${API_URL}/api/posts/${post.id}`, {
      method: 'DELETE',
    });

    const data = await res.json();
    if (!res.ok) {
      alert(data.message);
    } else {
      router.push('/posts');
    }
  };

  return (
    <Layout>
      <div className='text-end my-4'>
        <Link href={`/posts/update/${post.id}`}>
          <a className='btn btn-outline-primary me-3'>Редактировать</a>
        </Link>
        <a href='#' className='btn btn-outline-danger' onClick={deletePost}>
          Удалить
        </a>
      </div>
      <div className='post-block'>
        <span className='text-muted'>
          Дата создания: {new Date(post.createdAt).toLocaleDateString()}
        </span>
        <h2 className='my-3'>{post.name}</h2>
        <Image
          src='https://picsum.photos/960/300'
          className='img-fluid'
          alt={post.name}
          width='1920'
          height='400'
          style={{ width: '100%!important' }}
        />
        <p>{post.description}</p>
        <p>{post.content}</p>
      </div>
      <Link href='/posts'>
        <a className='btn btn-primary btn-lg mb-4'>Назад</a>
      </Link>
    </Layout>
  );
}

export async function getServerSideProps({ query: { id } }) {
  const res = await fetch(`${API_URL}/api/posts/${id}`);
  const posts = await res.json();

  return {
    props: {
      post: posts[0],
    },
  };
}
