import logo from "./logo.svg";
import "./App.css";
import UploadImageToS3WithNativeSdk from "./UploadImageToS3WithNativeSdk";
import image from "./backgroundImage.jpeg";

<script src="https://sdk.amazonaws.com/js/aws-sdk-2.1197.0.min.js"></script>;

function App() {
  return (
   
      <div
        className="App"
        style={{
          backgroundImage: `url(${image})`,
          width: "100%",
          height: "720px",
        
        }}
      >
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
        <h1 style={{ color: "blue", fontSize: "1.2cm",paddingTop: '1cm'}}>Elements2k22</h1>
        <div style={{ padding: "5cm" }}>
          <UploadImageToS3WithNativeSdk />
        </div>
      </div>

  );
}

export default App;
