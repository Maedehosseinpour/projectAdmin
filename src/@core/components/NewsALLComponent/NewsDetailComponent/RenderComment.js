import React from 'react'

const RenderComments = () => {

    const {
        data: newsObj,
        refetch,
        status,
      } = useQuery("newsObj", () => {return http.get(`/News/${param?.id}`)});
    
    if (newsObj?.commentDtos.length === 0) {
      return <NoItemFromDb />;
    }
    return newsObj?.commentDtos.map((comment, index) => {
      return (
        <Card className="mb-3" key={index}>
          <CardBody>
            <div className="d-flex">
              <div>
                <Avatar
                  className="me-75"
                  img={comment.pictureAddress ? comment.pictureAddress : cmtImg}
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
                        newsId: newsObj?.detailsNewsDto.id,
                        userId: newsObj?.detailsNewsDto.userId,
                        parentId: comment.id,
                        title: "",
                        describe: "",
                      });
                      const element = document.getElementById("leave-comment");
                      element.scrollIntoView();
                    }}>
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
                      onClick={() => onLikeComment(comment.id)}>
                      <ThumbsUp size={18} className="me-50" />
                      <span className="me-1">{comment.likeCount}</span>
                    </Link>

                    <Link
                      className={
                        comment.currentUserIsDissLike === true
                          ? "text-warning d-inline-flex align-items-center"
                          : "text-primary d-inline-flex align-items-center"
                      }
                      onClick={() => onDislikeLikeComment(comment.id)}>
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
export default RenderComments;