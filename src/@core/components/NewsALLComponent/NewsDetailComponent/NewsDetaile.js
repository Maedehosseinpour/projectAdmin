// ** React Imports
import { Fragment, useState, useEffect } from "react";

// ** Third Party Components
import axios from "axios";
import classnames from "classnames";
import {
  Share2,
  GitHub,
  Gitlab,
  Twitter,
  Bookmark,
  Facebook,
  Linkedin,
  CornerUpLeft,
  MessageSquare,
  Copy,
  Heart,
  ThumbsUp,
  ThumbsDown,
} from "react-feather";

// ** Utils
import { kFormatter } from "@utils";

// ** Custom Components
import NewsDetaileSidebar from "./NewsDetaileSidebar";
import Avatar from "@components/avatar";
import Breadcrumbs from "@components/breadcrumbs";

// ** Reactstrap Imports
import {
  Row,
  Col,
  Card,
  Form,
  Badge,
  Input,
  Label,
  Button,
  CardImg,
  CardBody,
  CardText,
  CardTitle,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";

// ** Styles
import "@styles/base/pages/page-blog.scss";

// ** Images
import notFond  from "././../../../../assets/images/icons/not-fond.svg";
import banner from "././../../../../assets/images/icons/social/Marfa1.jpg";
import { useMutation, useQuery } from "react-query";
import http from "../../../core/services/interceptore";
import { Link, useNavigate, useNavigation, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { ErrorMessage, Formik } from "formik";
import * as yup from "yup";
import NewsReplyComments from "./NewsReplyComments";
import ProjSpinner from "../../common/Spinner";
import NoItemFromDb from "../../common/NoItemFromDb";
import DbError from "../../common/DbError";
import RateStars from "../../common/RateStars";
import RenderComments from "./RenderComment";

const validation = yup.object().shape({
  title: yup.string().required("لطفا مقدار عنوان را وارد کنید"),
  describe: yup
    .string()
    .min(3, "حداقل تعداد 10 کاراکتر می باشد")
    .max(390, "حداکثر تعداد 390 کاراکتر می باشد")
    .required("لطفا مقدار کامنت را وارد کنید"),
});

const NewsDetaile = () => {
  // ** States
  const [replyParams, setReplyParams] = useState(null);
  const param = useParams();
  const navigate = useNavigate();
  const [rerenderNeed, setRerenderNeed] = useState(0);

  const {
    data: dataNews,
    refetch,
    status,
  } = useQuery("dataNews", () => {
    return http.get(`/News/${param?.id}`);
  });

  const addComment = useMutation((comment) =>
    http.post("/News/CreateNewsComment", comment).then((res) => {
      res.success === true && toast.success("کامنت با موفقیت درج شد");
      res.error === true &&
        toast.error("خطایی پیش آمده لطفا مجددا تلاش نمایید" + res.message);
    })
  );
  addComment.isError && toast.error("خطایی پیش آمده لطفا مجددا تلاش نمایید");

  const addReplyComment = useMutation((reply) =>
    http.post("/News/CreateNewsReplyComment", reply).then((res) => {
      res.success === true && toast.success("پاسخ به کامنت با موفقیت درج شد");
      res.error === true &&
        toast.success(
          "خطایی پیش آمده لطفا مجددا تلاش نمایید" + res.error.message
        );
    })
  );
  addReplyComment.isError &&
    toast.error("خطایی پیش آمده لطفا مجددا تلاش نمایید");

  const onSubmit = (values) => {
    if (replyParams !== null) {
      setReplyParams({
        ...replyParams,
        title: values.title,
        describe: values.describe,
      });
      // console.log(replyParams);
      addReplyComment.mutate(replyParams);
      refetch();
      setRerenderNeed(1);
    } else {
      const comment = {
        newsId: param.id,
        title: values.title,
        describe: values.describe,
        userId: dataNews?.detailsNewsDto.userId,
      };
      addComment.mutate(comment);
      refetch();
      setRerenderNeed(2);
    }
  };

  const commentLike = useMutation((id, likeOrUnlike) =>
    http
      .post(`/News/CommentLike/${id}&LikeType=${likeOrUnlike}`)
      .then((res) => {
        res.success === true && toast.success("پاسخ به کامنت با موفقیت درج شد");
        res.error === true &&
          toast.success("خطایی پیش آمده لطفا مجددا تلاش نمایید");
      })
  );

  const likeNews = useMutation((id) =>
    http.post(`/News/NewsLike/${id}`).then((res) => {
      if (res.success === true) {
        toast.success("عملیات با موفقیت انجام شد");
        refetch();
        setRerenderNeed(8);
      }
      res.error === true && toast.error("خطایی اتفاق افتاده، مجددا تلاش کنید.");
    })
  );
  likeNews.isError &&
    toast.error("خطایی در ارتباط با سرور اتفاق افتاده، مجددا تلاش کنید.");

  const dislikeNews = useMutation((id) =>
    http.post(`/News/NewsDissLike/${id}`).then((res) => {
      res.success === true && toast.success("عملیات با موفقیت انجام شد");
      res.error === true && toast.error("خطایی اتفاق افتاده، مجددا تلاش کنید.");
    })
  );
  dislikeNews.isError &&
    toast.error("خطایی در ارتباط با سرور اتفاق افتاده، مجددا تلاش کنید.");

  const onLikeNews = (id) => {
    likeNews.mutate(id);
    refetch();
    setRerenderNeed(3);
  };
  const onDislikeNews = (id) => {
    dislikeNews.mutate(id);
    refetch();
    setRerenderNeed(4);
  };

  const onLikeComment = (id) => {
    // type > 0 ? commentLike.mutate(id, false) : commentLike.mutate(id, true);
    // const like = type > 0 ? true : false
    try {
      const res = http.post(`/News/CommentLike/${id}`);
      res.success && toast.success(",ملیات با موفقیت انجام شد");
      res.error && toast.error("خطایی رخ داده");
      refetch();
      setRerenderNeed(5);
    } catch (error) {
      toast.error("خطایی رخ داده" + error.message);
    }
  };

  const onDislikeLikeComment = (id) => {
    try {
      const res = http.post("News/DeleteCommentLikeNews", {
        deleteEntityId: id,
      });

      res.success && toast.success("عملیات با موفقیت ثبت شد");
      res.error && toast.error("خطایی رخ داده");
    } catch (error) {
      toast.error("خطایی رخ داده" + error.message);
    }
  };

  const renderComments = () => {
    if (dataNews?.commentDtos.length === 0) {
      return <NoItemFromDb />;
    }
    return dataNews?.commentDtos.map((comment, index) => {
      return (
        <Card className="mb-3" key={index}>
          <CardBody>
            <div className="d-flex">
              <div>
                <Avatar
                  className="me-75"
                  img={comment.pictureAddress ? comment.pictureAddress : notFond}
                  imgHeight="38"
                  imgWidth="38"
                />
              </div>
              <div className="w-100">
                <h6 className="fw-bolder mb-25">{comment.autor}</h6>
                <CardText>{comment.title}</CardText>
                <CardText>{comment.describe}</CardText>
                <div className="d-flex justify-content-between">
                  <a
                    href="leave-comment"
                    onClick={(e) => {
                      e.preventDefault();
                      setReplyParams({
                        newsId: dataNews?.detailsNewsDto.id,
                        userId: dataNews?.detailsNewsDto.userId,
                        parentId: comment.id,
                        title: "",
                        describe: "",
                      });
                      const element = document.getElementById("leave-comment");
                      element.scrollIntoView();
                    }}
                  >
                    <div className="d-inline-flex align-items-center">
                      <CornerUpLeft size={18} className="me-50" />
                      <span>Reply</span>
                    </div>
                  </a>
                  <div className="d-flex justify-content-between">
                    <Link
                      className={
                        comment.currentUserIsLike === true
                          ? "text-success d-inline-flex align-items-center"
                          : "text-primary d-inline-flex align-items-center"
                      }
                      onClick={() => onLikeComment(comment.id)}
                    >
                      <ThumbsUp size={18} className="me-50" />
                      <span className="me-1">{comment.likeCount}</span>
                    </Link>

                    <Link
                      className={
                        comment.currentUserIsDissLike === true
                          ? "text-warning d-inline-flex align-items-center"
                          : "text-primary d-inline-flex align-items-center"
                      }
                      onClick={() => onDislikeLikeComment(comment.id)}
                    >
                      <ThumbsDown size={18} className="me-50" />
                      <span>{comment.dissLikeCount}</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
          {comment.replyCount > 0 ? (
            <NewsReplyComments parentId={comment.id} />
          ) : null}
        </Card>
      );
    });
  };

  if (status === "loading") {
    return <ProjSpinner />;
  } else if (status === "error") {
    return <DbError />;
  }
  return (
    <Fragment>
      <Breadcrumbs
        title="جزییات خبر"
        data={[{ title: "اخبار و مقالات" }, { title: "متن خبر" }]}
      />
      <div className="blog-wrapper">
        <div className="content-detached content-left">
          <div className="content-body">
            {dataNews !== null ? (
              <Row>
                <Col sm="12">
                  <Card className="mb-3">
                    <CardImg
                      src={
                        dataNews?.detailsNewsDto?.currentImageAddress
                          ? dataNews?.detailsNewsDto?.currentImageAddress
                          : banner
                      }
                      className="img-fluid"
                      top
                    />
                    <CardBody>
                      <CardTitle
                        className="d-flex justify-content-between"
                        tag="h4"
                      >
                        <div>{dataNews?.detailsNewsDto?.title}</div>
                        <div className="d-flex justify-content-between">
                          <Link
                            className={
                              dataNews?.detailsNewsDto.currentUserIsDissLike ===
                              true
                                ? "text-success d-inline-flex align-items-center"
                                : "text-primary d-inline-flex align-items-center"
                            }
                            onClick={() =>
                              onLikeNews(dataNews?.detailsNewsDto.id)
                            }
                          >
                            <ThumbsUp size={18} className="me-50" />
                            <span className="me-1">
                              {dataNews?.detailsNewsDto.currentLikeCount}
                            </span>
                          </Link>

                          <Link
                            className={
                              dataNews?.detailsNewsDto.currentUserIsDissLike ===
                              true
                                ? "text-warning d-inline-flex align-items-center"
                                : "text-primary d-inline-flex align-items-center"
                            }
                            onClick={() =>
                              onDislikeNews(dataNews?.detailsNewsDto.id)
                            }
                          >
                            <ThumbsDown size={18} className="me-50" />
                            <span>
                              {dataNews?.detailsNewsDto.currentDissLikeCount}
                            </span>
                          </Link>
                        </div>
                      </CardTitle>
                      <div className="d-flex">
                        <Avatar
                          className="me-50"
                          img={
                            dataNews?.detailsNewsDto?.currentImageAddress
                              ? dataNews?.detailsNewsDto?.currentImageAddress
                              : notFond
                          }
                          imgHeight="24"
                          imgWidth="24"
                        />
                        <div>
                          <small className="text-muted me-25">by </small>
                          <small>
                            <a
                              className="text-body"
                              href="/"
                              onClick={(e) => e.preventDefault()}
                            >
                              {dataNews?.detailsNewsDto?.addUserFullName}
                            </a>
                          </small>
                          <span className="text-muted ms-50 me-25">|</span>
                          <small className="text-muted">
                            {dataNews?.detailsNewsDto?.insertDate.slice(0, 10)}
                          </small>
                        </div>
                      </div>
                      <div className="my-1 py-25">{/* {renderTags()} */}</div>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: dataNews?.detailsNewsDto?.describe,
                        }}
                      >

                      </div>
          
                      <hr className="my-2" />
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <div className="d-flex align-items-center me-1">
                            <a
                              className="me-50"
                              href="/"
                              onClick={(e) => e.preventDefault()}
                            >
                              <MessageSquare
                                size={21}
                                className="text-body align-middle me-1"
                              />
                              {dataNews?.commentDtos.length}
                            </a>
                            <a href="/" onClick={(e) => e.preventDefault()}>
                              <div className="text-body align-middle">
                                {/* {kFormatter(dataNews?.commentDtos.comments)} */}
                              </div>
                            </a>
                          </div>
                          <div className="d-flex align-items-center me-1">
                            <a
                              className="me-50"
                              href="/"
                              onClick={(e) => e.preventDefault()}
                            >
                              <Bookmark
                                size={21}
                                className="text-body align-middle me-1"
                              />
                              {dataNews?.detailsNewsDto.currentLikeCount}
                            </a>
                            <a href="/" onClick={(e) => e.preventDefault()}>
                              <div className="text-body align-middle">
                                {/* {data.blog.bookmarked} */}
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="d-flex justify-content-around align-items-center">
                          <RateStars
                            className="mt-2"
                            rate={dataNews?.detailsNewsDto.currentRate}
                          />
                          <Button
                            color="primary"
                            className="me-2"
                            onClick={(e) => {
                              e.preventDefault();
                              navigate(
                                `/NewsDetaile/NewsChangeEdid/${dataNews?.detailsNewsDto.id}`
                              );
                            }}
                          >
                            ویرایش خبر
                          </Button>
                          <UncontrolledDropdown className="dropdown-icon-wrapper">
                            <DropdownToggle tag="span">
                              <Share2
                                size={21}
                                className="text-body cursor-pointer"
                              />
                            </DropdownToggle>
                            <DropdownMenu end>
                              <DropdownItem
                                className="py-50 px-1"
                                onClick={() => {
                                  navigator.clipboard.writeText(location.href);
                                  toast.success("لینک خبر کپی شد.");
                                }}
                              >
                                <Copy size={18} />
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                {/* comment old */}
                <Col sm="12" id="blogComment " className="p-3 bg-light-danjer">
                  <h6 className="section-label">نظر کاربران</h6>
                  {renderComments()}
                </Col>
                {/* comment */}
                <Col sm="12">
                  <Card className="p-3 bg-light-danjer">
                    <h6
                      id="leave-comment"
                      className="section-label text-danjer"
                    >
                      پیام بدارید.
                    </h6>
                    <CardBody>
                      <Formik
                        initialValues={{}}
                        onSubmit={onSubmit}
                        validationSchema={validation}
                      >
                        {({ values, handleSubmit, handleChange, errors }) => (
                          <form className="form" onSubmit={handleSubmit}>
                            <Row>
                              <Col sm="12">
                                <div className="mb-2">
                                  <Input
                                    type="text"
                                    name="title"
                                    placeholder="عنوان نظر"
                                    onChange={handleChange}
                                    value={values.title}
                                    onError={
                                      errors.title
                                        ? toast.error(errors.title)
                                        : null
                                    }
                                  />
                                </div>
                              </Col>
                              <Col sm="12">
                                <div className="mb-2">
                                  <Input
                                    className="mb-2"
                                    type="textarea"
                                    name="describe"
                                    rows="4"
                                    placeholder="متن نظر"
                                    onChange={handleChange}
                                    value={values.describe}
                                    onError={
                                      errors.describe
                                        ? toast.error(errors.describe)
                                        : null
                                    }
                                  />
                                </div>
                              </Col>
                              <Col sm="12">
                                <Button type="submit" color="primary">
                                  ثبت نظرات
                                </Button>
                              </Col>
                            </Row>
                          </form>
                        )}
                      </Formik>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            ) : null}
          </div>
        </div>
        <NewsDetaileSidebar />
      </div>
    </Fragment>
  );
};

export default NewsDetaile;
