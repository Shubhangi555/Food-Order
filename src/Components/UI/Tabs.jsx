// components/Tabs.js
export default function Tabs({ buttons, children }) {
  return (
    <div>
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" , overflow:"auto"}}>
        {buttons}
      </div>
      <div>{children}</div>
    </div>
  );
}
