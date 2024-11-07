import BalanceAnalytics from "../../components/commonComponents/Finanace/BalanceAnalytics"
import CardItems from "../../components/commonComponents/Finanace/Finance"
import TableItems from "../../components/commonComponents/Finanace/TableItems"

  
const Finance = () => {
  return (
    <div className='flex flex-col gap-3 px-3'>
        <CardItems />
        <BalanceAnalytics />
        <TableItems />
    </div>
  )
}

export default Finance
