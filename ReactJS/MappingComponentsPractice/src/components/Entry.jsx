import React from "react";

import Term from "./Term";
import Description from "./Description";

function List(props) {
  return (
    <div className="term">
      <Term emoji={props.emoji} name={props.name} />
      <Description meaning={props.meaning} />
    </div>
  );
}

export default List;
