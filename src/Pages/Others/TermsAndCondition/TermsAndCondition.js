import React from "react";
import { Link } from "react-router-dom";

const TermsAndCondition = () => {
  return (
    <div>
      <h3>This is terms and condition page</h3>
      <p>
        Go back to <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default TermsAndCondition;
