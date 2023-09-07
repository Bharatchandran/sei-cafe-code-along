import "./OrderListItem.css"

export default function({ orderItem }) {
    const listItem = orderItem.lineItems.map(el =>  <h1>{el.item}</h1>)
    return (
        <div className="OrderListItem">
            <div className="name">
            Order Id:{orderItem._id.slice(-6).toUpperCase()}
            <br/>
            {new Date(orderItem.createdAt).toLocaleDateString()}
            <br/>
            </div>
            <div>
            ${orderItem.orderTotal.toFixed(2)}
            <br/>
            {orderItem.totalQty} {orderItem.totalQty > 1 ? "items" : "item"}
            </div>
         
        </div>
        
        
      );
}