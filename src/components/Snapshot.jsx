import React from 'react';
import Header from './header/Header';
import StyleOne from './Tweet-styles/styleOne/StyleOne';
import Select from './Select';
import Footer from './Footer';
import HowToUse from './HowToUse';
function Snapshot() {
  // download the tweet using html2canvas

  return (
    <section className="snapshot--section">
      <Header />
      <StyleOne />
      <Select />
      <HowToUse />
      <Footer />
    </section>
  );
}

export default Snapshot;
