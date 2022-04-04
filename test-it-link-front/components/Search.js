import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import Form from 'react-bootstrap/Form';

export default function Search() {
  const { register, handleSubmit, resetField } = useForm();
  const router = useRouter();

  function onSubmit(data, e) {
    e.preventDefault();
    router.push(`/posts/search?term=${data.search}`);
    resetField('search');
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className='ms-auto'>
      <Form.Control
        type='text'
        placeholder='Поиск статей...'
        {...register('search')}
      />
    </Form>
  );
}
