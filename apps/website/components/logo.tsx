export function Logo({ size = 81 }) {
  return (
    <div className="inline-flex items-center">
      <svg
        fill="none"
        height={size}
        preserveAspectRatio="none"
        viewBox="0 0 500 500"
        width={size}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M362.5 400H203.137C146.13 399.954 99.9536 353.492 100 296.226V137.406M137.5 100.001L296.863 100C353.87 100.047 400.046 146.509 400 203.775V362.596"
          stroke="currentColor"
          strokeWidth="40"
        ></path>
      </svg>

      <h1 className="font-bold" style={{ fontSize: size / 3 }}>
        Zh
      </h1>
      <style jsx>{`
        div {
          mask-image: linear-gradient(60deg, black 25%, rgba(0, 0, 0, 0.2) 50%, black 75%);
          mask-size: 400%;
          mask-position: 0%;
        }
        div:hover {
          mask-position: 100%;
          transition:
            mask-position 1s ease,
            -webkit-mask-position 1s ease;
        }
      `}</style>
    </div>
  )
}
