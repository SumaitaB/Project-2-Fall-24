import PropTypes from "prop-types";
import DashboardComponent from "../components/DashboardComponent";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import url from "../variables/url";

const Payments = () => {
  const [data, setData] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    const credentials = btoa(`${user.email}:${user.password}`);
    axios
      .get(`${url}/api/quotes/order-user?type=payment`, {
        headers: {
          Authorization: `Basic ${credentials}`,
        },
      })
      .then((res) => {
        setData(res.data);
        //console.log(res.data);
      });
  }, []);
  return (
    <div className="mx-4 my-5 flex flex-col justify-start items-center">
      <p className="text-xl md:text-2xl font-semibold md:mt-5">
        My Payments({data.length})
      </p>

      <div className="flex flex-col w-full gap-5 mt-5 ">
        {data.map((doc, i) => (
          <DashboardComponent
            key={i}
            img={`${url}${doc.image1}`}
            place={doc.address}
            budget={doc.budget.toString()}
            text="We will not agree on this budget. Please increase..."
            feet={`${doc.area}sq`}
            status={doc.status}
            updateDate={new Date(doc.update_at).toDateString()}
            data={doc}
          />
        ))}
      </div>
    </div>
  );
};

export default Payments;
