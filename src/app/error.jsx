'use client'
import { useEffect } from "react";

const error = ( { error, reset } ) => {
   useEffect(() => {
     console.error(error);
   }, [error]);

  return (
    <div className="text-center mt-10 p-3 space-y-4">
      <h1>Something was wrong, please try again later</h1>
      <button className="hover:text-amber-600" onClick={() => reset() }>Try Again</button>
    </div>
  )
}

export default error
