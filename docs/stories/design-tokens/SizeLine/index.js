import React from "react";

export const Header = () => (
  <>
    <div style={styles.container}>
      <div style={styles.headerText}>Variable</div>
      <div style={styles.headerText}>Pixels</div>
      <div style={styles.headerText}>Representation</div>
    </div>
    <div style={styles.divider} />
  </>
);

export const SizeLine = ({ variable, pixels }) => (
  <>
    <div style={styles.container}>
      <div style={styles.lineText}>{variable}</div>
      <div style={styles.lineText}>{pixels}</div>
      <div style={styles.coloredBoxContainer}>
        <div style={{ ...styles.coloredBox, width: `${pixels}px` }} />
      </div>
    </div>
    <div style={styles.divider} />
  </>
);

export const styles = {
  container: { display: "flex", flexDirection: "row" },
  sizeLineContainer: { padding: "10px" },
  headerText: {
    display: "flex",
    fontWeight: "bold",
    fontSize: "16px",
    fontFamily: "Arial",
    padding: "10px",
    width: "100px",
  },
  divider: {
    height: "1px",
    backgroundColor: "#D5D9E1",
  },
  lineText: {
    display: "flex",
    fontSize: "14px",
    fontFamily: "Arial",
    padding: "10px",
    width: "100px",
  },
  coloredBoxContainer: {
    justifyContent: "center",
    width: "100px",
    padding: "10px",
  },
  coloredBox: {
    height: "15px",
    backgroundColor: "#F27A1A",
    alignContent: "center",
    justifyContent: "center",
  },
};
