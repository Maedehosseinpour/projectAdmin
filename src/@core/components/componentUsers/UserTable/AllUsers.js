import React, { useState , useRef } from 'react'
import { AlignJustify, Rss, Info, Image, Users, Edit } from 'react-feather'
import {Card, CardImg, Badge, Table, Input , Button } from 'reactstrap'
import UserItem from './UserItem'
import {useQuery} from 'react-query'
import http from '../../../core/services/interceptore'
import { Row, Col } from 'reactstrap'
import StatsHorizontal from "../../widgets/stats/StatsHorizontal";
import Breadcrumbs from "@components/breadcrumbs";
import { User, UserPlus,Plus, UserCheck, UserX } from 'react-feather'

// import StatsVertical from '../../../components/StatsVertical/StatsVertical'
// import Earnings from '../Earnings/Earnings'
import MyNavbar from './MyNavbar'
import StatsCard from '../../componentsDashbord/StatsCard'

const AllUsers = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [search, setSearch] = useState("");

    const ref = useRef();

    const handleSearch = (e) => {
      clearTimeout(ref.current)
    
      const timeOut = setTimeout(()=>{
        e.target.value && setSearch(e.target.value) 
       },800)
  
  
      !e.target.value && setSearch('')
  
      ref.current = timeOut
     
    };



    const getAlls =async () =>{
      const result = await http.get(`/User/UserMannage?PageNumber=1&RowsOfPage=200&SortingCol=DESC&SortType=InsertDate&Query=${search}`)
      return result
    }
  
    const {data , Status} = useQuery(['getAll' , search] , getAlls)
  
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
        <div>
          {/* top page */}
          <div style={{fontSize:'30px'}}> 
                {/* <Badge color='success'> جدول کاربران </Badge>    */}
                <Breadcrumbs title='کاربران مارفا' data={[{ title: 'لیست کاربران' }]} />
            </div>
           
            <Row className="match-height d-flex  align-items-center  ">
              
                <Col xl="12" md="6" xs="12">
                  <StatsCard cols={{ xl: "3", sm: "6" }} />    
                </Col>
            
            
               {/* activ & deactiv */}
              <Col lg='3' sm='3'>
                <StatsHorizontal
                  color='success'
                  // statTitle='Active Users'
                  icon={<UserCheck size={20} />}
                  renderStats={<h3 className='fw-bolder mb-75'>فعال</h3>}
                />
              </Col>
              <Col lg='3' sm='3'>
                <StatsHorizontal
                  color='warning'
                  // statTitle='Pending Users'
                  icon={<UserX size={20} />}
                  renderStats={<h3 className='fw-bolder mb-75'>غیرفعال</h3>}
                />
              </Col>
              <Col lg='6' sm='6'>
                <div className="d-flex justify-content-end  mt-md-0 mt-1">
                    <Button
                      className="ms-2"
                      // tag={Link} to='./userAdd/add'
                      color="primary"
                      icon={<UserX size={20} />}
                      // onClick={handleIsOpenUser}
                      >
                      <span className="align-middle  me-50">اضافه کاربر جدید</span>
                      <User size={35} />
                      <Plus size={15} />
                      
                    </Button>
                    
            
                </div>
              </Col>
            </Row>
            {/* <Row>
            <div className={`position-absolute rounded top-25 z-50 w-25 bg-light  start-50 translate-middle ${addUser}`}>
             <ModallAddUserNew setIsOpenAddUser={setIsOpenAddUser}/>
            </div> */}
            {/* modal access */}
            {/* <div className={`bg-info position-absolute rounded top-25 z-50 w-25 bg-light  start-50 translate-middle ${accessUser}`}>
             <ModalaccessUser setIsOpenAccessUser={setIsOpenAccessUser} />
    
            </div>
            </Row> */}

          {/* end top page  */}

        {/* <div style={{fontSize:'30px'}}> 
            <Badge color='success'> تمام کاربران </Badge>   
        </div> */}

{/* search   $ namayesh */}
          {/* <Input onChange={handleSearch}  type='text' placeholder='search' /> */}

          <div className='invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75'>
            <Row>
            <Col xl='6' className='d-flex align-items-center p-0'>
              <div className='d-flex align-items-center w-100'>
                <label htmlFor='rows-per-page'>نمایش</label>
                <Input
                  className='mx-50'
                  type='select'
                  id='rows-per-page'
                  // value={rowsPerPage}
                  // onChange={handlePerPage}
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
                  onChange={e => handleSearch(e.target.value)}
                />
              </div>
              </Col>
          </Row>
            </div>
          <Table responsive className="mt-3 table-hover dark-layout table table-bordered ">
            <thead className='align-middle fw-bold  m-5'>
              <tr style={{height:'50px',  paddingTop:'5px'}}>
                <th>نام</th>
                <th>نوع کاربر</th>
                <th>جنسیت</th>
                <th> کد استاد</th>
                {/* <th>درصد تکمیل اطلاعات</th> */}
                <th>ایمیل</th>              
                <th>شماره تماس</th>
                <th> دسترسی</th>
                  <th>  جزییات </th>
                  <th>حدف/ویرایش  </th>
              </tr>
            </thead>
            <tbody>
              {data && (
                  data.listUser?.map((item , index) =>{
                            return(
                              <UserItem key={index} id={item.id} fName={item.fname} lNmae={item.lname} role='عادی' gender={item.gender}
                              profileCompletionPercentage={item.profileCompletionPercentage} gmail={item.gmail} phoneNumber={item.phoneNumber}/>         
                        )
                    })         
                  )
                } 





            </tbody>
          </Table>       
        </div>

      )
}

export default AllUsers