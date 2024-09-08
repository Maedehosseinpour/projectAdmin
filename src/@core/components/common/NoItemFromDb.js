// ** React Imports
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText, CardFooter } from 'reactstrap'

// ** Images
import img1 from '@src/assets/images/slider/03.jpg'
import img2 from '@src/assets/images/slider/02.jpg'
import img3 from '@src/assets/images/slider/01.jpg'

const NoItemFromDb = ({title}) => {
  return (
    <Row className='match-height mb-2'>
      <Col>
        <Card className='d-flex justify-content-center justify-items-center'>
          {/* <CardImg top src={img1} alt='card1' /> */}
          <CardBody className='text-center'>
            <CardTitle tag='h3' className='text-lg font-weight-bold' >{title}</CardTitle>
            <CardText>
                داده‌ای در دیتابیس وجود ندارد.
            </CardText>
          </CardBody>
          {/* <CardFooter>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </CardFooter> */}
        </Card>
      </Col>
     
    </Row>
  )
}

export default NoItemFromDb
