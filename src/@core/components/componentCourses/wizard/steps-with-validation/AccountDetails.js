// ** React Imports
import { Fragment } from 'react'

// ** Utils
import { isObjEmpty } from '@utils'

// ** Third Party Components
import * as yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { ArrowLeft, ArrowRight } from 'react-feather'
import { yupResolver } from '@hookform/resolvers/yup'
import PickerDateTime from '../PickerDateTime'


// ** Reactstrap Imports
import { Form, Label, Input,CardBody, Row, Col, Button, FormFeedback } from 'reactstrap'
import Pickers from '../Pickers'
// import { Fragment } from 'react'

// ** Reactstrap Imports
// import { Row, Col, Card, CardBody, CardHeader, CardTitle } from 'reactstrap'
const defaultValues = {
  const: '',
  name: '',
  Capacity:"",
  password: '',
  sessions: ''
}

const AccountDetails = ({ stepper }) => {
  const SignupSchema = yup.object().shape({

    name: yup.string().required(),
    const: yup.string().required(),
    Capacity: yup.string().required(),
    password: yup.string().required(),
    sessions: yup
      .string()
      .required(),
      // .oneOf([yup.ref(`password`), null], 'Passwords must match')
  })

  // ** Hooks

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues,
    resolver: yupResolver(SignupSchema)
  })

  const onSubmit = () => {
    if (isObjEmpty(errors)) {
      stepper.next()
    }
  }

  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'> اطلاعات دوره را وارد کنید</h5>
        {/* <small className='text-muted'>د</small> */}
      </div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col md='4' className='mb-1'>
            <Label className='form-label' for='name'>
              نام دوره
            </Label>
            <Controller
              id='name'
              name='name'
              control={control}
              render={({ field }) => <Input placeholder='دوره...' invalid={errors.name && true} {...field} />}
            />
            {errors.name && <FormFeedback>{errors.name.message}</FormFeedback>}
          </Col>
          <Col md='4' className='mb-1'>
            <Label className='form-label' for={`const`}>
              قیمت دوره
            </Label>
            <Controller
              control={control}
              id='const'
              name='const'
              render={({ field }) => (
                <Input  placeholder="ريال" invalid={errors.const && true} {...field} />
              )}
            />
            {errors.const && <FormFeedback>{errors.const.message}</FormFeedback>}
          </Col>
          <Col md='4' className='mb-1'>
            <Label className='form-label' for={`Capacity`}>
              ظرفیت دوره
            </Label>
            <Controller
              control={control}
              id='Capacity'
              name='Capacity'
              render={({ field }) => (
                <Input  placeholder="ظرفیت" invalid={errors.Capacity && true} {...field} />
              )}
            />
            {errors.Capacity && <FormFeedback>{errors.Capacity.message}</FormFeedback>}
          </Col>
        </Row>
        <Row>
          <div className='form-password-toggle col-md-4 mb-1'>
            <Label className='form-label' for='password'>
            توضیحات مختصر
            </Label>
            <Controller
              id='password'
              name='password'
              control={control}
              render={({ field }) => <Input type='textarea' rows='1' defaultValue='درباره دوره' invalid={errors.password && true} {...field} />}
            />
            {errors.password && <FormFeedback>{errors.password.message}</FormFeedback>}
          </div>
          <div className='form-password-toggle col-md-4 mb-1'>
            <Label className='form-label' for='sessions'>
              تعداد جلسات دوره 
            </Label>
            <Controller
              control={control}
              id='sessions'
              name='sessions'
              render={({ field }) => <Input  invalid={errors.sessions && true} {...field} />}
            />
            {errors.sessions && <FormFeedback>{errors.sessions.message}</FormFeedback>}
          </div>
          <Pickers/>
    
        </Row>
          

      
        <div className='d-flex justify-content-between'>
          <Button color='primary' className='btn-prev' onClick={() => stepper.previous()}>
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

export default AccountDetails
