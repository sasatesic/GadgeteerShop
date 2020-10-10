import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/product/:id' component={ProductScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
