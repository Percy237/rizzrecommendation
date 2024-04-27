import { useEffect, useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Preferences = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    fetchCategories();
  }, []);

  const navigate = useNavigate();

  const fetchCategories = () => {
    api.get("/api/categories/").then((res) => setCategories(res.data));
  };

  const handleSelectedCategory = (category) => {
    const newSelection = selectedCategories.includes(category)
      ? selectedCategories.filter((cat) => cat !== category)
      : [...selectedCategories, category];
    setSelectedCategories(newSelection);
    setIsSelected(() => !isSelected);
  };

  const handleSubmit = () => {
    if (selectedCategories.length > 0) {
      api
        .post("/api/userprofile/", { preferred_categories: selectedCategories })
        .then(() => {
          toast.success("Yayyy let's rizz!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
          setTimeout(() => {
            navigate("/homepage");
          }, 3000);
        })
        .catch((error) => console.log(error));
    } else {
      toast.info("Please select at least one", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  };

  const categoryEmojis = {
    Romantic: "😍",
    Funny: "😂",
    Cheesy: "🧀",
    Flirty: "😉",
    Clever: "🤓",
    Complimentary: "🍭",
    Religious: "✝️",
  };
  return (
    <div className="flex justify-center items-center flex-col p-10">
      <ToastContainer />
      <h1 className="loved-by text-3xl md:text-5xl lg:text-5xl">
        Choose Your Preferences
      </h1>
      <div className="grid grid-cols gap-y-2 mt-3">
        {categories.map((category) => (
          <button
            key={category.category_id}
            onClick={() => handleSelectedCategory(category.category_id)}
            className={`border p-2 rounded-xl ${
              selectedCategories.includes(category.category_id)
                ? "selected"
                : ""
            }`}
          >
            {category.category_name}
            {categoryEmojis[category.category_name]}
          </button>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        className="mt-3 cursor-pointer border p-2 rounded-xl  hover:bg-white hover:text-black"
      >
        Submit💌
      </button>
    </div>
  );
};

export default Preferences;
