import React from "react";

export const ColorBox = ({ colorText, color }) => (
  <div style={styles.colorBoxContainer}>
    <div
      style={{
        ...styles.coloredBox,
        backgroundColor: color,
      }}
    />
    <div style={styles.colorTextContainer}>
      <div style={styles.colorNameText}>{colorText}</div>
      <div style={styles.colorText}>{color}</div>
    </div>
  </div>
);

export const GradientColorBox = ({ colorText, firstColor, secondColor }) => (
  <div style={styles.colorBoxContainer}>
    <div
      style={{
        ...styles.gradientColoredBox,
        background: `linear-gradient(135deg, ${firstColor} 0%, ${secondColor} 100%)`,
      }}
    />
    <div style={styles.gradientColorNameContainer}>
      <div style={styles.gradientColorNameText}>{colorText}</div>
      <div style={styles.gradientColorText}>
        {firstColor} - {secondColor}
      </div>
    </div>
  </div>
);

export const EmptyColorBox = ({ colorText, color }) => (
  <div style={styles.colorBoxContainer}>
    <div style={styles.emptyColoredBox} />
    <div style={styles.colorTextContainer}>
      <div style={styles.emptyColorNameText}>{colorText}</div>
      <div style={styles.emptyColorText}>{color}</div>
    </div>
  </div>
);

export const styles = {
  colorBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "30px",
    marginBottom: "30px",
  },
  colorBoxContainer: { display: "flex", maxWidth: "150px" },
  coloredBox: {
    minHeight: "50px",
    minWidth: "100px",
    borderRadius: "10px",
    outline: "1px solid #D5D9E1",
  },
  colorTextContainer: { paddingLeft: "1rem" },
  colorNameText: { fontWeight: "bold", fontSize: "14px", fontFamily: "Arial" },
  colorText: { fontFamily: "Helvetica", fontSize: "12px" },
  emptyColoredBox: {
    minHeight: "50px",
    minWidth: "100px",
  },
  emptyColorNameText: {
    fontWeight: "bold",
    fontSize: "14px",
    fontFamily: "Arial",
    color: "#FFFFFF",
  },
  emptyColorText: {
    fontFamily: "Helvetica",
    fontSize: "12px",
    color: "#FFFFFF",
  },
  gradientColoredBox: {
    minHeight: "50px",
    minWidth: "100px",
    borderRadius: "10px",
    outline: "1px solid #D5D9E1",
  },
  gradientColorNameContainer: {
    paddingLeft: "1rem",
    minWidth: "100px",
    minHeight: "50px",
  },
  gradientColorNameText: {
    fontWeight: "bold",
    fontSize: "14px",
    fontFamily: "Arial",
  },
  gradientColorText: {
    fontFamily: "Helvetica",
    fontSize: "12px",
    width: "150px",
  },
};
