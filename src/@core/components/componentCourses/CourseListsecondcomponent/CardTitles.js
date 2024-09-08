// ** Reactstrap Imports
import { Button, Card, CardTitle, CardBody, CardText, CardSubtitle, CardLink, CardImg, Row, Col } from 'reactstrap'

// ** Images
import img1 from '../../../../../src/assets/images/icons/social/it2.jpg'
import { useNavigate, useParams } from 'react-router-dom';

const CardTitles = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const goEdit = () => {
    navigate(`/DetailsCourse/EditCourse/${id}`);
  }
  return (
    <Row className='match-height'>
      <Col lg='12' md='6'>
        <Card>
          <CardImg top src={img1} alt='Card cap' />
          <CardBody>
            <CardTitle className='text-center' tag='h4'>دوره در حال برگزاری است. </CardTitle>
            {/* <CardText>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </CardText> */}
            <Col className='mt-5  items-center d-flex justify-content-center'>
            <Button  color='light' className='mx-2 bg-primary' outline  onClick={goEdit}>
             ویرایش دوره
            </Button>
            
            <Button color='primary'className='mx-2 bg-warning' outline>
              حذف دوره
            </Button>
            </Col>
            
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

export default CardTitles
