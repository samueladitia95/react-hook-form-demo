import { useState } from "react";
import Component1 from "./containers/Component1";
import Component2 from "./containers/Component2";
import Component3 from "./containers/Component3";
import Component4 from "./containers/Component4";
import Component5 from "./containers/Component5";

function App() {
  const [page, setPage] = useState(0);

  return (
    <div className="container py-4 h-screen flex flex-col gap-2">
      {/* Header */}
      <div>
        <p className="text-center font-bold text-2xl my-2">React Hook Form</p>
        <div className="flex gap-2 justify-center">
          {Array(5)
            .fill(1)
            .map((_, index) => (
              <button
                key={index}
                className="p-2 bg-primary rounded"
                onClick={() => setPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
        </div>
      </div>

      {/* Content */}
      <div className="rounded border-4 border-primary grow p-2">
        {page === 0 && <p className="text-center">Welcome</p>}
        {page === 1 && <Component1 />}
        {page === 2 && <Component2 />}
        {page === 3 && <Component3 />}
        {page === 4 && <Component4 />}
        {page === 5 && <Component5 />}
      </div>
    </div>
  );
}

export default App;
