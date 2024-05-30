import { initLightboxJS, SlideshowLightbox } from 'lightbox.js-react';
import 'lightbox.js-react/dist/index.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Gallery = () => {
    const [images, setImages] = useState();
     useEffect(() => {
    initLightboxJS("Insert your License Key here", "Insert plan type here");
     }, []);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://alumni-connect-backend-swwq.onrender.com/gallery");
                setImages(response.data.response);
                console.log(response.data.response);
            }
            catch (err) {
                console.log("Error:", err);
            }
        }
        fetchData();
    }, []);

    return (
        <>
            <section class="Feautes section" style={{ marginTop: "0" }}>
                <div class="container">
                    <div class="section-title">
                        <h2>Gallery</h2>
                    </div>
                    {images && (
                    <SlideshowLightbox className="main-gallery">
                        {images.map((image) => (
                            <img className='main-image' src={image.image} />
                        ))}
                    </SlideshowLightbox>
                    )}
                </div>
            </section>
        </>
    )
}

export default Gallery;