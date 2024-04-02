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
      <div className="basis-56 hidden md:block xl:block lg:block border-r-4 border-zinc-600 side-bar-height">
        sidebar
      </div>
      <div className="flex-1">
        <div className="py-5  w-[500px] line-container mx-auto side flex flex-col gap-y-6 scrollable-div ">
          {PickupLines.map((pickupLine) => (
            <div
              key={pickupLine.pickupLineId}
              className="w-[450px] flex flex-col gap-2  p-4 rounded-md card-shadow  mx-auto"
            >
              <p>{pickupLine.pickup_line}</p>
              <p>
                Category: <span>{pickupLine.category_name}</span>
              </p>
              <div className="flex items-center gap-x-2">
                Rate:
                <span>
                  <Rating pickupLineId={pickupLine} />
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
