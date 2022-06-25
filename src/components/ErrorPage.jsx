import React from "react";

function ErrorPage() {
  console.log("Render edildi");
  return <div>ErrorPage</div>;
}

export default React.memo(ErrorPage);
