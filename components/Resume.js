import RubberBand from "react-reveal/RubberBand";

function Resume({ data }) {
  if (data) {
    var skillmessage = data.skillmessage;

    var skills = data.skills.map(function (skills) {
      var className = "bar-expand " + skills.name.toLowerCase();
      return (
        <>
          <h1 className="font-bold text-lg md:text-2xl">{skills.name}</h1>

          <div className="relative pt-1">
            <div className="overflow-hidden  h-2 w-[300px] md:w-[600px] mb-4 text-xs flex rounded bg-gray-200">
              <RubberBand>
                <div
                  style={{ width: skills.level }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-indigo-600 via-purple-600 to-red-600"
                ></div>
              </RubberBand>
            </div>
          </div>
        </>
      );
    });
  }
  return (
    <div
      className="relative h-200px space-y-6 p-3  flex flex-col pt-28
           md:pt-[100px] md:p-40 bg-gradient-to-r from-indigo-200 via-purple-200 to-red-200 scrollbar-hide"
    >
      <div className="flex flex-col  space-y-4 md:flex-row md:space-x-40  ">
        <div className="underline uppercase text-xl flex justify-center font-bold md:text-3xl">
          <h1 className="">Skills</h1>
        </div>
        <div className="pl-4 space-y-4 md:text-left">{skills}</div>
      </div>
      <hr className="h-20 " />
    </div>
  );
}

export default Resume;
