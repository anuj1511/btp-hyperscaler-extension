"use client";
import { Details } from "@/app/_lib/definitions";
import { useState } from "react";

interface EditFormProps {
  getUpdatedData: (details: Details) => void;
  original: Details;
}

export default function EditForm(props: EditFormProps) {
  const { getUpdatedData, original } = props;

  const [details, setDetails] = useState<Details>(original);

  console.log(details);

  const updateFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetails({ ...details, firstName: e.currentTarget.value });
  };

  const updateLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetails({ ...details, lastName: e.currentTarget.value });
  };

  const updatePhoneNo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetails({ ...details, phoneNo: e.currentTarget.value });
  };

  const handleSave = () => {
    getUpdatedData(details);
  };

  return (
    <div className="w-full max-w-xs">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            First Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="firstname"
            type="text"
            placeholder="First Name"
            value={details.firstName}
            onChange={updateFirstName}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="firstname"
          >
            Last Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="lastname"
            type="text"
            placeholder="Last Name"
            value={details.lastName}
            onChange={updateLastName}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="phoneno"
          >
            Phone No.
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phoneno"
            type="number"
            placeholder="Phone Number"
            value={details.phoneNo}
            onChange={updatePhoneNo}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
