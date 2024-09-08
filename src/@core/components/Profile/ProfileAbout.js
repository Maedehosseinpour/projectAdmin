// ** Reactstrap Imports
import { Card, CardBody, CardText } from 'reactstrap'
import { Badge } from 'reactstrap'
// 
const ProfileAbout = ({nationalCode, id , gender ,isDelete, birthDay ,active, insertDate , roles}) => {

  var rolesList = [];

  for(let item of roles){
    
    rolesList.push(item.roleName)
  }


  return (
    <Card>
      <CardBody>
      <div><h2>اطلاعات کاربر</h2></div>
        <div className=' mt-3 d-flex flex-row bg-light '>
         <Badge pill color='light-primary'> نام کاربری </Badge>
          <CardText>{id}</CardText>
        </div>


        <div className=' mt-3 d-flex flex-row bg-light '>
        <Badge pill color='light-primary  ' className='mb-75'>  کد ملی :</Badge>
        <CardText>{nationalCode}</CardText>
        </div>

        {/* <div className='mt-2'>
          <Badge className='mb-75'>تاریخ تولد :</Badge>
          <CardText>{birthDay}</CardText>
        </div> */}
        <div className=' mt-3 d-flex flex-row bg-light'>
        <Badge pill color='light-primary'> فعال / غیر فعال : </Badge>
        <div><Badge color={active === true ? 'primary' : ' warning'}>{active === true ? 'فعال' : 'غیر فعال'}</Badge></div>

      </div>
           
      <div className=' mt-3 d-flex flex-row bg-light'>
      <Badge pill color='light-primary  ' className='mb-75'> وضعیت حذف : </Badge> 
        <div><Badge color={isDelete === false ? 'primary' : ' warning'}>{isDelete === false ? 'انتخاب شده' :  "حذف شده"}</Badge></div>
        {/* <CardText>{isDelete === false ? "عادی" : "حذف شده"}</CardText> */}
      </div>
        
        <div className=' mt-3 d-flex flex-row bg-light'>
          <Badge pill color='light-primary  ' className='mb-75'>زمان ثبت نام:</Badge> 
          <CardText>{insertDate}</CardText>
        </div>

        <div className=' mt-3 d-flex flex-row bg-light'>
          <Badge pill color='light-primary  ' className='mb-75'>نوع کاربر:</Badge>   
          <CardText>
            {rolesList.map((rol , index)=>{
                return(
                  <div key={index}>{index+1}-{rol}</div>
                )
            })}
          </CardText>
        </div>        
      </CardBody>
    </Card>
  )
}

export default ProfileAbout
