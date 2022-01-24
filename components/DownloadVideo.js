import React, { useRef, useState } from "react";
import download from "downloadjs";
import { AiFillCaretDown } from "react-icons/ai";
const DownloadVideo = ({ ytData }) => {
  const [currentSelected, setCurrentSelected] = useState();
  return (
    <div className="w-[55rem] h-[15rem] bg-[#E9ECEF] p-5 flex gap-x-4">
      <div className=" w-80 h-full flex items-center justify-center">
        <video
          src={currentSelected}
          controls
          poster={ytData?.thumb}
          alt=""
          className="h-full  flex w-full object-cover"
        />
      </div>
      <div>
        <h1 className="font-semibold capitalize mb-1">{ytData?.title}</h1>
        <p className="text-gray-500">{ytData?.author}</p>
        <p className="mt-2">{ytData?.length}</p>
        <div className="relative w-80 flex">
          <select
            onChange={(e) => {
              setCurrentSelected(e.target.value);
            }}
            className="mt-4 appearance-none flex  w-full  outline-none border-2 rounded border-gray-900  py-1 px-2"
          >
            {ytData &&
              Object.values(ytData.link).map((video) =>
                video[4] == `audio/webm; codecs=\"opus\"` ||
                video[2] !== "adaptive" ||
                video[3] === "1080p" ? (
                  <option value={video[0]}>
                    {video[3] === "OK" ? "Normal" : video[3]} {video[1]}
                  </option>
                ) : null
              )}
          </select>
          <AiFillCaretDown className=" absolute  right-2 top-1/2" />
        </div>
        <button className="mt-6 flex w-[10rem] items-center justify-center ml-2 px-6 py-2 hover:bg-gray-100 border-2 rounded border-gray-600">
          Find
        </button>
      </div>
    </div>
  );
};

export default DownloadVideo;
