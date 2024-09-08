// ** React Imports
import { Fragment, useState } from 'react'

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

const EditUserExample = () => {
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
      <Card>
          <Button color='primary' onClick={() => setShow(true)}>
           اضافه کردن کاربر جدید
          <User className='font-large-2 my-auto ' size={20} />

          </Button>
        
      </Card>
      <Modal isOpen={show} toggle={() => setShow(!show)} className='modal-dialog-centered modal-lg'>
        <ModalHeader className='bg-transparent' toggle={() => setShow(!show)}></ModalHeader>
        <ModalBody className='px-sm-5 mx-50 pb-5'>
          <div className='text-center mb-2'>
            <h1 className='mb-1'>اضافه کردن کاربر جدید</h1>
            <p>اطلاعات کاربر را در جدول زیر  تکمیل کنید.< /p>
          </div>
          <Row tag='form' className='gy-1 pt-75' onSubmit={handleSubmit(onSubmit)}>
            <Col md={6} xs={12}>
              <Label className='form-label' for='firstName'>
                نام
              </Label>
              <Controller
                control={control}
                name='firstName'
                render={({ field }) => {
                  return (
                    <Input
                      {...field}
                      id='firstName'
                      placeholder='آرزو'
                      value={field.value}
                      invalid={errors.firstName && true}
                    />
                  )
                }}
              />
              {errors.firstName && <FormFeedback>Please enter a valid First Name</FormFeedback>}
            </Col>
            <Col md={6} xs={12}>
              <Label className='form-label' for='lastName'>
             نام خانوادگی
              </Label>
              <Controller
                name='lastName'
                control={control}
                render={({ field }) => (
                  <Input {...field} id='lastName' placeholder='شهابی' invalid={errors.lastName && true} />
                )}
              />
              {errors.lastName && <FormFeedback>Please enter a valid Last Name</FormFeedback>}
            </Col>
            <Col xs={12}>
              <Label className='form-label' for='username'>
          نام کاربری
              </Label>
              <Controller
                name='username'
                control={control}
                render={({ field }) => (
                  <Input {...field} id='username' placeholder='MARFA.Tak-Tik' invalid={errors.username && true} />
                )}
              />
              {errors.username && <FormFeedback>Please enter a valid Username</FormFeedback>}
            </Col>
            <Col md={6} xs={12}>
              <Label className='form-label' for='email'>
                ایمیل
              </Label>
              <Input type='email' id='email' placeholder='MARFA@domain.com' />
            </Col>
            <Col md={6} xs={12}>
              <Label className='form-label' for='status'>
              وضعیت:
              </Label>
              <Select
                id='status'
                isClearable={false}
                className='react-select'
                classNamePrefix='select'
                options={statusOptions}
                theme={selectThemeColors}
                defaultValue={statusOptions[0]}
              />
            </Col>
            <Col md={6} xs={12}>
              <Label className='form-label' for='tax-id'>
               کد کاربر
              </Label>
              <Input id='tax-id' defaultValue='MARFA-20' placeholder='MARFA-20' />
            </Col>
            <Col md={6} xs={12}>
              <Label className='form-label' for='contact'>
               شماره تماس
              </Label>
              <Input id='contact' defaultValue='09119334422' placeholder='09112285006' />
            </Col>
{/*           
            <Col xs={12}>
              <div className='d-flex align-items-center'>
                <div className='form-switch'>
                  <Input type='switch' defaultChecked id='billing-switch' name='billing-switch' />
                  <Label className='form-check-label' htmlFor='billing-switch'>
                    <span className='switch-icon-left'>
                      <Check size={14} />
                    </span>
                    <span className='switch-icon-right'>
                      <X size={14} />
                    </span>
                  </Label>
                </div>
            
              </div>
            </Col> */}
            <Col xs={12} className='text-center mt-2 pt-50'>
              <Button type='submit' className='me-1' color='primary'>
                ثبت اطلاعات
              </Button>
              <Button type='reset' color='secondary' outline onClick={() => setShow(false)}>
                لغو
              </Button>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </Fragment>
  )
}

export default EditUserExample
