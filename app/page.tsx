"use client";

import { QueryPage } from "@/components/QueryPage";
import { RegisterPage } from "@/components/RegisterPage";
import clsx from "clsx";
import { useState } from "react";

type TabID = "query" | "register";

export default function Home() {
  const [tab, setTab] = useState<TabID>("query");

  const TABS: Array<{ id: TabID; label: string }> = [
    { id: "query", label: "Query" },
    { id: "register", label: "Register" },
  ];

  return (
    <div className="mx-auto max-w-xl px-2 sm:px-0 py-10">
      <div className="card border bg-base-100 w-full shadow-xl mx-auto">
        <div className="card-body flex flex-col gap-6">
          <input type="text" value="https://domain.com" className="input input-bordered w-full" disabled />
          <div role="tablist" className="tabs tabs-boxed">
            {TABS.map((t) => (
              <a
                role="tab"
                className={clsx("tab", t.id === tab && "tab-active")}
                key={t.id}
                onClick={() => setTab(t.id)}
              >
                {t.label}
              </a>
            ))}
          </div>
          {tab === "query" && <QueryPage />}
          {tab === "register" && <RegisterPage />}
        </div>
      </div>
    </div>
  );
}
