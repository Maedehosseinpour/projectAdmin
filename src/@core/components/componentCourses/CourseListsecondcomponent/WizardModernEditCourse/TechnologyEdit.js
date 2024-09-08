// ** React Imports
import { Fragment } from 'react'
import Select from 'react-select'
import { selectThemeColors } from '@utils'
// ** Icons Imports
import { ArrowLeft } from 'react-feather'

// ** Reactstrap Imports
import { Label, Row, Col, Form, Input, Button } from 'reactstrap'

const TechnologyEdit = ({ stepper, type }) => {
  const  TechnologyOptions = [
    { value: 'Front-End', label: 'Front-End' },
    { value: 'Backend', label: 'Backend' },
    { value: 'React.js', label: 'React.js' }, 
  ]
  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>تکنولوژی دوره</h5>
        {/* <small>Enter Your Social Links.</small> */}
      </div>
      <Form onSubmit={e => e.preventDefault()}>
        <Row>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for={`twitter-${type}`}>
              Twitter
            </Label>
            <Input type='text' id={`twitter-${type}`} name='twitter' placeholder='https://twitter.com/abc' />
          </Col>
         
          <Col md='6' className='mb-1'>
            <Label className='form-label' for={`linkedin-${type}`}>
              Linkedin
            </Label>
            <Input type='text' id={`linkedin-${type}`} name='linkedin' placeholder='https://linkedin.com/abc' />
          </Col>
        </Row>
        <Row>
        
          
          <Row>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for={`Technology-${type}`}>
              تکنولوژی دوره
            </Label>
            <Select
              theme={selectThemeColors}
              isClearable={false}
              id={`Technology-${type}`}
              className='react-select'
              classNamePrefix='select'
              options={TechnologyOptions}
              defaultValue={TechnologyOptions[0]}
            />
            </Col>
        </Row>
        </Row>
        <div className='d-flex justify-content-between'>
          <Button color='primary' className='btn-prev' onClick={() => stepper.previous()}>
            <ArrowLeft size={14} className='align-middle me-sm-25 me-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none'> قبل</span>
          </Button>
          <Button color='success' className='btn-submit' onClick={() => alert('submitted')}>
            ایجاد دوره
          </Button>
        </div>
      </Form>
    </Fragment>
    
  )
}

export default TechnologyEdit
