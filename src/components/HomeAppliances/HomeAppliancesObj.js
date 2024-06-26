import AC from "../image/Air Condition.png";
import AC2 from "../image/Out door 01.png";
import Refrigerator1 from "../image/07.jpg";
import Refrigerator2 from "../image/10.jpg";
import Refrigerator3 from "../image/27.jpg";
import Refrigerator4 from "../image/08.jpg";
import Refrigerator5 from "../image/14.jpg";
import Refrigerator6 from "../image/15.jpg";
import Refrigerator7 from "../image/16.jpg";
import Refrigerator8 from "../image/25.jpg";
import Refrigerator9 from "../image/26.jpg";
import Tv1 from "../image/TV 3.jpg";
import Tv2 from "../image/1tv.png";
import Tv3 from "../image/2tv.png";
import tv4 from "../image/Screen Size 24-32-40.png"
import tv5 from "../image/Screen Size 43-50.png" 
import tv6 from "../image/40 inches tv.png"
import tv8 from "../image/55 inches.jpeg"
import tv9 from "../image/55 inches1.jpeg"
import tv10 from "../image/65 inches.jpeg"
import tv11 from "../image/65 inches 1.jpeg"
import tv12 from "../image/75 inches.jpeg"
import tv13 from "../image/75 inches1.jpeg"
import tv14 from "../image/85 inches.jpeg"
import tv15 from "../image/85 inches1.jpeg"
import spac from "../image/sec.jpeg"
import remote from "../image/remote.jpeg"
import washingMachine1 from "../image/01.jpg";
import washingMachine2 from "../image/02.jpg";
import washingMachine3 from "../image/03.jpg";
import washingMachine4 from "../image/19.jpg";
import washingMachine5 from "../image/29.jpg"
import washingMachine6 from "../image/17.jpg"
import semi7_5 from "../image/04.jpg";
import semi7_5kg from "../image/05.jpg";
import semi8kg1 from "../image/06.jpg";
// import semi8kg2 from "../image/Semi 8 Kg 02.png";
import ACBanner1 from "../image/AC Banner 1.jpeg";
import ACBanner2 from "../image/AC Banner 3.jpeg";
import washingMachineBanner1 from "../image/WashingMachineBanner1.png";
import washingMachineBanner2 from "../image/WashingMachineBanner2.png";
import washingMachineBanner3 from "../image/WashingMachineBanner3.png";
import LEDTVBanner1 from "../image/qled_tv.jpeg";
// import { "" } from "react-icons/ai";
// import {BsFillBoxFill} from "react-icons/bs"
import Dishwasher1 from "../image/09.jpg";
import Diswasher2 from "../image/28.jpg";
// import Diswasher3 from "../image/Dis"
import Dishwasher4 from "../image/30.jpg";

