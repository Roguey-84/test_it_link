import { Fragment } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import Header from './Header';

export default function Layout({ title, description, children }) {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <Header></Header>
      <div className='container'>{children}</div>
    </Fragment>
  );
}

Layout.defaultProps = {
  title: 'ИТ-Блог',
  description: 'Добро пожаловать!',
};

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
