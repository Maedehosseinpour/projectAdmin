// ** React Imports
import { useEffect, useState } from 'react'

// ** Third Party Components
import { ReactSortable } from 'react-sortablejs'

// ** Images
import img1 from '../../../assets/images/pic/Ob.jpg'
import img2 from '../../../assets/images/pic/ma.jpg'
import img3 from '../../../assets/images/pic/mo.jpg'
import img4 from '../../../assets/images/pic/mm.jpg'
import img5 from '../../../assets/images/pic/as.jpg'
import http from '../../core/services/interceptore';

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, CardText, ListGroupItem } from 'reactstrap'
// import { active } from 'sortablejs'
// import { log } from 'console'

const listItems = [
  {
    id: '1',
    img: img1,
    name: 'استاد بحر العلوم',
    content: 'دکترای مهندسی کامپیوتر هوش مصنوعی'
  },
  {
    id: '2',
    img: img2,
    name: 'مهدی اصغری',
    content: 'فوق الیسانس کامپیوتر -برنامه نویس ارشد'
  },
  {
    id: '3',
    img: img3,
    name: 'محسن اسفندیاری',
    content: 'فوق الیسانس کامپیوتر برنامه نویس ارشد'
  },
  {
    id: '4',
    img: img4,
    name: 'محمد رضا ساداتی',
    content: 'برنامه نویس ارشد'
  },
  {
    id: '5',
    img: img5,
    name: 'عارف سالار',
    content: 'برنامه نویس ارشد'
  }
]

const ListTeacherBahrAcavemi = () => {
  // ** State
  const [listArr , setListArr] = useState(listItems)

  // const getTeacher = async()=>{
  //   const res = await http.get('/Home/GetTeachers')
  //   console.log(res.data && res.data);
  //   return res.data
  // }
  // useEffect(() => {
    
  //   getTeacher()
  // }, []);
  
  



  return (
    <Card className=' p-2'>
      <CardHeader>
        <CardTitle className='bg-light-primary text-center mx-auto  p-2' tag='h4'>لیست اساتید آکادمی بحر</CardTitle>
      </CardHeader>
      <CardBody>
        <CardText className=' text-center'>
  آکادمی بحر با اساتید باتجزبه و حرفه ای بهترین در ایران..
        </CardText>
        <ReactSortable tag='ul' className='list-group' list={listArr} setList={setListArr}>
          {/* {resizeBy.data.map(item => {return()})} */}
          {listArr.map(item => {
            return (
              <ListGroupItem className='draggable' key={item.name}>
                <div className='d-flex align-items-center'>
                  <div>
                    <img
                      src={item.img}
                      className='rounded-circle me-2'
                      alt='Generic placeholder image'
                      height='50'
                      width='50'
                    />
                  </div>
                  <div>
                    <h5 className='mt-0'>{item.name}</h5>
                    {item.content}
                  </div>
                </div>
              </ListGroupItem>
            )
          })}
        </ReactSortable>
      </CardBody>
    </Card>
  )
}

export default ListTeacherBahrAcavemi
