import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../lib/client";

const useFetchData = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchData,
  });

  console.log("Data in useFetchData:", data);
  console.log("Loading state in useFetchData:", isLoading);
  console.log("Error state in useFetchData:", isError);
  if (isError) {
    console.error("Error in useFetchData:", error);
  }

  return { data, loading: isLoading, error: isError };
};

export default useFetchData;
