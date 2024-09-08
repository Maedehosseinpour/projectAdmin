// ** Custom Components
import Avatar from '@components/avatar'
// ** Reactstrap Imports
import { Table, Card } from 'reactstrap'

// ** Icons Imports
// import { Monitor, Coffee, Watch, TrendingUp, TrendingDown } from 'react-feather'

// ** Icons Imports
// import starIcon from '@src/assets/images/icons/star.svg'
// import bookIcon from '@src/assets/images/icons/book.svg'
// import brushIcon from '@src/assets/images/icons/brush.svg'
// import rocketIcon from '@src/assets/images/icons/rocket.svg'
// import toolboxIcon from '@src/assets/images/icons/toolbox.svg'
// import speakerIcon from '@src/assets/images/icons/speaker.svg'
// import parachuteIcon from '@src/assets/images/icons/parachute.svg'
// -------------
import http from "../../../../@core/core/services/interceptore";
import { useQuery } from "react-query";
// import CourseItem from "./CourseItem";
// import { useNavigate } from "react-router-dom";
import { useEffect, useState , useRef } from "react";
import Search from "antd/es/input/Search";
import MyNavbar from "./MyNavbar";
import CourseGroup from "./CourseGroup/CourseGroup";
//------------------

const CompanyTable2 = () => {

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
// -----------

  // ** vars

  // const data = [
  //   {
  //     img: toolboxIcon,
  //     name: 'Next',
  //     email: 'meguc@ruj.io',
  //     icon: <Monitor size={18} />,
  //     category: 'Technology',
  //     views: '23.4k',
  //     time: '24 hours',
  //     revenue: '891.2',
  //     sales: '68'
  //   },
  //   {
  //     img: parachuteIcon,
  //     name: 'genius',
  //     email: 'vecav@hodzi.co.uk',
  //     icon: <Coffee size={18} />,
  //     category: 'Grocery',
  //     views: '78k',
  //     time: '2 days',
  //     revenue: '668.51',
  //     sales: '97',
  //     salesUp: true
  //   },
  //   {
  //     img: brushIcon,
  //     name: 'إBAHR',
  //     email: 'davcilse@is.gov',
  //     icon: <Watch size={18} />,
  //     category: 'Fashion',
  //     views: '162',
  //     time: '5 days',
  //     revenue: '522.29',
  //     sales: '62',
  //     salesUp: true
  //   },
  //   {
  //     img: starIcon,
  //     name: 'NAMBER1',
  //     email: 'us@cuhil.gov',
  //     icon: <Monitor size={18} />,
  //     category: 'Technology',
  //     views: '214',
  //     time: '24 hour',
  //     revenue: '291.01',
  //     sales: '88',
  //     salesUp: true
  //   },
  //   {
  //     img: bookIcon,
  //     name: 'Cafés',
  //     email: 'pudais@jife.com',
  //     icon: <Coffee size={18} />,
  //     category: 'Grocery',
  //     views: '208',
  //     time: '1 week',
  //     revenue: '783.93',
  //     sales: '16'
  //   },
  //   {
    //     img: rocketIcon,
    //     name: 'Kmart',
    //     email: 'bipri@cawiw.com',
    //     icon: <Watch size={18} />,
    //     category: 'Fashion',
    //     views: '990',
    //     time: '1 month',
    //     revenue: '780.05',
    //     sales: '78',
    //     salesUp: true
  //   },
  //     img: speakerIcon,
  //     name: 'Payers',
  //     email: 'luk@izug.io',
  //     icon: <Watch size={18} />,
  //     category: 'Fashion',
  //     views: '12.9k',
  //     time: '12 hours',
  //     revenue: '531.49',
  //     sales: '42',
  //     salesUp: true
  //   }
  // ]
  
  // const colorsArr = {
  //   Technology: 'light-primary',
  //   Grocery: 'light-success',
  //   Fashion: 'light-warning'
  // }
  const getAllCourses = async () => {
    const result = await http.get(`/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=10&SortingCol=Active&SortType=DESC&TechCount=0`
    );
    // console.log(result);
    return result;
  };
  
  const { data, status, refetch } = useQuery(["getAllCourses" , search], getAllCourses);
  
  
  const renderData = () => {
      return data.map(col => {
        {
          const IconTag = col.salesUp ? (
        <TrendingUp size={15} className='text-success' />
      ) : (
        <TrendingDown size={15} className='text-danger' />
      )

      return (
        <tr key={col.courseId}>
          <td>
            <div className='d-flex align-items-center'>
              <div className='avatar rounded'>
                <div className='avatar-content'>
                  <img src={col.tumbImageAddress} alt={col.name} />
                </div>
              </div>
              <div>
                <div className='fw-bolder'>{col.title}</div>
                <div className='font-small-2 text-muted'>{col.classRoomName}</div>
              </div>
            </div>
          </td>
          <td>
            <div className='d-flex align-items-center'>
              <Avatar className='me-1' color={colorsArr[col.levelName]} icon={col.icon} />
              <span>{col.levelName}</span>
            </div>
          </td>
          <td className='text-nowrap'>
            <div className='d-flex flex-column'>
              <span className='fw-bolder mb-25'>{col.likeCount}</span>
              <span className='font-small-2 text-muted'>in {col.likeCount}</span>
            </div>
          </td>
          <td>${col.cost}</td>
          <td>
            <div className='d-flex align-items-center'>
              <span className='fw-bolder me-1'>{col.dissLikeCount}%</span>
              {IconTag}
            </div>
          </td>
        </tr>
      )
    }
  }
      )}
  return (
    <Card className='card-company-table'>
      <Table responsive>
        <thead>
          <tr>
            <th>دوره آمورش</th>
            <th>دسته بندی</th>
            <th>بازدیدها</th>
            <th>استاد دوره</th>
            <th>تخفیف</th>
          </tr>
        </thead>
        <tbody>{renderData()}</tbody>
      </Table>
    </Card>
  )
}

export default CompanyTable2
