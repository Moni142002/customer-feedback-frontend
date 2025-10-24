import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SignaturePad = () => {
  const canvasRef = useRef(null);

  const clearSignature = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div className="container-fluid">
      <h4 className="mb-4 text-primary">Signature</h4>
      
      <p className="text-muted mb-3">
        Please sign in the box below using your finger or stylus
      </p>

      <div className="border rounded mb-3" style={{ height: '200px', background: '#f8f9fa' }}>
        <canvas 
          ref={canvasRef}
          width="500" 
          height="200"
          className="w-100 h-100"
          style={{ cursor: 'crosshair' }}
          onMouseDown={(e) => {
            // Basic drawing functionality would go here
            console.log('Drawing started at:', e.clientX, e.clientY);
          }}
        />
      </div>

      <div className="d-flex gap-2 mb-4">
        <button 
          type="button" 
          className="btn btn-outline-secondary"
          onClick={clearSignature}
        >
          Clear Signature
        </button>
        <button 
          type="button" 
          className="btn btn-primary"
        >
          Save Signature
        </button>
      </div>

      <button 
        type="button" 
        className="btn btn-success btn-lg w-100"
      >
        Submit Feedback
      </button>
    </div>
  );
};

export default SignaturePad;