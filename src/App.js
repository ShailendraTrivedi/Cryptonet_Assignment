import axios from "axios";
import { Eye, EyeOff } from "lucide-react";
import React, { useEffect, useState } from "react";

const App = () => {
  const [profileDetails, setProfileDetails] = useState();
  useEffect(() => {
    const response = async () => {
      const res = await axios.get(
        "https://randomuser.me/api/?page=1&results=1&seed=abc"
      );
      setProfileDetails(res?.data?.results[0]);
      return res;
    };
    response();
  }, []);
  console.log(profileDetails);
  const [seekPassword, setSeekPassword] = useState(false);
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center">
        <div className="grid grid-cols-3 h-[40rem] w-[80rem] gap-10">
          <div className="w-full flex flex-col items-center gap-2 bg-white p-10 rounded-xl shadow-[0_0px_5px_5px_rgba(0,0,0,0.5)]">
            {/* Profile Image */}
            <div className="h-[10rem] w-[10rem] border-2 border-black rounded-full">
              <img
                src={profileDetails?.picture.large}
                alt=""
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            {/* Name */}
            <div className="flex gap-2 w-full items-center">
              <label htmlFor="" className="font-bold text-xl">
                Name:
              </label>
              <div>
                {`${profileDetails?.name.title} ${profileDetails?.name.first} ${profileDetails?.name.last}`}
              </div>
            </div>
            {/* Gender */}
            <div className="flex gap-2 w-full items-center">
              <label htmlFor="" className="font-bold text-xl">
                Gender:
              </label>
              <div>{profileDetails?.gender}</div>
            </div>
            {/* Age */}
            <div className="flex gap-2 w-full items-center">
              <label htmlFor="" className="font-bold text-xl">
                Age:
              </label>
              <div>
                <div>{profileDetails?.dob.age}</div>
              </div>
            </div>
            {/* Email */}
            <div className="flex gap-2 w-full items-center">
              <label htmlFor="" className="font-bold text-xl">
                Email:
              </label>
              <div>{profileDetails?.email}</div>
            </div>
            {/* DOB */}
            <div className="flex gap-2 w-full items-center">
              <label htmlFor="" className="font-bold text-xl">
                DOB:
              </label>
              <div>
                <div>
                  {new Date(profileDetails?.dob.date).toLocaleDateString(
                    "en-US",
                    { day: "numeric", month: "short", year: "numeric" }
                  )}
                </div>
              </div>
            </div>
            {/* Contact */}
            <div className="fl  ex flex-col gap-2 w-full">
              <label htmlFor="" className="font-bold text-xl">
                Contact Number:
              </label>
              <ul className="w-full list-disc ps-5">
                {/* Location - Street */}
                <li>
                  <div className="flex gap-2">
                    <label htmlFor="" className="font-bold">
                      Phone:
                    </label>
                    {`${profileDetails?.phone}`}
                  </div>
                </li>
                {/* Location - City */}
                <li>
                  <div className="flex gap-2">
                    <label htmlFor="" className="font-bold">
                      Cell:
                    </label>
                    {`${profileDetails?.cell}`}
                  </div>
                </li>
              </ul>
            </div>
            {/* Location */}
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="" className="font-bold text-xl">
                Location:
              </label>
              <ul className="w-full list-disc ps-5">
                {/* Location - Street */}
                <li>
                  <div className="flex gap-2">
                    <label htmlFor="" className="font-bold">
                      Street:
                    </label>
                    {`${profileDetails?.location.street.number} ${profileDetails?.location.street.name}`}
                  </div>
                </li>
                {/* Location - City */}
                <li>
                  <div className="flex gap-2">
                    <label htmlFor="" className="font-bold">
                      City:
                    </label>
                    {profileDetails?.location.city}
                  </div>
                </li>
                {/* Location - State */}
                <li>
                  <div className="flex gap-2">
                    <label htmlFor="" className="font-bold">
                      State:
                    </label>
                    {profileDetails?.location.state}
                  </div>
                </li>
                {/* Location - Country */}
                <li>
                  <div className="flex gap-2">
                    <label htmlFor="" className="font-bold">
                      Country:
                    </label>
                    {profileDetails?.location.country}
                  </div>
                </li>
                {/* Location - Postcode */}
                <li>
                  <div className="flex gap-2">
                    <label htmlFor="" className="font-bold">
                      Postcode:
                    </label>
                    {profileDetails?.location.postcode}
                  </div>
                </li>
                {/* Location - Coordinate */}
                <li>
                  <div className="flex gap-2">
                    <label htmlFor="" className="font-bold">
                      Coordinate:
                    </label>
                    {`${profileDetails?.location.street.number} ${profileDetails?.location.street.name}`}
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-2 w-full flex flex-col gap-2 bg-white p-10 rounded-xl shadow-[0_0px_5px_5px_rgba(0,0,0,0.5)]">
            <div className="w-full">
              <h3 className="text-3xl font-bold text-center">Login Details</h3>
              <div className="w-full">
                <ul className="p-10 space-y-2">
                  <li>
                    <div className="flex items-center gap-2">
                      <label htmlFor="" className="font-bold text-xl w-[10rem]">
                        Username:
                      </label>
                      <input
                        type="text"
                        className=" w-[20rem] focus:outline-none border-b-2 border-black p-2 bg-gray-100"
                        value={profileDetails?.login.username}
                      />
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-2 ">
                      <label htmlFor="" className="font-bold text-xl w-[10rem]">
                        Password:
                      </label>
                      <div className="relative">
                        <input
                          type={`${seekPassword ? "text" : "password"}`}
                          className=" w-[20rem] focus:outline-none border-b-2 border-black p-2 bg-gray-100 pe-10 "
                          value={profileDetails?.login.password}
                        />
                        <div
                          onClick={() => setSeekPassword(!seekPassword)}
                          className="absolute top-2 right-2"
                        >
                          {seekPassword ? <Eye /> : <EyeOff />}
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full">
              <h3 className="text-3xl font-bold text-center">Generated Keys</h3>
              <div className="w-full">
                <ul className="p-10 space-y-2">
                  <li>
                    <div className="flex items-center gap-2">
                      <label htmlFor="" className="font-bold text-xl w-[8rem]">
                        Salt:
                      </label>
                      {profileDetails?.login.salt}
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-2">
                      <label htmlFor="" className="font-bold text-xl w-[8rem]">
                        Md5:
                      </label>
                      {profileDetails?.login.md5}
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-2">
                      <label htmlFor="" className="font-bold text-xl w-[8rem]">
                        Sha1:
                      </label>
                      {profileDetails?.login.sha1}
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-2">
                      <label htmlFor="" className="font-bold text-xl w-[8rem]">
                        Sha256:
                      </label>
                      {profileDetails?.login.sha256}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
