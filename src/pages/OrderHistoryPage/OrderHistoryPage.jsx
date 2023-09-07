import { useState, useEffect, useRef } from 'react';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import OrderList from '../../components/OrderList/OrderList';
import Logo from '../../components/Logo/Logo';
import { Link, useNavigate } from 'react-router-dom';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import "./OrderHistory.css" 
import * as orderAPI from "../../utilities/orders-api";

export default function OrderHistoryPage({ user, setUser }) {
  // if (!order) return null;
  const [activeOrder, setActiveOrder] = useState(null);
  const [order, setOrder] = useState([]);
  useEffect (function() {
    async function getOrder() {
      const order = await orderAPI.getAllOrders()
        setActiveOrder(order[0] || null );
        setOrder(order);
    }
    getOrder();
  }, []);


  // const lineItems = order.lineItems.map(item =>
  //   <LineItem
  //     lineItem={item}
  //     isPaid={order.isPaid}
  //     handleChangeQty={handleChangeQty}
  //     key={item._id}
  //     order={order}
  //   />
  // );
  return (
   

    <main className="OrderHistoryPage">
      <aside>
        <Logo />
        
        <Link to="/orders/new" className="button btn-sm">New Order</Link>
        <UserLogOut user={user} setUser={setUser} />
        </aside>
        <OrderList order={order}/>
        <OrderDetail activeOrder={activeOrder} /> 
        {/* {order.isPaid ?
          <span>ORDER <span className="smaller">{order.orderId}</span></span>
          :
          <span>NEW ORDER</span>
        }
        <span>{new Date(order.updatedAt).toLocaleDateString()}</span> */}
    </main>
  );
}
 

 // <main className="OrderHistoryPage">
    //   <aside>
    //     <Logo />
        
    //     <Link to="/orders" className="button btn-sm">New Order</Link>
    //     <UserLogOut user={user} setUser={setUser} />
    //     </aside>
    //     <OrderList />
    //     <OrderDetail order={cart} handleChangeQty={handleChangeQty} handleCheckout={handleCheckout} />
    // </main>