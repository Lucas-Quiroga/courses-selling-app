import React from "react";

const Video = (props: any) => {
  return (
    <div className="w-screen flex h-screen flex-row mx-12">
      <div
        className="w-full h-2/3 ml-44 mt-4 px-2 pt-2  
                            rounded-xl border-2 border-slate-400"
      >
        <iframe src={props.link} className="w-full h-5/6"></iframe>
        <div className="mt-1 h-1/3 text-left text-xl text-slate-600">
          Title: {props.title}
          <p className="text-lg pt-2">Description:{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Video;
