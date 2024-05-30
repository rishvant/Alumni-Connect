import axios from 'axios';
import { SlideshowLightbox } from 'lightbox.js-react';
import 'lightbox.js-react/dist/index.css';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { MdDeleteForever } from "react-icons/md";

const TableGallery = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/gallery");
        setData(response.data.response);
      }
      catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      console.log(id);
      await axios.delete(`http://localhost:3000/admin/gallery/${id}`);
      toast.success("Image Deleted!");
      window.location.reload();
    }
    catch (err) {
      console.log("Error:", err);
    }
  }

  return (
    <div className="rounded-sm border border-stroke bg-white p-5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="grid grid-cols-2 md:grid-cols-8 gap-4">
        {data && data.length > 0 ? (data.map((image) => (
          <div key={image._id}>
            <SlideshowLightbox>
              <img className="h-auto max-w-full rounded-lg" src={image.image} />
            </SlideshowLightbox>
            <div className='flex flex-row justify-center items-center'>
              <button onClick={() => handleDelete(image._id)}>Delete</button>
              <MdDeleteForever style={{ color: "red" }} />
            </div>
          </div>
        ))) : (
          <h1>No Images!</h1>
        )}
      </div>
    </div>
  );
};

export default TableGallery;