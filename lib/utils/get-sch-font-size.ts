import type { Matrix } from "transformation-matrix"
import { applyToPoint } from "transformation-matrix"

export const getSchFontSize = (
  transform: Matrix,
  textType:
    | "pin_number"
    | "reference_designator"
    | "manufacturer_number"
    | "net_label",
) => {
  return Math.abs(transform.a) * (textType === "pin_number" ? 0.15 : 0.18)
}
