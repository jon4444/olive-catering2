import React from "react";

export default function MenuItem() {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center group hover:bg-white hover:shadow-2xl hover:shadow-black/25 transition-all">
      <div className="text-center">
        <img src="/dish2.png" className="max-h-auto max-h-24 block-mx-auto" alt="dish2" />
      </div>
      <h4 className="font-semibold text-xl my-3">Dish 2</h4>
      <p className="text-gray-500 text-sm">
        Lorem Ipsum is simply dummy text of the printing and.
      </p>
      <button className="mt-4 bg-primary text-white rounded-full px-8 py-2">
        Add to Cart $12
      </button>
    </div>
  );
}
