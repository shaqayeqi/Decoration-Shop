import React from "react";

export default function Test() {
  return (
    <>
      <div>{process.env.NODE_ENV}</div>
      <div>{process.env.REACT_APP_TEST_1}</div>
      <div>{process.env.REACT_APP_TEST_2}</div>
    </>
  );
}
