import React from "react";

export default function Alert({ alertstyle: style, children }) {
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-12">
          <div className={`alert alert-${style}`}>{children}</div>
        </div>
      </div>
    </div>
  );
}
