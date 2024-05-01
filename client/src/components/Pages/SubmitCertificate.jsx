import React, { useState, useEffect } from "react";
import { questions } from "../data/questions";
import { categories } from "../data/categories";
import Switch from "../ui/SwitchNew";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "../ui/button";
import { useUserActions } from "../store/userStore";

const SubmitCertificate = () => {
  const navigate = useNavigate();
  const { fetchUserStatus , submitData} = useUserActions();
  let {id} = useParams();

  useEffect(() => {
    fetchUserStatus(navigate);
  }, []);

  // const trueObj = questions.reduce((acc, { qno }) => {
  //   acc[qno] = true;
  //   return acc;
  // }, {});

  // const [data, setSwitchStates] = useState(trueObj);

  const [data, setSwitchStates] = useState();
  const handleSwitchChange = (index) => (isSelected) => {
    setSwitchStates((prevState) => ({
      ...prevState,
      [index]: isSelected,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitData(id, data, navigate);
    // console.log(data);
  };


  return (
    <div className="dark:bg-gray-950 dark:text-white">
      <form
        className="flex justify-center flex-col gap-7 dark:bg-black dark:text-white p-20 w-full h-full"
        onSubmit={handleSubmit}
      >
        <div className="text-2xl ml-[9%] ">
          {categories[id - 1].CategoryName}
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