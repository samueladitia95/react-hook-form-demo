import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Component2() {
  const [result, setResult] = useState({});
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setResult(data);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center gap-2"
      >
        <div className="flex flex-col gap-2">
          <label className="font-semibold">First Name: </label>
          <input
            type="text"
            className="border p-1 rounded w-full"
            placeholder="First Name"
            {...register("firstName")}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold">Last Name: </label>
          <input
            type="text"
            className="border p-1 rounded w-full"
            placeholder="Last Name"
            {...register("lastName")}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold">Height: </label>
          <input
            type="number"
            className="border p-1 rounded w-full"
            placeholder="Height"
            {...register("height")}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold">Birth Date: </label>
          <input
            type="date"
            className="border p-1 rounded w-full"
            {...register("birthDate")}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold">Category: </label>
          <select className="p-2 border rounded" {...register("category")}>
            <option value="">Choose one</option>
            <option value="1">A</option>
            <option value="2">B</option>
            <option value="3">C</option>
            <option value="4">D</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold">Gender: </label>
          <div className="flex gap-2 justify-start">
            <input
              type="radio"
              className="border p-1 rounded"
              value="Male"
              {...register("gender")}
            />
            <label>Male</label>
          </div>

          <div className="flex gap-2 justify-start">
            <input
              type="radio"
              className="border p-1 rounded"
              value="Female"
              {...register("gender")}
            />
            <label>Female</label>
          </div>
        </div>

        <button type="submit" className="bg-primary p-2 rounded">
          Submit
        </button>
      </form>
      <div className="text-center text-xl mt-5">
        <p>Result:</p>
        <pre>{JSON.stringify(result, undefined, 2)}</pre>
      </div>
    </>
  );
}
