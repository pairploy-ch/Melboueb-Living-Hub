"use client";

import React, { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer"
import {
  Heart,
  Share2,
  Plus,
  MapPin,
  Wifi,
  Droplet,
  Zap,
  Wind,
  Home,
  DoorOpen,
  Shield,
  Camera,
  Users,
  Flame,
  ArrowLeft,
} from "lucide-react";

interface PropertyDetailProps {
  propertyId?: string;
}

export default function PropertyDetail({
  propertyId = "1",
}: PropertyDetailProps) {
  const [activeTab, setActiveTab] = useState("overview");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // ข้อมูลตัวอย่าง - ในการใช้งานจริงควร fetch จาก API ตาม propertyId
  const propertyData = {
    id: propertyId,
    name: "Ozivillage Cardigan",
    location: "Melbourne",
    address: "419 Cardigan St, Carlton, VIC 3053",
    price: 330,
    currency: "AU$",
    priceUnit: "/week",
  };

  const images = [
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
    "https://www.jaypeehotels.com/blog/wp-content/uploads/2024/09/Blog-6-scaled.jpg",
    "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800",
    "https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=800",
    "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800",
  ];

  const amenities = [
    { icon: <Home size={20} />, label: "Furnished" },
    { icon: <Home size={20} />, label: "Living Area" },
    { icon: <Wind size={20} />, label: "Air Conditioner" },
    { icon: <Home size={20} />, label: "Refrigerator" },
    { icon: <DoorOpen size={20} />, label: "Balcony" },
    { icon: <Home size={20} />, label: "Bicycle storage" },
    { icon: <Home size={20} />, label: "Study Room" },
    { icon: <Home size={20} />, label: "Dryer (Coin Operated)" },
    { icon: <Home size={20} />, label: "Washing Machine (Coin Operated)" },
  ];

  const bills = [
    { icon: <Zap size={20} />, label: "Electricity Included" },
    { icon: <Droplet size={20} />, label: "Water Included" },
    { icon: <Flame size={20} />, label: "Gas Included" },
    { icon: <Wifi size={20} />, label: "WiFi" },
  ];

  const security = [
    { icon: <Shield size={20} />, label: "Secure Door Entry" },
    { icon: <Users size={20} />, label: "24/7 Security" },
    { icon: <Camera size={20} />, label: "CCTV" },
  ];

  const universities = [
    { name: "The University of Melbourne", distance: "0.27 miles walk away" },
    {
      name: "Melbourne Centre for the Study of Higher Education",
      distance: "0.27 miles walk away",
    },
    { name: "Queen's College", distance: "0.34 miles walk away" },
    {
      name: "University College - Melbourne Residential College",
      distance: "0.59 miles walk away",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <div className="bg-gray-50 my-5">
        {/* Image Gallery */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="grid grid-cols-4 gap-3 h-[500px]">
              {/* Main Image - Left side, spans 2 columns and 2 rows */}
              <div className="col-span-2 row-span-2 relative">
                <img
                  src={images[currentImageIndex]}
                  alt="Main property"
                  className="w-full h-full object-cover rounded-lg"
                />
                <button
                  onClick={() => window.history.back()}
                  className="absolute top-4 left-4 bg-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition flex items-center gap-2 shadow-md"
                >
                  <ArrowLeft size={16} />
                  Back
                </button>
              </div>

              {/* Top Right Images - 2 images side by side */}
              {images.slice(1, 3).map((img, idx) => (
                <div key={idx} className="relative">
                  <img
                    src={img}
                    alt={`Property ${idx + 2}`}
                    className="w-full h-full object-cover rounded-lg cursor-pointer hover:opacity-90 transition"
                    onClick={() => setCurrentImageIndex(idx + 1)}
                  />
                </div>
              ))}

              {/* Bottom Right Images - 2 images side by side */}
              {images.slice(3, 5).map((img, idx) => (
                <div key={idx} className="relative">
                  <img
                    src={img}
                    alt={`Property ${idx + 4}`}
                    className="w-full h-full object-cover rounded-lg cursor-pointer hover:opacity-90 transition"
                    onClick={() => setCurrentImageIndex(idx + 3)}
                  />
                  {idx === 1 && images.length > 5 && (
                    <div className="absolute inset-0 bg-black bg-opacity-60 rounded-lg flex items-center justify-center text-white font-semibold cursor-pointer hover:bg-opacity-50 transition">
                      +{images.length - 5} images
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Tabs */}
              <div className="bg-white rounded-lg shadow-sm">
     
                <div className="p-6">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row items-start justify-between mb-6 gap-4">
                    <div>
                      <h1 className="text-2xl font-bold text-gray-900 mb-2">
                        {propertyData.name}, {propertyData.location}
                      </h1>
                      <div className="flex items-center text-gray-600">
                        <MapPin size={16} className="mr-1 flex-shrink-0" />
                        <span className="text-sm">{propertyData.address}</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setIsWishlisted(!isWishlisted)}
                        className={`p-2 rounded-lg border transition ${
                          isWishlisted
                            ? "bg-red-50 border-red-300"
                            : "border-gray-300 hover:border-gray-400"
                        }`}
                        aria-label={
                          isWishlisted
                            ? "Remove from wishlist"
                            : "Add to wishlist"
                        }
                      >
                        <Heart
                          size={20}
                          className={
                            isWishlisted
                              ? "fill-red-500 text-red-500"
                              : "text-gray-600"
                          }
                        />
                      </button>
                      <button
                        className="p-2 rounded-lg border border-gray-300 hover:border-gray-400 transition"
                        aria-label="Share"
                      >
                        <Share2 size={20} className="text-gray-600" />
                      </button>
                  
                    </div>
                  </div>

                  {activeTab === "overview" && (
                    <>
                      {/* About Property */}
                      <div className="mb-6">
                        <h2 className="text-lg font-semibold mb-3">
                          About property:
                        </h2>
                        <p className="text-gray-700 leading-relaxed text-sm">
                          If your study destination is Melbourne and you are
                          looking for a place as your home for your university
                          days, Ozivillage Cardigan is the perfect place for
                          you. It will not only be in your budget but also be
                          very accessible, friendly, and with a homely vibe. Our
                          beautiful student accommodation Ozivillage Cardigan is
                          located at 419 Cardigan St, Carlton, VIC 3053, which
                          is a few steps from the University of Melbourne. We
                          are offering our place, especially to students, so
                          they will be living around students and will get an
                          educational environment, and they can easily get
                          indulged, so they will be more focused on their
                          learning and growth.
                        </p>
                      </div>

                      {/* Nearby Universities */}
                      <div className="mb-6">
                        <h2 className="text-lg font-semibold mb-3">
                          Nearby Universities:
                        </h2>
                        <p className="text-gray-700 text-sm mb-3">
                          Living around your university campus has several
                          benefits. Living around your university will give you
                          an educational and learning vibe, and you will save
                          time. Commuting from your living accommodation to your
                          study center.
                        </p>
                        <ul className="space-y-2">
                          {universities.map((uni, idx) => (
                            <li key={idx} className="flex items-start text-sm">
                              <span className="font-semibold mr-2">•</span>
                              <span>
                                <strong>{uni.name}:</strong> {uni.distance}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Amenities */}
                      <div className="mb-6">
                        <h2 className="text-lg font-semibold mb-4">
                          Amenities
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          {amenities.map((amenity, idx) => (
                            <div
                              key={idx}
                              className="flex items-center space-x-2"
                            >
                              <div className="text-gray-600">
                                {amenity.icon}
                              </div>
                              <span className="text-sm text-gray-700">
                                {amenity.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bills */}
                      <div className="mb-6">
                        <h2 className="text-lg font-semibold mb-4">
                          Your Bills (inclusive of)
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {bills.map((bill, idx) => (
                            <div
                              key={idx}
                              className="flex items-center space-x-2"
                            >
                              <div className="text-gray-600">{bill.icon}</div>
                              <span className="text-sm text-gray-700">
                                {bill.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Security */}
                      <div>
                        <h2 className="text-lg font-semibold mb-4">
                          Security & Safety
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {security.map((item, idx) => (
                            <div
                              key={idx}
                              className="flex items-center space-x-2"
                            >
                              <div className="text-gray-600">{item.icon}</div>
                              <span className="text-sm text-gray-700">
                                {item.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  {activeTab === "room types" && (
                    <div className="py-8 text-center text-gray-500">
                      <p>Room types information will be displayed here</p>
                    </div>
                  )}

                  {activeTab === "similar properties" && (
                    <div className="py-8 text-center text-gray-500">
                      <p>Similar properties will be displayed here</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column - Booking Card */}
            <div className="lg:col-span-1 order-first lg:order-last mb-6 lg:mb-0">
              <div className="bg-white rounded-lg shadow-lg p-6 lg:sticky lg:top-6">
                <div className="text-sm text-gray-600 mb-2">Starting from</div>
                <div className="text-3xl font-bold  mb-6">
                  {propertyData.currency}
                  {propertyData.price}
                  <span className="text-sm text-gray-600 font-normal">
                    {propertyData.priceUnit}
                  </span>
                </div>

          
                <button className="w-full bg-[#F8AA36] text-white py-3 rounded-lg font-semibold mb-6 hover:bg-orange-600 transition">
                  Enquire Now
                </button>

               
              </div>
            </div>
          </div>
        </div>
      </div>
        <Footer />
    </div>
  );
}
