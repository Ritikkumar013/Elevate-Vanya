// "use client";
// import { useState } from "react";

// // type ApartmentType = {
// //   id: number;
// //   label: string;
// // };

// // type TableData = {
// //   id: number;
// //   types: string;
// //   carpetArea: string;
// //   privateUsableArea: string;
// //   saleableArea: string;
// //   towers: string;
// //   finishes: string[];
// // };

// // const apartmentList: ApartmentType[] = [
// //   { id: 1, label: "APARTMENTS" },
// //   { id: 2, label: "SIMPLEX" },
// //   { id: 3, label: "DUPLEX" },
// //   { id: 4, label: "DOUBLE HEIGHT" },
// //   { id: 5, label: "STUDIO" },
// //   { id: 6, label: "PENTHOUSE" },
// // ];

// // // Table data corresponding to different apartment types
// // const tableData: Record<number, TableData[]> = {
// //   1: [
// //     {
// //       id: 1,
// //       types: "3 BHK",
// //       carpetArea: "147.80 M² / 1591 FT²",
// //       privateUsableArea: "186.92 M² / 2012 FT²",
// //       saleableArea: "249.44 M² / 2685 FT²",
// //       towers: "B, C, D, E",
// //       finishes: ["SILVER"],
// //     },
// //     {
// //       id: 2,
// //       types: "4 BHK",
// //       carpetArea: "177.72 M² / 1913 FT²",
// //       privateUsableArea: "228.54 M² / 2460 FT²",
// //       saleableArea: "292.64 M² / 3150 FT²",
// //       towers: "C, D",
// //       finishes: ["SILVER"],
// //     },
// //   ],
// //   2: [
// //     {
// //       id: 3,
// //       types: "4L-BHK",
// //       carpetArea: "257.99 M² / 2777 FT²",
// //       privateUsableArea: "310.11 M² / 3338 FT²",
// //       saleableArea: "387.87 M² / 4175 FT²",
// //       towers: "A, F",
// //       finishes: ["BARE SHELL", "SILVER", "PLATINUM"],
// //     },
// //   ],
// //   3: [
// //     {
// //       id: 4,
// //       types: "4T-BHK",
// //       carpetArea: "250.46 M² / 2696 FT²",
// //       privateUsableArea: "301.28 M² / 3243 FT²",
// //       saleableArea: "399.48 M² / 4300 FT²",
// //       towers: "C, D",
// //       finishes: ["SILVER"],
// //     },
// //   ],
// // };

// export default function Apart() {
//   // const [selectedId, setSelectedId] = useState(1);

//   // const selectedTableData = tableData[selectedId] || [];

//   return (
//     // <div className="mb-20">
//     //   {/* Title */}
//     //   <div className="w-full h-[55vh] px-5 md:px-14 md:h-[70vh] flex items-center bg-cover bg-center lg:h-[72vh]"   style={{ backgroundImage: "url('/gallery.png')" }}>
//     //     {" "}
//     //     <div className="container  max-w-screen-xl mx-auto text-white lg:mb-[-20px]">
//     //       <h1 className="text-3xl md:text-4xl lg:text-6xl text-center font-heading uppercase">
//     //         Unit Configuration
//     //       </h1>
//     //     </div>
//     //   </div>

//     //   <div className="text-center my-16">
//     //     <h1 className="text-5xl my-5 font-light font-heading"><span className="text-[#B79868]">APARTMENTS </span>PLAN</h1>
//     //     <p className="text-sm font-extralight">Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/> Lorem Ipsum has been the industry&apos;s standard dummy text</p>
//     //   </div>

//     //   {/* Main Layout */}
//     //   <div className="grid grid-cols-12 gap-4 my-10 mx-20">
//     //     {/* Left Sidebar */}
//     //     <div className="col-span-2 bg-gray-100 p-4">
//     //       {apartmentList.map((item) => (
//     //         <button
//     //           key={item.id}
//     //           onClick={() => setSelectedId(item.id)}
//     //           className={`block w-full text-left p-2 font-medium ${
//     //             selectedId === item.id
//     //               ? "text-[#B79868] border-l-4 border-[#B79868]"
//     //               : "text-gray-500"
//     //           } hover:text-black`}
//     //         >
//     //           {item.label}
//     //         </button>
//     //       ))}
//     //     </div>

