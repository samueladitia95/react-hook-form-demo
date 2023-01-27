import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    firstName: yup.string().required('First Name is Required'),
    lastName: yup.string().required(),
    birthDate: yup.string().required(),
    category: yup.string().required(),
    gender: yup.string().nullable(),
  })
  .required();

export default function Component4() {
  const [result, setResult] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

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
            className={`border p-1 rounded w-full ${
              errors.firstName?.message
                ? "border-red-500 focus:outline-red-500"
                : ""
            }`}
            placeholder="First Name"
            {...register("firstName")}
          />
          <label className="text-red-500">{errors.firstName?.message}</label>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold">Last Name: </label>
          <input
            type="text"
            className={`border p-1 rounded w-full ${
              errors.lastName?.message
                ? "border-red-500 focus:outline-red-500"
                : ""
            }`}
            placeholder="Last Name"
            {...register("lastName")}
          />
          <label className="text-red-500">{errors.lastName?.message}</label>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold">Height: </label>
          <input
            type="number"
            className={`border p-1 rounded w-full ${
              errors.height?.message
                ? "border-red-500 focus:outline-red-500"
                : ""
            }`}
            placeholder="Height"
            {...register("height", {
              valueAsNumber: true,
            })}
          />
          <label className="text-red-500">{errors.height?.message}</label>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold">Birth Date: </label>
          <input
            type="date"
            className={`border p-1 rounded w-full ${
              errors.birthDate?.message
                ? "border-red-500 focus:outline-red-500"
                : ""
            }`}
            {...register("birthDate")}
            max={new Date().toLocaleDateString("en-CA")}
          />
          <label className="text-red-500">{errors.birthDate?.message}</label>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold">Category: </label>
          <select
            {...register("category")}
            className={`border p-2 rounded w-full ${
              errors.category?.message
                ? "border-red-500 focus:outline-red-500"
                : ""
            }`}
          >
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

      <div className="text-center text-xl mt-5 text-red-500">
        <p>Error:</p>
        {console.log(errors)}
        <p>{errors?.firstName?.message}</p>
        <p>{errors?.lastName?.message}</p>
        <p>{errors?.height?.message}</p>
        <p>{errors?.birthDate?.message}</p>
        <p>{errors?.category?.message}</p>
        <p>{errors?.gender?.message}</p>
      </div>
    </>
  );
}
