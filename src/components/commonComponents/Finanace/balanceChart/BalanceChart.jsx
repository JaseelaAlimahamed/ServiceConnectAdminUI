import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  ReferenceLine,
} from "recharts";

const data = [
  { name: "Jan", expense: 30, income: 60 },
  { name: "Feb", expense: 45, income: 85 },
  { name: "Mar", expense: 60, income: 75 },
  { name: "Apr", expense: 40, income: 65 },
  { name: "May", expense: 50, income: 70 },
  { name: "Jun", expense: 70, income: 90 },
  { name: "Jul", expense: 80, income: 100 },
  { name: "Aug", expense: 50, income: 85 },
  { name: "Sep", expense: 60, income: 75 },
  { name: "Oct", expense: 85, income: 95 },
  { name: "Nov", expense: 55, income: 60 },
  { name: "Dec", expense: 40, income: 50 },
];

const BalanceChart = () => {
  return (
    <div className="p-4">
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="yellow" stopOpacity={0.4} />
              <stop offset="75%" stopColor="yellow" stopOpacity={0.05} />
            </linearGradient>
            <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="red" stopOpacity={0.4} />
              <stop offset="75%" stopColor="red" stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="expense"
            stroke="yellow"
            fill="url(#colorExpense)"
          />
          <Area
            type="monotone"
            dataKey="income"
            stroke="red"
            fill="url(#colorIncome)"
          />

          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            dx={0}
            dy={10}
          />

          <YAxis
            dataKey="expense"
            axisLine={false}
            tickLine={false}
            tickCount={5}
            tickFormatter={(number) => `$${number.toFixed(0)}`}
            dx={-5}
            dy={-5}
          />

          <Tooltip content={<CustomTooltip />} />

          <CartesianGrid opacity={0.1} vertical={false} />

          {/* Add vertical lines for each month */}
          {data.map((entry, index) => (
            <ReferenceLine key={`line-${index}`} x={entry.name} stroke="gray" />
          ))}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

function CustomTooltip({ active, payload, label }) {
  if (active) {
    return (
      <div className="rounded bg-violet text-primary p-4 text-center shadow-lg">
        <p>${payload[0].value.toFixed(2)}</p>
        <p>${payload[1].value.toFixed(2)}</p>
        <h4>{label}</h4>
      </div>
    );
  }
  return null;
}

export default BalanceChart;
