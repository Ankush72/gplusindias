import React from "react";
import "./About.css";
import counterbg from "../image/counterbg.jpeg";
import MetaData from "../MetaData/MetaData";

const About = () => {
  return (
    <>
      <MetaData
        title={`Gplus India | Best Washing Machine`}
      />
      <div className="pt-20  w-full bg-[#DFE3E4] pb-10 ">
        <div
          className="w-full h-[200px] flex items-center justify-center opacity-80 mt-5 mb-5 shadow-2xl"
          style={{
            backgroundImage: `url(${counterbg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <h1 className="font-bold text-5xl text-white">About Us</h1>
        </div>

        {/* About sections */}
        <div className="flex items-center justify-center">
          <div className="w-5/6 md:w-1/2 pr-5 pt-10">
            <h1 className="font-bold text-3xl capitalize text-center">
              Who we are?
            </h1>
            <p className="font-medium text-lg mt-5 font-Montserrat">
              Gplus is a home appliances manufactures in India and also best
              washing machine in India. Gplus products made Best washing machine
              with Innovative Technology gives powerful Performance.
            </p>
          </div>
        </div>

        <div className="flex  justify-between pl-10 md:pl-20 pr-10 md:pr-20 pb-10 pt-10 w-full">
          <div className=" w-full ">
            <div className="text-black bg-white rounded-lg shadow-2xl shadow-lighblack p-2 font-normal text-base font-poppins">
              <p className="mt-2">
                We are dedicated to provide you with the best quality appliances
                to enhance your home and make your life easier. With a wide
                range of products, exceptional customer service, and a
                commitment to innovation, we are your go-to destination for all
                your home appliance needs.
              </p>

              <div className="mt-3">
                <h1 className="font-semibold text-lg">Our Mission : </h1>
                <p className="mt-2">
                  GPLUS is here to transform your house into a comfortable and
                  efficient home by offering top-of-the-line home appliances
                  that combine cutting-edge technology, exceptional design, and
                  unparalleled performance. We strive to make your daily
                  routines more enjoyable, convenient, and productive.
                </p>
              </div>

              <div className="mt-3">
                <h1 className="font-semibold text-lg">
                  Quality and Reliability :
                </h1>
                <p className="mt-2">
                  We understand that investing in home appliances is a
                  significant decision. That's why we meticulously source our
                  products from trusted manufacturers known for their commitment
                  to quality and reliability. We too have our own manufacturing
                  unit where we manufacture wide range of home appliances in all
                  segments with high customer satisfaction rate.
                </p>
                <p className="mt-2">
                  Every appliance in our collection undergoes rigorous testing
                  to ensure it meets the highest standards of performance and
                  durability.
                </p>
              </div>

              <div className="mt-3">
                <h1 className="font-semibold text-lg">
                  Wide Range of Appliances :
                </h1>
                <p className="mt-2">
                  Whether you're looking for kitchen appliances, laundry
                  machines, air conditioners, or any other home appliance, we
                  have you covered. Our extensive range of products includes:
                </p>
                <ol className="list-decimal ml-10 font-bold">
                  <li className="font-normal text-base mt-3">
                    <h1 className="font-semibold text-base">
                      Kitchen Appliances :
                    </h1>
                    Discover a comprehensive selection of refrigerators, ovens,
                    cooktops, dishwashers, microwaves, and more. Elevate your
                    culinary experience with our advanced features, sleek
                    designs, and energy-efficient options.
                  </li>

                  <li className="font-normal text-base mt-3">
                    <h1 className="font-semibold text-base">
                      Laundry Appliances :
                    </h1>
                    Simplify your laundry routine with our efficient and
                    high-performing washing machines, dryers, and washer-dryer
                    combos. We offer a variety of sizes and functionalities to
                    suit your specific needs.
                  </li>

                  <li className="font-normal text-base mt-3">
                    <h1 className="font-semibold text-base">
                      Home Comfort Appliances :
                    </h1>
                    Create the perfect indoor environment with our range of air
                    conditioners, coolers, fans, and air purifiers. Experience
                    optimal comfort and improved air quality for you and your
                    family.
                  </li>

                  <li className="font-normal text-base mt-3">
                    <h1 className="font-semibold text-base">
                      Small Appliances :{" "}
                    </h1>
                    Enhance your daily life with our collection of small
                    appliances, including mixer grinders, gas stoves, blenders,
                    wet grinders, and more. These versatile and reliable devices
                    are designed to streamline your tasks and save you time.
                  </li>
                </ol>
              </div>

              <div className="mt-3">
                <h1 className="font-semibold text-base">
                  Exceptional Customer Service :
                </h1>
                <p className="mt-2">
                  At GPLUS, customer satisfaction is our top priority. Our
                  dedicated team of experts is ready to assist you at every
                  step, from product selection to after-sales support. We
                  provide comprehensive product information, personalized
                  recommendations, and timely assistance to ensure that you have
                  a smooth and enjoyable shopping experience with us.
                </p>
              </div>

              <div className="mt-3">
                <h1 className="font-semibold text-base">
                  Innovation and Sustainability :
                </h1>
                <p className="mt-2">
                  We are committed to staying at the forefront of technological
                  advancements in the home appliance industry. With our own
                  manufacturing, we bring you appliances that are not only
                  efficient and convenient but also environmentally friendly. We
                  strive to offer sustainable options that reduce energy
                  consumption and contribute to a greener future.
                </p>
                <p className="mt-2">
                  We hope you enjoy exploring our range of home appliances and
                  find the perfect solutions for your needs. Should you have any
                  questions or require further assistance, please don't hesitate
                  to reach out to our friendly team.
                </p>
                <p className="mt-2">
                  Thank you for choosing GPLUS as your trusted source for home
                  appliances.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="flex flex-col items-center justify-center  pl-10 pr-10">
          <div className="bg-white rounded-lg md:rounded-full  shadow-2xl flex flex-col items-center justify-center  text-center p-5 font-poppins">
            <h1 className="font-bold text-black text-xl mb-5">OUR VISION</h1>
            <p className="text-black font-normal text-base">
              Our vision at GPLUS is to revolutionize the way people interact
              with their homes by providing innovative, reliable, and
              sustainable home appliances. We envision a future where every
              household has access to technologically advanced and
              energy-efficient appliances that simplify daily tasks, enhance
              comfort, and promote a sustainable lifestyle.
            </p>
          </div>
          <div className=" bg-blue  rounded-lg md:rounded-full  shadow-2xl flex flex-col items-center justify-center  text-center p-5 font-poppins">
            <h1 className="font-bold text-white text-xl mb-5">OUR MISSION</h1>
            <p className="text-white text-base ">
              Our mission is to design, manufacture, and deliver high-quality
              home appliances that exceed customer expectations in terms of
              performance, durability, and convenience. We strive to enhance the
              lives of our customers by offering innovative solutions that save
              time, energy, and resources. We are committed to creating a
              positive impact on the environment by promoting eco-friendly
              practices and continually improving the energy efficiency of our
              products.
            </p>
            <p className="mt-2 text-white">
              Through our vision & mission, we are dedicated to being a leading
              brand in the home appliances industry, continuously striving to
              exceed expectations and positively impact the lives of our
              customers and the environment.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
