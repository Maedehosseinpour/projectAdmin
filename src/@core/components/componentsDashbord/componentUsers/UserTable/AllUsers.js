import React, { useState , useRef } from 'react'
import { AlignJustify, Rss, Info, Image, Users, Edit } from 'react-feather'
import {Card, CardImg, Badge, Table, Input , Button } from 'reactstrap'
import UserItem from './UserItem'
import {useQuery} from 'react-query'
import http from '../../../@core/interceptor'
import { Row, Col } from 'reactstrap'
import StatsVertical from '../../../components/StatsVertical/StatsVertical'
import Earnings from '../Earnings/Earnings'
import MyNavbar from './MyNavbar'

const AllUsers = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [search, setSearch] = useState("");

    const ref = useRef();

    const handleSearch = (e) => {
      clearTimeout(ref.current)
    
      const timeOut = setTimeout(()=>{
        e.target.value && setSearch(e.target.value) 
       },800)
  
  
      !e.target.value && setSearch('')
  
      ref.current = timeOut
     
    };



    const getAlls =async () =>{
      const result = await http.get(`/User/UserMannage?PageNumber=1&RowsOfPage=200&SortingCol=DESC&SortType=InsertDate&Query=${search}`)
      return result
    }
  
    const {data , Status} = useQuery(['getAll' , search] , getAlls)
  
    var completeProfile = 0;
  
    for(let i=0 ; i<data?.listUser.length ; i++){
      // console.log(data.listUser[i].profileCompletionPercentage);
      completeProfile = completeProfile + Number(data.listUser[i].profileCompletionPercentage);
    }
  
    var Percent = Math.round(completeProfile/data?.listUser.length) 
  
  
    var mens = data?.listUser.filter((item)=>{
      return item.gender === true;
    })
  
    const mensCount =(mens && mens.length/data.listUser.length)*100;
    const wemenCount = (mens && (data.listUser.length - mens.length)/data.listUser.length)*100;

    return (
        <div>
        <Row>
              <MyNavbar/>          
          {/* <Col xl='3' md='4' sm='6'>
            <StatsVertical stats={data && Percent} statTitle='درصد تکمیل اطلاعات ادمین ها'/>
          </Col>
          <Col lg='4' md='6' xs='12'>
                {data && <Earnings all={ data?.listUser.length} mensCount={mensCount} wemenCount={wemenCount}/>}
          </Col>
                     */}


        </Row>

        <div style={{fontSize:'30px'}}> 
            <Badge color='success'> تمام کاربران </Badge>   
        </div>


          <Input onChange={handleSearch}  type='text' placeholder='search' />

          <Table responsive>
            <thead>
              <tr>
                <th>نام</th>
                <th>نوع کاربر</th>
                <th> id</th>
                <th>جنسیت</th>
                <th>درصد تکمیل اطلاعات</th>
                <th>ایمیل</th>              
                <th>شماره تماس</th>
              </tr>
            </thead>
            <tbody>
              {data && (
                  data.listUser?.map((item , index) =>{
                            return(
                              <UserItem key={index} id={item.id} fName={item.fname} lNmae={item.lname} role='عادی' gender={item.gender}
                              profileCompletionPercentage={item.profileCompletionPercentage} gmail={item.gmail} phoneNumber={item.phoneNumber}/>         
                        )
                    })         
                  )
                } 





            </tbody>
          </Table>       
        </div>

      )
}

export default AllUsers