import React, { useState } from "react";
import contact from "../image/The Best Appliances3.png";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import contactbg from "../image/Support 1.png";
// import { toast } from "react-toastify";
// import validator from "validator";
import { Country, City, State } from "country-state-city";
// console.log(Country);
const countryCode = "IN";
const country = Country.getCountryByCode(countryCode);
const states = State.getStatesOfCountry(country.isoCode);


const Support = () => {


  const [data, setdata] = useState({
    name: "",
    email: "",
    mobile: "",
    // invoiceNumber: "",
  });

const [products,setProducts] = useState()
  const [state, setState] = useState();
  const [city, setCity] = useState();
  console.log("city", city);
  console.log(state);
  // const [error, setError] = useState({});

  const onHandleData = (e) => {
    const datas = { ...data };
    datas[e.target.name] = e.target.value;
    setdata(datas);
  };

  // const ValidationForm = () => {
  //   let err = {};

  //   if (data.name === "") {
  //     err.name = "Name is required .";
  //   }
  //   if (data.email === "") {
  //     err.email = "Email is required .";
  //   } else {
  //     if (validator.isEmail(data.email)) {
  //       err.email = "";
  //     } else {
  //       err.email = "Enter valid email .";
  //     }
  //   }
  //   if (data.mobile === "") {
  //     err.mobile = "Mobile is required .";
  //   } else {
  //     if (data.mobile.length < 10) {
  //       err.mobile = "Enter the correct Number .";
  //     }
  //   }
  //   if (data.service === "") {
  //     err.service = "Service is required .";
  //   }
  //   // if (data.invoiceNumber === "") {
  //   //   err.invoiceNumber = "Invoice Number is required .";
  //   // } else {
  //   //   if (data.invoiceNumber.length <= 15) {
  //   //     err.invoiceNumber = "Enter the correct Invoice Number .";
  //   //   }
  //   // }
  //   if (data.address === "") {
  //     err.address = "Address is required .";
  //   }
  //   if (data.message === "") {
  //     err.message = "Message is required .";
  //   }

  //   setError({ ...err });
  //   return Object.keys(err).length < 1;
  // };

  const submitData = (e) => {
    e.preventDefault();

    window.Email.send({
      Host: "smtp.elasticemail.com",
      Username: "netops.gm@gmail.com",
      Password: "94D6BD9DD202FD73831B27D3BAB2FF91C6EA",
      Port: 2525,
      To: "netops.gm@gmail.com",
      From: "netops.gm@gmail.com",
      Subject: `${data.name}`,
      Body: `<div className="bg-[#04789D]">
          <p className="font-bold text-base text-[#04789D]">Name : ${data.name}</p> <br>  
          <p className="font-bold text-base text-[#04789D]">email : ${data.email}</p> <br>  
          <p className="font-bold text-base text-[#04789D]">Mobile : ${data.mobile}</p> <br>  
          <p className="font-bold text-base text-[#04789D]">State : ${state}</p> <br> 
          <p className="font-bold text-base text-[#04789D]">City : ${city}</p> <br>  
          <p className="font-bold text-base text-[#04789D]">Product name : ${products}</p> <br>  
    </div>
     `,
    }).then((message) => {
      if (message === "OK") {
        alert("message has been send, thank you for connecting");
      } else {
        alert("there is some error");
      }
    });
    // let isValid = ValidationForm();
    // if (isValid) {

    //   toast.success("Submitted.");
    // } else {
    //   toast.error("All details are required .");
    // }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center pt-[90px] mb-20 font-roboto">
        <div className="w-full h-full flex flex-col lg:flex-row  items-center   justify-center relative mb-5 ">
          <div className="w-full lg:w-4/6 z-10 ">
            <div className="contact">
              <img className="hidden lg:block" src={contact} alt="contact" />
              <img className="block lg:hidden" src={contactbg} alt="contact" />
            </div>
          </div>
          <div className="w-full lg:w-1/2  relative mt-5 lg:mt-0">
            <div className="h-[100px] overflow-hidden bg-blue flex flex-col items-center justify-center text-white lg:absolute left-0 lg:left-[-100px] right-0 lg:top-[-70px]">
              <h1 className="text-center font-bold text-4xl font-Montserrat drop-shadow-lg ">
                Gplus Home Appliances
              </h1>
              <p className="font-medium mt-1">
                Always <span className="text-orange"> YES</span> to Gplus
              </p>
            </div>
            {/* <div >
              <img src={dotimg} alt="" />
            </div> */}
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
                  </span>
                  care@gplusindia.com
                </h1>
                <h1 className="text-white mt-2 flex items-center">
                  <span className="mr-3">
                    <BsFillTelephoneFill size={20} color="#a4eaf0" />
                  </span>
                  1800 12398 6666
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse lg:flex-row justify-center  w-full pl-10 pr-10">
          <div className="w-full lg:w-1/2 sm:pl-10 sm:pr-10">
            <section className="bg-white dark:bg-gray-900">
              <div className=" px-4 mx-auto max-w-screen-md">
                <form
                  action="#"
                  className="space-y-2 w-full"
                  onSubmit={submitData}
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block  text-sm font-medium text-gray-900 dark:text-gray-300"
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
                      required
                    />
                    {/* <span className="font-normal text-sm text-[#FF0000]">
                      {error.name}
                    </span> */}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block  text-sm font-medium text-gray-900 dark:text-gray-300"
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
                      required
                    />
                    {/* <span className="font-normal text-sm text-[#FF0000]">
                      {error.email}
                    </span> */}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-900 dark:text-gray-300"
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
                      required
                    />
                    {/* <span className="font-normal text-sm text-[#FF0000]">
                      {error.mobile}
                    </span> */}
                  </div>

                  {/* <div>
                    <label
                      htmlFor="service"
                      className="block  text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Service
                    </label>
                    <input
                      type="text"
                      id="service"
                      name="service"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="service"
                      value={data.service}
                      onChange={onHandleData}
                      required
                    />
                    <span className="font-normal text-sm text-[#FF0000]">
                      {error.service}
                    </span>
                  </div> */}
                  {/* <div>
                    <label
                      htmlFor="Invoice Number"
                      className="block  text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Invoice Number
                    </label>
                    <input
                      type="number"
                      id="invoiceNumber"
                      name="invoiceNumber"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="Invoice Number"
                      value={data.invoiceNumber}
                      onChange={onHandleData}
                    />
                    <span className="font-normal text-sm text-[#FF0000]">
                      {error.invoiceNumber}
                    </span>
                  </div> */}
                  {/* <div>
                  <label
                    htmlFor="email/number"
                    className="font-medium text-base capitalize"
                  >
                    State
                  </label>
                  <select
                    required
                    value={state}
                    className="border-2 border-black border-opacity-70 mt-2 rounded h-10 pl-2"
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    <option value="">State</option>
                    {Country &&
                      Country.getAllCountries().map((item) => {
                        return (
                          <option key={item.isoCode} value={item.isoCode}>
                            {item.name}
                          </option>
                        );
                      })}
                  </select>
                  </div> */}

                  <div className="flex flex-col">
                    <label
                      htmlFor="email/number"
                      className="font-medium text-base capitalize"
                    >
                      state
                    </label>
                    <select
                      required
                      value={state}
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      onChange={(e) => setState(e.target.value)}
                    >
                      <option value="">State</option>
                      {states &&
                        states.map((item) => {
                          return (
                            <option key={item.isoCode} value={item.isoCode}>
                              {item.name}
                            </option>
                          );
                        })}
                    </select>
                  </div>

                  <div>
                    {state && (
                      <div>
                        <label
                          htmlFor="email/number"
                          className="font-medium text-base capitalize"
                        >
                          City
                        </label>

                        <select
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      required
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                        >
                          <option value="">-- select City --</option>
                          {City.getCitiesOfState(countryCode, state).map(
                            (item) => {
                              console.log(item)
                              return (
                                <option
                                  key={item?.countryCode}
                                  value={item?.stateCode}
                                >
                                  {item.name}
                                </option>
                              );
                            }
                          )}
                        </select>
                      </div>
                    )}
                  </div>

                  {/* <div>
                    <label
                      htmlFor="Address"
                      className="block  text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      State
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="State"
                      value={data.address}
                      onChange={onHandleData}
                      required
                    />
                    <span className="font-normal text-sm text-[#FF0000]">
                      {error.address}
                    </span>
                  </div> */}
                  {/* <div>
                    <label
                      htmlFor="Address"
                      className="block  text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      City
                    </label> */}

                  {/* <input
                      type="text"
                      id="address"
                      name="address"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="City"
                      value={data.address}
                      onChange={onHandleData}
                      required
                    /> */}
                  {/* <span className="font-normal text-sm text-[#FF0000]">
                      {error.address}
                    </span>
                  </div> */}

                  {/* <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block  text-sm font-medium text-gray-900 dark:text-gray-400"
                    >
                      Your message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows="3"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Message..."
                      value={data.message}
                      onChange={onHandleData}
                    ></textarea>
                    <span className="font-normal text-sm text-[#FF0000]">
                      {error.message}
                    </span>
                  </div> */}

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="font-medium text-base capitalize">
                      Product you are looking for
                    </label>
                    <select
                      name="products"
                      value={products}
                      onChange={(e) => setProducts(e.target.value)}
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    >
                      <option disabled selected>
                        Select products
                      </option>
                      <option value="Washing Machine">Washing Machine</option>
                      <option value="Refrigerator">Refrigerator</option>
                      <option value="Dish washer">Dish washer</option>
                      <option value="Gas Stove">Gas Stove</option>
                      <option value="Rice Cooker">Rice Cooker</option>
                      <option value="Smart Tv">Smart Tv</option>
                      <option value="Air Condition">Air Condition</option>
                      <option value="Mixer">Mixer</option>
                      <option value="Wet Grinder">Wet Grinder</option>
                    </select>
                    {/* <span className="font-normal text-sm text-[#FF0000]">
                      {error.message}
                    </span> */}
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
      </div>
    </>
  );
};

export default Support;
