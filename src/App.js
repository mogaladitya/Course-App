import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import Spinner from "./Components/Spinner";
import { apiUrl, filterData } from "./data.js";
import { toast } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import Form from "./Pages/Form";

const App = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);  // Fixed the typo from "laoding"
  const [category, setCategory] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(apiUrl);
      const output = await res.json();
      setCourses(output.data);
    } catch (err) {
      toast.error("Something Went Wrong");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex-col flex bg-bgDark2">
      <Navbar />

      <Routes>
        {/* Feedback Form Route */}
        <Route path="/feedback" element={<Form />} />

        {/* Home or Default Route */}
        <Route
          path="/"
          element={
            <div className="bg-bgDark2">
              <Filter filterData={filterData} category={category} setCategory={setCategory} />
              <div className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center">
                {loading ? <Spinner /> : <Cards courses={courses} category={category} />}
              </div>
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
