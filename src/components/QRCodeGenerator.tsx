
import React, { useEffect, useState } from "react";

interface QRCodeGeneratorProps {
  value: string;
}

const QRCodeGenerator: React.FC<QRCodeGeneratorProps> = ({ value }) => {
  const [qrCodeUrl, setQrCodeUrl] = useState<string>("");

  useEffect(() => {
    // Generate QR code using an API
    const generateQR = async () => {
      try {
        const encodedValue = encodeURIComponent(value);
        const url = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodedValue}`;
        setQrCodeUrl(url);
      } catch (error) {
        console.error("Error generating QR code:", error);
      }
    };

    if (value) {
      generateQR();
    }
  }, [value]);

  return (
    <div className="flex justify-center">
      {qrCodeUrl ? (
        <img 
          src={qrCodeUrl} 
          alt="QR Code" 
          className="w-64 h-64 object-contain"
        />
      ) : (
        <div className="w-64 h-64 bg-gray-200 animate-pulse flex items-center justify-center">
          Loading QR...
        </div>
      )}
    </div>
  );
};

export default QRCodeGenerator;
