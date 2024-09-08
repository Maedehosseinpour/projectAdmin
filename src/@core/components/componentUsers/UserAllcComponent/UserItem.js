import React from 'react'
import { MoreVertical, Edit, Trash } from 'react-feather'
import { Table, Badge, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
import { Button } from 'reactstrap'
import { useNavigate } from 'react-router-dom';
import http from '../../../core/services/interceptore'
import ModalAccesUser from './ModalAccesUser';


const UserItem = ({
  id,
  fName,
  setIsOpenAddUser, 
  setIsOpenAccessUser ,
  isOpenAccessUser ,
  refetch, 
  lNmae ,
  active,
  isdelete,
  role ,
  gender, 
  profileCompletionPercentage , 
  gmail , 
  phoneNumber}) => {
  
  const handleIsOpenAccess = () => {
    setIsOpenAddUser(false)
    setIsOpenAccessUser(!isOpenAccessUser)
  }
  
  
    const navigate = useNavigate()

    const  goDetail = () =>{
        navigate('/Users/UserDetails/' + id)
    }
    const  goEditUser = () =>{
      navigate('/UserEditDetails/' + id )
    }

    // for activ ...
    
 
    const handleDelete = async (x) => {
      const obj = {
        active: isdelete === true ? false : true,
        id: id,   
      }
   
      const result = await http.delete(`/User/DeleteUser`, {
        data: obj,
      });
      refetch();
        //  console.log(result); 
    };
  
  
  
    const handleActive = async (values) => {
      const courseobjAct = {
        active: active === true ? false : true,
        id: id,
      };
      const result = await http.put(
        `/User/ReverseToActiveUser`,
        courseobjAct
      );
      refetch();
      return result;
    };
    
  return (
    <tr >
        <td>
            <div style={{ width:'150px', height:'30px' , overflow:'hidden'}}>
                <span className='align-middle fw-bold'> {fName +' ' + lNmae}</span>
            </div>
        </td>
        {/* <td>
            <span className='align-middle fw-bold'> {role}</span>
        </td> */}
        <td>
            <span className='align-middle fw-bold'> {gender === true ? 'مرد' : 'زن'}</span>
        </td>
        <td>
            <span className='align-middle fw-bold'> {id}</span>
        </td>
        
        {/* <td>
            <span className='align-middle fw-bold'> {profileCompletionPercentage}</span>
        </td> */}

        <td>
            <div style={{width:'200px' , height:'30px' , overflow:'hidden'}}>
                <span className='align-middle fw-bold'> {gmail}</span>           
            </div>
        </td>        

        <td>
        <Badge pill color='light-primary' className='me-1'>
            {phoneNumber}
        </Badge>
        </td>
        <td className="text-nowrap ">
        <Button
          // className={`active === true ? text-info : text-danger`}
          pill
          color={active === 'True' ? "primary" : 'warning'}
          // text={active === true ? "info" : 'danger'}
          onClick={handleActive}
        >
          {active === true ? "فعال" : "غیر فعال"}
        </Button>
      </td>
        <td className="text-nowrap  ">
            {/* <span className='align-middle fw-bold'> {role}</span> */}
            {/* <Button.Ripple onClick={handleIsOpenAccess} color='primary'>دسترسی</Button.Ripple> */}
            <ModalAccesUser  />
        </td>
        <td>
            <UncontrolledDropdown>
              <DropdownToggle className='icon-btn hide-arrow ' color='transparent' size='sm' caret>
                <MoreVertical size={15} />
              </DropdownToggle>
              <DropdownMenu className='bg-light'>
                <DropdownItem  >
                  <Edit className='me-50' size={15} /> <span onClick={goEditUser} className='align-middle text-primary' >ویرایش</span>
                </DropdownItem>
                <DropdownItem href='/' onClick={e => handleDelete(e)}>
                  <Trash className='me-50' size={15} /> <span className='align-middle text-warning'>حذف</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
        </td>
     
        <td>
            {/* <span className='align-middle fw-bold'> {id}</span> */}
            <Button.Ripple onClick={goDetail} color='primary'>جزئیات</Button.Ripple>
          
        </td>        

      
      
    </tr>
    
  )
}

export default UserItem