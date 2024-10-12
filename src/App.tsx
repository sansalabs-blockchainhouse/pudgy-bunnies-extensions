import { useState } from "react";
import "./App.css";

function App() {
  const [tab, setTab] = useState<"FARM" | "PVE" | "PVP">("FARM");

  return (
    <div className="container">
      <img src="/screen.png" className="screen" alt="screen" />
      <div className="buttons-container">
        <button
          className={`${tab === "FARM" ? "tab-button-active" : "tab-button"}`}
          onClick={() => setTab("FARM")}
        >
          Farm
        </button>
        <button
          className={`${tab === "PVE" ? "tab-button-active" : "tab-button"}`}
          onClick={() => setTab("PVE")}
        >
          PvE
        </button>
        <button
          className={`${tab === "PVP" ? "tab-button-active" : "tab-button"}`}
          onClick={() => setTab("PVP")}
        >
          PvP
        </button>
      </div>
      {tab === "FARM" && (
        <div className="farm-container">
          <div className="farm-info">
            <span>Total sent</span>
            <span>Available $PDGY</span>
            <button>Claim</button>
          </div>
          <div className="farm-actions">
            <div className="circle" />
            <div className="rectangle" />
            <div className="farm-grid">
              <button></button>
              <button></button>
              <button></button>
              <button></button>
            </div>
          </div>
        </div>
      )}
      {tab === "PVE" && (
        <div className="pve-container" style={{ gap: "10px" }}>
          <div className="pve-circles" style={{ marginTop: "10px" }}>
            <div className="circle" style={{ height: "80px", width: "80px" }} />
            <div className="circle" style={{ height: "60px", width: "60px" }} />
          </div>
          <div className="pve-actions" style={{ marginTop: "10px" }}>
            <div style={{ display: "flex" }}>
              <input
                type="text"
                style={{
                  background: "#82b6a2",
                  width: "100px",
                  border: "none",
                  height: "20px",
                }}
              />
              <button
                style={{
                  background: "#02835D",
                  height: "22px",
                  border: "none",
                }}
              >
                Earn
              </button>
            </div>

            <div style={{ display: "flex", gap: "5px", marginTop: "5px" }}>
              <button style={{ backgroundColor: "#82b6a2", border: "none" }}>
                Upgrade
              </button>
              <button style={{ backgroundColor: "#82b6a2", border: "none" }}>
                Attack
              </button>
            </div>
          </div>
        </div>
      )}
      {tab === "PVP" && (
        <div className="pvp-container" style={{ gap: "10px" }}>
          <div className="pve-actions" style={{ marginTop: "10px", display: 'flex',alignItems: 'center', justifyContent: 'end' }}>
            <div style={{ display: "flex", gap: "5px", marginTop: "5px" }}>
              <button style={{ backgroundColor: "#82b6a2", border: "none" }}>
                Upgrade
              </button>
              <button style={{ backgroundColor: "#82b6a2", border: "none" }}>
                Attack
              </button>
            </div>
          </div>
          <div className="pvp-circles" style={{ marginTop: "45px",display: 'flex', gap: '10px' }}>
            <div className="circle" style={{ height: "80px", width: "80px" }} />
            <div className="circle" style={{ height: "80px", width: "80px" }} />
            <div className="circle" style={{ height: "80px", width: "80px" }} />
          </div>
        </div>
      )}
      <br />
      <br />
      <div className="footer">
        <img src="/coin.png" className="coin" />
        <img src="/coin-silver.png" className="coin" />
        <img src="/wallet.png" className="wallet" />
        <img src="/bag.png" className="bag" />
      </div>
    </div>
  );
}

export default App;
