import { z } from "zod";

export const formSchema = z.object({
  "text-1": z.string().min(1, "Text input is required."),
  "select-1": z.string().min(1, "Please select an option."),
  "radio-1": z.string().min(1, "Please choose an option."),
});