//     //     {/* Middle Section - Dynamic Table */}
//     //     <div className="col-span-7 bg-gray-200  overflow-x-auto mx-3">
//     //       <table className="w-full text-sm text-left border-collapse ">
//     //         <thead className="bg-[#2d2d2d] text-white text-center">
//     //           <tr>
//     //             <th className="p-2">TYPES</th>
//     //             <th className="p-2">CARPET AREA</th>
//     //             <th className="p-2">PRIVATE USABLE AREA</th>
//     //             <th className="p-2">SALEABLE AREA</th>
//     //             <th className="p-2">TOWERS</th>
//     //             <th className="p-2">FINISHES AVAILABLE</th>
//     //           </tr>
//     //         </thead>
//     //         <tbody>
//     //           {selectedTableData.map((row) => (
//     //             <tr key={row.id} className="border-b border-gray-300 text-center">
//     //               <td className="p-2 font-medium">{row.types}</td>
//     //               <td className="p-2">{row.carpetArea}</td>
//     //               <td className="p-2">{row.privateUsableArea}</td>
//     //               <td className="p-2">{row.saleableArea}</td>
//     //               <td className="p-2">{row.towers}</td>
//     //               <td className="p-2">
//     //                 {row.finishes.map((finish, index) => (
//     //                   <span
//     //                     key={index}
//     //                     className="inline-block bg-gray-300 rounded px-2 py-1 mr-1"
//     //                   >
//     //                     {finish}
//     //                   </span>
//     //                 ))}
//     //               </td>
//     //             </tr>
//     //           ))}
//     //           {selectedTableData.length === 0 && (
//     //             <tr>
//     //               <td colSpan={6} className="text-center p-4 text-gray-500">
//     //                 No data available for this selection.
//     //               </td>
//     //             </tr>
//     //           )}
//     //         </tbody>
//     //       </table>
//     //     </div>

//     //     {/* Right Sidebar */}
//     //     <div className="col-span-3 bg-white p-4 shadow border ">
//     //       <h2 className="text-lg font-bold mb-2 uppercase">Details</h2>
//     //       <p className="text-sm text-gray-600">
//     //         Select an apartment type from the left to view its detailed plans and finishes.
//     //       </p>
//     //       <ul className="mt-4">
//     //         <li className="text-sm mb-2">
//     //           <span className="font-medium">Selected Type:</span>{" "}
//     //           {apartmentList.find((apartment) => apartment.id === selectedId)?.label || "N/A"}
//     //         </li>
//     //         <li className="text-sm mb-2">
//     //           <span className="font-medium">Total Options:</span>{" "}
//     //           {selectedTableData.length}
//     //         </li>
//     //         <li className="text-sm">
//     //           <span className="font-medium">Finishes:</span> Dynamic per row.
//     //         </li>
//     //       </ul>
//     //     </div>
//     //   </div>
//     // </div>
//     <div className="mb-20">
//       {/* Hero Section */}
//       <div
//         className="w-full h-[55vh] px-5 md:px-14 md:h-[70vh] flex items-center bg-cover bg-center lg:h-[72vh]"
//         style={{ backgroundImage: "url('/gallery.png')" }}
//       >
//         <div className="container max-w-screen-xl mx-auto text-white lg:mb-[-20px]">
//           <h1 className="text-3xl md:text-4xl lg:text-6xl text-center font-heading uppercase">
//             Unit Configuration
//           </h1>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-6xl mx-auto px-4 py-12">
//         {/* Header */}
//         <div className="flex flex-row justify-between items-center my-10">
//           <div>
//             <h1 className="text-3xl font-medium my-2">Featured Apartments</h1>
//             <p className="text-gray-600 max-w-3xl">
//               Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem
//               ipsum has been the industry's standard dummy, Lorem ipsum is simply dummy text of
//               the printing and typesetting industry.
//             </p>
//           </div>
//           <div className="space-x-4 align-super">
//             <button className="px-6 py-2 bg-gray-200">Tower A</button>
//             <button className="px-6 py-2 bg-gray-200">Tower B</button>
//           </div>
//         </div>

