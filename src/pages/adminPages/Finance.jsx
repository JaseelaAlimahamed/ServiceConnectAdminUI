import CardItems from '../../../src/components/adminComponents/financeComponents/CardItems'
import BalanceAnalytics from "../../components/adminComponents/financeComponents/BalanceAnalytics";
import TableItems from '../../components/adminComponents/financeComponents/TableItems';

  
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
