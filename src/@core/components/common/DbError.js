// ** React Imports
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText, CardFooter } from 'reactstrap'

// ** Images
import img1 from '@src/assets/images/slider/03.jpg'
import img2 from '@src/assets/images/slider/02.jpg'
import img3 from '@src/assets/images/slider/01.jpg'

const DbError = () => {
  return (
    <Row className='match-height mb-2'>
      <Col md='4' xs='12'>
        <Card className='d-flex justify-content-center justify-items-center'>
          {/* <CardImg top src={img1} alt='card1' /> */}
          <CardBody>
            <CardTitle tag='h4'>Card title</CardTitle>
            <CardText>
              دیتا در دسترس نیست، لطفا بعدا تلاش کنید.
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

export default DbError
