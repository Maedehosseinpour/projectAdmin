import React from "react";
import {
  Activity,
  Delete,
  XCircle,
  Edit,
  Eye,
  MoreVertical,
  Star,
  ThumbsUp,
  Trash,
  CheckCircle,
} from "react-feather";
import logo from "../../../../assets/images/logo/logo2.png";
import Rating from "react-rating";
import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
// import RateStars from "../common/RateStars";
import { useMutation } from "react-query";
import instance from "../../../core/services/interceptore";
import { makeFormData } from "./makeFormData";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


function NewsItem({ data, apiParam, setApiParam, onClick, refetch }) {
  const navigate = useNavigate();
  
  // const onNavigateDetailsPage = (e) => {
  //   e.preventDefault();
  //   navigate("/news/newsDetail/" + data?.id);
  // };
  const NewsDetaileFanction = (e) => {
    e.preventDefault();
    navigate("/NewsList/NewsDetaile/" + data?.id);
  };
  const onActiveDeactive = (e) => {
    e.preventDefault();
    const obj = {
      Id: data?.id,
      Active: !apiParam?.IsActive,
    };
 
    let newFormData = new FormData()

    newFormData = makeFormData(obj);

    activeDeactive.mutate(newFormData);
    refetch();
  };

  const NewsChange = (e) => {
    e.preventDefault();
    navigate("/NewsDetaile/NewsChangeEdid/" + data?.id);
  };

  const deleteNews = useMutation((id) =>
    instance.delete(`/News/DeleteNewsFile?fileId=${id}`)
      .then((res) => {
        res.success === true && toast.success("عملیات حذف با موفقیت انجام شد.");
        res.error === false && toast.error("عملیات با ارور مواجه شد");
      })
  );

  deleteNews.isError &&
    toast.error(
      "عملیات از سمت سرور با خطا مواجه شد، لطفا بعدا مجددا تلاش نمایید."
    );

  const onDelete = (e, id) => {
    e.preventDefault(e);
    deleteNews.mutate(id);
    refetch()
  };

  // ** set active or deactive
  const activeDeactive = useMutation((formData) =>
    instance.put("/News/ActiveDeactiveNews", formData).then((res) => {
      res.success === true && toast.success(res.message);
      res.error === true && toast.error(res.message);
    })
  );

  return (
    <tr>
      <td>
        <img
          className="me-75 rounded-circle"
          src={
            data?.currentImageAddressTumb
              ? data?.currentImageAddressTumb
              : data?.addUserProfileImage
          }
          alt={logo}
          height="20"
          width="20"
        />
        <span className="align-middle fw-bold text-nowrap">
          {data?.title.length > 20
            ? data?.title.slice(0, 20) + "..."
            : data?.title}
        </span>
      </td>
      <td>
     
        <span className="align-middle fw-bold text-nowrap">
          {data?.addUserFullName?.length > 15
            ? data?.addUserFullName.slice(0, 15) + "..."
            : data?.addUserFullName}
        </span>
      </td>
      <td>
        <span>{data?.updateDate.slice(0, 10)}</span>
      </td>
      <td>
        {/* <RateStars rate={data.currentRate} /> */}
        <Badge pill color="light-primary" className="me-1">
          <ThumbsUp size={15} />
          <span className="px-1">{data?.currentLikeCount}</span>
        </Badge>
      </td>
      <td>
        <Badge pill color="light-success" className="me-1">
          <Eye size={15} />
          <span className="px-1">{data?.currentView}</span>
        </Badge>
      </td>
      <td className="text-nowrap ">
        <UncontrolledDropdown >
          <DropdownToggle
            className="icon-btn hide-arrow"
            color="transparent"
            size="sm"
            caret>
            <MoreVertical size={15} />
          </DropdownToggle >
          <DropdownMenu className="bg-light text-secondary">  
            {/* <DropdownItem href="/" onClick={(e) => NewsDetaileFanction(e)}>
              <Edit className="me-50" size={15} />{" "}
              <span className="align-middle">جزییات</span>
            </DropdownItem> */}
             <DropdownItem href="/" onClick={(e) => NewsDetaileFanction(e)}>
              <Eye className="me-50 text-primary" size={15} />{" "}
              <span className="align-middle text-primary">مشاهده</span>
            </DropdownItem>
            <DropdownItem href="/" onClick={(e) => NewsChange(e)}>
              <Edit className="me-50 text-warning" size={15} />{" "}
              <span className="align-middle text-warning">ویرایش</span>
            </DropdownItem>
            <DropdownItem
              className="text-danger"
              href="/"
              onClick={(e) => onDelete(e, data?.id)}>
              <XCircle className="me-50" size={15} style={{width:"20px", height:"20px"}} />{" "}
              <span className="align-middle">حذف </span>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </td>
       
      <td>
        <Badge pill color="bg-transparent"  href="/" onClick={(e) => onActiveDeactive(e)} className="me-1">
          
          <span className="px-1">{data?.currentReserve}</span>
          <span className="align-middle w-100">
                {apiParam.IsActive ? <CheckCircle color="red"   size={24} /> : <CheckCircle color="green"   size={24} /> }
              </span>
        </Badge>
      </td>
      
    </tr>
  );
}

export default NewsItem;
