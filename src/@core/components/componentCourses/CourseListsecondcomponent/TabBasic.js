// tab 3 part  left
import React, { useState } from 'react'
import {Row, Col, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'
import { User, UserPlus, UserCheck, UserX } from 'react-feather'
import StatsHorizontal from '../../widgets/stats/StatsHorizontal'
import TableReservCourse from './TableReservCourse'
import TableCommentCourse from './TableCommentCourse'

const TabsBasic = () => {
  const [active, setActive] = useState('1')

  const toggle = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }
  return (
    <React.Fragment>
      <Nav tabs>
        <NavItem>
          <NavLink
            active={active === '1'}
            onClick={() => {
              toggle('1')
            }}
          >
            توضیحات دوره
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={active === '2'}
            onClick={() => {
              toggle('2')
            }}
          >
            رزرو کننده ها
          </NavLink>
        </NavItem>
       
        <NavItem>
          <NavLink
            active={active === '3'}
            onClick={() => {
              toggle('3')
            }}
          >
           نظرات
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent className='py-50' activeTab={active}>
        <TabPane tabId='1'>
          <div className='mt-3'>
          <Row>
        <Col lg='3' sm='6'>
          <StatsHorizontal
            color='primary'
            statTitle='دانشجو دوره'
            icon={<User size={20} />}
            // renderStats={<h3 className='fw-bolder mb-75'>21,459</h3>}
          />
        </Col>
        <Col lg='3' sm='6'>
          <StatsHorizontal
            color='danger'
            statTitle='نفر نظر دادند'
            icon={<UserPlus size={20} />}
            // renderStats={<h3 className='fw-bolder mb-75'>4,567</h3>}
          />
        </Col>
        <Col lg='3' sm='6'>
          <StatsHorizontal
            color='success'
            statTitle='نفر خریداری کردند'
            icon={<UserCheck size={20} />}
            // renderStats={<h3 className='fw-bolder mb-75'>19,860</h3>}
          />
        </Col>
        <Col lg='3' sm='6'>
          <StatsHorizontal
            color='warning'
            statTitle='نفر پسندیدند.'
            icon={<UserX size={20} />}
            // renderStats={<h3 className='fw-bolder mb-75'>237</h3>}
          />
        </Col>
          </Row>
          <span className='bg-light border-2 '> این دوره با اساتید مجرب در ترم بهار برگزار می شود</span>
          </div>
        </TabPane>
        <TabPane tabId='2'>
          <div className='mt-3'>
          <TableReservCourse/>
          </div>
        </TabPane>
        <TabPane tabId='3'>
        <div className='mt-3'>
         <TableCommentCourse/>
        </div>
        </TabPane>
      </TabContent>
    </React.Fragment>
  )
}
export default TabsBasic