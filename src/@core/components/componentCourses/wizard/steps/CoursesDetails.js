// ** React Imports
import { Fragment } from 'react'

// ** Icons Imports
import { ArrowLeft, ArrowRight } from 'react-feather'

// ** Reactstrap Imports
import { Label, Row, Col, Input, Form, Button } from 'reactstrap'
import Pickers from '../Pickers'
import { Formik } from 'formik'

const CoursesDetails = ({ stepper, type , CreatCourseValues , setCreatCourseValues }) => {

  const secondStep = (values) =>{
    
    setCreatCourseValues(old => ({...old , ...values})  )
    // console.log(CreatCourseValues)
  }

  // CreatCourseValues.Title && console.log(object)
  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>اطلاعات دوره را وارد کنید</h5>
        {/* <small className='text-muted'>Enter Your Account Details.</small> */}
      </div>
      <Formik initialValues={{Title:'' , Cost:'' , Capacity:'' , MiniDescribe :'' , SessionNumber:''}} onSubmit={secondStep}>
        {({values , handleSubmit , handleChange})=>(
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md='4' className='mb-1'>
                <Label className='form-label' for={`name-${type}`}>
                  نام دوره
                </Label>
                <Input type='text' name='Title' value={values.Title} onChange={handleChange} id={`name-${type}`} placeholder='React' />
              </Col>
              <Col md='4' className='mb-1'>
                <Label className='form-label' for={`Const-${type}`}>
                  قیمت دوره
                </Label>
                <Input type='text'  name='Cost' value={values.Cost} onChange={handleChange} id={`Const-${type}`} placeholder='45$' />
              </Col>
              <Col md='4' className='mb-1'>
                <Label className='form-label' for={`Capacity-${type}`}>
                  ظرفیت دوره
                </Label>
                <Input type='text' name='Capacity' value={values.Capacity} onChange={handleChange} id={`Capacity-${type}`} placeholder='20' />
              </Col>
            </Row>
            <Row>
            <Col md='4' className='mb-1'>
                <Label className='form-label' for={`details-${type}`}>
                  توضیحات کوتاه 
                </Label>
                <Input type='textarea' name='MiniDescribe' value={values.MiniDescribe} onChange={handleChange} id={`details-${type}`} placeholder='ذوره ...' />
              </Col>
              <Col md='4' className='mb-1'>
                <Label className='form-label' for={`Number-${type}`}>
                تعداد جلسات دوره
                </Label>
                <Input type='text' name='SessionNumber' value={values.SessionNumber} onChange={handleChange} id={`Number-${type}`} placeholder='20' />
              </Col>
              {/* Date $ clock */}
              {/* <Pickers/> */}
            </Row>
            <div className='d-flex justify-content-between'>
              <Button color='primary' className='btn-prev' onClick={() => stepper.previous()}>
                <ArrowLeft size={14} className='align-middle me-sm-25 me-0'></ArrowLeft>
                <span className='align-middle d-sm-inline-block d-none'>قبل</span>
              </Button>
              <Button type='submit' color='primary' className='btn-next' onClick={() => stepper.next()}>
                <span className='align-middle d-sm-inline-block d-none'>بعد</span>
                <ArrowRight size={14} className='align-middle ms-sm-25 ms-0'></ArrowRight>
              </Button>
            </div>
          </Form>
        )}
      </Formik>

    </Fragment>
  )
}

export default CoursesDetails
