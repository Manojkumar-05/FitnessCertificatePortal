import React, { useState, useEffect } from "react";
import Nav from "../ui/Nav";
import { questions } from "../data/questions";
import { categories } from "../data/categories";
import Switch from "../ui/SwitchNew";
import { Link, useNavigate, useParams } from "react-router-dom";
import Axios from "axios";
import { Button } from "../ui/button";

const SubmitCertificate = () => {
  const navigate = useNavigate();
  Axios.defaults.withCredentials = true;

  useEffect(() => {
    Axios.get("http://localhost:3000/auth/verify").then((res) => {
      if (res.data.status) {
      } else navigate("/");
    });
  }, []);

  const trueObj = questions.reduce((acc, { qno }) => {
    acc[qno] = true;
    return acc;
  }, {});

  const [data, setSwitchStates] = useState(trueObj);
  const handleSwitchChange = (index) => (isSelected) => {
    setSwitchStates((prevState) => ({
      ...prevState,
      [index]: isSelected,
    }));
  };

  let id = 1234;
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(data);
    Axios.post("http://localhost:3000/data/submit", { id, data })
      .then((res) => {
        console.log(res);
        if (res.data.status) navigate("/home");
        // handle success response
      })
      .catch((err) => {
        console.error(err);
        // handle error response
      });
  };

  let params = useParams();

  return (
    <div className="dark:bg-gray-950 dark:text-white">
  
      <form
        className="flex justify-center flex-col gap-7 dark:bg-black dark:text-white p-20 w-full h-full"
        onSubmit={handleSubmit}
      >
        <div className="text-2xl ml-[9%] ">
          {categories[params.id - 1].CategoryName}
        </div>
        {questions.map(({ qno, qn }) => (
          <div key={qno} className="md:ml-32 text-xs md:text-base">
            {qno} {qn}
            <span className="float-end md:mr-28">
              <Switch
                key={qno}
                name={qno}
                onValueChange={handleSwitchChange(qno)}
                color="success"
                defaultSelected="true"
                size="sm"
              />
            </span>
          </div>
        ))}
        <div className="flex flex-row justify-end gap-3  mr-32 my-10">
          <Link to="/home">
            <Button className="w-24 dark:bg-fuchsia-500 dark:hover:bg-fuchsia-700">
              Cancel
            </Button>
          </Link>
          <Button
            type="submit"
            className="w-24 dark:bg-fuchsia-500 dark:hover:bg-fuchsia-700"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SubmitCertificate;
