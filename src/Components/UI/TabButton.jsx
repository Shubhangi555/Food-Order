// components/TabButton.js
import Button from "./Button";

export default function TabButton({ isSelected, onClick, children }) {
  return (
    <button
    className="tab-btn"
      onClick={onClick}
      style={{
        // padding: "10px 20px",
        // margin: "5px",
        border: isSelected ? "2px solid orange" : "1px solid  #ffab04",
        backgroundColor: isSelected ? " #ffab04" : " #ffe4b5",
        cursor: "pointer",
        padding:"5px",
       
      }}
    >
      {children}
    </button>
  );
}
