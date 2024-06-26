import React, { FC, useEffect, useState } from "react";
import axios from "axios";

type Props = {
  videoUrl: string;
  title: string;
};

const CoursePlayer: FC<Props> = ({ videoUrl }) => {
  const [videoData, setVideoData] = useState({
    otp: "",
    playbackInfo: "",
  });

  useEffect(() => {
    // axios
    //   .post("https://elearning-lms-7728bbd846c2.herokuapp.com/api/v1/getVdoCipherOTP", {
    //     videoId: videoUrl,
    //   })
    axios
      .post("https://elearning-backend-1dwo.onrender.com/api/v1/getVdoCipherOTP", {
        videoId: videoUrl,
      })
      .then((res) => {
        setVideoData(res.data);
      });
  }, [videoUrl]);

  return (
    <div
      style={{ position: "relative", paddingTop: "56.25%", overflow: "hidden" }}
    >
      {videoData.otp && videoData.playbackInfo !== "" && (
        // <iframe
        //   src={`https://player.vdocipher.com/v2/?otp=${videoData?.otp}&playbackInfo=${videoData.playbackInfo}&player=v08ZPXoO6j18hi3s`}
        //   style={{
        //     position: "absolute",
        //     top: 0,
        //     left: 0,
        //     width: "100%",
        //     height: "100%",
        //     border: 0
        //   }}
        //   allowFullScreen={true}
        //   allow="encrypted-media"
        // ></iframe>

        <iframe
          src={`https://player.vdocipher.com/v2/?otp=${videoData?.otp}&playbackInfo=${videoData?.playbackInfo}&player=v08ZPXoO6j18hi3s`}
          style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: 0
              }}
              allowFullScreen={true}
              allow="encrypted-media"
        ></iframe>
      )}
    </div>
  );
};

export default CoursePlayer;
