
import React from "react";

interface TicketDetailsProps {
  ticketCount: number;
  source: string;
  destination: string;
}

const TicketDetails: React.FC<TicketDetailsProps> = ({ 
  ticketCount,
  source,
  destination
}) => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });
  const formattedTime = currentDate.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });
  
  // Generate random order IDs
  const orderId = Math.floor(1000000000 + Math.random() * 9000000000);
  const orderItemId = Math.floor(1000000000 + Math.random() * 9000000000);
  
  return (
    <div className="bg-gray-50 rounded-lg p-4 w-full">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-semibold text-gray-800">Ticket Details</h3>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
      
      <div className="space-y-3 text-sm">
        <div className="flex justify-between py-1">
          <span className="text-gray-500">Issued On</span>
          <span className="font-medium">{`${formattedDate}, ${formattedTime}`}</span>
        </div>
        
        <div className="flex justify-between py-1">
          <span className="text-gray-500">Order ID</span>
          <span className="font-medium">{orderId}</span>
        </div>
        
        <div className="flex justify-between py-1">
          <span className="text-gray-500">Order Item ID</span>
          <span className="font-medium">{orderItemId}</span>
        </div>
        
        <div className="flex justify-between py-1">
          <span className="text-gray-500">Ticket Type</span>
          <span className="font-medium">{ticketCount} {ticketCount === 1 ? 'Adult' : 'Adults'}</span>
        </div>
        
        <div className="flex justify-between py-1">
          <span className="text-gray-500">Source</span>
          <span className="font-medium">{source}</span>
        </div>
        
        <div className="flex justify-between py-1">
          <span className="text-gray-500">Destination</span>
          <span className="font-medium">{destination}</span>
        </div>
      </div>
    </div>
  );
};

export default TicketDetails;
