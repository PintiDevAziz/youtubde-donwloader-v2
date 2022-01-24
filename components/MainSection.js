import React, { useEffect, useState } from "react";
import DownloadVideo from "./DownloadVideo";
const MainSection = () => {
  const [button, setButton] = useState(true);
  const [error, setError] = useState(false);
  const [ytLink, setYtLink] = useState("");
  const [ytData, setYtData] = useState();
  const [loading, setLoading] = useState(null);
  useEffect(() => {
    if (
      ytLink.match(
        /http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?/g
      )
    ) {
      setButton(false);
      setError(false);
    } else {
      setButton(true);
      setError(true);
    }
  }, [ytLink]);
  const fetchYtVideo = async () => {
    setLoading(true);
    const res = await fetch(
      `https://ytstream-download-youtube-videos.p.rapidapi.com/dl?id=${ytLink.replace(
        "https://www.youtube.com/watch?v=",
        ""
      )}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "ytstream-download-youtube-videos.p.rapidapi.com",
          "x-rapidapi-key":
            "3a7500bf3fmshd20b0ffde286e45p12717djsn657e168f2e08",
        },
      }
    );
    setLoading(false);
    setYtData(await res.json());
  };
  return (
    <div className="flex flex-col justify-start pt-20 items-center h-[calc(100vh-9rem)] ">
      <div className="flex items-center flex-col gap-y-6 group">
        <h1 className=" text-3xl font-bold text-gray-700">
          YouTube Downloader
        </h1>
        <p className="text-gray-600">
          Create and download YouTube videos in Mp3,Mp4 fro free without ads
        </p>
        <label
          className={`w-[45rem] h-[3.5rem]  ${
            ytData ? "hidden" : "flex"
          }  items-center gap-x-4`}
        >
          <input
            value={ytLink}
            onChange={(e) => {
              setYtLink(e.target.value);
            }}
            type="text"
            className="flex-1 focus-within:border-[#ff0000] border-red-300 h-full rounded-xl border-2 outline-none px-4"
          />
          <button
            disabled={button}
            onClick={fetchYtVideo}
            className="px-10 py-2 bg-red-500 disabled:bg-red-200 disabled:cursor-not-allowed font-semibold tracking-wider text-white h-full rounded-lg"
          >
            Convert
          </button>
        </label>
        {error ? (
          <div className="scale-0 group-focus-within:scale-100 font-semibold text-xl transition-all">
            Please fill correct
          </div>
        ) : null}
        <div>
          {loading ? (
            <div className="w-32 h-32 border-4 rounded-full border-l-red-400 animate-spin"></div>
          ) : (
            <div className={ytData ? "block" : "hidden"}>
              <DownloadVideo ytData={ytData} />
            </div>
          )}
        </div>
      </div>
      <div className=" mt-24  w-[60rem] flex flex-col">
        <h1 className=" text-3xl font-bold block mx-auto mb-6 text-gray-700">
          The Best Yotube Downloader
        </h1>
        <p>
          YT1s YouTube Downloader helps you save Youtube videos to your device.
          You can choose from a variety of formats and qualities to download.
          YT1s.com is a utility website for downloading user-uploaded videos
          from YouTube. First published in 2020, it has a vast, diverse,
          worldwide community of users. It is used by journalists and human
          rights organizations to save eyewitness videos, by educators to save
          videos for classroom use, by YouTubers to save backup copies of their
          own uploaded videos, and by users worldwide to watch videos on
          hardware that can’t run a standard web browser, or to watch videos in
          their full resolution over slow or unreliable Internet connections.
          YT1s.com stands in place of a Web browser and performs a similar
          function with respect to user-uploaded videos. Importantly, YT1s.com
          does not decrypt video streams that are encrypted with commercial DRM
          technologies, that are used by subscription video sites.
        </p>
      </div>
    </div>
  );
};

export default MainSection;
