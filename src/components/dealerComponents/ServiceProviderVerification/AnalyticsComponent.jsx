import Chart from "../../../assets/icons/ChartIcon.svg";
import Arrow from "../../../assets/icons/ArrowUpRight.svg";

const AnalyticsComponent = () => {
  const AnalyticsComponentConfig = [
    {
      id: 1,
      title: "Home Services",
      value: "1.234",
      conversion:"26%"
    },
    {
      id: 2,
      title: "Health & Wellness",
      value: "5.678",
      conversion:"24%"
    },
    {
      id: 3,
      title: "Automative Services",
      value: "6.878",
      conversion:"24%"
    },
    {
      id: 4,
      title: "Education & Tutoring",
      value: "1.3448",
      conversion:"29%"
    },
    {
      id: 5,
      title: "Business Services",
      value: "2.938",
      conversion:"14%"
    },
  ];

  return (
    <div>
      <div>
        <div className="px-10 py-10 shadow-md  rounded-xl min-w-full   bg-white">
          <h1 className="text-3xl font-bold pb-10 text-dark_blue">
            Registered Service
          </h1>
          {AnalyticsComponentConfig.map((data) => (
            <div className="flex flex-col py-5 gap-10" key={data.id}>
              <div className="flex items-center justify-between gap-32 max-sm:gap-16 max-md:p-8 max-sm:flex-col">
                <div className="flex items-center gap-5">
                  <img
                    src="https://picsum.photos/120"
                    className="rounded-lg shadow-sm"
                    alt="blank image"
                  />
                  <h3 className="text-2xl font-bold text-dark_blue">
                    {data.title}
                  </h3>
                </div>
                <div className="flex gap-16 px-8 max-md:flex-row">
                  <div className="flex gap-5">
                    <img src={Chart} alt="chart image" />
                    <div>
                      <span className="text-dark_blue text-2xl font-bold">
                        {data.value}
                      </span>
                      <p className="text-id_gray">Total Order</p>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <img src={Arrow} width={50} alt="arrow image" />
                    <div>
                      <span className="text-dark_blue text-2xl font-bold">
                        {data.conversion}
                      </span>
                      <p className="text-id_gray">Conversion</p>
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
