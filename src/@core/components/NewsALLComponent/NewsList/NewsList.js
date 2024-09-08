import { Check, Plus, X } from "react-feather";
import {
  Table,
  CardHeader,
  CardTitle,
  UncontrolledButtonDropdown,
  Button,
  Card,
  Label,
  Input,
  Row,
  Col,
} from "reactstrap";
import { Fragment, useEffect } from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import http from "../../../core/services/interceptore";
import NewsItem from "./NewsItem";
import ProjSpinner from "../../common/Spinner";
import DbError from "../../common/DbError";
import NoItemFromDb from "../../common/NoItemFromDb";
import IconPagination from "../../common/PaginationIconsAndText";
// import { inputTimeout } from "../../utils/inputTimeOut";
import { useNavigate } from "react-router-dom";
import StatsHorizontal from "../../widgets/stats/StatsHorizontal";
import { FilePlus ,FileMinus, UserPlus, UserCheck, UserX } from 'react-feather'

const NewsList = () => {
  // ** states
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

  // ** Function to handle Modal toggle
  const handleModal = () => setModal(!modal);

  const [apiParam, setApiParam] = useState({
    PageNumber: 1,
    RowsOfPage: 10,
    SortingCol: "InsertDate",
    SortType: "DESC",
    Query: "",
    IsActive: true,
  });

  useEffect(() => {
    // console.log("refetch", apiParam.PageNumber);
    refetch();
  }, [apiParam.PageNumber]);

  // ** call api news
  const { data, status, refetch } = useQuery({
    queryKey: [
      "getAllNews",
      apiParam.PageNumber,
      apiParam.Query,
      apiParam.IsActive,
    ],
    queryFn: () =>
      http.get(
        `/News/AdminNewsFilterList?PageNumber=${apiParam.PageNumber}&RowsOfPage=${apiParam.RowsOfPage}&SortingCol=${apiParam.SortingCol}&SortType=${apiParam.SortType}&Query=${apiParam.Query}&IsActive=${apiParam.IsActive}`
      ),
  });

  const activeTab = apiParam.IsActive ? `bg-light-primary` : `bg-transparent`;
  const deActiveTab = !apiParam.IsActive ? `bg-light-primary` : `bg-transparent`;




  const handleFilter = (e) => {
    // inputTimeout(
    // () => setApiParam({ ...apiParam, Query: e.target.value }),
    setApiParam({ ...apiParam, Query: e.target.value });

    // 500
    // );
  };

  const CustomLabel = ({ htmlFor }) => {
    return (
      <Label className="form-check-label" htmlFor={htmlFor}>
        <span className="switch-icon-left">
          <Check size={14} />
        </span>
        <span className="switch-icon-right">
          <X size={14} />
        </span>
      </Label>
    );
  };
  return (
    <Fragment>
      <Row>
        <Col lg='3' sm='6'  onClick={() => {
              // qClient.invalidateQueries("getAllNews");
              setApiParam({ ...apiParam, IsActive: true });
              refetch();
            }}>
          <StatsHorizontal
            color='primary'
            className={`cursor-pointer ${activeTab}`}
            statTitle=' اخبار موجود'
            icon={<FilePlus  size={20} />}
            renderStats={<h3 className='fw-bolder mb-75'>21,459</h3>}
          />
        </Col>
        <Col lg='3' sm='6' className="cursor-pointer" onClick={() => {
              setApiParam({ ...apiParam, IsActive: false });
              refetch(); 
            }}>
          <StatsHorizontal
            color='danger'
            className={`cursor-pointer ${deActiveTab}`}
            statTitle='اخبار ناموجود'
            icon={<FileMinus size={20} />}
            renderStats={<h3 className='fw-bolder mb-75'>4,567</h3>}
          />
        </Col>
      </Row>
      <Card className="p-3">
        <Row>
        <CardHeader className="flex-md-row flex-column align-md-items-center align-items-start border-bottom">
          <CardTitle tag="h4">لیست اخبار</CardTitle>
          <div className="d-flex mt-md-0 mt-1 p-1">
            <Button
              className="ms-2"
              color="primary"
              onClick={() => navigate("/NewsPage/NewsCreatnew")}>
              <span className="align-middle me-50 py-3">اضافه کردن خبر جدید</span>
              <Plus size={15} />
            </Button>
          </div>
        </CardHeader>
         </Row>
         {/* search---------------- */}
        <Row className="justify-content-end mx-0">
          
        <CardHeader className="flex-md-row flex-column align-md-items-center align-items-start border-bottom">
          <div className="d-flex w-50 ">
            {/* search */}
            <Col
            className="d-flex align-items-center justify-content-end mt-1"
            md="6"
            sm="12">
            <Label className="me-1" for="search-input">
              جستجو
            </Label>
            <Input
              className="dataTable-filter mb-50"
              type="text"
              bsSize="sm"
              id="search-input"
              onChange={(e) => handleFilter(e)}
              // onChange={handleFilter}
            />
            </Col>
           </div>
        
          </CardHeader>
        </Row>
        
        {status === "loading" ? (
          <ProjSpinner />
        ) : status === "error" ? (
          <DbError />
        ) : (
          <>
            {data?.totalCount > 0 ? (
              <Table responsive className="mt-3 table-hover p-5 dark-layout table table-bordered ">
                <thead className="p-2 bg-black">
                  <tr >
                    <th className="p-2 item-center">عنوان خبر</th>
                    <th>پدیدآور</th>
                    <th>تاریخ درج</th>
                    <th>تعداد لایک</th>
                    <th>تعداد بازدید</th>
                    <th>عملیات</th>
                    <th>موجود/ناموجود</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.news.map((news, index) => {
                    return (
                      <NewsItem
                        key={index}
                        data={news}
                        setApiParam={setApiParam}
                        apiParam={apiParam}
                        refetch={() => refetch()}
                      />
                    );
                  })}
                </tbody>
              </Table>
            ) : (
              <NoItemFromDb title="عدم وجود داده" />
            )}
          </>
        )}
        <IconPagination
          total={data?.totalCount}
          apiParam={apiParam}
          setApiParam={setApiParam}
        />
      </Card>
    </Fragment>
  );
};

export default NewsList;
