import parseOrders from './parse_orders';
import Immutable from 'immutable';

const OrdersFetcher = {
	fetch() {
		return fetch('/orders.json')
			.then((resp) => resp.json())
			.then(parseOrders)
      .then((orders) => Immutable.fromJS(orders));
	}	
};

export default OrdersFetcher;