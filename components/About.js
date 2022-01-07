import { FaDownload } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { FaUserAlt } from "react-icons/fa";
import { CgMail } from "react-icons/cg";


function About({ data }) {
  if (data) {
    var name = data.name;
    var profilepic = "images/" + data.image;
    var bio = data.bio;
    var street = data.address.street;
    var city = data.address.city;
    var state = data.address.state;
    var zip = data.address.zip;
    var phone = data.phone;
    var email = data.email;
    var resumeDownload = data.resumedownload;
  }

  return (
    <div className="shadow-2xl ">
      <div className=" flex flex-col p-2 px-10 md:px-40 pt-8 md:pt-16 h-screen bg-gradient-to-r from-indigo-200 via-purple-200 to-red-200 text-white ">
        <div className="space-y-4 md:space-y-8 ">
          <h1 className=" text-2xl md:text-3xl font-bold ">About Me</h1>
          <div className="flex text-md md:text-lg">
            <p className="flex-grow-0 w-90 text-black text-justify">{bio}</p>
          </div>
          <div className="flex flex-col space-y-8 justify-between md:flex-row md:items-center ">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">
                Contact Details
              </h1>
              <div className="flex text-lg space-x-2 space-y-3 text-black">
                <div className="pt-5 space-y-3 ">
                  <FaUserAlt />
                  <ImLocation2 />
                  <CgMail size={23} />
                </div>
                <div className="space-y-1 font-bold">
                  <h1>{name}</h1>
                  <h1>
                    {street} {city}, {state}, {zip}
                  </h1>
                  <h1>{email}</h1>
                </div>
              </div>
            </div>
            <div className="flex-none  w-40 h-10 bg-white rounded-lg text-black p-2 ">
              <button className="font-semibold">
                <a href="https://drive.google.com/file/d/1-I-MX17Fj0ij98mAoSjdI5af2FazAMh7/view">
                  Download Resume
                </a>
                <FaDownload />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
