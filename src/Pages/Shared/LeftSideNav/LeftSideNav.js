import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/news-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="bg-dark px-3 rounded pb-2">
      <div>
        <h5 className="text-white pt-2">All category {categories.length}</h5>
        <div className="bg-white">
          <hr />
        </div>
        {categories.map((category) => (
          <p key={category.id}>
            <Link
              className="text-decoration-none text-white "
              to={`/category/${category.id}`}
            >
              {category.name}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
