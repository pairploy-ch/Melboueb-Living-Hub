"use client";

import { useState } from "react";
import {
  Search,
  Home,
  Building2,
  Building,
  MapPin,
  Grid3x3,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext"

const propertyTypes = [
  { icon: Home, label: "House" },
  { icon: Building2, label: "Town house" },
  { icon: Building, label: "Condominium" },
  { icon: MapPin, label: "Land" },
  { icon: Grid3x3, label: "Other" },
];

const allProperties = [
  {
    image:
      "https://cdn.homeandmoney.com/wp-content/uploads/2021/07/29120324/HAM_BuyingACondo_FeaturedImg.jpg",
    badge: "Hot Deal",
    type: "Condo",
    title: "Ozivillage Cardigan",
    location: "419 Cardigan St, Carlton, VIC 3053",
    price: "AU$330/week",
    units: "28 fl.",
    roomSize: "",
  },
    {
    image:
      "https://cdn.homeandmoney.com/wp-content/uploads/2021/07/29120324/HAM_BuyingACondo_FeaturedImg.jpg",
    badge: "Hot Deal",
    type: "Condo",
    title: "Ozivillage Cardigan",
    location: "419 Cardigan St, Carlton, VIC 3053",
    price: "AU$330/week",
    units: "28 fl.",
    roomSize: "",
  },
    {
    image:
      "https://cdn.homeandmoney.com/wp-content/uploads/2021/07/29120324/HAM_BuyingACondo_FeaturedImg.jpg",
    badge: "Hot Deal",
    type: "Condo",
    title: "Ozivillage Cardigan",
    location: "419 Cardigan St, Carlton, VIC 3053",
    price: "AU$330/week",
    units: "28 fl.",
    roomSize: "",
  },
    {
    image:
      "https://cdn.homeandmoney.com/wp-content/uploads/2021/07/29120324/HAM_BuyingACondo_FeaturedImg.jpg",
    badge: "Hot Deal",
    type: "Condo",
    title: "Ozivillage Cardigan",
    location: "419 Cardigan St, Carlton, VIC 3053",
    price: "AU$330/week",
    units: "28 fl.",
    roomSize: "",
  },
    {
    image:
      "https://cdn.homeandmoney.com/wp-content/uploads/2021/07/29120324/HAM_BuyingACondo_FeaturedImg.jpg",
    badge: "Hot Deal",
    type: "Condo",
    title: "Ozivillage Cardigan",
    location: "419 Cardigan St, Carlton, VIC 3053",
    price: "AU$330/week",
    units: "28 fl.",
    roomSize: "",
  },
    {
    image:
      "https://cdn.homeandmoney.com/wp-content/uploads/2021/07/29120324/HAM_BuyingACondo_FeaturedImg.jpg",
    badge: "Hot Deal",
    type: "Condo",
    title: "Ozivillage Cardigan",
    location: "419 Cardigan St, Carlton, VIC 3053",
    price: "AU$330/week",
    units: "28 fl.",
    roomSize: "",
  },
    {
    image:
      "https://cdn.homeandmoney.com/wp-content/uploads/2021/07/29120324/HAM_BuyingACondo_FeaturedImg.jpg",
    badge: "Hot Deal",
    type: "Condo",
    title: "Ozivillage Cardigan",
    location: "419 Cardigan St, Carlton, VIC 3053",
    price: "AU$330/week",
    units: "28 fl.",
    roomSize: "",
  },
    {
    image:
      "https://cdn.homeandmoney.com/wp-content/uploads/2021/07/29120324/HAM_BuyingACondo_FeaturedImg.jpg",
    badge: "Hot Deal",
    type: "Condo",
    title: "Ozivillage Cardigan",
    location: "419 Cardigan St, Carlton, VIC 3053",
    price: "AU$330/week",
    units: "28 fl.",
    roomSize: "",
  },
    {
    image:
      "https://cdn.homeandmoney.com/wp-content/uploads/2021/07/29120324/HAM_BuyingACondo_FeaturedImg.jpg",
    badge: "Hot Deal",
    type: "Condo",
    title: "Ozivillage Cardigan",
    location: "419 Cardigan St, Carlton, VIC 3053",
    price: "AU$330/week",
    units: "28 fl.",
    roomSize: "",
  },
    {
    image:
      "https://cdn.homeandmoney.com/wp-content/uploads/2021/07/29120324/HAM_BuyingACondo_FeaturedImg.jpg",
    badge: "Hot Deal",
    type: "Condo",
    title: "Ozivillage Cardigan",
    location: "419 Cardigan St, Carlton, VIC 3053",
    price: "AU$330/week",
    units: "28 fl.",
    roomSize: "",
  },
];

export function PropertySearchHero() {
    const {  t } = useLanguage()
 const [propertyType, setPropertyType] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: "+66",
    phone: "",
    university: "",
  });
  const router = useRouter();
  const propertiesPerPage = 8;
  const totalPages = Math.ceil(allProperties.length / propertiesPerPage);
  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = allProperties.slice(
    indexOfFirstProperty,
    indexOfLastProperty
  );

  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const goToPreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const openModal = (property:any) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProperty(null);
    setFormData({
      fullName: "",
      email: "",
      countryCode: "+66",
      phone: "",
      university: "",
    });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone || !formData.university) {
      alert("Please fill in all required fields");
      return;
    }
    console.log("Form submitted:", formData, selectedProperty);
    alert("Thank you for your enquiry! We will contact you soon.");
    closeModal();
  };

  const handleInputChange = (field:any, value:any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section className="relative overflow-hidden">
      <div className="bg-gradient-to-br from-[#5B9BD5] via-[#4A8BC2] to-[#3A7AB0]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -left-20 top-0 w-96 h-96 bg-[#FFC466] rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -right-20 bottom-0 w-96 h-96 bg-[#D88A20] rounded-full opacity-20 blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <img
                src={"/logo-bm.png"}
                className="w-[300px] h-full object-cover "
              />
            </div>
            <h2 className="text-xl md:text-3xl text-white font-normal mb-8">
              {t.hero.headline}
            </h2>
                <p className="text-white mb-6 text-center text-md md:text-xl">
              {t.hero.description}
            </p>
          </div>

          {/* <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8">
            <p className="text-gray-600 mb-6 text-center">
              Supporting international students and families transitioning into
              life in Melbourne and all across Australia—with clarity, care, and
              confidence.
            </p>

            <div className="flex flex-col md:flex-row gap-4">
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600 bg-white"
              >
                <option value="">Choose PropertyType</option>
                <option value="house">House</option>
                <option value="townhouse">Town house</option>
                <option value="condo">Condominium</option>
                <option value="land">Land</option>
                <option value="other">Other</option>
              </select>

              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600 bg-white"
              >
                <option value="">All Price Range</option>
                <option value="0-500k">$0 - $500k</option>
                <option value="500k-1m">$500k - $1M</option>
                <option value="1m-2m">$1M - $2M</option>
                <option value="2m+">$2M+</option>
              </select>

              <div className="flex-[2] relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search Zone, School"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button className="px-8 py-3 bg-[#5B9BD5] hover:bg-[#4A8BC2] text-white font-semibold rounded-lg transition-colors shadow-md">
                Search
              </button>
            </div>
          </div> */}

          {/* <div className="bg-white rounded-2xl shadow-2xl p-6 mb-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {propertyTypes.map((type, index) => {
                const IconComponent = type.icon;
                return (
                  <button
                    key={index}
                    className="flex flex-col items-center justify-center p-6 hover:bg-gray-50 rounded-lg transition-colors group"
                  >
                    <IconComponent className="w-12 h-12 text-gray-400 group-hover:text-[#5B9BD5] transition-colors mb-3 stroke-[1.5]" />
                    <span className="text-gray-700 font-medium text-sm">
                      {type.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div> */}
        </div>
      </div>
      {/* <div className="bg-[#faf7f2]">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 ">
        
          <div id="Accommodation" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {currentProperties.map((property, index) => (
              <div
              onClick={() => router.push("/accommodation/1")}
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={property.image || "/placeholder.svg"}
                    alt={property.title}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="bg-[#F8AA36] text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {property.badge}
                    </span>
                    <span className="bg-white text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">
                      {property.type}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-1 truncate">
                    {property.title}
                  </h3>
                  <div className="flex">
                    <MapPin className="w-4 h-4 mr-1" />
                    <p className="text-sm text-gray-500 mb-3">
                      {property.location}
                    </p>
                  </div>

                  <p
                    className={`font-semibold mb-3 text-gray-700`}
                  >
                    {property.price}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Building className="w-4 h-4" />
                      <span>{property.units}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <button onClick={openModal} className="px-4 py-2 bg-[#5B9BD5] hover:bg-[#4A8BC2] text-white font-semibold rounded-lg transition-colors shadow-md">
                        Enquire Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="lg"
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className="bg-white text-[#5B9BD5] border-2 border-white hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Previous
            </Button>

            <div className="flex items-center gap-2  font-semibold bg-white/20 px-6 py-3 rounded-lg">
              <span className="text-lg">{currentPage}</span>
              <span className="text-sm opacity-75">of</span>
              <span className="text-lg">{totalPages}</span>
            </div>

            <Button
              variant="outline"
              size="lg"
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className="bg-white text-[#5B9BD5] border-2 border-white hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div> */}
     {/* {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/70 bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800">
                    You've made a great choice
                  </h2>
                  <p className="text-sm text-gray-500">Get in touch with us</p>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-4">
            
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) =>
                      handleInputChange("fullName", e.target.value)
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B9BD5]"
                    placeholder="Enter your full name"
                  />
                </div>

              
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B9BD5]"
                    placeholder="Enter your email"
                  />
                </div>

           
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number<span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-2">
                    <select
                      value={formData.countryCode}
                      onChange={(e) =>
                        handleInputChange("countryCode", e.target.value)
                      }
                      className="px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B9BD5] bg-white"
                    >
                      <option value="+66">🇹🇭 +66</option>
                      <option value="+61">🇦🇺 +61</option>
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+44">🇬🇧 +44</option>
                      <option value="+86">🇨🇳 +86</option>
                    </select>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B9BD5]"
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>

             

                <button
                  onClick={handleSubmit}
                  className="w-full py-4 bg-[#5B9BD5]  text-white font-semibold rounded-lg transition-colors shadow-lg text-lg"
                >
                  Contact Us
                </button>

                <p className="text-xs text-center text-gray-500">
                  By submitting, you agree to our{" "}
                  <a
                    href="#"
                    className="text-[#5B9BD5] underline hover:text-[#4A8BC2]"
                  >
                    Terms & Conditions
                  </a>
                  , and{" "}
                  <a
                    href="#"
                    className="text-[#5B9BD5] underline hover:text-[#4A8BC2]"
                  >
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      )} */}
    </section>
  );
}
