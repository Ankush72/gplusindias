import Mixer850 from "../image/Mixer  850 watt.png";
import Mixer750 from "../image/Mixer  750 watt.png";
import gasStove from "../image/4 Burner Gas stove.png";
import Burner3 from "../image/3 Burner Gas stove.png";
import Burner13 from "../image/3 Burner Gas stove 2.png";
import banner from "../image/Banner 4 (1).png";
import electricGeyser15 from "../image/15 Ltr.png";
import riceCooker1 from "../image/Rice Cooker0.png";
import riceCooker2 from "../image/Rice Cooker1.png";
import riceCooker3 from "../image/Rice Cooker2.png";
import wetGrinder from "../image/Wet Grinder.png";
import PressureCooker from "../image/Pressure cooker.png";
import PressureCooker1 from "../image/Pressure cooker 1.png";
import electricKettle from "../image/Electric Kettle.png";
import wetGrinder1 from "../image/Wet Grinder 2.png";
import wetGrinder2 from "../image/Wet Grinder 3.png";
import Kadai1 from "../image/Kadai 1.png";
import Kadai2 from "../image/Kadai 2.png";
import TAWA from "../image/Tawa 01.png";
import fryPan from "../image/Fry pan 01.png";
import gasStoveBanner from "../image/4 Burner gas stove.jpeg"
import gasStoveBanner2 from "../image/2 Burner Gas stove.png"
import MixerGrinderBanner1 from "../image/Mixer Grinder 1.jpeg";
import MixerGrinderBanner2 from "../image/Mixer Grinder 2.jpeg";
import ElectricRiceCookerBanner1 from "../image/Electric Rice cooker 2.jpeg"
import ElectricRiceCookerBanner2 from "../image/Electric Rice cooker.jpeg"
import WetGrinderBanner1 from "../image/Wet Grinder 1.jpeg"
import WetGrinderBanner2 from "../image/Wet Grinder 2.jpeg"
import PressureCookerBanner1 from "../image/Pressure Cooker 1.jpeg"
import PressureCookerBanner2 from "../image/Pressure Cooker 2.jpeg"
import ElectricKettleBanner1 from "../image/Electric Kettle 1.jpeg"
import ElectricKettleBanner2 from "../image/Electric Kettle 2.jpeg"
import ElectricGeyserBanner1 from "../image/Electric Geyser 1.jpeg"
import ElectricGeyserBanner2 from "../image/Electric Geyser 2.jpeg"
import TawaBanner1 from "../image/Tawa Banner 1.jpeg"
import CeilingFan1 from "../image/Fan 01.png" 
import AirCooler1 from "../image/Air cooler 1.png"
import AirCooler2 from "../image/Air cooler 2.png"
import AirCooler3 from "../image/Air cooler 3.png"



