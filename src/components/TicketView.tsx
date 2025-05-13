
import React from "react";
import { Button } from "@/components/ui/button";
import QRCodeGenerator from "./QRCodeGenerator";
import CountdownTimer from "./CountdownTimer";
import TicketDetails from "./TicketDetails";
import PaytmLogo from "./PaytmLogo";
import { ArrowLeft } from "lucide-react";
import { QrCode } from "lucide-react";

interface TicketViewProps {
  ticketCount: number;
  source: string;
  destination: string;
  onBack: () => void;
}

const TicketView: React.FC<TicketViewProps> = ({
  ticketCount,
  source,
  destination,
  onBack,
}) => {
  const qrValue = JSON.stringify({
    tickets: ticketCount,
    from: source,
    to: destination,
    timestamp: new Date().toISOString(),
  });

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <Button variant="ghost" size="icon" onClick={onBack}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div className="flex items-center gap-2">
          <QrCode className="h-5 w-5 text-paytm-blue" />
          <span className="text-lg font-semibold">{ticketCount} QR Ticket{ticketCount > 1 ? 's' : ''}</span>
        </div>
        <span className="text-paytm-blue font-medium">Help</span>
      </div>

      {/* QR Section */}
      <div className="px-6 pt-6">
        <p className="text-center text-gray-600 mb-4">
          Scan this QR at Entry & Exit Points
        </p>
        <QRCodeGenerator value={qrValue} />
      </div>

      {/* Timer Section */}
      <div className="p-6 text-center">
        <p className="text-gray-500 mb-2">Your ticket is valid for</p>
        <CountdownTimer hours={2} />
      </div>

      {/* Ticket Details Section */}
      <div className="p-4">
        <TicketDetails 
          ticketCount={ticketCount} 
          source={source} 
          destination={destination} 
        />
      </div>

      {/* Footer with Paytm Logo */}
      <div className="p-4 border-t flex justify-center">
        <PaytmLogo />
      </div>
    </div>
  );
};

export default TicketView;
