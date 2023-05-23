import React from "react";

export const BorderRadius = ({ radius, value }) => (
  <>
    <div style={styles.container}>
      <div style={styles.radiusText}>{value}</div>
      <div
        style={{
          ...styles.box,
          borderRadius: radius,
        }}
      />
    </div>
    <div style={styles.divider} />
  </>
);

export const styles = {
  container: { display: "flex", flexDirection: "row" },
  divider: {
    height: "1px",
    backgroundColor: "#D5D9E1",
    width: "90%",
  },
  radiusText: {
    display: "flex",
    fontSize: "14px",
    fontFamily: "Arial",
    padding: "10px",
    width: "150px",
    alignItems: "center",
  },
  box: {
    width: "80px",
    height: "80px",
    backgroundColor: "#F27A1A",
    margin: "10px",
  },
};
