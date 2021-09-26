import '../styles/index.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AnimatePresence } from 'framer-motion';
import { QueryClientProvider } from 'react-query';
import { queryClient } from 'graphQl/client';
import { ReactQueryDevtools } from 'react-query/devtools';

function MyApp({ Component, pageProps, router }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen = { false } /> 
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </QueryClientProvider>
  )
}

export default MyApp;
