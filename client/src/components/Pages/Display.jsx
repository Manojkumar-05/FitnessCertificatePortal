import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { Table1, Table2, Table3 } from "../ui/Tables";
import React, { useEffect } from "react";
import useUserStore, { useUserActions } from "../store/userStore";
import { useNavigate } from "react-router-dom";
import { PageNotFound } from ".";

const Display = () => {
  const navigate = useNavigate();
  const { fetchUserStatus, fetchData } = useUserActions();
  const { data, loading } = useUserStore();

  useEffect(() => {
    fetchUserStatus(navigate);
    fetchData();
  }, [fetchUserStatus, fetchData, navigate]);

  // console.log(data);

  const formatDate = (dateString) => {
    const options = {
      year: "2-digit",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: "Asia/Kolkata",
    };
    return new Date(dateString).toLocaleDateString("en-IN", options);
  };

  if (loading) return <PageNotFound />;
  return (
    <div className="flex w-full flex-col dark:bg-black dark:text-white ">
      <Tabs aria-label="Dynamic tabs" variant="underlined" color="secondary">
        <Tab key={2} title={"Immediate Actions Required"}>
          <Card className="flex">
            <CardBody className="justify-center items-center">
              <Table3 data={data} formatDate={formatDate} />
            </CardBody>
          </Card>
        </Tab>
        <Tab key={1} title={"Failures"}>
          <Card className="flex">
            <CardBody className="justify-center items-center">
              <Table2 data={data} formatDate={formatDate} />
            </CardBody>
          </Card>
        </Tab>
        <Tab key={0} title={"All Entries"}>
          <Card className="flex">
            <CardBody className="justify-center items-center">
              <Table1 data={data} formatDate={formatDate} />
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
};

export { Display };
