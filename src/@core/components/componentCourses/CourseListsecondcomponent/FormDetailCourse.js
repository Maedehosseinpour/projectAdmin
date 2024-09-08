import { useNavigate, useParams } from "react-router-dom";
import http from "../../../core/services/interceptore";
import { useQuery } from "react-query";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardText,
  CardTitle,
  Badge
} from "reactstrap";
import { Row, Col } from 'reactstrap'
// import AddTechModal from "../FormCreatCourse/AddTechModal";
import { useState , useEffect } from "react";
import CardTitles from "./CardTitles";
// import AddGroupModal from "./AddGroupModal";
// import CommentModal from "./CommentModal/CommentModal";



const FormDetailCourse = () => {
  const navigate = useNavigate();
  const [rand, setRand] = useState()  
  const [data, setData] = useState()
  const [ThisCourseData, setThisCourseData] = useState()
  const [courseGroup, setCourseGroup] = useState()
  const [show, setShow] = useState(false)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)
  const { id } = useParams();

  



  const getCourseInfoForDetail = async () => {
    const result = await http.get(`/Course/${id}`);
    const result2 = await http.get(`/CourseGroup/GetCourseGroup?TeacherId=${result.teacherId}&CourseId=${id}`);
    setData(result)
    setCourseGroup(result2)
    // console.log(result2);

  };



  const getCourseListInDetail =async () =>{
    const result = await http.get(`/Course/CourseList?PageNumber=1&RowsOfPage=200&SortingCol=DESC&SortType=Expire&Query`);   
    const thisCourse =  result.courseDtos.find((item)=>item.courseId === id)
    setThisCourseData(thisCourse)
  
  }


  const handleDelete = async (x) => {
    const obj = {
      active: ThisCourseData.isdelete === true ? false : true,
      id: id,   
    }

 
    const result = await http.delete(`/Course/DeleteCourse/`, {
      data: obj,
    });
    getCourseInfoForDetail()
    getCourseListInDetail()
      //  console.log(result); 
  };



  const handleActive = async (values) => {
    const courseobjAct = {
      active: data.isActive === true ? false : true,
      id: id,
    };
    const result = await http.put(
      `/Course/ActiveAndDeactiveCourse`,
      courseobjAct
    );
    getCourseInfoForDetail()
    return result;
  };



  useEffect(() => {
    getCourseInfoForDetail()
    getCourseListInDetail()
  },[]);

  return (
    <>


      <Card>

        <CardHeader className="p-1 items-center border-2 d-flex justify-content-center">
          <CardTitles />
          <Badge color="light-primary" > <div  style={{fontSize:'25px', padding:"4px"}}>جزییات دوره </div></Badge>
        </CardHeader>
        {data && (<CardBody>
            
            {data.imageAddress &&  <img src={data.imageAddress} alt="" style={{display:'block' , margin:'auto', height:'200px' , overflow:'hidden'}}/>}
            

            <Row >
              <Col lg='12'>
                
                <div  style={{fontSize:'20px'}}>
                <Badge  className=" mt-1 mb-1 p-1" color='light-primary' >   دوره:</Badge>
                  
                  <CardText>{data.title}</CardText>
                </div>
                
                <div className="mt-2" style={{fontSize:'20px'}}>
                  <Badge  className="mt-2 mb-1 p-1" color='light-primary'>  نام استاد :</Badge>
                  <CardText>{data.teacherName}</CardText>
                </div>

                <div className="mt-2" style={{fontSize:'20px'}}>
                  <Badge className="mt-2 mb-1 p-1"  color='light-primary'>  قیمت  دوره  :</Badge>  
                  <CardText>{data.cost} تومان</CardText>
                </div>

                <div className="mt-2" style={{fontSize:'20px'}}>
                  <Badge className="mt-2 mb-1 p-1" color='light-primary'>   وضعیت حذف :</Badge>  
                  <div>
                    <Button onClick={()=>handleDelete(ThisCourseData.isdelete)} color={ThisCourseData.isdelete === false ? "primary" : 'warning'}>{ThisCourseData.isdelete === false ? "در حال برگذاری" : "حذف شده"}</Button>                    
                  </div>
                </div>  

                <div className="mt-2" style={{fontSize:'20px'}}>
                  <Badge className="mt-2 mb-1 p-1" color='light-primary'>    وضعیت فعال بودن  :</Badge>  
                  <div>
                    <Button onClick={handleActive} color={data.isActive === true ? "primary" : 'warning'}>{data.isActive === true ? "فعال" : "غیرفعال"}</Button>                    
                  </div>
                </div> 
                <div className="mt-2" style={{fontSize:'20px'}}>
                  <Badge className="mt-2 mb-1 p-1" className="mt-2 mb-1 p-1" color='light-primary'>  شروع دوره: :</Badge>                  
                  <CardText>{data.startTime}</CardText>
                </div>

                <div className="mt-2" style={{fontSize:'20px'}}>
                  <Badge className="mt-2 mb-1 p-1" color='light-primary'>  پایان دوره:</Badge>  
                  <CardText>{data.endTime}</CardText>
                </div>               
              </Col>
          </Row> 
          <Row>
              <Col lg='6'>
                <div className="mt-2">
                  <Badge color='light-primary'>   سطح دوره     :</Badge>    
                  <CardText>{data.courseLevelName}</CardText>
                </div>

                <div className="mt-2">
                  <Badge color='light-primary'>   وضعیت دوره     :</Badge>    
                  <CardText>{data.courseStatusName}</CardText>
                </div>

                <div className="mt-2">
                  <Badge color='light-primary'>   نوع کلاس :</Badge>                    
                  <CardText>{data.courseTypeName}</CardText>
                </div>

                <div className="mt-2">
                  <Badge color='light-primary'>   شماره کلاس :</Badge>  
                  <CardText>{data.courseClassRoomName}</CardText>
                </div>

                 </Col>
            </Row>
           




          </CardBody>) }
      </Card>


      {/* <Button onClick={()=>navigate(`/UpdateCourse/${id}`)} color='warning'>ادیت دوره</Button> */}
    </>
  );
};

export default FormDetailCourse;
