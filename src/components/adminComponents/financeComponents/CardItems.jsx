import Card from '../../reUsableComponents/Card'
import CardWithChart from "./cardWithChart/Card"
  
const CardItems = () => {
    const value = [0, 2, 1, 3, 2, 4];

  return (
    <div className='flex flex-row gap-2'>
        <Card 
            variant="ads"
            heading="Revenue"
            title="932"
            subtitle=" than last month"
            percent="+10%" 
            iconBg="bg-lite_blue"
        /> 
        <Card 
            variant="ads"
            heading="Expense"
            title="754"
            subtitle=" than last month"
            percent="-0.5%" 
            iconBg="bg-lite_red" 
        />
        <CardWithChart
            variant="adsChart"
            heading="Earnings"
            title="123,456"
            values={value}
            subtitle=" than last month"
            percent="+23%"
            iconBg="bg-yellow"
        />
    </div>
  )
}

export default CardItems
