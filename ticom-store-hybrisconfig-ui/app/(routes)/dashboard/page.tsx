"use client";
import Table from "@/app/_ui/dashboard/table";
import InputForm from "@/app/_ui/dashboard/inputform";
import {
  fetchTableData,
  addNewData,
  editData,
  deleteData,
} from "@/app/_lib/data";
import { useEffect, useState } from "react";
import { Details } from "@/app/_lib/definitions";
import BasicModal from "@/app/_ui/dashboard/modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Home() {
  const [data, setData] = useState<Details[]>([]);
  const [open, setOpen] = useState(false);
  const [editRow, setEditRow] = useState(-1);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const fetchData = async () => {
    console.log("called fetchData")
    try {
      const result = await fetchTableData();
      console.log("get data: ", result);
      setData(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = (idx: number) => {
    setEditRow(idx);
    handleOpen();
  };

  const getUpdatedData = (details: Details) => {
    console.log(details)
    editData({
      id: details._id,
      updatedMessage: details,
    })
      .then(() => {
        handleClose();
        fetchData();
      })
      .catch((error) => {
        console.error("Error occurred during edit request:", error);
      });
  };

  const handleDelete = (id: string) => {
    deleteData(id)
      .then(() => {
        fetchData();
      })
      .catch((error) => {
        console.error("Error occurred during deletion or fetch:", error);
      });
  };

  const addData = (details: Details) => {
    console.log(details);
    if (
      details.firstName == "" ||
      details.lastName == "" ||
      details.phoneNo == ""
    ) {
      alert("Some fields are not filled");
    } else {
      addNewData(details)
        .then(() => {
          fetchData();
        })
        .catch((error) => {
          console.error("Error occurred during deletion or fetch:", error);
        });
    }
  };

  return (
    <>
      <InputForm addDataFunc={addData} />
      <Table
        values={data}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
      <BasicModal
        open={open}
        handleClose={handleClose}
        original={data[editRow]}
        getUpdatedData={getUpdatedData}
      />
    </>
  );
}
