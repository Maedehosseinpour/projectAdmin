// ** React Imports
import { useRef, useState } from 'react'

// ** Custom Components
import Wizard from '@components/wizard'

// ** Steps

// ** Icons Imports
import { FileText, User, MapPin, Link,Camera,Edit,Archive,Cast } from 'react-feather'
import NewsChangeDetails from './NewsChangeDetails'
import FileNewsUploader from './FileNewsUploader'
// import FileUploaderSingle from './FileUploaderSingle'

const NewsChangeEdid = () => {
  // ** Ref
  const ref = useRef(null)

  // ** State
  const [stepper, setStepper] = useState(null)

  const steps = [
 
    {
      id: 'account-details',
      title: ' اطلاعات خبر',
      subtitle: 'اطلاعات خبر را وارد کنید.',
      icon: <FileText size={18} />,
      content: <NewsChangeDetails stepper={stepper} type='wizard-modern' />
    },
    {
        id: 'Pic-Upload',
        title: 'آپلود عکس',
        subtitle: 'عکس خبر  را وارد کنید.',
        icon: <Camera size={18} />,
        content: <FileNewsUploader stepper={stepper} type='wizard-modern' />
      },
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

export default NewsChangeEdid