const HomeAppliances = [
  // mixer grinder
  {
    id: 1,
    imgurl: [Mixer850],
    name: "mixer grinder",
    banner: [MixerGrinderBanner1,MixerGrinderBanner2],
    data: [
      {
        id: 1,
        route: "gladious-mixer-grinder",
        disraction: "row-reverse",
        imgurl: [Mixer850],
        heading: "Key Features : -",
        name: "STORM MIXER GRINDER",
        description:
          "Introducing Gplus Mixer Grinder: Elevate Your Culinary Creations Discover the art of culinary excellence with Gplus Mixer Grinder. Designed to be your kitchen ally, this powerful appliance brings convenience and efficiency to your cooking endeavors. Embrace the joy of cooking with Gplus Mixer Grinder, where versatility meets power. From preparing sumptuous chutneys and pastes to whipping up delectable smoothies and shakes, this appliance handles it all effortlessly. Experience the convenience of a versatile kitchen companion and elevate your culinary creations to new heights. Invest in Gplus Mixer Grinder today and unlock a world of culinary possibilities!",
        keyfeatures: [
          "850 WATTS HEAVY DUTY MOTOR",
          "18000 RPM ",
          "3 SPEED WITH INCHER",
          "ABS PLASTIC ",
          "3 SET JAR",
          "2 YEARS WARRANTY",
        ],
      },
      {
        id: 2,
        route: "gladious-mixer-grinder",
        disraction: "row",
        imgurl: [Mixer750],
        heading: "Key Features : -",
        name: "GLADIOUS MIXER GRINDER",
        description:
          "Introducing Gplus Mixer Grinder: Elevate Your Culinary Creations Discover the art of culinary excellence with Gplus Mixer Grinder. Designed to be your kitchen ally, this powerful appliance brings convenience and efficiency to your cooking endeavors. Embrace the joy of cooking with Gplus Mixer Grinder, where versatility meets power. From preparing sumptuous chutneys and pastes to whipping up delectable smoothies and shakes, this appliance handles it all effortlessly. Experience the convenience of a versatile kitchen companion and elevate your culinary creations to new heights. Invest in Gplus Mixer Grinder today and unlock a world of culinary possibilities!",
        keyfeatures: [
          "750 WATTS MOTOR ",
          "18000 RPM",
          "3 SPEED WITH INCHER",
          "ABS PLASTIC  ",
          "3 SET JAR",
          "2 YEARS WARRANTY",
        ],
      },
    ],
  },
  // gas stove
  {
    id: 2,
    imgurl: [gasStove],
    name: "gas stove",
    banner: [gasStoveBanner] ,
    data: [
      {
        id: 1,
        disraction: "row-reverse",
        route: "gas-stove-4-burner",
        imgurl: [gasStove],
        heading: "Key Features : -",
        name: "gas stove 4 burner",
        description:
          "Introducing Gplus Gas Stove: Redefining Your Cooking Experience Discover a new level of culinary precision and efficiency with Gplus Gas Stove. Engineered with cutting-edge technology and sleek design, this gas stove is the ultimate addition to your kitchen.Upgrade your cooking game with Gplus Gas Stove, and experience the joy of efficient cooking and outstanding performance. Whether you are a seasoned chef or a passionate home cook, this gas stove is designed to elevate your culinary adventures. Make a smart choice for your kitchen today and bring home Gplus Gas Stove. Enjoy the art of cooking like never before",
        keyfeatures: [
          "MANUAL GAS STOVE",
          "ECONOMIC KNOB DESIGN",
          "HIGH EFFICIENCY BRASS BRUNER",
          "INDIVIDUAL PAN SUPPORTS FOR EASY CLEANING",
          "ELEGANT BLACK TOUGHHEND GLASS TOP",
        ],
      },
      {
        id: 2,
        disraction: "row",
        route: "gas-stove-3-Burner",
        imgurl: [Burner3, Burner13],
        heading: "Key Features : -",
        name: "gas stove 3 Burner",
        description:
          "Introducing Gplus Gas Stove: Redefining Your Cooking Experience Discover a new level of culinary precision and efficiency with Gplus Gas Stove. Engineered with cutting-edge technology and sleek design, this gas stove is the ultimate addition to your kitchen.Upgrade your cooking game with Gplus Gas Stove, and experience the joy of efficient cooking and outstanding performance. Whether you are a seasoned chef or a passionate home cook, this gas stove is designed to elevate your culinary adventures. Make a smart choice for your kitchen today and bring home Gplus Gas Stove. Enjoy the art of cooking like never before",
        keyfeatures: [
          "Tri pin burner for high efficiency",
          "MANUAL GAS STOVE",
          "ECONOMIC KNOB DESIGN",
          "HIGH EFFICIENCY BRASS BRUNER",
          "INDIVIDUAL PAN SUPPORTS FOR EASY CLEANING",
          "ELEGANT BLACK TOUGHHEND GLASS TOP",
        ],
      },
      {
        id: 3,
        disraction: "row",
        route: "gas-stove-2-Burner",
        imgurl: [gasStoveBanner2],
        heading: "Key Features : -",
        name: "gas stove 2 Burner",
        description:
          "Introducing Gplus Gas Stove: Redefining Your Cooking Experience Discover a new level of culinary precision and efficiency with Gplus Gas Stove. Engineered with cutting-edge technology and sleek design, this gas stove is the ultimate addition to your kitchen.Upgrade your cooking game with Gplus Gas Stove, and experience the joy of efficient cooking and outstanding performance. Whether you are a seasoned chef or a passionate home cook, this gas stove is designed to elevate your culinary adventures. Make a smart choice for your kitchen today and bring home Gplus Gas Stove. Enjoy the art of cooking like never before",
        keyfeatures: [
          "Two pin burner for high efficiency",
          "MANUAL GAS STOVE",
          "ECONOMIC KNOB DESIGN",
          "HIGH EFFICIENCY BRASS BRUNER",
          "INDIVIDUAL PAN SUPPORTS FOR EASY CLEANING",
          "ELEGANT BLACK TOUGHHEND GLASS TOP",
        ],
      },
    ],
  },
  // electrice geyser
  {
    id: 3,
    imgurl: [banner],
    name: "electric geyser",
    banner: [ElectricGeyserBanner1,ElectricGeyserBanner2],
    data: [
      {
        id: 1,
        disraction: "row-reverse",
        route: "electric-geyser",
        imgurl: [banner],
        heading: "Key Features : -",
        descriptionName: "Description : -",
        name: "electric geyser",
        description:
          "Introducing Gplus Electric Geyser: Embrace Instant Warmth and Comfort Experience the luxury of hot water on demand with Gplus Electric Geyser. Specially designed to provide efficient heating, this electric geyser is your perfect solution for a soothing and refreshing bathing experience.Upgrade your bathing routine with Gplus Electric Geyser and indulge in the comfort of instant hot water. Whether it's a cold morning or a relaxing evening, this geyser promises to deliver the warmth you crave. Invest in your comfort and convenience today with Gplus Electric Geyser – your gateway to a delightful bathing experience.",
        keyfeatures: [
          "High-Quality Thermostat",
          "Thermal cutout",
          "Multi-Function Valve(MFV)",
          "Anti Vacuum System",
          "Rust Proof Powder Coated Body",
          "Fusible Plug",
        ],
      },
      {
        id: 2,
        disraction: "row",
        route: "electric-geyser-15-Litres",
        imgurl: [electricGeyser15],
        heading: "Key Features : -",
        descriptionName: "Description : -",
        name: "electric geyser 15 Litres",
        description:
          "Introducing Gplus Electric Geyser: Embrace Instant Warmth and Comfort Experience the luxury of hot water on demand with Gplus Electric Geyser. Specially designed to provide efficient heating, this electric geyser is your perfect solution for a soothing and refreshing bathing experience.Upgrade your bathing routine with Gplus Electric Geyser and indulge in the comfort of instant hot water. Whether it's a cold morning or a relaxing evening, this geyser promises to deliver the warmth you crave. Invest in your comfort and convenience today with Gplus Electric Geyser – your gateway to a delightful bathing experience.",
        keyfeatures: [
          "High-Quality Thermostat",
          "Thermal cutout",
          "Multi-Function Valve(MFV)",
          "Anti Vacuum System",
          "Rust Proof Powder Coated Body",
          "Fusible Plug",
        ],
      },
    ],
  },

  // Electric rice cooker
  {
    id: 4,
    imgurl: [riceCooker1, riceCooker2, riceCooker3],
    name: "Electric Rice Cooker",
    banner: [ElectricRiceCookerBanner1,ElectricRiceCookerBanner2],
    data: [
      {
        id: 1,
        disraction: "row-reverse",
        route: "Electric-Rice-Cooker",
        imgurl: [riceCooker1, riceCooker2, riceCooker3],
        heading: "Key Features : -",
        name: "Electric Rice Cooker",
        description:
          "Introducing Gplus Electric Rice Cooker: The Perfect Kitchen Companion Prepare fluffy, perfectly cooked rice effortlessly with Gplus Electric Rice Cooker. This advanced kitchen appliance is designed to simplify your cooking experience, delivering delicious results every time.Upgrade your kitchen experience and savor perfectly cooked rice every time with Gplus Electric Rice Cooker. Say goodbye to tedious cooking and enjoy more time with your loved ones. Order yours today and experience the convenience of smart cooking technology at your fingertips",
        keyfeatures: [
          "non-stick interior",
          "spherical pan (so that rice doesn't get trapped in the corners or on the bottom)",
          "retractable or detachable cord",
          "detachable inner lid (for easier cleaning)",
          "ability to cook things other than rice, e.g. porridge, risotto, cake",
          "rinse-free rice setting",
          "LED display and countdown clock",
          "steam cooking for other items, e.g. vegetable",
        ],
      },
    ],
  },
// Wet grinder
  {
    id: 5,
    imgurl: [wetGrinder, wetGrinder2, wetGrinder1],
    name: "Wet grinder",
    banner: [WetGrinderBanner1,WetGrinderBanner2],
    data: [
      {
        id: 1,
        disraction: "row",
        route: "wet-grinder",
        imgurl: [wetGrinder, wetGrinder2, wetGrinder1],
        name: "Wet grinder",
        description:
          "Introducing Gplus Wet Grinder: Unleash the Flavors in Your Kitchen Experience the art of effortless grinding with Gplus Wet Grinder. Designed to make your culinary journey smooth and enjoyable, this appliance is a must-have for every kitchen.Make every meal a delight with Gplus Wet Grinder. Whether you're a professional chef or a passionate home cook, this appliance promises to elevate your culinary creations to new heights. Get ready to unleash the authentic flavors of traditional dishes and experiment with exciting recipes effortlessly. Invest in Gplus Wet Grinder today and take your cooking experience to the next level!",
        keyfeatures: ["THIS WET GRINDER IS 2HP MOTOR.","OUTER STEEL BODY IS MADE UP OF STRONG SS METAL.","TILTING OF MIXTURE OF BATTER IS VERY EASY","FOR GRINDING WE HAVE USED VERY GOOD QUALITY OF STONE.","OVER ALL THE LOOK OF THE MACHINE IS BEST"],
      },
    ],
  },
  // presser cooker
  {
    id: 6,
    imgurl: [PressureCooker, PressureCooker1],
    name: "Pressure cooker",
    banner: [PressureCookerBanner1,PressureCookerBanner2],
    data: [
      {
        id: 1,
        disraction: "row-reverse",
        route: "Pressure-cooker",
        imgurl: [PressureCooker, PressureCooker1],
        name: "Pressure cooker",
        heading: "Key Features : -",
        description:
          "Introducing Gplus Pressure Cooker: The Ultimate Cooking Companion Unlock the true potential of your kitchen with Gplus Pressure Cooker. Designed to make cooking faster, easier, and more flavourful, this appliance is your key to delicious and nutritious meals in a fraction of the time.Experience the convenience and flavour enhancement of pressure cooking with Gplus Pressure Cooker. Whether you're a busy professional or a home cook seeking efficiency, this appliance is designed to revolutionize your cooking experience. Join the countless satisfied customers who have embraced the power of pressure cooking with Gplus. Upgrade your kitchen today and savor the joy of delicious, time-saving meals with Gplus Pressure Cooker!",
        keyfeatures: [
          "Retain Vitamins & Nutrients",
          "Preserve Food's Appearance and Taste",
          "Eliminate Harmful Microorganisms",
          "available in  2 , 3 ,5 LITRES",
        ],
      },
    ],
  },

  // Electric Kettle
  {
    id: 7,
    imgurl: [electricKettle],
    name: "Electric Kettle",
    banner: [ElectricKettleBanner1,ElectricKettleBanner2],
    data: [
      {
        id: 1,
        disraction: "row",
        route: "Electric-Kettle",
        imgurl: [electricKettle],
        heading: "Key Features : -",
        name: "Electric Kettle",
        description:
          "Introducing Gplus Electric Kettle: A Pinnacle of Convenience and Speed Experience the epitome of convenience with Gplus Electric Kettle. Boiling water has never been faster or easier, making it an essential appliance for your daily routine.Experience the ease and efficiency of Gplus Electric Kettle in your daily life. Whether you need hot water for a quick cup of tea, a cozy evening hot chocolate, or instant meal preparation, this kettle delivers unparalleled convenience. Upgrade your kitchen with Gplus Electric Kettle and enjoy the luxury of instant hot water whenever you desire. Simplify your routine and embrace the speed and comfort that this essential appliance brings to your home",
        keyfeatures: [
          "CAPACTY 1.8 LITRES",
          "1500 WATTS",
          "AUTO CUT FUNCTION ",
          "1 YEAR WARRANTY",
        ],
      },
    ],
  },
  // Kadai
  {
    id: 8,
    imgurl: [Kadai1, Kadai2],
    name: "Kadai",
    banner: [],
    data: [
      {
        id: 1,
        disraction: "row-reverse",
        route: "Kadai",
        imgurl: [Kadai1, Kadai2],
        heading: "Key Features : -",
        name: "Kadai",
        description:
          "Introducing Gplus Kadai – where culinary excellence meets modern convenience. Elevate your cooking game with this versatile and innovative kitchen essential.Crafted with precision and designed for durability, Gplus Kadai is your go-to tool for creating mouth-watering dishes. Its advanced non-stick surface ensures that your culinary creations release effortlessly, while the sturdy construction guarantees even heat distribution for perfect cooking results every time",
        keyfeatures: [
          "Gas and Induction Compatible.",
          "Durable Non-Stick Coating.",
          "Metal Spoon Friendly",
          "No harmful Chemicals",
          "Advanced Easy Clean Exterior.",
          "Stain Free Interior.",
          "Dishwasher Safe",
        ],
      },
    ],
  },

  // Tawa
  {
    id: 9,
    imgurl: [TAWA],
    name: "Tawa",
    banner: [TawaBanner1],
    data: [
      {
        id: 1,
        disraction: "row",
        route: "Tawa",
        imgurl: [TAWA],
        name: "Tawa",
        heading: "Key Features : -",
        description:
          "Introducing GPlus Tawa: Elevate Your Culinary Experience! Elevate your cooking experience with GPlus Tawa. Unleash your creativity, experiment with flavors, and craft dishes that are sure to delight your taste buds and impress your loved ones",
        keyfeatures: [
          "Gas and Induction Compatible.",
          "Durable Non-Stick Coating.",
          "Metal Spoon Friendly.",
          "No harmful Chemicals.",
          "Advanced Easy Clean Exterior.",
          "Stain Free Interior.",
          "Dishwasher Safe",
        ],
      },
    ],
  },
  // Fry pan
  {
    id: 10,
    imgurl: [fryPan],
    name: "Fry Pan",
    banner:[],
    data: [
      {
        id: 1,
        disraction: "row-reverse",
        route: "Fry-Pan",
        imgurl: [fryPan],
        name: "Fry Pan",
        heading: "Key Features : -",
        description:
          "Introducing GPlus Fry Pan: Elevate Your Culinary Adventures!. Are you ready to take your cooking to the next level? Look no further than GPlus Fry Pan. Crafted with precision and designed for excellence, our fry pan is your key to unlocking a world of culinary possibilities and flavorful creations",
        keyfeatures: [
          "Cooks tasty meals without using oil.",
          "Resists scratches.",
          "Easy to wash and clean.",
          "Complements modern kitchens.",
          "Evenly distributes heat and saves on fuel.",
          "Easy to use.",
        ],
      },
    ],
  },

  // Fan
  {
    id: 10,
    imgurl: [CeilingFan1],
    name: "Fan",
    banner:[],
    data: [
      {
        id: 1,
        disraction: "row-reverse",
        route: "ceiling-fan",
        imgurl: [CeilingFan1],
        name: "Ceiling Fan",
        heading: "Key Features : -",
        description:
          "Introducing Gplus Ceiling Fan: Embrace Breezy Comfort and Style Discover the perfect balance of form and function with Gplus Ceiling Fan. Designed to deliver optimal air circulation and complement your interior decor, this fan is the epitome of comfort and elegance.Create a serene and pleasant ambiance in your living spaces with Gplus Ceiling Fan. Experience the perfect blend of cooling performance, quiet operation, and elegant design that complements any room decor. Beat the heat in style and embrace a refreshing airflow with Gplus Ceiling Fan - your ultimate choice for comfort and sophistication. Upgrade your living spaces today and enjoy a more enjoyable and relaxing environment with Gplus Ceiling Fan",
        keyfeatures: [
          "Aerodynamic Design",
          "High Quality Double Ball Bearing For Better Reliability",
          "Superior Finish",
          "Performance: Powerful Motor for Superior Air Delivery",
          "100 Percent Copper Motor",
          "Quick Start High Torque Motor",
          "High Air Delivery",
          "Bye-Bye Dust Technology for Easy Cleaning"
        ],
      },
    ],
  },
  {
    id: 11,
    imgurl: [AirCooler1,AirCooler2,AirCooler3],
    name: "Air Cooler",
    banner: [],
    data: [
      {
        id: 1,
        disraction: "row-reverse",
        route: "air-cooler",
        imgurl: [AirCooler1,AirCooler2,AirCooler3],
        name: "Air Cooler 35L",
        heading: "Key Features : -",
        description:
          "Introducing Gplus Air Cooler: Stay Cool, Stay Comfortable Beat the heat with Gplus Air Cooler, your ultimate solution to staying cool and comfortable during scorching summer days. Experience refreshing air circulation and soothing coolness with this advanced air cooling system.Stay comfortable and relaxed with Gplus Air Cooler by your side. Whether it's in your living room, bedroom, or office, this air cooler is the perfect addition to combat the heat and enjoy a serene environment. Embrace the convenience of efficient cooling and breeze through the hottest days with Gplus Air Cooler. Upgrade your comfort today and experience the pleasure of a cool and inviting atmosphere all summer long",
        keyfeatures: [
          "Power Performance: Honey Comb Pads, Powerful Air Throw, Ice Chamber, Shower Distribution Channel, VoltStabilize",
          "User Comfort: 4 Way Air, Water Level Indicator, Easy Removable Pad, Inverter Compatible, 360 degree Caster Wheels, Compact Unit",
          "Safety : Overheat Protection, Dry Run Protection, Dust and Mosquito Filter",
          "High Air Delivery",
        ],
      },
    ],
  }
];

export default HomeAppliances;
