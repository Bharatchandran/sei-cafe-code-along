import './OrderList.css';
import MenuListItem from '../MenuListItem/MenuListItem';
import OrderListItem from '../OrderListItem/OrderListItem';

export default function OrderList({ order }) {
   const orderListItem = order.map ( el => <OrderListItem orderItem={el} /> )  
      return (
        <div>
            {orderListItem}

        </div>
      );
     
    }