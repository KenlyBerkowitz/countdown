import { useEffect, useState } from "react";
import { Circle, Stage, Layer } from "react-konva";
import './circles.css';

function CanvasCircle(props) {
  const width = 20;
  const height = 20;
  const [fill, set_fill] = useState();

  useEffect(() => {
    if (props.Acolor == "green" )
      set_fill("#32d137");
    else if (props.Acolor == "orange" )
      set_fill("#ff702d");
    else
      set_fill("transparent");
  }, [])

  return (
    <div className='circle-style'>
      <Stage width={width} height={height}>
        <Layer>
          <Circle x={width/2} y={height/2} stroke="black" strokeWidth={1} fill={fill} radius={7} />
        </Layer>
      </Stage>
    </div>
  );
}

export default CanvasCircle;