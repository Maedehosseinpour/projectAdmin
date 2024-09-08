import { Card, CardHeader, CardBody, CardTitle, CardText } from "reactstrap";

// ** Reactstrap Imports
import { Row, Col, Breadcrumb } from 'reactstrap'

// ** Custom Components
// import StatsHorizontal from '../../@core/components/widgets/stats/StatsHorizontal'
import StatsHorizontal from "../widgets/stats/StatsHorizontal";

// ** Icons Imports
import { User, UserPlus, UserCheck, UserX } from 'react-feather'
import TableCoursesListYou from "./CursesListYouComponent/TableCoursesListYou";


const ListCursesUsercomponent = () => {
 
  // ****
  return (
   <div>
     {/* <Row>
        <Col lg='3' sm='6'>
          <StatsHorizontal
            color='primary'
            statTitle='Total Users'
            icon={<User size={20} />}
            renderStats={<h3 className='fw-bolder mb-75'>21,459</h3>}
          />
        </Col>
        <Col lg='3' sm='6'>
          <StatsHorizontal
            color='danger'
            statTitle='Paid Users'
            icon={<UserPlus size={20} />}
            renderStats={<h3 className='fw-bolder mb-75'>4,567</h3>}
          />
        </Col>
        <Col lg='3' sm='6'>
          <StatsHorizontal
            color='success'
            statTitle='Active Users'
            icon={<UserCheck size={20} />}
            renderStats={<h3 className='fw-bolder mb-75'>19,860</h3>}
          />
        </Col>
        <Col lg='3' sm='6'>
          <StatsHorizontal
            color='warning'
            statTitle='Pending Users'
            icon={<UserX size={20} />}
            renderStats={<h3 className='fw-bolder mb-75'>237</h3>}
          />
        </Col>
     </Row> */}
      
      <Row className="match-height">
          <Col lg="12" xs="12">
         <TableCoursesListYou/>
          {/* </Table> */}
          </Col>
        </Row>
      
   </div>
  );
};

export default ListCursesUsercomponent;
