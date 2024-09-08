// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Row, Col, Input, Form, Button, Label } from 'reactstrap'
import { Formik } from 'formik'
import http from "../../../..//@core/core/services/interceptore";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import {  X } from 'react-feather'
// modal dastresy *

const ModalaccessUser = ({setIsOpenAccessUser}) => {
  const navigate = useNavigate();

  const onSubmit =async (values) =>{
    const userObj = {
      lastName : values.lastName,
      firstName : values.firstName,
      gmail : values.gmail,
      password : values.password,
      phoneNumber : values.phoneNumber,
      isStudent : values.isAdmin,
      isAdmin : values.isStudent,
      
      isTeacher : values.isTeacher
      
    }

    const result = await http.post(`/User/CreateUser` , userObj)

    if(result.success === true){
      toast.success(result.message)  
      
      navigate('/Users/Profile' + result.id) 
    }

    else if(result.success === false){
      toast.error(result.errors)       
    }

    // console.log(result);
  }

  return (
    <Card className='w-100 mt-3  '>
          <a className='customizer-close d-flex justify-content-end ' onClick={() => setIsOpenAccessUser(false) }>
            <X />
          </a>
      <CardHeader>
        <CardTitle tag='h4'>   دسترسی مورد نظر را به کاربر بدهید</CardTitle>
      </CardHeader>

      <CardBody >
        <div className="d-flex">
                {/* <Label for="icon-primary" className="form-check-label me-50 mt-45">
                اطلاعات را وارد کنید.
                </Label> */}
                {/* <div className="form-switch form-check-primary">
                <Input
                    onChange={(e) => {
                    // qClient.invalidateQueries("getAllNews");
                    setApiParam({ ...apiParam, IsActive: e.target.checked });
                    refetch();
                    console.log(apiParam);
                    }}
                    type="switch"
                    // defaultChecked
                    checked={apiParam.IsActive}
                    id="icon-primary"
                    name="icon-primary"
                />
                <CustomLabel htmlFor="icon-primary" />
                </div> */}
        </div>
        <Formik className='w-25 p-3'  onSubmit={onSubmit} initialValues={{lastName : '' , firstName : '' , gmail : '' , password : '' , phoneNumber : '' , isStudent : true ,isAdmin : false , isTeacher : false}}>
          {({values , handleSubmit, handleChange , setFieldValue }) => (
            <form  onSubmit={handleSubmit}>
              <Row >
               
                <Col md='4' sm='12' className='mb-1'>
                  <Label className='form-label' for='isAdmin'>
                     ادمین
                  </Label>
                  <Input onChange={handleChange} value={values.isAdmin} type='checkbox' defaultChecked id='isAdmin' />
                </Col>   
                <Col md='4' sm='12' className='mb-1'>
                  <Label className='form-label' for='isStudent'>
                    دانشجو
                  </Label>
                  <Input onChange={handleChange} value={values.isStudent} type='checkbox' defaultChecked id='isStudent' />
                </Col>
                <Col md='4' sm='12' className='mb-1'>
                  <Label className='form-label' for='isTeacher'>
                     استاد
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


      </CardBody>
    </Card>
  )
}
export default ModalaccessUser
