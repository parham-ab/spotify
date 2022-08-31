import { useEffect } from "react";

const DynamicTitle = (title) => {
  return useEffect(() => {
    document.title = title;
  }, []);
};

export default DynamicTitle;