// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Row, Col, Input, Form, Button, Label } from 'reactstrap'
import TextareaCounter from './TextareaCounter'
import FileUploaderSingle from './FileUploaderSingle'
import { FileText, X, DownloadCloud,ArrowLeft,ArrowRight } from 'react-feather'
const NewsChangeDetails = ({ stepper, type }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='bg-light-primary rounded p-2' tag='h4'>ویرایش خبر جدید</CardTitle>
      </CardHeader>

      <CardBody>
        <Form className='m-2' >
          <Row>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='nameMulti'>
               عنوان
              </Label>
              <Input type='text' name='name' id='nameMulti' placeholder='...' />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='lastNameMulti'>
             دسته بندی
              </Label>
              <Input type='text' name='lastname' id='lastNameMulti' placeholder='...' />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='cityMulti'>
               توضیح کوتاه
              </Label>
              <Input type='text' name='city' id='cityMulti' placeholder='...' />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='CountryMulti'>
               کلمات کلیدی
              </Label>
              <Input type='text' name='country' id='CountryMulti' placeholder='...' />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='CompanyMulti'>
                Google Title
              </Label>
              <Input type='text' name='company' id='CompanyMulti' placeholder='...' />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='EmailMulti'>
                GoogleDescribe
              </Label>
              <Input type='email' name='Email' id='EmailMulti' placeholder='...' />
            </Col>
            {/* textarea */}
            <TextareaCounter/>
            {/* Uplodpic */}
            
             <div className='d-flex justify-content-between'>
      <Button color='primary' className='btn-prev' outline disabled>
        <ArrowLeft size={14} className='align-middle me-sm-25 me-0'></ArrowLeft>
        <span className='align-middle d-sm-inline-block d-none'>قبل</span>
      </Button>
      <Button color='primary' className='btn-next' onClick={() => stepper.next()}>
        <span className='align-middle d-sm-inline-block d-none'>بعد</span>
        <ArrowRight size={14} className='align-middle ms-sm-25 ms-0'></ArrowRight>
      </Button>
    </div>
    
          </Row>
        </Form>
      </CardBody>
    </Card>
  )
}
export default NewsChangeDetails

