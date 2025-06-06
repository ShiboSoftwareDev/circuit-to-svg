import { test, expect } from "bun:test"
import { convertCircuitJsonToPcbSvg } from "lib"

test("silkscreen text", () => {
  const top_left_bottom_right = convertCircuitJsonToPcbSvg([
    {
      type: "pcb_board",
      width: 12,
      height: 12,
      center: { x: 0, y: 0 },
      num_layers: 2,
      pcb_board_id: "pcb_board_0",
      thickness: 1.2,
      material: "fr1",
    },
    {
      type: "pcb_silkscreen_text",
      layer: "top",
      pcb_silkscreen_text_id: "pcb_silkscreen_text_top_left",
      font: "tscircuit2024",
      font_size: 1,
      pcb_component_id: "pcb_generic_component_0",
      anchor_position: { x: 0, y: 0 },
      anchor_alignment: "top_left",
      text: "top_left",
    },
    {
      type: "pcb_silkscreen_text",
      layer: "top",
      pcb_silkscreen_text_id: "pcb_silkscreen_text_bottom_right",
      font: "tscircuit2024",
      font_size: 1,
      pcb_component_id: "pcb_generic_component_0",
      anchor_position: { x: 0, y: 0 },
      anchor_alignment: "bottom_right",
      text: "bottom_right",
    },
    {
      type: "pcb_silkscreen_text",
      layer: "bottom",
      pcb_silkscreen_text_id: "pcb_silkscreen_text_center_0",
      font: "tscircuit2024",
      font_size: 1,
      pcb_component_id: "pcb_generic_component_0",
      anchor_position: { x: 0, y: 0 },
      anchor_alignment: "center",
      text: "center",
    },
  ])
  const top_right_bottom_left = convertCircuitJsonToPcbSvg([
    {
      type: "pcb_board",
      width: 12,
      height: 12,
      center: { x: 0, y: 0 },
      num_layers: 2,
      pcb_board_id: "pcb_board_0",
      thickness: 1.2,
      material: "fr1",
    },
    {
      type: "pcb_silkscreen_text",
      layer: "top",
      pcb_silkscreen_text_id: "pcb_silkscreen_text_top_right",
      font: "tscircuit2024",
      font_size: 1,
      pcb_component_id: "pcb_generic_component_0",
      anchor_position: { x: 0, y: 0 },
      anchor_alignment: "top_right",
      text: "top_right",
    },
    {
      type: "pcb_silkscreen_text",
      layer: "top",
      pcb_silkscreen_text_id: "pcb_silkscreen_text_bottom_left",
      font: "tscircuit2024",
      font_size: 1,
      pcb_component_id: "pcb_generic_component_0",
      anchor_position: { x: 0, y: 0 },
      anchor_alignment: "bottom_left",
      text: "bottom_left",
    },
    {
      type: "pcb_silkscreen_text",
      layer: "bottom",
      pcb_silkscreen_text_id: "pcb_silkscreen_text_center_1",
      font: "tscircuit2024",
      font_size: 1,
      pcb_component_id: "pcb_generic_component_0",
      anchor_position: { x: 0, y: 0 },
      anchor_alignment: "center",
      text: "center",
    },
  ])
  const center_right_center_left = convertCircuitJsonToPcbSvg([
    {
      type: "pcb_board",
      width: 12,
      height: 12,
      center: { x: 0, y: 0 },
      num_layers: 2,
      pcb_board_id: "pcb_board_0",
      thickness: 1.2,
      material: "fr1",
    },
    {
      type: "pcb_silkscreen_text",
      layer: "top",
      pcb_silkscreen_text_id: "pcb_silkscreen_text_center_right",
      font: "tscircuit2024",
      font_size: 1,
      pcb_component_id: "pcb_generic_component_0",
      anchor_position: { x: 0, y: 0 },
      anchor_alignment: "center_right",
      text: "center_right",
    },
    {
      type: "pcb_silkscreen_text",
      layer: "top",
      pcb_silkscreen_text_id: "pcb_silkscreen_text_center_left",
      font: "tscircuit2024",
      font_size: 1,
      pcb_component_id: "pcb_generic_component_0",
      anchor_position: { x: 0, y: 0 },
      anchor_alignment: "center_left",
      text: "center_left",
    },
    {
      type: "pcb_silkscreen_text",
      layer: "bottom",
      pcb_silkscreen_text_id: "pcb_silkscreen_text_center_2",
      font: "tscircuit2024",
      font_size: 1,
      pcb_component_id: "pcb_generic_component_0",
      anchor_position: { x: 0, y: 0 },
      anchor_alignment: "center",
      text: "center",
    },
  ])
  const bottom_center_top_center = convertCircuitJsonToPcbSvg([
    {
      type: "pcb_board",
      width: 12,
      height: 12,
      center: { x: 0, y: 0 },
      num_layers: 2,
      pcb_board_id: "pcb_board_0",
      thickness: 1.2,
      material: "fr1",
    },
    {
      type: "pcb_silkscreen_text",
      layer: "top",
      pcb_silkscreen_text_id: "pcb_silkscreen_text_bottom_center",
      font: "tscircuit2024",
      font_size: 1,
      pcb_component_id: "pcb_generic_component_0",
      anchor_position: { x: 0, y: 0 },
      anchor_alignment: "bottom_center",
      text: "bottom_center",
    },
    {
      type: "pcb_silkscreen_text",
      layer: "top",
      pcb_silkscreen_text_id: "pcb_silkscreen_text_top_center",
      font: "tscircuit2024",
      font_size: 1,
      pcb_component_id: "pcb_generic_component_0",
      anchor_position: { x: 0, y: 0 },
      anchor_alignment: "top_center",
      text: "top_center",
    },
    {
      type: "pcb_silkscreen_text",
      layer: "bottom",
      pcb_silkscreen_text_id: "pcb_silkscreen_text_center_3",
      font: "tscircuit2024",
      font_size: 1,
      pcb_component_id: "pcb_generic_component_0",
      anchor_position: { x: 0, y: 0 },
      anchor_alignment: "center",
      text: "center",
    },
  ])

  expect(bottom_center_top_center).toMatchSvgSnapshot(
    import.meta.path,
    "silkscreen-text-anchor-alignment" + "_bottom_center_top_center",
  )
  expect(center_right_center_left).toMatchSvgSnapshot(
    import.meta.path,
    "silkscreen-text-anchor-alignment" + "_center_right_center_left",
  )
  expect(top_left_bottom_right).toMatchSvgSnapshot(
    import.meta.path,
    "silkscreen-text-anchor-alignment" + "_top_left_bottom_right",
  )
  expect(top_right_bottom_left).toMatchSvgSnapshot(
    import.meta.path,
    "silkscreen-text-anchor-alignment" + "_top_right_bottom_left",
  )
})
