import { motion } from "framer-motion";
import { useMemo } from "react";
import Latex from "../components/Latex";
import { isPDFExport } from "../reveal/reaveal";
import TitleContentSlide from "../slide-templates/TitleContentSlide";
import { raw } from "../utils/raw-strings";
import { SlideContext } from "../utils/slide-context";

const N = 200;
const POINT_SIZE = 0.6;
export default function PointCloud() {
  const [pointsPositions, selected] = useMemo(() => {
    const pointsPositions = Array(N)
      .fill(0)
      .map(() => ({ x: Math.random(), y: Math.random() }));
    const selected = Array(N)
      .fill(false)
      .map(() => Math.random() > 0.2);
    return [pointsPositions, selected];
  }, []);

  function getLatexForKeyframe(keyframe: number){
    if(keyframe === 0){
      return raw`\varphi \lor \psi ?`;
    }
    if(keyframe === 1){
      return raw`\color{green} \varphi`
    }
    if(keyframe === 2){
      return raw`\psi ?`
    }
    if(keyframe === 3){
      return raw`\color{green} \psi`
    }
    return raw`?`
  }
  return (
    <TitleContentSlide
      slideProps={{ animateKeyFrames: 3 }}
      title={<h2>Visualizations</h2>}
      content={
        <SlideContext.Consumer>
          {({ visible, keyframe }) => (
            <>
              <div className="flex justify-center gap-x-4 w-full h-full mb-5">
                <div className="w-full h-full text-8xl">
                  <Latex math={getLatexForKeyframe(keyframe)}  />
                </div>
                <div className="border rounded w-full h-full max-w-3xl" style={{ padding: POINT_SIZE + "rem" }}>
                  {(visible || isPDFExport()) && (
                    <div className={`w-full h-full relative`}>
                      {pointsPositions.map((p, i) => (
                        <motion.div
                          initial={{
                            backgroundColor: "#5894fc",
                          }}
                          animate={{
                            backgroundColor:
                              keyframe > 0 && selected[i]
                                ? "#27db69"
                                : keyframe > 2 && !selected[i] && Math.random() > 0.1
                                ? "#27db69"
                                : undefined,
                            opacity: keyframe > 1 && selected[i] ? 0 : undefined,
                            scale: keyframe > 1 && selected[i] ? 0.01 : 1,
                          }}
                          transition={{ duration: 0.6, type: "spring" }}
                          key={i}
                          className={`rounded-full absolute`}
                          style={{
                            width: POINT_SIZE + "rem",
                            height: POINT_SIZE + "rem",

                            left: Math.round(100 * p.x) + "%",
                            top: Math.round(100 * p.y) + "%",
                          }}
                        ></motion.div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </SlideContext.Consumer>
      }
    />
  );
}
