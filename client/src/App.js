import React from 'react';
import Container from '@material-ui/core/Container';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <>
      <Header />
      <main>
        <Container maxWidth={'xl'}>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
