import Chart from "../../../assets/icons/ChartIcon.svg";
import Arrow from "../../../assets/icons/ArrowUpRight.svg";

const AnalyticsComponent = ({ data, head, chartText, conversionText }) => {
  return (
    <div className="">
      <div className="container max-w-screen-lg h-fit">
        <div className="px-10 py-10 shadow-md rounded-xl  bg-white"> {/* Adjusted max-w-lg for 1024px */}
          <h1 className="text-3xl font-bold  pb-10 text-dark_blue">{head}</h1>
          {data.map((data) => (
            <div className="flex flex-col py-5  gap-10" key={data.id}>
              <div className="flex items-center  justify-between gap-32 max-sm:gap-16 max-md:p-8 max-sm:flex-col">
                <div className="flex items-center  gap-5 max-sm:flex-col">
                  <img
                    src="https://picsum.photos/120"
                    className="rounded-lg shadow-sm"
                    alt="blank image"
                  />
                  <h3 className="text-2xl font-bold text-dark_blue">
                    {data.title}
                  </h3>
                </div>
                <div className="flex px-8 max-md:flex-col max-sm:flex-row max-sm:gap-8 max-md:gap-16 ">
                  <div className="flex pr-16  gap-5">
                    <img src={Chart} alt="chart image" />
                    <div>
                      <span className="text-dark_blue text-2xl font-bold">
                        {data.value}
                      </span>
                      <p className="text-id_gray">{chartText}</p>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <img src={Arrow} width={50} alt="arrow image" />
                    <div>
                      <span className="text-dark_blue text-2xl font-bold">
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
