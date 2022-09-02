import React from "react";

export const Header = ({ text }) => (
  <>
    <div style={styles.container}>
      <div style={styles.headerText}>{text}</div>
      <div style={styles.headerText}>Representation</div>
    </div>
    <div style={styles.divider} />
  </>
);

export const FontSize = ({ fontSize }) => (
  <>
    <div style={styles.container}>
      <div style={styles.lineText}>{fontSize}</div>
      <div
        style={{
          ...styles.text,
          fontSize: fontSize,
        }}
      >
        font size
      </div>
    </div>
    <div style={styles.divider} />
  </>
);

export const FontWeight = ({ fontWeight }) => (
  <>
    <div style={styles.container}>
      <div style={styles.lineText}>{fontWeight}</div>
      <div
        style={{
          ...styles.text,
          fontWeight: fontWeight,
        }}
      >
        font weight
      </div>
    </div>
    <div style={styles.divider} />
  </>
);

export const styles = {
  container: { display: "flex", flexDirection: "row" },
  fontContainer: { display: "flex", justifyContent: "space-between" },
  fontSubContainer: { padding: "10px", width: "50%" },
  headerText: {
    display: "flex",
    fontWeight: "bold",
    fontSize: "16px",
    fontFamily: "Arial",
    padding: "10px",
    width: "150px",
  },
  divider: {
    height: "1px",
    backgroundColor: "#D5D9E1",
    width: "90%",
  },
  lineText: {
    display: "flex",
    fontSize: "14px",
    fontFamily: "Arial",
    padding: "10px",
    width: "150px",
    alignItems: "center",
  },
  text: { justifyContent: "center", width: "150px", padding: "10px" },
};
