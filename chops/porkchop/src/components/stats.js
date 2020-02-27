import React from "react"
import { XYPlot, VerticalBarSeries } from "react-vis"
import { usePokemonValue, useStateValue } from "../contexts"
import { getColor } from "../util"

const Stats = () => {
  const [{ theme }] = useStateValue()
  const [{ pokemon }] = usePokemonValue()

  const data = pokemon?.stats
    .map(({ base_stat }, index) => ({
      x: index,
      y: base_stat,
    }))
    .reverse()

  return data ? (
    <XYPlot height={200} width={300}>
      <VerticalBarSeries
        data={data}
        color={getColor(theme)}
        barWidth={0.75}
        animation={"noWobble"}
      />
    </XYPlot>
  ) : null
}

export default Stats
