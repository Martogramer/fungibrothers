import React from "react";
import { useLocation } from "react-router-dom";

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="fixed top-4 left-20 z-50">
      <span className="mr-2 whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700">
        Live
      </span>
      <span className="hidden min-[680px]:inline-block text-xs font-semibold cursor-default">
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;

          return (
            <span key={to}>
              {!last ? (
                <>
                  <a
                    href={to}
                    className="capitalize text-navy-100 hover:underline"
                  >
                    {value}
                  </a>
                  <span className="mx-1 text-purple-700">/</span>
                </>
              ) : (
                <span className="capitalize text-navy-100">{value}</span>
              )}
            </span>
          );
        })}
      </span>
    </div>
  );
};

export default Breadcrumb;
