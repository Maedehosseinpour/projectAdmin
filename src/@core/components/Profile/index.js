// ** React Imports
import { Fragment, useState, useEffect } from "react";

// ** Third Party Components
import axios from "axios";

// ** Custom Components
import UILoader from "@components/ui-loader";
import Breadcrumbs from "@components/breadcrumbs";
import { User, UserPlus,Plus, UserCheck, UserX } from 'react-feather'
// ** Reactstrap Imports
import {
  Button,
  Card,
  CardTitle,
  CardBody,
  CardText,
  CardSubtitle,
  CardLink,
  CardImg,
  Row,
  Col,
} from "reactstrap";

// ** Demo Components

import ProfileAbout from "./ProfileAbout";
import ProfileHeader from "./ProfileHeader";
import { useParams } from "react-router-dom";
import http from "../../../@core/core/services/interceptore";
import { useQuery } from "react-query";
 
// ** Styles
import "@styles/react/pages/page-profile.scss";
import StatsVertical from "../StatsVertical/StatsVertical";
// import StatsHorizontal from '../StatsHorizontal/StatsHorizontal'
import {
  MapPin,
  Bookmark,
  Cpu,
  Heart,
  Award,
  Truck,
  Server,
  Activity,
  ShoppingBag,
  AlertOctagon,
  MessageSquare,
  Mail,
} from "react-feather";
import gmailImage from "../../../../src/assets/images/icons/social/google.png";
import linkedinImage from "../../../../src/assets/images/icons/social/linkedin.png";
import telegramImage from "../../../../src/assets/images/icons/social/twitter.png";
import phoneImage from "../../../../src/assets/images/icons/social/instagram.png";
import UserReservedCourse from "./UserReservedCourse";
import UserAcceptCourse from "./UserAcceptCourse";
import ChangeRole from "./ChangeRole";
import ProfileAbout2 from "./ProfileAbout2";
import { useNavigate } from "react-router-dom";
import { Badge } from "reactstrap";
import TableBasic from "../componentCourses/CourseTable/tableBacic";
import TableBacicHeart from "../componentCourses/CourseTable/TableBacicHeart";
import StatsHorizontal from "../widgets/stats/StatsHorizontal";

const Profile = ({}) => {
  const { id } = useParams();
  const [showTable , setShowTable]= useState(true)
  const bgReserv = showTable ? `bg-light-primary` : `bg-translate`
  const bgFavorite = !showTable ? `bg-light-primary` : `bg-translate`
  const navigate = useNavigate();

  const getUsersInfo = async () => {
    const result = await http.get(`/User/UserDetails/${id}`);
    return result;
  };

  // function Edit
  const  goEditUser = () =>{
    navigate('/UserEditDetails/' + id )
  }

  const {
    data,
    status,
    refetch: refetch2,
  } = useQuery(["userInfo", id], getUsersInfo);

  // data && console.log(data);

  return (
    <Fragment>
      <Breadcrumbs
        title="Profile"
        data={[{ title: "Pages" }, { title: "Profile" }]}
      />

      <div id="user-profile">
        <Row>
          <Col sm="12">
            {data && (
              // pic heder detail user
              <ProfileHeader
                pic={data.currentPictureAddress}
                fName={data.fName}
                lName={data.lName}
              />
            )}
          </Col>
          {/* btn del & edit */}
          
            <Col  className="d-flex flex-row justify-content-end">
                
                    <Button
                      className="ms-2"
                      // tag={Link} to='./userAdd/add'
                      color="warning"
                      // icon={<UserX size={20} />}
                      // onClick={handleIsOpenUser}
                      >
                      <span className="align-middle  me-50">  حذف  کاربر </span>
                      {/* <User size={35} />
                      <Plus size={15} /> */}
                      
                    </Button>
                    
              
                    <Button
                      className="ms-2"
                      // tag={Link} to='./userAdd/add'
                      color="primary"
                      // icon={<UserX size={20} />}
                      // onClick={handleIsOpenUser}
                      >
                      <span onClick={goEditUser} className="align-middle  me-50">ویرایش اطلاعات </span>
                      {/* <User size={35} />
                      <Plus size={15} /> */}
                      
                    </Button>
                    
            
                
            </Col>
          
        </Row>
        <section id="profile-info">
          <Row>
            <Col
              lg={{ size: 12, order: 1 }}
              sm={{ size: 12 }}
              xs={{ order: 1 }}
            >
              <Row>
                <Col lg="3" md="4">
                  {data && (
                    <ProfileAbout
                      id={data.id}
                      nationalCode={data.nationalCode}
                      gender={data.gender}
                      active={data.active}
                      birthDay={data.birthDay}
                      isDelete={data.isDelete}
                      insertDate={data.insertDate}
                      roles={data.roles}
                    />
                  )}
                </Col>

                <Col lg="9" md="8">
                  {data && (
                    <ProfileAbout2
                      gmail={data.gmail}
                      linkdinProfile={data.linkdinProfile}
                      telegramLink={data.telegramLink}
                      twoStepAuth={data.twoStepAuth}
                      phoneNumber={data.phoneNumber}
                      phoneNumber={data.phoneNumber}
                    />
                  )}
                  {/* <ProfileAbout2/> */}

                  <Col
                    className="d-flex  w-100  justify-content-between"
                    lg={{ size: 3, order: 1 }}
                    sm={{ size: 12 }}
                    xs={{ order: 2 }}
                  >
                    {/* <Row lg={{ size: 3, order: 1 }} sm={{ size: 12 }} xs={{ order: 2 }}> */}
                   <div className=" w-50 m-2 ">
                   {data && (
                      <StatsVertical
                        icon={<MapPin size={21} />}
                        stats="آدرس:"
                        statTitle={data.homeAdderess}
                        
                      />
                    )}
                   </div>
                   
                   <div className=" w-50 m-2">
                    {data && (
                      <StatsVertical
                        icon={<ShoppingBag size={21} />}
                        stats="توضیحات"
                        statTitle={data.userAbout}
                      />
                    )}
                   </div>
                    {/* {data && (
                      <Button.Ripple
                        onClick={() => navigate("/Users/UpdadeUsre/" + data.id)}
                        color="info"
                      >
                        بروز رسانی کاربر
                      </Button.Ripple>
                    )} */}

                    {/* </Row> */}
                  </Col>
                </Col>
              </Row>
            </Col>
          </Row>

          
         <Row>
         <Col lg='3' sm='3'
          onClick={() => setShowTable(true)}
         >
            <StatsHorizontal
              color='success'
              className={`cursor-pointer ${bgReserv}`}
              // statTitle='Active Users'
              icon={<Bookmark size={20} />}
              renderStats={<h3 className='fw-bolder mb-75'>دوره های رزو شده</h3>}
            />
          </Col>
          <Col lg='3' sm='3'
            onClick={() => setShowTable(false)}
          >
            <StatsHorizontal
              color='warning'
              className={`cursor-pointer ${bgFavorite}`}
              // statTitle='Pending Users'
              icon={<Heart size={20} />}
              renderStats={<h3 className='fw-bolder mb-75'>دوره های تایید شده </h3>}
            />
          </Col>
          {/* جدول دوره رزو و علاقه مندی */}
          {/* <TableBasic userId={id}/> */}
          {showTable ? <TableBasic userId={id}/> : <TableBacicHeart userId={id}/>}
          
         </Row>
        </section>
      </div>
    </Fragment>
  );
};

export default Profile;