//         {/* Apartments List */}
//         <div className="space-y-6">
//           {/* Apartment 1 */}
//           <div className="flex flex-col md:flex-row gap-12  border-y py-16 border-gray-200 items-center">
//             <div className="md:w-1/2">
//               <div className="bg-gray-200 w-5/6 h-[300px]" />
//             </div>
//             <div className="md:w-1/2 relative ">
//               <div className="relative">
//                 <div className="absolute -left-[80px] top-2 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-xl">
//                   01
//                 </div>
//                 <div className="border-l border-gray-200 absolute -left-[2px] h-full top-0" />
//                 <div className='pl-10'> 
//                   <div className=''>
//                     <p className="text-sm text-gray-500">Apartments</p>
//                     <h2 className="text-2xl font-medium mt-1">Villa Berkel-Enschot</h2>
//                   </div>

//                   <div className="mt-1 pt-1 ">
//                     <p className="text-gray-600 text-sm leading-relaxed">
//                       Rapidiously myocardinate cross-platform intellectual capital model.
//                       Appropriately create interactive infrastructures
//                     </p>
//                   </div>

//                   <div className="mt-1 pt-1 pb-2">
//                     <p className="text-2xl font-medium">$45,000.00</p>
//                   </div>

//                   <div className="mt-1  border-t border-gray-200"> 
//                     <div className="flex space-x-5">
//                       <div className="flex px-4 py-2 items-center gap-2"><div className='bg-gray-200 size-1 p-2'></div><h1>Bed - 4</h1></div>
//                       <div className="flex px-4 py-2 items-center gap-2 border-x"><div className='bg-gray-200 size-1 p-2'></div><h1 className=''>Bath - 4</h1></div>
//                       <div className="flex px-4 py-2 items-center gap-2"><div className='bg-gray-200 size-1 p-2'></div>Area - 1500 sqft</div>
//                     </div>
//                   </div>

//                   <div className="mt-6 pt-6 border-t border-gray-200">
//                     <button className="bg-black text-white px-6 py-2 text-sm">
//                       Inquire Now!
//                     </button>
//                   </div>
//                   </div></div>
//               </div>
//             </div>

//             {/* Apartment 2 */}
//             <div className="flex flex-col md:flex-row gap-12 py-16 border-b border-gray-200">
//               <div className="md:w-1/2 border-r relative  order-last md:order-first">
//               <div className='pr-10'>

              
//                 <div className="relative pl-5">
//                   <div className="absolute -left-[52px] top-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-xl">
//                     02
//                   </div>

//                   <div className=''>
//                     <p className="text-sm text-gray-500">Apartments</p>
//                     <h2 className="text-2xl font-medium mt-1">Villa Berkel-Enschot</h2>
//                   </div>

//                   <div className="mt-1 pt-1">
//                     <p className="text-gray-600 text-sm leading-relaxed">
//                       Rapidiously myocardinate cross-platform intellectual capital model.
//                       Appropriately create interactive infrastructures
//                     </p>
//                   </div>

//                   <div className="mt-1 pt-1">
//                     <p className="text-2xl font-medium">$45,000.00</p>
//                   </div>

//                   <div className="mt-1  border-t border-gray-200"> 
//                     <div className="flex space-x-5">
//                       <div className="flex px-4 py-2 items-center gap-2"><div className='bg-gray-200 size-1 p-2'></div><h1>Bed - 4</h1></div>
//                       <div className="flex px-4 py-2 items-center gap-2 border-x"><div className='bg-gray-200 size-1 p-2'></div><h1 className=''>Bath - 4</h1></div>
//                       <div className="flex px-4 py-2 items-center gap-2"><div className='bg-gray-200 size-1 p-2'></div>Area - 1500 sqft</div>
//                     </div>
//                   </div>

