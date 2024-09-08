// ** React Imports
import { useRef, useState } from 'react'

// ** Custom Components
import Wizard from '@components/wizard'

// ** Steps
import Description from './steps/Description'
import Technology from './steps/Technology'
import CoursesInfo from './steps/CoursesInfo'
import CoursesDetails from './steps/CoursesDetails'

// ** Icons Imports
import { FileText, User, MapPin, Link,Camera,Edit,Archive,Cast } from 'react-feather'
import FileUploaderMultiple from './steps/FileUploaderMultiple'

const WizardModern = () => {
  // ** Ref
  const ref = useRef(null)

  // ** State
  const [stepper, setStepper] = useState(null)
  const [CreatCourseValues, setCreatCourseValues] = useState({});

  // const handleSubmit = (values)=>{
  //   const data = new FormData()
  //   data.append('Title' , values.Title)

  //   const res = http.post('khhdvl' , data)
  // }

  const steps = [
    {
      id: 'Pic-Upload',
      title: 'آپلود عکس',
      subtitle: 'عکس مورد نظر را وارد کنید.',
      icon: <Camera size={18} />,
      content: <FileUploaderMultiple CreatCourseValues={CreatCourseValues} setCreatCourseValues={setCreatCourseValues}  stepper={stepper} type='wizard-modern' />
    },
    {
      id: 'account-details',
      title: ' اطلاعات دوره',
      subtitle: 'اطلاعات دوره را وارد کنید.',
      icon: <FileText size={18} />,
      content: <CoursesDetails  CreatCourseValues={CreatCourseValues} setCreatCourseValues={setCreatCourseValues} stepper={stepper} type='wizard-modern' />
    },
    {
      id: 'personal-info',
      title: 'ویژگی دوره',
      subtitle: 'ویژگی دوره را وارد کنید',
      icon: <Edit size={18} />,
      content: <CoursesInfo stepper={stepper} type='wizard-modern' />
    },
    {
      id: 'step-Description',
      title: 'توضیحات دوره',
      subtitle: ' توضیحات دوره را وارد کنید',
      icon: <Archive size={18} />,
      content: <Description stepper={stepper} type='wizard-modern' />
    },
    {
      id: 'social-links',
      title: ' تکنولوژی دوره ',
      subtitle: 'تکنولوژی دوره  را وارد کنید',
      icon: <Cast size={18} />,
      content: <Technology stepper={stepper} type='wizard-modern' />
    }
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

export default WizardModern
