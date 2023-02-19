import '../styles/globals.scss'
import { AppProvider } from '../context/context'
// import { Link, Route, Router } from 'react-router-dom';

import { createReactClient, studioProvider, LivepeerConfig } from '@livepeer/react';
// import Post from '../components/Post';
 
const client = createReactClient({
  provider: studioProvider({ apiKey: 'ff08fa66-d221-4c80-ac2c-c8b0e79ba9b6' }),
});

const MyApp = ({ Component, pageProps }) => {
  return (
    <AppProvider>
      <LivepeerConfig client={client}>
        <Component {...pageProps} />
        {/* <Router>
          <Route path="/" element={<Post/>}
        </Router>
        <Link to="/postDetail">post detail</Link> */}
      </LivepeerConfig>
    </AppProvider>
  )
}

export default MyApp