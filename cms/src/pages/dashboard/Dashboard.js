import React, { Component } from 'react'
import {
  CCardGroup,
  CWidgetProgressIcon,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import * as networks from '../../networks';

class Dashboard extends Component {
  state = {
    dashboardInfo: {
      totalCusomer: 0,
      totalProduct: 0,
      totalOrder: 0,
      totalPendingOrder: 0,
    }
  }

  async componentDidMount() {
    try {
      const dashboardInfo = await networks.getDashboardInfos();
      if (dashboardInfo.data && dashboardInfo.data.data) {
        this.setState({ dashboardInfo: dashboardInfo.data.data });
      }
    } catch (error) {

    }
  }

  render() {
    const { totalCusomer, totalOrder, totalPendingOrder, totalProduct } = this.state.dashboardInfo;

    return (
      <CCardGroup className="mb-4">
        <CWidgetProgressIcon
          header={`${totalCusomer}`}
          text="Khách hàng"
          color="gradient-info"
          value={100}
          inverse
        >
          <CIcon name="cil-people" height="36" />
        </CWidgetProgressIcon>
        <CWidgetProgressIcon
          header={`${totalProduct}`}
          text="Sản phẩm"
          color="gradient-warning"
          value={100}
          inverse
        >
          <CIcon name="cil-basket" height="36" />
        </CWidgetProgressIcon>
        <CWidgetProgressIcon
          header={`${totalOrder}`}
          text="Đơn hàng"
          color="gradient-primary"
          value={100}
          inverse
        >
          <CIcon name="cil-chartPie" height="36" />
        </CWidgetProgressIcon>
        <CWidgetProgressIcon
          header={`${totalPendingOrder}`}
          text="Đơn hàng chờ xử lý"
          color="gradient-danger"
          value={100}
          inverse
        >
          <CIcon name="cil-speedometer" height="36" />
        </CWidgetProgressIcon>
      </CCardGroup>
    )
  }
}


export default Dashboard
