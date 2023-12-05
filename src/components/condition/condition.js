import React, { useState } from "react";

function Condition({ moo }) {
  if (moo % 4 === 0) {
    return <h1>hello</h1>;
  } else if (moo % 4 === 1) {
    return <h1>world</h1>;
  } else if (moo % 4 == 2) {
    return <h1>!!!</h1>;
  } else {
    return <h1>Hi</h1>;
  }
}

export default Condition;
