import React, { useState } from "react";
import { Edit, MoreVertical, Trash } from "react-feather";
import { useNavigate, useParams } from "react-router-dom";
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import http from "../../../../@core/core/services/interceptore";
import { useQuery } from "react-query";
import { useFormikContext } from "formik";
import { Button } from 'reactstrap'




function CourseItem({
  id,
  fullName,
  typeName,
  statusName,
  levelName,
  cost,
  title,
  refetch,
  isActive,
  isdelete,
}) {
  const show = () =>{
      // console.log(isdelete);
  }

  const navigate = useNavigate();


  const handleDelete = async (x) => {
    const obj = {
      active: isdelete === true ? false : true,
      id: id,   
    }

 
    const result = await http.delete(`/Course/DeleteCourse/`, {
      data: obj,
    });
    refetch();
      //  console.log(result); 
  };



  const handleActive = async (values) => {
    const courseobjAct = {
      active: isActive === true ? false : true,
      id: id,
    };
    const result = await http.put(
      `/Course/ActiveAndDeactiveCourse`,
      courseobjAct
    );
    refetch();
    return result;
  };

  return (
    <tr > 
      <td className="text-nowrap ">
        <div  style={{width:'150px' , overflow: "hidden" , }}>{title}</div>
      </td>
      <td className="text-nowrap ">
        <div  style={{width:'150px' , overflow: "hidden" , }}>{fullName}</div>
      </td>
      <td className="text-nowrap">{typeName}</td>
      <td className="text-nowrap ">{cost}</td>
      <td className="text-nowrap ">
        <Button
          // className={`isActive === true ? text-info : text-danger`}
          pill
          color={isActive === true ? "primary" : 'warning'}
          // text={isActive === true ? "info" : 'danger'}
         
          onClick={handleActive}
        >
          {isActive === true ? "فعال" : "غیر فعال"}
        </Button>
      </td>

      <td   style={{width:'10px'}} className="text-nowrap ">
        <Button
        style={{width:'150px' , overflow: "hidden" , }}
          pill
          color={isdelete === true ? 'warning' : 'primary'}
          onClick={(isdelete)=>handleDelete(isdelete)}

        >
          {isdelete === true ? " حذف شده" : "انتخاب شده " }
        </Button>          
      </td>
      <td className="text-nowrap ">
         <UncontrolledDropdown>
              <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                <MoreVertical size={15} />
              </DropdownToggle>
              <DropdownMenu className='bg-light'>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Edit className='me-50 text-warning ' size={15} />
                   <span  onClick={() => {
                      navigate("/DetailsCourse/EditCourse/" + id);
                      }} 
                      className='align-middle text-warning'>ویرایش</span>
                </DropdownItem>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Trash className='me-50  text-danger' size={15} /> <span className='align-middle  text-danger'>حذف</span>
                </DropdownItem>
              </DropdownMenu>
         </UncontrolledDropdown>
      </td>

      <td className="text-nowrap ">
        <Button
          pill
          color="primary"
     
          onClick={() => {
            navigate("/Curses/ListCurses/DetailsCourse/" + id);
          }}
        >
          جزییات
        </Button>
      </td>

    </tr>
  );
}

export default CourseItem;
