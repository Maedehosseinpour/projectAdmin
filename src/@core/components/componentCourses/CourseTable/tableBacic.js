
import AvatarGroup from '@components/avatar-group'
import react from '@src/assets/images/icons/react.svg'
import vuejs from '@src/assets/images/icons/vuejs.svg'
import angular from '@src/assets/images/icons/angular.svg'
import bootstrap from '@src/assets/images/icons/bootstrap.svg'
import avatar1 from '@src/assets/images/portrait/small/avatar-s-5.jpg'
import avatar2 from '@src/assets/images/portrait/small/avatar-s-6.jpg'
import avatar3 from '@src/assets/images/portrait/small/avatar-s-7.jpg'
import { MoreVertical, Edit, Trash } from 'react-feather'
import { Table, Badge, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
import { useQuery } from 'react-query'
import http from '../../../core/services/interceptore'

const avatarGroupData1 = [
  {
    title: 'Lilian',
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Alberto',
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Bruce',
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26
  }
]

const avatarGroupData2 = [
  {
    title: 'Diana',
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Rey',
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'James',
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26
  }
]

const avatarGroupData3 = [
  {
    title: 'Lee',
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Mario',
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Oswald',
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26
  }
]

const avatarGroupData4 = [
  {
    title: 'Christie',
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Barnes',
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Arthur',
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26
  }
]
// /CourseReserve/:CourseId
const TableBasic = ({userId}) => {

  // const userId= userId
  // console.log('userId' , userId);

  const getUserCorseReserv = async () => {
    const result = await http.get(
      `/CourseReserve?=`
    );
    return result;
  };
  const { data, status, refetch } = useQuery(["getUserReserv"], getUserCorseReserv,)
  

  return (
    <Table responsive>
      <thead>
        <tr>
          <th>نام دوره</th>
          <th>رزرو کننده</th>
          <th> تاریخ رزرو   </th>
          <th>وضعیت دوره</th>
          <th>عملیات</th>
        </tr>
      </thead>
      <tbody>
        {data && data.map( (item , index) => {
          // console.log(item);
          if(item?.studentId == userId){
             return(
              <tr key={index}>
          <td>
            <img className='me-75' src={angular} alt='angular' height='20' width='20' />
            <span className='align-middle fw-bold'> {item?.courseName} </span>
          </td>
          <td>{item?.studentName}</td>
          <td>
              {item?.reserverDate}
          </td>
          <td>
            <Badge pill color='light-primary' className='me-1'>
              {item?.accept ? 'تائید شده' : 'تائید نشده'}
            </Badge>
          </td>
          <td>
            <UncontrolledDropdown>
              <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                <MoreVertical size={15} />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Edit className='me-50' size={15} /> <span className='align-middle'>تایید</span>
                </DropdownItem>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Trash className='me-50' size={15} /> <span className='align-middle'>حذف</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </td>
        </tr>
            )}
          // if(item?.studentId === userId){
          // }
        }) }
      </tbody>
    </Table>
  )
}

export default TableBasic