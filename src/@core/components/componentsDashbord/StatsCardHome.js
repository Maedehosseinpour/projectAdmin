// ** Third Party Components
import classnames from "classnames";
import { User, UserPlus, UserCheck, UserX, Link ,Database,Layers} from 'react-feather'
import { useNavigate } from "react-router-dom";
import {useLocation} from 'react-router-dom'
import { useQuery } from 'react-query'
import http from '../../core/services/interceptore'
// import { UserPlus, UserCheck, UserX } from 'react-feather'
// import StatsHorizontal from "../../../@core/components/widgets/stats/StatsHorizontal";

// ** Custom Components
import Avatar from "@components/avatar";

// ** Reactstrap Imports
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardText,
  Row,
  Col,
} from "reactstrap";
import { useState } from "react";

const 








StatsCardHome = ({ cols }) => {

  // ***************
  const {data: siteStats, status} = useQuery("siteStats", () =>  http.get(`/Home/LandingReport`))
  const navigate = useNavigate()
// *************DATA*****************
  const data = [
    {
      title: "تعداد استاد",
      subtitle: siteStats?.teacherCount,
      color: "light-primary",
      href: '/AllTeacherTab2',
      icon: <User size={24} />,
      activ:false,
      // icon: <TrendingUp size={24} />
    },
    {
      title: "تعداد دانشجویان",
      subtitle: siteStats?.studentCount,
      color: "light-danger",
      href: '/AllStudentTab3',
      activ:false,
      icon: <User size={24} />,
    },
    {
      title: "تعداد دوره ها",
      subtitle: siteStats?.courseCount,
      color: "light-info",
      href: "/Curses/ListCurses",
      activ:false,
      icon: <Database size={24} />,
    },
    {
      title: "اخبار",
      subtitle: siteStats?.newsCount,
      color: "light-success",
      activ:false,
      href: "/NewsPage/NewsList",
      icon: <Layers size={24} />,

    },
  ];

  // **************VARIABLE****************

  const navigat = useNavigate();
  const pathName2 = useLocation();
  // const pathname = window?.pathname

 
  
  

  // **************FUNCTION*************


  const renderData = () => {
    return data.map((item , index) => {
  
      const colMargin = Object.keys(cols);
      const margin = index === 2 ? "sm" : colMargin[0];
      return (
        <Col
          key={index}
     
          {...cols}
          className={classnames({
            [`mb-2    mb-${margin}-0`]: index !== data.length - 1, 
            
          })
        }
        >
          <div   className={`d-flex align-items-center px-1  text-nowrap rounded cursor-pointer `}
          onClick={() => navigate(item.href)}      
          //  onClick={() => navigat(`${item.href}`) } 
          >
            <Avatar color={item.color} icon={item.icon} className="me-2 " />
            <div className={`my-auto p-3 `} >
              <h4 className={`fw-bolder mb-0 `}>{item.title}</h4>
              <CardText className="font-small-3 mb-0">{item.subtitle}</CardText>
              
            </div>
          </div>
        </Col>);
          });
  };

  return (
    <Card className="card-statistics">
      <CardHeader>
        <CardTitle tag="h4">آمار سایت</CardTitle>
        <CardText className="card-text font-small-2 me-25 mb-0">
          {" "}
          به روز رسانی 3 روز قبل{" "}
        </CardText>
      </CardHeader>
      <CardBody className="statistics-body">
        <Row>{renderData()}</Row>
      </CardBody>
    </Card>
  );
};

export default StatsCardHome;
