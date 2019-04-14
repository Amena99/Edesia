import React from "react";

// Exporting the Container, Row, and Col components from this file

// This Container component allows us to use a bootstrap container without worrying about class names
export function Container({ fluid, id, children }) {
  return <div className={`container${fluid ? "-fluid" : ""}`} id={id}>{children}</div>;
}

// This Row component lets us use a bootstrap row without having to think about class names
export function Row({ id, fluid, children }) {
  return <div className={`row${fluid ? "-fluid" : ""}`} id={id}>{children}</div>;
}

// This Col component lets us size bootstrap columns with less syntax
// e.g. <Col size="md-12"> instead of <div className="col-md-12">
export function Col({ id, size, children }) {
  return (
    <div
      className={size
        .split(" ")
        .map(size => "col-" + size)
        .join(" ")}
      id={id}
    >
      {children}
    </div>
  );
}
