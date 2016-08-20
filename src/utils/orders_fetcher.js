const OrdersFetcher {
	fetch() {
		return fetch('/orders.json')
			.then((resp) => resp.json())
			.then(parseOrders);
	}	
}

export default OrdersFetcher;
