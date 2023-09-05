import AC from "../image/Air Condition.png";
import AC2 from "../image/Out door 01.png";
import washingMachine from "../image/Washing Machine 12.png";
// import washingMachines from "../image/6kg_white.jpg"
import Refrigerator from "../image/Fridge.png";
import Tv1 from "../image/TV 3.jpg";
import washingMachine1 from "../image/washingMachine2.jpeg";
import washingMachine2 from "../image/Washing Machine1.png";
// import loadWashingMachine from "../image/Washing Machine 7.png";
// import loadWashingMachine1 from "../image/Washing Machine 8.png";
// import loadWashingMachine2 from "../image/Washing Machine 10.png";
// import loadWashingMachine3 from "../image/Washing Machine 11.png";
// import washingMachine22 from "../image/washingMachine22.png"
// import semiAutomaticWashingMachine1 from "../image/Semi Automatic Washing Machine 1.png";
// import semiAutomaticWashingMachine2 from "../image/Semi Automatic Washing Machine 2.png";
// import semiAutomaticWashingMachine3 from "../image/Semi Automatic Washing Machine 3.png";
// import semiAutomaticWashingMachine4 from "../image/Semi Automatic Washing Machine 4.png";
import semi7_5 from "../image/Semi 7.5 Kg 01.png";
import semi7_5kg from "../image/Semi 7.5 Kg 02.png";
import semi8kg1 from "../image/Semi 8 Kg 01.png";
import semi8kg2 from "../image/Semi 8 Kg 02.png";
import ACBanner1 from "../image/AC Banner 1.jpeg";
import ACBanner2 from "../image/AC Banner 3.jpeg";
import washingMachineBanner1 from "../image/WashingMachineBanner1.png";
import washingMachineBanner2 from "../image/WashingMachineBanner2.png";
import washingMachineBanner3 from "../image/WashingMachineBanner3.png";
import LEDTVBanner1 from "../image/LEDTVBanner.png";
// import { "" } from "react-icons/ai";
// import {BsFillBoxFill} from "react-icons/bs"

