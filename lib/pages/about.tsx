import React, { FunctionComponent } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const About: FunctionComponent = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <main>
        <h1>Giới thiệu</h1>
        <p>Đây là trang giới thiệu về công ty chúng tôi.</p>
      </main>
      <Footer />
    </div>
  );
};

export default About;