import React, { useEffect, useState } from 'react';
import CardDataStats from '../../components/CardDataStats';
import TableOne from '../../components/Tables/TableOne';
import DefaultLayout from '../../layout/DefaultLayout';
import { FaUsers } from "react-icons/fa";
import { FaRegImages } from "react-icons/fa6";
import { MdOutlineVerified } from "react-icons/md";
import { VscUnverified } from "react-icons/vsc";
import axios from 'axios';

const ECommerce = () => {
  const [users, setUsers] = useState();
  const [verified, setVerified] = useState();
  const [pending, setPending] = useState();
  const [images, setImages] = useState();
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3000/admin/users");
        var data = response.data.response;
        data = data.filter((user) => user.verified !== false);
        setUsers(response.data.response);
        setVerified(data);
        setPending(data.filter((user) => user.verified !== true))
      }
      catch (err) {
        console.log("Error:", err);
      }
    }

    const fetchImages = async () => {
      try {
        const response = await axios.get("http://localhost:3000/admin/images");
        setImages(response.data.response);
      }
      catch (err) {
        console.log("Error:", err);
      }
    }
    fetchUsers();
    fetchImages();
  }, []);

  return (
    <DefaultLayout>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardDataStats title="Users" total={users && users.length}>
          <FaUsers color="blue" size="20px" />
        </CardDataStats>
        <CardDataStats title="Gallery Images" total={images && images.length}>
          <FaRegImages color="blue" size="20px" />
        </CardDataStats>
        <CardDataStats title="Verified Users" total={verified && verified.length}>
          <MdOutlineVerified color="blue" size="20px" />
        </CardDataStats>
        <CardDataStats title="Pending Users" total={pending && pending.length}>
          <VscUnverified color="blue" size="20px" />
        </CardDataStats>
      </div>

        <div className="mt-10 col-span-12 xl:col-span-8">
          <TableOne />
        </div>
    </DefaultLayout>
  );
};

export default ECommerce;