const HomeAppliances = [
  // washing machine
  {
    id: 1,
    imgurl: [washingMachine1, washingMachine2],
    name: "washing machine",
    banner: [
      washingMachineBanner1,
      washingMachineBanner2,
      washingMachineBanner3,
    ],
    data: [
      {
        id: 1,
        diraction: "row-reverse",
        imgurl: [washingMachine],
        heading: "Key Features : -",
        route: "fully-automatic-washing-machine-6kg",
        name: "Fully Automatic Washing Machine 6 KG",
        description:
          "Introducing Gplus Fully Automatic Washing Machine 6 kg: Effortless Laundry, Superior Performance. Experience the convenience of advanced laundry care with Gplus Fully Automatic Washing Machine 6 kg. Designed to handle your daily laundry needs with efficiency and precision, this washing machine delivers outstanding results every time. Upgrade your laundry routine with Gplus Fully Automatic Washing Machine 6 kg. Experience the joy of effortless laundry care and the confidence of knowing your clothes will be washed with care and efficiency. Simplify your life and embrace the convenience of this washing machine, designed to make your laundry tasks a breeze. Invest in Gplus Fully Automatic Washing Machine 6 kg and transform your laundry experience today. Say goodbye to manual washing and enjoy pristine laundry results with this reliable and efficient appliance   ",
        keyfeatures: [
          "16 WASH PROGRAM  6 KG CAPACITY",
          "LARGE LED DISPLAY",
          "METALIC BODY WITH EMBOSED COVER TO PREVENT RUSTING ",
          "WITH 3 DIFFERENT MATALIC COLOUR OF WHITE , SILVER , GREY",
          "SPIN RPM OF 1200 WITH 4 SPEED OF 600, 800, 1000, 1200 RPM",
          "DIAMOUND STAINLESS STEEL DRUM ",
        ],
        product: [
          {
            box: [
              {
                boxname: "without box",
                boxsize: [
                  { name: "width", Icon: "", size: "598mm" },
                  { name: "height", Icon: "", size: "845mm" },
                  { name: "Depth", Icon: "", size: "445mm" },
                  { name: "weight", Icon: "", size: "47kg" },
                ],
              },
              {
                boxname: "with box",
                boxsize: [
                  { name: "width", Icon: "", size: "652mm" },
                  { name: "height", Icon: "", size: "845mm" },
                  { name: "Depth", Icon: "", size: "485mm" },
                  { name: "weight", Icon: "", size: "51kg" },
                ],
              },
            ],
            variationsDetails: [
              {
                name: "Variations Details",
                details: [
                  { name: "color", details: "Gray,silver,white" },
                  { name: "design", details: "Majestic" },
                  { name: "finish", details: "Metallic" },
                ],
              },
              // washingMachineDetails
              {
                name: "Washing Machines Details",
                details: [
                  { name: "Gross Capacity (Kg)", details: "6 kg" },
                  { name: "Motor Warranty", details: "10 years" },
                ],
              },
              // washingDetails
              {
                name: "Washing Details",
                details: [
                  {
                    name: "Types Of Washing Modes/Programs",
                    details:"Mixed, Eco 40-60, Cotton, 20*c, Gentle, Wool, night, Antibactrial, Drum Clean, Rinse + Spin, Spin, Kids Wear, Shirts, Underwears, Quick 30, Quick 15"
                  },
                  { name: "Types Of Stain Removal", details: "100%" },
                  { name: "No. Of Washing Modes/Programs", details: "16" },
                  { name: "In-Built Heater", details: "Yes" },
                  { name: "Express Wash", details: "Yes" },
                ],
              },
              // General Information
              {
                name: "General Information",
                details: [
                  {
                    name: "Net Quantity(Unit)",
                    details: "1",
                  },
                  {
                    name: "Product Type",
                    details: "Fully Automatic Front Load Washing Machine",
                  },
                  { name: "Comprehensive Warranty (Year)", details: "2 Years" },
                  
                  {
                    name: "In The Box Contents",
                    details:
                      "User Manual, Ratmesh & screws, Inlet Hose, Transport Caps, warnty card",
                  },
                  { name: "Installation Type", details: "Freestanding" },
                ],
              },
              // Other Details
              {
                name: "Other Details",
                details: [
                  {
                    name: "Motor Type",
                    details: "Inverter",
                  },
                  { name: "Maximum Spin Speed", details: "1200 RPM" },
                ],
              },
              // Manufacturer Information
              {
                name: "Manufacturer Information",
                details: [
                  {
                    name: "Manufactured By",
                    details: "Garuda Mart India Private Limited.",
                  },
                  { name: "Country Of Origin", details: "India" },
                  { name: "Contact Us", details: "care@garudamartindia.com" },
                  {
                    name: "Launch Year",
                    details: "2017",
                  },
                  {
                    name: "Packed By",
                    details: "Garuda Mart India",
                  },
                ],
              },
              // Interior Details
              {
                name: "Interior Details",
                details: [
                  {
                    name: "Auto Detergent Dosage",
                    details: "No",
                  },
                  { name: "Rat Mesh", details: "Yes" },
                ],
              },
              // Exterior Details
              {
                name: "Exterior Details",
                details: [
                  {
                    name: "Wheel Support",
                    details: "No",
                  },
                  { name: "Display ", details: "LED display" },
                ],
              },
              // Energy Details
              {
                name: "Energy Details",
                details: [
                  // taalk with 
                  {
                    name: "Energy Rating",
                    details: "5 Star",
                  },
                  { name: "Voltage Range(V)", details: "220-240v" },
                  { name: "Consuption power at wash cycle", details: "2000 Watts" },
                  { name: "Frequency (Hz)", details: "50 Hz" },
                ],
              },
              // Special Features
              {
                name: "Special Features",
                details: [
                  {
                    name: "",
                    details:"TRANSPERENT DOOR WITH BOROSIL GLASS, TUMBLE WASH TO BETTER WASH QUALITY, HOT WATER OPTION WITH 4 TYPE 20, 40, 60, 85 *C, DRUM CLEANING PROGRAM TO SELF CLEAN BY THE MACHINE, ERROR CODES TO CUSTOMER TO ACCESS BY CUSTOMER TO REPAIR BY THEMSELF"
                  }
                  ],
              },
            ],
          },
        ],
      },
      {
        id: 2,
        diraction: "row-reverse",
        imgurl: [washingMachine1, washingMachine2],
        route: "fully-automatic-washing-machine-7kg",
        heading: "Key Features : -",
        name: "Fully Automatic Washing Machine 7 KG",
        description:
          "Introducing Gplus Fully Automatic Washing Machine 7 kg: Ultimate Laundry Performance, Unmatched Convenience.  Experience superior laundry care with Gplus Fully Automatic Washing Machine 7 kg. Designed to handle larger laundry loads with efficiency and precision, this washing machine takes the hassle out of laundry and ensures pristine results every time. Upgrade your laundry routine with Gplus Fully Automatic Washing Machine 7 kg. Revel in the convenience of handling larger laundry loads effortlessly and enjoy pristine laundry results. Whether you're washing delicate fabrics or heavily soiled garments, this washing machine ensures every item is treated with care. Embrace the luxury of a fully automatic washing experience, and say goodbye to manual washing forever. Invest in Gplus Fully Automatic Washing Machine 7 kg and elevate your laundry game today. Experience the joy of efficient laundry care and achieve immaculate results with this advanced and reliable appliance",
        keyfeatures: [
          "HYGIENE STEAM WASH",
          "ANIT BACTARIAL WASH ",
          "99.9 % GERM FREE WASH",
          "15 WASH PROGRAMMES",
          "15 MIN RAPID PROGRAM",
          "LARGE LED DIGITAL DISPLAY",
          "7 KG CAPACITY ",
          "TRANSPERENT BOROSIL GLASS DOOR",
          "STAINLESS STEEL DIAMOUND OR PYRAMID DRUM",
          "HEAVY DUTY OUTER BODY ",
          "5 SPEED RPM IN SPIN OF 600, 800, 1000, 1200, 1400 RPM",
        ],
        product: [
          {
            box: [
              {
                boxname: "without box",
                boxsize: [
                  { name: "width", Icon: "", size: "595mm" },
                  { name: "height", Icon: "", size: "850mm" },
                  { name: "Depth", Icon: "", size: "495mm" },
                  { name: "weight", Icon: "", size: "60kg" },
                ],
              },
              {
                boxname: "with box",
                boxsize: [
                  { name: "width", Icon: "", size: "650mm" },
                  { name: "height", Icon: "", size: "885mm" },
                  { name: "Depth", Icon: "", size: "575mm" },
                  { name: "weight", Icon: "", size: "60kg" },
                ],
              },
            ],
            variationsDetails: [
              {
                name: "Variations Details",
                details: [
                  { name: "color", details: "Gray" },
                  { name: "design", details: "Majestic Silver" },
                  { name: "finish", details: "Metallic" },
                ],
              },
              // washingMachineDetails
              {
                name: "Washing Machines Details",
                details: [
                  { name: "Gross Capacity (Kg)", details: "7 kg" },
                  { name: "Motor Warranty", details: "10 years" },
                ],
              },
              // washingDetails
              {
                name: "Washing Details",
                details: [
                  {
                    name: "Types Of Washing Modes/Programs",
                    details:"My cycle, cotton, baby care, senthitic, jeans, Mix, 20*c, Ring & Spin, Spin Only, intensive, Eco 40-60*c, Delicte, Wool, Sport Wear, rapid 45, Quick 15"
                  },
                  { name: "Types Of Stain Removal", details: "100 %" },
                  { name: "No. Of Washing Modes/Programs", details: "15" },
                  { name: "In-Built Heater", details: "Yes" },
                  { name: "Express Wash", details: "Yes" },
                ],
              },
              // General Information
              {
                name: "General Information",
                details: [
                  {
                    name: "Net Quantity(Unit)",
                    details: "1",
                  },
                  {
                    name: "Product Type",
                    details: "Fully Automatic Front Load Washing Machine",
                  },
                  { name: "Comprehensive Warranty (Year)", details: "2 Years" },
                  
                  {
                    name: "In The Box Contents",
                    details:
                      "User Manual, Ratmesh & screws, Inlet Hose, Transport Caps, warnty card",
                  },
                  { name: "Installation Type", details: "Freestanding" },
                ],
              },
              // Other Details
              {
                name: "Other Details",
                details: [
                  {
                    name: "Motor Type",
                    details: "Inverter",
                  },
                  { name: "Maximum Spin Speed", details: "1400" },
                ],
              },
              // Manufacturer Information
              {
                name: "Manufacturer Information",
                details: [
                  {
                    name: "Manufactured By",
                    details: "Garuda Mart India Private Limited.",
                  },
                  { name: "Country Of Origin", details: "India" },
                  { name: "Contact Us", details: "care@garudamartindia.com" },
                  {
                    name: "Launch Year",
                    details: "2017",
                  },
                  {
                    name: "Packed By",
                    details: "Garuda Mart India",
                  },
                ],
              },
              // Interior Details
              {
                name: "Interior Details",
                details: [
                  {
                    name: "Auto Detergent Dosage",
                    details: "No",
                  },
                  { name: "Rat Mesh", details: "Yes" },
                ],
              },
              // Exterior Details
              {
                name: "Exterior Details",
                details: [
                  {
                    name: "Wheel Support",
                    details: "No",
                  },
                  { name: "Display ", details: "LED display" },
                ],
              },
              // Energy Details
              {
                name: "Energy Details",
                details: [
                  // taalk with 
                  {
                    name: "Energy Rating",
                    details: "5 Star",
                  },
                  { name: "Voltage Range(V)", details: "220-240v" },
                  { name: "Consuption power at wash cycle", details: "2000 Watts" },
                  { name: "Frequency (Hz)", details: "50 Hz" },
                ],
              },
              // Special Features
              {
                name: "Special Features",
                details: [
                  {
                    name: "",
                    details:"My universal Cycle Program, 7 th senseFOAM SENSOR  technology, Hygiene Steam Wash, 99.9 Antibacterial cycle, Water jet Diamound Drum, 1400  RPM Spin speed"
                  },
                ],
              },
            ],
          },
        ],
      },
     
      // {
      //   id: 3,
      //   diraction: "row",
      //   imgurl: [
      //     loadWashingMachine,
      //     loadWashingMachine1,
      //     loadWashingMachine2,
      //     loadWashingMachine3,
      //   ],
      //   name: "Fully Automatic Top Load Washing Machine 6KG",
      //   heading: "Key Features : -",
      //
      //   description:
      //     "Introducing Gplus Fully Automatic Top Load Washing Machine: Smart Laundry Solutions for You Discover a new level of laundry convenience with Gplus Fully Automatic Top Load Washing Machine. Designed to provide effortless washing and superior performance, this washing machine takes care of your laundry needs with ease. Upgrade your laundry experience with Gplus Fully Automatic Top Load Washing Machine. Embrace the convenience of a top-loading design and the luxury of fully automatic operation. Say goodbye to the hassles of manual washing and let this advanced washing machine take care of your laundry efficiently. Invest in Gplus Fully Automatic Top Load Washing Machine and redefine your laundry routine today. Enjoy impeccable cleaning performance and the joy of pristine, fresh-smelling clothes with this reliable and innovative appliance",
      //   keyfeatures: [
      //     "TOP LOADING WITH AGITATOR WASH",
      //     "6 KG CAPACITY ",
      //     "HYDRO JET PULSATOR WITH 3 WAY WATER PRESSURE",
      //     "6 PROGRAM WASH ",
      //     "6 ADJUSTABLE FUNCTIONS",
      //     "LINT COLLECTING MAGIC FILTER",
      //     "AIR DREYER PROGRAM IS USED TO DRY CLOTH IN ROOM",
      //     "DIGITAL DISPLAY IN PCB BOARD",
      //     "ERROR CODES TO CUSTOMER TO ACCESS BY CUSTOMER TO REPAIR BY THEMSELF",
      //   ],
      // },
      {
        id: 4,
        diraction: "row",
        imgurl: [semi7_5, semi7_5kg],
        name: "Semi Automatic Washing Machine 7.5 KG",
        route: "semi-automatic-washing-machine-7.5kg",
        heading: "Key Features : -",
        description:
          "Introducing Gplus 7.5 kg Semi-Automatic Washing Machine: Powerful and Efficient Laundry Companion Discover the perfect balance of performance and capacity with Gplus 7.5 kg Semi-Automatic Washing Machine. Designed to handle larger laundry loads with ease, this washing machine provides superior cleaning performance for your entire household.Experience efficient laundry care with Gplus 7.5 kg Semi-Automatic Washing Machine. Whether you have a larger family or frequent laundry needs, this washing machine offers the perfect solution. Enjoy the benefits of semi-automatic washing with added capacity, and experience clean and fresh clothes effortlessly. Invest in Gplus 7.5 kg Semi-Automatic Washing Machine and streamline your laundry routine today. With its powerful performance and versatility, this reliable appliance will become an indispensable part of your household. Embrace the convenience of Gplus 7.5 kg Semi-Automatic Washing Machine and enjoy pristine laundry results every time",
        keyfeatures: [
          "RUST PROOF BODY",
          "SOAKING OPTION WITH 35 MIN IN WASH TIMER",
          "CASTOR WHEEL TO MOVE EASILE",
          "HEAVY DUTY WASH MOTOR",
          "WASH CAPACITY 7.5 KG",
          "5 YEARS WARRANTY ON MOTOR ",
        ],

        product: [
          {
            box: [
              {
                boxname: "without box",
                boxsize: [
                  { name: "width", Icon: "", size: "815mm" },
                  { name: "height", Icon: "", size: "1050mm" },
                  { name: "Depth", Icon: "", size: "500mm" },
                  { name: "weight", Icon: "", size: "19.5kg" },
                ],
              },
              {
                boxname: "with box",
                boxsize: [
                  { name: "width", Icon: "", size: "800mm" },
                  { name: "height", Icon: "", size: "990mm" },
                  { name: "Depth", Icon: "", size: "480mm" },
                  { name: "weight", Icon: "", size: "22.5kg" },
                ],
              },
            ],
            variationsDetails: [
              {
                name: "Variations Details",
                details: [
                  { name: "color", details: "Black transparent, Blue Flower, Pink, Red" },
                  { name: "design", details: "Acrylonitrile Butadiene Styrene plastic body" },
                  { name: "finish", details: "Non Metallic, Anti Corassion body" },
                ],
              },
              // washingMachineDetails
              {
                name: "Washing Machines Details",
                details: [
                  { name: "Gross Capacity (Kg)", details: "7.5 kg" },
                  { name: "Motor Warranty", details: "5 years" },
                ],
              },
              // washingDetails
              {
                name: "Washing Details",
                details: [
                  {
                    name: "Types Of Washing Modes/Programs",
                    details:"Soaking Option With 35 Min In Wash Timer",
                  },
                  { name: "Types Of Stain Removal", details: "60%" },
                  { name: "No. Of Washing Modes/Programs", details: "Soaking Option With 35 Min In Wash Timer" },
                  { name: "In-Built Heater", details: "No" },
                  { name: "Express Wash", details: "No" },
                ],
              },
              // General Information
              {
                name: "General Information",
                details: [
                  {
                    name: "Net Quantity(Unit)",
                    details: "1",
                  },
                  {
                    name: "Product Type",
                    details: "Semi Automatic Washing Machine",
                  },
                  { name: "Comprehensive Warranty (Year)", details: "2 Years" },
                  
                  {
                    name: "In The Box Contents",
                    details:
                      "User Manual, Inlet Hose, warnty card",
                  },
                  { name: "Installation Type", details: "Freestanding with castrol wheels" },
                ],
              },
              // Other Details
              {
                name: "Other Details",
                details: [
                  {
                    name: "Motor Type",
                    details: "Inverter",
                  },
                  { name: "Maximum Spin Speed", details: "750 RPM" },
                ],
              },
              // Manufacturer Information
              {
                name: "Manufacturer Information",
                details: [
                  {
                    name: "Manufactured By",
                    details: "Garuda Mart India Private Limited.",
                  },
                  { name: "Country Of Origin", details: "India" },
                  { name: "Contact Us", details: "care@garudamartindia.com" },
                  {
                    name: "Launch Year",
                    details: "2017",
                  },
                  {
                    name: "Packed By",
                    details: "Garuda Mart India",
                  },
                ],
              },
              // Interior Details
              {
                name: "Interior Details",
                details: [
                  {
                    name: "Auto Detergent Dosage",
                    details: "No",
                  },
                  
                ],
              },
              // Exterior Details
              {
                name: "Exterior Details",
                details: [
                  {
                    name: "Wheel Support",
                    details: "Yes",
                  },
                  { name: "Timer Model ", details: "35 min" },
                ],
              },
              // Energy Details
              {
                name: "Energy Details",
                details: [
                  // taalk with 
                  {
                    name: "Energy Rating",
                    details: "5 Star",
                  },
                  { name: "Voltage Range(V)", details: "220-240v" },
                  { name: "Consuption power at wash cycle", details: "350 Watts" },
                  { name: "Frequency (Hz)", details: "50 Hz" },
                ],
              },
              // Special Features
              {
                name: "Special Features",
                details: [
                  {
                    name: "",
                    details:"5 CLOURS OF WASHING MACHINE, AUTO BALANCER TO CLOTHS, SPIN MOTOR OF 150 WATTS,SPIN MOTOR CAPACITY 3.5 KG"
                  }
                  ],
              },
            ],
          },
        ],
      },
      {
        id: 5,
        diraction: "row-reverse",
        imgurl: [semi8kg1, semi8kg2],
        name: "Semi Automatic Washing Machine 8 KG",
        route: "semi-automatic-washing-machine-8kg",
        heading: "Key Features : -",
        description:
          "Introducing Gplus 8 kg Semi Automatic Washing Machine: Simplify Your Laundry Tasks Experience efficient and effortless laundry care with Gplus 8 kg Semi Automatic Washing Machine. Designed to handle your daily laundry needs with ease, this washing machine delivers reliable performance and ensures clean and fresh clothes every time.Experience the joy of efficient laundry care with Gplus 8 kg Semi Automatic Washing Machine. Whether you want more control over your laundry process or need a reliable and affordable washing solution, this washing machine is the perfect fit. Simplify your laundry routine and invest in Gplus 8 kg Semi Automatic Washing Machine today. Enjoy clean and fresh clothes with minimal effort, and let this reliable and efficient appliance take care of your laundry needs. Upgrade your laundry experience and embrace the convenience of Gplus 8 kg Semi Automatic Washing Machine for a hassle-free laundry day, every day",
        keyfeatures: [
          "RUST PROOF BODY",
          "8 KG WASHING MACHINE",
          "SOAKING OPTION WITH 35 MIN IN WASH TIMER",
          "CASTOR WHEEL TO MOVE EASILE",
          "HEAVY DUTY WASH MOTOR",
          "WASH CAPACITY 8 KG",
          "5 YEARS WARRANTY ON MOTOR ",
        ],
        product: [
          {
            box: [
              {
                boxname: "without box",
                boxsize: [
                  { name: "width", Icon: "", size: "815mm" },
                  { name: "height", Icon: "", size: "1050mm" },
                  { name: "Depth", Icon: "", size: "500mm" },
                  { name: "weight", Icon: "", size: "19.5kg" },
                ],
              },
              {
                boxname: "with box",
                boxsize: [
                  { name: "width", Icon: "", size: "800mm" },
                  { name: "height", Icon: "", size: "990mm" },
                  { name: "Depth", Icon: "", size: "480mm" },
                  { name: "weight", Icon: "", size: "22.5kg" },
                ],
              },
            ],
            variationsDetails: [
              {
                name: "Variations Details",
                details: [
                  { name: "color", details: "Black transparent, Blue Flower, Pink, Red" },
                  { name: "design", details: "Acrylonitrile Butadiene Styrene plastic body" },
                  { name: "finish", details: "Non Metallic, Anti Corassion body" },
                ],
              },
              // washingMachineDetails
              {
                name: "Washing Machines Details",
                details: [
                  { name: "Gross Capacity (Kg)", details: "7.5 kg" },
                  { name: "Motor Warranty", details: "5 years" },
                ],
              },
              // washingDetails
              {
                name: "Washing Details",
                details: [
                  {
                    name: "Types Of Washing Modes/Programs",
                    details:"Soaking Option With 35 Min In Wash Timer",
                  },
                  { name: "Types Of Stain Removal", details: "60%" },
                  { name: "No. Of Washing Modes/Programs", details: "Soaking Option With 35 Min In Wash Timer" },
                  { name: "In-Built Heater", details: "No" },
                  { name: "Express Wash", details: "No" },
                ],
              },
              // General Information
              {
                name: "General Information",
                details: [
                  {
                    name: "Net Quantity(Unit)",
                    details: "1",
                  },
                  {
                    name: "Product Type",
                    details: "Semi Automatic Washing Machine",
                  },
                  { name: "Comprehensive Warranty (Year)", details: "2 Years" },
                  
                  {
                    name: "In The Box Contents",
                    details:
                      "User Manual, Inlet Hose, warnty card",
                  },
                  { name: "Installation Type", details: "Freestanding with castrol wheels" },
                ],
              },
              // Other Details
              {
                name: "Other Details",
                details: [
                  {
                    name: "Motor Type",
                    details: "Inverter",
                  },
                  { name: "Maximum Spin Speed", details: "750 RPM" },
                ],
              },
              // Manufacturer Information
              {
                name: "Manufacturer Information",
                details: [
                  {
                    name: "Manufactured By",
                    details: "Garuda Mart India Private Limited.",
                  },
                  { name: "Country Of Origin", details: "India" },
                  { name: "Contact Us", details: "care@garudamartindia.com" },
                  {
                    name: "Launch Year",
                    details: "2017",
                  },
                  {
                    name: "Packed By",
                    details: "Garuda Mart India",
                  },
                ],
              },
              // Interior Details
              {
                name: "Interior Details",
                details: [
                  {
                    name: "Auto Detergent Dosage",
                    details: "No",
                  },
                  
                ],
              },
              // Exterior Details
              {
                name: "Exterior Details",
                details: [
                  {
                    name: "Wheel Support",
                    details: "Yes",
                  },
                  { name: "Timer Model ", details: "35 min" },
                ],
              },
              // Energy Details
              {
                name: "Energy Details",
                details: [
                  // taalk with 
                  {
                    name: "Energy Rating",
                    details: "5 Star",
                  },
                  { name: "Voltage Range(V)", details: "220-240v" },
                  { name: "Consuption power at wash cycle", details: "350 Watts" },
                  { name: "Frequency (Hz)", details: "50 Hz" },
                ],
              },
              // Special Features
              {
                name: "Special Features",
                details: [
                  {
                    name: "",
                    details:"5 CLOURS OF WASHING MACHINE, AUTO BALANCER TO CLOTHS, SPIN MOTOR OF 150 WATTS,SPIN MOTOR CAPACITY 3.5 KG"
                  }
                  ],
              },
            ],
          },
        ],
      },
    ],
  },
  // television
  {
    id: 2,
    imgurl: [Tv1],
    name: "smart LED TV",
    banner: [LEDTVBanner1],
    data: [
      {
        id: 1,
        diraction: "row",
        imgurl: [Tv1],
        heading: "Key Features : -",
        descriptionName: "description",
        route: "smart-hd-led-tv",
        name: "QLED-85 inches",
        description:
          "Introducing the VYOM QLED 85-inch TV – a masterpiece of immersive entertainment and cutting-edge technology. Immerse yourself in a world of breath-taking visuals, stunning colors, and unparalleled clarity that will redefine your TV viewing experience. Elevate your home entertainment with the VYOM QLED 85-inch TV. Immerse yourself in stunning visuals, captivating sound, and an array of smart features that redefine what a TV can be. Experience the future of entertainment today.",
        keyfeatures: [
          "Display: QLED, 3840 x 2160 pixels, 60 Hz",
          "Connectivity: 3 HDMI | 2 USB | Wi-Fi.",
          "Operating System: WebOS.",
          "Apps: Netflix, Prime Video, YouTube, Disney+ Hotstar.",
          "Sound: 20 W Speaker, Dolby Audio.",
          "USP: Vivid Picture Mode, A+ Grade Panel.",
          "Type QLED",
          "Horizontal Viewing Angles : 178 Degrees",
          "Vertical Viewing Angles : 178 Degrees",
          "Other Display Features : HDR (High Dynamic Range)",
        ],
        product: [
          {
            box: [
              {
                boxname: "Dimensions(cm)",
                boxsize: [
                  { name: "width", Icon: "", size: "216cm" },
                  { name: "height", Icon: "", size: "109cm" },
                  { name: "Depth", Icon: "", size: "10cm" },
                  { name: "weight", Icon: "", size: "55-5Kg" },
                ],
              },
              {
                boxname: "Dimensions(inches)",
                boxsize: [
                  { name: "width", Icon: "", size: "85 inches" },
                  { name: "height", Icon: "", size: "43 inches" },
                  { name: "Depth", Icon: "", size: "4 inches" },
                  { name: "weight", Icon: "", size: "55-5Kg" },
                ],
              },
            ],
            variationsDetails: [
             
              // washingMachineDetails
              {
                name: "TELEVISION CATEGORY",
                details: [
                  { name: "Television Features", details: "Q LED" },
                  { name: "Television Format", details: "Ultra HD 4K" },
                  { name: "Television Type", details: "Flat Panel" },
                  { name: "Ideal Viewing Distance", details: "8 - 10 Ft" },
                ],
              },
              // washingDetails
              {
                name: "SCREEN SPECIFICATIONS",
                details: [
                  {
                    name: "Resolution",
                    details:"3840 x 2160 pixels"
                  },
                  { name: "Additional Screen Specifications", details: "A+ Grade Panel" },
                  { name: "Screen Size in Inches", details: "85 Inches" },
                  { name: "Type", details: "Q LED" },
                  { name: "Refresh Rate", details: "60 Hz" },
                  { name: "Horizontal Viewing Angle", details: "178 Degrees" },
                  { name: "Vertical Viewing Angle", details: "178 Degrees" },
                  { name: "Screen Size in CM", details: "216 cm" },
                  { name: "Response Time", details: "8 ms" },
                  { name: "Aspect Ratio", details: "16:9" },
                ],
              },
              // General Information
              {
                name: "TELEVISION SOUND",
                details: [
                  {
                    name: "Speaker Type",
                    details: "Built-In Speakers",
                  },
                  {
                    name: "Speaker Capacity",
                    details: "20 Watts",
                  },
                  { name: "Audio Technology", details: "Dolby Audio" },
                
                ],
              },
              // Other Details
              {
                name: "TELEVISION OPERATING SYSTEM",
                details: [
                  {
                    name: "OS Type",
                    details: "WebOS",
                  },
                  { name: "OS Name & Version", details: "WebOS" },
                ],
              },
              // Manufacturer Information
              {
                name: "MANUFACTURER DETAILS",
                details: [
                  {
                    name: "Brand",
                    details: "VYOM QLED",
                  },
                  { name: "Model Number", details: "GM85QLED" },
                ],
              },
            
              // TELEVISION PROCESSOR DETAILS
              {
                name: "TELEVISION PROCESSOR DETAILS",
                details: [
                  {
                    name: "Upscaling uses Vyom power",
                    details: "Quantum Processor",
                  },
                ],
              },
              // TELEVISION INTERNAL MEMORY
              {
                name: "TELEVISION INTERNAL MEMORY",
                details: [
                  // taalk with 
                  {
                    name: "RAM",
                    details: "2 GB",
                  },
                  
                ],
              },
              // TELEVISION STORAGE SPECIFICATION
              {
                name: "TELEVISION STORAGE SPECIFICATION",
                details: [
                  {
                    name: "Storage Capacity",
                    details:"16GB"
                  }
                  ],
              },
              // TELEVISION PORTS & SLOTS
              {
                name: "TELEVISION PORTS & SLOTS",
                details: [
                  {
                    name: "Number Of USB Ports",
                    details:"2 x USB"
                  },
                  {
                    name: "HDMI Type",
                    details:"HDMI"
                  },
                  {
                    name: "Number Of HDMI Ports",
                    details:"3 x HDMI"
                  }
                  ],
              },

              // TELEVISION NETWORK CONNECTIVITY
              {
                name: "TELEVISION NETWORK CONNECTIVITY",
                details: [
                  {
                    name: "WiFi Supported",
                    details:"Yes"
                  },
                  {
                    name: "WiFi Features",
                    details:"Dual Band(2.4GHz/5GHz)"
                  },
                  {
                    name: "Bluetooth Supported",
                    details:"Yes"
                  },
                  {
                    name: "Bluetooth Specifications",
                    details:"Bluetooth 5.0"
                  }
                  ],
              },
              // REMOTE CONTROL DETAILS
              {
                name: "REMOTE CONTROL DETAILS",
                details: [
                  {
                    name: "Remote Control Type",
                    details:"Voice Control"
                  },
                  {
                    name: "Remote Smart Features",
                    details:"ThinQ & Alexa Voice Controlled Remote"
                  },
                  
                  ],
              },
              // TELEVISION ADDITIONAL FEATURES
              {
                name: "TELEVISION ADDITIONAL FEATURES",
                details: [{
                  name: "",
                  details:"Netflix"
                },
                {
                  name: "",
                  details:"Prime Video"
                },],
              },
              // TELEVISION PLUG DETAILS
              {
                name: "TELEVISION PLUG DETAILS",
                details: [
                  {
                    name: "Frequency",
                    details:"50/60 Hz"
                  },
                  {
                    name: "Voltage Rating",
                    details:"110-240 V"
                  },
                  {
                    name: "Power",
                    details:"127 Watts"
                  },
                  {
                    name: "Power Consumption (Standby)",
                    details:"0.5 Watts"
                  },
                  
                  ],
              },
              // AESTHETICS
              {
                name: "AESTHETICS",
                details: [
                  {
                    name: "Color",
                    details:"Black"
                  },
                  {
                    name: "Color Family",
                    details:"BLACK"
                  },
                  
                  ],
              },
              // IN THE BOX
              {
                name: "IN THE BOX",
                details: [
                  {
                    name: "Documents",
                    details:"User-Manual"
                  },
                  {
                    name: "Main product",
                    details:"1 x Television U"
                  },
                  {
                    name: "Accessories",
                    details:"RemoteControl | RemoteControlBattery"
                  },
                  {
                    name: "Others",
                    details:"Wall Mounting Brackets | Table Top Stand Pair"
                  },
                  {
                    name: "Generic Name",
                    details:"Television"
                  },
                  
                  ],
              },
              
              // COMPANY CONTACT INFORMATION
              {
                name: "COMPANY CONTACT INFORMATION",
                details: [
                  {
                    name: "Customer Support Number",
                    details:"1800 123 986 666"
                  },
                  {
                    name: "Customer Support Email",
                    details:"info@garudamartindia.com"
                  },
                  {
                    name: "Country of Manufacture",
                    details:"India"
                  },
                  
                  
                  ],
              },
            ],
          },
        ],
      },
      // {
      //   id: 2,
      //   diraction: "row",
      //   imgurl: [Tv1],
      //   heading: "Key Features : -",
      //   descriptionName: "description",
      //   route: "smart-HD-LED-TV",
      //   name: "MODEL-GM75SM",
      //   description:
      //     "Introducing Vyom TV – a window to limitless entertainment and immersive viewing experiences. With cutting-edge technology and sleek design, Vyom TV takes your television journey to new heights.Featuring stunning 4K resolution and vibrant colors, Vyom TV brings every scene to life with unparalleled clarity and detail. Whether you're streaming your favorite shows, watching movies, or gaming, the visual quality will leave you awe-inspired",
      //   keyfeatures: [
      //     "INBUILT APPS YOU TUBE",
      //     "BROWSER, NETFLIX",
      //     "STOREAGE 1 GB RAM 8 GB ROM",
      //     "SUPER BASS SOUND SPEAKER",
      //     "AGRADE PANEL (DOT FREE)",
      //     "HD-Ready.",
      //     "Vivid Picture Engine",
      //     "Dual Band Wi-Fi 2.4GHz & 5GHz.",
      //     "Patch Wall 4 with IMDb",
      //     "ANDRIOD 09",
      //   ],
      // },
      // {
      //   id: 3,
      //   diraction: "row",
      //   imgurl: [Tv1],
      //   heading: "Key Features : -",
      //   descriptionName: "description",
      //   route: "smart-HD-LED-TV",
      //   name: "MODEL-GM65SM",
      //   description:
      //     "Introducing Vyom TV – a window to limitless entertainment and immersive viewing experiences. With cutting-edge technology and sleek design, Vyom TV takes your television journey to new heights.Featuring stunning 4K resolution and vibrant colors, Vyom TV brings every scene to life with unparalleled clarity and detail. Whether you're streaming your favorite shows, watching movies, or gaming, the visual quality will leave you awe-inspired",
      //   keyfeatures: [
      //     "INBUILT APPS YOU TUBE",
      //     "BROWSER, NETFLIX",
      //     "STOREAGE 1 GB RAM 8 GB ROM",
      //     "SUPER BASS SOUND SPEAKER",
      //     "AGRADE PANEL (DOT FREE)",
      //     "HD-Ready.",
      //     "Vivid Picture Engine",
      //     "Dual Band Wi-Fi 2.4GHz & 5GHz.",
      //     "Patch Wall 4 with IMDb",
      //     "ANDRIOD 09",
      //   ],
      // },
      // {
      //   id: 4,
      //   diraction: "row",
      //   imgurl: [Tv1],
      //   heading: "Key Features : -",
      //   descriptionName: "description",
      //   route: "smart-HD-LED-TV",
      //   name: "MODEL-GM55SM",
      //   description:
      //     "Introducing Vyom TV – a window to limitless entertainment and immersive viewing experiences. With cutting-edge technology and sleek design, Vyom TV takes your television journey to new heights.Featuring stunning 4K resolution and vibrant colors, Vyom TV brings every scene to life with unparalleled clarity and detail. Whether you're streaming your favorite shows, watching movies, or gaming, the visual quality will leave you awe-inspired",
      //   keyfeatures: [
      //     "INBUILT APPS YOU TUBE",
      //     "BROWSER, NETFLIX",
      //     "STOREAGE 1 GB RAM 8 GB ROM",
      //     "SUPER BASS SOUND SPEAKER",
      //     "AGRADE PANEL (DOT FREE)",
      //     "HD-Ready.",
      //     "Vivid Picture Engine",
      //     "Dual Band Wi-Fi 2.4GHz & 5GHz.",
      //     "Patch Wall 4 with IMDb",
      //     "ANDRIOD 09",
      //   ],
      // },
      // {
      //   id: 5,
      //   diraction: "row",
      //   imgurl: [Tv1],
      //   heading: "Key Features : -",
      //   descriptionName: "description",
      //   route: "smart-HD-LED-TV",
      //   name: "MODEL-GM43SM",
      //   description:
      //     "Introducing Vyom TV – a window to limitless entertainment and immersive viewing experiences. With cutting-edge technology and sleek design, Vyom TV takes your television journey to new heights.Featuring stunning 4K resolution and vibrant colors, Vyom TV brings every scene to life with unparalleled clarity and detail. Whether you're streaming your favorite shows, watching movies, or gaming, the visual quality will leave you awe-inspired",
      //   keyfeatures: [
      //     "INBUILT APPS YOU TUBE",
      //     "BROWSER, NETFLIX",
      //     "STOREAGE 1 GB RAM 8 GB ROM",
      //     "SUPER BASS SOUND SPEAKER",
      //     "AGRADE PANEL (DOT FREE)",
      //     "HD-Ready.",
      //     "Vivid Picture Engine",
      //     "Dual Band Wi-Fi 2.4GHz & 5GHz.",
      //     "Patch Wall 4 with IMDb",
      //     "ANDRIOD 09",
      //   ],
      // },
      // {
      //   id: 6,
      //   diraction: "row",
      //   imgurl: [Tv1],
      //   heading: "Key Features : -",
      //   descriptionName: "description",
      //   route: "smart-HD-LED-TV",
      //   name: "MODEL-GM40SM",
      //   description:
      //     "Introducing Vyom TV – a window to limitless entertainment and immersive viewing experiences. With cutting-edge technology and sleek design, Vyom TV takes your television journey to new heights.Featuring stunning 4K resolution and vibrant colors, Vyom TV brings every scene to life with unparalleled clarity and detail. Whether you're streaming your favorite shows, watching movies, or gaming, the visual quality will leave you awe-inspired",
      //   keyfeatures: [
      //     "INBUILT APPS YOU TUBE",
      //     "BROWSER, NETFLIX",
      //     "STOREAGE 1 GB RAM 8 GB ROM",
      //     "SUPER BASS SOUND SPEAKER",
      //     "AGRADE PANEL (DOT FREE)",
      //     "HD-Ready.",
      //     "Vivid Picture Engine",
      //     "Dual Band Wi-Fi 2.4GHz & 5GHz.",
      //     "Patch Wall 4 with IMDb",
      //     "ANDRIOD 09",
      //   ],
      // },
      // {
      //   id: 7,
      //   diraction: "row",
      //   imgurl: [Tv1],
      //   heading: "Key Features : -",
      //   descriptionName: "description",
      //   route: "smart-HD-LED-TV",
      //   name: "MODEL-GM32SM",
      //   description:
      //     "Introducing Vyom TV – a window to limitless entertainment and immersive viewing experiences. With cutting-edge technology and sleek design, Vyom TV takes your television journey to new heights.Featuring stunning 4K resolution and vibrant colors, Vyom TV brings every scene to life with unparalleled clarity and detail. Whether you're streaming your favorite shows, watching movies, or gaming, the visual quality will leave you awe-inspired",
      //   keyfeatures: [
      //     "INBUILT APPS YOU TUBE",
      //     "BROWSER, NETFLIX",
      //     "STOREAGE 1 GB RAM 8 GB ROM",
      //     "SUPER BASS SOUND SPEAKER",
      //     "AGRADE PANEL (DOT FREE)",
      //     "HD-Ready.",
      //     "Vivid Picture Engine",
      //     "Dual Band Wi-Fi 2.4GHz & 5GHz.",
      //     "Patch Wall 4 with IMDb",
      //     "ANDRIOD 09",
      //   ],
      // },
      // {
      //   id: 8,
      //   diraction: "row",
      //   imgurl: [Tv1],
      //   heading: "Key Features : -",
      //   descriptionName: "description",
      //   route: "smart-HD-LED-TV",
      //   name: "smart HD LED TV",
      //   description:
      //     "Introducing Vyom TV – a window to limitless entertainment and immersive viewing experiences. With cutting-edge technology and sleek design, Vyom TV takes your television journey to new heights.Featuring stunning 4K resolution and vibrant colors, Vyom TV brings every scene to life with unparalleled clarity and detail. Whether you're streaming your favorite shows, watching movies, or gaming, the visual quality will leave you awe-inspired",
      //   keyfeatures: [
      //     "INBUILT APPS YOU TUBE",
      //     "BROWSER, NETFLIX",
      //     "STOREAGE 1 GB RAM 8 GB ROM",
      //     "SUPER BASS SOUND SPEAKER",
      //     "AGRADE PANEL (DOT FREE)",
      //     "HD-Ready.",
      //     "Vivid Picture Engine",
      //     "Dual Band Wi-Fi 2.4GHz & 5GHz.",
      //     "Patch Wall 4 with IMDb",
      //     "ANDRIOD 09",
      //   ],
      // }
    ],
  },
  // //  refrigerator
  {
    id: 3,
    imgurl: [Refrigerator],
    name: "refrigerator",
    banner: [],
    data: [
      {
        id: 1,
        diraction: "row-reverse",
        imgurl: [Refrigerator],
        route: "refrigerator",
        name: "refrigerator",
        heading: "Key Features : -",
        descriptionName: "description",
        description:
          "Introducing Gplus Refrigerator – where innovation meets functionality to elevate your kitchen experience. Designed to seamlessly integrate into modern lifestyles, Gplus Refrigerator offers a harmonious blend of advanced technology and elegant design.With its spacious interior and customizable storage solutions, Gplus Refrigerator ensures that your groceries are organized and easily accessible. Its state-of-the-art cooling system maintains optimal temperature and humidity levels, preserving the freshness of your food for longer periods",
        keyfeatures: [
          "LED Lamp",
          "Frost Free",
          "Multi Air Flow",
          "Tropical Cooling",
          "Environmental friendly",
          "Low Noise And energy saving",
        ],
        product: [],
      },
    ],
  },
  // // Air condition
  {
    id: 4,
    imgurl: [AC],
    name: "Air Condition",
    banner: [ACBanner1, ACBanner2],
    data: [
      {
        id: 1,
        diraction: "row",
        imgurl: [AC, AC2],
        route: "air-condition-1-Ton",
        name: "Air Condition 1 Ton",
        heading: "Key Features : -",
        description:
          "Introducing Gplus 1 Ton Air Conditioner: Compact Cooling Excellence. Discover the perfect cooling solution for smaller spaces with  Gplus 1 Ton Air Conditioner. Designed to efficiently cool and dehumidify your rooms, this AC provides optimal comfort in a sleek and compact package. Stay cool and comfortable with  Gplus 1 Ton Air Conditioner. Whether it's your bedroom, small living area, or personal workspace, this AC provides efficient and reliable cooling performance. Embrace the luxury of a comfortable indoor environment and escape the heat outside. Invest in  Gplus 1 Ton Air Conditioner today and enjoy cooling comfort at its finest. Experience the convenience of an AC designed for smaller spaces and revel in a soothing and refreshing ambiance all summer long",
        keyfeatures: [
          "Capacity 1 Ton.",
          "Star Rating 3 Star.",
          "Type Inverter Split.",
          "Power Requirement AC 220 - 240 V, 50 Hz.",
          "Power Consumption 1480 W.",
          "Dimensions 99.8 cm x 32 cm x 22.8 cm.",
          "Technology All DC Inverter",
        ],
        product: [],
      },
      {
        id: 2,
        imgurl: [AC, AC2],
        name: "Air Condition 1.5 Ton",
        route: "air-condition-1.5-Ton",
        heading: "Key Features : -",
        description:
          "Introducing Gplus 1.5 Ton Air Conditioner: Superior Cooling for Your Space. Experience the pinnacle of cooling performance with Gplus 1.5 Ton Air Conditioner. Specifically designed to provide efficient and powerful cooling for larger spaces, this AC ensures optimal comfort even during the hottest days.Stay comfortably cool even in the hottest weather with Gplus 1.5 Ton Air Conditioner. Whether it's a spacious living room or an expansive office, this AC is designed to meet the cooling demands of larger areas. Embrace the luxury of powerful and efficient cooling and enjoy a serene indoor environment. Invest in Gplus 1.5 Ton Air Conditioner today and relish the bliss of an inviting and comfortable atmosphere throughout the year.        ",
        keyfeatures: [
          "Capacity 1.5 Ton.",
          "Star Rating 3 Star.",
          "Type Inverter Split.",
          "Power Requirement AC 220 - 240 V, 50 Hz.",
          "Power Consumption 1480 W.",
          "Dimensions 99.8 cm x 32 cm x 22.8 cm.",
          "Technology All DC Inverter",
        ],
        product: [],
      },
    ],
  },
];

export default HomeAppliances;
