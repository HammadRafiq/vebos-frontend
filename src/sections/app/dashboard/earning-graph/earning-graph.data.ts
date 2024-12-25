export const earningOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    filler: {
      propagate: false,
    },
  },
  elements: {
    line: {
      borderWidth: 2,
      cubicInterpolationMode: "monotone",
    },
  },
  layout: {
    padding: {
      left: 10,
      right: 10,
      top: 10,
      bottom: 10,
    },
  },
  interaction: {
    intersect: false,
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
      min: 0,
      max: 100,
      ticks: {
        stepSize: 25,
        callback: function (value: any) {
          return value % 25 === 0 ? `$${value}K` : "";
        },
      },
    },
  },
};

const labels = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
];

const teamAirdropData = [
  38, 40, 50, 52, 55, 58, 61, 64, 68, 72, 70, 67, 64, 61, 58, 54, 86, 84, 82,
  61, 58, 54, 86, 84, 82, 61, 58, 54, 86, 84, 82,
];
export const earningGraphData = {
  labels,
  datasets: [
    {
      fill: {
        target: "origin",
        above: "rgba(255, 139, 96, 0.3)",
      },
      label: "Circulation Supply ",
      data: teamAirdropData,
      borderColor: "#FF4434",
      backgroundColor: "#FF4434",
      pointRadius: 0,
      pointHoverRadius: 0,
    },
  ],
};
