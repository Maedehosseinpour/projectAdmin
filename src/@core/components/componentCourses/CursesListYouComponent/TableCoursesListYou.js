import { MoreVertical, Edit, Trash } from "react-feather";
import { Card,Table, Input, Row, Col } from 'reactstrap'

import http from "../../../core/services/interceptore";
import { useQuery } from "react-query";
import CourseItem from "./CourseItem";
import { useNavigate } from "react-router-dom";
import { useEffect, useState , useRef } from "react";
import Search from "antd/es/input/Search";
import ModallAddReserv from "./ModallAddReserv";
import ModalAccesUser from "../../componentUsers/UserAllcComponent/ModalAccesUser";
import ModalReservCours from "../../componentUsers/UserAllcComponent/ModalAccesUser";
// import MyNavbar from "./MyNavbar";
// import CourseGroup from "./CourseGroup/CourseGroup";
// import StatsCard from "../../componentsDashbord/StatsCard";



const TableCoursesListYou = () => {

  const [isOpenAddReserv, setIsOpenAddReserv] = useState(false);
  

  const [search, setSearch] = useState("");
  const ref = useRef();
 
   const addReserv = isOpenAddReserv ? `d-block` : `hidden` 
  
   const handleSearch = (e) => {
    clearTimeout(ref.current)
  
    const timeOut = setTimeout(()=>{
      e.target.value && setSearch(e.target.value) 
     },800)


    !e.target.value && setSearch('')

    ref.current = timeOut
   
  };
   // ***


  
  const getAllCourses =async () =>{
    const result = await http.get(`/Course/CourseList?PageNumber=1&RowsOfPage=10&SortingCol=DESC&SortType=Expire&Query${search}`)
    return result
  }
  const { data, status, refetch } = useQuery(["getAllCourses" , search], getAllCourses);

  // data && console.log(data.courseDtos);


  const show2 = (x) =>{
    // console.log(x);
  }
 
  return (
    <div className='invoice-list-table-header w-100  me-1 ms-50 mt-2 mb-75'>
      <Row>
      
      <Col xl="12" md="6" xs="12">
            {/* <StatsCard cols={{ xl: "3", sm: "6" }} /> */}
       </Col>
      
      <h2>همه دوره های شما   :</h2>

      {/* <Input onChange={handleSearch}  type='text' placeholder='جستجو دوره' /> */}
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
              onChang={handleSearch}
              id='search-invoice'
              className='ms-50 w-100'
              // onChange={e => handleFilter(e.target.value)}
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
      
        <thead >
          <tr style={{height:'50px',  paddingTop:'5px'}}>
            <th className="text-nowrap ">نام دوره</th>
            <th className="text-nowrap ">مدرس دوره</th>
            <th className="text-nowrap ">نوع دوره</th>
            <th className="text-nowrap ">قیمت</th>
            <th className="text-nowrap ">وضعیت برگزاری</th>
            <th className="text-nowrap ">وضعیت </th>
            <th className="text-nowrap ">حذف/ویرایش </th>
            <th className="text-nowrap ">جرییات </th>
          </tr>
        </thead>
        
        <tbody >
          {data &&
            data.courseDtos.map((item, index) => {
              return (
              
                  
                  <CourseItem 
                  setIsOpenAddReserv={setIsOpenAddReserv} 
                  isOpenAddReserv={isOpenAddReserv} 
                    key={index}
                    id={item.courseId}
                    fullName={item.fullName}
                    typeName={item.typeName}
                    // statusName={item.statusName}
                    // levelName={item.levelName}
                    cost={item.cost}
                    title={item.title}
                    refetch={refetch}
                    isActive={item.isActive}
                    isdelete={item.isdelete}
                
                  />
                
              );
            })}
        </tbody>
      </Table>
      </Row>
       {/* modal Reserv */}
       <div className={`position-absolute rounded top-50 z-50 w-25 bg-light  start-50 translate-middle ${addReserv}`}>
         {/* <ModallAddReserv setIsOpenAddReserv={setIsOpenAddReserv}/> */}
         <ModalReservCours/>
        </div>
        {/* end modall */}
    </div>
  );
};

export default TableCoursesListYou;
