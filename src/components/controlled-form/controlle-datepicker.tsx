"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Controller, useForm, useFormContext } from "react-hook-form";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";

import { Button } from "@components/button";
import { Popover, PopoverContent, PopoverTrigger } from "@components/popover";
import { Calendar } from "@components/calender";

export function ControlledDatePicker({
  name,
  labelCss,
  label,
  required,
  textInputCss,
  showError = true,
}: any) {
  const { control } = useFormContext();

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
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  ` border bg-transparent rounded-[12px]  md:min-w-[385px]  focus-visible:outline-none text-f16 py-[16px] px-[20px] font-normal ${
                    !!error
                      ? "focus:border-red-500 border-2"
                      : "focus:border-primary border-customGray"
                  } ${textInputCss} `
                )}
              >
                {field.value ? (
                  format(field.value, "PPP")
                ) : (
                  <span>Pick a date</span>
                )}
                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                disabled={(date: any) =>
                  date > new Date() || date < new Date("1900-01-01")
                }
              />
            </PopoverContent>
          </Popover>
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
