import React, { useState, useRef } from 'react'
import { AlignJustify, Rss, Info, Image, Users, Edit } from 'react-feather'
// import {Card, CardImg, Badge, Table, Input , UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle , Navbar, Nav, NavItem, NavLink, Button } from 'reactstrap'
import UserItem from './UserItem'
import {useQuery} from 'react-query'
import http from '../../../core/services/interceptore'
import { Row, Col, Table,Button, Input } from 'reactstrap'
import StatsVertical from '../../StatsVertical/StatsVertical'
import Earnings from '../../Earnings/Earnings'
// import MyNavbar from './MyNavbar'
import StatsCard from '../../componentsDashbord/StatsCard'
import Breadcrumbs from "@components/breadcrumbs";
import StatsHorizontal from "../../widgets/stats/StatsHorizontal";
import { User, UserPlus,Plus, UserCheck, UserX } from 'react-feather'
import ModallAddUserNew from './ModallAddUserNew'
import ModalaccessUser from './ModalaccessUser'
import EditUserExample from './ModalEditUser'
import { CustomPagination } from '../../componentCourses/CourseTable/TablrRole/pagination';

  // tabel users page 1

const AllAdminTab4 = () => {

 // ******************pagination state************************
 const [rowsPerPage, setRowsPerPage] = useState(10);
 const [pageNamber, setPageNamber] = useState(1);
 const [paginationArray, setPaginationArray] = useState(null);

 // ******************************************************

  const [isOpenAddUser, setIsOpenAddUser] = useState(false)
  const [isOpenAccessUser, setIsOpenAccessUser] = useState(false)
  const [search, setSearch] = useState("");

 // **********************Active & Dactive********************************

  const [IsActive, setIsActive] = useState(true)
  const activeTab = IsActive ? `bg-light-primary` : `bg-transparent`;
  const deActiveTab = !IsActive ? `bg-light-primary` : `bg-transparent`;


 // ***********************************************************************


  const ref = useRef();
  const handleIsOpenUser = () => {
    setIsOpenAddUser(!isOpenAddUser)
    setIsOpenAccessUser(false)
  }

  const addUser = isOpenAddUser ? `d-block` : `hidden`
  const accessUser = isOpenAccessUser ? `d-block` : `hidden`

  const handleSearch = (e) => {
    clearTimeout(ref.current)
  
    const timeOut = setTimeout(()=>{
      e.target.value && setSearch(e.target.value) 
     },800)


    !e.target.value && setSearch('')

    ref.current = timeOut
   
  };



  const getAdmins =async () =>{
 
    const result = await http.get(`/User/UserMannage?PageNumber=${pageNamber}&RowsOfPage=${rowsPerPage}&SortingCol=DESC&SortType=InsertDate&Query=${search}&IsActiveUser=${IsActive}&IsDeletedUser=true&roleId=1`)
    return result
  }

  const {data , Status , refetch} = useQuery(['getAdmin', search,rowsPerPage,pageNamber,IsActive] , getAdmins)

  var completeProfile = 0;

  for(let i=0 ; i<data?.listUser.length ; i++){
    // console.log(data.listUser[i].profileCompletionPercentage);
    completeProfile = completeProfile + Number(data.listUser[i].profileCompletionPercentage);
  }

  var Percent = Math.round(completeProfile/data?.listUser.length) 


  var mens = data?.listUser.filter((item)=>{
    return item.gender === true;
  })

  const mensCount =(mens && mens.length/data.listUser.length)*100;
  const wemenCount = (mens && (data.listUser.length - mens.length)/data.listUser.length)*100;



    return (
    <>
     <div>
      <div style={{fontSize:'30px'}}> 
            {/* <Badge color='success'> جدول کاربران </Badge>    */}
            <Breadcrumbs title='کاربران مارفا' data={[{ title: 'لیست کاربران' }]} />
        </div>
       
        <Row className="match-height d-flex  align-items-center  ">
          
            <Col xl="12" md="6" xs="12">
              <StatsCard cols={{ xl: "3", sm: "6" }} />    
            </Col>
        
        
           {/* activ & deactiv */}
          <Col lg='3' sm='3'
            onClick={() => {
              
              setIsActive(true);
              refetch();
            }}
          >
            <StatsHorizontal
              className={`cursor-pointer ${activeTab}`}
              color='success'
              // statTitle='Active Users'
              icon={<UserCheck size={20} />}
              renderStats={<h3 className='fw-bolder mb-75 '>فعال</h3>}
            />
          </Col>
          <Col lg='3' sm='3'
            onClick={() => {
              setIsActive(false);
              refetch();
            }}
            
          >
            <StatsHorizontal
             className={`cursor-pointer ${deActiveTab}`}
              color='warning'
              // statTitle='Pending Users'
              icon={<UserX size={20} />}
              renderStats={<h3 className='fw-bolder mb-75'>غیرفعال</h3>}
            />
          </Col>
          <Col lg='6' sm='6'>
          {/* modal */}
            <div className="d-flex justify-content-end  mt-md-0 mt-1">
            <EditUserExample setIsOpenAddUser={setIsOpenAddUser}/>
                    
            </div>
          </Col>
        </Row>
    
        {/* <Input onChange={handleSearch}  type='text' placeholder='search' /> */}
        {/* search ... */}
       <div  className=''>
       <div className='invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75'>
        <Row>
        <Col xl='6' className='d-flex align-items-center p-0'>
          <div className='d-flex align-items-center w-100'>
            <label htmlFor='rows-per-page'>نمایش</label>
            <Input
              className='mx-50'
              type='select'
              id='rows-per-page'
              value={rowsPerPage}
              onChange={(e)=> setRowsPerPage(e.target.value)}
              style={{ width: '5rem' }}
            >
          
              <option value='10'>10</option>
              <option value='25'>25</option>
              <option value='50'>50</option>
            </Input>
            <label htmlFor='rows-per-page'>صفحه</label>
          </div>
        </Col>
        <Col
          xl='6'
          className='d-flex align-items-sm-center justify-content-lg-end justify-content-start flex-lg-nowrap flex-wrap flex-sm-row flex-column pe-lg-1 p-0 mt-lg-0 mt-1'
        >
          <div className='d-flex align-items-center mb-sm-0 mb-1 me-1'>
            <label className='mb-0' htmlFor='search-invoice'>
             جستجو
            </label>
            <Input
              type='text'
              // value={}
              id='search-invoice'
              className='ms-50 w-100'
              onChange={handleSearch}
            />
          </div>
          {/* <Input value={plan} type='select' style={{ width: '10rem' }} onChange={e => handlePlanChange(e.target.value)}>
            <option value=''>Select Role</option>
            <option value='basic'>Basic</option>
            <option value='company'>Company</option>
            <option value='enterprise'>Enterprise</option>
            <option value='team'>Team</option>
          </Input> */}
        </Col>
      </Row>
        </div>
        <Table responsive className="mt-3 table-hover dark-layout table table-bordered ">
          <thead  className='align-middle fw-bold  m-5'> 
            <tr  style={{height:'50px',  paddingTop:'5px'}}>
              <th>نام</th>
              {/* <th >نقش کاربر</th> */}
              <th>جنسیت</th>
              <th className="text-nowrap"> کد ادمین</th>
              <th>ایمیل</th>              
              <th>شماره تماس</th>
              <th className="text-nowrap">وضعیت </th>
              <th> دسترسی</th>
              <th>  جزییات </th>
              <th>حدف/ویرایش  </th>

            </tr>
          </thead>
          <tbody>
            {data && (
                data.listUser?.map((item , index) =>{
                          return(
                            <UserItem 
                            setIsOpenAddUser={setIsOpenAddUser}
                             setIsOpenAccessUser={setIsOpenAccessUser}
                              isOpenAccessUser={isOpenAccessUser}
                               key={index}
                                id={item.id}
                                 fName={item.fname}
                                 isActive={item.isActive}
                                 lNmae={item.lname} role='ادمین' gender={item.gender}
                            profileCompletionPercentage={item.profileCompletionPercentage} gmail={item.gmail} phoneNumber={item.phoneNumber}/>         
                      )
                  })         
                )
              } 

          </tbody>
      
      

        </Table> 
       </div>
    </div>
 {/* ********************pagination component********************* */}
      <div className='d-flex justify-content-center'>
                <CustomPagination
                  total={data?.totalCount}
                  current={pageNamber}
                  setCurrent={setPageNamber}
                  rowsPerPage={rowsPerPage}
                />
      </div>
{/* ********************pagination component********************* */}       
       
    </>   
      )
}

export default AllAdminTab4