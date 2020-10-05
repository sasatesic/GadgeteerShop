import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Container from '@material-ui/core/Container';

function App() {
  return (
    <>
      <Header />
      <main>
        <Container maxWidth={'xl'}>
          <h1>Welcome</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
