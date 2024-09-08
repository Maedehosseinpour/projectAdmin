// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Row, Col, Input, Form, Button, Label } from 'reactstrap'
import FileUploaderCategory from './FileUploaderCategory'

const CategoryCreateNews = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>ایجاد دسته بندی جدید</CardTitle>
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
            {/* <Col md='6' sm='12' className='mb-1'>
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
            </Col> */}
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='CompanyMulti'>
                Google Title
              </Label>
              <Input type='text' name='company' id='CompanyMulti' placeholder='...' />
            </Col>
            <Col md='12' sm='12' className='mb-1'>
              <Label className='form-label' for='EmailMulti'>
                GoogleDescribe
              </Label>
              <Input type='email' name='Email' id='EmailMulti' placeholder='...' />
            </Col>
            {/* textarea */}
            {/* <TextareaCounter/> */}
            {/* Uplodpic */}
            <Col sm='12' >
             <FileUploaderCategory />
            </Col>
            <Col sm='12'>
              <div className='d-flex justify-content-center'>
                <Button className='me-1' color='primary' type='submit' onClick={e => e.preventDefault()}>
                  ثبت تغییرات
                </Button>
                <Button outline color='secondary' type='reset'>
                  لغو
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </CardBody>
    </Card>
  )
}
export default CategoryCreateNews

