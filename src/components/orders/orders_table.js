import React from 'react';

class OrdersTable extends React.Component {
  render() {
    return (
      <table className='orders-table'>
        <thead>
          <tr>
            <th>Order #</th>
            <th>Customer</th>
            <th className='sorted-by'>Ordered at</th>
            <th>Product(s)</th>
            <th className='amount'>Amount</th>
            <th className='status'>Payment status</th>
            <th className='status'>Order status</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    );
  }
}

export default OrdersTable;