import React from "react";

export const ColorBox = ({ colorText, color }) => (
  <div style={styles.colorBoxContainer}>
    <div
      style={{
        ...styles.coloredBox,
        backgroundColor: color,
      }}>
      <div style={styles.colorTextContainer}>
        <div
          style={
            color == '#000000' || color == '#0F131A' || color == '#273142'
              ? styles.colorNameTextWhite
              : styles.colorNameText
          }>
          {colorText}
        </div>
        <div
          style={
            color == '#000000' || color == '#0F131A' || color == '#273142'
              ? styles.colorTextWhite
              : styles.colorText
          }>
          {color}
        </div>
      </div>
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
  colorBoxContainer: {
    display: 'flex',
    maxWidth: '150px',
    marginRight: '60px'
  },
  coloredBox: {
    minHeight: '50px',
    minWidth: '100px',
    borderRadius: '10px',
    outline: '1px solid #D5D9E1',
    width: '140px',
  },
  colorTextContainer: {
    flexDirection: 'row',
    paddingLeft: '0.5rem',
    paddingTop: '1rem',
    paddingBottom: '1rem',
  },
  colorNameText: { 
    fontWeight: 'bold', 
    fontSize: '14px', 
    fontFamily: 'Arial' 
  },
  colorText: { 
    fontFamily: 'Helvetica', 
    fontSize: '12px' 
  },
  colorNameTextWhite: {
    fontWeight: "bold",
    fontSize: "14px",
    fontFamily: "Arial",
    color: "white",
  },
  colorTextWhite: {
    fontFamily: "Helvetica",
    fontSize: "12px",
    color: "white",
  },
};
