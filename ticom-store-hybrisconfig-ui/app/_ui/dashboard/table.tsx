"use client";
import { Details } from "@/app/_lib/definitions";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Table(props: any) {
  const { values, handleEdit, handleDelete } = props;
  console.log(props);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <table className="min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  First Name
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Last Name
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Phone Number
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {values?.map((value: Details, idx: number) => (
                <tr
                  key={idx}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      {value.firstName}
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {value.lastName}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {value.phoneNo}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div
                      className="inline-flex rounded-md shadow-sm"
                      role="group"
                    >
                      <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 border border-gray-900 rounded-s-lg bg-gray-900 text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                        onClick={() => handleEdit(idx)}
                      >
                        <EditIcon />
                      </button>
                      <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 border border-gray-900 rounded-e-lg bg-gray-900 text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                        onClick={() => handleDelete(value._id)}
                      >
                        <DeleteIcon />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
