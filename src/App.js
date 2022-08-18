import logo from "./logo.svg";
import "./App.css";
import UploadImageToS3WithNativeSdk from "./UploadImageToS3WithNativeSdk";

<script src="https://sdk.amazonaws.com/js/aws-sdk-2.1197.0.min.js"></script>;

function App() {
  return (
    <div className="App">
      {/* //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div> */}
      <UploadImageToS3WithNativeSdk />
    </div>
  );
}

export default App;
