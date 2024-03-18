import React from "react";

export default function Success() {
  return (
    <div role="alert" class="w-3/5 rounded border-s-4 border-green-500 bg-green-50 p-4" style={{position: "fixed", bottom: "50px", left: "100px"}}>
      <div class="flex items-center gap-2 text-green-800">
      <img src="/assets/yes.png"></img>

        <strong class="block font-medium">Success</strong>
      </div>

      <p class="mt-2 text-sm text-green-700">Audio Created Successfully</p>
    </div>
  );
}
