import React from "react";
import ListItems from "./list";
export default function ListWork() {
  const ItemList = [
    "modov - reserved(by eni)",
    "gotham - reservation available",
    "rangu - not reservable",
  ];

  return (
    <div>
      listwork
      <ListItems Items={ItemList} />
    </div>
  );
}
