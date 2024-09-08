// ** React Imports
import { Fragment, useContext } from "react";
// ** Icons Imports
import { List } from "react-feather";
// ** Custom Components
import Avatar from "@components/avatar";
import Timeline from "@components/timeline";
import AvatarGroup from "@components/avatar-group";
// ** Reactstrap Imports

import { Row, Col, Card, CardHeader, CardTitle, CardBody } from "reactstrap";

// ** Context
// import CardBrowserState from "../@core/components/componentsDashbord/CardBrowserState";
// import {ThemeColors } from '../views/AllUse/ThemeColors'
import { ThemeColors } from "../../utility/context/ThemeColors";

// ** Utils
import { kFormatter } from "@utils";
import Breadcrumbs from "@components/breadcrumbs";

// ** Styles
import "@styles/react/libs/charts/apex-charts.scss";
import "@styles/base/pages/dashboard-ecommerce.scss";


// ** Demo Components
import CardMedal from "../../@core/components/componentsDashbord/CardMedal";
import StatsCardHome from "../../@core/components/componentsDashbord/StatsCardHome";
import CardMeetup from "../../@core/components/componentsDashbord/CardMeetup";
import CompanyTable from "../../@core/components/componentsDashbord/CompanyTable";
import CompanyTable2 from "../../@core/components/componentsDashbord/CompanyTable2";
// import SupportTracker from "../../@core/components/componentsDashbord/SupportTracker";
import SupportTrackercopy from "../../@core/components/componentsDashbord/SupportTrackercopy";
// import AllListUser from "../../@core/components/componentsDashbord/AllListUser";
import ListTeacherBahrAcavemi from "../../@core/components/componentsDashbord/ListTeacherBahrAcavemi";
import SupportTrackerUser from "../../@core/components/componentsDashbord/SupportTrackerUser";
// import SupportTracker from './componentsDashbord/SupportTracker'

const Home = () => {
  // ** Context
  const { colors } = useContext(ThemeColors);


  // ** vars
  const trackBgColor = "#e9ecef";
  return (
      <div id="dashboard-ecommerce">
        {/* <Breadcrumbs title='Analytics Cards' data={[{ title: 'Cards' }, { title: 'Analytics Actions' }]} /> */}
        <Row className="match-height">
          <Col xl="3" md="6" xs="12">
            <CardMedal />
          </Col>
          <Col xl="9" md="6" xs="12">
            <StatsCardHome cols={{ xl: "3", sm: "6" }} />
          </Col>
        </Row>
      
        <Row className="match-height">
          {/* <Col lg="6" xs="12"> */}
            {/* <CompanyTable /> */}
            {/* <CompanyTable2/> */}
            {/* <ListTeacherBahrAcavemi/> */}
          {/* </Col> */}
          {/* <Col lg="6" md="6" xs="12"> */}
            {/* <CardMeetup /> */}
            {/* <AllListUser/> */}
          {/* </Col> */}
          <Col lg="6" xs="12">
            <SupportTrackerUser
              primary={colors.primary.main}
              danger={colors.danger.main}
            />
          </Col>
            {/* <SupportTracker  */}
          <Col lg="6" xs="12">
            <SupportTrackercopy
              primary={colors.primary.main}
              danger={colors.danger.main}
            />
          </Col>

        </Row>
      
      </div>
   
  );
};

export default Home;
