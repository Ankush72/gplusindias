import React, { useState } from "react";
import "./Contact.css";
import contact from "../image/contact13.jpeg";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import contactbg from "../image/Contact us 8.svg";
import { toast } from "react-toastify";
import validator from "validator";
import { store } from "./Store";
import { FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import { IoClose } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";


const Contact = () => {
  const [data, setdata] = useState({
    name: "",
    email: "",
    mobile: "",
    options: "",
    message: "",
  });

  const [error, setError] = useState({});
  const [showImage, setShowImage] = useState();
  const [showImageToggle, setShowImageToggle] = useState(false);
  const [filterStore,setFilterStore] = useState(store)  
  const [activeColor,setActiveColor] = useState(null)


  const onHandleData = (e) => {
    const datas = { ...data };
    datas[e.target.name] = e.target.value;
    setdata(datas);
  };

  const validationForm = () => {
    let err = {};

    if (data.name === "") {
      err.name = "Name is required .";
    }
    if (data.email === "") {
      err.email = "Email is required .";
    } else {
      if (validator.isEmail(data.email)) {
        err.email = "";
      } else {
        err.email = "Enter valid email";
      }
    }

    if (data.mobile === "") {
      err.mobile = "Mobile is required .";
    } else {
      if (data.mobile.length < 10) {
        err.mobile = "Enter the correct Number .";
      }
    }
    if (data.options === "") {
      err.options = "Options is required .";
    }
    if (data.message === "") {
      err.message = "Message is required .";
    }

    setError({ ...err });
    return Object.keys(err).length < 1;
  };
console.log(activeColor)

  // filter by category store
  const filterItems = (category) =>{
    const filterval = store.filter((currElm) => currElm.category === category );
    // console.log(filterval)
 
    setFilterStore(filterval);
    setActiveColor(filterval)
  }

  // const StoreList = [...new Set(store.map((val)=>val.category))]
  // console.log(StoreList)

  const settingsStoreImage = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const submitData = (e) => {
    e.preventDefault();
    console.log(data);
    let isValid = validationForm();
    if (isValid) {
      toast.success("submited");
    } else {
      toast.error("All details are required.");
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center pt-[90px]  font-roboto">
        <div className="w-full h-full flex flex-col lg:flex-row  items-center   justify-center relative mb-5 ">
          <div className="w-full lg:w-4/6 z-10 ">
            <div className="contact">
              <img className="hidden lg:block" src={contact} alt="" />
              <img className="block lg:hidden" src={contactbg} alt="" />
            </div>
          </div>
          <div className="w-full lg:w-1/2  relative mt-5 lg:mt-0">
            <div className="md:h-[100px] pb-5 md:pb-0 pt-5 md:pt-0 overflow-hidden bg-blue flex flex-col items-center justify-center text-white lg:absolute left-0 lg:left-[-100px] right-0 lg:top-[-70px]">
              <h1 className="text-center font-bold text-4xl font-Montserrat drop-shadow-lg ">
                Gplus Home Appliances
              </h1>
              <p className="font-medium mt-1">
                Always <span className="text-orange"> YES</span> to Gplus
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:mt-5 ">
          <h1 className="text-center font-bold text-3xl sm:pl-0 pl-10 sm:pr-0 pr-10">
            Have any questions? We would like to hear from you!
          </h1>
          <div className="w-full h-full md:h-[200px] bg-blue pt-5 md:pt-0 pb-5 md:pb-0 md:pl-10 md:pr-10 flex flex-col md:flex-row justify-center md:justify-around items-center mb-20 mt-5">
            <div className="w-full md:w-auto flex flex-col items-center justify-center md:items-start ">
              <h1 className="text-white   text-[#FFFF00] font-bold">
                CORPORATE OFFICE
              </h1>
              <div className="flex  items-center justify-center md:justify-start">
                <h1 className="text-white w-3/6 mt-4">
                  Survey No. 183/1, Lake Side Road, Behind NCC Apartment,
                  Mahadevapura Bangalore(KA). 560048
                </h1>
              </div>
            </div>
            <div className="w-full md:w-auto flex flex-col items-center md:items-start mt-10 md:mt-0">
              <h1 className="text-white  uppercase text-[#FFFF00] font-bold">
                Contact details
              </h1>
              <div className="">
                <h1 className="text-white mt-2 flex items-center ">
                  <span className="mr-3">
                    <MdOutlineMailOutline size={20} color="#a4eaf0" />
                  </span>
                  support@gplusindia.com
                </h1>
                <h1 className="text-white mt-2 flex items-center">
                  <span className="mr-3">
                    <MdOutlineMailOutline size={20} color="#a4eaf0" />
                  </span>{" "}
                  care@gplusindia.com
                </h1>
                <h1 className="text-white mt-2 flex items-center">
                  <span className="mr-3">
                    <BsFillTelephoneFill size={20} color="#a4eaf0" />
                  </span>{" "}
                  1800 12398 6666
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse lg:flex-row justify-center  w-full pl-10 pr-10">
          <div className="w-full lg:w-1/2 ">
            <iframe
              className="rounded-lg map w-full h-[300px] lg:h-[500px] mt-10 lg:mt-0"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=420&amp;height=400&amp;hl=en&amp;q=%20Besides%20NCC%20Apartments,%20Survey%20No.%20185/1,%20Lake%20Side%20Road,%20Outer%20Ring%20Rd,%20Mahadevapura,%20Bengaluru,%20Karnataka%20560048+(garuda%20mart%20india%20pvt%20ltd)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              title="map"
            >
              <a href="https://www.maps.ie/distance-area-calculator.html">
                measure area map
              </a>
            </iframe>
          </div>
          <div className="w-full lg:w-1/2 sm:pl-10 sm:pr-10">
            <section className="bg-white dark:bg-gray-900">
              <div className=" px-4 mx-auto max-w-screen-md">
                <form
                  action="#"
                  className="space-y-4 w-full"
                  onSubmit={submitData}
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="flex items-center block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="Name"
                      value={data.name}
                      onChange={onHandleData}
                    />
                    <span className="font-normal text-sm text-[#FF0000]">
                      {error.name}
                    </span>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="flex items-center block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="name@gmail.com"
                      value={data.email}
                      onChange={onHandleData}
                    />
                    <span className="font-normal text-sm text-[#FF0000]">
                      {error.email}
                    </span>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="flex items-center block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Mobile Number
                    </label>
                    <input
                      type="number"
                      id="number"
                      name="mobile"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="Number"
                      value={data.mobile}
                      onChange={onHandleData}
                    />
                    <span className="font-normal text-sm text-[#FF0000]">
                      {error.mobile}
                    </span>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="flex items-center  block capitalize mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      select Product
                    </label>
                    <select
                      className="w-full border p-2 pb-2 rounded-lg"
                      name="options"
                      id="options"
                      value={data.options}
                      onChange={onHandleData}
                    >
                      <option className="capitalize" value="">
                        Select Products
                      </option>
                      <option className="capitalize" value="Washing Machine">
                        Washing Machine
                      </option>
                      <option className="capitalize" value="Television">
                        Television
                      </option>
                      <option className="capitalize" value="Air Condition">
                        Air condition
                      </option>
                      <option className="capitalize" value="Gas Stove">
                        Gas stove
                      </option>
                      <option className="capitalize" value="Cooler">
                        Cooler
                      </option>
                      <option className="capitalize" value="Mixer Grinder">
                        Mixer Grinder
                      </option>
                    </select>
                    <span className="font-normal text-sm text-[#FF0000]">
                      {error.options}
                    </span>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="flex items-center block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                    >
                      Your message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows="6"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Message..."
                      value={data.message}
                      onChange={onHandleData}
                    ></textarea>
                    <span className="font-normal text-sm text-[#FF0000]">
                      {error.message}
                    </span>
                  </div>
                  <div className="w-full">
                    <button
                      type="submit"
                      className=" py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </section>
          </div>
        </div>

        <div className="bg-gray mt-10 w-full h-full flex justify-center flex-col pb-10">
          {/* <div className="w-full">
              <h1 className=" font-bold text-xl">Registered Head Office Address:</h1>
              <p className="font-semibold text-base mt-3 w-96">Survey No. 183/1, Lake Side Road, Behind NCC Apartment, Mahadevapura Bangalore(KA). 560048</p>
            </div> */}
          <div className="flex flex-col items-center justify-center ">
            <div className="font-bold flex items-center justify-center  text-lg text-black shadow w-full pt-4 pb-4">
              {`OUR SHOWROOMS LOCATIONS`}
            </div>

            <div className="flex items-center space-x-3 mt-10 ">
              <button  className={`pl-10 pr-10  text-black shadow font-medium text-base  pt-2 pb-2 ${activeColor === 'Karnataka' ? "buttonColor " : "black"}`} onClick={() => filterItems("Karnataka")}>Karnataka</button> 
              <button  className={` pl-10 pr-10  text-black shadow font-medium text-base  pt-2 pb-2 ${activeColor === 'Andhra' ? "buttonColor" : "black"}`}  onClick={() => filterItems("Andhra")}>Andhra</button> 
            </div>
            <div className="mt-5 w-full h-[2px] bg-black opacity-75"></div>
            <div className="flex flex-wrap justify-between mt-5 pl-5 pr-5">
              { filterStore &&
                filterStore.map((item) => {
                  return (
                    <div key={item.id} className="w-full sm:w-[300px] md:w-[370px] m-1 shadow rounded">
                      <h1 className="font-bold text-lg flex items-center pt-4 pl-1"> <FaMapMarkerAlt size={20} /> <span className="ml-1">{item.location}</span></h1>
                      <div className="pl-7">
                      <a
                        href={`${item.map}`}
                        className=" hover:text-blue "
                      >
                        {item.address}
                      </a>
                      </div>
                      {/* <h1 className="font-semibold text-base">
                          Pin Code : {item.PinCode}
                        </h1> */}
                    <div className="flex items-center ">
                    <a href={`tel:${item?.number1}`} className="flex items-center mt-1"> <p className="font-bold text-lg flex items-center pl-1"><FaMobileAlt size={20}/> </p> <span className="font-semibold text-base ml-1">{item.number1}</span></a>
                     <h1 className="ml-1">,</h1>
                       <a href={`tel:${item?.number2}`} className="flex items-center mt-1"> <span className="font-semibold text-base ml-1">{item?.number2}</span></a>
                      
                    </div>
                        <div className="pl-7 pb-4">
                      <button
                        className="see_btn bg-[#FF8800] capitalize mt-3 font-medium text-white pl-2 pr-10 flex items-center pt-2 pb-2"
                        onClick={() => {
                          setShowImage(item.image);
                          setShowImageToggle(true);
                        }}
                      >
                        see store image
                        <span className="ml-2">
                          <FaArrowRight />
                        </span>
                      </button>
                      </div>
                    </div>
                  );
                })}
            </div>
            {showImageToggle ? (
              <div className="fixed flex justify-center items-center bg-[#1f1e1ecb] w-full h-full top-[80px] z-20">
                <div className="w-full  md:w-3/6 md:h-5/6">
                  <Slider {...settingsStoreImage}>
                    {showImage &&
                      showImage.map((item) => {
                        return (
                          <div key={item.id} className="w-full object-contain flex items-center justify-center">
                            <img
                              className="object-fill w-full h-[400px]"
                              src={item.url}
                              alt=""
                            />
                          </div>
                        );
                      })}
                  </Slider>
                </div>
                <div
                  className="absolute z-20 top-20  cursor-pointer w-10 h-10 rounded-full bg-white flex items-center justify-center"
                  onClick={() => setShowImageToggle(false)}
                >
                  <IoClose size={30} color="black" />
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
