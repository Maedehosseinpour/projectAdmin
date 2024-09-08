// ** React Imports
import { Fragment } from 'react'

// ** Third Party Components
import Select from 'react-select'
import { useForm, Controller } from 'react-hook-form'
import { ArrowLeft, ArrowRight } from 'react-feather'

// ** Utils
import { selectThemeColors } from '@utils'

// ** Reactstrap Imports
import { Label, Row, Col, Button, Form, Input, FormFeedback } from 'reactstrap'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'

const defaultValues = {
  lastName: '',
  firstName: ''
}

const PersonalInfo = ({ stepper }) => {
  // ** Hooks
  const {
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues })

  const onSubmit = data => {
    if (Object.values(data).every(field => field.length > 0)) {
      stepper.next()
    } else {
      for (const key in data) {
        if (data[key].length === 0) {
          setError(key, {
            type: 'manual',
            message: `Please enter a valid ${key}`
          })
        }
      }
    }
  }

  const LevelCourses = [
    { value: 'مبتدی', label: 'مبتدی' },
    { value: 'پیشرفته', label: 'پیشرفته' },
    { value: 'متوسط', label: 'متوسط' },
  ]

  const CourseArt = [
    { value: 'حضوری', label: 'حضوری' },
    { value: 'انلاین', label: 'آنلاین' },
    { value: 'حضوری/انلاین', label: 'حضوری/انلاین' },
  ]

  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>اطلاعات دوره را وارد کنید</h5>
        {/* <small>Enter Your Personal Info.</small> */}
      </div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for='firstName'>
              نام دوره
            </Label>
            <Controller
              id='firstName'
              name='firstName'
              control={control}
              render={({ field }) => <Input placeholder='َArezoo' invalid={errors.firstName && true} {...field} />}
            />
            {errors.firstName && <FormFeedback>{errors.firstName.message}</FormFeedback>}
          </Col>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for='lastName'>
              قیمت دوره
            </Label>
            <Controller
              id='lastName'
              name='lastName'
              control={control}
              render={({ field }) => <Input placeholder='ريال' invalid={errors.lastName && true} {...field} />}
            />
            {errors.lastName && <FormFeedback>{errors.lastName.message}</FormFeedback>}
          </Col>
        </Row>
        <Row>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for='Level'>
             سطح دوره 
            </Label>
            <Select
              theme={selectThemeColors}
              isClearable={false}
              id={`Level`}
              className='react-select'
              classNamePrefix='انتخاب'
              options={LevelCourses}
              defaultValue={LevelCourses[0]}
            />
          </Col>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for='Art'>
            نوع دوره
            </Label>
            <Select
              isMulti
              isClearable={false}
              theme={selectThemeColors}
              id={`Art`}
              options={CourseArt}
              className='react-select'
              classNamePrefix='انتخاب'
            />
          </Col>
        </Row>
        <div className='d-flex justify-content-between'>
          <Button type='button' color='primary' className='btn-prev' onClick={() => stepper.previous()}>
            <ArrowLeft size={14} className='align-middle me-sm-25 me-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none'>قبل</span>
          </Button>
          <Button type='submit' color='primary' className='btn-next'>
            <span className='align-middle d-sm-inline-block d-none'>بعد</span>
            <ArrowRight size={14} className='align-middle ms-sm-25 ms-0'></ArrowRight>
          </Button>
        </div>
      </Form>
    </Fragment>
  )
}

export default PersonalInfo
