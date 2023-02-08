import React, { useState } from "react";
import { RatingData } from "./RatingData";
import { Rating } from "./Rating";
import { FaHome } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";
import { TbCurrencyNaira } from "react-icons/tb";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { BsPlusLg } from "react-icons/bs";
import { ActiveSellerData } from "../../Assets/ActiveSellerData";

import { MdArrowForwardIos } from "react-icons/md";

export const ProductForm = () => {
  const options = {
    responsiveClass: true,
    autoplay: true,

    responsive: {
      0: {
        items: 2,
        nav: false,
      },
      400: {
        items: 2,
        nav: false,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  };

  return (
    <div className="container mx-auto px-6 mt-6">
      <div className="w-full flex justify-between items-center md:flex-row flex-col">
        <div className="md:w-[25%] md:mb-0 mb-4">
          <div className="rounded-full w-32 bg-red-200 border-4 border-purple-300">
            <img
              src="images/hammed.png"
              alt="boy-image"
              className="rounded-full w-32"
            />
          </div>
          <h2 className="font-semibold">Hammed joshua</h2>
          <p>Frontend Development</p>
          {RatingData.map((product) => {
            return (
              <Rating value={product.rating} text={`${product.numReviews}`} />
            );
          })}
        </div>
        <div className="md:w-[80%]">
          <div className="w-full mb-6 lg:flex hidden   bg-white p-6  rounded-lg drop-shadow-lg justify-between items-center gap-2 ">
            <button className="px-12 text-cardWhite  py-3 rounded-lg bg-purpleBg">
              Product of the Day{" "}
            </button>
            <p className="font-semibold">
              Find and recruit 20 Resellers, Each Paying N200,000 Monthly.
            </p>
            <button className="px-8 py-3 rounded-full text-cardWhite  bg-gray-600">
              Grab the deal
            </button>
          </div>
          <div className="flex gap-1 text-textGray items-center">
            <FaHome />
            <h6>
              <a href="#">Manage your account</a>
            </h6>
            <MdOutlineKeyboardArrowRight />
            <h6>
              <a href="#">Manage Products</a>
            </h6>
            <MdOutlineKeyboardArrowRight />
            <h6>
              <a href="#">Edit Product</a>
            </h6>
          </div>
          <div className="flex gap-6 mt-6 items-center">
            <h1 className="text-2xl font-semibold">Edit Product</h1>
            <FaPencilAlt className="text-purpleBg text-2xl  " />
          </div>
        </div>
      </div>

      <div className="flex md:flex-row flex-col md:gap-0 gap-2 justify-center  md:mt-20 mt-6 items-center  ">
        <h1 className="bg-lightGray rounded-full md:px-24 px-8 py-4 font-bold text-purpleBg">
          STEP 1 : ABOUT PRODUCT
        </h1>
        <h1 className="bg-purpleBg md:-ml-12 text-white rounded-full font-bold md:px-24 px-8 py-4 md:w-auto w-full text-center">
          STEP 2 : OTHER DETAILS
        </h1>
      </div>

      {/* form section */}
      <form action="#" className="md:mt-20 mt-12">
        <div className="flex md:flex-row md:gap-8 gap-8 flex-col items-center md:mb-12 mb-6">
          <div className="md:w-1/2 w-full relative ">
            <label
              htmlFor="name"
              className="text-purpleBg w-auto px-2 text-center absolute bottom-11 bg-cardWhite  ml-12 font-bold text-2xl "
            >
              Title *
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="border-2 block w-full rounded-full border-black h-16 md:px-12 p-6 outline-purpleBg"
            />
          </div>
          <div className="md:w-1/2 w-full relative ">
            <label
              htmlFor="name"
              className="text-purpleBg w-auto px-2 text-center absolute bottom-11 bg-cardWhite  ml-12 font-bold text-2xl "
            >
              Brand *
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="border-2 block border-black h-16 w-full rounded-full md:px-12 p-6 outline-purpleBg"
            />
          </div>
        </div>
        <div className="flex md:flex-row gap-8 flex-col items-center md:mb-12 mb-6">
          <div className="md:w-1/2 w-full relative">
            <label
              htmlFor="name"
              className="text-purpleBg w-auto text-center absolute bottom-11 bg-white  ml-12 font-bold text-2xl px-2"
            >
              Color *
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="border-2 block w-full rounded-full border-black h-16 md:px-12 px-6 py-6 outline-purpleBg"
            />
          </div>
          <div className="md:w-1/2 w-full relative ">
            <label
              htmlFor="name"
              className="text-purpleBg w-auto text-center absolute bottom-11 bg-white  ml-12 font-bold text-2xl px-2 "
            >
              Condition *
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="border-2 block border-black h-16 w-full rounded-full md:px-12 py-6 px-6 outline-purpleBg"
            />
          </div>
        </div>
        <div className="flex md:flex-row gap-8 flex-col items-center md:mb-12 mb-6">
          <div className="md:w-1/2 w-full relative">
            <label
              htmlFor="name"
              className="text-purpleBg w-auto text-center absolute bottom-11 bg-white  ml-12 font-bold text-2xl px-2 "
            >
              Pattern *
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="border-2 block w-full rounded-full border-black h-16 md:px-12 p-6 outline-purpleBg"
            />
          </div>
          <div className="md:w-1/2 w-full relative ">
            <label
              htmlFor="price"
              className="text-purpleBg w-auto text-center absolute bottom-11 bg-white  ml-12 font-bold px-2 text-2xl "
            >
              Price *
            </label>
            <TbCurrencyNaira className="absolute  top-0 h-16 text-4xl w-12 rounded-l-full px-2 left-0 border-2 border-black bg-purple-400" />
            <input
              type="number"
              name="price"
              id="price"
              className="border-2 block border-black h-16 w-full rounded-full p-6 md:px-12  outline-purpleBg"
            />
          </div>
        </div>
      </form>

      {/* active carousel */}

      <div className="container mx-auto md:mb-10 mb-6 ">
        <h1 className="font-semibold text-xl mb-3">Active Resellers :</h1>
        <div
          className="lg:max-w-[1020px] md:max-w-[600px] max-w-[300px]  mx-auto relative
          "
        >
          <OwlCarousel
            items={2}
            className="owl-theme owl-carousel "
            loop
            nav
            navText={[
              '<i class="fas fa-arrow-left"></i>',
              '<i class="fas fa-arrow-right"></i>',
            ]}
            margin={8}
            {...options}
          >
            {ActiveSellerData.map((sellerData) => {
              return (
                <div className="rounded-full w-32 relative  flex justify-center items-center  bg-red-200 border-4 border-purple-300">
                  <div className="w-4 h-4 rounded-full  justify-center bg-white  flex items-center right-0 top-6 absolute ">
                    <div className="w-2 h-2  bg-green-500  text-green-500  rounded-full"></div>
                  </div>

                  <img
                    src={sellerData.image}
                    alt="boy-image"
                    className="rounded-full  items-center"
                  />
                </div>
              );
            })}
          </OwlCarousel>
        </div>
        {/* assin reseller */}
        <div className="mt-10 flex items-center gap-8 ">
          <h1 className="font-semibold text-xl">Assign Resellers *</h1>
          <div className="border-8 border-purple-200 rounded-full">
            <button className="p-6 rounded-full  product">
              <BsPlusLg className="text-2xl text-purpleBg font-semibold" />
            </button>
          </div>
        </div>
      </div>
      {/* Lauch button */}
      <div className="mb-10">
        <button className="py-4 md:px-24 px-6 md:w-auto w-full bg-darkPurple text-white font-semibold rounded-full">
          LAUNCH PRODUCT
        </button>
      </div>
    </div>
  );
};
