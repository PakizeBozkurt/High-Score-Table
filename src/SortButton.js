import React, { useState } from "react";

const SortButton = () => {
  const [sort, setSort] = useState;

  return <button onClick={() => setSort(!sort)}>Sort</button>;
};

export default SortButton;
