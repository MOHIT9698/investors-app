import { z } from "zod";

export const selectTradeSchema = z.object({
  trade_type: z
    .string()
    .nonempty({ message: "Type is required" }),
});





export const createNewTradeSchema = z.object({
  stock_id: z
    .number({ invalid_type_error: "Stock is required" }),

  trade_type: z
    .string()
    .nonempty({ message: "Type is required" }),

  stop_loss: z.preprocess(
    (val) => val === "" || val === undefined || val === null ? undefined : Number(val),
    z
      .number({ invalid_type_error: "Stop-loss must be a number" })
      .gt(0, { message: "Stop-loss must be greater than 0" })
      .lte(1000, { message: "Stop-loss cannot be greater than 1000" })
      .optional()
  ),

  price_target: z.preprocess(
    (val) => val === "" || val === undefined || val === null ? undefined : Number(val),
    z
      .number({ invalid_type_error: "Price-target must be a number" })
      .gt(1000, { message: "Price-target must be greater than 1000" })
      .optional()
  ),

  risk_level: z
    .string()
    .optional(),
    
  hold_time: z
    .string()
    .optional(),
});