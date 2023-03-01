import { useState, useCallback } from "react";
import { Theme } from "src/types";
import { useForm } from "react-hook-form";
import * as yup from "yup";

interface PropsType {
  theme: Theme;
  errorMessage: string;
  successMessage: string;
  className?: string;
}

type FormValues = {
  name: string;
  email: string;
  phone: string;
  club: string;
  age: string;
  length: string;
  league: string;
  level: string;
  role: string;
  position: string;
  positionTwo: string;
  footed: string;
  school: string;
  grade: string;
};

//TODO: ADD TYPES
const useYupValidationResolver = (validationSchema: any) =>
  useCallback(
    async (data: any) => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false,
        });

        return {
          values,
          errors: {},
        };
      } catch (errors) {
        const err = errors as yup.ValidationError;
        return {
          values: {},
          errors: err.inner.reduce(
            (allErrors: any, currentError: any) => ({
              ...allErrors,
              [currentError.path]: {
                type: currentError.type ?? "validation",
                message: currentError.message,
              },
            }),
            {}
          ),
        };
      }
    },
    [validationSchema]
  );

const validationSchema = yup.object({
  name: yup.string().required("Required"),
  email: yup.string().required("Required"),
  phone: yup.string(),
  club: yup.string().required("Required"),
  age: yup.string().required("Required"),
  length: yup.string().required("Required"),
  league: yup.string(),
  level: yup.string().required("Required").notOneOf(["DEFAULT"]),
  role: yup.string().required("Required").notOneOf(["DEFAULT"]),
  position: yup.string().required("Required").notOneOf(["DEFAULT"]),
  positionTwo: yup.string(), 
  footed: yup.string().required("Required").notOneOf(["DEFAULT"]),
  school: yup.string().required("Required"),
  grade: yup.string().required("Required"),
});

