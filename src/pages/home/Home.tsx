import React from 'react';
import PopularMovie from '../../component/popularMovie/PopularMovie';
import Trending from '../../component/trending/Trending';
import PopularReleases from '../../component/popularRelease/PopularReleases';

function Home() {
  return (
    <div className="container">
      <div className="md:mx-[80px] mx-5 md:mb-[85px] mb-[38px] md:mt-[41px] mt-[37px]">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-[70px] md:gap-[35px]">
          <div className="md:col-span-1 lg:col-span-1 row-start-1">
            <PopularMovie />
          </div>
          <div className="md:col-span-2 md:ml-[90px] md:mt-0 mt-[48px] md:mr-[-90px] row-start-3 md:row-start-1">
            <Trending />
          </div>
          <div className="md:col-span-3 md:mt-0 mt-[48px] row-start-2 md:mr-[-90px] md:row-start-3 lg:row-start-2">
          <PopularReleases  />
        </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
