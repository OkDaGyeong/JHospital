import React from "react";

function NotFoundPage() {
  React.useEffect(() => {
    document.title = "404 Not Found";
    document.status = 404;
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 text-center">
          <h1 className="mt-5">404 Not Found</h1>
          <p className="lead">The page you are looking for does not exist.</p>
          <a href="/" className="btn btn-primary text-white">
            메인 페이지로 이동
          </a>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
