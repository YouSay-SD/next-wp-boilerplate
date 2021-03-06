import Head from 'next/head';

const HeadSeo = ({ title, single }) => {
  return (
    <Head>
      <title>{single ? `${title} | ${single}` : title}</title>
      <meta name="description" content="Generated by create next app" />
      {/* <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" /> */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
export default HeadSeo;
