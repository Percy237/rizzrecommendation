import { useEffect, useState } from "react";
import api from "../api";
import Rating from "../components/Rating";
import InfiniteScroll from "react-infinite-scroll-component";

const Home = () => {
  const [pickupLines, setPickupLines] = useState([]);
  const [fetchNextData, setFetchNextData] = useState(null);

  useEffect(() => {
    getPickupLines();
  }, []);

  const getPickupLines = () => {
    api
      .get("/api/pickup-lines-ratings/")
      .then((res) => {
        setPickupLines(res.data.results);
        setFetchNextData(res.data.next);
      })
      .catch((err) => console.log(err));
  };

  const fetchNextPage = () => {
    if (fetchNextData) {
      api
        .get(fetchNextData)
        .then((res) => {
          setPickupLines((prevPickupLines) => [
            ...prevPickupLines,
            ...res.data.results,
          ]);
          setFetchNextData(res.data.next);
        })
        .catch((err) => console.error("Error fetching next page:", err));
    }
  };

  return (
    <div className="">
      <div
        className=" py-5 md:w-[500px] lg:w-[500px]  line-container mx-auto flex flex-col scrollable-div"
        id="scrollableDiv"
      >
        <InfiniteScroll
          dataLength={pickupLines.length}
          next={fetchNextPage}
          hasMore={true}
          loader={
            <h4 className="flex justify-center">
              Loading more pickup lines...
            </h4>
          }
          endMessage={
            <p className="text-center mt-4">Yay! You have seen it all.</p>
          }
          key={pickupLines.length}
          scrollableTarget="scrollableDiv"
          scrollThreshold="100px"
        >
          {pickupLines.length === 0 ? (
            <p>No pickup lines available</p>
          ) : (
            pickupLines.map((pickupLine) => (
              <div
                key={pickupLine.pickup_line_id}
                className="w-[90%] md:w-[450px] lg:w-[450px] flex flex-col mt-3 p-4 rounded-md card-shadow mx-auto"
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
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default Home;
