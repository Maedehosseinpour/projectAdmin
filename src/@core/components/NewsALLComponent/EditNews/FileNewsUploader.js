// ** React Imports
import { useState, Fragment } from 'react'
import { ArrowLeft, ArrowRight } from 'react-feather'
// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Button, ListGroup, ListGroupItem } from 'reactstrap'
import '@styles/react/libs/react-select/_react-select.scss'
import { selectThemeColors } from '@utils'
// ** Third Party Imports
import { useDropzone } from 'react-dropzone'
import { FileText, X, DownloadCloud } from 'react-feather'

const FileNewsUploader = ({ stepper}) => {
  // ** State
  const [files, setFiles] = useState([])
  

  const { getRootProps, getInputProps } = useDropzone({
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

  const handleRemoveAllFiles = ({stepper}) => {
    setFiles([])
  }

  return (
    <div>

   
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>عکس خبر را وارد کنید.</CardTitle>
      </CardHeader>
      <CardBody>
        <div {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          <div className='d-flex align-items-center justify-content-center flex-column'>
            <DownloadCloud size={64} />
            <h5>عکس خبر را اینجا وارد کنید</h5>
            <p className='text-secondary'>
          فایل را بکشید یاروی{' '}
              <a href='/' onClick={e => e.preventDefault()}>
                مرورگر
              </a>{' '}
              کلیک کنید
            </p>
          </div>
        </div>
        {files.length ? (
          <Fragment>
            <ListGroup className='my-2'>{fileList}</ListGroup>
            <div className='d-flex justify-content-end'>
              <Button className='me-1' color='danger' outline onClick={handleRemoveAllFiles}>
               حذف همه
              </Button>
              {/* <Button color='primary'>Upload Files</Button> */}
            </div>
          </Fragment>
        ) : null}
      </CardBody>
    </Card>
      <div className='d-flex justify-content-between'>
      <Button color='primary' className='btn-prev' onClick={() => stepper.previous()}>
        <ArrowLeft size={14} className='align-middle me-sm-25 me-0'></ArrowLeft>
        <span className='align-middle d-sm-inline-block d-none'>قبل</span>
      </Button>
      <div className='d-flex justify-content-center'>
                <Button className='me-1' color='primary' type='submit' onClick={e => e.preventDefault()}>
                  ثبت تغییرات
                </Button>
                <Button outline color='secondary' type='reset'>
                  لغو
                </Button>
              </div>
    </div>
     </div>
  )
}

export default FileNewsUploader
