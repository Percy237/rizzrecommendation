import { useEffect, useState } from "react";
import api from "../api";
import Rating from "../components/Rating";

const Home = () => {
  const [pickupLines, setPickupLines] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPickupLines();
  }, []);

  const getPickupLines = () => {
    api
      .get("/api/pickup-lines-ratings/")
      .then((res) => {
        setPickupLines(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex text-white">
      <div className="flex-1">
        <div className="py-5 md:w-[500px] lg:w-[500px] line-container mx-auto flex flex-col gap-y-6 scrollable-div ">
          {loading ? (
            <p>Loading...</p>
          ) : pickupLines.length === 0 ? (
            <p>No pickup lines available</p>
          ) : (
            pickupLines.map((pickupLine) => (
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
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
