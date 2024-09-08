// ** Custom Components
import Avatar from '@components/avatar'
import { Check, Plus, X } from "react-feather";
// ** Reactstrap Imports
import {
  Edit,
  Eye,
} from "react-feather";


import {
  Table,
  CardHeader,
  CardTitle,
  UncontrolledButtonDropdown,
  Button,
  Card,
  Label,
  Input,
  Row,
  Col,
} from "reactstrap";

// ** Icons Imports
import { Monitor, Coffee, Watch, TrendingUp, TrendingDown } from 'react-feather'
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
import { useNavigate } from "react-router-dom";

const CategoryNewsTable = () => {
  // ** vars
  const navigate = useNavigate();
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
              <span className='font-small-2 text-muted'>in {col.levelName}</span>
            </div>
          </td>
          <td>نفر{col.currentRegistrants}</td>
          <td>
            <div className='d-flex align-items-center'>
              {/* <span className='fw-bolder me-1'>{col.currentRegistrants}ريال</span> */}
              <Edit className="me-50 text-warning" size={15} />{" "}
            </div>
          </td>
        </tr>
      )
    })
  }

  return (
<>
<Card className="p-3 ">
        <Row>
        <CardHeader className="flex-md-row flex-column align-md-items-center align-items-start border-bottom">
          <CardTitle tag="h4">دسته بندی  اخبار</CardTitle>
          <div className="d-flex mt-md-0 mt-1 p-1">
            <Button
              className="ms-2"
              color="primary"
              onClick={() => navigate("/NewsPage/CategoryCreateNews")}>
              <span className="align-middle me-50 py-3">ایجاد دسته بندی جدید</span>
              <Plus size={15} />
            </Button>
          </div>
        </CardHeader>
         </Row>
         {/* ------search--------- */}
         <Row className="justify-content-end mx-0">
          
        <CardHeader className="flex-md-row flex-column align-md-items-center align-items-start border-bottom">
          <div className="d-flex w-50 ">
            {/* search */}
            <Col
            className="d-flex align-items-center justify-content-end mt-1"
            md="6"
            sm="12">
            <Label className="me-1" for="search-input">
              جستجو
            </Label>
            <Input
              className="dataTable-filter mb-50"
              type="text"
              bsSize="sm"
              id="search-input"
              onChange={(e) => handleFilter(e)}
              // onChange={handleFilter}
            />
            </Col>
           </div>
        
          </CardHeader>
        </Row>
    <Card className='card-company-table p-3'>
      <Table responsive>
        <thead>
          <tr >
            <th className=' p-2 items-center'> دسته بندی</th>
            <th className='items-center p-2'> عدد دسته بندی</th>
            <th className='items-center p-2'>نام دسته بندی  </th>
            <th className='items-center p-2'>  آخرین آپدیت</th>
            <th className='items-center p-2'>انجام عملیات </th>
          </tr>
        </thead>
        <tbody>{renderData()}</tbody>
      </Table>
    </Card>

  </Card>
 </> )
}

export default CategoryNewsTable
