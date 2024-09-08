// ** Custom Components
import Avatar from '@components/avatar'
import React, { useState, useRef } from 'react'
// ** Reactstrap Imports


// ** Icons Imports
import { Monitor, Coffee, Watch, TrendingUp, TrendingDown } from 'react-feather'
import { Row, Card,Col,Table,Button, Breadcrumb ,Input} from 'reactstrap'
// ** Icons Imports
import starIcon from '@src/assets/images/icons/star.svg'
import bookIcon from '@src/assets/images/icons/book.svg'
import brushIcon from '@src/assets/images/icons/brush.svg'
import rocketIcon from '@src/assets/images/icons/rocket.svg'
import toolboxIcon from '@src/assets/images/icons/toolbox.svg'
import speakerIcon from '@src/assets/images/icons/speaker.svg'
import parachuteIcon from '@src/assets/images/icons/parachute.svg'
import { useQuery } from "react-query";
import http from '../../../core/services/interceptore'

const TableReservCourse = () => {
  // ** vars
  const [search, setSearch] = useState("");
  const getAllCourses = async () => {
    const result = await http.get("/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=10&SortingCol=Active&SortType=DESC&TechCount=0");
    // console.log(result);
    return result;
  };
  const { data, onSuccess , isError, refetch } = useQuery("getAllCourses3", getAllCourses,
 
  );
 
  const colorsArr = {
    Technology: 'light-primary',
    Grocery: 'light-success',
    Fashion: 'light-warning'
  }
  const handleSearch = (e) => {
    clearTimeout(ref.current)
  
    const timeOut = setTimeout(()=>{
      e.target.value && setSearch(e.target.value) 
     },800)


    !e.target.value && setSearch('')

    ref.current = timeOut
   
  };
  const renderData = () => {
   
    return data?.courseFilterDtos.map(col => {
       return (
        <tr key={col.courseId}>
          <td>
            <div className='d-flex align-items-center justify-center text-center'>
              <div className='avatar rounded'>
                {/* <div className='avatar-content'>
                  <img src={col.img} alt={col.fullName} />
                </div> */}
              </div>
              <div>
                <div className='fw-bolder'>{col.title}</div>
                <div className='font-small-2 text-muted'>{col.email}</div>
              </div>
            </div>
          </td>
          <td>
            <div className='d-flex align-items-center'>
              {/* <Avatar className='me-1' color={colorsArr[col.teacherName]} icon={col.icon} /> */}
              <span>{col.teacherName}</span>
            </div>
          </td>
          <td className='text-nowrap'>
            <div className='d-flex flex-column'>
              <span className='fw-bolder mb-25'>{col.levelName}</span>
              {/* <span className='font-small-2 text-muted'>in {col.levelName}</span> */}
            </div>
          </td>
          <td>نفر{col.currentRegistrants}</td>
          <td>
            <div className='d-flex align-items-center'>
              <span className='fw-bolder me-1'>{col.currentRegistrants}ريال</span>
              
            </div>
          </td>
        </tr>
      )
    })
  }

  return (
    
    <Card className='card-company-table p-2 m-3 bg-light'>
      <div  className='p-1 mb-2'>
    
    <div className='invoice-list-table-header w-100 me-1 ms-50  mt-2 mb-75'>
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
    
      </div>
      <Table responsive  >
        <thead>
          <tr  >
            <th  className='p-2 m-1'> نام دوره</th>
            <th className='p-2 m-1'>نام رزرو کننده</th>
            <th className='p-2 m-1'>زمان رزرو  </th>
            <th className='p-2 m-1'> وضعیت رزرو </th>
            <th className='p-2 m-1'>پدیرفتن رزرو</th>
          </tr>
        </thead>
        <tbody>{renderData()}</tbody>
      </Table>
    </Card>
  )
}

export default TableReservCourse
