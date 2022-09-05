import Head from "next/head";
import { brandsApi } from "src/fakeApi/brandsApi";
import ITypeOfBrand from "../interfaces/ITypeOfBrand";
import Image from "next/image";
import manDrinks from "../assets/images/manDrinks.png";

export default function Main() {
  const DrinksCart = (e: ITypeOfBrand) => {
    return (
      <div
        className={`${
          e.title == "SIWU DISTILLET"
            ? "lg:w-96 inline-flex items-center border-1 border-solid border-colorCartBorder mr-5 mb-5 bg-backgroundColorFirstCart"
            : "lg:w-96 inline-flex items-center border-1 border-colorCartBorder mr-5 mb-5"
        }`}
      >
        <div className="items-center py-5 pl-2 pr-5">
          <Image src={e.image} alt={e.title} className="border border-r-2" />
        </div>
        <div className="w-60 lg:w-80 border-l-2 pl-3 pr-3 ">
          <h4 className="font-Lato font-bold uppercase">{e.title}</h4>
          <div className="text-xs text-colorSubtilesCarts font-Lato">
            {e.description}
          </div>
          <div className="inline-flex items-center w-full">
            <Image
              src={e.country.countryImage}
              alt={e.country.countryName}
              width="15px"
              height="10px"
            />
            <div className="ml-2 text-xs text-colorSubtilesCarts">
              {e.country.countryName}
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <main className="justify-between max-w-7xl mx-auto px-10">
      {/* ajustar la letra a todo*/}
      <h1 className="h-10 my-10 font-Serif font-bold text-5xl leading-10">
        Brands
      </h1>
      <div className="grid grid-rows-2 grid-flow-col">
        {brandsApi.map((e: ITypeOfBrand) => {
          return <DrinksCart {...e} key={e._id} />;
        })}
      </div>
      {/* sm:grid-rows-1 lg:grid-rows-1 mt-10 */}
      <div className="mt-10 grid grid-rows-1 grid-flow-col justify-items-center">
        <div className="py-10 px-5 bg-backgroundColorSeeOnLexir">
          <h1 className="font-bold text-5xl font-Serif  text-titleColor">
            Have a brand you&apos;d like to see on{" "}
            <span className="text-lexirColor font-bold border-none">Lexir</span>
            ?
          </h1>
          <h4 className="my-5 text-black text-sm">
            Lexir is always looking to connect with new exciting craft brands
            from around the world. If you have a brand in mind that you&apos;d
            like to see on Lexir, let us know.
          </h4>
          <button className="rounded px-12 py-3 mt-2 bg-titleColor text-white ">
            Suggest a brand
          </button>
        </div>
        <div className="h-96 w-max lg:w-full">
          <Image
            src={manDrinks}
            alt="man drinking"
            width="500px"
            height="385px"
          />
        </div>
      </div>
    </main>
  );
}
