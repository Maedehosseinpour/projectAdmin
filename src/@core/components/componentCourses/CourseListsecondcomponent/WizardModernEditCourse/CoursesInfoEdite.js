// ** React Imports
import { Fragment } from 'react'

// ** Third Party Components
import Select from 'react-select'
import { ArrowLeft, ArrowRight } from 'react-feather'

// ** Utils
import { selectThemeColors } from '@utils'

// ** Reactstrap Imports
import { Label, Row, Col, Form, Input, Button } from 'reactstrap'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'

const CoursesInfoEdite = ({ stepper, type }) => {
  const HoldingOptions = [
    { value: 'حضوری', label: 'حضوری' },
    { value: 'انلاین', label: 'آنلاین' },
  ]
  const  LevelCourseOptions = [
    { value: 'مقدماتی', label: 'مقدماتی' },
    { value: 'متوسط', label: 'متوسط' },
    { value: 'پیشرفته', label: 'پیشرفته' }, 
  ]

  const ClassNameOptions = [
    { value: 'کلاس A', label: 'کلاس A' },
    { value: 'کلاس B', label: 'کلاس B' }
  ]

const  TicherOptions = [
    { value: 'استاد بحر', label: 'استاد بحر' },
    { value: 'استاد مهدی', label: 'استاد مهدی' },
    { value: 'استادمحسن', label: 'استاد محسن' },
    { value: 'استاد محمد رضا', label: 'استاد محمد رضا' }
  ]
  const  TermCourseOptions = [ 
    { value: 'ترم بهار', label: 'ترم بهار' },
    { value: 'تابستان', label: 'تابستان' },
    { value: 'پاییز', label: 'پاییز' },
    { value: 'زمستان', label: '  زمستان' }
  ]
  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>ویژگی های دوره را وارد کنید.</h5>
        {/* <small>Enter Your Personal Info.</small> */}
      </div>
      <Form onSubmit={e => e.preventDefault()}>
        <Row>
        <Col md='4' className='mb-1'>
            <Label className='form-label' for={`Holding-${type}`}>
             نحوه برگزاری
            </Label>
            <Select
              theme={selectThemeColors}
              isClearable={false}
              id={`Holding-${type}`}
              className='react-select'
              classNamePrefix='select'
              options={HoldingOptions}
              defaultValue={HoldingOptions[0]}
            />
          </Col>
          <Col md='4' className='mb-1'>
            <Label className='form-label' for={`LevelCourse-${type}`}>
             سطح دوره
            </Label>
            <Select
              theme={selectThemeColors}
              isClearable={false}
              id={`LevelCourse-${type}`}
              className='react-select'
              classNamePrefix='select'
              options={LevelCourseOptions}
              defaultValue={LevelCourseOptions[0]}
            />
          </Col>
          <Col md='4' className='mb-1'>
            <Label className='form-label' for={`ClassName-${type}`}>
              نام کلاس
            </Label>
            <Select
              theme={selectThemeColors}
              isClearable={false}
              id={`ClassName-${type}`}
              className='react-select'
              classNamePrefix='select'
              options={ClassNameOptions}
              defaultValue={ClassNameOptions[0]}
            />
          </Col>
        </Row>
        <Row>
          <Col md='4' className='mb-1'>
            <Label className='form-label' for={`Ticher-${type}`}>
              استاد 
            </Label>
            <Select
              theme={selectThemeColors}
              isClearable={false}
              id={`Ticher-${type}`}
              className='react-select'
              classNamePrefix='select'
              options={TicherOptions}
              defaultValue={TicherOptions[0]}
            />
          </Col>
          <Col md='4' className='mb-1'>
            <Label className='form-label' for={`TermCourse-${type}`}>
              ترم دوره
            </Label>
            <Select
              theme={selectThemeColors}
              isClearable={false}
              id={`TermCourse-${type}`}
              className='react-select'
              classNamePrefix='select'
              options={TermCourseOptions}
              defaultValue={TermCourseOptions[0]}
            />
          </Col>
          <Col md='4' className='mb-1'>
            <Label className='form-label' for={`linkCourse-${type}`}>
              لینک دوره
            </Label>
            <Input type='text' name={`linkCourse-${type}`} id={`linkCourse-${type}`} placeholder='http://' />
          </Col>
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

export default CoursesInfoEdite