export default function ContactForm(props: PropsType) {
  const styleInput =
    props.theme === "primary"
      ? "border-primary-border focus:border-primary-text"
      : "border-secondary-border focus:border-secondary-text";
  const styleBg = props.theme === "primary" ? "bg-primary-bg" : "bg-secondary-bg";
  const styleBtn = props.theme === "primary" ? "btn-small-primary" : "btn-small-secondary";
  const styleBtnDisabled =
    props.theme === "primary"
      ? "btn-small-disabled-primary cursor-wait"
      : "btn-small-disabled-secondary cursor-wait";

  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const resolver = useYupValidationResolver(validationSchema);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: any) => {
    setLoading(true);

    const resp = await fetch("api/mail", {
      method: "post",
      body: JSON.stringify(data),
    });

    if (resp.status === 200) {
      setShowSuccessMessage(true);
    } else {
      setShowErrorMessage(true);
    }
    setLoading(false);
  };

  return (
    <div className={`${props.className ? props.className : ""}`}>
      {showSuccessMessage ? (
        <div className="p-5">
          <h3 className="h3 text-center">The message went through successfully!</h3>
          <p className="body16 mt-6 text-center">{props.successMessage}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col">
            <label htmlFor="name" className="uppercase font-bold">
              Name*
            </label>
            <input
              required
              type="text"
              id="name"
              className={`border rounded-md p-2 mt-2 focus:outline-none ${styleInput} ${styleBg} `}
              {...register("name", { required: true })}
            />
            {errors?.name && (
              <span className="text-fixed-error text-sm">{errors.name.message}</span>
            )}
          </div>

          <div className="flex flex-col mt-5">
            <label htmlFor="email" className="uppercase font-bold">
              Email*
            </label>
            <input
              type="email"
              id="email"
              className={`border rounded-md p-2 mt-2 focus:outline-none ${styleInput} ${styleBg}`}
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-fixed-error text-sm">This field is required</span>
            )}
          </div>

          <div className="flex flex-col mt-5">
            <label htmlFor="phone" className="uppercase font-bold">
              Telefonnummer
            </label>
            <input
              type="tel"
              id="phone"
              className={`border rounded-md p-2 mt-2 focus:outline-none ${styleInput} ${styleBg}`}
              {...register("phone")}
            />
          </div>

          <div className="flex flex-col mt-5">
            <label htmlFor="age" className="uppercase font-bold">
              År du är född?*
            </label>
            <input
              type="numeric"
              id="age"
              className={`border rounded-md p-2 mt-2 focus:outline-none ${styleInput} ${styleBg}`}
              {...register("age", { required: true })}
            />
            {errors.age && (
              <span className="text-fixed-error text-sm">This field is required</span>
            )}
          </div>

          <div className="flex flex-col mt-5">
            <label htmlFor="length" className="uppercase font-bold">
              Hur lång är du?*
            </label>
            <input
              type="numeric"
              id="length"
              className={`border rounded-md p-2 mt-2 focus:outline-none ${styleInput} ${styleBg}`}
              {...register("length", { required: true })}
            />
            {errors.length && (
              <span className="text-fixed-error text-sm">This field is required</span>
            )}
          </div>

          <div className="flex flex-col mt-5">
            <label htmlFor="club" className="uppercase font-bold">
              Vilken klubb tillhör du?*
            </label>
            <input
              type="text"
              id="club"
              className={`border rounded-md p-2 mt-2 focus:outline-none ${styleInput} ${styleBg}`}
              {...register("club", { required: true })}
            />
            {errors.club && (
              <span className="text-fixed-error text-sm">This field is required</span>
            )}
          </div>

          <div className="flex flex-col mt-5">
            <label htmlFor="league" className="uppercase font-bold">
              Vilken serie spelar du i? 
            </label>
            <input
              type="text"
              id="league"
              className={`border rounded-md p-2 mt-2 focus:outline-none ${styleInput} ${styleBg}`}
              {...register("league")}
            />
          </div>

          <div className="flex flex-col mt-5">
            <label htmlFor="level" className="uppercase font-bold">
              Vilken lag i klubben spelar du för?* 
            </label>
            <select defaultValue={"DEFAULT"} {...register("level", { required: true })}
            className={`border rounded-md p-2 py-2.5 mt-2 focus:outline-none ${styleInput} ${styleBg}`}
            >
              <option value="DEFAULT" disabled> -- Välj ett alternativ -- </option>
              <option value="seniorlag">Seniorlag</option>
              <option value="reservlaget">Reservlaget</option>
              <option value="U21">U21</option>
              <option value="U19">U19</option>
              <option value="U17">U17</option>
              <option value="other">Annat</option>
            </select>
            {errors.level && (
              <span className="text-fixed-error text-sm">This field is required</span>
            )}
          </div>

          <div className="flex flex-col mt-5">
            <label htmlFor="role" className="uppercase font-bold">
              Vad har du för roll i laget?* 
            </label>
            <select defaultValue={'DEFAULT'} {...register("role", { required: true })} className={`border rounded-md p-2 py-2.5 mt-2 focus:outline-none ${styleInput} ${styleBg}`}>
              <option disabled value="DEFAULT"> -- Välj ett alternativ -- </option>
              <option value="startspelare">Startspelare</option>
              <option value="inhoppare">Inhoppare</option>
              <option value="reserv">Reserv</option>
            </select>
            {errors.role && (
              <span className="text-fixed-error text-sm">This field is required</span>
            )}
          </div>

          <div className="flex flex-col mt-5">
            <label htmlFor="position" className="uppercase font-bold">
              Vad är din första position?*
            </label>
            <select defaultValue={'DEFAULT'} {...register("position", { required: true })} className={`border rounded-md p-2 py-2.5 mt-2 focus:outline-none ${styleInput} ${styleBg}`}>
              <option disabled value="DEFAULT"> -- Välj ett alternativ -- </option>
              <option value="målvakt">Målvakt</option>
              <option value="högerback">Högerback</option>
              <option value="vänsterback">Vänsterback</option>
              <option value="mittback">Mittback</option>
              <option value="högermittfältare">Högermittfältare</option>
              <option value="vänstermittfältare">Vänstermittfältare</option>
              <option value="central mittfältare">Central mittfältare</option>
              <option value="forward">Forward</option>
            </select>
            {errors.position && (
              <span className="text-fixed-error text-sm">This field is required</span>
            )}
          </div>

          <div className="flex flex-col mt-5">
            <label htmlFor="positionTwo" className="uppercase font-bold">
              Vad är din andra position?
            </label>
            <select defaultValue={'DEFAULT'} {...register("positionTwo")} className={`border rounded-md p-2 py-2.5 mt-2 focus:outline-none ${styleInput} ${styleBg}`}>
              <option disabled value="DEFAULT"> -- Välj ett alternativ -- </option>
              <option value="målvakt">Målvakt</option>
              <option value="högerback">Högerback</option>
              <option value="vänsterback">Vänsterback</option>
              <option value="mittback">Mittback</option>
              <option value="högermittfältare">Högermittfältare</option>
              <option value="vänstermittfältare">Vänstermittfältare</option>
              <option value="central mittfältare">Central mittfältare</option>
              <option value="forward">Forward</option>
            </select>
          </div>

          <div className="flex flex-col mt-5">
            <label htmlFor="footed" className="uppercase font-bold">
              Höger- eller vänsterfotad?* 
            </label>
            <select defaultValue={'DEFAULT'} {...register("footed")} className={`border rounded-md p-2 py-2.5 mt-2 focus:outline-none ${styleInput} ${styleBg}`}>
              <option disabled value="DEFAULT"> -- Välj ett alternativ -- </option>
              <option value="höger">Höger</option>
              <option value="vänster">vänster</option>
            </select>
            {errors.footed && (
              <span className="text-fixed-error text-sm">This field is required</span>
            )}
          </div>

          <div className="flex flex-col mt-5">
            <label htmlFor="school" className="uppercase font-bold">
              Vad pluggar/pluggade du för linje i gymnasiet?* 
            </label>
            <input
              type="text"
              id="school"
              className={`border rounded-md p-2 mt-2 focus:outline-none ${styleInput} ${styleBg}`}
              {...register("school", { required: true })}
            />
            {errors.school && (
              <span className="text-fixed-error text-sm">This field is required</span>
            )}
          </div>

          <div className="flex flex-col mt-5">
            <label htmlFor="grade" className="uppercase font-bold">
              Vad för snitt har du på ett ungefär i gymnasiet?*
            </label>
            <input
              type="text"
              id="grade"
              className={`border rounded-md p-2 mt-2 focus:outline-none ${styleInput} ${styleBg}`}
              {...register("grade", { required: true })}
            />
            {errors.grade && (
              <span className="text-fixed-error text-sm">This field is required</span>
            )}
          </div>

          <div className="flex flex-col md:flex-row md:items-center mt-6">
            <div className="">
              <button
                type="submit"
                className={`${loading ? styleBtnDisabled : styleBtn}`}
                disabled={loading}
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </div>
            {showErrorMessage && (
              <div className="mt-6 md:mt-0 md:ml-8 md:flex-1 bg-transparent-dark rounded-xl p-2 px-4">
                <span className="text-fixed-error text-sm">{props.errorMessage}</span>
              </div>
            )}
          </div>
        </form>
      )}
    </div>
  );
}
