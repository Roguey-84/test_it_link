import Layout from '@/components/Layout';
import Maintemplate from '@/components/Maintemplate';

export default function Home() {
  return (
    <Layout
      title='ИТ-Блог | Главная страница'
      description='Добро пожаловать! Давайте делиться интересными статьями'
    >
      <Maintemplate />
    </Layout>
  );
}
