import { cn } from "@root/src/lib/utils";
import { useFormContext, Controller } from "react-hook-form";

export function ControlledTextField({
  name,
  label,
  type = "text",
  textInputCss,
  onBlurHandler = () => {},
  startEndadornment,
  outerDivStyle,
  onChange = () => {},
  endEndadornment,
  ref,
  errorStyle,
  showError = true,
  required,
  labelCss,
  ...other
}: any) {
  const { control, trigger } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className=" w-full items-center space-y-2 my-2">
          {label && (
            <label
              className={`text-f20 font-bold ${
                !!error ? "text-error" : ""
              } pb-1 ${labelCss}`}
              htmlFor={name}
            >
              {label}
              {required && <span className="ml-1 text-red-600">*</span>}
            </label>
          )}
          <div ref={ref} className={cn(`relative ${outerDivStyle}`)}>
            {(type === "number" || type === "text" || type === "password") && (
              <input
                className={cn(
                  `${
                    startEndadornment ? "pl-8" : "pl:2"
                  } border bg-transparent rounded-[12px]  md:min-w-[385px]  focus-visible:outline-none text-f16 py-[16px] px-[20px] font-normal ${
                    !!error
                      ? "focus:border-red-500 border-2"
                      : "focus:border-primary border-customGray"
                  } ${textInputCss}`
                )}
                type={type}
                {...field}
                {...other}
                onBlur={(e) => {
                  trigger(name);
                  onBlurHandler();
                }}
                onChange={(e) => {
                  field.onChange(e);
                  trigger(name);
                  onChange(e);
                }}
              />
            )}

            {type === "textarea" && (
              <textarea
                className={cn(
                  `${
                    startEndadornment ? "pl-8" : "pl:2"
                  } border bg-transparent rounded-[12px] md:min-w-[385px]  focus-visible:outline-none text-f16 py-[16px] px-[20px] font-normal ${
                    !!error
                      ? "focus:border-red-500 border-2"
                      : "focus:border-primary border-customGray"
                  } ${textInputCss}`
                )}
                type={type}
                {...field}
                {...other}
                onBlur={(e) => {
                  trigger(name);
                  onBlurHandler();
                }}
                onChange={(e) => {
                  field.onChange(e);
                  trigger(name);
                  onChange(e);
                }}
              />
            )}

            {startEndadornment && (
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                {startEndadornment}
              </div>
            )}
            {endEndadornment && (
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                {endEndadornment}
              </div>
            )}
          </div>
          {!!error && showError && (
            <h3 className={"text-f12 text-red-500 bg-white p-2 rounded-md"}>
              {error?.message}
            </h3>
          )}
        </div>
      )}
    />
  );
}
