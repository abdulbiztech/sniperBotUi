// App.js
import React, { useState } from "react";
import "./App.css";

function App() {
  const [publicAddress, setPublicAddress] = useState("");
  const [privateKey, setPrivateKey] = useState("");
  const [node, setNode] = useState("");
  const [gasLimit, setGasLimit] = useState("");
  const [gasPrice, setGasPrice] = useState("");
  const [tradingParameters, setTradingParameters] = useState("");
  const [maxFeePerGas, setMaxFeePerGas] = useState("");
  const [maxPriorityFeePerGas, setMaxPriorityFeePerGas] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can use these values for further processing, like sending them to the backend
    console.log({
      publicAddress,
      privateKey,
      node,
      gasLimit,
      gasPrice,
      tradingParameters,
      maxFeePerGas,
      maxPriorityFeePerGas,
    });
  };

  return (
    <div className="App">
      <div className="slot">
        {/* <h2>Executions</h2> */}
        {/* Your input fields for executions slot */}
        <form onSubmit={handleSubmit}>
          <div className="label-input">
            <label>Public Address:</label>
            <input
              type="text"
              value={publicAddress}
              onChange={(e) => setPublicAddress(e.target.value)}
            />
          </div>
          <div className="label-input">
            <label>Private Key:</label>
            <input
              type="password"
              value={privateKey}
              onChange={(e) => setPrivateKey(e.target.value)}
            />
          </div>
          <div className="label-input">
            <label>Node:</label>
            <input
              type="text"
              value={node}
              onChange={(e) => setNode(e.target.value)}
            />
          </div>
          <div className="label-input">
            <label>Gas Limit:</label>
            <input
              type="text"
              value={gasLimit}
              onChange={(e) => setGasLimit(e.target.value)}
            />
          </div>
          <div className="label-input">
            <label>Max Fee Per Gas:</label>
            <input
              type="text"
              value={maxFeePerGas}
              onChange={(e) => setGasPrice(e.target.value)}
            />
          </div>
          <div className="label-input">
            <label>Max Priority Fee Per Gas:</label>
            <input
              type="text"
              value={maxPriorityFeePerGas}
              onChange={(e) => setGasPrice(e.target.value)}
            />
          </div>
          <div className="label-input">
            <label>Gas Price:</label>
            <input
              type="text"
              value={gasPrice}
              onChange={(e) => setGasPrice(e.target.value)}
            />
          </div>
          <div className="label-input">
            <label>Trading Parameters:</label>
            <input
              type="text"
              value={tradingParameters}
              onChange={(e) => setTradingParameters(e.target.value)}
            />
          </div>
          {/* <button type="submit">Submit</button> */}
        </form>
      </div>
      {/* <div className="slot">
        <h2>Buy Details</h2>
      </div>
      <div className="slot">
        <h2>Logs</h2>
      </div> */}
    </div>
  );
}

export default App;
