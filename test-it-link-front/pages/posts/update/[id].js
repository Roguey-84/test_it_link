import Layout from '@/components/Layout';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Form, Button, FloatingLabel, Row } from 'react-bootstrap';
import { API_URL } from '@/config/index';

export default function UpdatePost({ post }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      name: post.name,
      description: post.description,
      content: post.content,
    },
  });

  const router = useRouter();

  async function onSubmit(data, e) {
    e.preventDefault();
    const res = await fetch(`${API_URL}/api/posts/${post.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      alert('Что-то пошло не так. Попробуйте еще раз');
    } else {
      const post = await res.json();
      router.push(`../${post[0].id}`);
    }
    reset();
  }

  return (
    <Layout title='Блог | Редактировать статью'>
      <h2 className='my-3'>Редактировать статью</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className='mb-3'>
          <FloatingLabel
            controlId='name'
            label='Название статьи'
            className='mb-3'
          >
            <Form.Control
              type='text'
              placeholder='Название статьи'
              style={errors.name ? { borderColor: '#dc3545' } : {}}
              {...register('name', {
                required: 'Необходимо указать название статьи',
              })}
            />
          </FloatingLabel>
          {errors.name && (
            <Form.Control.Feedback type='invalid'>
              {errors.name.message}
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Form.Group className='mb-3'>
          <FloatingLabel
            controlId='description'
            label='Краткое описание (200 символов)'
            className='mb-3'
          >
            <Form.Control
              as='textarea'
              rows={3}
              placeholder='Краткое описание (200 символов)'
              style={errors.description ? { borderColor: '#dc3545' } : {}}
              {...register('description', {
                required: 'Необходимо указать краткое описание',
                maxLength: {
                  value: 200,
                  message: 'Поле должно содержать не больше 200 символов',
                },
              })}
            />
          </FloatingLabel>
          {errors.description && (
            <Form.Control.Feedback type='invalid'>
              {errors.description.message}
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Form.Group className='mb-3'>
          <FloatingLabel
            controlId='content'
            label='Содержание'
            className='mb-3'
          >
            <Form.Control
              as='textarea'
              placeholder='Текст статьи'
              style={
                errors.content
                  ? { borderColor: '#dc3545', height: '200px' }
                  : { height: '200px' }
              }
              {...register('content', {
                required: 'Необходимо указать содержание статьи',
              })}
            />
          </FloatingLabel>
          {errors.content && (
            <Form.Control.Feedback type='invalid'>
              {errors.content.message}
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <div className='d-flex justify-content-between'>
          <Link href='/posts'>
            <a className='btn btn-secondary'>Назад</a>
          </Link>
          <Button variant='primary' type='submit'>
            Редактировать
          </Button>
        </div>
      </Form>
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
