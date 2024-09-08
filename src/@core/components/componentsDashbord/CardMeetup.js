// ** Custom Components
import Avatar from '@components/avatar'
import AvatarGroup from '@components/avatar-group'

// ** Icons Imports
import { Calendar, MapPin } from 'react-feather'

// ** Reactstrap Imports
import { Card, CardTitle, CardBody, CardText } from 'reactstrap'

// ** Images Imports
import illustration from '@src/assets/images/icons/social/meet7.png'

// ** Avatar Imports
import avatar9 from '../../../assets/images/pic/Ob.jpg'
import avatar6 from '../../../assets/images/pic/ma.jpg'
import avatar8 from '../../../assets/images/pic/ma.jpg'
import avatar7 from '../../../assets/images/pic/mm.jpg'
import avatar20 from '../../../assets/images/pic/as.jpg'

const CardMeetup = () => {
  const data = [
    {
      title: 'استاد بحر',
      placement: 'bottom',
      img: avatar9,
      imgHeight: 33,
      imgWidth: 33
    },
    {
      title: 'آرزو',
      placement: 'bottom',
      img: avatar6,
      imgHeight: 33,
      imgWidth: 33
    },
    {
      title: 'استاد اصغری',
      placement: 'bottom',
      img: avatar8,
      imgHeight: 33,
      imgWidth: 33
    },
    {
      title: 'مائده',
      placement: 'bottom',
      img: avatar7,
      imgHeight: 33,
      imgWidth: 33
    },
    {
      title: 'فاطمه',
      placement: 'bottom',
      img: avatar20,
      imgHeight: 33,
      imgWidth: 33
    },
    {
      meta: '+42'
    }
  ]

  return (
    <Card className='card-developer-meetup'>
      <div className='meetup-img-wrapper rounded-top text-center'>
        <img src={illustration} height='170' />
      </div>
      <CardBody className=' p-5 mx-auto w-100'>
        <div className='meetup-header d-flex align-items-center'>
          <div className='meetup-day'>
            <h6 className='mb-0'>شنبه</h6>
            <h3 className='mb-0'>20</h3>
          </div>
          <div className='my-auto'>
            <CardTitle tag='h4' className='mb-25'>
             ملاقات با اساتید
            </CardTitle>
            {/* <CardText className='mb-0'>ملاقات با بهترین اساتید  کشور</CardText> */}
          </div>
        </div>
        <div className='d-flex'>
          <Avatar color='light-primary' className='rounded me-1' icon={<Calendar size={18} />} />
          <div >
            <h6 className='mb-0'>20/03/1403</h6>
            <small>12:ظهر -- 9:صبح</small>
          </div>
        </div>
        <div className='d-flex mt-2'>
          <Avatar color='light-primary' className='rounded me-1' icon={<MapPin size={18} />} />
          <div>
            <h6 className='mb-0'>مکان جلسه</h6>
            <small>مازندران -ساری</small>
          </div>
        </div>
        <AvatarGroup data={data} />
      </CardBody>
    </Card>
  )
}

export default CardMeetup
