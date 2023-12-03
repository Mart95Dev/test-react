// import { useState } from 'react'
import ImageBannerAccueil from "./assets/imagesBanner/image-1.png";
import ImageBannerAPropos from "./assets/imagesBanner/image-2.png";
import Banner from "./assets/components/Banner";

function App() {
  return (
    <div className="body-container">
      <Banner imageBanner={ImageBannerAccueil}>
        <p>Chez vous, partout et ailleurs</p>
      </Banner>
      <Banner imageBanner={ImageBannerAPropos}>
        <p></p>
      </Banner>
    </div>
  );
}

export default App;
