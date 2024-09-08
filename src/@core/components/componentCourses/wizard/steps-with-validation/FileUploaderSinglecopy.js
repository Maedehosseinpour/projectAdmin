// ** React Imports
import {useState, Fragment } from 'react'

// ** Utils
import { isObjEmpty } from '@utils'

// ** Third Party Components
import * as yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { ArrowLeft, ArrowRight } from 'react-feather'
import { yupResolver } from '@hookform/resolvers/yup'

// ** Reactstrap Imports
// import { Form,  Input, Row,  Button, FormFeedback } from 'reactstrap'
// import FileUploaderSingle from './FileUploaderSingle'
import { Card, CardHeader,  Input, Row, FormFeedback, Label,Form, Col,CardTitle, CardBody,ListGroup,Button, ListGroupItem } from 'reactstrap'
import { useDropzone } from 'react-dropzone'
import { FileText, X, DownloadCloud } from 'react-feather'
const defaultValues = {
  // email: '',
  // username: '',
  // password: '',
  // confirmPassword: ''
  Image:"",
}

const FileUploaderSinglecopy = ({ stepper }) => {
  const [files, setFiles] = useState([])

  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    onDrop: acceptedFiles => {
      setFiles([...files, ...acceptedFiles.map(file => Object.assign(file))])
    }
  })
  const renderFilePreview = file => {
    if (file.type.startsWith('image')) {
      return <img className='rounded' alt={file.name} src={URL.createObjectURL(file)} height='28' width='28' />
    } else {
      return <FileText size='28' />
    }
  }

  const handleRemoveFile = file => {
    const uploadedFiles = files
    const filtered = uploadedFiles.filter(i => i.name !== file.name)
    setFiles([...filtered])
  }

  const renderFileSize = size => {
    if (Math.round(size / 100) / 10 > 1000) {
      return `${(Math.round(size / 100) / 10000).toFixed(1)} mb`
    } else {
      return `${(Math.round(size / 100) / 10).toFixed(1)} kb`
    }
  }

  const fileList = files.map((file, index) => (
    <ListGroupItem key={`${file.name}-${index}`} className='d-flex align-items-center justify-content-between'>
      <div className='file-details d-flex align-items-center'>
        <div className='file-preview me-1'>{renderFilePreview(file)}</div>
        <div>
          <p className='file-name mb-0'>{file.name}</p>
          <p className='file-size mb-0'>{renderFileSize(file.size)}</p>
        </div>
      </div>
      <Button color='danger' outline size='sm' className='btn-icon' onClick={() => handleRemoveFile(file)}>
        <X size={14} />
      </Button>
    </ListGroupItem>
  ))

  const handleRemoveAllFiles = () => {
    setFiles([])
  }
   
  const onSubmit = () => {
    if (isObjEmpty(errors)) {
      stepper.next()
    }
  }
  const SignupSchema = yup.object().shape({
  
    Image: yup.string().required(),
   
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

 
  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>آپلود عکس</h5>
        <small className='text-muted'>عکس دوره مورد نظر را وارد کنید.</small>
      </div>
      <Form onSubmit={handleSubmit(onSubmit)}>
          {/* <FileUploaderSingle/> */}
          {/* copy uplod ax */}
          <Card>
      <CardHeader>
        <CardTitle tag='h4'>عکس دوره را آپلود کنید.</CardTitle>
      </CardHeader>
      <CardBody>
        <div {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          <div className='d-flex align-items-center justify-content-center flex-column'>
            <DownloadCloud size={64} />
            <h5>

فایل‌ها را اینجا رها کنید یا کلیک کنید تا</h5>
            <p className='text-secondary'>
              

فایل‌ها را اینجا رها کنید یا کلیک کنید{' '}
              <a href='/' onClick={e => e.preventDefault()}>
                browse
              </a>{' '}
              thorough your machine
            </p>
          </div>
        </div>
        {files.length ? (
          <Fragment>
            <ListGroup className='my-2'>{fileList}</ListGroup>
            {/* <div className='d-flex justify-content-end'>
              <Button className='me-1' color='danger' outline onClick={handleRemoveAllFiles}>
                Remove All
              </Button>
              
              <Controller
              id='Image'
              name='Image'
              control={control}
              render={({ field }) =><Button invalid={errors.Image && true} {...field} color='primary'>P</Button>}
            />
            {errors.Image && <FormFeedback>{errors.Image.message}</FormFeedback>}
            </div> */}
             {/* <Col md='4' className='mb-1 W-25'>
            <Label className='form-label' for='Image'>
              
            </Label>
            <Controller
              id='Image'
              name='Image'
              control={control}
              render={({ field }) => <button  invalid={errors.Image && true} {...field} >phh</button>}
            />
            {errors.Image && <FormFeedback>{errors.Image.message}</FormFeedback>}
          </Col> */}
          </Fragment>
        ) : null}
      </CardBody>

    </Card>
    <Col md='4' className='mb-1 W-0 '>
            <Label className='form-label' for='Image'>
              
            </Label>
            <Controller
              id='Image'
              name='Image'
              control={control}
              render={({ field }) => <Input placeholder='حذف عکس' invalid={errors.Image && true} {...field} />}
            />
            {errors.Image && <FormFeedback>{errors.Image.message}</FormFeedback>}
          </Col>
  
        <div className='d-flex justify-content-between'>
          <Button color='secondary' className='btn-prev' outline disabled>
            <ArrowLeft size={14} className='align-middle me-sm-25 me-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none'>Previous</span>
          </Button>
          <Button type='submit' color='primary' className='btn-next' onClick={() => stepper.next()}>
            <span className='align-middle d-sm-inline-block d-none'>Next</span>
            <ArrowRight size={14} className='align-middle ms-sm-25 ms-0'></ArrowRight>
          </Button>
        </div>
      </Form>
    </Fragment>
  )
}

export default FileUploaderSinglecopy
