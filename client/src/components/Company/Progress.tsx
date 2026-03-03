"use client";

import React from "react";
import { Check } from "lucide-react";

type ProgressProps = {
  solved: number;
  total: number;
  easy: { solved: number; total: number };
  medium: { solved: number; total: number };
  hard: { solved: number; total: number };
};

const ProgressCard = ({
  solved,
  total,
  easy,
  medium,
  hard,
}: ProgressProps) => {
  const percentage = (solved / total) * 100;

  const radius = 60;
  const stroke = 8;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset =
    circumference - (percentage / 100) * circumference;

  return (
    <div className="text-white">
      <h2 className="text-lg font-semibold mb-4">Progress</h2>

      <div className="flex gap-6 items-center">

        {/* Circular Progress */}
        <div className="bg-neutral-800 rounded-lg p-6 flex items-center justify-center">
          <div className="relative">

            <svg height={radius * 2} width={radius * 2}>
              {/* Background circle */}
              <circle
                stroke="#404040"
                fill="transparent"
                strokeWidth={stroke}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
              />

              {/* Progress circle */}
              <circle
                stroke="#22c55e"
                fill="transparent"
                strokeWidth={stroke}
                strokeLinecap="round"
                strokeDasharray={circumference + " " + circumference}
                style={{ strokeDashoffset }}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
                transform={`rotate(-90 ${radius} ${radius})`}
              />
            </svg>

            {/* Center Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="flex items-end">
                <p className="text-3xl font-semibold">{solved}</p>
                <p className="text-lg text-neutral-400 ml-1">
                  /{total}
                </p>
              </div>

              <div className="flex items-center gap-1 mt-1">
                <Check className="size-4 text-green-500" />
                <span className="text-sm text-neutral-300">
                  Solved
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Difficulty Breakdown */}
        <div className="flex flex-col gap-3">

          <DifficultyCard
            label="Easy"
            color="text-green-500"
            data={easy}
          />

          <DifficultyCard
            label="Medium"
            color="text-yellow-500"
            data={medium}
          />

          <DifficultyCard
            label="Hard"
            color="text-red-500"
            data={hard}
          />

        </div>
      </div>
    </div>
  );
};

const DifficultyCard = ({
  label,
  color,
  data,
}: {
  label: string;
  color: string;
  data: { solved: number; total: number };
}) => {
  return (
    <div className="bg-neutral-800 rounded-md px-4 py-2 w-32">
      <p className={`text-sm font-semibold ${color}`}>
        {label}
      </p>
      <p className="text-sm text-neutral-300">
        {data.solved}/{data.total}
      </p>
    </div>
  );
};

export default ProgressCard;