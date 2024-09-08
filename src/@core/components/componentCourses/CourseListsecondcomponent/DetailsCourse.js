import React from 'react'
import TabsBasic from './TabBasic'
import { Col,Row } from 'reactstrap'
import FormDetailCourse from './FormDetailCourse'

const DetailsCourse = () => {
  return (
    <div >
    <Row className='d-flex flex-row'>
      <Col lg='4' className='mt-5'>
        {/* right  */}
        <FormDetailCourse/>
        </Col>
        <Col lg='8' className='mt-5'  >
        {/* left */}
        <TabsBasic/>
        </Col>
      
    </Row>
    </div>
  )
}

export default DetailsCourse
