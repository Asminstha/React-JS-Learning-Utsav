import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

function App() {
  const [file, setFile] = useState(null);
  const [selectedRatio, setSelectedRatio] = useState("16:9");
  const [loading, setLoading] = useState(false);
  const commonRatios = {
    "16:9": [1920, 1080],
    "5:4": [1280, 1024],
    "4:3": [1024, 768],
    "3:2": [1440, 960],
    "8K": [7680, 4320],
    "5K": [5120, 2880],
    "4K": [3840, 2160],
    Retina: [2048, 1536],
    iPhone6plus: [1920, 1080],
    iPhone6: [1334, 750],
    iPhone5: [1136, 640],
    iPad: [1024, 768],
    Twitter: [1024, 512],
    WebBanner: [728, 90],
    VGA: [640, 480],
    HVGA: [320, 480],
  };

  const [selectedWidth, setSelectedWidth] = useState(
    commonRatios[selectedRatio][0]
  );
  const [selectedHeight, setSelectedHeight] = useState(
    commonRatios[selectedRatio][1]
  );

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile && uploadedFile.type.startsWith("image/")) {
      setFile(URL.createObjectURL(uploadedFile));
    } else {
      alert("Please upload a valid image file.");
    }
  };

  const downloadImage = () => {
    setLoading(true);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = selectedWidth;
    canvas.height = selectedHeight;

    const img = new Image();
    img.src = file;
    img.onload = () => {
      ctx.drawImage(img, 0, 0, selectedWidth, selectedHeight);
      canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "resized_image.png";
        a.click();
        setLoading(false);
      }, "image/png");
    };
  };

  return (
    <Container className="container">
      <h1>Aspect Ratio Image Resizer</h1> 
      <p className="intro-text">
        Quickly resize your images to fit various aspect ratios and resolutions
        with ease. Simply upload an image, choose the desired aspect ratio, and
        preview the result instantly. This tool is perfect for preparing images
        for social media, web banners, and different device screens. Download
        your resized image with one click!
      </p>

      <Row className="image-input">
        <Col>
          <Form.Group controlId="customImage">
            <Form.Label className="label-text">Upload an image:</Form.Label>
            <Form.Control type="file" onChange={handleFileChange} />
          </Form.Group>
        </Col>
      </Row>
      <Row className="common-ratio">
        <Col>
          <Form.Group controlId="commonRatios">
            <Form.Label className="label-text">Select Aspect Ratio:</Form.Label>
            <Form.Control
              as="select"
              onChange={(e) => {
                setSelectedRatio(e.target.value);
                const [width, height] = commonRatios[e.target.value];
                setSelectedWidth(width);
                setSelectedHeight(height);
              }}
              value={selectedRatio}
            >
              {Object.keys(commonRatios).map((ratio) => (
                <option key={ratio} value={ratio}>
                  {ratio} ({commonRatios[ratio][0]}x{commonRatios[ratio][1]})
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row className="image-container">
        <Col>
          <img
            id="previewImage"
            src={file || "https://via.placeholder.com/300"}
            alt="Preview of the uploaded and resized image"
            width={selectedWidth}
            height={selectedHeight}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button onClick={downloadImage} disabled={!file || loading}>
            {loading ? "Processing..." : "Download Image"}
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
