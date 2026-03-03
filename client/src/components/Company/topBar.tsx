"use client";

import React from "react";
import { ExternalLink } from "lucide-react";

type Problem = {
  id: number;
  title: string;
  acceptance: string;
  difficulty: "Easy" | "Medium" | "Hard";
  frequency: string;
};

const problems: Problem[] = [
  { id: 937, title: "Reorder Data in Log Files", acceptance: "54.3%", difficulty: "Easy", frequency: "4.77%" },
  { id: 1192, title: "Critical Connections in a Network", acceptance: "48.6%", difficulty: "Hard", frequency: "4.61%" },
  { id: 200, title: "Number of Islands", acceptance: "46.8%", difficulty: "Medium", frequency: "4.52%" },
  { id: 973, title: "K Closest Points to Origin", acceptance: "63.8%", difficulty: "Medium", frequency: "4.36%" },
  { id: 819, title: "Most Common Word", acceptance: "44.8%", difficulty: "Easy", frequency: "4.21%" },
  { id: 994, title: "Rotting Oranges", acceptance: "49.2%", difficulty: "Medium", frequency: "4.13%" },
];

const difficultyColor = {
  Easy: "bg-green-100 text-green-700",
  Medium: "bg-yellow-100 text-yellow-700",
  Hard: "bg-red-100 text-red-700",
};

export default function ProblemTable() {
  return (
    <div className="p-6 bg-neutral-900 min-h-screen">
      <div className="overflow-x-auto rounded-lg border border-neutral-700">
        <table className="w-full text-sm text-left border-collapse">

          {/* Header */}
          <thead className="bg-teal-600 text-white">
            <tr>
              <th className="px-4 py-3 border-r border-teal-500">ID</th>
              <th className="px-4 py-3 border-r border-teal-500">Title</th>
              <th className="px-4 py-3 border-r border-teal-500 text-center">Acceptance</th>
              <th className="px-4 py-3 border-r border-teal-500 text-center">Difficulty</th>
              <th className="px-4 py-3 border-r border-teal-500 text-center">Frequency</th>
              <th className="px-4 py-3 border-r border-teal-500 text-center">Leetcode Link</th>
              <th className="px-4 py-3 border-r border-teal-500 text-center">Attempted?</th>
              <th className="px-4 py-3 text-center">Date Solved</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {problems.map((problem, index) => (
              <tr
                key={problem.id}
                className={`${
                  index % 2 === 0
                    ? "bg-neutral-100"
                    : "bg-neutral-200"
                } hover:bg-neutral-300 transition`}
              >
                <td className="px-4 py-4 border-r border-neutral-300">{problem.id}</td>

                <td className="px-4 py-4 border-r border-neutral-300 font-medium">
                  {problem.title}
                </td>

                <td className="px-4 py-4 text-center border-r border-neutral-300">
                  {problem.acceptance}
                </td>

                <td className="px-4 py-4 text-center border-r border-neutral-300">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${difficultyColor[problem.difficulty]}`}
                  >
                    {problem.difficulty}
                  </span>
                </td>

                <td className="px-4 py-4 text-center border-r border-neutral-300">
                  {problem.frequency}
                </td>

                <td className="px-4 py-4 text-center border-r border-neutral-300">
                  <ExternalLink className="inline-block size-4 text-neutral-600 hover:text-black cursor-pointer" />
                </td>

                <td className="px-4 py-4 text-center border-r border-neutral-300">
                  <input type="checkbox" className="w-4 h-4" />
                </td>

                <td className="px-4 py-4 text-center text-neutral-400">
                  —
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}