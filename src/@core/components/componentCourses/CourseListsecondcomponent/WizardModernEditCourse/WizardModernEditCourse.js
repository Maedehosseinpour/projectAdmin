// ** React Imports
import { useRef, useState, useEffect } from 'react'
import http from '../../../../core/services/interceptore'
import { useNavigate, useParams } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

// page edit course of page list course --------

// ** Custom Components
import Wizard from '@components/wizard'

// ** Steps
import DescriptionEdit from './Descriptionedit'
import CoursesDetailsEdit from './CoursesDetailsEdit'
import CoursesInfoEdite from './CoursesInfoEdite'
// import SocialLinksEdit from './'
import FilePicCourseEdit from './FilePicCourseEdit'

// ** Icons Imports
import { FileText, User, MapPin, Link,Camera,Edit,Archive,Cast } from 'react-feather'
// import FileUploaderMultiple from './steps/FileUploaderMultiple'

const WizardModernEditCourse = () => {
  const navigate = useNavigate();

  const [BaseDetail, setBaseDetail] = useState();
  const [courseType, setCourseType] = useState();
  const [courseTerm, setCourseTerm] = useState();
  const [courseRoom, setCourseRoom] = useState();
  const [courseLevel, setCourseLevel] = useState();
  const [courseTeacher, setCourseTeacher] = useState(); 
  const { id } = useParams(); 


  
  const CourseGeneralInfo =async () =>{
    const result = await http.get("/Course/GetCreate")
    setCourseType(result.courseTypeDtos)
    setCourseTerm(result.termDtos)
    setCourseRoom(result.classRoomDtos)
    setCourseLevel(result.courseLevelDtos)
    setCourseTeacher(result.teachers)
  }

const getBaseDetail = async () =>{
    const result = await http.get(`/Course/${id}`) 
    setBaseDetail(result)      
}


useEffect(() => {
  CourseGeneralInfo()
  getBaseDetail()
},[]);


const newCourseTypeDtos = []

for (let i = 0; i < courseType?.length; i++) {
var newObj ={
    value : courseType[i].id,
    label : courseType[i].typeName
}
newCourseTypeDtos.push(newObj)
}
const baseCourseTypeId = newCourseTypeDtos?.find((item)=>item.label === BaseDetail?.courseTypeName)



const newCourseLevelDtos = [];

for (let i = 0; i < courseLevel?.length; i++) {
    var newObj ={
    value : courseLevel[i].id,
    label : courseLevel[i].levelName
    }
    newCourseLevelDtos.push(newObj)   
}
const baseLevel = newCourseLevelDtos?.find((item)=>item.label === BaseDetail?.courseLevelName)
// baseLevel && console.log(baseLevel);


const newTeachers = [];

for (let i = 0; i < courseTeacher?.length; i++) {
var newObj ={
  value : courseTeacher[i].teacherId,
  label : courseTeacher[i].fullName
}
newTeachers.push(newObj)

}

const UpdateCourseFunc = async (values) =>{
  const data = new FormData();

  const keys = Object.keys(values)
  keys.forEach((key)=>{
    const item = values[key]
    data.append(key , item)
 
  })
   const result = await http.put("/Course" , data)

    if(result.success === true){
      toast.success(result.message)  
      navigate("/DetailCourse/" + result.id)  
    }

    else if(result.success === false){
      toast.error(result.errors)       
    }
    
  // console.log(result);
}


// ** Ref
  const ref = useRef(null)

  // ** State
  const [stepper, setStepper] = useState(null)

  const steps = [
    {
      id: 'Pic-Upload',
      title: 'آپلود عکس',
      subtitle: 'عکس مورد نظر را وارد کنید.',
      icon: <Camera size={18} />,
      content: <FilePicCourseEdit stepper={stepper} type='wizard-modern' />
    },
    {
      id: 'account-details',
      title: ' اطلاعات دوره',
      subtitle: 'اطلاعات دوره را وارد کنید.',
      icon: <FileText size={18} />,
      content: <CoursesDetailsEdit stepper={stepper} type='wizard-modern' />
    },
    {
      id: 'personal-info',
      title: 'ویژگی دوره',
      subtitle: 'ویژگی دوره را وارد کنید',
      icon: <Edit size={18} />,
      content: <CoursesInfoEdite stepper={stepper} type='wizard-modern' />
    },
    {
      id: 'step-Description',
      title: 'توضیحات دوره',
      subtitle: ' توضیحات دوره را وارد کنید',
      icon: <Archive size={18} />,
      content: <DescriptionEdit stepper={stepper} type='wizard-modern' />
    }
    // {
    //   id: 'social-links',
    //   title: ' تکنولوژی دوره ',
    //   subtitle: 'تکنولوژی دوره  را وارد کنید',
    //   icon: <Cast size={18} />,
    //   content: <SocialLinksEdit stepper={stepper} type='wizard-modern' />
    // }
  ]

  return (
    <div className='modern-horizontal-wizard'>
      <Wizard
        type='modern-horizontal'
        ref={ref}
        steps={steps}
        options={{
          linear: false
        }}
        instance={el => setStepper(el)}
      />
    </div>
  )
}

export default WizardModernEditCourse
