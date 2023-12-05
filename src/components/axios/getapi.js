import React, { useEffect, useState } from "react";
import axios from "axios";
// ipo ena pana porom na or
function Getter() {
  const [item, setItem] = useState([]);
  useEffect(() => {
    //PostData();
    FetchData();
  }, []);
  async function FetchData() {
    await axios
      .get(
        "https://crudcrud.com/api/3d18cafe059b4cfbb080f336405ca283/poostman/"
      )
      .then((res) => {
        setItem(res.data);
      });
  }
  async function PostData() {
    await axios.post(
      "https://crudcrud.com/api/3d18cafe059b4cfbb080f336405ca283/poostman/",
      { Postman: "buckker" }
    );
  }
  async function Del(id) {
    await axios.delete(
      `https://crudcrud.com/api/3d18cafe059b4cfbb080f336405ca283/poostman/${id}`
    );
  }
  return (
    <div>
      {item.map((list) => (
        <>
          <h2>
            {list._id}.{list.Postman}
          </h2>
          <button onClick={() => Del(list._id)}>click me</button>
        </>
      ))}
    </div>
  );
}

export default Getter;
