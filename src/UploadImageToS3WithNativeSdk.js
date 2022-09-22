import React, { useState } from "react";
import AWS from "aws-sdk";
import styled from "styled-components";
import img from "./upload.png";

const S3_BUCKET = "sih-student";
const REGION = "ap-south-1";

AWS.config.update({
  accessKeyId: "AKIASWPNHS43I5MSZCW3",
  secretAccessKey: "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",
});

const myBucket = new AWS.S3({
  params: { Bucket: S3_BUCKET },
  region: REGION,
});

const UploadImageToS3WithNativeSdk = () => {
  const [progress, setProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInput = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const uploadFile = (file) => {
    const params = {
      ACL: "public-read",
      Body: file,
      Bucket: S3_BUCKET,
      Key: file.name,
    };

    myBucket
      .putObject(params)
      .on("httpUploadProgress", (evt) => {
        setProgress(Math.round((evt.loaded / evt.total) * 100));
      })
      .send((err) => {
        if (err) console.log(err);
      });
  };
  const Button = styled.button`
    background-color: black;
    color: white;
    font-size: 20px;
    padding: 10px 60px;
    border-radius: 5px;
    margin: 10px 0px;
    cursor: pointer;
  `;
  // const uploadFiles = () => {
  //   document.getElementById("selectFile").click();
  // };
  return (
    <div>
      {/* <div>Native SDK File Upload Progress is {progress}%</div> */}
      <center>
        {/* <button
          style={{ backgroundColor: "white" }}
          onClick={uploadFiles.bind()}
        >
          <img src={img} height="70" width={70} alt="upload"></img>
        </button>      upload file image to upload */}
        <input
          // id="selectFile"
          type="file"
          onChange={handleFileInput}
          style={{ paddingLeft: "3cm", paddingBottom: "1cm" }}
        />{" "}
        <br></br>
        {/* <video src={selectedFile}></video> */}
        <Button onClick={() => uploadFile(selectedFile)}> Upload </Button>
      </center>
    </div>
  );
};

export default UploadImageToS3WithNativeSdk;

// import React, { useState } from "react";
// import { uploadFile } from "react-s3";
// import { Buffer } from "buffer";

// window.Buffer = Buffer;

// const S3_BUCKET = "sih-student";
// const REGION = "ap-south-1";
// const ACCESS_KEY = "AKIASWPNHS43I5MSZCW3";
// const SECRET_ACCESS_KEY = "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";

// const config = {
//   bucketName: S3_BUCKET,
//   region: REGION,
//   accessKeyId: ACCESS_KEY,
//   secretAccessKey: SECRET_ACCESS_KEY,
// };

// const UploadImageToS3WithReactS3 = () => {
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleFileInput = (e) => {
//     setSelectedFile(e.target.files[0]);
//   };

//   const handleUpload = async (file) => {
//     uploadFile(file, config)
//       .then((data) => console.log(data))
//       .catch((err) => console.error(err));
//   };

//   return (
//     <div>
//       <div>React S3 File Upload</div>
//       <input type="file" onChange={handleFileInput} />
//       <button onClick={() => handleUpload(selectedFile)}> Upload to S3</button>
//     </div>
//   );
// };

// export default UploadImageToS3WithReactS3;
