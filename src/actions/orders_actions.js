import alt from '../alt';

class OrdersActions {
	updateOreder(orders) {
		this.dispatch(orders);
	}
}

export default alt.createActions(OrdersActions);
