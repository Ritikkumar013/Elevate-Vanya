import React from "react";
import Masonry from "../../Components/Masonry";

const page = () => {
  return (
    <div>
      <div className="w-full h-[55vh] px-5 md:px-14 md:h-[70vh] flex items-center bg-cover bg-center lg:h-[72vh]" style={{ backgroundImage: "url('/gallery.png')" }}>
        {" "}
        <div className="container  max-w-screen-xl mx-auto text-white lg:mb-[-20px]">
          <h1 className="text-3xl md:text-4xl lg:text-6xl text-center font-heading uppercase">
            Gallery
          </h1>
        </div>
      </div> 
      <div className="text-center py-10">
        <h1 className="lg:text-5xl md:text-4xl text-4xl my-5 font-light font-heading">GALLERY</h1>
        <p className="mx-5 text-sm font-extralight">Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/> Lorem Ipsum has been the industry&apos;s standard dummy text</p>
      </div>
      <Masonry />
      
    </div>
  );
};

export default page;