//                   <div className="mt-6 pt-6 border-t border-gray-200">
//                     <button className="bg-black text-white px-6 py-2 text-sm">
//                       Inquire Now!
//                     </button>
//                   </div>
//                 </div>
//                 </div>
//               </div>

//               <div className="md:w-1/2 order-first md:order-last">
//                 <div className="bg-gray-200 w-5/6 h-[300px]" />
//               </div>
//             </div>

//             {/* Apartment 3 */}
//             <div className="flex flex-col md:flex-row gap-12 py-16 border-b border-gray-200">
//             <div className="md:w-1/2">
//               <div className="bg-gray-200 w-5/6 h-[300px]" />
//             </div>
//             <div className="md:w-1/2 relative ">
//               <div className="relative">
//                 <div className="absolute -left-[80px] top-2 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-xl">
//                   03
//                 </div>
//                 <div className="border-l border-gray-200 absolute -left-[2px] h-full top-0" />
//                 <div className='pl-10'> 
//                   <div className=''>
//                     <p className="text-sm text-gray-500">Apartments</p>
//                     <h2 className="text-2xl font-medium mt-1">Villa Berkel-Enschot</h2>
//                   </div>

//                   <div className="mt-1 pt-1 ">
//                     <p className="text-gray-600 text-sm leading-relaxed">
//                       Rapidiously myocardinate cross-platform intellectual capital model.
//                       Appropriately create interactive infrastructures
//                     </p>
//                   </div>

//                   <div className="mt-1 pt-1 pb-2">
//                     <p className="text-2xl font-medium">$45,000.00</p>
//                   </div>

//                   <div className="mt-1  border-t border-gray-200"> 
//                     <div className="flex space-x-5">
//                       <div className="flex px-4 py-2 items-center gap-2"><div className='bg-gray-200 size-1 p-2'></div><h1>Bed - 4</h1></div>
//                       <div className="flex px-4 py-2 items-center gap-2 border-x"><div className='bg-gray-200 size-1 p-2'></div><h1 className=''>Bath - 4</h1></div>
//                       <div className="flex px-4 py-2 items-center gap-2"><div className='bg-gray-200 size-1 p-2'></div>Area - 1500 sqft</div>
//                     </div>
//                   </div>

//                   <div className="mt-6 pt-6 border-t border-gray-200">
//                     <button className="bg-black text-white px-6 py-2 text-sm">
//                       Inquire Now!
//                     </button>
//                   </div>
//                   </div></div>
//               </div>
//             </div>

//             {/* Apartment 4 */}
//             <div className="flex flex-col md:flex-row gap-12 py-16 border-b border-gray-200">
//               <div className="md:w-1/2 border-r relative  order-last md:order-first">
//               <div className='pr-10'>

              
//                 <div className="relative pl-5">
//                   <div className="absolute -left-[52px] top-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-xl">
//                     04
//                   </div>

//                   <div className=''>
//                     <p className="text-sm text-gray-500">Apartments</p>
//                     <h2 className="text-2xl font-medium mt-1">Villa Berkel-Enschot</h2>
//                   </div>

//                   <div className="mt-1 pt-1">
//                     <p className="text-gray-600 text-sm leading-relaxed">
//                       Rapidiously myocardinate cross-platform intellectual capital model.
//                       Appropriately create interactive infrastructures
//                     </p>
//                   </div>

//                   <div className="mt-1 pt-1">
//                     <p className="text-2xl font-medium">$45,000.00</p>
//                   </div>

//                   <div className="mt-1  border-t border-gray-200"> 
//                     <div className="flex space-x-5">
//                       <div className="flex px-4 py-2 items-center gap-2"><div className='bg-gray-200 size-1 p-2'></div><h1>Bed - 4</h1></div>
//                       <div className="flex px-4 py-2 items-center gap-2 border-x"><div className='bg-gray-200 size-1 p-2'></div><h1 className=''>Bath - 4</h1></div>
//                       <div className="flex px-4 py-2 items-center gap-2"><div className='bg-gray-200 size-1 p-2'></div>Area - 1500 sqft</div>
//                     </div>
//                   </div>

