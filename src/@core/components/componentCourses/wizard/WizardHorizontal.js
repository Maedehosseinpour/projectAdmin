// ** React Imports
import { useRef, useState } from 'react'

// ** Custom Components
import Wizard from '@components/wizard'

// ** Steps
import Description from './steps/Description'
import Technology from './steps/Technology'
import CoursesInfo from './steps/CoursesInfo'
import CoursesDetails from './steps/CoursesDetails'
// import FileUploaderSingle from './FileUploaderSingle'
import FileUploaderSinglecopy from "./steps-with-validation/FileUploaderSinglecopy"
import { Steps } from 'antd'



const WizardHorizontal = () => {
  // ** Ref
  const ref = useRef(null)

  // ** State
  const [stepper, setStepper] = useState(null)
  
  const steps = [
     {
      id: 'pic-Upload',
      title: 'آپلود عکس',
      subtitle: 'عکس مورد نظر را وارد کنید.',
      content: <FileUploaderSinglecopy stepper={stepper} />
    },
    {
      id: 'Courses-details',
      title: ' اطلاعات دوره',
      subtitle: ' اطلاعات دوره را وارد کنید.',
      content: <CoursesDetails stepper={stepper} />
    },
    
    {
      id: 'Courses-info',
      title: ' ویژگی دوره',
      subtitle: 'ویژگی دوره را وارد کنید',
      content: <CoursesInfo stepper={stepper} />
    },
    {
      id: 'step-Description',
      title: 'توضیحات دوره',
      subtitle: ' توضیحات دوره را وارد کنید',
      content: <Description stepper={stepper} />
    },
    
    {
      id: 'Technology-links',
      title: 'تکنولوژی دوره  ',
      subtitle: 'تکنولوژی دوره  را وارد کنید',
      content: <Technology stepper={stepper} />
    }
  
  ]

  return (
    <div className='horizontal-wizard'>
      <Wizard instance={el => setStepper(el)} ref={ref} steps={steps} />
    </div>
  )
}

export default WizardHorizontal
