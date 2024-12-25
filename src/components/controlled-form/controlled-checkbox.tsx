// form
import { CustomCheckBox } from "@components/checkbox";
import { useFormContext, Controller } from "react-hook-form";

// ----------------------------------------------------------------------

export function ControlledCheckbox({
  name,
  checkboxStyle,
  checkBoxLabel,
  styleLabel,
  ...other
}: any) {
  const { control } = useFormContext();

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <div className="flex space-x-2 items-center">
            <CustomCheckBox
              id="terms1"
              className={`${checkboxStyle}`}
              checked={field.value}
              onCheckedChange={field.onChange}
              {...field}
              {...other}
            />
            {checkBoxLabel && (
              <div className={` font-normal ${styleLabel}`}>
                {checkBoxLabel}
              </div>
            )}
          </div>
        )}
      />
    </>
  );
}

// ----------------------------------------------------------------------
