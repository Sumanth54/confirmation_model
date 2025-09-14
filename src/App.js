import "./styles.css";
import { useState } from "react";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");

  const clickedConfirm = () => {
    setStatusMsg("Confirmed");
    setModalOpen(false);
  };
  const clickedCancel = () => {
    setStatusMsg("Cancelled");
    setModalOpen(false);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>

      <div>
        <button onClick={() => setModalOpen(true)}>
          Click Here to open modal
        </button>

        {modalOpen && (
          <div className="modal">
            <div className="modal-box">
              <h3>Confirm Action</h3>
              <p>Are you sure you want to proceed? </p>
              <div>
                <button className="confirm-btn" onClick={clickedConfirm}>
                  Accept
                </button>{" "}
                <button className="cancel-btn" onClick={clickedCancel}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
        {statusMsg && <div className="status-msg">{statusMsg} </div>}
      </div>
    </div>
  );
}
