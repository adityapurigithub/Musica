import React from "react";
import { FormField } from "../Components";
import bg from "../assests/bg1.jpg";
import { useLocalContext } from "../Context/LocalContextProvider";
const AddTrack = () => {
  const { handleAddTrack } = useLocalContext();
  return (
    <div className="w-full h-[100vh] flex flex-col gap-3 sm:justify-center items-center sm:text-base text-sm">
      <div
        className="bg-gradient-to-r from-cyan-500 to-blue-500 w-full h-full opacity-90"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          objectFit: "contain",
        }}
      ></div>
      <form
        className="absolute sm:top-32 top-52 sm:w-1/2 w-9/12 p-4 bg-[rgba(13,53,177,0.7)] rounded-xl"
        onSubmit={handleAddTrack}
      >
        <h1 className="sm:text-3xl text-xl text-center">Add New Track</h1>
        <FormField type="text" name="trackName" labelName="Track Name" />
        <FormField type="text" name="trackArtist" labelName="Artist Name" />
        <div className="flex justify-evenly mt-6">
          <input type="file" name="trackArt" />
          <button
            className=" sm:w-auto w-1/2 sm:px-4 px-2 rounded-full py-2 bg-orange-700 active:bg-red-400"
            type="submit"
          >
            Add track
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTrack;
