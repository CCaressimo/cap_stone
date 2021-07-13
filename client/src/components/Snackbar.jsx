import React from "react";
export default function Snackbar() {
  return (
    <main>
      <section className="relative pt-36 lg:pt-48 px-20">
        <div className="splashSize pt-24 md:pt-48 items-center">
          <div className="splashBx border border-gray-400 rounded-t rounded-b px-4">
            <h1 className="splashText my-4 text-3xl md:text-5xl text-center">
              Snackbar
            </h1>
            <h2 className="text-xs md:text-2xl text-center">
              snack/food/drink ideas that fit genre selection
            </h2>
            <nav>
              <div className="text-center py-6">
                <button
                  to="/about"
                  className="nextButton text-2xl py-2 px-4 border border-gray-200 rounded shadow"
                >
                  Find a Restaurant
                </button>
              </div>
            </nav>
          </div>
        </div>
      </section>
    </main>
  );
}
