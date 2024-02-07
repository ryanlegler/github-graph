import React from "react";
import { FormField, FormItem } from "@/components/ui/form";
import { Label } from "@/components/ui/label";

// types
import { SliderControlProps } from "./types";
import { Slider } from "@/components/ui/slider";

function SliderControl({ formKey, form, max, min, step = 1 }: SliderControlProps) {
    return (
        <FormField
            control={form.control}
            name={formKey}
            render={({ field }) => (
                <div className="flex flex-col gap-2">
                    <Label htmlFor={formKey}>{formKey}</Label>
                    <Slider
                        className="w-full"
                        id={formKey}
                        defaultValue={[field.value]}
                        max={max}
                        min={min}
                        step={step}
                        onValueChange={(values) => field.onChange(values[0])}
                    />
                </div>
            )}
        />
    );
}

export { SliderControl };