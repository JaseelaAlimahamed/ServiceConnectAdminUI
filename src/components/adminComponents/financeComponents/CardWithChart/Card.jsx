
import { FaHandHoldingDollar } from "react-icons/fa6";
import { AreaChart, Area, ResponsiveContainer } from "recharts";

function CardWithChart ({ variant = "small", ...rest }) {
  let cardComponent;
  if (variant === "adsChart") {
    cardComponent = <AdsCardWithChart {...rest} />;
  }

  return (
    <div className="relative font-poppins rounded-[1.25rem] bg-white w-full max-w-[350px]">
      {cardComponent}
    </div>
  );
}

function AdsCardWithChart({ heading, title, subtitle, iconBg, percent, values }) {
  const lineChartData = values.map((pv) => ({ pv }));
  const numericPercent = parseFloat(percent);
  const percentColor = numericPercent > 0 ? "text-green-500" : "text-red";

  return (
    <div
      className={`flex gap-4 px-4 py-4 items-center`}
    >
      <div
        className={`rounded-full flex  ${iconBg}`}
      >
        <FaHandHoldingDollar size='3rem' color="white" />
      </div>
      <section className="flex flex-col">
        <span className="text-light_gray font-normal text-lg">{heading}</span>
        <span className="font-bold text-dark_blue text-4xl">{title}</span>
        <span className="font-normal text-lg text-light_gray">
          {percent !== undefined && (
            <span className={percentColor}>{percent}</span>
          )}
          {subtitle}
        </span>
      </section>
      <ResponsiveContainer width={300} height={100}>
        <AreaChart data={lineChartData}>
            <defs>
              <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22c55e" stopOpacity={0.4} />
                <stop offset="75%" stopColor="#22c55e" stopOpacity={0.05} />
              </linearGradient>
            </defs>
          <Area
            type="monotone"
            dataKey="pv"
            stroke="#22c55e"
            fill="url(#color)"
            strokeWidth={5}
            dot={false}
            />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CardWithChart;
