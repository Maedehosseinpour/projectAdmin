// ** React Imports
// import { Editor } from 'draft-js'
// import { Editor } from 'draft-js'
import { Fragment } from "react";
// import { Editor } from 'react-draft-wysiwyg'
import { fields } from "./Editor";
import EditorJS from '@editorjs/editorjs';
// ** Icons Imports
import { ArrowLeft, ArrowRight } from "react-feather";
import EditorJsComponent from "./Editorjs"
// ** Reactstrap Imports
import { Label, Row, Col, Input, Form, Button } from "reactstrap";
import { Formik } from "formik";



const Description = ({stepper, type,  CreatCourseValues, setCreatCourseValues,}) => {
     const thirdStep = (values) => {
    setCreatCourseValues((old) => ({ ...old, ...values }));
    // console.log(CreatCourseValues)
  };
  



const editor = new EditorJS({
  /**
   * Id of Element that should contain Editor instance
   */
   holder: 'editorjs'
});



  return (
    <Fragment>
      <div className="content-header">
        <h5 className="mb-0">توضیحات دوره را وارد کنید.</h5>
        {/* <small>Enter Your Address.</small> */}
      </div>
      <Formik initialValues={{ describe: "" }} onSubmit={thirdStep}>
        {({ values, handleSubmit, handleChange }) => (
          <Form onSubmit={handleSubmit}>
            
            
            <Row className=" mt-10">
            
           
            {/* setDescribe={setDescribe}  defaultData={defaultData} dontShowBtn={dontShowBtn}*/}
               
                  <EditorJsComponent />
              {/* <Col md="6" className="mb-1"> */}
                {/* <Label className="form-label" for={`landmark-${type}`}> */}
               
                {/* </Label> */}
             
              {/* </Col> */}

            </Row>
           
            <div className="d-flex justify-content-between">
              <Button
                color="primary"
                className="btn-prev"
                onClick={() => stepper.previous()}
              >
                <ArrowLeft
                  size={14}
                  className="align-middle me-sm-25 me-0"
                ></ArrowLeft>
                <span className="align-middle d-sm-inline-block d-none">
                  قبل
                </span>
              </Button>
              <Button
                color="primary"
                className="btn-next"
                onClick={() => stepper.next()}
              >
                <span className="align-middle d-sm-inline-block d-none">
                  بعد
                </span>
                <ArrowRight
                  size={14}
                  className="align-middle ms-sm-25 ms-0"
                ></ArrowRight>
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </Fragment>
  );
};


export default Description;