//                   <div className="mt-6 pt-6 border-t border-gray-200">
//                     <button className="bg-black text-white px-6 py-2 text-sm">
//                       Inquire Now!
//                     </button>
//                   </div>
//                 </div>
//                 </div>
//               </div>

//               <div className="md:w-1/2 order-first md:order-last">
//                 <div className="bg-gray-200 w-5/6 h-[300px]" />
//               </div>
//             </div>
//             {/* Copy same structure for Apartment 3 and 4 */}
//           </div>
//         </div>
//       </div>
//   );
// }


'use client';

import React from 'react';

interface ApartmentCardProps {
  number: number;
  isReversed?: boolean;
}

const ApartmentCard = ({ number, isReversed = false }: ApartmentCardProps) => {
  return (
    <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'}   rounded-lg md:py-16  md:border-0 border md:border-b md:rounded-none`}>
      <div className={`w-full md:w-1/2 relative ${!isReversed ? 'md:border-r md:pr-12' : 'md:border-l md:pl-12'} md:border-gray-200  `}>
        <div className={`bg-gray-200 aspect-video md:aspect-[4/3] w-full rounded-lg`} />
        <div className="absolute top-4 left-4 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-xl z-10 md:hidden">
          {number.toString().padStart(2, '0')}
        </div>
      </div>
      
      <div className="w-full md:w-1/2 relative">
        <div className="relative p-x-4 md:pl-16">
          {/* Number indicator - hidden on mobile, visible on desktop */}
          <div className="hidden md:flex absolute left-[20px] top-0 w-12 h-12 bg-black text-white rounded-full items-center justify-center text-xl ">
            {number.toString().padStart(2, '0')}
          </div>
          
          <div className='p-4'>
            <span className="text-sm text-gray-500">Apartments</span>
            <h2 className="text-2xl font-medium mt-2">Villa Berkel-Enschot</h2>
            
            <p className="text-gray-600 text-sm leading-relaxed mt-4">
              Rapidiously myocardinate cross-platform intellectual capital model.
            </p>
            
            <p className="text-2xl font-medium mt-4">$45,000.00</p>
            
            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="grid grid-cols-2 md:flex gap-y-3">
                <Feature icon="🛏️" text="4 Beds" />
                <div className="hidden md:block w-[1px] h-6 bg-gray-200 mx-6 self-center"></div>
                <Feature icon="🚿" text="4 Baths" />
                <div className="hidden md:block w-[1px] h-6 bg-gray-200 mx-6 self-center"></div>
                <Feature icon="📐" text="1500 sqft" />
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <button className="w-full md:w-auto bg-black text-white px-8 py-3 text-sm hover:bg-gray-800 transition-colors rounded-sm">
                Inquire Now!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface FeatureProps {
  icon: string;
  text: string;
}

const Feature = ({ icon, text }: FeatureProps) => (
  <div className="flex items-center gap-2 text-sm">
    <span className="text-lg">{icon}</span>
    <span>{text}</span>
  </div>
);

export default function FeaturedApartments() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[45vh] md:h-[70vh] w-full">
        <div className="absolute inset-0 bg-black/40" />
        <div 
          className="absolute inset-0 bg-cover bg-center z-[-1]"
          style={{ backgroundImage: "url('/gallery.png')" }}
        />
        <div className="relative h-full flex items-center justify-center px-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-white font-heading text-center uppercase">
            Unit Configuration
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row gap-6 md:items-center md:justify-between mb-12">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-medium">Featured Apartments</h2>
            <p className="text-gray-600 max-w-2xl">
              Discover our selection of premium apartments designed for modern living.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="px-6 py-2.5 bg-gray-100 hover:bg-gray-200 transition-colors">
              Tower A
            </button>
            <button className="px-6 py-2.5 bg-gray-100 hover:bg-gray-200 transition-colors">
              Tower B
            </button>
          </div>
        </div>

        {/* Apartments List */}
        <div className="space-y-8">
          <ApartmentCard number={1} />
          <ApartmentCard number={2} isReversed />
          <ApartmentCard number={3} />
          <ApartmentCard number={4} isReversed />
        </div>
      </div>
    </div>
  );
}