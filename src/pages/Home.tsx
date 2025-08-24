import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import RateLimitedUI from "../components/RateLimitedUI";
import useGetNotes from "../hooks/useGetNotes";
import Notes from "../components/Notes";

const Home = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const { data: notes, error, isLoading } = useGetNotes();

  useEffect(() => {
    if (error?.response?.status === 429) {
      setIsRateLimited(true);
    } else {
      setIsRateLimited(false);
    }
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {isRateLimited ? (
        <RateLimitedUI />
      ) : (
        <Notes notes={notes} error={error} isLoading={isLoading} />
      )}
    </div>
  );
};

export default Home;
