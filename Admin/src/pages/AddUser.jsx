import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import SelectGroupOne from '../components/Forms/SelectGroup/SelectGroupOne';
import DefaultLayout from '../layout/DefaultLayout';
import SelectGroupTwo from '../components/Forms/SelectGroup/SelectGroupTwo';
import SelectGroupThree from '../components/Forms/SelectGroup/SelectGroupThree';
import SelectGroupGender from '../components/Forms/SelectGroup/SelectGroupGender';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useRef } from 'react';

const AddUser = () => {
    const nameRef = useRef();
    const rollRef = useRef();
    const genderRef = useRef();
    const courseRef = useRef();
    const branchRef = useRef();
    const fatherRef = useRef();
    const professionRef = useRef();
    const emailRef = useRef();
    const dobRef = useRef();
    const yearRef = useRef();
    const phoneRef = useRef();
    const companyRef = useRef();
    const linkedinRef = useRef();
    const instagramRef = useRef();
    const githubRef = useRef();
    const imageRef = useRef();

    const handleAddUser = async (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const roll = rollRef.current.value;
        const gender = genderRef.current.value;
        const course = courseRef.current.value;
        const branch = branchRef.current.value;
        const father = fatherRef.current.value;
        const profession = professionRef.current.value;
        const email = emailRef.current.value;
        const dob = dobRef.current.value;
        const year = yearRef.current.value;
        const phone = phoneRef.current.value;
        const company = companyRef.current.value;
        const linkedin = linkedinRef.current.value;
        const instagram = instagramRef.current.value;
        const github = githubRef.current.value;
        const image = imageRef.current.files[0];
        try {
            const response = await axios.post("http://localhost:3000/admin/add-user", {
                name, father, profession, gender, email, roll, phone, dob, course, branch, year, linkedin, instagram, github, company, image
            }, {
                headers: {
                    "Content-Type":"multipart/form-data"
                }
            });
            if (response.status === 200) {
                toast.success("User Added Successfully!");
            }
            nameRef.current.value = "";
            rollRef.current.value = "";
            genderRef.current.value = "";
            courseRef.current.value = "";
            branchRef.current.value = "";
            fatherRef.current.value = "";
            professionRef.current.value = "";
            emailRef.current.value = "";
            dobRef.current.value = "";
            yearRef.current.value = "";
            phoneRef.current.value = "";
            companyRef.current.value = "";
            linkedinRef.current.value = "";
            instagramRef.current.value = "";
            imageRef.current.value = "";
        }
        catch (err) {
            console.log("Error:", err);
            if (err.response && err.response.status === 409) {
                toast.error("User already exists!");
            }
            else {
                toast.error("An unexpected error occurred.");
            }
        }
    }

    return (
        <DefaultLayout>
            <Breadcrumb pageName="Add New User" />

            <div className="grid grid-cols-1 gap-9 sm:grid-cols-1">
                <div className="flex flex-col gap-9">
                    {/* <!-- Contact Form --> */}
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <form onSubmit={handleAddUser}>
                            <div className="p-6.5">
                                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                                    <div className="w-full xl:w-1/3">
                                        <label className="mb-2.5 block text-black dark:text-white">
                                            Name
                                        </label>
                                        <input
                                            ref={nameRef}
                                            required
                                            type="text"
                                            placeholder="Enter your first name"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />
                                    </div>

                                    <div className="w-full xl:w-1/3">
                                        <label className="mb-2.5 block text-black dark:text-white">
                                            Father's Name
                                        </label>
                                        <input
                                            ref={fatherRef}
                                            type="text"
                                            placeholder="Enter your last name"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />
                                    </div>
                                    <div className="w-full xl:w-1/3">
                                        <label className="mb-2.5 block text-black dark:text-white">
                                            Email
                                        </label>
                                        <input
                                            ref={emailRef}
                                            type="email"
                                            placeholder="Enter your email address"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />
                                    </div>
                                </div>

                                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                                    <div className="w-full xl:w-1/3">
                                        <label className="mb-2.5 block text-black dark:text-white">
                                            Roll No.
                                        </label>
                                        <input
                                            ref={rollRef}
                                            required
                                            type="number"
                                            placeholder="Enter your last name"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />
                                    </div>
                                    <SelectGroupOne prop={courseRef} />
                                    <SelectGroupThree prop={branchRef} />
                                    <SelectGroupTwo prop={yearRef} />
                                    <SelectGroupGender prop={genderRef} />
                                </div>

                                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                                    <div>
                                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                            Date of Birth
                                        </label>
                                        <div className="relative">
                                            <input
                                                ref={dobRef}
                                                className="form-datepicker w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                                placeholder="mm/dd/yyyy"
                                                data-class="flatpickr-right"
                                                type="date"
                                            />
                                        </div>
                                    </div>

                                    <div className="w-full xl:w-1/3">
                                        <label className="mb-2.5 block text-black dark:text-white">
                                            Profession
                                        </label>
                                        <input
                                            ref={professionRef}
                                            type="text"
                                            placeholder="Enter your last name"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />
                                    </div>
                                    <div className="w-full xl:w-1/3">
                                        <label className="mb-2.5 block text-black dark:text-white">
                                            Company
                                        </label>
                                        <input
                                            ref={companyRef}
                                            type="text"
                                            placeholder="Enter your last name"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />
                                    </div>
                                    <div className="w-full xl:w-1/3">
                                        <label className="mb-2.5 block text-black dark:text-white">
                                            Mobile Number
                                        </label>
                                        <input
                                            ref={phoneRef}
                                            type="tel"
                                            placeholder="Enter your last name"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />
                                    </div>
                                </div>

                                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                                    <div className="w-full xl:w-1/3">
                                        <label className="mb-2.5 block text-black dark:text-white">
                                            Linkedin Account Link
                                        </label>
                                        <input
                                            ref={linkedinRef}
                                            required
                                            type="text"
                                            placeholder="Enter your last name"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />
                                    </div>
                                    <div className="w-full xl:w-1/3">
                                        <label className="mb-2.5 block text-black dark:text-white">
                                            Github Account Link
                                        </label>
                                        <input
                                            ref={githubRef}
                                            type="text"
                                            placeholder="Enter your last name"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />
                                    </div>
                                    <div className="w-full xl:w-1/3">
                                        <label className="mb-2.5 block text-black dark:text-white">
                                            Instagram Account Link
                                        </label>
                                        <input
                                            ref={instagramRef}
                                            type="text"
                                            placeholder="Enter your last name"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />
                                    </div>
                                </div>
                                <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                                    <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                                        <h3 className="font-medium text-black dark:text-white">
                                            Profile Photo upload
                                        </h3>
                                    </div>
                                    <div className="flex flex-row p-6.5 items-center justify-between">
                                        <div>
                                            <label className="mb-3 block text-black dark:text-white">
                                                Attach file
                                            </label>
                                            <input
                                                ref={imageRef}
                                                type="file"
                                                className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                                                required
                                                accept="image/*"
                                                name="image"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <button className="flex xl:w-1/5 justify-center rounded bg-primary p-3 mt-5 font-medium text-gray hover:bg-opacity-90">
                                    Add
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
};

export default AddUser;