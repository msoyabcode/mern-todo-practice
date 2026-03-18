import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const List = () => {
  const [uiData, setUiData] = useState([]);

  const getUiData = async () => {
    let listData = await fetch("http://localhost:3000/tasks");
    listData = await listData.json();
    console.log(listData);
    setUiData(listData);
  };

  useEffect(() => {
    getUiData();
  }, []);

  const deleteItem = async (id) => {
    let list = await fetch("http://localhost:3000/delete/" + id, {
      method: "Delete",
    });
    list = await list.json();
    if (list) {
      getUiData();
    }
  };
  return (
    <div className="">
      <h1 className="mt-9 flex justify-center items-center font-bold text-3xl underline">
        List items
      </h1>

      <ul className="grid grid-cols-4 gap-3 p-4 mt-12 ">
        <li className="bg-gray-100 shadow text-gray-600 rounded-md px-2 py-1 font-bold text-lg">
          S.no.
        </li>
        <li className="bg-gray-100 shadow text-gray-600 rounded-md px-2 py-1 font-bold text-lg">
          Titile
        </li>
        <li className="bg-gray-100 shadow text-gray-600 rounded-md px-2 py-1 font-bold text-lg">
          Descripiton
        </li>
        <li className="bg-gray-100 shadow text-gray-600 rounded-md px-2 py-1 font-bold text-lg">
          Action
        </li>

        {uiData &&
          uiData.map((item, index) => (
            <Fragment key={item._id}>
              <li className="bg-gray-100 shadow text-gray-600 rounded-md px-2 py-1">
                {index + 1}
              </li>
              <li className="bg-gray-100 shadow text-gray-600 rounded-md px-2 py-1">
                {item.title}
              </li>
              <li className="bg-gray-100  shadow text-gray-600 rounded-md px-2 py-1">
                {item.description}
              </li>
              <li className=" flex w-full gap-2 bg-gray-100 shadow text-gray-600 rounded-md px-2 py-1">
                <button
                  className="bg-red-400 hover:bg-red-500 text-white px-3 py-1 rounded cursor-pointer"
                  onClick={() => {
                    deleteItem(item._id);
                  }}
                >
                  Delete
                </button>

                <Link className="bg-green-400 hover:bg-green-600 px-3 py-1 rounded cursor-pointer"
                 to={"/update/"+item._id}>Update</Link>
              </li>
            </Fragment>
          ))}
      </ul>
    </div>
  );
};

export default List;
