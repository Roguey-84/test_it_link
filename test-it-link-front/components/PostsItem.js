import Link from 'next/link';
import Image from 'next/image';
import { Card, Col } from 'react-bootstrap';

export default function PostItem({ post }) {
  return (
    <Col>
      <Card style={{ height: '100%' }}>
        <Image
          className='card-img-top'
          alt={post.name}
          src='https://picsum.photos/640/360'
          width='640'
          height='360'
        />
        <Card.Body className='d-flex flex-column'>
          <Card.Title>{post.name}</Card.Title>
          <Card.Text>{post.description}</Card.Text>
          <Link href={`/posts/${post.id}`}>
            <a className='btn btn-primary mt-auto'>Читать дальше</a>
          </Link>
        </Card.Body>
        <Card.Footer className='text-muted text-end'>
          Дата создания: {new Date(post.createdAt).toLocaleDateString()}
        </Card.Footer>
      </Card>
    </Col>
  );
}
