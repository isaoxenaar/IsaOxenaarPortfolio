import React, {useEffect, useState, useRef, useMemo} from "react";
import "../css/TimeLine.css";

const TimeLine = () => {      

  function useIsInViewport(ref:any) {
    const [isIntersecting, setIsIntersecting] = useState(false);
  
    const observer = useMemo(
      () =>
        new IntersectionObserver(([entry]) =>
          setIsIntersecting(entry.isIntersecting),
        ),
      [],
    );
  
    useEffect(() => {
      observer.observe(ref.current);
  
      return () => {
        observer.disconnect();
      };
    }, [ref, observer]);
  
    return isIntersecting;
  }

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);

  const isInViewport1 = useIsInViewport(ref1);
  const isInViewport2 = useIsInViewport(ref2);
  const isInViewport3 = useIsInViewport(ref3);
  const isInViewport4 = useIsInViewport(ref4);
  const isInViewport5 = useIsInViewport(ref5);
  const isInViewport6 = useIsInViewport(ref6);
  const isInViewport7 = useIsInViewport(ref7);


    return(
        <section className="timeline">
            <ul className="timeline--ul">
              <li ref={ref1} className={isInViewport1? "in-view": "timeline--li"}>
                <div><time>2022</time>
                  Salt school of applied technology, .NET C#-language.
                </div>
              </li>
              <li ref={ref2} className={isInViewport2? "in-view": "timeline--li"}>
                <div><time>2021</time>
                  Writer for DAMA Norway, Data Nugget.  
                </div>
              </li>
              <li ref={ref3} className={isInViewport3? "in-view": "timeline--li"}>
                <div><time>2020</time>
                  Codaisseur Academy, FullStack Bootcamp, Javascript-language.
                </div>
              </li>
              <li ref={ref4} className={isInViewport4? "in-view": "timeline--li"}>
                <div><time>2019</time>
                  Codam Coding College, C-language Introduction.
                </div>
              </li>
              <li ref={ref5} className={isInViewport5? "in-view": "timeline--li"}>
                <div><time>2018</time>
                  <h5>Fullbright Center NL, UX Assignment.</h5>
                  <h5>Working as Child-Care professional.</h5>
                </div>
              </li>
              <li ref={ref6} className={isInViewport6? "in-view": "timeline--li"}>
                <div><time>2017</time>
                  Freelance Assignments, Creative Writing courses and working as a waitress.
                </div>
              </li>
              <li ref={ref7} className={isInViewport7? "in-view": "timeline--li"}>
                <div><time>2016</time>
                  Gerrit Rietveld Academie, AudioVisual Art, B.F.A.
                </div>
              </li>
            </ul>
        </section>
    )
}
export default TimeLine;