import Image from "next/image";
import { footerListApi } from "../fakeApi/footerListApi";
import rectanguloLogo from "../assets/images/rectanguloLogo.png";
import instagram from "../assets/images/instagram.png";
import facebookLogo from "../assets/images/facebookLogo.png";
import linkedinLogo from "../assets/images/linkedinLogo.png";
export default function Footer() {
  return (
    <footer className="px-2 bg-footerBackgroundColor font-Lato not-italic text-base">
      <div className="grid grid-rows-1 grid-flow-col max-96 text-white border-b border-personalGrey">
        <div className="">
          <h2 className="h-10 items-center ml-7 pt-12 font-serif font-bold text-5xl leading-10 text-white">
            LEXIR
          </h2>
        </div>
        {footerListApi.map((e: any, key: number) => {
          return (
            <div
              key={key}
              className="flex pt-10 items-center font-medium leading-8"
            >
              <div key={key} className="">
                <div className="">
                  <h1 className="mt-5 text-personalGrey">
                    {e.community?.mainTitle}
                  </h1>
                  <div className="mt-5">{e.community?.subTitle1}</div>
                  <div className="mt-5">{e.community?.subTitle2}</div>
                  <div className="mt-5">{e.community?.subTitle3}</div>
                </div>
                <div className="">
                  <h1 className="mt-5 text-personalGrey">
                    {e.platform?.mainTitle}
                  </h1>
                  <div className="mt-5">{e.platform?.subTitle1}</div>
                  <div className="mt-5">{e.platform?.subTitle2}</div>
                  <div className="mt-5">{e.platform?.subTitle3}</div>
                </div>
                <div className="">
                  <h1 className="mt-5 text-personalGrey">
                    {e.company?.mainTitle}
                  </h1>
                  <div className="mt-5">{e.company?.subTitle1}</div>
                  <div className="mt-5">{e.company?.subTitle2}</div>
                  <div className="mt-5">{e.company?.subTitle3}</div>
                </div>
                <div className="">
                  <h1 className="mt-5 text-personalGrey">
                    {e.lexirShop?.mainTitle}
                  </h1>
                  <div className="mt-5">{e.lexirShop?.subTitle1}</div>
                  <div className="mt-5">{e.lexirShop?.subTitle2}</div>
                  <div className="mt-5">{e.lexirShop?.subTitle3}</div>
                  <div className="pt-5 pb-5">{e.lexirShop?.subTitle4}</div>
                </div>
              </div>
            </div>
          );
        })}
        <div className="flex pt-12 mt-5 justify-between">
          <div className="">
            <Image
              src={rectanguloLogo}
              alt="rectanguloLogo"
              className="border border-r-2"
              width="20px"
              height="20px"
            />
          </div>
          <div className="facebook">
            <Image
              src={facebookLogo}
              alt="facebook-logo"
              className="border border-r-2"
              width="20px"
              height="20px"
            />
          </div>
          <div className="likedin">
            <Image
              src={instagram}
              alt="instagram-logo"
              className="border border-r-2"
              width="20px"
              height="20px"
            />
          </div>
          <div className="instagram">
            <Image
              src={linkedinLogo}
              alt="linkedin-logo"
              className="border border-r-2"
              width="20px"
              height="20px"
            />
          </div>
        </div>
      </div>
      <div className="text-white flex justify-between font-light">
        <div className="m-5">© 2022 Lexir Inc.</div>
        <div className="flex">
          <div className="m-5">Privacy</div>
          <div className="m-5">Terms of service</div>
        </div>
      </div>
    </footer>
  );
}
