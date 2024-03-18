import { Details } from "./definitions";
import { unstable_noStore as noStore } from "next/cache";

// function to get data
export const fetchTableData = async (): Promise<Details[]> => {
  noStore();
  try {
    const response = await fetch("http://localhost:3000/messages", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      const data = await response.json();
      console.log(data);
      return data.data;
    } else {
      console.log("Response is not JSON, it's:", response);
      return [];
    }
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
    return [];
  }
};

// function to add new data
export const addNewData = async (body: Details) => {
  try {
    const response: Response = await fetch("http://localhost:3000/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ body }),
    });

    console.log("response: ", response);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    } else {
      console.log("Data added successfully!");
    }
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
};

// function to edit data
export const editData = async (body: {
  index: number;
  updatedMessage: Details;
}) => {
  try {
    const response: Response = await fetch(
      "http://localhost:3000/edit-message",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ body }),
      }
    );

    console.log("response: ", response);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    } else {
      console.log("Data edited successfully!");
    }
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
};

// function to delete data
export const deleteData = async (body: any) => {
  try {
    const response: Response = await fetch(
      "http://localhost:3000/delete-message",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ body }),
      }
    );

    console.log("response: ", response);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    } else {
      console.log("Data deleted successfully!");
    }
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
};
