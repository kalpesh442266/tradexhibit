import { Routes, Route } from "react-router-dom";

import TestComp from "./TextComp";
import TestComp2 from "./TestComp2";

export const Router = () => {
  return (
    <Routes>
      <Route index element={<TestComp/>} />
      <Route path="/other" element={<TestComp2 />} />
    </Routes>
  );
};
