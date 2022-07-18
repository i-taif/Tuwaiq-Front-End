import React, { useEffect, useState } from "react";
import axios from "axios";
export default function GitCRUD() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/list-cities")
      .then((res) => {
        console.log(res.data);
        setData(res.data.cities);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h2>
        {data.map((i) => {
          return " "+i.City_name  +" "+ i.language
        })}
      </h2>
    </div>
  );
}
