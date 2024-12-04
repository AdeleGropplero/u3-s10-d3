import MyRowForMovies from "./MyRowForMovies";
import MyTvShowsSection from "./MyTvShowsSection";

const MyHome = () => {
  return (
    <>
      <MyTvShowsSection />
      <MyRowForMovies title="Ladies" />
      <MyRowForMovies title="Drama" />
      <MyRowForMovies title="Apprentice" />
    </>
  );
};
export default MyHome;
