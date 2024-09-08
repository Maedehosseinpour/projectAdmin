// ** React Imports
import { Fragment } from 'react'

// ** Icons Imports
import { ArrowLeft, ArrowRight } from 'react-feather'

// ** Reactstrap Imports
import { Label, Row, Col, Input, Form, Button } from 'reactstrap';
import Pickers from '../../../../components/componentCourses/wizard/pickers';

const CoursesDetailsEdit = ({ stepper, type }) => {
  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>اطلاعات دوره را وارد کنید</h5>
        {/* <small className='text-muted'>Enter Your Account Details.</small> */}
      </div>
      <Form onSubmit={e => e.preventDefault()}>
        <Row>
          <Col md='4' className='mb-1'>
            <Label className='form-label' for={`name-${type}`}>
              نام دوره
            </Label>
            <Input type='text' name={`name-${type}`} id={`name-${type}`} placeholder='React' />
          </Col>
          <Col md='4' className='mb-1'>
            <Label className='form-label' for={`Const-${type}`}>
              قیمت دوره
            </Label>
            <Input type='text' name={`Const-${type}`} id={`Const-${type}`} placeholder='45$' />
          </Col>
          <Col md='4' className='mb-1'>
            <Label className='form-label' for={`Capacity-${type}`}>
              ظرفیت دوره
            </Label>
            <Input type='text' name={`Capacity-${type}`} id={`Capacity-${type}`} placeholder='20' />
          </Col>
        </Row>
        <Row>
        <Col md='4' className='mb-1'>
            <Label className='form-label' for={`details-${type}`}>
              توضیحات کوتاه 
            </Label>
            <Input type='textarea' name={`details-${type}`} id={`details-${type}`} placeholder='ذوره ...' />
          </Col>
          <Col md='4' className='mb-1'>
            <Label className='form-label' for={`Number-${type}`}>
            تعداد جلسات دوره
            </Label>
            <Input type='text' name={`Number-${type}`} id={`Number-${type}`} placeholder='20' />
          </Col>
          {/* Date $ clock */}
          <Pickers/>
        </Row>
        <div className='d-flex justify-content-between'>
          <Button color='primary' className='btn-prev' onClick={() => stepper.previous()}>
            <ArrowLeft size={14} className='align-middle me-sm-25 me-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none'>قبل</span>
          </Button>
          <Button color='primary' className='btn-next' onClick={() => stepper.next()}>
            <span className='align-middle d-sm-inline-block d-none'>بعد</span>
            <ArrowRight size={14} className='align-middle ms-sm-25 ms-0'></ArrowRight>
          </Button>
        </div>
      </Form>
    </Fragment>
  )
}

export default CoursesDetailsEdit
