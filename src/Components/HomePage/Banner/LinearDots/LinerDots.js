import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import { useEffect, useState } from "react";

function LinearProgressWithLabel(props) {
  return (
    <div sx={{ display: "flex", alignItems: "center"  }}>
      <div sx={{ width: "100%", mr: 0 }}>
        <LinearProgress variant="determinate"  {...props} />
      </div>
    </div>
  );
}

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired
};

export default function LinearDots() {
  const [progress, setProgress] = useState(1);
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 1 : prevProgress + 1
      );
    }, 61);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <div className="linerTilte">Խնայիր տերմինալով վճարելիս </div>
      <LinearProgressWithLabel value={progress} />
    </>
  );
}