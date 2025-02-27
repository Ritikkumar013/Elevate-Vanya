"use client";
import ImageCarousel from "../Components/ImageCarousel";
import IconCards from "../Components/Homepage/Iconcard";
import Image from "next/image";
import Link from "next/link";
import Location from "../Components/Location";

const Home = () => {
  return (
    <>
      {/* Section 1 */}
      <div
        className=" w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/gallery.png')" }}
      >
        <div className=" text-white flex flex-col items-center justify-center h-full gap-5">
          
          <h1 className="text-8xl font-bold font-heading ">ELEVATE VANYA</h1>
          <p className="font-serif">
            INTRODUCING NEW WAYS TO SHOWCASE PROPERTIES{" "}
          </p>
          
          <div className="absolute bottom-6">
          <Image
              src="/arrow-btn-vertical.png"
              width={70}
              height={200}
              alt="Picture of the author"
              className="w-10 "
            />
            </div>
        </div>
      </div>

      {/* Section 2 */}

      <div className="w-full p-20">
        <div className="max-w-screen-xl mx-auto flex gap-12">
          <div className="basis-1/2">
            <Image
              src="/home-2nd-sec.jpg"
              width={540}
              height={400}
              alt="Picture of the author"
            />
          </div>
          <div className="basis-1/2">
            <h2 className="uppercase text-5xl mb-5 font-heading">
              <span className="text-[#B79868]">NEIGHBORHOOD</span> IN YOUR AREA IS WONDERFUL
            </h2>
            <p className="uppercase mb-4 text-lg text-[#B79868]">
              TOUCH OF PERFECTION IS HERE
            </p>
            <p className="text-base mb-7">
              We’re here to help. Looking for customer service contact
              information? Explore support resources for the relevant products
              below to find the best way to reach out about your issue. Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry`&apos;s. We’re here to
              help. Looking for customer service contact information? Explore
              support resources for the relevant products below to find the best
              way to reach out about your issue. Lorem Ipsum is simply dummy
              text of the printing and typesetting industry. Lorem Ipsum has
              been the industry`&apos;s
            </p>
            <Link
              href="/location"
              className="cursor-pointer px-6 text-white py-3 bg-[#B79868]"
            >
              Know More
            </Link>
          </div>
        </div>
      </div>

      {/* Section 3 */}

      <div className="w-full p-20" style={{ backgroundImage: "url('/bg-grain-black.jpg')" }}>
        <div className="max-w-screen-xl mx-auto">
          <IconCards />
        </div>
      </div>


      {/* Section 6 */}

      <div className="w-full relative bg-[#e9e9e9]">
        <div className="max-w-screen-xl mx-auto">
          <Location />
        </div>
      </div>

      {/* Section 4 */}
      <div className="w-full p-20">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-5xl mb-5 text-center font-heading">SCHEDULE A VISIT</h1>
          <p className="text-center mb-12 max-w-screen-md mx-auto text-sm">
            Lorem Ipsum has been the industry&apos;s standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries printer took a galley of type and scrambled it to
            make a type specimen
          </p>
          <div className="relative">
            <ImageCarousel />
          </div>
        </div>
      </div>

      {/* Section 5 */}
      <div className="w-full p-20" style={{ backgroundImage: "url('/bg-grain-gold2.jpg')" }}>
        <div className="max-w-screen-md text-center mx-auto text-base">
          <h1 className="text-5xl mb-5 font-heading">SCHEDULE A VISIT</h1>
          <p className="mb-5">
            Lorem Ipsum has been the industry&apos;s standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries printer took a galley of type and scrambled it to
            make a type specimen
          </p>
          <button className="px-8 py-3 bg-[#2d2d2d] text-white">
            Book a Visit
          </button>
        </div>
      </div>

      

      {/* Floor Layouts Section 7 */}
      {/* <div className="bg-[#282828] w-full p-20">
        <div className="max-w-screen-xl mx-auto text-white">
          <h1 className="text-5xl mb-5 uppercase text-center font-heading">
            {" "}
            <span className="text-[#B79868]">Floor</span> Layouts
          </h1>
          <p className="mb-16 uppercase text-[#B79868] text-center">
            Touch of Perfection is here
          </p>

          <div className="flex gap-12">
            <div className="flex basis-1/3 bg-[#2f2f2f] border border-[#B79868]">
              <div className=" basis-1/2 flex align-bottom pt-20">
                {" "}
                <Image
                  src="/house.png"
                  width={124}
                  height={124}
                  alt="Picture of the author"
                  className="max-w-28"
                />
              </div>
              <div className="p-4 text-right basis-1/2 flex flex-col gap-3 items-end">
                <h1 className="text-white font-heading">2 BHK APARTMENTS</h1>
                <p className="text-white text-xs">
                  At vero eos et accusamus<br></br> et iusto odio dignissi
                </p>
                <Image
                  src="/arrow-btn.png"
                  width={200}
                  height={66}
                  alt="Picture of the author"
                  className="max-w-20 mt-3"
                />
                
              </div>
            </div>
            <div className="flex basis-1/3 bg-[#2f2f2f] border border-[#B79868]">
              <div className=" basis-1/2 flex align-bottom pt-20">
                {" "}                
                <Image
                  src="/house.png"
                  width={124}
                  height={124}
                  alt="Picture of the author"
                  className="max-w-28"
                />
              </div>
              <div className="p-4 text-right basis-1/2 flex flex-col gap-3 items-end">
                <h1 className="text-white font-heading">2 BHK APARTMENTS</h1>
                <p className="text-white text-xs">
                  At vero eos et accusamus<br></br> et iusto odio dignissi
                </p>
                <Image
                  src="/arrow-btn.png"
                  width={200}
                  height={66}
                  alt="Picture of the author"
                  className="max-w-20 mt-3"
                />
                
              </div>
            </div>
            <div className="flex basis-1/3 bg-[#2f2f2f] border border-[#B79868]">
              <div className=" basis-1/2 flex align-bottom pt-20">
                {" "}
                <Image
                  src="/house.png"
                  width={124}
                  height={124}
                  alt="Picture of the author"
                  className="max-w-28"
                />
              </div>
              <div className="p-4 text-right basis-1/2 flex flex-col gap-3 items-end">
                <h1 className="text-white font-heading">2 BHK APARTMENTS</h1>
                <p className="text-white text-xs">
                  At vero eos et accusamus<br></br> et iusto odio dignissi
                </p>
                <Image
                  src="/arrow-btn.png"
                  width={200}
                  height={66}
                  alt="Picture of the author"
                  className="max-w-20 mt-3"
                />
                
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Home;
