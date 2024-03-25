import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

const FETCH_USERS = gql`
  query {
    users {
      _id
      username
      password
    }
  }
`;

export default function FetchAudiosComponent() {
  const { data, loading, error } = useQuery(FETCH_USERS);
  if (loading) return <div>loading...</div>;
  if (error) return <div>error: {error.message}</div>;
  return (
    <div className="text-center w-4/5 mx-auto">
      <div class="w-full mx-auto my-5 rounded-lg border border-gray-200">
        <div class="overflow-x-auto rounded-t-lg">
          <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead class="ltr:text-left rtl:text-right">
              <tr>
                <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  ID
                </th>
                <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  USERNAME
                </th>
                <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  PASSWORD
                </th>
              </tr>
            </thead>

            <tbody class="divide-y divide-gray-200">
              {data.users.map((user) => (
                <tr key={user._id}>
                  <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      {user._id}
                  </td>
                  <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {user.username}
                  </td>
                  <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {user.password}
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
