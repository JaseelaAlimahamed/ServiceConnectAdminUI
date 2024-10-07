import React, { useState } from "react";
import ServiceTypeButton from "../serviceType/ServiceTypeButton";
import { FiEdit } from "react-icons/fi";
import Card from "../../ReUsableComponents/Card";

function AdsCategory() {
  const [selectedAdType, setSelectedAdType] = useState("");

  const handleServiceTypeClick = (type) => {
    setSelectedAdType(type);
  };

  const cardsData = [
    { variant: "adstype", type: "Card Ad", title: 'Title', ad_id: "Ad ID", views: "420", hits: "50" },
    { variant: "adstype", type: "Banner Ad", title: 'Title', ad_id: "Ad ID", views: "420", hits: "50" },
    { variant: "adstype", type: "Popup Ad", title: 'Title', ad_id: "Ad ID", views: "420", hits: "50" },
    { variant: "adstype", type: "Card Ad", title: 'Title', ad_id: "Ad ID", views: "420", hits: "50" },
    { variant: "adstype", type: "Card Ad", title: 'Title', ad_id: "Ad ID", views: "420", hits: "50" },
    { variant: "adstype", type: "Card Ad", title: 'Title', ad_id: "Ad ID", views: "420", hits: "50" },
    { variant: "adstype", type: "Card Ad", title: 'Title', ad_id: "Ad ID", views: "420", hits: "50" },

  ];

  const filteredCards = selectedAdType
    ? cardsData.filter((card) => card.type === selectedAdType)
    : cardsData;

  return (
    <>
      <div className="flex justify-between gap-4 max-xl:flex-wrap p-4 w-full pt-5">
        <div className="bg-white w-[24rem] h-[51rem] flex flex-col gap-5 max-sm:w-full max-sm:h-fit rounded-[20px]">
          <div className="flex gap-[3rem] items-center">
            <h1 className="font-poppins text-4xl font-bold text-dark_blue px-2 py-4">
              Ad Category
            </h1>
            <FiEdit size={"2.5rem"} />
          </div>
          <div className="flex flex-col gap-3 items-center p-2 ">
            <ServiceTypeButton variant={"add"} onClick={() => handleServiceTypeClick("Banner Ad")}>
              Banner Ad
            </ServiceTypeButton>
            <ServiceTypeButton variant={"add"} onClick={() => handleServiceTypeClick("Card Ad")}>
              Card Ad
            </ServiceTypeButton>
            <ServiceTypeButton variant={"add"} onClick={() => handleServiceTypeClick("Popup Ad")}>
              Popup Ad
            </ServiceTypeButton>
            <ServiceTypeButton variant={"add"} onClick={() => handleServiceTypeClick("Boost Profile")}>
              Boost Profile
            </ServiceTypeButton>
          </div>
        </div>
        <div className="bg-white min-h-[51rem] rounded-[20px] flex-grow">
          <div className="flex gap-2 justify-end p-2  ">
            <select
              name="sort"
              id="sort"
              className="rounded-[2.5rem] font-normal px-10 max-sm:px-5 py-2 text-violet
          border-2 border-violet text-lg p-2 bg-primary"
            >
              <option disabled="disabled" selected="selected">
                Sort
              </option>
              <option value="option1">Option1</option>
            </select>
            <select
              name="addnew"
              id="addnew"
              className="rounded-[2.5rem] font-normal px-10 max-sm:px-5 py-2 text-primary
          border-2 border-violet text-lg p-2 bg-violet"
            >
              <option disabled="disabled" selected="selected">
                Add New
              </option>
              <option value="option1">Option1</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-5 p-6 justify-items-center max-md:grid-cols-1">
            {filteredCards.map((card, index) => (
              <Card
                key={index}
                variant={card.variant}
                type={card.type}
                title={card.title}
                ad_id={card.ad_id}
                views={card.views}
                hits={card.hits}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AdsCategory;
