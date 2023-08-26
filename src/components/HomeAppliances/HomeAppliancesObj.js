import AC from "../image/Air Condition.png";
import AC2 from "../image/Out door 01.png"
import washingMachine from "../image/Washing Machine 12.png";
// import washingMachines from "../image/6 KG.png";
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
import ACBanner2 from "../image/AC Banner 3.jpeg"
import washingMachineBanner1 from "../image/WashingMachineBanner1.png"
import washingMachineBanner2 from "../image/WashingMachineBanner2.png"
import washingMachineBanner3 from "../image/WashingMachineBanner3.png"
import LEDTVBanner1 from "../image/LEDTVBanner.png"

const HomeAppliances = [
  // washing machine
  {
    id: 1,
    imgurl: [washingMachine1, washingMachine2],
    name: "washing machine",
    banner: [washingMachineBanner1,washingMachineBanner2,washingMachineBanner3],
    data: [
      {
        id: 1,
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
      },
      {
        id: 2,
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
          "TRANSPERENT DOOR WITH BOROSIL GLASS ",
          "METALIC BODY WITH EMBOSED COVER TO PREVENT RUSTING ",
          "TUMBLE WASH TO BETTER WASH QUALITY",
          "HOT WATER OPTION WITH 4 TYPE 20, 40, 60, 85 *C",
          "DRUM CLEANING OPTION TO SELF CLEAN BY THE MACHINE",
          "ERROR CODES TO CUSTOMER TO ACCESS BY CUSTOMER TO REPAIR BY THEMSELF",
          "WITH 3 DIFFERENT MATALIC COLOUR OF WHITE , SILVER , GREY",
          "SPIN RPM OF 1200 WITH 4 SPEED OF 600, 800, 1000, 1200 RPM",
          "DIAMOUND STAINLESS STEEL DRUM ",
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
          "5 CLOURS OF WASHING MACHINE ",
          "7.5 KG WASHING MACHINE",
          "SOAKING OPTION WITH 35 MIN IN WASH TIMER",
          "AUTO BALANCER TO CLOTHS",
          "CASTOR WHEEL TO MOVE EASILE",
          "SPIN MOTOR OF 150 WATTS",
          "HEAVY DUTY WASH MOTOR",
          "WASH CAPACITY 7.5 KG",
          "SPIN MOTOR CAPACITY 3.5 KG",
          "5 YEARS WARRANTY ON MOTOR ",
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
          "5 CLOURS OF WASHING MACHINE ",
          "8 KG WASHING MACHINE",
          "SOAKING OPTION WITH 35 MIN IN WASH TIMER",
          "AUTO BALANCER TO CLOTHS",
          "CASTOR WHEEL TO MOVE EASILE",
          "SPIN MOTOR OF 150 WATTS",
          "HEAVY DUTY WASH MOTOR",
          "WASH CAPACITY 8 KG",
          "SPIN MOTOR CAPACITY 3.5 KG",
          "5 YEARS WARRANTY ON MOTOR ",
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
      },
    ],
  },
  // // Air condition
  {
    id: 4,
    imgurl: [AC],
    name: "Air Condition",
    banner: [ACBanner1,ACBanner2],
    data: [
      {
        id: 1,
        diraction: "row",
        imgurl: [AC,AC2],
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
      },
      {
        id: 2,
        imgurl: [AC,AC2],
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
      },
    ],
  },
];

export default HomeAppliances;
