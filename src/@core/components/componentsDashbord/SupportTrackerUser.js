// ** React Imports
import { useEffect, useState } from 'react'

// ** Third Party Components
import axios from 'axios'
import Chart from 'react-apexcharts'
import http from '../../core/services/interceptore'

// ** Reactstrap Imports
import {
  Row,
  Col,
  Card,
  CardBody,
  CardText,
  CardTitle,
  CardHeader,
} from 'reactstrap'
import {useQuery} from 'react-query'
import ProjSpinner from '../common/Spinner'
import { useNavigate } from 'react-router'

const SupportTrackerUser = props => {
  const navigate = useNavigate()
  // ** get dashboard detials
  const { data: course , status } = useQuery("course", () => {
    return  http.get("/Report/DashboardReport");
  });

  const options = {
      plotOptions: {
        radialBar: {
          size: 150,
          offsetY: 20,
          startAngle: -150,
          endAngle: 150,
          hollow: {
            size: '65%'
          },
          track: {
            background: '#fff',
            strokeWidth: '100%'
          },
          dataLabels: {
            name: {
              offsetY: -5,
              // fontFamily: 'Montserrat',
              fontSize: '1rem'
            },
            value: {
              offsetY: 15,
              // fontFamily: 'Montserrat',
              fontSize: '1.714rem'
            }
          }
        }
      },
      colors: [props.danger],
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: 'horizontal',
          shadeIntensity: 0.5,
          gradientToColors: [props.primary],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      stroke: {
        dashArray: 8
      },
      labels: ['  کاربران فعال']
    },
    series = [parseInt(course?.activeUserPercent)]

  return status == "success" ? (
    <Card>
      <CardHeader className='pb-0'>
        <CardTitle tag='h4'>آمار کل کاربران  </CardTitle>
        {/* <UncontrolledDropdown className='chart-dropdown'>
          <DropdownToggle color='' className='bg-transparent btn-sm border-0 p-50'>
            Last 7 days
          </DropdownToggle>
          <DropdownMenu end>
            {course?.map(item => (
              <DropdownItem className='w-100' key={item}>
                {item}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </UncontrolledDropdown> */}
      </CardHeader>
      <CardBody>
        <Row>
          <Col sm='2' className='d-flex flex-column flex-wrap text-center'>
            <h1 className='font-large-2 fw-bolder mt-2 mb-0'>
              
              
              {/* {data.totalTicket} */}
              
              {course?.allUser}
              </h1>
            <CardText>کل کاربران</CardText>
          </Col>
          <Col sm='10' className='d-flex justify-content-center'>
            <Chart options={options} series={series} type='radialBar' height={270} id='support-tracker-card' />
          </Col>
        </Row>
        <div className='d-flex justify-content-between mt-1' onClick={() => navigate("/Curses/ListCurses")}>
          <div className='text-center'>
            <CardText className='mb-50'>کاربران  فعال</CardText>
            <span className='font-large-1 fw-bold'>{(course?.allUser)-(course?.deactiveUsers)}</span>
          </div>
          <div className='text-center'>
            <CardText className='mb-50'>کاربران غیر فعال  </CardText>
            <span className='font-large-1 fw-bold'>{course?.deactiveUsers}</span>
          </div>
          <div className='text-center'>
            <CardText className='mb-50'>  عدم تکمیل پروفایل </CardText>
            <span className='font-large-1 fw-bold'>{course?.inCompeletUserCount} نفر</span>
          </div>
        </div>
      </CardBody>
    </Card>
  ) : <ProjSpinner />
}
export default SupportTrackerUser
