import { useEffect, useState } from "react";
import api from "../api";
import Rating from "../components/Rating";

const Home = () => {
  const [PickupLines, setPickUpLines] = useState([]);

  useEffect(() => {
    getPickUpLines();
  }, []);

  const getPickUpLines = () => {
    api
      .get("/api/pickup-lines/")
      .then((res) => {
        setPickUpLines(res.data);
      })
      .catch((err) => console.log(err));
  };

  console.log(PickupLines);

  return (
    <div className="flex text-white">
      <div className="flex-1">
        <div className="py-5 md:w-[500px] lg:w-[500px] line-container mx-auto flex flex-col gap-y-6 scrollable-div ">
          {PickupLines.map((pickupLine) => (
            <div
              key={pickupLine.pickupLineId}
              className="w-[90%] md:w-[450px] lg:w-[450px] flex flex-col gap-2  p-4 rounded-md card-shadow  mx-auto"
            >
              <p>{pickupLine.pickup_line}</p>
              <p>
                Category: <span>{pickupLine.category_name}</span>
              </p>
              <div className="flex items-center gap-x-2">
                Rate:
                <span>
                  <Rating pickupLine={pickupLine} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
