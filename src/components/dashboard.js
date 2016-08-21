import React from 'react';
import DashboardStore from '../stores/dashboard_store';
import DashboardActions from '../actions/dashboard_actions';
import SalesChart from './sales_chart';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = DashboardStore.getState();
  }

  componentDidMount() {
    DashboadStore.listen(this.onChange);
    DashboardActions.fetchSalesStats();
  }

  componentWillMount() {
    DashboardStore.unlisten(this.onChange);
  }

  componentWillUnmount() {
    DashboardStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    return (
      <div className='dashboad'>
        <h1>Dashboard</h1>
        <SalesChart salesStats={this.state.salesStats}/>
      </div>
    );
  }
}

export default Dashboard;