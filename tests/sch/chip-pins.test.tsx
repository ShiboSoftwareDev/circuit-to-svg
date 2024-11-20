import { test, expect } from "bun:test"
import { convertCircuitJsonToSchematicSvg } from "lib"
import { getTestFixture } from "tests/fixtures/get-test-fixture"

test("schematic chip with pins on all sides", () => {
  const { circuit } = getTestFixture()

  circuit.add(
    <board width="10mm" height="10mm">
      <chip
        name="U1"
        schWidth={2}
        schHeight={2}
        schPortArrangement={{
          topSide: {
            pins: ["VDD", "GND"],
            direction: "left-to-right",
          },
          rightSide: {
            pins: ["OUT1", "OUT2"],
            direction: "top-to-bottom",
          },
          bottomSide: {
            pins: ["CLK", "RST"],
            direction: "left-to-right",
          },
          leftSide: {
            pins: ["IN1", "IN2"],
            direction: "top-to-bottom",
          },
        }}
        pinLabels={{
          pin1: ["VDD"],
          pin2: ["GND"],
          pin3: ["OUT1"],
          pin4: ["OUT2"],
          pin5: ["CLK"],
          pin6: ["RST"],
          pin7: ["IN1"],
          pin8: ["IN2"],
        }}
      />
    </board>,
  )

  expect(
    convertCircuitJsonToSchematicSvg(circuit.getCircuitJson(), {
      grid: {
        cellSize: 1,
        labelCells: true,
      },
    }),
  ).toMatchSvgSnapshot(import.meta.path)
})
