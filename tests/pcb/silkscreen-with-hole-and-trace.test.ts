import { expect, test } from "bun:test"
import { convertCircuitJsonToPcbSvg } from "lib"

const pcbSoup: any[] = [
  {
    name: "pin1",
    type: "source_port",
    pin_number: 1,
    port_hints: ["pin1", "1", "PWR"],
    source_port_id: "source_port_0",
    source_component_id: "source_component_0",
  },
  {
    name: "pin2",
    type: "source_port",
    pin_number: 2,
    port_hints: ["pin2", "2"],
    source_port_id: "source_port_1",
    source_component_id: "source_component_0",
  },
  {
    name: "pin3",
    type: "source_port",
    pin_number: 3,
    port_hints: ["pin3", "3"],
    source_port_id: "source_port_2",
    source_component_id: "source_component_0",
  },
  {
    name: "pin4",
    type: "source_port",
    pin_number: 4,
    port_hints: ["pin4", "4"],
    source_port_id: "source_port_3",
    source_component_id: "source_component_0",
  },
  {
    name: "pin5",
    type: "source_port",
    pin_number: 5,
    port_hints: ["pin5", "5"],
    source_port_id: "source_port_4",
    source_component_id: "source_component_0",
  },
  {
    name: "pin6",
    type: "source_port",
    pin_number: 6,
    port_hints: ["pin6", "6"],
    source_port_id: "source_port_5",
    source_component_id: "source_component_0",
  },
  {
    name: "pin7",
    type: "source_port",
    pin_number: 7,
    port_hints: ["pin7", "7"],
    source_port_id: "source_port_6",
    source_component_id: "source_component_0",
  },
  {
    name: "pin8",
    type: "source_port",
    pin_number: 8,
    port_hints: ["pin8", "8", "GND"],
    source_port_id: "source_port_7",
    source_component_id: "source_component_0",
  },
  {
    name: "U1",
    type: "source_component",
    ftype: "simple_chip",
    source_component_id: "source_component_0",
  },
  {
    name: "pin1",
    type: "source_port",
    pin_number: 1,
    port_hints: ["-", "left", "pin1", "1"],
    source_port_id: "source_port_8",
    source_component_id: "source_component_1",
  },
  {
    name: "pin2",
    type: "source_port",
    pin_number: 2,
    port_hints: ["+", "right", "pin2", "2"],
    source_port_id: "source_port_9",
    source_component_id: "source_component_1",
  },
  {
    name: "R1",
    type: "source_component",
    ftype: "simple_resistor",
    resistance: 100000,
    source_component_id: "source_component_1",
  },
  {
    name: "pin1",
    type: "source_port",
    pin_number: 1,
    port_hints: ["left", "pin1", "1"],
    source_port_id: "source_port_10",
    source_component_id: "source_component_2",
  },
  {
    name: "pin2",
    type: "source_port",
    pin_number: 2,
    port_hints: ["right", "pin2", "2"],
    source_port_id: "source_port_11",
    source_component_id: "source_component_2",
  },
  {
    name: "C1",
    type: "source_component",
    ftype: "simple_capacitor",
    source_component_id: "source_component_2",
  },
  {
    name: "pin1",
    type: "source_port",
    pin_number: 1,
    port_hints: ["pin1", "1"],
    source_port_id: "source_port_12",
    source_component_id: "source_component_3",
  },
  {
    name: "pin2",
    type: "source_port",
    pin_number: 2,
    port_hints: ["pin2", "2"],
    source_port_id: "source_port_13",
    source_component_id: "source_component_3",
  },
  {
    name: "pin3",
    type: "source_port",
    pin_number: 3,
    port_hints: ["pin3", "3"],
    source_port_id: "source_port_14",
    source_component_id: "source_component_3",
  },
  {
    name: "pin4",
    type: "source_port",
    pin_number: 4,
    port_hints: ["pin4", "4"],
    source_port_id: "source_port_15",
    source_component_id: "source_component_3",
  },
  {
    name: "J1",
    type: "source_component",
    ftype: "simple_chip",
    source_component_id: "source_component_3",
  },
  {
    type: "source_trace",
    source_trace_id: "source_trace_0",
    connected_source_net_ids: [],
    connected_source_port_ids: ["source_port_12", "source_port_0"],
  },
  {
    type: "source_trace",
    source_trace_id: "source_trace_1",
    connected_source_net_ids: [],
    connected_source_port_ids: ["source_port_13", "source_port_1"],
  },
  {
    type: "source_trace",
    source_trace_id: "source_trace_2",
    connected_source_net_ids: [],
    connected_source_port_ids: ["source_port_14", "source_port_2"],
  },
  {
    type: "source_trace",
    source_trace_id: "source_trace_3",
    connected_source_net_ids: [],
    connected_source_port_ids: ["source_port_15", "source_port_7"],
  },
  {
    size: {
      width: 0.4,
      height: 1,
    },
    type: "schematic_component",
    center: {
      x: 0,
      y: 0,
    },
    rotation: 0,
    pin_spacing: 0.2,
    port_labels: {
      pin1: "PWR",
      pin8: "GND",
    },
    source_component_id: "source_component_0",
    schematic_component_id: "schematic_component_0",
  },
  {
    size: {
      width: 1,
      height: 0.55,
    },
    type: "schematic_component",
    center: {
      x: 0,
      y: 0,
    },
    rotation: 0,
    symbol_name: "boxresistor_right",
    source_component_id: "source_component_1",
    schematic_component_id: "schematic_component_1",
  },
  {
    size: {
      width: 0.4,
      height: 1,
    },
    type: "schematic_component",
    center: {
      x: 0,
      y: 0,
    },
    rotation: 0,
    pin_spacing: 0.2,
    source_component_id: "source_component_3",
    schematic_component_id: "schematic_component_2",
  },
  {
    type: "schematic_port",
    center: {
      x: 0,
      y: 0,
    },
    source_port_id: "source_port_0",
    facing_direction: "up",
    schematic_port_id: "schematic_port_0",
    schematic_component_id: "schematic_component_0",
  },
  {
    type: "schematic_port",
    center: {
      x: 0,
      y: 0,
    },
    source_port_id: "source_port_1",
    facing_direction: "up",
    schematic_port_id: "schematic_port_1",
    schematic_component_id: "schematic_component_0",
  },
  {
    type: "schematic_port",
    center: {
      x: 0,
      y: 0,
    },
    source_port_id: "source_port_2",
    facing_direction: "up",
    schematic_port_id: "schematic_port_2",
    schematic_component_id: "schematic_component_0",
  },
  {
    type: "schematic_port",
    center: {
      x: 0,
      y: 0,
    },
    source_port_id: "source_port_3",
    facing_direction: "up",
    schematic_port_id: "schematic_port_3",
    schematic_component_id: "schematic_component_0",
  },
  {
    type: "schematic_port",
    center: {
      x: 0,
      y: 0,
    },
    source_port_id: "source_port_4",
    facing_direction: "up",
    schematic_port_id: "schematic_port_4",
    schematic_component_id: "schematic_component_0",
  },
  {
    type: "schematic_port",
    center: {
      x: 0,
      y: 0,
    },
    source_port_id: "source_port_5",
    facing_direction: "up",
    schematic_port_id: "schematic_port_5",
    schematic_component_id: "schematic_component_0",
  },
  {
    type: "schematic_port",
    center: {
      x: 0,
      y: 0,
    },
    source_port_id: "source_port_6",
    facing_direction: "up",
    schematic_port_id: "schematic_port_6",
    schematic_component_id: "schematic_component_0",
  },
  {
    type: "schematic_port",
    center: {
      x: 0,
      y: 0,
    },
    source_port_id: "source_port_7",
    facing_direction: "up",
    schematic_port_id: "schematic_port_7",
    schematic_component_id: "schematic_component_0",
  },
  {
    type: "schematic_port",
    center: {
      x: -0.5,
      y: 0,
    },
    source_port_id: "source_port_8",
    facing_direction: "left",
    schematic_port_id: "schematic_port_8",
    schematic_component_id: "schematic_component_1",
  },
  {
    type: "schematic_port",
    center: {
      x: 0.5,
      y: 0,
    },
    source_port_id: "source_port_9",
    facing_direction: "right",
    schematic_port_id: "schematic_port_9",
    schematic_component_id: "schematic_component_1",
  },
  {
    type: "schematic_port",
    center: {
      x: 0,
      y: 0,
    },
    source_port_id: "source_port_10",
    facing_direction: "up",
    schematic_port_id: "schematic_port_10",
    schematic_component_id: null,
  },
  {
    type: "schematic_port",
    center: {
      x: 0,
      y: 0,
    },
    source_port_id: "source_port_11",
    facing_direction: "up",
    schematic_port_id: "schematic_port_11",
    schematic_component_id: null,
  },
  {
    type: "schematic_port",
    center: {
      x: 0,
      y: 0,
    },
    source_port_id: "source_port_12",
    facing_direction: "up",
    schematic_port_id: "schematic_port_12",
    schematic_component_id: "schematic_component_2",
  },
  {
    type: "schematic_port",
    center: {
      x: 0,
      y: 0,
    },
    source_port_id: "source_port_13",
    facing_direction: "up",
    schematic_port_id: "schematic_port_13",
    schematic_component_id: "schematic_component_2",
  },
  {
    type: "schematic_port",
    center: {
      x: 0,
      y: 0,
    },
    source_port_id: "source_port_14",
    facing_direction: "up",
    schematic_port_id: "schematic_port_14",
    schematic_component_id: "schematic_component_2",
  },
  {
    type: "schematic_port",
    center: {
      x: 0,
      y: 0,
    },
    source_port_id: "source_port_15",
    facing_direction: "up",
    schematic_port_id: "schematic_port_15",
    schematic_component_id: "schematic_component_2",
  },
  {
    type: "schematic_trace",
    edges: [],
    source_trace_id: "source_trace_0",
    schematic_trace_id: "schematic_trace_0",
  },
  {
    type: "schematic_trace",
    edges: [],
    source_trace_id: "source_trace_1",
    schematic_trace_id: "schematic_trace_1",
  },
  {
    type: "schematic_trace",
    edges: [],
    source_trace_id: "source_trace_2",
    schematic_trace_id: "schematic_trace_2",
  },
  {
    type: "schematic_trace",
    edges: [],
    source_trace_id: "source_trace_3",
    schematic_trace_id: "schematic_trace_3",
  },
  {
    type: "pcb_component",
    layer: "top",
    width: 2,
    center: {
      x: 0,
      y: 0,
    },
    height: 3,
    rotation: 0,
    pcb_component_id: "pcb_component_0",
    source_component_id: "source_component_0",
  },
  {
    type: "pcb_component",
    layer: "top",
    width: 0,
    center: {
      x: 4,
      y: 0,
    },
    height: 0,
    rotation: 90,
    pcb_component_id: "pcb_component_1",
    source_component_id: "source_component_1",
  },
  {
    type: "pcb_component",
    layer: "top",
    width: 0,
    center: {
      x: -5,
      y: 0,
    },
    height: 0,
    rotation: 90,
    pcb_component_id: "pcb_component_2",
    source_component_id: "source_component_2",
  },
  {
    type: "pcb_component",
    layer: "top",
    width: 2,
    center: {
      x: 0,
      y: -4,
    },
    height: 3,
    rotation: 90,
    pcb_component_id: "pcb_component_3",
    source_component_id: "source_component_3",
  },
  {
    type: "pcb_board",
    width: 10,
    outline: [
      { x: -10, y: -10 },
      { x: 10, y: -10 },
      { x: 10, y: 10 },
      { x: 3, y: 3 },
      { x: -7, y: 3 },
      { x: -7, y: -7 },
    ],
    center: {
      x: 0,
      y: 0,
    },
    height: 10,
    pcb_board_id: "pcb_board_0",
  },
  {
    x: -2.15,
    y: 1.905,
    type: "pcb_port",
    layers: ["top"],
    pcb_port_id: "pcb_port_0",
    source_port_id: "source_port_0",
    pcb_component_id: "pcb_component_0",
  },
  {
    x: -2.15,
    y: 0.635,
    type: "pcb_port",
    layers: ["top"],
    pcb_port_id: "pcb_port_1",
    source_port_id: "source_port_1",
    pcb_component_id: "pcb_component_0",
  },
  {
    x: -2.15,
    y: -0.635,
    type: "pcb_port",
    layers: ["top"],
    pcb_port_id: "pcb_port_2",
    source_port_id: "source_port_2",
    pcb_component_id: "pcb_component_0",
  },
  {
    x: -2.15,
    y: -1.905,
    type: "pcb_port",
    layers: ["top"],
    pcb_port_id: "pcb_port_3",
    source_port_id: "source_port_3",
    pcb_component_id: "pcb_component_0",
  },
  {
    x: 2.15,
    y: -1.905,
    type: "pcb_port",
    layers: ["top"],
    pcb_port_id: "pcb_port_4",
    source_port_id: "source_port_4",
    pcb_component_id: "pcb_component_0",
  },
  {
    x: 2.15,
    y: -0.635,
    type: "pcb_port",
    layers: ["top"],
    pcb_port_id: "pcb_port_5",
    source_port_id: "source_port_5",
    pcb_component_id: "pcb_component_0",
  },
  {
    x: 2.15,
    y: 0.635,
    type: "pcb_port",
    layers: ["top"],
    pcb_port_id: "pcb_port_6",
    source_port_id: "source_port_6",
    pcb_component_id: "pcb_component_0",
  },
  {
    x: 2.15,
    y: 1.905,
    type: "pcb_port",
    layers: ["top"],
    pcb_port_id: "pcb_port_7",
    source_port_id: "source_port_7",
    pcb_component_id: "pcb_component_0",
  },
  {
    x: 3.5,
    y: 0,
    type: "pcb_port",
    layers: ["top"],
    pcb_port_id: "pcb_port_8",
    source_port_id: "source_port_8",
    pcb_component_id: "pcb_component_1",
  },
  {
    x: 4.5,
    y: 0,
    type: "pcb_port",
    layers: ["top"],
    pcb_port_id: "pcb_port_9",
    source_port_id: "source_port_9",
    pcb_component_id: "pcb_component_1",
  },
  {
    x: -5.85,
    y: 0,
    type: "pcb_port",
    layers: ["top"],
    pcb_port_id: "pcb_port_10",
    source_port_id: "source_port_10",
    pcb_component_id: "pcb_component_2",
  },
  {
    x: -4.15,
    y: 0,
    type: "pcb_port",
    layers: ["top"],
    pcb_port_id: "pcb_port_11",
    source_port_id: "source_port_11",
    pcb_component_id: "pcb_component_2",
  },
  {
    x: -3.8099998780800037,
    y: -4,
    type: "pcb_port",
    layers: ["top"],
    pcb_port_id: "pcb_port_12",
    source_port_id: "source_port_12",
    pcb_component_id: "pcb_component_3",
  },
  {
    x: -1.269999959360001,
    y: -4,
    type: "pcb_port",
    layers: ["top"],
    pcb_port_id: "pcb_port_13",
    source_port_id: "source_port_13",
    pcb_component_id: "pcb_component_3",
  },
  {
    x: 1.2699999593600015,
    y: -4,
    type: "pcb_port",
    layers: ["top"],
    pcb_port_id: "pcb_port_14",
    source_port_id: "source_port_14",
    pcb_component_id: "pcb_component_3",
  },
  {
    x: 3.8099998780800037,
    y: -4,
    type: "pcb_port",
    layers: ["top"],
    pcb_port_id: "pcb_port_15",
    source_port_id: "source_port_15",
    pcb_component_id: "pcb_component_3",
  },
  {
    x: -2.15,
    y: 1.905,
    type: "pcb_smtpad",
    layer: "top",
    shape: "rect",
    width: 1,
    height: 0.6,
    port_hints: ["1"],
    pcb_port_id: "pcb_port_0",
    pcb_smtpad_id: "pcb_smtpad_0",
    pcb_component_id: "pcb_component_0",
  },
  {
    x: -2.15,
    y: 0.635,
    type: "pcb_smtpad",
    layer: "top",
    shape: "rect",
    width: 1,
    height: 0.6,
    port_hints: ["2"],
    pcb_port_id: "pcb_port_1",
    pcb_smtpad_id: "pcb_smtpad_1",
    pcb_component_id: "pcb_component_0",
  },
  {
    x: -2.15,
    y: -0.635,
    type: "pcb_smtpad",
    layer: "top",
    shape: "rect",
    width: 1,
    height: 0.6,
    port_hints: ["3"],
    pcb_port_id: "pcb_port_2",
    pcb_smtpad_id: "pcb_smtpad_2",
    pcb_component_id: "pcb_component_0",
  },
  {
    x: -2.15,
    y: -1.905,
    type: "pcb_smtpad",
    layer: "top",
    shape: "rect",
    width: 1,
    height: 0.6,
    port_hints: ["4"],
    pcb_port_id: "pcb_port_3",
    pcb_smtpad_id: "pcb_smtpad_3",
    pcb_component_id: "pcb_component_0",
  },
  {
    x: 2.15,
    y: -1.905,
    type: "pcb_smtpad",
    layer: "top",
    shape: "rect",
    width: 1,
    height: 0.6,
    port_hints: ["5"],
    pcb_port_id: "pcb_port_4",
    pcb_smtpad_id: "pcb_smtpad_4",
    pcb_component_id: "pcb_component_0",
  },
  {
    x: 2.15,
    y: -0.635,
    type: "pcb_smtpad",
    layer: "top",
    shape: "rect",
    width: 1,
    height: 0.6,
    port_hints: ["6"],
    pcb_port_id: "pcb_port_5",
    pcb_smtpad_id: "pcb_smtpad_5",
    pcb_component_id: "pcb_component_0",
  },
  {
    x: 2.15,
    y: 0.635,
    type: "pcb_smtpad",
    layer: "top",
    shape: "rect",
    width: 1,
    height: 0.6,
    port_hints: ["7"],
    pcb_port_id: "pcb_port_6",
    pcb_smtpad_id: "pcb_smtpad_6",
    pcb_component_id: "pcb_component_0",
  },
  {
    x: 2.15,
    y: 1.905,
    type: "pcb_smtpad",
    layer: "top",
    shape: "rect",
    width: 1,
    height: 0.6,
    port_hints: ["8"],
    pcb_port_id: "pcb_port_7",
    pcb_smtpad_id: "pcb_smtpad_7",
    pcb_component_id: "pcb_component_0",
  },
  {
    type: "pcb_silkscreen_path",
    layer: "top",
    route: [
      {
        x: -1.5499999999999998,
        y: -2.205,
      },
      {
        x: -1.5499999999999998,
        y: 2.205,
      },
      {
        x: -0.5166666666666666,
        y: 2.205,
      },
      {
        x: -0.47733775846416476,
        y: 2.0072802266113703,
      },
      {
        x: -0.3653385036130495,
        y: 1.8396614963869504,
      },
      {
        x: -0.19771977338862967,
        y: 1.7276622415358354,
      },
      {
        x: 3.1636708977973285e-17,
        y: 1.6883333333333335,
      },
      {
        x: 0.1977197733886297,
        y: 1.7276622415358354,
      },
      {
        x: 0.3653385036130496,
        y: 1.8396614963869506,
      },
      {
        x: 0.47733775846416476,
        y: 2.0072802266113703,
      },
      {
        x: 0.5166666666666666,
        y: 2.205,
      },
      {
        x: 1.5499999999999998,
        y: 2.205,
      },
      {
        x: 1.5499999999999998,
        y: -2.205,
      },
      {
        x: -1.5499999999999998,
        y: -2.205,
      },
    ],
    stroke_width: 0.1,
    pcb_component_id: "pcb_component_0",
    pcb_silkscreen_path_id: "pcb_silkscreen_path_0",
  },
  {
    x: 3.5,
    y: 0,
    type: "pcb_smtpad",
    layer: "top",
    shape: "rect",
    width: 0.6000000000000001,
    height: 0.6000000000000001,
    port_hints: ["1", "left"],
    pcb_port_id: "pcb_port_8",
    pcb_smtpad_id: "pcb_smtpad_8",
    pcb_component_id: "pcb_component_1",
  },
  {
    x: 4.5,
    y: 0,
    type: "pcb_smtpad",
    layer: "top",
    shape: "rect",
    width: 0.6000000000000001,
    height: 0.6000000000000001,
    port_hints: ["2", "right"],
    pcb_port_id: "pcb_port_9",
    pcb_smtpad_id: "pcb_smtpad_9",
    pcb_component_id: "pcb_component_1",
  },
  {
    x: -5.85,
    y: 0,
    type: "pcb_smtpad",
    layer: "top",
    shape: "rect",
    width: 1,
    height: 1,
    port_hints: ["1", "left"],
    pcb_port_id: "pcb_port_10",
    pcb_smtpad_id: "pcb_smtpad_10",
    pcb_component_id: "pcb_component_2",
  },
  {
    x: -4.15,
    y: 0,
    type: "pcb_smtpad",
    layer: "top",
    shape: "rect",
    width: 1,
    height: 1,
    port_hints: ["2", "right"],
    pcb_port_id: "pcb_port_11",
    pcb_smtpad_id: "pcb_smtpad_11",
    pcb_component_id: "pcb_component_2",
  },
  {
    x: -3.8099998780800037,
    y: -4,
    type: "pcb_plated_hole",
    shape: "circle",
    layers: ["top", "bottom"],
    port_hints: ["1"],
    pcb_port_id: "pcb_port_12",
    hole_diameter: 1,
    outer_diameter: 1.2,
    pcb_component_id: "pcb_component_3",
    pcb_plated_hole_id: "pcb_plated_hole_0",
  },
  {
    x: -1.269999959360001,
    y: -4,
    type: "pcb_plated_hole",
    shape: "circle",
    layers: ["top", "bottom"],
    port_hints: ["2"],
    pcb_port_id: "pcb_port_13",
    hole_diameter: 1,
    outer_diameter: 1.2,
    pcb_component_id: "pcb_component_3",
    pcb_plated_hole_id: "pcb_plated_hole_1",
  },
  {
    x: 1.2699999593600015,
    y: -4,
    type: "pcb_plated_hole",
    shape: "circle",
    layers: ["top", "bottom"],
    port_hints: ["3"],
    pcb_port_id: "pcb_port_14",
    hole_diameter: 1,
    outer_diameter: 1.2,
    pcb_component_id: "pcb_component_3",
    pcb_plated_hole_id: "pcb_plated_hole_2",
  },
  {
    x: 3.8099998780800037,
    y: -4,
    type: "pcb_plated_hole",
    shape: "circle",
    layers: ["top", "bottom"],
    port_hints: ["4"],
    pcb_port_id: "pcb_port_15",
    hole_diameter: 1,
    outer_diameter: 1.2,
    pcb_component_id: "pcb_component_3",
    pcb_plated_hole_id: "pcb_plated_hole_3",
  },
  {
    type: "pcb_trace",
    route: [
      {
        x: -3.8099998780800037,
        y: -4,
        layer: "top",
        width: 0.1,
        route_type: "wire",
      },
      {
        x: -3.8099998780800037,
        y: -0.6499999999999999,
        layer: "top",
        width: 0.1,
        route_type: "wire",
      },
      {
        x: -3.5000000000000004,
        y: -0.6499999999999999,
        layer: "top",
        width: 0.1,
        route_type: "wire",
      },
      {
        x: -3.5000000000000004,
        y: 1.9049999999999998,
        layer: "top",
        width: 0.1,
        route_type: "wire",
      },
      {
        x: -2.15,
        y: 1.9049999999999998,
        layer: "top",
        width: 0.1,
        route_type: "wire",
      },
    ],
    pcb_trace_id: "pcb_trace_for_source_trace_0",
  },
  {
    type: "pcb_trace",
    route: [
      {
        x: -1.269999959360001,
        y: -4,
        layer: "top",
        width: 0.1,
        route_type: "wire",
      },
      {
        x: -1.269999959360001,
        y: 0.6349999999999998,
        layer: "top",
        width: 0.1,
        route_type: "wire",
      },
      {
        x: -2.15,
        y: 0.6349999999999998,
        layer: "top",
        width: 0.1,
        route_type: "wire",
      },
    ],
    pcb_trace_id: "pcb_trace_for_source_trace_1",
  },
  {
    type: "pcb_trace",
    route: [
      {
        x: 1.2699999593600015,
        y: -4,
        layer: "top",
        width: 0.1,
        route_type: "wire",
      },
      {
        x: -0.5199999593600011,
        y: -4,
        layer: "top",
        width: 0.1,
        route_type: "wire",
      },
      {
        x: -0.5199999593600011,
        y: -4.75,
        layer: "top",
        width: 0.1,
        route_type: "wire",
      },
      {
        x: -2.15,
        y: -4.75,
        layer: "top",
        width: 0.1,
        route_type: "wire",
      },
      {
        x: -2.15,
        y: -2.355,
        layer: "top",
        width: 0.1,
        route_type: "wire",
      },
      {
        x: -1.5,
        y: -2.355,
        layer: "top",
        width: 0.1,
        route_type: "wire",
      },
      {
        x: -1.5,
        y: -0.635,
        layer: "top",
        width: 0.1,
        route_type: "wire",
      },
      {
        x: -2.15,
        y: -0.635,
        layer: "top",
        width: 0.1,
        route_type: "wire",
      },
    ],
    pcb_trace_id: "pcb_trace_for_source_trace_2",
  },
  {
    type: "pcb_trace",
    route: [
      {
        x: 3.8099998780800037,
        y: -4,
        layer: "top",
        width: 0.1,
        route_type: "wire",
      },
      {
        x: 3.8099998780800037,
        y: 1.9050000000000002,
        layer: "top",
        width: 0.1,
        route_type: "wire",
      },
      {
        x: 2.15,
        y: 1.9050000000000002,
        layer: "top",
        width: 0.1,
        route_type: "wire",
      },
    ],
    pcb_trace_id: "pcb_trace_for_source_trace_3",
  },
  {
    x: 6,
    y: 6,
    type: "pcb_plated_hole",
    shape: "circular_hole_with_rect_pad",
    layers: ["top", "bottom"],
    port_hints: ["1"],
    pcb_port_id: "pcb_port_100",
    hole_diameter: 1,
    rect_pad_width: 2,
    rect_pad_height: 2,
    pcb_component_id: "pcb_component_100",
    pcb_plated_hole_id: "pcb_plated_hole_100",
  },
  {
    type: "pcb_smtpad",
    layer: "top" as const,
    shape: "polygon",
    points: [
      { x: -4.1, y: 5.6 },
      { x: -3.8, y: 4.4 },
      { x: -6.2, y: 4.4 },
      { x: -5.9, y: 5.6 },
    ],
    pcb_smtpad_id: "test_polygon_pad_1",
  },
  {
    type: "pcb_smtpad",
    shape: "circle",
    layer: "top" as const,
    x: 3.3,
    y: 6,
    radius: 1.2,
    pcb_port_id: "pcb_port_04",
    pcb_smtpad_id: "pcb_smtpad_04",
    pcb_component_id: "pcb_component_04",
  },
  {
    x: -6.5,
    y: -6.5,
    type: "pcb_plated_hole",
    shape: "pill_hole_with_rect_pad",
    layers: ["top", "bottom"],
    port_hints: ["1"],
    pcb_port_id: "pcb_port_1001",
    hole_height: 2,
    hole_width: 4,
    rect_pad_width: 5,
    rect_pad_height: 3,
    pcb_component_id: "pcb_component_1001",
    pcb_plated_hole_id: "pcb_plated_hole_1001",
  },
  {
    x: 6.5,
    y: -6.5,
    type: "pcb_plated_hole",
    shape: "pill_hole_with_rect_pad",
    layers: ["top", "bottom"],
    port_hints: ["1"],
    pcb_port_id: "pcb_port_1002",
    hole_height: 3,
    hole_width: 2,
    rect_pad_width: 3,
    rect_pad_height: 4,
    pcb_component_id: "pcb_component_1002",
    pcb_plated_hole_id: "pcb_plated_hole_1002",
  },
]

test("Silkscreen with PCB Plated Hole", () => {
  expect(convertCircuitJsonToPcbSvg(pcbSoup)).toMatchSvgSnapshot(
    import.meta.path,
  )
})
