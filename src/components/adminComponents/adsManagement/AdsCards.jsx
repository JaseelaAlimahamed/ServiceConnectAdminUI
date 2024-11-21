import React from "react";
import Card from "../../reUsableComponents/Card";
import { fetchAdData } from "../../../service/api/admin/GetApi";
import { useState, useEffect } from "react";

function AdsCards() {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchAdData();
      setData(response);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 sm:gap-4 md:gap-2 w-full px-4 justify-items-center sm:justify-items-stretch mb-4">
        {data && (
          <Card
            variant="ads"
            heading="Total Ads"
            title={data.total_ads.toString()}
            subtitle=" than last month"
            percent="+10%"
            iconBg="bg-dark_blue"
          />
        )}
        {data && (
          <Card
            variant="ads"
            heading="Total Ads Revenue"
            title={data.total_revenue.toString()}
            subtitle=" than last month"
            percent="-0.5%"
            iconBg="bg-orange"
          />
        )}

        <Card
          variant="ads"
          heading="Boosted Profile"
          title="932"
          subtitle=" than last month"
          percent="-0.6%"
          iconBg="bg-dark_blue"
        />
        <Card
          variant="ads"
          heading="Other Ads"
          title="754"
          subtitle=" than last month"
          percent="-0.6%"
          iconBg="bg-orange"
        />
      </div>
    </>
  );
}

export default AdsCards;
