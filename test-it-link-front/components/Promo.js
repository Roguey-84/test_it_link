import Link from 'next/link';

export default function Promo() {
  return (
    <div className='header-promo'>
      <h1>СТАТЬИ ОБ IT</h1>
      <p className='fs-3 text-center'>
        Интересные статьи на тему IT. Читайте статьи или добавляйте собственные.
      </p>
      <div>
        <Link href='/posts'>
          <a className='btn btn-lg btn-light me-3'>Читать статьи</a>
        </Link>
        <Link href='posts/create'>
          <a className='btn btn-lg btn-outline-light'>Написать статью</a>
        </Link>
      </div>
    </div>
  );
}
