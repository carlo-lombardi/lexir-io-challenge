import ITypeOfBrand from "../interfaces/ITypeOfBrand";
import SiWu from "../assets/images/SiWu-Logo.png";
import Erika from "../assets/images/erika-logo.png";
import Ninefold from "../assets/images/ninefold-distillery-logo.png";
import Argala from "../assets/images/argala-logo.png";
import Baldoria from "../assets/images/baldoria-logo.png";
import KissMy from "../assets/images/kiss-my-logo.png";
import denmark from "../assets/images/denmark.png";
import france from "../assets/images/france.png";
import scotland from "../assets/images/scotland.png";
import italy from "../assets/images/italy.png";
import belgium from "../assets/images/belgium.png";

export const brandsApi = [
  {
    _id: 1,
    image: SiWu,
    title: "SIWU DISTILLET",
    description: "Aquavit & Gin ",
    country: {
      countryName: "Copenhagen, Denmark",
      countryImage: denmark,
    },
  },
  {
    _id: 2,
    image: Argala,
    title: "Argala",
    description: "Pastis, Bitters & Liqueurs",
    country: {
      countryName: "Boves, Italy",
      countryImage: italy,
    },
  },
  {
    _id: 3,
    image: Erika,
    title: "Erika Spirits",
    description: "Vodka & Gin ",
    country: {
      countryName: "Cognac, France",
      countryImage: france,
    },
  },
  {
    _id: 4,
    image: Baldoria,
    title: "Baldoria",
    description: "Vermouth",
    country: {
      countryName: "Boves, Italy",
      countryImage: italy,
    },
  },
  {
    _id: 5,
    image: Ninefold,
    title: "Ninefold",
    description: "Rum",
    country: {
      countryName: "D&G, Scotland",
      countryImage: scotland,
    },
  },
  {
    _id: 6,
    image: KissMy,
    title: "Kiss My",
    description: "Aperitif",
    country: {
      countryName: "Izegem, Belgium",
      countryImage: belgium,
    },
  },
];