const HomeAppliances = [
  // washing machine
  {
    id: 1,
    imgurl: [washingMachine3, washingMachine2, washingMachine3],
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
        imgurl: [washingMachine3],
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
                    details:
                      "My cycle, cotton, baby care, senthitic, jeans, Mix, 20*c, Ring & Spin, Spin Only, intensive, Eco 40-60*c, Delicte, Wool, Sport Wear, rapid 45, Quick 15",
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

                  { name: "Voltage Range(V)", details: "220-240v" },
                  {
                    name: "Consuption power at wash cycle",
                    details: "2000 Watts",
                  },
                  { name: "Frequency (Hz)", details: "50 Hz" },
                ],
              },
            ],
            //
            SpecialFeatures: [
              {
                name: "Special Features",
                details: {
                  name: "",
                  details: [
                    "My universal Cycle Program",
                    "7 th senseFOAM SENSOR  technology",
                    "Hygiene Steam Wash",
                    " 99.9 Antibacterial cycle",
                    " Water jet Diamound Drum, 1400  RPM Spin speed",
                  ],
                },
              },
            ],
          },
        ],
      },
      {
        id: 2,
        diraction: "row-reverse",
        imgurl: [
          washingMachine6,washingMachine5
        ],
        heading: "Key Features : -",
        route: "fully-automatic-washing-machine-8.5kg",
        name: "Fully Automatic Washing Machine 8.5 KG",
        description:
        "Gplus Fully Automatic Front load Washing Machine 8.5 kg: Ultimate Laundry Performance, Unmatched Convenience. Experience superior laundry care with Gplus Fully Automatic Washing Machine 8.5 kg. Designed to handle larger laundry loads with efficiency and precision, this washing machine takes the hassle out of laundry and ensures pristine results every time. Upgrade your laundry routine with Gplus Fully Automatic Washing Machine 8.5 kg. Revel in the convenience of handling larger laundry loads effortlessly and enjoy pristine laundry results. Whether you're washing delicate fabrics or heavily soiled garments, this washing machine ensures every item is treated with care. Embrace the luxury of a fully automatic washing experience, and say goodbye to manual washing forever. Invest in Gplus Fully Automatic Washing Machine 8.5 kg and elevate your laundry game today. Experience the joy of efficient laundry care and achieve immaculate results with this advanced and reliable appliance        ",
        keyfeatures: [
          "Fully Automatic Front load washing machine",
          "Color : SILVER",
          "8.5 kg",
          "LED Display : yes",
          "Maximum Spin Speed : 1400 SPIN RPM",
          "16 UNIQUE PROGRAMS FOR WASH",
          "5 STAR RATING",
          "A+++ ENERGY EFFICENCY"
        ],
        product: [
          {
            box: [
             
              {
                boxname: "",
                boxsize: [
                  { name: "", Icon: "", size: "" },
                  { name: "", Icon: "", size: "" },
                  { name: "", Icon: "", size: "" },
                  { name: "", Icon: "", size: "" },
                ],
              },
              {
                boxname: "Dimensions",
                boxsize: [
                  { name: "width", Icon: "", size: "595m" },
                  { name: "height", Icon: "", size: "850mm" },
                  { name: "Depth", Icon: "", size: "565mm" },
                  { name: "weight", Icon: "", size: "60kg" },
                ],
              },
            ],
            variationsDetails: [
              {
                name: "Variations Details",
                details: [
                  { name: "color", details: "silver" },
                  
                ],
              },
              // washingMachineDetails
              {
                name: "Washing Machines Details",
                details: [
                  { name: "Capacity : suitable for large families", details: "8.5 kg" },
                  { name: "Motor Warranty", details: "10 years" },
                ],
              },
              // washingDetails
              {
                name: "Washing Details",
                details: [
                  {
                    name: "Types Of Washing Modes/Programs",
                    details:
                    "My cycle, cotton, baby care, senthitic, jeans, Mix, 20*c, Ring & Spin, Spin Only, intensive, Eco 40-60*c, Delicte, Wool, Sport Wear, rapid 45, Quick 15",
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
                  { name: "Model Number", details: "GMWMW85KGPLUS" },
                 

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
                  { name: "Maximum Spin Speed", details: "1400 RPM" },
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

                  { name: "Voltage Range(V)", details: "220-240v" },
                  {
                    name: "Consuption power at wash cycle",
                    details: "2000 Watts",
                  },
                  { name: "Frequency (Hz)", details: "50 Hz" },
                ],
              },
            ],
            // Special Features
            // SpecialFeatures: [
            //   {
            //     name: "Special Features",
            //     details: {
            //       name: "",
            //       details: [
            //         "TRANSPERENT DOOR WITH BOROSIL GLASS",
            //         "TUMBLE WASH TO BETTER WASH QUALITY",
            //         "HOT WATER OPTION WITH 4 TYPE 20, 40, 60, 85 *C",
            //         "DRUM CLEANING PROGRAM TO SELF CLEAN BY THE MACHINE",
            //         "ERROR CODES TO CUSTOMER TO ACCESS BY CUSTOMER TO REPAIR BY THEMSELF",
            //       ],
            //     },
            //   },
            // ],
          },
        ],
      },
      {
        id: 3,
        diraction: "row-reverse",
        imgurl: [
          washingMachine1,
          washingMachine2,
          washingMachine4,
          washingMachine3,
        ],
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
                    details:
                      "Mixed, Eco 40-60, Cotton, 20*c, Gentle, Wool, night, Antibactrial, Drum Clean, Rinse + Spin, Spin, Kids Wear, Shirts, Underwears, Quick 30, Quick 15",
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

                  { name: "Voltage Range(V)", details: "220-240v" },
                  {
                    name: "Consuption power at wash cycle",
                    details: "2000 Watts",
                  },
                  { name: "Frequency (Hz)", details: "50 Hz" },
                ],
              },
            ],
            // Special Features
            SpecialFeatures: [
              {
                name: "Special Features",
                details: {
                  name: "",
                  details: [
                    "TRANSPERENT DOOR WITH BOROSIL GLASS",
                    "TUMBLE WASH TO BETTER WASH QUALITY",
                    "HOT WATER OPTION WITH 4 TYPE 20, 40, 60, 85 *C",
                    "DRUM CLEANING PROGRAM TO SELF CLEAN BY THE MACHINE",
                    "ERROR CODES TO CUSTOMER TO ACCESS BY CUSTOMER TO REPAIR BY THEMSELF",
                  ],
                },
              },
            ],
          },
        ],
      },
     
    

    //  semi Automatic washing machine
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
                  {
                    name: "color",
                    details: "Black transparent, Blue Flower, Pink, Red",
                  },
                  {
                    name: "design",
                    details: "Acrylonitrile Butadiene Styrene plastic body",
                  },
                  {
                    name: "finish",
                    details: "Non Metallic, Anti Corassion body",
                  },
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
                    details: "Soaking Option With 35 Min In Wash Timer",
                  },
                  { name: "Types Of Stain Removal", details: "60%" },
                  {
                    name: "No. Of Washing Modes/Programs",
                    details: "Soaking Option With 35 Min In Wash Timer",
                  },
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
                    details: "User Manual, Inlet Hose, warnty card",
                  },
                  {
                    name: "Installation Type",
                    details: "Freestanding with castrol wheels",
                  },
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

                  { name: "Voltage Range(V)", details: "220-240v" },
                  {
                    name: "Consuption power at wash cycle",
                    details: "350 Watts",
                  },
                  { name: "Frequency (Hz)", details: "50 Hz" },
                ],
              },
            ],
            // Special Features
            SpecialFeatures: [
              {
                name: "Special Features",
                details: {
                  name: "",
                  details: [
                    "5 CLOURS OF WASHING MACHINE",
                    "AUTO BALANCER TO CLOTHS",
                    "SPIN MOTOR OF 150 WATTS,SPIN MOTOR CAPACITY 3.5 KG",
                  ],
                },
              },
            ],
          },
        ],
      },
      {
        id: 5,
        diraction: "row-reverse",
        imgurl: [semi8kg1],
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
                  {
                    name: "color",
                    details: "Black transparent, Blue Flower, Pink, Red",
                  },
                  {
                    name: "design",
                    details: "Acrylonitrile Butadiene Styrene plastic body",
                  },
                  {
                    name: "finish",
                    details: "Non Metallic, Anti Corassion body",
                  },
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
                    details: "Soaking Option With 35 Min In Wash Timer",
                  },
                  { name: "Types Of Stain Removal", details: "60%" },
                  {
                    name: "No. Of Washing Modes/Programs",
                    details: "Soaking Option With 35 Min In Wash Timer",
                  },
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
                    details: "User Manual, Inlet Hose, warnty card",
                  },
                  {
                    name: "Installation Type",
                    details: "Freestanding with castrol wheels",
                  },
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

                  { name: "Voltage Range(V)", details: "220-240v" },
                  {
                    name: "Consuption power at wash cycle",
                    details: "350 Watts",
                  },
                  { name: "Frequency (Hz)", details: "50 Hz" },
                ],
              },
            ],
            // Special Features
            SpecialFeatures: [
              {
                name: "Special Features",
                details: {
                  name: "",
                  details: [
                    "5 CLOURS OF WASHING MACHINE",
                    "AUTO BALANCER TO CLOTHS",
                    "SPIN MOTOR OF 150 WATTS",
                    "SPIN MOTOR CAPACITY 3.5 KG",
                  ],
                },
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
    imgurl: [Tv1, Tv2],
    name: "smart LED TV",
    banner: [LEDTVBanner1],
    data: [
      {
        id: 1,
        diraction: "row",
        imgurl: [tv4, Tv2],
        heading: "Key Features : -",
        descriptionName: "description",
        route: "Gplus-32-Inch-(80-Cm)",
        name: "Gplus 32 Inch (80 Cm)",
        description:
          "Gplus TV, your living room becomes a gateway to an entertainment paradise. Indulge in breathtaking visuals, captivating sound, and an array of content that suits your preferences perfectly. Whether you're a movie enthusiast, a sports fanatic, or a binge-watching connoisseur, this TV caters to your every need.",
        keyfeatures: [
          "Supported Apps: Netflix|Prime Video|Disney+Hotstar|Youtube",
          "Operating System: Webos.          ",
          "Resolution: HD Ready 1366 x 768 Pixels ",
          "Sound Output: 10 W ",
          "Refresh Rate: 50 Hz ",
          "Voice Guidance : Yes ",
        ],
        product: [
          {
            box: [
              {
                boxname: "",
                boxsize: [
                  { name: "", Icon: "", size: "" },
                  { name: "", Icon: "", size: "" },
                  { name: "", Icon: "", size: "" },
                  { name: "", Icon: "", size: "" },
                ],
              },
              {
                boxname: "Dimensions(mm)",
                boxsize: [
                  { name: "width", Icon: "", size: "723.3 mm" },
                  { name: "height", Icon: "", size: "425.1 mm" },
                  { name: "Depth", Icon: "", size: "85.7 mm" },
                  // { name: "weight", Icon: "", size: "55-5Kg" },
                ],
              },
            ],
            variationsDetails: [
              // washingMachineDetails
              {
                name: "General",
                details: [
                  { name: "Display Size", details: "80 cm (32 inch)"},
                  { name: "Screen Type", details: "LED" },
                  { name: "HD Technology & Resolution", details: "HD Ready, 1366 x 768" },
                  { name: "Motion Sensor", details: "No" },
                ],
              },
              // washingDetails
              {
                name: "Smart Tv Features ",
                details: [
                  {
                    name: "Processor",
                    details: "Quad Core ",
                  },
                  {
                    name: "Ram Capacity",
                    details: "1 GB",
                  },
                  { name: "Storage Memory", details: "8GB" },
                  {
                    name: "Supported App - Netflix ",
                    details: "yes",
                  },
                  {
                    name: "Supported App - Youtube ",
                    details: "yes",
                  },
                  { name: "Supported App - Disney+Hotstar ", details: "yes" },
                  {
                    name: "Supported App - Prime Video ",
                    details: "yes",
                  },
                  { name: "Built In Wi-Fi", details: "yes" },
                  { name: "Ethernet", details: "8 ms" },
                  {
                    name: "Screen Mirroring ",
                    details: "yes",
                  },
                ],
              },
              // General Information
              {
                name: "Audio Features",
                details: [
                  {
                    name: "Number Of Speakers",
                    details: "2",
                  },
                  {
                    name: "Speaker Type",
                    details: "Down Firing",
                  },
                  { name: "Surround Sound", details: "DTS Virtual:X Surround Sound" },
                 
                  {
                    name:"Speaker Output RMS" ,details:"20w"
                  }, {
                    name:"Sound Mode" ,details:"Standard, Cinema, Clear Voice III, Cricket, Music, Game"
                  }, {
                    name:"Supported Audio Formats" ,details:"AC4, AC3 , EAC3, HE-AAC, AAC, MP2, MP3, PCM, DTS, DTS-HD, DTS Express, WMA, APT-X (Refer to Manual)"
                  },

                ],
              },
              // video feartures
              {
                name: "Video Features",
                details: [
                  {
                    name: "Picture Engine",
                    details: "Vivid Picture Engine",
                  },
                  {
                    name: "Aspect Ratio ",
                    details: "16:09:00",
                  },
                  { name: "LED Display Type", details: "LED" },
                 
                  {
                    name:"View Angle" ,details:"178 degree"
                  }, {
                    name:"Panel Type" ,details:"LED"
                  }, {
                    name:"Analog TV Reception" ,details:"Yes"
                  },
                  {
                    name:"Supported Video Formats" ,details:"DAT, MPG, MPEG, VOB, AVI, DIVX, MP4, MKV, TS, TRP"
                  },

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
                    name: "Manufacturer By ",
                    details: "Garuda Mart India Private Limited.",
                  },
                  {
                    name: "Generic Name",
                    details: "LED TV",
                  },   {
                    name: "Brand",
                    details: "GPLUS", 
                  },
                  { name: "Model Number", details: "GM32SM" },
                ],
              },

         
              // TELEVISION PORTS & SLOTS
              {
                name: "TELEVISION PORTS & SLOTS",
                details: [
                  {
                    name: "Number Of USB Ports",
                    details: "2 x USB",
                  },
                  {
                    name: "HDMI Type",
                    details: "HDMI",
                  },
                  {
                    name : "Headphone Jack",
                    details:"No"
                  },
                  {
                    name: "Number Of HDMI Ports",
                    details: "3 x HDMI",
                  },
                ],
              },

              // TELEVISION NETWORK CONNECTIVITY
              {
                name: "TELEVISION NETWORK CONNECTIVITY",
                details: [
                  {
                    name: "WiFi Supported",
                    details: "Yes",
                  },
                  {
                    name: "WiFi Features",
                    details: "Dual Band(2.4GHz/5GHz)",
                  },
                  {
                    name: "Bluetooth Supported",
                    details: "Yes",
                  },
                  {
                    name: "Bluetooth Specifications",
                    details: "Bluetooth 5.0",
                  },
                ],
              },

              // Convenience Features

             
                {
                  name: "Convenience Features",
                  details: [
                    {
                      name: "On/Off Timer",
                      details: "yes",
                    },
                    
                  ],
                },

              // REMOTE CONTROL DETAILS
              {
                name: "REMOTE CONTROL DETAILS",
                details: [
                  {
                    name: "Remote Control Type",
                    details: "Voice Control",
                  },
                  {
                    name: "Remote Smart Features",
                    details: "ThinQ & Alexa Voice Controlled Remote",
                  },
                ],
              },
              // TELEVISION ADDITIONAL FEATURES
              {
                name: "TELEVISION ADDITIONAL FEATURES",
                details: [
                  {
                    name: "",
                    details: "Netflix",
                  },
                  {
                    name: "",
                    details: "Prime Video",
                  },
                ],
              },
              // TELEVISION PLUG DETAILS
              {
                name: "TELEVISION PLUG DETAILS",
                details: [
                  {
                    name: "Frequency",
                    details: "50/60 Hz",
                  },
                  {
                    name: "Power Requirement",
                    details: "AC 100 - 240 V, 50/60 Hz",
                  },
                  {
                    name: "Power Consumption",
                    details: "0.5 W (Standby)",
                  },
                  {
                    name: "Watts",
                    details: "45 Watts",
                  },
                ],
              },
              // AESTHETICS
              {
                name: "AESTHETICS",
                details: [
                  {
                    name: "Color",
                    details: "Black",
                  },
                  {
                    name: "Color Family",
                    details: "BLACK",
                  },
                ],
              },
              // IN THE BOX
              {
                name: "IN THE BOX",
                details: [
                  {
                    name: "Documents",
                    details: "User-Manual",
                  },
                  {
                    name: "Main product",
                    details: "1 x Television U",
                  },
                  {
                    name: "Accessories",
                    details: "RemoteControl | RemoteControlBattery",
                  },
                  {
                    name: "Others",
                    details: "Wall Mounting Brackets | Table Top Stand Pair",
                  },
                  {
                    name: "Generic Name",
                    details: "Television",
                  },
                ],
              },

              // COMPANY CONTACT INFORMATION
              {
                name: "COMPANY CONTACT INFORMATION",
                details: [
                  {
                    name: "Customer Support Number",
                    details: "1800 123 986 666",
                  },
                  {
                    name: "Customer Support Email",
                    details: "info@garudamartindia.com",
                  },
                  {
                    name: "Country of Manufacture",
                    details: "India",
                  },
                ],
              },
            ],
            // Special Features
            // SpecialFeatures: [
            //   {
            //     name: "",
            //     details: {
            //       name: "",
            //       details: [],
            //     },
            //   },
            // ],
          },
        ],
      },
      {
        id: 2,
        diraction: "row",
        imgurl: [tv6, tv4],
        heading: "Key Features : -",
        descriptionName: "description",
        route: "smart-hd-led-tv",
        name: "Gplus 40 Inch (98 Cm ) ",
        description:
        "You can enjoy unlimited entertainment with this GPLUS LED Smart Android TV. The built-in App store of this smart TV allows you to download all your favourite apps with ease so you can immerse yourself in high-quality content. You can also browse through the web and search for your desired content to enjoy quality time with your friends and family. You can get instant access to Netflix, YouTube, Prime Video, and much more.",
        keyfeatures: [
          "Supported Apps: Netflix|Prime Video|Disney+Hotstar|Youtube ",
          "Operating System: WebOS",
          "Resolution: 1920 x 1080",
          "Sound Output: 30 W",
          "Refresh Rate: 60 Hz ",
        ],
        product: [
          {
            box: [
              {
                boxname: "",
                boxsize: [
                  { name: "", Icon: "", size: "" },
                  { name: "", Icon: "", size: "" },
                  { name: "", Icon: "", size: "" },
                  { name: "", Icon: "", size: "" },
                ],
              },
              {
                boxname: "Dimensions(mm)",
                boxsize: [
                  { name: "width", Icon: "", size: "897 mm" },
                  { name: "height", Icon: "", size: "525 mm" },
                  { name: "Depth", Icon: "", size: "120 mm" },
                  // { name: "weight", Icon: "", size: "55-5Kg" },
                ],
              },
            ],
            variationsDetails: [
              // washingMachineDetails
              {
                name: "General",
                details: [
                  { name: "Display Size", details: "98 cm (40 inch)"},
                  { name: "Screen Type", details: "LED" },
                  { name: "HD Technology & Resolution", details: "1920 x 1080" },
                  { name: "Motion Sensor", details: "No" },
                ],
              },
              // washingDetails
              {
                name: "Smart Tv Features ",
                details: [
                  {
                    name: "Processor",
                    details: "Quad Core ",
                  },
                  {
                    name: "Ram Capacity",
                    details: "1 GB",
                  },
                  { name: "Storage Memory", details: "8GB" },
                  {
                    name: "Supported App - Netflix ",
                    details: "yes",
                  },
                  {
                    name: "Supported App - Youtube ",
                    details: "yes",
                  },
                  { name: "Supported App - Disney+Hotstar ", details: "yes" },
                  {
                    name: "Supported App - Prime Video ",
                    details: "yes",
                  },
                  { name: "Built In Wi-Fi", details: "yes" },
                  { name: "Ethernet", details: "8 ms" },
                  {
                    name: "Screen Mirroring ",
                    details: "yes",
                  },
                ],
              },
              // General Information
              {
                name: "Audio Features",
                details: [
                  {
                    name: "Number Of Speakers",
                    details: "2",
                  },
                  {
                    name: "Speaker Type",
                    details: "Down Firing",
                  },
                  { name: "Surround Sound", details: "DTS Virtual:X Surround Sound" },
                 
                  {
                    name:"Speaker Output RMS" ,details:"30w"
                  }, {
                    name:"Sound Mode" ,details:"Standard, Cinema, Music,Personal"
                  },
                ],
              },
              // video feartures
              {
                name: "Video Features",
                details: [
                  {
                    name: "Picture Engine",
                    details: "Vivid Picture Engine",
                  },
                  {
                    name: "Aspect Ratio ",
                    details: "16:09:00",
                  },
                  { name: "LED Display Type", details: "LED" },
                 
                  {
                    name:"View Angle" ,details:"178 degree"
                  }, {
                    name:"Panel Type" ,details:"LED"
                  }, {
                    name:"Analog TV Reception" ,details:"Yes"
                  },
                  {
                    name:"Supported Video Formats" ,details:"DAT, MPG, MPEG, VOB, AVI, DIVX, MP4, MKV, TS, TRP"
                  },

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
                    name: "Manufacturer By ",
                    details: "Garuda Mart India Private Limited.",
                  },
                  {
                    name: "Generic Name",
                    details: "LED TV",
                  },   {
                    name: "Brand",
                    details: "GPLUS", 
                  },
                  { name: "Model ", details: "GMGMTV40GPLUS" },
                ],
              },

         
              // TELEVISION PORTS & SLOTS
              {
                name: "TELEVISION PORTS & SLOTS",
                details: [
                  {
                    name: "Number Of USB Ports",
                    details: "2 x USB",
                  },
                  {
                    name: "HDMI Type",
                    details: "HDMI",
                  },
                  {
                    name : "Headphone Jack",
                    details:"yes"
                  },
                  {
                    name: "Number Of HDMI Ports",
                    details: "2 x HDMI",
                  },
                ],
              },

              // TELEVISION NETWORK CONNECTIVITY
              {
                name: "TELEVISION NETWORK CONNECTIVITY",
                details: [
                  {
                    name: "WiFi Supported",
                    details: "Yes",
                  },
               
                 
                  
                ],
              },

              // Convenience Features

             
                {
                  name: "Convenience Features",
                  details: [
                    {
                      name: "On/Off Timer",
                      details: "yes",
                    },
                    
                  ],
                },

              // REMOTE CONTROL DETAILS
          
              // TELEVISION ADDITIONAL FEATURES
              {
                name: "TELEVISION ADDITIONAL FEATURES",
                details: [
                  {
                    name: "",
                    details: "Netflix",
                  },
                  {
                    name: "",
                    details: "Prime Video",
                  },
                ],
              },
              // TELEVISION PLUG DETAILS
              {
                name: "TELEVISION PLUG DETAILS",
                details: [
                  {
                    name: "Frequency",
                    details: "50/60 Hz",
                  },
                  {
                    name: "Power Requirement",
                    details: "AC 100 - 240 V, 50/60 Hz",
                  },
                  {
                    name: "Power Consumption",
                    details: "0.5 W (Standby)",
                  },
                  {
                    name: "Watts",
                    details: "45 Watts",
                  },
                ],
              },
              // AESTHETICS
              {
                name: "AESTHETICS",
                details: [
                  {
                    name: "Color",
                    details: "Black",
                  },
                  {
                    name: "Color Family",
                    details: "BLACK",
                  },
                ],
              },
              // IN THE BOX
              {
                name: "IN THE BOX",
                details: [
                  {
                    name: "Documents",
                    details: "User-Manual",
                  },
                  {
                    name: "Main product",
                    details: "1 x Television U",
                  },
                  {
                    name: "Accessories",
                    details: "RemoteControl | RemoteControlBattery",
                  },
                  {
                    name: "Others",
                    details: "Wall Mounting Brackets | Table Top Stand Pair",
                  },
                  {
                    name: "Generic Name",
                    details: "Television",
                  },
                ],
              },

              // COMPANY CONTACT INFORMATION
              {
                name: "COMPANY CONTACT INFORMATION",
                details: [
                  {
                    name: "Customer Support Number",
                    details: "1800 123 986 666",
                  },
                  {
                    name: "Customer Support Email",
                    details: "info@garudamartindia.com",
                  },
                  {
                    name: "Country of Manufacture",
                    details: "India",
                  },
                ],
              },
            ],
            // Special Features
            // SpecialFeatures: [
            //   {
            //     name: "",
            //     details: {
            //       name: "",
            //       details: [],
            //     },
            //   },
            // ],
          },
        ],
      },
      {
        id: 3,
        diraction: "row",
        imgurl: [tv5,Tv3],
        heading: "Key Features : -",
        descriptionName: "description",
        route: "Gplus-43-Inch-(108-Cm)-Ultra-HD-(4K)-LED-Smart-Android-TV",
        name: "Gplus 43 Inch (108 Cm) Ultra HD (4K) LED Smart Android TV",
        description:
        "Bezel-less Design The elegant bezel-less design of this TV seamlessly blends into your decor, improving not only your viewing experience with the elegant design makes your home look premium. Google Assistant: Press the Google Assistant button on your remote to do more on your TV with your voice. Ask Google to search for the latest blockbuster, stream shows, or open multiplayer games. Have it dim the lights by connecting smart home devices. Manage tasks and see your calendar. Multiple Connectivity You can connect almost any peripheral to this TV. It comes with multiple ports including USB, HDMI, and Bluetooth. You can even utilize the Chrome cast (Android) or Airplay (iOS) app to cast your mobile, tablet, or laptop onto your TV screen.     ",
        keyfeatures: [
          "Supported Apps: Netflix|Prime Video|Disney+Hotstar|Youtube",
          "Operating System: Webos.",
          "Resolution: Ultra HD (4K) 3840 x 2160 Pixels",
          "Sound Output: 30 W ",
          "Refresh Rate: 60 Hz ",
          "Voice Guidance: yes"
        ],
        product: [
          {
            box: [
              {
                boxname: "",
                boxsize: [
                  { name: "", Icon: "", size: "" },
                  { name: "", Icon: "", size: "" },
                  { name: "", Icon: "", size: "" },
                  { name: "", Icon: "", size: "" },
                ],
              },
              {
                boxname: "Dimensions(mm)",
                boxsize: [
                  { name: "width", Icon: "", size: "975 mm" },
                  { name: "height", Icon: "", size: "570 mm" },
                  { name: "Depth", Icon: "", size: "170 mm" },
                  // { name: "weight", Icon: "", size: "55-5Kg" },
                ],
              },
            ],
            variationsDetails: [
              // washingMachineDetails
              {
                name: "General",
                details: [
                  { name: "Display Size", details: "108 cm (43 inch)"},
                  { name: "Screen Type", details: "LED" },
                  { name: "HD Technology & Resolution", details: "Ultra HD (4K) 3840 x 2160 Pixels" },
                  { name: "Motion Sensor", details: "No" },
                ],
              },
              // washingDetails
              {
                name: "Smart Tv Features ",
                details: [
                  {
                    name: "Processor",
                    details: "Quad Core ",
                  },
                  {
                    name: "Ram Capacity",
                    details: "1 GB",
                  },
                  { name: "Storage Memory", details: "8GB" },
                  {
                    name: "Supported App - Netflix ",
                    details: "yes",
                  },
                  {
                    name: "Supported App - Youtube ",
                    details: "yes",
                  },
                  { name: "Supported App - Disney+Hotstar ", details: "yes" },
                  {
                    name: "Supported App - Prime Video ",
                    details: "yes",
                  },
                  { name: "Built In Wi-Fi", details: "yes" },
                  { name: "Ethernet", details: "8 ms" },
                  {
                    name: "Screen Mirroring ",
                    details: "yes",
                  },
                ],
              },
              // General Information
              {
                name: "Audio Features",
                details: [
                  {
                    name: "Number Of Speakers",
                    details: "2",
                  },
                  {
                    name: "Speaker Type",
                    details: "Box Speaker",
                  },
                  { name: "Surround Sound", details: "yes" },
                 
                  {
                    name:"Speaker Output RMS" ,details:"30w"
                  }, {
                    name:"other Audio Features" ,details:"Sound Mode (Standard, Music, News, Movie, Game, User), Sound Output Device (TV Speaker, ARC, S/PDIF)"
                  },

                ],
              },
              // video feartures
              {
                name: "Video Features",
                details: [
                  {
                    name: "Picture Engine",
                    details: "PAL B/G",
                  },
                  {
                    name: "Digital Noise Filter ",
                    details: "yes",
                  },
                  {
                    name:"Aspect Ratio " ,details:"16:09:00"
                  },
                  { name: "Refresh Rate", details: "60 HZ" },
                 
                  {
                    name:"View Angle" ,details:"178 degree"
                  }, {
                    name:"Panel Type" ,details:"IPS"
                  }, 
                  {
                    name:"Other Video Features" ,details:"4K, ChromeCast, Stream 4K"
                  },

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
                    name: "Manufacturer By ",
                    details: "Garuda Mart India Private Limited.",
                  },
                  {
                    name: "Generic Name",
                    details: "LED TV",
                  },   {
                    name: "Brand",
                    details: "GPLUS", 
                  },
                  { name: "Model Number", details: "GM32SM" },
                ],
              },

         
              // TELEVISION PORTS & SLOTS
              {
                name: "TELEVISION PORTS & SLOTS",
                details: [
                  {
                    name: "Number Of USB Ports",
                    details: "2 x USB",
                  },
                  {
                    name: "HDMI Type",
                    details: "HDMI",
                  },
                  {
                    name : "Headphone Jack",
                    details:"Yes"
                  },
                  {
                    name: "Number Of HDMI Ports",
                    details: "3 x HDMI",
                  },
                ],
              },

              // TELEVISION NETWORK CONNECTIVITY
              {
                name: "TELEVISION NETWORK CONNECTIVITY",
                details: [
                  {
                    name: "WiFi Supported",
                    details: "Yes",
                  },
                  
                ],
              },

              // Convenience Features

             
                {
                  name: "Convenience Features",
                  details: [
                    {
                      name: "On/Off Timer",
                      details: "yes",
                    },
                    
                  ],
                },

              // REMOTE CONTROL DETAILS
             
              // TELEVISION ADDITIONAL FEATURES
              {
                name: "TELEVISION ADDITIONAL FEATURES",
                details: [
                  {
                    name: "",
                    details: "Netflix",
                  },
                  {
                    name: "",
                    details: "Prime Video",
                  },
                ],
              },
              // TELEVISION PLUG DETAILS
              {
                name: "TELEVISION PLUG DETAILS",
                details: [
                  {
                    name: "Frequency",
                    details: "50/60 Hz",
                  },
                  {
                    name: "Power Requirement",
                    details: "AC 100 - 240 V, 50/60 Hz",
                  },
                  {
                    name: "Power Consumption",
                    details: "0.5 W (Standby)",
                  },
                  {
                    name: "Watts",
                    details: "45 Watts",
                  },
                ],
              },
              // AESTHETICS
              {
                name: "AESTHETICS",
                details: [
                  {
                    name: "Color",
                    details: "Black",
                  },
                  {
                    name: "Color Family",
                    details: "BLACK",
                  },
                ],
              },
              // IN THE BOX
              {
                name: "IN THE BOX",
                details: [
                  {
                    name: "Documents",
                    details: "User-Manual",
                  },
                  {
                    name: "Main product",
                    details: "1 x Television U",
                  },
                  {
                    name: "Accessories",
                    details: "RemoteControl | RemoteControlBattery",
                  },
                  {
                    name: "Others",
                    details: "Wall Mounting Brackets | Table Top Stand Pair",
                  },
                  {
                    name: "Generic Name",
                    details: "Television",
                  },
                ],
              },

              // COMPANY CONTACT INFORMATION
              {
                name: "COMPANY CONTACT INFORMATION",
                details: [
                  {
                    name: "Customer Support Number",
                    details: "1800 123 986 666",
                  },
                  {
                    name: "Customer Support Email",
                    details: "info@garudamartindia.com",
                  },
                  {
                    name: "Country of Manufacture",
                    details: "India",
                  },
                ],
              },
            ],
            // Special Features
            // SpecialFeatures: [
            //   {
            //     name: "",
            //     details: {
            //       name: "",
            //       details: [],
            //     },
            //   },
            // ],
          },
        ],
      },


      {
        id: 4,
        diraction: "row",
        imgurl: [Tv2,tv5],
        heading: "Key Features : -",
        descriptionName: "description",
        route: "Gplus-127-Cm-(50-Inches)-Frameless-Series-4K-Ultra-HD-Smart",
        name: "Gplus 127 Cm (50 Inches) Frameless Series 4K Ultra HD Smart",
        description:
        "Bezel-less Design The elegant bezel-less design of this TV seamlessly blends into your decor, improving not only your viewing experience with the elegant design makes your home look premium. Google Assistant: Press the Google Assistant button on your remote to do more on your TV with your voice. Ask Google to search for the latest blockbuster, stream shows, or open multiplayer games. Have it dim the lights by connecting smart home devices. Manage tasks and see your calendar. Multiple Connectivity You can connect almost any peripheral to this TV. It comes with multiple ports including USB, HDMI, and Bluetooth. You can even utilize the Chrome cast (Android) or Airplay (iOS) app to cast your mobile, tablet, or laptop onto your TV screen. ",
        keyfeatures: [
          "Supported Apps: Netflix|Prime Video|Disney+Hotstar|Youtube",
          "Operating System: Android.",
          "Resolution: Ultra HD (3840 x 2160)",
          "Sound Output: 30 W ",
          "Refresh Rate: 60 Hz ",
        ],
        product: [
          {
            box: [
              {
                boxname: "",
                boxsize: [
                  { name: "", Icon: "", size: "" },
                  { name: "", Icon: "", size: "" },
                  { name: "", Icon: "", size: "" },
                  { name: "", Icon: "", size: "" },
                ],
              },
              {
                boxname: "Dimensions(mm)",
                boxsize: [
                  { name: "width", Icon: "", size: "1125 mm" },
                  { name: "height", Icon: "", size: "660 mm" },
                  { name: "Depth", Icon: "", size: "120 mm" },
                  // { name: "weight", Icon: "", size: "55-5Kg" },
                ],
              },
            ],
            variationsDetails: [
              // washingMachineDetails
              {
                name: "General",
                details: [
                  { name: "Display Size", details: "127 cm (50 inch)"},
                  { name: "Screen Type", details: "LED" },
                  { name: "HD Technology & Resolution", details: "Ultra HD , 3840 x 2160" },
                  { name: "Motion Sensor", details: "No" },
                ],
              },
              // washingDetails
              {
                name: "Smart Tv Features ",
                details: [
                  {
                    name: "Processor",
                    details: "Quad Core ",
                  },
                  {
                    name: "Ram Capacity",
                    details: "1 GB",
                  },
                  { name: "Storage Memory", details: "8GB" },
                  {
                    name: "Supported App - Netflix ",
                    details: "yes",
                  },
                  {
                    name: "Supported App - Youtube ",
                    details: "yes",
                  },
                  { name: "Supported App - Disney+Hotstar ", details: "yes" },
                  {
                    name: "Supported App - Prime Video ",
                    details: "yes",
                  },
                  { name: "Built In Wi-Fi", details: "yes" },
                  { name: "Ethernet", details: "8 ms" },
                  {
                    name: "Screen Mirroring ",
                    details: "yes",
                  },
                ],
              },
              // General Information
              {
                name: "Audio Features",
                details: [
                  {
                    name: "Number Of Speakers",
                    details: "2",
                  },
                  {
                    name: "Speaker Type",
                    details: "Box Speaker",
                  },
                  { name: "Surround Sound", details: "yes" },
                 
                  {
                    name:"Speaker Output RMS" ,details:"25w"
                  }, {
                    name:"other Audio Features" ,details:"Sound Mode (Standard, Music, News, Movie, Game, User), Sound Output Device (TV Speaker, ARC, S/PDIF)"
                  },

                ],
              },
              // video feartures
              {
                name: "Video Features",
                details: [
                  {
                    name: "Analog TV Reception",
                    details: "PAL B/G",
                  },
                  {
                    name: "Digital Noise Filter ",
                    details: "yes",
                  },
                  {
                    name:"Aspect Ratio " ,details:"16:09:00"
                  },
                  { name: "Refresh Rate", details: "60 HZ" },
                 
                  {
                    name:"View Angle" ,details:"178 degree"
                  }, {
                    name:"Panel Type" ,details:"IPS"
                  }, 
                  {
                    name:"Other Video Features" ,details:"ChromeCast, Stream"
                  },

                ],
              },
              // Other Details
              {
                name: "TELEVISION OPERATING SYSTEM",
                details: [
                  {
                    name: "OS Type",
                    details: "Android",
                  },
                  { name: "OS Name & Version", details: "Android" },
                ],
              },
              // Manufacturer Information
              {
                name: "MANUFACTURER DETAILS",
                details: [
                  {
                    name: "Manufacturer By ",
                    details: "Garuda Mart India Private Limited.",
                  },
                  {
                    name: "Generic Name",
                    details: "LED TV",
                  },   {
                    name: "Brand",
                    details: "GPLUS", 
                  },
                  { name: "Model Number", details: "GM50FLMV" },
                ],
              },

         
              // TELEVISION PORTS & SLOTS
              {
                name: "TELEVISION PORTS & SLOTS",
                details: [
                  {
                    name: "Number Of USB Ports",
                    details: "2 x USB",
                  },
                  {
                    name: "HDMI Type",
                    details: "HDMI",
                  },
                  {
                    name : "Headphone Jack",
                    details:"Yes"
                  },
                  {
                    name: "Number Of HDMI Ports",
                    details: "3 x HDMI",
                  },
                ],
              },

              // TELEVISION NETWORK CONNECTIVITY
              {
                name: "TELEVISION NETWORK CONNECTIVITY",
                details: [
                  {
                    name: "WiFi Supported",
                    details: "Yes",
                  },
                  
                ],
              },

              // Convenience Features

             
                {
                  name: "Convenience Features",
                  details: [
                    {
                      name: "On/Off Timer",
                      details: "yes",
                    },
                    
                  ],
                },

              // REMOTE CONTROL DETAILS
             
              // TELEVISION ADDITIONAL FEATURES
              {
                name: "TELEVISION ADDITIONAL FEATURES",
                details: [
                  {
                    name: "",
                    details: "Netflix",
                  },
                  {
                    name: "",
                    details: "Prime Video",
                  },
                ],
              },
              // TELEVISION PLUG DETAILS
              {
                name: "TELEVISION PLUG DETAILS",
                details: [
                  {
                    name: "Frequency",
                    details: "50/60 Hz",
                  },
                  {
                    name: "Power Requirement",
                    details: "AC 100 - 240 V, 50/60 Hz",
                  },
                  {
                    name: "Power Consumption",
                    details: "0.5 W (Standby)",
                  },
                  {
                    name: "Watts",
                    details: "45 Watts",
                  },
                ],
              },
              // AESTHETICS
              {
                name: "AESTHETICS",
                details: [
                  {
                    name: "Color",
                    details: "Black",
                  },
                  {
                    name: "Color Family",
                    details: "BLACK",
                  },
                ],
              },
              // IN THE BOX
              {
                name: "IN THE BOX",
                details: [
                  {
                    name: "Documents",
                    details: "User-Manual",
                  },
                  {
                    name: "Main product",
                    details: "1 x Television U",
                  },
                  {
                    name: "Accessories",
                    details: "RemoteControl | RemoteControlBattery",
                  },
                  {
                    name: "Others",
                    details: "Wall Mounting Brackets | Table Top Stand Pair",
                  },
                  {
                    name: "Generic Name",
                    details: "Television",
                  },
                ],
              },

              // COMPANY CONTACT INFORMATION
              {
                name: "COMPANY CONTACT INFORMATION",
                details: [
                  {
                    name: "Customer Support Number",
                    details: "1800 123 986 666",
                  },
                  {
                    name: "Customer Support Email",
                    details: "info@garudamartindia.com",
                  },
                  {
                    name: "Country of Manufacture",
                    details: "India",
                  },
                ],
              },
            ],
            // Special Features
            // SpecialFeatures: [
            //   {
            //     name: "",
            //     details: {
            //       name: "",
            //       details: [],
            //     },
            //   },
            // ],
          },
        ],
      },

      {
        id: 4,
        diraction: "row",
        imgurl: [tv9,tv8,spac,remote],
        heading: "Key Features : -",
        descriptionName: "description",
        route: "gplus-55-Inches-(140-Cm)-QLED-Ultra-Hd(4k)",
        name: "55 Inches (140 Cm) QLED Ultra Hd(4k)",
        description:
        "Bezel-less Design The elegant bezel-less design of this TV seamlessly blends into your decor, improving not only your viewing experience with the elegant design makes your home look premium. Google Assistant: Press the Google Assistant button on your remote to do more on your TV with your voice. Ask Google to search for the latest blockbuster, stream shows, or open multiplayer games. Have it dim the lights by connecting smart home devices. Manage tasks and see your calendar. Multiple Connectivity You can connect almost any peripheral to this TV. It comes with multiple ports including USB, HDMI, and Bluetooth. You can even utilize the Chrome cast (Android) or Airplay (iOS) app to cast your mobile, tablet, or laptop onto your TV screen.        ",
        keyfeatures: [
          "Supported Apps: Netflix|Prime Video|Disney+Hotstar|Youtube",
          "Operating System: webOs.",
          "Resolution: Ultra HD (4K) 3840 x 2160 Pixels",
          "Sound Output: 30 W ",
          "Refresh Rate: 60 Hz ",
        ],
        product: [
          {
            box: [
              {
                boxname: "",
                boxsize: [
                  { name: "", Icon: "", size: "" },
                  { name: "", Icon: "", size: "" },
                  { name: "", Icon: "", size: "" },
                  { name: "", Icon: "", size: "" },
                ],
              },
              {
                boxname: "Dimensions(mm)",
                boxsize: [
                  { name: "width", Icon: "", size: "123.2 cm" },
                  { name: "height", Icon: "", size: "71.6 cm" },
                  { name: "Depth", Icon: "", size: "6.36 cm" },
                  // { name: "weight", Icon: "", size: "55-5Kg" },
                ],
              },
            ],
            variationsDetails: [
              // washingMachineDetails
              {
                name: "General",
                details: [
                  { name: "Display Size", details: "140 cm (55 inch)"},
                  { name: "Screen Type", details: "LED" },
                  { name: "HD Technology & Resolution", details: "Ultra HD (4k) , 3840 x 2160" },
                  { name: "Motion Sensor", details: "No" },
                ],
              },
              // washingDetails
              {
                name: "Smart Tv Features ",
                details: [
                  {
                    name: "Processor",
                    details: "Quad Core ",
                  },
                  {
                    name: "Ram Capacity",
                    details: "2 GB",
                  },
                  { name: "Storage Memory", details: "16 GB" },
                  {
                    name: "Supported App - Netflix ",
                    details: "yes",
                  },
                  {
                    name: "Supported App - Youtube ",
                    details: "yes",
                  },
                  { name: "Supported App - Disney+Hotstar ", details: "yes" },
                  {
                    name: "Supported App - Prime Video ",
                    details: "yes",
                  },
                  { name: "Built In Wi-Fi", details: "yes" },
                  { name: "Ethernet", details: "8 ms" },
                  {
                    name: "Screen Mirroring ",
                    details: "yes",
                  },
                ],
              },
              // General Information
              {
                name: "Audio Features",
                details: [
                  {
                    name: "Number Of Speakers",
                    details: "2",
                  },
                  {
                    name: "Speaker Type",
                    details: "Box Speaker",
                  },
                  { name: "Surround Sound", details: "yes" },
                 
                  {
                    name:"Speaker Output RMS" ,details:"30w"
                  }, {
                    name:"other Audio Features" ,details:"Sound Mode (Standard, Music, News, Movie, Game, User), Sound Output Device (TV Speaker, ARC, S/PDIF)"
                  },

                ],
              },
              // video feartures
              {
                name: "Video Features",
                details: [
                  {
                    name: "Analog TV Reception",
                    details: "PAL B/G",
                  },
                  {
                    name: "Digital Noise Filter ",
                    details: "yes",
                  },
                  {
                    name:"Aspect Ratio " ,details:"16:09:00"
                  },
                  { name: "Refresh Rate", details: "60 HZ" },
                 
                  {
                    name:"View Angle" ,details:"Wide Viewing Angle degree"
                  }, {
                    name:"Panel Type" ,details:"IPS"
                  }, 
                  {
                    name:"Other Video Features" ,details:"ChromeCast, Stream"
                  },

                ],
              },
              // Other Details
              {
                name: "TELEVISION OPERATING SYSTEM",
                details: [
                  {
                    name: "OS Type",
                    details: "WebOs",
                  },
                  { name: "OS Name & Version", details: "WebOs" },
                ],
              },
              // Manufacturer Information
              {
                name: "MANUFACTURER DETAILS",
                details: [
                  {
                    name: "Manufacturer By ",
                    details: "Garuda Mart India Private Limited.",
                  },
                  {
                    name: "Generic Name",
                    details: "LED TV",
                  },   {
                    name: "Brand",
                    details: "GPLUS", 
                  },
                  { name: "Model Number", details: "GM50FLMV" },
                ],
              },

         
              // TELEVISION PORTS & SLOTS
              {
                name: "TELEVISION PORTS & SLOTS",
                details: [
                  {
                    name: "Number Of USB Ports",
                    details: "2 x USB",
                  },
                  {
                    name: "HDMI Type",
                    details: "HDMI",
                  },
                  {
                    name : "Headphone Jack",
                    details:"Yes"
                  },
                  {
                    name: "Number Of HDMI Ports",
                    details: "3 x HDMI",
                  },
                ],
              },

              // TELEVISION NETWORK CONNECTIVITY
              {
                name: "TELEVISION NETWORK CONNECTIVITY",
                details: [
                  {
                    name: "WiFi Supported",
                    details: "Yes",
                  },
                  
                ],
              },

              // Convenience Features

             
                {
                  name: "Convenience Features",
                  details: [
                    {
                      name: "On/Off Timer",
                      details: "yes",
                    },
                    
                  ],
                },

              // REMOTE CONTROL DETAILS
             
              // TELEVISION ADDITIONAL FEATURES
              {
                name: "TELEVISION ADDITIONAL FEATURES",
                details: [
                  {
                    name: "",
                    details: "Netflix",
                  },
                  {
                    name: "",
                    details: "Prime Video",
                  },
                ],
              },
              // TELEVISION PLUG DETAILS
              {
                name: "TELEVISION PLUG DETAILS",
                details: [
                  {
                    name: "Frequency",
                    details: "50/60 Hz",
                  },
                  {
                    name: "Power Requirement",
                    details: "AC 100 - 240 V, 50/60 Hz",
                  },
                  {
                    name: "Power Consumption",
                    details: "0.5 W (Standby)",
                  },
                  {
                    name: "Watts",
                    details: "45 Watts",
                  },
                ],
              },
              // AESTHETICS
              {
                name: "AESTHETICS",
                details: [
                  {
                    name: "Color",
                    details: "Black",
                  },
                  {
                    name: "Color Family",
                    details: "BLACK",
                  },
                ],
              },
              // IN THE BOX
              {
                name: "IN THE BOX",
                details: [
                  {
                    name: "Documents",
                    details: "User-Manual",
                  },
                  {
                    name: "Main product",
                    details: "1 x Television U",
                  },
                  {
                    name: "Accessories",
                    details: "RemoteControl | RemoteControlBattery",
                  },
                  {
                    name: "Others",
                    details: "Wall Mounting Brackets | Table Top Stand Pair",
                  },
                  {
                    name: "Generic Name",
                    details: "Television",
                  },
                ],
              },

              // COMPANY CONTACT INFORMATION
              {
                name: "COMPANY CONTACT INFORMATION",
                details: [
                  {
                    name: "Customer Support Number",
                    details: "1800 123 986 666",
                  },
                  {
                    name: "Customer Support Email",
                    details: "info@garudamartindia.com",
                  },
                  {
                    name: "Country of Manufacture",
                    details: "India",
                  },
                ],
              },
            ],
            // Special Features
            // SpecialFeatures: [
            //   {
            //     name: "",
            //     details: {
            //       name: "",
            //       details: [],
            //     },
            //   },
            // ],
          },
        ],
      },


      {
        id: 5,
        diraction: "row",
        imgurl: [tv10,tv11,spac,remote],
        heading: "Key Features : -",
        descriptionName: "description",
        route: "gplus-65-Inches-(165-Cm)-QLED-Ultra-Hd(4k)",
        name: "65 Inches (165 Cm) QLED Ultra Hd(4k)",
        description:
        "Bezel-less Design The elegant bezel-less design of this TV seamlessly blends into your decor, improving not only your viewing experience with the elegant design makes your home look premium. Google Assistant: Press the Google Assistant button on your remote to do more on your TV with your voice. Ask Google to search for the latest blockbuster, stream shows, or open multiplayer games. Have it dim the lights by connecting smart home devices. Manage tasks and see your calendar. Multiple Connectivity You can connect almost any peripheral to this TV. It comes with multiple ports including USB, HDMI, and Bluetooth. You can even utilize the Chrome cast (Android) or Airplay (iOS) app to cast your mobile, tablet, or laptop onto your TV screen.",
        keyfeatures: [
          "Supported Apps: Netflix|Prime Video|Disney+Hotstar|Youtube",
          "Operating System: webOs.",
          "Resolution: Ultra HD (4K) 3840 x 2160 Pixels",
          "Sound Output: 30 W ",
          "Refresh Rate: 60 Hz ",
        ],
        product: [
          {
            box: [
              {
                boxname: "",
                boxsize: [
                  { name: "", Icon: "", size: "" },
                  { name: "", Icon: "", size: "" },
                  { name: "", Icon: "", size: "" },
                  { name: "", Icon: "", size: "" },
                ],
              },
              {
                boxname: "Dimensions(mm)",
                boxsize: [
                  { name: "width", Icon: "", size: "1454 mm" },
                  { name: "height", Icon: "", size: "831 mm" },
                  { name: "Depth", Icon: "", size: "25.7 mm" },
                  // { name: "weight", Icon: "", size: "55-5Kg" },
                ],
              },
            ],
            variationsDetails: [
              // washingMachineDetails
              {
                name: "General",
                details: [
                  { name: "Display Size", details: "165 cm (65 inch)"},
                  { name: "Screen Type", details: "LED" },
                  { name: "HD Technology & Resolution", details: "Ultra HD (4k) , 3840 x 2160" },
                  { name: "Motion Sensor", details: "No" },
                ],
              },
              // washingDetails
              {
                name: "Smart Tv Features ",
                details: [
                  {
                    name: "Processor",
                    details: "Quantum Processor ",
                  },
                  {
                    name: "Ram Capacity",
                    details: "2 GB",
                  },
                  { name: "Storage Memory", details: "16 GB" },
                  {
                    name: "Supported App - Netflix ",
                    details: "yes",
                  },
                  {
                    name: "Supported App - Youtube ",
                    details: "yes",
                  },
                  { name: "Supported App - Disney+Hotstar ", details: "yes" },
                  {
                    name: "Supported App - Prime Video ",
                    details: "yes",
                  },
                  { name: "Built In Wi-Fi", details: "yes" },
                  { name: "Ethernet", details: "8 ms" },
                  {
                    name: "Screen Mirroring ",
                    details: "yes",
                  },
                ],
              },
              // General Information
              {
                name: "Audio Features",
                details: [
                  {
                    name: "Number Of Speakers",
                    details: "2",
                  },
                  {
                    name: "Speaker Type",
                    details: "Box Speaker",
                  },
                  { name: "Surround Sound", details: "yes" },
                 
                  {
                    name:"Speaker Output RMS" ,details:"30w"
                  }, {
                    name:"other Audio Features" ,details:"Dolby Digital Decoder, Dolby Atmos, Surround Sound, AI Sound, WiSA Speakers, Speaker System: 4.2 Channel Speaker, Sub Woofer, Clear Voice, AI Acoustic Tuning, Smart Speaker Compatible, Optical Sound Sync, Wireless Sound Sync"
                  },

                ],
              },
              // video feartures
              {
                name: "Video Features",
                details: [
                  {
                    name: "Analog TV Reception",
                    details: "PAL B/G",
                  },
                  {
                    name: "Digital Noise Filter ",
                    details: "yes",
                  },
                  {
                    name:"Aspect Ratio " ,details:"16:09:00"
                  },
                  { name: "Refresh Rate", details: "60 HZ" },
                 
                  {
                    name:"View Angle" ,details:"178 degree"
                  }, {
                    name:"Panel Type" ,details:"IPS (A Plus Grade)"
                  }, 
                  {
                    name:"Supported Video Formats" ,details:"WMV, ASF, AVI, MP4, M4V, MOV, MPG, MPEG, MKV, MPEG, DAT, MTS, TS, TP, TRP, DIVX, MKV, RM"
                  }, 
                  {
                    name:"Other Video Features" ,details:"ChromeCast, Stream"
                  },

                ],
              },
              // Other Details
              {
                name: "TELEVISION OPERATING SYSTEM",
                details: [
                  {
                    name: "OS Type",
                    details: "WebOs",
                  },
                  { name: "OS Name & Version", details: "WebOs" },
                ],
              },
              // Manufacturer Information
              {
                name: "MANUFACTURER DETAILS",
                details: [
                  {
                    name: "Manufacturer By ",
                    details: "Garuda Mart India Private Limited.",
                  },
                  {
                    name: "Generic Name",
                    details: "LED TV",
                  },   {
                    name: "Brand",
                    details: "GPLUS", 
                  },
                  { name: "Model Number", details: "GM65QLEDGPLUS" },
                ],
              },

         
              // TELEVISION PORTS & SLOTS
              {
                name: "TELEVISION PORTS & SLOTS",
                details: [
                  {
                    name: "Number Of USB Ports",
                    details: "2 x USB",
                  },
                  {
                    name: "HDMI Type",
                    details: "HDMI",
                  },
                  {
                    name : "Headphone Jack",
                    details:"Yes"
                  },
                  {
                    name: "Number Of HDMI Ports",
                    details: "3 x HDMI",
                  },
                ],
              },

              // TELEVISION NETWORK CONNECTIVITY
              {
                name: "TELEVISION NETWORK CONNECTIVITY",
                details: [
                  {
                    name: "WiFi Supported",
                    details: "Yes",
                  },
                  
                ],
              },

              // Convenience Features

             
                {
                  name: "Convenience Features",
                  details: [
                    {
                      name: "On/Off Timer",
                      details: "yes",
                    },
                    {
                      name: "Other Convenience Features",
                      details: "Display: One Billion Color, PQI 3400, Dual LED, 100% Color Volume with Quantum Dot, Wide Viewing Angle, AI Upscale, Motion Xcelerator Turbo Plus, AI Upscale",
                    },
                    
                  ],
                },

              // REMOTE CONTROL DETAILS
             
              // TELEVISION ADDITIONAL FEATURES
              {
                name: "TELEVISION ADDITIONAL FEATURES",
                details: [
                  {
                    name: "",
                    details: "Netflix",
                  },
                  {
                    name: "",
                    details: "Prime Video",
                  },
                ],
              },
              // TELEVISION PLUG DETAILS
              {
                name: "TELEVISION PLUG DETAILS",
                details: [
                  {
                    name: "Frequency",
                    details: "50/60 Hz",
                  },
                  {
                    name: "Power Requirement",
                    details: "AC 100 - 240 V, 50/60 Hz",
                  },
                  {
                    name: "Power Consumption",
                    details: "0.5 W (Standby)",
                  },
                  {
                    name: "Watts",
                    details: "45 Watts",
                  },
                ],
              },
              // AESTHETICS
              {
                name: "AESTHETICS",
                details: [
                  {
                    name: "Color",
                    details: "Black",
                  },
                  {
                    name: "Color Family",
                    details: "BLACK",
                  },
                ],
              },
              // IN THE BOX
              {
                name: "IN THE BOX",
                details: [
                  {
                    name: "Documents",
                    details: "User-Manual",
                  },
                  {
                    name: "Main product",
                    details: "1 x Television U",
                  },
                  {
                    name: "Accessories",
                    details: "RemoteControl | RemoteControlBattery",
                  },
                  {
                    name: "Others",
                    details: "Wall Mounting Brackets | Table Top Stand Pair",
                  },
                  {
                    name: "Generic Name",
                    details: "Television",
                  },
                ],
              },

              // COMPANY CONTACT INFORMATION
              {
                name: "COMPANY CONTACT INFORMATION",
                details: [
                  {
                    name: "Customer Support Number",
                    details: "1800 123 986 666",
                  },
                  {
                    name: "Customer Support Email",
                    details: "info@garudamartindia.com",
                  },
                  {
                    name: "Country of Manufacture",
                    details: "India",
                  },
                ],
              },
            ],
            // Special Features
            // SpecialFeatures: [
            //   {
            //     name: "",
            //     details: {
            //       name: "",
            //       details: [],
            //     },
            //   },
            // ],
          },
        ],
      },


      
      {
        id: 6,
        diraction: "row",
        imgurl: [tv13,tv12,spac,remote],
        heading: "Key Features : -",
        descriptionName: "description",
        route: "gplus-75-Inches-(191-Cm)-QLED-smart",
        name: "75 Inches (191 Cm) QLED Smart WebOS TV",
        description:
        "Bezel-less Design The elegant bezel-less design of this TV seamlessly blends into your decor, improving not only your viewing experience with the elegant design makes your home look premium. Google Assistant: Press the Google Assistant button on your remote to do more on your TV with your voice. Ask Google to search for the latest blockbuster, stream shows, or open multiplayer games. Have it dim the lights by connecting smart home devices. Manage tasks and see your calendar. Multiple Connectivity You can connect almost any peripheral to this TV. It comes with multiple ports including USB, HDMI, and Bluetooth. You can even utilize the Chrome cast (Android) or Airplay (iOS) app to cast your mobile, tablet, or laptop onto your TV screen.",
        keyfeatures: [
          "Supported Apps: Netflix|Prime Video|Disney+Hotstar|Youtube",
          "Operating System: webOs.",
          "Resolution: Ultra HD (4K) 3840 x 2160 Pixels",
          "Sound Output: 30 W ",
          "Refresh Rate: 60 Hz ",
        ],
        product: [
          {
            box: [
              {
                boxname: "",
                boxsize: [
                  { name: "", Icon: "", size: "" },
                  { name: "", Icon: "", size: "" },
                  { name: "", Icon: "", size: "" },
                  { name: "", Icon: "", size: "" },
                ],
              },
              {
                boxname: "Dimensions(mm)",
                boxsize: [
                  { name: "width", Icon: "", size: "1682 mm" },
                  { name: "height", Icon: "", size: "1085 mm" },
                  { name: "Depth", Icon: "", size: "80 mm" },
                  // { name: "weight", Icon: "", size: "55-5Kg" },
                ],
              },
            ],
            variationsDetails: [
              // washingMachineDetails
              {
                name: "General",
                details: [
                  { name: "Display Size", details: "165 cm (65 inch)"},
                  { name: "Screen Type", details: "LED" },
                  { name: "HD Technology & Resolution", details: "Ultra HD (4k) , 3840 x 2160" },
                  { name: "Motion Sensor", details: "No" },
                ],
              },
              // washingDetails
              {
                name: "Smart Tv Features ",
                details: [
                  {
                    name: "Processor",
                    details: "Quantum Processor ",
                  },
                  {
                    name: "Ram Capacity",
                    details: "2 GB",
                  },
                  { name: "Storage Memory", details: "16 GB" },
                  {
                    name: "Supported App - Netflix ",
                    details: "yes",
                  },
                  {
                    name: "Supported App - Youtube ",
                    details: "yes",
                  },
                  { name: "Supported App - Disney+Hotstar ", details: "yes" },
                  {
                    name: "Supported App - Prime Video ",
                    details: "yes",
                  },
                  { name: "Built In Wi-Fi", details: "yes" },
                  { name: "Ethernet", details: "8 ms" },
                  {
                    name: "Screen Mirroring ",
                    details: "yes",
                  },
                ],
              },
              // General Information
              {
                name: "Audio Features",
                details: [
                  {
                    name: "Number Of Speakers",
                    details: "2",
                  },
                  {
                    name: "Speaker Type",
                    details: "Box Speaker",
                  },
                  { name: "Speaker Surround Sound Channel Configuration", details: "Dolby Audio | DTS-HD | Dolby Atmos Pass through e-ARC" },
                 
                  {
                    name:"Speaker Output RMS" ,details:"30w"
                  }, {
                    name:"other Audio Features" ,details:"Dolby Digital Decoder, Dolby Atmos, Surround Sound, AI Sound, WiSA Speakers, Speaker System: 4.2 Channel Speaker, Sub Woofer, Clear Voice, AI Acoustic Tuning, Smart Speaker Compatible, Optical Sound Sync, Wireless Sound Sync"
                  },

                ],
              },
              // video feartures
              {
                name: "Video Features",
                details: [
                  {
                    name: "Analog TV Reception",
                    details: "PAL B/G",
                  },
                  {
                    name: "Digital Noise Filter ",
                    details: "yes",
                  },
                  {
                    name:"Aspect Ratio " ,details:"16:09:00"
                  },
                  { name: "Refresh Rate", details: "60 HZ" },
                 
                  {
                    name:"View Angle" ,details:"178 degree"
                  }, {
                    name:"Panel Type" ,details:"IPS (A Plus Grade)"
                  }, 
                  {
                    name:"LED Display Type" ,details:"QLED"
                  }, 
                  {
                    name:"Supported Video Formats" ,details:"WMV, ASF, AVI, MP4, M4V, MOV, MPG, MPEG, MKV, MPEG, DAT, MTS, TS, TP, TRP, DIVX, MKV, RM"
                  }, 
                  {
                    name:"Other Video Features" ,details:"ChromeCast, Stream"
                  },

                ],
              },
              // Other Details
              {
                name: "TELEVISION OPERATING SYSTEM",
                details: [
                  {
                    name: "OS Type",
                    details: "WebOs",
                  },
                  { name: "OS Name & Version", details: "WebOs" },
                ],
              },
              // Manufacturer Information
              {
                name: "MANUFACTURER DETAILS",
                details: [
                  {
                    name: "Manufacturer By ",
                    details: "Garuda Mart India Private Limited.",
                  },
                  {
                    name: "Generic Name",
                    details: "QLED TV",
                  },   {
                    name: "Brand",
                    details: "GPLUS", 
                  },
                  { name: "Model Number", details: "GM65QLEDGPLUS" },
                ],
              },

         
              // TELEVISION PORTS & SLOTS
              {
                name: "TELEVISION PORTS & SLOTS",
                details: [
                  {
                    name: "Number Of USB Ports",
                    details: "2 x USB",
                  },
                  {
                    name: "HDMI Type",
                    details: "HDMI",
                  },
                  {
                    name : "Headphone Jack",
                    details:"Yes"
                  },
                  {
                    name: "Number Of HDMI Ports",
                    details: "3 x HDMI",
                  },
                ],
              },

              // TELEVISION NETWORK CONNECTIVITY
              {
                name: "TELEVISION NETWORK CONNECTIVITY",
                details: [
                  {
                    name: "WiFi Supported",
                    details: "Yes",
                  },
                  
                ],
              },

              // Convenience Features

             
                {
                  name: "Convenience Features",
                  details: [
                    {
                      name: "On/Off Timer",
                      details: "yes",
                    },
                    {
                      name: "Other Convenience Features",
                      details: "Display: One Billion Color, PQI 3400, Dual LED, 100% Color Volume with Quantum Dot, Wide Viewing Angle, AI Upscale, Motion Xcelerator Turbo Plus, AI Upscale",
                    },
                    
                  ],
                },

              // REMOTE CONTROL DETAILS
             
              // TELEVISION ADDITIONAL FEATURES
              {
                name: "TELEVISION ADDITIONAL FEATURES",
                details: [
                  {
                    name: "",
                    details: "Netflix",
                  },
                  {
                    name: "",
                    details: "Prime Video",
                  },
                ],
              },
              // TELEVISION PLUG DETAILS
              {
                name: "TELEVISION PLUG DETAILS",
                details: [
                  {
                    name: "Frequency",
                    details: "50/60 Hz",
                  },
                  {
                    name: "Power Requirement",
                    details: "AC 100 - 240 V, 50/60 Hz",
                  },
                  {
                    name: "Power Consumption",
                    details: "0.5 W (Standby)",
                  },
                  {
                    name: "Watts",
                    details: "45 Watts",
                  },
                ],
              },
              // AESTHETICS
              {
                name: "AESTHETICS",
                details: [
                  {
                    name: "Color",
                    details: "Black",
                  },
                  {
                    name: "Color Family",
                    details: "BLACK",
                  },
                ],
              },
              // IN THE BOX
              {
                name: "IN THE BOX",
                details: [
                  {
                    name: "Documents",
                    details: "User-Manual",
                  },
                  {
                    name: "Main product",
                    details: "1 x Television U",
                  },
                  {
                    name: "Accessories",
                    details: "RemoteControl | RemoteControlBattery",
                  },
                  {
                    name: "Others",
                    details: "Wall Mounting Brackets | Table Top Stand Pair",
                  },
                  {
                    name: "Generic Name",
                    details: "Television",
                  },
                ],
              },

              // COMPANY CONTACT INFORMATION
              {
                name: "COMPANY CONTACT INFORMATION",
                details: [
                  {
                    name: "Customer Support Number",
                    details: "1800 123 986 666",
                  },
                  {
                    name: "Customer Support Email",
                    details: "info@garudamartindia.com",
                  },
                  {
                    name: "Country of Manufacture",
                    details: "India",
                  },
                ],
              },
            ],
            // Special Features
            // SpecialFeatures: [
            //   {
            //     name: "",
            //     details: {
            //       name: "",
            //       details: [],
            //     },
            //   },
            // ],
          },
        ],
      },
   
      {
        id: 7,
        diraction: "row",
        imgurl: [tv15, tv14,spac,remote],
        heading: "Key Features : -",
        descriptionName: "description",
        route: "QLED-85-Inches-(216-Cm)-Ultra-HD-4K",
        name: "QLED 85 Inches (216 Cm) Ultra HD 4K",
        description:
        "GPLUS QLED 85-inch TV – a masterpiece of immersive entertainment and cutting-edge technology. Immerse yourself in a world of breath-taking visuals, stunning colors, and unparalleled clarity that will redefine your TV viewing experience. Elevate your home entertainment with the GPLUS QLED 85-inch TV. Immerse yourself in stunning visuals, captivating sound, and an array of smart features that redefine what a TV can be. Experience the future of entertainment today.",
        keyfeatures: [
          "Qled, 3840 X 2160 Pixels, 60 Hz",
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
                boxname: "",
                boxsize: [
                  { name: "", Icon: "", size: "" },
                  { name: "", Icon: "", size: "" },
                  { name: "", Icon: "", size: "" },
                  { name: "", Icon: "", size: "" },
                ],
              },
              {
                boxname: "Dimensions(inches)",
                boxsize: [
                  { name: "width", Icon: "", size: "1900 mm" },
                  { name: "height", Icon: "", size: "1090 mm" },
                  { name: "Depth", Icon: "", size: "80 mm" },
                  { name: "weight", Icon: "", size: "38 kg" },
                ],
              },
            ],
            variationsDetails: [
              // washingMachineDetails
              {
                name: "TELEVISION CATEGORY",
                details: [
                  { name: "Television Features", details: "QLED" },
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
                    details: "3840 x 2160 pixels",
                  },
                  {
                    name: "Additional Screen Specifications",
                    details: "A+ Grade Panel",
                  },
                  { name: "Screen Size in Inches", details: "85 Inches" },
                  { name: "Type", details: "QLED" },
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
                    details: "Gplus",
                  },
                  {
                    name: "Manufacturer By",
                    details: "Garuda Mart India Private Limited.",
                  },

                  { name: "Model Number", details: "GMGMTV85GPLUS" },
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
                    details: "16GB",
                  },
                ],
              },
              // TELEVISION PORTS & SLOTS
              {
                name: "TELEVISION PORTS & SLOTS",
                details: [
                  {
                    name: "Number Of USB Ports",
                    details: "2 x USB",
                  },
                  {
                    name: "HDMI Type",
                    details: "HDMI",
                  },
                  {
                    name: "Number Of HDMI Ports",
                    details: "3 x HDMI",
                  },
                ],
              },

              // TELEVISION NETWORK CONNECTIVITY
              {
                name: "TELEVISION NETWORK CONNECTIVITY",
                details: [
                  {
                    name: "WiFi Supported",
                    details: "Yes",
                  },
                  {
                    name: "WiFi Features",
                    details: "Dual Band(2.4GHz/5GHz)",
                  },
                  {
                    name: "Bluetooth Supported",
                    details: "Yes",
                  },
                  {
                    name: "Bluetooth Specifications",
                    details: "Bluetooth 5.0",
                  },
                ],
              },
              // REMOTE CONTROL DETAILS
              {
                name: "REMOTE CONTROL DETAILS",
                details: [
                  {
                    name: "Remote Control Type",
                    details: "Voice Control",
                  },
                  {
                    name: "Remote Smart Features",
                    details: "ThinQ & Alexa Voice Controlled Remote",
                  },
                ],
              },
              // TELEVISION ADDITIONAL FEATURES
              {
                name: "TELEVISION ADDITIONAL FEATURES",
                details: [
                  {
                    name: "",
                    details: "Netflix",
                  },
                  {
                    name: "",
                    details: "Prime Video",
                  },
                ],
              },
              // TELEVISION PLUG DETAILS
              {
                name: "TELEVISION PLUG DETAILS",
                details: [
                  {
                    name: "Frequency",
                    details: "50/60 Hz",
                  },
                  {
                    name: "Voltage Rating",
                    details: "110-240 V",
                  },
                  {
                    name: "Power",
                    details: "127 Watts",
                  },
                  {
                    name: "Power Consumption (Standby)",
                    details: "0.5 Watts",
                  },
                ],
              },
              // AESTHETICS
              {
                name: "AESTHETICS",
                details: [
                  {
                    name: "Color",
                    details: "Black",
                  },
                  {
                    name: "Color Family",
                    details: "BLACK",
                  },
                ],
              },
              // IN THE BOX
              {
                name: "IN THE BOX",
                details: [
                  {
                    name: "Documents",
                    details: "User-Manual",
                  },
                  {
                    name: "Main product",
                    details: "1 x Television U",
                  },
                  {
                    name: "Accessories",
                    details: "RemoteControl | RemoteControlBattery",
                  },
                  {
                    name: "Others",
                    details: "Wall Mounting Brackets | Table Top Stand Pair",
                  },
                  {
                    name: "Generic Name",
                    details: "Television",
                  },
                ],
              },

              // COMPANY CONTACT INFORMATION
              {
                name: "COMPANY CONTACT INFORMATION",
                details: [
                  {
                    name: "Customer Support Number",
                    details: "1800 123 986 666",
                  },
                  {
                    name: "Customer Support Email",
                    details: "info@garudamartindia.com",
                  },
                  {
                    name: "Country of Manufacture",
                    details: "India",
                  },
                ],
              },
            ],
            // Special Features
            SpecialFeatures: [
              {
                name: "",
                details: {
                  name: "",
                  details: [],
                },
              },
            ],
          },
        ],
      },
    ],
  },
  // //  refrigerator
  {
    id: 3,
    imgurl: [Refrigerator1, Refrigerator2, Refrigerator3],
    name: "refrigerator",
    banner: [],
    data: [
      {
        id: 1,
        diraction: "row-reverse",
        imgurl: [Refrigerator1, Refrigerator2, Refrigerator3],
        route: "refrigerator-270L",
        name: "refrigerator 270L",
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
        product: [
          {
            box: [
              {
                disable: true,
                hidden: "hidden",
                boxname: "",
                boxsize: [],
              },
              {
                boxname: "without box",
                boxsize: [
                  { name: "width", Icon: "", size: "548mm" },
                  { name: "height", Icon: "", size: "1673mm" },
                  { name: "Depth", Icon: "", size: "599mm" },
                  { name: "weight", Icon: "", size: "45kg" },
                ],
              },
            ],
            variationsDetails: [
              {
                name: "Variations Details",
                details: [
                  { name: "color", details: "Gray,Silver" },
                  { name: "design", details: "Majestic" },
                  { name: "finish", details: "Metallic" },
                ],
              },
              // Refrigerator Details
              {
                name: "Refrigerator Details",
                details: [
                  { name: "Capacity(L)", details: "270 L" },
                  { name: "Compressor Warranty", details: "10 years" },
                  { name: " inBiult Stabilizer ", details: "Yes" },
                  { name: "Base Drawer", details: "No" },
                ],
              },
              // Cooling Details
              {
                name: "Cooling Details",
                details: [
                  {
                    name: "Cooling Type",
                    details: "Frost Free",
                  },
                  { name: "Convertible", details: "No" },
                  { name: "Type Of Defrost", details: "Auto Defrost" },
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
                    details: "Double Door Refrigerator",
                  },
                  {
                    name: "Comprehensive Warranty (Year)",
                    details: "24 Months",
                  },

                  {
                    name: "In The Box Contents",
                    details: "1 Refrigerator, 1 Warranty Card, 1 User Manual",
                  },
                  { name: "Installation Type", details: "Freestanding" },
                ],
              },
              // Other Details
              {
                name: "Other Information",
                details: [
                  {
                    name: "Door Alarm",
                    details: "Yes",
                  },
                  { name: "Compressor Type", details: "Inverter" },
                  { name: "Auto Connect To Home Inverter", details: "Yes" },
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
                    name: "Shelf Material",
                    details: "Toughened Glass",
                  },
                  { name: "Vegetable / Fruit Drawer", details: "Yes" },
                  { name: "Interior Light", details: "LED Blue Light" },
                  { name: "Egg Tray", details: "Yes" },
                  { name: "Icemaker Tray", details: "Yes" },
                  { name: "Variable Temperature Zone", details: "Yes" },
                  {
                    name: "No. Of Door Pockets(Freezer Compartment)",
                    details: "2",
                  },
                  {
                    name: "No. Of Door Pockets(Fridge Compartment)",
                    details: "4",
                  },
                  {
                    name: "No. Of Shelves (Freezer Compartment)",
                    details: "1",
                  },
                  { name: "No. Of Shelves (Fridge Compartment)", details: "4" },
                ],
              },
              // Exterior Details
              {
                name: "Exterior Details",
                details: [
                  {
                    name: "Exterior Body Build",
                    details: "Steel",
                  },
                  { name: "Door Handle Type", details: "Side Pocket Handle" },
                  { name: "Lock & Key", details: "No" },
                  { name: "Display Type", details: "Internal UI Touch Panel" },
                ],
              },
              // Energy Details
              {
                name: "Energy Details",
                details: [
                  // taalk with

                  { name: "Power Consumption(KW h/24h)", details: "0.87" },
                  {
                    name: "Energy Year",
                    details: "2023",
                  },
                  {
                    name: "Voltage Range(V)",
                    details: "160-300V",
                  },
                  { name: "Frequency (Hz)", details: "50-60 Hz" },
                ],
              },
            ],
            // Special Features
            SpecialFeatures: [
              {
                name: "Special Features",
                details: {
                  name: "",
                  details: [
                    "Up To 7 Days Of Freshness  Inverter Technology Freshflow Air Tower With Flexi Vents Get Ice In Up To 45 Mins",
                  ],
                },
              },
            ],
          },
        ],
      },
      {
        id: 2,
        diraction: "row-reverse",
        imgurl: [
          Refrigerator4,
          Refrigerator5,
          Refrigerator6,
          Refrigerator7,
          Refrigerator8,
          Refrigerator9,
        ],
        route: "refrigerator-528L",
        name: "refrigerator 528L",
        heading: "Key Features : -",
        descriptionName: "description",
        description:
          "Gplus FRENCH DOOR Refrigerator – where innovation meets functionality to elevate your kitchen experience. Designed to seamlessly integrate into modern lifestyles, Gplus Refrigerator offers a harmonious blend of advanced technology and elegant design.With its spacious interior and customizable storage solutions, Gplus Refrigerator ensures that your groceries are organized and easily accessible. Its state-of-the-art cooling system maintains optimal temperature and humidity levels, preserving the freshness of your food for longer periods",
        keyfeatures: [
          "528 L : Good for large families",
          "AUTOMATIC DEFROSTING",
          "LED LIGHT",
        ],
        product: [
          {
            box: [
              {
                disable: true,
                hidden: "hidden",
                boxname: "",
                boxsize: [],
              },
              {
                boxname: "without box",
                boxsize: [
                  { name: "width", Icon: "", size: "893 mm" },
                  { name: "height", Icon: "", size: "1930 mm" },
                  { name: "Depth", Icon: "", size: "750 mm" },
                  { name: "weight", Icon: "", size: "94 kg" },
                ],
              },
            ],
            variationsDetails: [
              {
                name: "Variations Details",
                details: [
                  { name: "color", details: "Silver" },
                  { name: "design", details: "Majestic" },
                  { name: "finish", details: "Metallic" },
                ],
              },
              // Refrigerator Details
              {
                name: "Refrigerator Details",
                details: [
                  { name: "Capacity(L)", details: "528 L" },
                  { name: "Compressor Warranty", details: "10 years" },
                  { name: " inBiult Stabilizer ", details: "Yes" },
                ],
              },
              // Cooling Details
              {
                name: "Cooling Details",
                details: [
                  {
                    name: "Cooling Type",
                    details: "Frost Free",
                  },
                  { name: "Convertible", details: "Yes" },
                  { name: "Type Of Defrost", details: "Auto Defrost" },
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
                    details: "FRENCH DOOR BOTTOM FREZZER",
                  },
                  {
                    name: "Comprehensive Warranty (Year)",
                    details: "24 Months",
                  },

                  {
                    name: "In The Box Contents",
                    details: "1 Refrigerator, 1 Warranty Card, 1 User Manual",
                  },
                  { name: "Installation Type", details: "Freestanding" },
                  { name: "CLIMATE TYPE", details: "SN/T" },
                  { name: "TOTAL GROSS VOLUME", details: "554 L" },
                  { name: "FREZEER VOLUME", details: "168 LITERS" },
                  { name: "FREEZING CAPACITY (KG/24H)", details: "12" },
                  { name: "RATED CURRENT (A)", details: "1 AMP " },
                  { name: "DEFROSTING POWER (W)", details: "210 W" },
                  { name: "ENERGY CONSUPTION (KW H/24h)", details: "1.1" },
                  { name: "REFRIGERANT", details: "R600a" },
                  { name: "REFRIGERANT WEIGHT (G)", details: "75 G" },
                  { name: "VESICANT", details: "CYCLOPENTANE " },

                  { name: "NOISE DB (A)", details: "40 " },
                  { name: "Built-In Stabilizer", details: "Yes " },
                  { name: "Number Of Doors", details: "4 " },
                  {
                    name: "Display",
                    details: "LED DISPLAY & TEMPERATURE CONTROLS",
                  },
                  { name: "Brand", details: "GPLUS" },
                ],
              },
              // Other Details
              {
                name: "Other Information",
                details: [
                  {
                    name: "Door Alarm",
                    details: "Yes",
                  },
                  { name: "Compressor Type", details: "Inverter" },
                  { name: "Auto Connect To Home Inverter", details: "Yes" },
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
                    name: "Shelf Material",
                    details: "Toughened Glass",
                  },
                  { name: "Vegetable / Fruit Drawer", details: "Yes" },
                  { name: "Interior Light", details: "LED Blue Light" },
                  { name: "Egg Tray", details: "Yes" },
                  { name: "Icemaker Tray", details: "Yes" },
                  { name: "Variable Temperature Zone", details: "Yes" },
                  {
                    name: "No. Of Door Pockets(Freezer Compartment)",
                    details: "2",
                  },
                ],
              },
              // Exterior Details
              {
                name: "Exterior Details",
                details: [
                  {
                    name: "Exterior Body Build",
                    details: "Steel",
                  },
                  { name: "Door Handle Type", details: "Side Pocket Handle" },
                  { name: "Lock & Key", details: "No" },
                  { name: "Display Type", details: "Internal UI Touch Panel" },
                ],
              },
              // Energy Details
              {
                name: "Energy Details",
                details: [
                  // taalk with
                  {
                    name: "RATED VOLTAGE(V)",
                    details: "220-240",
                  },
                  { name: "Frequency (Hz)", details: "50-60 Hz" },
                ],
              },
            ],
            // Special Features
            // SpecialFeatures: [
            //   {
            //     name: "Special Features",
            //     details: {
            //       name: "",
            //       details: [
            //         "Up To 7 Days Of Freshness  Inverter Technology Freshflow Air Tower With Flexi Vents Get Ice In Up To 45 Mins",
            //       ],
            //     },
            //   },
            // ],
          },
        ],
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
        product: [
          {
            box: [
              // Indoor
              {
                boxname: "INDOOR UNIT",
                boxsize: [
                  { name: "width", Icon: "", size: "900mm" },
                  { name: "height", Icon: "", size: "300mm" },
                  { name: "Depth", Icon: "", size: "240mm" },
                  { name: "weight", Icon: "", size: "13kg" },
                ],
              },
              // {
              //   boxname: "with box",
              //   boxsize: [
              //     { name: "width", Icon: "", size: "652mm" },
              //     { name: "height", Icon: "", size: "845mm" },
              //     { name: "Depth", Icon: "", size: "485mm" },
              //     { name: "weight", Icon: "", size: "51kg" },
              //   ],
              // },
              // OutDoor
              {
                boxname: "OUTDOOR UNIT",
                boxsize: [
                  { name: "width", Icon: "", size: "835mm" },
                  { name: "height", Icon: "", size: "555mm" },
                  { name: "Depth", Icon: "", size: "295mm" },
                  { name: "weight", Icon: "", size: "28Kg" },
                ],
              },
              // {
              //   boxname: "with box",
              //   boxsize: [
              //     { name: "width", Icon: "", size: "652mm" },
              //     { name: "height", Icon: "", size: "845mm" },
              //     { name: "Depth", Icon: "", size: "485mm" },
              //     { name: "weight", Icon: "", size: "51kg" },
              //   ],
              // },
            ],
            variationsDetails: [
              {
                name: "Variations Details",
                details: [
                  { name: "color", details: "Pristine white" },
                  { name: "design", details: "Majestic" },
                  { name: "finish", details: "Metallic" },
                ],
              },
              // Air Conditioners Details
              {
                name: "Air Conditioners Details",
                details: [
                  { name: "Compressor Warranty (Year)", details: "1+9 Years" },
                  { name: "Capacity (T)", details: "1Ton" },
                  { name: "Star Rating", details: "3 Star" },
                  {
                    name: "Cooling Capacity",
                    details: "8000 Btu/h",
                  },
                ],
              },
              // Control Type
              {
                name: "Control Type",
                details: [
                  {
                    name: "Remote Control",
                    details: "Yes",
                  },
                  { name: "Wifi Connectivity", details: "No" },
                  { name: "Voice Enabled", details: "No" },
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
                    details: "Split Air Conditioner",
                  },
                  { name: "Comprehensive Warranty (Year)", details: "1 Year" },

                  {
                    name: "Other Warranty Details",
                    details: "1 Year Comprehensive, 10 Year on Compressor",
                  },
                  {
                    name: "In The Box Contents",
                    details:
                      "Indoor Unit, Outdoor unit, Connecting wire, Installation kit, User Manual, Remote",
                  },
                  {
                    name: "Installation Type",
                    details: "Wall Mount",
                  },
                ],
              },
              // Other Details
              {
                name: "Other Details",
                details: [
                  {
                    name: "Refrigerant Details",
                    details: "R-32",
                  },
                  { name: "Noise Level (Outdoor Unit)", details: "58" },
                  { name: "Piping Size", details: "2 Meter" },
                  { name: "Auto Restart", details: "Yes" },
                  { name: "Installation Type", details: "Wall Mount" },
                  { name: "Condenser Coil", details: "Copper" },
                  { name: "Noise Level (Indoor Unit)", details: "45" },
                  { name: "Hidden Display", details: "Yes" },
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
                    name: "Packed By",
                    details: "Garuda Mart India",
                  },
                ],
              },

              // Energy Details
              {
                name: "Energy Details",
                details: [
                  // taalk with

                  { name: "Voltage Range(V)", details: "200-230v" },

                  { name: "Frequency (Hz)", details: "50 Hz" },
                  { name: "Current (A)", details: "4.10" },
                ],
              },
            ],

            // Special Features
            SpecialFeatures: [
              {
                name: "Special Features",
                details: {
                  name: "",
                  details: [
                    "Energy efficient.",
                    "Easy to use.",
                    "Fast cooling.",
                    "Compact product.",
                    "Comes in pristine white color.",
                    "Premium quality.",
                  ],
                },
              },
            ],
          },
        ],
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
        product: [
          {
            box: [
              // Indoor
              {
                boxname: "INDOOR UNIT",
                boxsize: [
                  { name: "width", Icon: "", size: "900mm" },
                  { name: "height", Icon: "", size: "300mm" },
                  { name: "Depth", Icon: "", size: "240mm" },
                  { name: "weight", Icon: "", size: "13kg" },
                ],
              },

              // OutDoor
              {
                boxname: "OUTDOOR UNIT",
                boxsize: [
                  { name: "width", Icon: "", size: "835mm" },
                  { name: "height", Icon: "", size: "555mm" },
                  { name: "Depth", Icon: "", size: "295mm" },
                  { name: "weight", Icon: "", size: "28kg" },
                ],
              },
            ],
            variationsDetails: [
              {
                name: "Variations Details",
                details: [
                  { name: "color", details: "Pristine white" },
                  { name: "design", details: "Majestic" },
                  { name: "finish", details: "Metallic" },
                ],
              },
              // Air Conditioners Details
              {
                name: "Air Conditioners Details",
                details: [
                  { name: "Compressor Warranty (Year)", details: "1+9 Years" },
                  { name: "Capacity (T)", details: "1.5Ton" },
                  { name: "Star Rating", details: "4 Star" },
                  {
                    name: "Cooling Capacity",
                    details: "8000 Btu/h",
                  },
                ],
              },
              // Control Type
              {
                name: "Control Type",
                details: [
                  {
                    name: "Remote Control",
                    details: "Yes",
                  },
                  { name: "Wifi Connectivity", details: "No" },
                  { name: "Voice Enabled", details: "No" },
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
                    details: "Split Air Conditioner",
                  },
                  { name: "Comprehensive Warranty (Year)", details: "1 Year" },

                  {
                    name: "Other Warranty Details",
                    details: "1 Year Comprehensive, 10 Years on Compressor",
                  },
                  {
                    name: "In The Box Contents",
                    details:
                      "Indoor Unit, Outdoor unit, Connecting wire, Installation kit, User Manual, Remote",
                  },
                  {
                    name: "Installation Type",
                    details: "Wall Mount",
                  },
                ],
              },
              // Other Details
              {
                name: "Other Details",
                details: [
                  {
                    name: "Refrigerant Details",
                    details: "R-32",
                  },
                  { name: "Noise Level (Outdoor Unit)", details: "58" },
                  { name: "Piping Size", details: "2 Meter" },
                  { name: "Auto Restart", details: "Yes" },
                  { name: "Installation Type", details: "Wall Mount" },
                  { name: "Condenser Coil", details: "Copper" },
                  { name: "Noise Level (Indoor Unit)", details: "45" },
                  { name: "Hidden Display", details: "Yes" },
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
                    name: "Packed By",
                    details: "Garuda Mart India",
                  },
                ],
              },

              // Energy Details
              {
                name: "Energy Details",
                details: [
                  // taalk with

                  { name: "Voltage Range(V)", details: "200-230v" },

                  { name: "Frequency (Hz)", details: "50 Hz" },
                  { name: "Current (A)", details: "4.10 A" },
                ],
              },
            ],

            // Special Features
            SpecialFeatures: [
              {
                name: "Special Features",
                details: {
                  name: "",
                  details: [
                    "Energy efficient.",
                    "Easy to use.",
                    "Fast cooling.",
                    "Compact product.",
                    "Comes in pristine white color.",
                    "Premium quality.",
                  ],
                },
              },
            ],
          },
        ],
      },
    ],
  },

  // dish washer
  {
    id: 5,
    imgurl: [Dishwasher1, Diswasher2, Dishwasher4],
    name: "DISH WASHER",
    banner: [],
    data: [
      {
        id: 1,
        diraction: "row-reverse",
        route: "dish-washer",
        imgurl: [Dishwasher1, Diswasher2, Dishwasher4],
        name: "DishWasher",
        heading: "Key Features : -",
        description:
          "Basically, a dishwasher is a Machine that cleans and rinses dirty dishes. We have to load the dishes, add detergent, set the proper washing cycles and turn it on, the dishwasher accomplishes a whole series of functions by itself. Heats the water to the appropriate temperature, Automatically opens the detergent dispenser at the right time, Shoots the water through spray arms to get the dishes clean, Drains the dirty water ",
        keyfeatures: [
          "16 PLACE SETTINGS",
          "AI WASH ARTIFICAL INTELLIGENCE",
          "LED indicator for rinse aid & salt to refill",
          "Rapid wash, delay start & error display features",
          "5 SUPER SPRAY SHOWERS",
        ],
        product: [
          {
            box: [
              // Indoor

              {
                boxname: "",
                boxsize: [
                  { name: "width", Icon: "", size: "" },
                  { name: "height", Icon: "", size: "" },
                  { name: "Depth", Icon: "", size: "" },
                  { name: "weight", Icon: "", size: "" },
                ],
              },
              {
                boxname: "Dimensions",
                boxsize: [
                  { name: "width", Icon: "", size: "59.8 cm" },
                  { name: "height", Icon: "", size: "85 cm " },
                  { name: "Depth", Icon: "", size: "59.8 cm" },
                  { name: "weight", Icon: "", size: "40 kg" },
                ],
              },

              // {
              //   boxname: "with box",
              //   boxsize: [
              //     { name: "width", Icon: "", size: "652mm" },
              //     { name: "height", Icon: "", size: "845mm" },
              //     { name: "Depth", Icon: "", size: "485mm" },
              //     { name: "weight", Icon: "", size: "51kg" },
              //   ],
              // },
              // OutDoor
              // {

              //   boxname: "OUTDOOR UNIT",
              //   boxsize: [
              //     { name: "width", Icon: "", size: "835mm" },
              //     { name: "height", Icon: "", size: "555mm" },
              //     { name: "Depth", Icon: "", size: "295mm" },
              //     { name: "weight", Icon: "", size: "28Kg" },
              //   ],
              // },
              // {
              //   boxname: "with box",
              //   boxsize: [
              //     { name: "width", Icon: "", size: "652mm" },
              //     { name: "height", Icon: "", size: "845mm" },
              //     { name: "Depth", Icon: "", size: "485mm" },
              //     { name: "weight", Icon: "", size: "51kg" },
              //   ],
              // },
            ],
            variationsDetails: [
              {
                name: "General Information",
                details: [
                  { name: "PROGRAMMES", details: "5 PROGRAMS" },
                  { name: "ITEM CAPACITY", details: "16 PLACE" },
                  {
                    name: "UNIQUE SPRAY",
                    details: "360 DEGREE SPRAY ARM WITH 5 SHOWER",
                  },
                  {
                    name: "Brand",
                    details: "GPLUS",
                  },
                  {
                    name: "Capacity",
                    details: "16 Place Settings",
                  },
                  {
                    name: "Noise Level ",
                    details: "45 DB",
                  },
                  {
                    name: "WATER CONSUMPTION  ",
                    details: "12 L",
                  },
                  {
                    name: "Type",
                    details: "Free Standing",
                  },
                  {
                    name: "EXTRA HYGIENE ",
                    details: "75 DEGREE HOT WATER 99.9 % GREM FREE",
                  },
                  {
                    name: "Color",
                    details: "Black",
                  },
                  {
                    name: "INTELLIGENT SENSOR   ",
                    details:
                      "AUTOMATICALLY DETECT RESIDUE FOOD ,WATER ,DURATION, INTESITY ACCORDINGLY                ",
                  },
                  {
                    name: "JET WASH   ",
                    details: "HIGH TEMP ALT WASH  ",
                  },
                  {
                    name: "BUILT IN SOFTNER   ",
                    details: "BULIT IN SOFTNER  ",
                  },
                  {
                    name: "HYGIENIC STEAM DRY",
                    details: "SPOTLESS DRYING OF UTENSILS WITH STEAM",
                  },
                  {
                    name: "Button",
                    details: "Touch screen buttons ",
                  },
                ],
              },
              {
                name: "Energy Consumption  ",
                details: [
                  {
                    name: "POWER CONSUMPTION   ",
                    details: "1750 WATTS  ",
                  },
                  {
                    name: "POWER SUPPLY ",
                    details: "220 -240 VOLTS  ",
                  },
                ],
              },
              {
                name: "Rack Features",
                details: [
                  { name: "Number Of Racks", details: "3 Racks" },
                  { name: "Showers ", details: "5 showers" },
                ],
              },

              {
                name: "In The Box & Warranty",
                details: [{ name: "Warranty", details: "1 Year" }],
              },
              {
                name: "Manufacturing & Packing Information",
                details: [
                  { name: "Customer care Phone", details: "1800-889-1056" },
                  {
                    name: "Customer care email",
                    details: "care@garudamartindia.com",
                  },
                  { name: "Country of origin", details: "India" },
                  { name: "Customer care Phone", details: "1800-889-1056" },
                  { name: "Customer care Phone", details: "1800-889-1056" },
                  { name: "Customer care Phone", details: "1800-889-1056" },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

export default HomeAppliances;
