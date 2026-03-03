"use client";

import React from "react";

type Company = {
  name: string;
  count?: number;
};

const companies: Company[] = [
  { name: "Amazon", count: 120 },
  { name: "Apple", count: 95 },
  { name: "Adobe" },
  { name: "Google", count: 98 },
  { name: "Goldman Sachs" },
  { name: "ByteDance", count: 75 },
  { name: "Bloomberg" },
];

// Group by first letter
const groupedCompanies = companies.reduce<Record<string, Company[]>>(
  (acc, company) => {
    const letter = company.name[0].toUpperCase();
    if (!acc[letter]) acc[letter] = [];
    acc[letter].push(company);
    return acc;
  },
  {}
);

const CompanyChip = ({ company }: { company: Company }) => {
  return (
    <div className="flex items-center gap-2 px-5 py-2 bg-neutral-300 hover:bg-white border border-neutral-200 rounded-full cursor-pointer transition-colors duration-200">
      <span className="text-black text-md">{company.name}</span>

      {company.count && (
        <span className="bg-blue-900 text-white text-xs px-3 py-1 rounded-full">
          {company.count}
        </span>
      )}
    </div>
  );
};

const MainPage = () => {
  return (
    <div className="bg-neutral-800 min-h-screen px-8 py-10 text-white">

      {/* Top Section */}
      <div className="h-16 bg-white rounded-lg mb-12" />

      {/* Alphabetical Sections */}
      <div className="flex flex-col gap-12">
        {Object.keys(groupedCompanies)
          .sort()
          .map((letter) => (
            <div key={letter}>

              {/* Letter Header */}
              <h2 className="text-4xl font-semibold mb-4">{letter}</h2>

              {/* Companies */}
              <div className="flex flex-wrap gap-4">
                {groupedCompanies[letter].map((company) => (
                  <CompanyChip key={company.name} company={company} />
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MainPage;