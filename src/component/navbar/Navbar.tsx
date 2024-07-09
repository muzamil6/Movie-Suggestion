import React from 'react'
import { Link } from 'react-router-dom'
import Search from '../search/Search'
import SearchIcon from '../../../src/assets/search.png'
import PlusIcon from '../../../src/assets/plus.png'

function Navbar() {
  return (
    <div
      className={`relative flex flex-col lg:flex-row w-full lg:pb-[22px] px-[20px] pt-[77px] pb-[11.4px] lg:px-[0px] `}
    >
      <div className="absolute md:top-[40px] md:left-[80px]  lg:top-[37px] lg:left-[80px] w-[130px] top-[43px] left-[20px] h-[106px] mb-5">
        <Link to="/" >
          <span
            className={`text-[35px] font-[600]  font-caros-bold leading-[40px] md:mb-5 `}
          >
            The Movie Tracker
          </span>
        </Link>
      </div>
      <div
        className={`flex justify-center w-full sm:pt-[15px] md:pt-0 `}  >
        <Search />
        <div className="flex justify-end w-full lg:hidden space-x-5">
          <button className={`"hidden"}`}>
            <img src={SearchIcon} alt="Search" />
          </button>
          <button>
            <img src={PlusIcon} alt="Add" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar