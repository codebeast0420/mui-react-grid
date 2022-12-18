export const styles = {
  linkLine: {
    content: "",
    position: "absolute",
    left: "calc(50% - 300px)",
    top: "190px",
    height: "122px",
    borderRadius: "20px",
    width: "800px",
    background: "linear-gradient(#FFFFFF, #FFFFFF) padding-box, linear-gradient(to right, #FCECB2, #FF8B89, #FC8ADC, #7954FF, #70BCFF) border-box",
    border: "4px solid transparent",
    borderLeft: "none",
    zIndex: "-1",
  },
  linkLineSM: {
    content: "",
    position: "absolute",
    left: "50%",
    top: "190px",
    height: "450px",
    background: "linear-gradient(#FFFFFF, #FFFFFF) padding-box, linear-gradient(to right, #FCECB2, #FF8B89, #FC8ADC, #7954FF, #70BCFF) border-box",
    border: "4px solid transparent",
    borderLeft: "none",
    zIndex: "-1",
  },
  iconWrapper: {
    padding: "26px",
    backgroundColor: "#353535",
    borderRadius: "50%",
    display: "inline-flex",
  },
  howitworksPaper: {
    p: 3,
    m: 0.3,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    borderRadius: "4rem",
    height: "30px",
    backgroundColor: "#1E1E1E",
    color: "white"
  },
  howitworksPaper3: {
    p: 3,
    m: 0.3,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    borderRadius: "4rem",
    height: "30px",
    backgroundColor: "inherit",
    color: "white"
  },
  divider: {
    border: " 1px solid",
    borderImageSource:
      "linear-gradient(107.73deg, #FF8B89 30.04%, #FC8ADC 41.59%, #7954FF 52.54%, #70BCFF 68.67%)",
    borderImageSlice: 1,
    marginTop: "30px",
  },
  slider: {
    ".slick-track": {
      display: "flex",
      alignItems: "flex-start",
    },
    ".slick-active": {
      position: "relative",
    },
    ".slick-list": {
      overflow: "hidden",
      display: "flex",
      marginTop: "60px",
    },
    ".slick-dots": {
      display: "flex !important",
      justifyContent: "center",
      alignItems: "center",
      padding: "0",
      columnGap: "10px",
      listStyle: "none",
      position: "relative",

      button: {
        textIndent: "-9999px",
        cursor: "pointer",
        backgroundColor: "#6B6B7A",
        border: "none",
        borderRadius: "100%",
        padding: "0",
        display: "block",
        width: "8px",
        height: "8px",
      },

      ".slick-active button": {
        background:
          "linear-gradient(144.94deg, #FCECB2 10.14%, #FF8B89 30.97%, #FC8ADC 51.8%, #7954FF 70.54%, #70BCFF 90.12%);",
      },
    },
  },
};
