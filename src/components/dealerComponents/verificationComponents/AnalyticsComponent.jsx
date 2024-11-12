import Chart from "../../../assets/icons/ChartIcon.svg";
import Arrow from "../../../assets/icons/ArrowUpRight.svg";

const AnalyticsComponent = ({ data, head, chartText, conversionText }) => {
  return ( 
    <div className=" flex items-center justify-center py-2" style={{width:"82%"}}>
      <div className="container max-w-screen-lg h-fit">
        <div className="px-5 py-5 shadow-md rounded-xl  bg-white"> {/* Adjusted max-w-lg for 1024px */}
          <h1 className="text-3xl font-bold  pb-5 text-dark_blue">{head}</h1>
          {data.map((data) => (
            <div className="flex flex-col py-2 gap-2" key={data.id}>
              <div className="flex items-center  justify-between  max-lg:gap-5 max-sm:gap-5 max-md:gap-5 max-lg:flex-col">
                <div className="flex items-center  gap-5 max-sm:flex-col">
                  <div className="bg-blue_gray rounded-lg h-20 w-20"></div>
                  <h3 className="text-base font-bold text-dark_blue">
                    {data.title}
                  </h3>
                </div>
                <div className="flex px-8 max-lg:flex-row gap-5 max-sm:flex-col max-md:flex-row max-sm:gap-5 max-md:gap-5 ">
                  <div className="flex  gap-5">
                    <img src={Chart} style={{width:"22%"}}  alt="chart image" />
                    <div>
                      <span className="text-dark_blue text-xs font-bold">
                        {data.value}
                      </span>
                      <p className="text-id_gray text-sm">{chartText}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <img src={Arrow} style={{width:"22%"}} alt="arrow image" />
                    <div>
                      <span className="text-dark_blue text-sm font-bold">
                        {data.conversion}
                      </span>
                      <p className="text-id_gray">{conversionText}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsComponent;
