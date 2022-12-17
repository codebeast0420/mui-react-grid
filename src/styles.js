export const styles = {
  iconWrapper: {
    padding: "26px",
    backgroundColor: "#353535",
    borderRadius: "50%",
    display: "inline-flex",
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
