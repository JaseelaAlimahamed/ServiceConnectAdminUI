import CardItems from '../../../src/components/adminComponents/financeComponents/CardItems'
import BalanceAnalytics from "../../components/adminComponents/financeComponents/BalanceAnalytics";
import TableItems from '../../components/adminComponents/financeComponents/TableItems';

  
const Finance = () => {
  return (
    <div className='flex flex-col gap-4'>
        <CardItems />
        <BalanceAnalytics />
        <TableItems />
    </div>
  )
}

export default Finance
