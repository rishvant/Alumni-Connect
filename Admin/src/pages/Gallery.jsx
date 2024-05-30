import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import TableGallery from '../components/Tables/TableGallery';
import DefaultLayout from '../layout/DefaultLayout';
import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setImages(files);
  };

  const handleAdd = async () => {
    try {
      const formData = new FormData();
      images.forEach((image) => {
        formData.append("image", image);
      });
      await axios.post("http://localhost:3000/admin/gallery", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      toast.success("Images Uploaded!");
    }
    catch (err) {
      console.log("Error:", err);
    }
  }

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Gallery" />
      <form onSubmit={handleAdd}>
      <div>
        <label className="mb-3 block text-black dark:text-white">
          Attach file
        </label>
        <input
          type="file"
          className="w-1/2 cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
          multiple
          name="image"
          onChange={handleFileChange}
          accept="image/*"
          required
        />
        </div>
      <button
        className="inline-flex items-center justify-center rounded-full bg-black mt-2 py-2 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
      >
        Add Photos
        </button>
        </form>
      <div className="flex flex-col gap-10 mt-5">
        <TableGallery />
      </div>
    </DefaultLayout>
  );
};

export default Gallery;
