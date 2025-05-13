
import React, { useState } from "react";
import TicketForm from "@/components/TicketForm";
import TicketView from "@/components/TicketView";
import PaytmLogo from "@/components/PaytmLogo";

const Index = () => {
  const [ticketData, setTicketData] = useState<{
    ticketCount: number;
    source: string;
    destination: string;
  } | null>(null);

  const handleFormSubmit = (
    ticketCount: number,
    source: string,
    destination: string
  ) => {
    setTicketData({ ticketCount, source, destination });
  };

  const handleBack = () => {
    setTicketData(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white p-4 shadow">
        <div className="container mx-auto flex justify-center">
          <PaytmLogo />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto p-4 md:p-6 flex items-center justify-center">
        <div className="w-full max-w-md">
          {ticketData ? (
            <TicketView
              ticketCount={ticketData.ticketCount}
              source={ticketData.source}
              destination={ticketData.destination}
              onBack={handleBack}
            />
          ) : (
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h1 className="text-2xl font-bold text-center mb-6">
                Generate QR Ticket
              </h1>
              <TicketForm onSubmit={handleFormSubmit} />
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white p-4 border-t">
        <div className="container mx-auto text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} QR Ticket Generator
        </div>
      </footer>
    </div>
  );
};

export default Index;
