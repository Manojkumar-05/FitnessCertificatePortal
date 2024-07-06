// import React, { useEffect, useState } from "react";
// import { useUserActions } from "../store/userStore";
import { categories } from "../data/categories";
import { Link} from "react-router-dom";
// import { PageNotFound } from ".";

// const Tables = () => {
//   const navigate = useNavigate();
//   const { fetchUserStatus } = useUserActions();
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchData = async () => {
//     try {
//       const response = await fetch(`http://localhost:3000/data/retrieve`);
//       const json = await response.json();
//       setData(json);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchUserStatus(navigate);
//     fetchData();
//   }, [fetchUserStatus, navigate]);

//   const formatDate = (dateString) => {
//     const options = {
//       year: "2-digit",
//       month: "2-digit",
//       day: "2-digit",
//       hour: "2-digit",
//       minute: "2-digit",
//       hour12: true,
//       timeZone: "Asia/Kolkata",
//     };
//     return new Date(dateString).toLocaleDateString("en-IN", options);
//   };

//   if (loading) return <PageNotFound />;

//   return (
//     <div className="dark:bg-gray-950 dark:text-white">
//       <div className="w-full h-full">
//         <div className="flex justify-center">
//           <Table1 data={data} formatDate={formatDate} />
//           <Table2 data={data} formatDate={formatDate} />
//           <Table3 data={data} formatDate={formatDate} />
//         </div>
//       </div>
//     </div>
//   );
// };

const Table1 = ({ data, formatDate }) => {
  return (
    <table className="w-full max-w-4xl border border-gray-200 rounded-lg overflow-hidden dark:border-gray-800">
      <thead className="bg-gray-100 dark:bg-gray-800">
        <tr>
          <th className="px-4 py-3 text-left font-medium">S.No</th>
          <th className="px-4 py-3 text-left font-medium">ID</th>
          <th className="px-4 py-3 text-left font-medium">Venue</th>
          <th className="px-4 py-3 text-left font-medium">Updated On</th>
          <th className="px-4 py-3 text-right font-medium">Failure Count</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((item, index) => (
            <tr
              className="border-b border-gray-200 dark:border-gray-800"
              key={index}
            >
              <td className="px-4 py-3">{index + 1}</td>
              <td className="px-4 py-3">{item.id}</td>
              <td className="px-4 py-3">
                <Link to={`/details/${item.id}`}>
                  {categories[item.id - 1]?.CategoryName || "Unknown"}
                </Link>
              </td>
              <td className="px-4 py-3">{formatDate(item.submittedOn)}</td>
              <td className="px-4 py-3 text-right">
                {item.data ? Object.keys(item.data).length : 0}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

const Table2 = ({ data, formatDate }) => {
  return (
    <table className="w-full max-w-4xl border border-gray-200 rounded-lg overflow-hidden dark:border-gray-800">
      <thead className="bg-gray-100 dark:bg-gray-800">
        <tr>
          <th className="px-4 py-3 text-left font-medium">S.No</th>
          <th className="px-4 py-3 text-left font-medium">ID</th>
          <th className="px-4 py-3 text-left font-medium">Venue</th>
          <th className="px-4 py-3 text-left font-medium">Updated On</th>
          <th className="px-4 py-3 text-right font-medium">Failure Count</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data
            .filter((item) => item.data && Object.keys(item.data).length > 0)
            .map((item, index) => (
              <tr
                className="border-b border-gray-200 dark:border-gray-800"
                key={index}
              >
                <td className="px-4 py-3">{index + 1}</td>
                <td className="px-4 py-3">{item.id}</td>
                <td className="px-4 py-3">
                  <Link to={`/details/${item.id}`}>
                    {categories[item.id - 1]?.CategoryName || "Unknown"}
                  </Link>
                </td>
                <td className="px-4 py-3">{formatDate(item.submittedOn)}</td>
                <td className="px-4 py-3 text-right">
                  {item.data ? Object.keys(item.data).length : 0}
                </td>
              </tr>
            ))}
      </tbody>
    </table>
  );
};

const Table3 = ({ data, formatDate }) => {
  // implement Table3 logic here
  return (
    <table className="w-full max-w-4xl border border-gray-200 rounded-lg overflow-hidden dark:border-gray-800">
      <thead className="bg-gray-100 dark:bg-gray-800">
        <tr>
          <th className="px-4 py-3 text-left font-medium">S.No</th>
          <th className="px-4 py-3 text-left font-medium">ID</th>
          <th className="px-4 py-3 text-left font-medium">Venue</th>
          <th className="px-4 py-3 text-left font-medium">Updated On</th>
          <th className="px-4 py-3 text-right font-medium">Failure Count</th>
        </tr>
      </thead>
      <tbody>{/* implement Table3 data rendering here */}</tbody>
    </table>
  );
};

export { Table1, Table2, Table3 };
