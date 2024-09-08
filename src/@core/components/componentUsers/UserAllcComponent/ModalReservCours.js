// ** React Imports
import { Fragment, useState } from 'react'
import { Formik } from 'formik'
import http from "../../../core/services/interceptore";


// ** Reactstrap Imports
import {
  Card,
  Row,
  Col,
  Modal,
  Input,
  Label,
  Button,
  CardBody,
  CardText,
  CardTitle,
  ModalBody,
  ModalHeader,
  FormFeedback
} from 'reactstrap'

// ** Third Party Components
import Select from 'react-select'
import { User, Check, X } from 'react-feather'
import { useForm, Controller } from 'react-hook-form'

// ** Utils
import { selectThemeColors } from '@utils'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'

const statusOptions = [
  { value: 'فعال', label: 'فعال' },
  { value: 'غیر فعال', label: 'غیر فعال' },
  // { value: 'suspended', label: 'Suspended' }
]

const countryOptions = [
  { value: 'uk', label: 'UK' },
  { value: 'usa', label: 'USA' },
  { value: 'france', label: 'France' },
  { value: 'russia', label: 'Russia' },
  { value: 'canada', label: 'Canada' }
]

const languageOptions = [
  { value: 'english', label: 'English' },
  { value: 'spanish', label: 'Spanish' },
  { value: 'french', label: 'French' },
  { value: 'german', label: 'German' },
  { value: 'dutch', label: 'Dutch' }
]

const defaultValues = {
  firstName: 'آرزو',
  lastName: 'شهابی',
  username: 'MARFA.Tak-tik'
}

const ModalReservCours = () => {
  // ** States
  const [show, setShow] = useState(false)

  // ** Hooks
  const {
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues })

  const onSubmit = data => {
    if (Object.values(data).every(field => field.length > 0)) {
      return null
    } else {
      for (const key in data) {
        if (data[key].length === 0) {
          setError(key, {
            type: 'manual'
          })
        }
      }
    }
  }

  return (
    <Fragment>
      <Card className='mb-0'>
          <Button color='primary'  onClick={() => setShow(true)}>
     رزرو

          </Button>
        
      </Card>
      <Modal isOpen={show} toggle={() => setShow(!show)} className='modal-dialog-centered modal-lg'>
        <ModalHeader className='bg-transparent' toggle={() => setShow(!show)}></ModalHeader>
        <ModalBody className='px-sm-5 mx-50 pb-5'>
          <div className='text-center mb-2'>
            <h1 className='mb-1'>دوره رزرو کاربر </h1>
            {/* <p>کاربر به عنوان ... از سایت استفاده کند.< /p> */}
          </div>
          <Row tag='form' className='gy-1 pt-75' onSubmit={handleSubmit(onSubmit)}>
          
     
           
  <Formik className='w-25 p-3'  onSubmit={onSubmit} initialValues={{lastName : '' , firstName : '' , gmail : '' , password : '' , phoneNumber : '' , isStudent : true ,isAdmin : false , isTeacher : false}}>
          {({values , handleSubmit, handleChange , setFieldValue }) => (
            <form  onSubmit={handleSubmit}>
              <Row >
               
                <Col md='4' sm='12' className='mb-1'>
                  <Label className='form-label' for='isAdmin'>
                     دوره مقدماتی
                  </Label>
                  <Input onChange={handleChange} value={values.isAdmin} type='checkbox' defaultChecked id='isAdmin' />
                </Col>   
                <Col md='4' sm='12' className='mb-1'>
                  <Label className='form-label' for='isStudent'>
                    دوره پیشرفته
                  </Label>
                  <Input onChange={handleChange} value={values.isStudent} type='checkbox' defaultChecked id='isStudent' />
                </Col>
                <Col md='4' sm='12' className='mb-1'>
                  <Label className='form-label' for='isTeacher'>
                     دوره مبتدی
                  </Label>
                  <Input onChange={handleChange} value={values.isTeacher} type='checkbox'  id='isTeacher' />
                </Col>                              
                                              

              </Row>

                <Button className='me-1 float-end' color='primary' type='submit' >
                 ارسال
                </Button>

            </form>             
          )}
         
        </Formik>
                 </Row>
        </ModalBody>
      </Modal>
    </Fragment>
  )
}

export default ModalReservCours
