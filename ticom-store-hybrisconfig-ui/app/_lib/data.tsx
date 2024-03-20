import { Details } from "./definitions";
import { unstable_noStore as noStore } from "next/cache";
import axios from 'axios';

const baseUrl = "https://crud-app-backend.b377d1b.kyma.ondemand.com";

// function to get data
export const fetchTableData = async (): Promise<Details[]> => {
  try {
    const response = await axios.get(`${baseUrl}/messages`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status !== 200) {
      throw new Error('Network response was not ok');
    }

    const contentType = response.headers['content-type'];
    if (contentType && contentType.includes('application/json')) {
      const data = response.data;
      console.log('fetched data', data);
      return data;
    } else {
      console.log('Response is not JSON, it\'s:', response);
      return [];
    }
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
    return [];
  }
};

// function to add new data
export const addNewData = async (body: Details) => {
  try {
    console.log("this is the input body", body);

    const response = await axios.post(`${baseUrl}/messages`, body, {
      headers: {
        "Content-Type": "application/json",
      }
    });

    console.log("response: ", response);

    if (response.status !== 200) {
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
  id: string;
  updatedMessage: Details;
}) => {
  try {
    const { id, updatedMessage } = body;

    const response = await axios.put(`${baseUrl}/edit-message/${id}`, updatedMessage, {
      headers: {
        "Content-Type": "application/json",
      }
    });

    console.log("response: ", response);

    if (response.status !== 200) {
      throw new Error("Network response was not ok");
    } else {
      console.log("Data edited successfully!");
    }
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
};

// function to delete data

export const deleteData = async (id: string) => {
  try {
    const response = await axios.delete(`${baseUrl}/delete-message/${id}`, {
      headers: {
        "Content-Type": "application/json",
      }
    });

    console.log("response: ", response);

    if (response.status !== 200) {
      throw new Error("Network response was not ok");
    } else {
      console.log("Data deleted successfully!");
    }
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
};