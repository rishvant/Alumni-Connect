import { useEffect } from "react";

const Preloader = () => {
    useEffect(() => {
    const handleWindowLoad = () => {
      const preloader = document.querySelector('.preloader');
      if (preloader) {
        preloader.classList.add('preloader-deactivate');
      }
    };

    window.addEventListener('load', handleWindowLoad);

    return () => {
      window.removeEventListener('load', handleWindowLoad);
    };
  },[]);

    return (
        <div class="preloader">
            <div class="loader">
                <div class="loader-outter"></div>
                <div class="loader-inner"></div>
                <img src="/iiitu-logo.png" />
            </div>
        </div>
    )
}

export default Preloader;