import React from "react";

import tokens from "@nimbus-ds/tokens/dist/js/tokens";

import { ChartProps } from "./chart.types";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart: React.FC<ChartProps> = ({
  data
}: ChartProps) => {
  const tooltip = {
    borderRadius: tokens.spacing[2].value,
    border: 0,
    backgroundColor: tokens.color.sys.dark.neutral.background.value,
    boxShadow: tokens.shadow.dark.popover.value
  };
  const tooltipLabel = {
    fontWeight: tokens.font.weight.medium.value,
    fontSize: tokens.font.size.sys.body.caption.value
  };
  const tooltipItem = {
    fontSize: tokens.font.size.sys.body.caption.value
  };

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 20 }}>
        <Line type="monotone" strokeWidth={2} dataKey="Partners' Portal" stroke={tokens.color.sys.dark.primary.interactive.value} />
        <Line type="monotone" strokeWidth={2} dataKey="New Admin" stroke={tokens.color.sys.dark.success.interactive.value} />
        <Line type="monotone" strokeWidth={2} dataKey="Nuvem Pago" stroke={tokens.color.sys.dark.warning.interactive.value} />
        <Line type="monotone" strokeWidth={2} dataKey="Nuvem Envio" stroke={tokens.color.sys.dark.danger.interactive.value} />
        <Line type="monotone" strokeWidth={2} dataKey="Average" stroke={tokens.color.sys.dark.neutral.interactive.value} strokeDasharray="4" />
        <Tooltip contentStyle={tooltip} labelStyle={tooltipLabel} itemStyle={tooltipItem}/>
        <Legend />
        <CartesianGrid vertical={false} stroke={tokens.color.sys.dark.neutral.surface.value} />
        <XAxis axisLine={false} tickLine={false} dataKey="title" />
        <YAxis axisLine={false} tickLine={false} domain={[0, 100]} unit="%" />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default Chart;