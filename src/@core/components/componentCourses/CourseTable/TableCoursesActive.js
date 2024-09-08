import { MoreVertical, Edit, Trash,BookOpen, Plus } from "react-feather";
import { CardImg, Badge, Row,Table,Col, Input , Button } from 'reactstrap';
import http from "../../../core/services/interceptore";
import { useQuery } from "react-query";
import CourseItem from "./CourseItem";
import { useNavigate } from "react-router-dom";
import { useEffect, useState , useRef } from "react";
import Search from "antd/es/input/Search";
import MyNavbar from "./MyNavbar";
import CourseGroup from "./CourseGroup/CourseGroup";
// import PaginationSeparated from "./PaginationSeparated";
import { CustomPagination } from "./TablrRole/pagination";
// import StatsCard from "../../componentsDashbord/StatsCard";
// import Card from '@components/card-snippet'
// import paginationSeparated from "./PaginationSourceCode"

const TableCoursesActive = () => {

  // const [paginationSize, setPaginasionSize] = useState(null);
  // ******************pagination state************************
  const [rowsPerPageActive, setRowsPerPageActive] = useState(10);
  const [pageNamberActive, setPageNamberActive] = useState(1);
  const [paginationArrayActive, setPaginationArrayActive] = useState(null);

  // ******************************************************

  const navigate = useNavigate()
  const handleIsOpenUser =() =>
  {
    navigate("/Curses/CreatNewCurses")
  }

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
  

  const getAllCoursesActive = async () => {
    const result = await http.get(
      `/Course/CourseList?PageNumber=${pageNamberActive}&RowsOfPage=200&SortingCol=DESC&SortType=Expire&Query${search}`
    );
    return result;
  };
  const { data, status, refetch } = useQuery(["getAllCoursesActive", search, pageNamberActive, rowsPerPageActive], getAllCoursesActive,)
  

  useEffect(()=>{
   
  }, [])
 

  const show2 = (x) =>{
    // console.log(x);
  }
 
  return (
    <div className='invoice-list-table-header w-100  me-1 ms-50 mt-2 mb-75'>
      <Row>
      
      <Col xl="6" md="6" xs="12">
      <h2>دوره های ترم جاری :</h2>
      </Col>
      <Col lg='6' sm='6'>
    <div className="d-flex justify-content-end  mt-md-0 mt-1">
       <Button
                      className="ms-2"
                      color="primary"
                      // icon={<BookOpen size={20} />}
                      onClick={()=> navigate("/Curses/CreatNewCurses")}>
                      
                      <span className="align-middle  me-50">ایجاد دوره جدید</span>
                      <BookOpen size={25} />
                                           
         </Button>
         </div> 
       </Col>
      

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
              value={rowsPerPageActive}
              onChange={(e)=> setRowsPerPageActive(e.target.value)}
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
              // value={handleSearch}
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
              if(item.isActive) {
               
              return (  
                    <CourseItem 
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
              )}
            })}
        </tbody>
      </Table>
      </Row>
{/* ********************pagination component********************* */}
      <div className='d-flex justify-content-center'>
                <CustomPagination
                  total={data?.length}
                  current={pageNamberActive}
                  setCurrent={setPageNamberActive}
                  rowsPerPage={rowsPerPageActive}
                />
{/* ********************pagination component********************* */}

      </div>
    </div>
  );
};

export default TableCoursesActive;
