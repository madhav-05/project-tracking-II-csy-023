import React from "react";

export default function ListItems({ Items }) {
  return (
    <div>
      ListItems
      <ol>
        {Items.map((Strings) => {
          return <li>
             {Strings}
          </li>;
        })}
      </ol>
    </div>
  );
}
