export default function UKFlag() {
  return (
    <div className={`uk-flag`}>
      <div className="bg" />

      {/* White diagonals */}
      <div className="diag white d1" />
      <div className="diag white d2" />

      {/* Red diagonals */}
      <div className="diag red d1" />
      <div className="diag red d2" />

      {/* White cross */}
      <div className="cross white horizontal" />
      <div className="cross white vertical" />

      {/* Red cross */}
      <div className="cross red horizontal" />
      <div className="cross red vertical" />

      <style>{`
        .uk-flag {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
          background: #012169;
        }

        .bg {
          position: absolute;
          inset: 0;
          background: #012169;
        }

        /* Diagonals */
        .diag {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 140%;
          transform-origin: center;
        }

        .diag.white {
          height: 28%;
          background: #fff;
          z-index: 1;
        }

        .diag.red {
          height: 14%;
          background: #C8102E;
          z-index: 2;
        }

        .diag.d1 {
          transform: translate(-50%, -50%) rotate(26deg);
        }

        .diag.d2 {
          transform: translate(-50%, -50%) rotate(-26deg);
        }

        /* Cross */
        .cross {
          position: absolute;
          z-index: 3;
        }

        .cross.horizontal {
          top: 50%;
          left: 0;
          width: 100%;
          transform: translateY(-50%);
        }

        .cross.vertical {
          left: 50%;
          top: 0;
          height: 100%;
          transform: translateX(-50%);
        }

        /* White cross */
        .cross.white.horizontal {
          height: 30%;
          background: #fff;
        }

        .cross.white.vertical {
          width: 30%;
          background: #fff;
        }

        /* Red cross */
        .cross.red.horizontal {
          height: 18%;
          background: #C8102E;
        }

        .cross.red.vertical {
          width: 18%;
          background: #C8102E;
        }
      `}</style>
    </div>
  )
}