import React from 'react'
import Card from '../../ReUsableComponents/Card'

function AdsCards() {
  return (
    <>
    <div className="flex flex-wrap xl:justify-between w-full px-6 pb-10 justify-around gap-2">
          <Card
            variant="ads"
            heading="Total Ads"
            title="932"
            subtitle=" than last month"
            percent="+10%"
            iconBg="bg-dark_blue"
          />
          <Card
            variant="ads"
            heading="Total Ads Revenue"
            title="932"
            subtitle=" than last month"
            percent="-0.5%"
            iconBg="bg-orange"
          />
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
  )
}

export default AdsCards