"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

// API URL constants
const API_BASE_URL = "https://nibret-crm-back.onrender.com/api"; // Replace with actual API URL

// Fetch statistics data
const fetchStatistics = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/impressions/stats`);
    return response.data; // Assuming the response has the data in its body
  } catch (error) {
    console.error("Error fetching statistics data:", error);
    return null; // Handle error accordingly
  }
};

// Fetch users for the recent impressions table
const fetchImpressions = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/impressions/recents`);
    console.log(response.data, "Impressions");
    return response.data; // Assuming the response has the user list
  } catch (error) {
    console.error("Error fetching user data:", error);
    return []; // Return empty array on error
  }
};

interface Statistics {
  impression_count: number | string;
  prospect_count: number | string;
  property_count: number | string;
}
interface Impressions {
  propertyimage: number | string;
  propertyname: number | string;
  propertyaddress: number | string;
  prospectname: number | string;
  prospectaction: number | string;
  timestamp: number | string;
}

const Login = () => {
  const [statistics, setStatistics] = useState<Statistics>();
  const [impressions, setImpressions] = useState<Impressions[]>([]);

  useEffect(() => {
    const loadStatistics = async () => {
      await fetchStatistics()
        .then((res) => {
          console.log(res);
          setStatistics(res[0]);
        })
        .catch((e) => console.error(e));
    };

    const loadImpressions = async () => {
      await fetchImpressions()
        .then((res) => {
          setImpressions(res);
        })
        .catch((e) => console.error(e));
    };

    loadStatistics();
    loadImpressions();
  }, [setImpressions, setStatistics]);

  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4  dark:border-gray-700 mt-14">
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="flex items-center justify-center h-24 rounded-sm bg-gray-50 dark:bg-gray-800">
            <div className="flex flex-col items-center justify-center">
              <dt className="text-3xl font-extrabold">
                {statistics?.impression_count}
              </dt>
              <dd className="text-gray-500 dark:text-gray-400">Impressions</dd>
            </div>
          </div>
          <div className="flex items-center justify-center h-24 rounded-sm bg-gray-50 dark:bg-gray-800">
            <div className="flex flex-col items-center justify-center">
              <dt className="text-3xl font-extrabold">
                {statistics?.prospect_count}
              </dt>
              <dd className="text-gray-500 dark:text-gray-400">Prospects</dd>
            </div>
          </div>
          <div className="flex items-center justify-center h-24 rounded-sm bg-gray-50 dark:bg-gray-800">
            <div className="flex flex-col items-center justify-center">
              <dt className="text-3xl font-extrabold">
                {statistics?.property_count}
              </dt>
              <dd className="text-gray-500 dark:text-gray-400">Properties</dd>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mb-4 rounded-sm bg-gray-50 dark:bg-gray-800">
          <div className="overflow-x-auto shadow-md sm:rounded-lg w-full p-4">
            <h2 className="text-gray-500 dark:text-gray-400">
              Recent Impressions
            </h2>

            <div className="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 bg-white dark:bg-gray-800">
              <div>
                <button
                  id="dropdownActionButton"
                  data-dropdown-toggle="dropdownAction"
                  className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  type="button"
                >
                  <span className="sr-only">Action button</span>
                  Action
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  id="dropdownAction"
                  className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    className="py-1 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownActionButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Reward
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Promote
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Activate account
                      </a>
                    </li>
                  </ul>
                  <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Delete User
                    </a>
                  </div>
                </div>
              </div>
              <label className="sr-only">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="table-search-users"
                  className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search for users"
                />
              </div>
            </div>
            <table className="w-full mb-4 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-all-search"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label className="sr-only">checkbox</label>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Property
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Prospect
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Timestamp
                  </th>
                </tr>
              </thead>
              <tbody>
                {impressions.map(
                  (impression: Impressions, index: number | string) => (
                    <tr
                      key={index}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      <td className="w-4 p-4">
                        <div className="flex items-center">
                          <input
                            id="checkbox-table-search-1"
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label className="sr-only">checkbox</label>
                        </div>
                      </td>
                      <th
                        scope="row"
                        className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <Image
                          width={20}
                          height={20}
                          className="w-10 h-10 rounded-full"
                          src={`${impression.propertyimage}`}
                          alt="Jese image"
                        />
                        <div className="ps-3">
                          <div className="text-base font-semibold">
                            {impression.propertyname}
                          </div>
                          <div className="font-normal text-gray-500">
                            {impression.propertyaddress}
                          </div>
                        </div>
                      </th>
                      <td className="px-6 py-4">{impression.prospectname}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          {impression.prospectaction}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>
                          {impression.timestamp}
                        </div>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
            <nav className=" flex justify-center ">
              <ul className="inline-flex mx-auto -space-x-px text-base h-10">
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    Previous
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    aria-current="page"
                    className="flex items-center justify-center px-4 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                  >
                    3
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    4
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    5
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    Next
                  </a>
                </li>
              </ul>
            </nav>
            <div
              id="editUserModal"
              aria-hidden="true"
              className="fixed top-0 left-0 right-0 z-50 items-center justify-center hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
              <div className="relative w-full max-w-2xl max-h-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
