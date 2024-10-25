import React from 'react';
import Head from 'next/head';

const CommonHead = (props) => {
  return (
    <Head>
      <title>Touhid Hasan- Frontend web developer</title>
      <link
        href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css'
        rel='stylesheet'
        integrity='sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC'
        crossOrigin='anonymous'></link>
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
      <link
        href='https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap'
        rel='stylesheet'></link>
      <meta name='description' content='Touhid Hasan, frontend web developer' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
};

export default CommonHead;
