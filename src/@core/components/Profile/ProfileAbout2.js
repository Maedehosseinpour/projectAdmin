import { Badge, Row } from "reactstrap";
import gmailImage from "../../../../src/assets/images/icons/social/email.jpg";
import linkedinImage from "../../../../src/assets/images/icons/social/linkedin.png";
import telegramImage from "../../../../src/assets/images/icons/social/twitter.png";
import phoneImage from "../../../../src/assets/images/icons/social/phone.png";
import http from '../../../@core/core/services/interceptore'
import { useNavigate } from 'react-router-dom';
import { Button, Card, CardTitle, CardBody, CardText, CardImg, Col  } from 'reactstrap'

const ProfileAbout2 = ({gmail,data , linkdinProfile , isDelete , twoStepAuth , receiveMessageEvent , phoneNumber}) => {
    

    return (
   <div>
       <Card>
        <CardBody>
         <Row lg="8" md="12" >

     

          <div><h2>ارتباط با کاربر</h2></div>
          <Col lg="3" md="6"  >
            <Card className="d-flex  align-items-center text-center border-secondary">
           
              <CardImg top src={gmailImage} className="w-25 h-25 mt-2"  alt="Card cap" />
              <CardBody >
                <CardTitle tag="h4"> Gmail</CardTitle>
                <CardText>
                  {data &&
                    (data.gmail === null
                      ? "کاربر اکانت gmail را وارد نکرده"
                      : data.gmail)}
                </CardText>
                <Button color="primary" outline>
                  Go to gmail
                </Button>
              </CardBody>
            </Card>
          </Col>

          <Col lg="3" md="6">
            <Card className="d-flex  align-items-center text-center border-secondary">
              <CardImg top src={linkedinImage} className="w-25 h-25 mt-2" alt="Card cap" />
              <CardBody>
                <CardTitle tag="h4">Linkedin </CardTitle>
                <CardText>
                  {data &&
                    (data.linkdinProfile === null
                      ? "کاربر اکانت linkedin را وارد نکرده"
                      : data.linkdinProfile)}
                </CardText>

                <Button color="primary" outline>
                  Go to linkedin
                </Button>
              </CardBody>
            </Card>
          </Col>

          <Col lg="3" md="6">
            <Card className="d-flex  align-items-center text-center border-secondary">
              <CardImg top src={telegramImage} className="w-25 h-25 mt-2 " alt="Card cap" />
              <CardBody>
                <CardTitle tag="h4"> twitter</CardTitle>
                <CardText>
                  {data &&
                    (data.telegramLink === null
                      ? "کاربر اکانت twitter را وارد نکرده"
                      : data.telegramLink)}
                </CardText>
                <Button color="primary" outline>
                  Go to telegram
                </Button>
              </CardBody>
            </Card>
          </Col>

          <Col lg="3" md="6">
            <Card className="d-flex  align-items-center text-center border-secondary">
              <CardImg top src={phoneImage} className="w-25 h-25 mt-2" alt="Card cap" />
              <CardBody>
                <CardTitle tag="h4">Phone Number </CardTitle>
                <CardText>
                  {data &&
                    (data.phoneNumber === null
                      ? "کاربر شماره تماس را وارد نکرده"
                      : data.phoneNumber)}
                </CardText>
                <Button color="primary" outline>
                  Call
                </Button>
              </CardBody>
            </Card>
          </Col>
         </Row> 
       
    
{/* 
        <div className='mt-2'>
          <Badge className='mb-75'>کد ملی :</Badge>
          <CardText>{nationalCode}</CardText>
        </div> */}

         {/*<div className='mt-2'>
        <Badge className='mb-75'>فعال / غیر فعال :</Badge>
        <div><Badge color={active === true ? 'success' : ' danger'}>{active === true ? 'فعال' : 'غیر فعال'}</Badge></div>

      </div>

      
      <div className='mt-2'>
        <Badge className='mb-75'> وضعیت حذف :</Badge>
        <div><Badge color={isDelete === false ? 'success' : ' danger'}>{isDelete === false ? 'سالمه' :  "حذف شده"}</Badge></div>
        <CardText>{isDelete === false ? "عادی" : "حذف شده"}</CardText>
      </div> */}

          {/* <div className='mt-2'>
        <Badge className='mb-75'>نوع ورود به پنل کاربری :</Badge>
        <CardText>{twoStepAuth === false ? "تک مرحله ای" : "دو مرحله ای"}</CardText>
      </div>

      <div className='mt-2'>
        <Badge className='mb-75'> وضعیت دریافت خبر ها :</Badge>
        <CardText>{receiveMessageEvent === true ? "فعال" : "غیر فعال"}</CardText>
      </div> */}
        </CardBody>
      </Card>
   </div>
    );
  };

export default ProfileAbout2;
