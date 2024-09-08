// ** Custom Components
import Avatar from '@components/avatar'

// ** Reactstrap Imports
import { Table, Card } from 'reactstrap'

// ** Icons Imports
import { Monitor, Coffee, Watch, TrendingUp, TrendingDown } from 'react-feather'
import { Row, Col, Breadcrumb } from 'reactstrap'
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

const CompanyTable = () => {
  // ** vars

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
            <div className='d-flex justify-center align-items-center text-center'>
              <div className='rounded avatar'>
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
              <span className='mb-25 fw-bolder'>{col.levelName}</span>
              <span className='font-small-2 text-muted'>in {col.levelName}</span>
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
    <Card className='card-company-table'>
      <Table responsive>
        <thead>
          <tr>
            <th>دوره آمورش</th>
            <th>استاد دوره</th>
            <th>سطح دوره </th>
            <th>ثبت نام شده</th>
            <th>قیمت</th>
          </tr>
        </thead>
        <tbody>{renderData()}</tbody>
      </Table>
    </Card>
  )
}

export default CompanyTable
