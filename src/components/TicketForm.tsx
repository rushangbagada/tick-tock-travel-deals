
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface TicketFormProps {
  onSubmit: (ticketCount: number, source: string, destination: string) => void;
}

const TicketForm: React.FC<TicketFormProps> = ({ onSubmit }) => {
  const [ticketCount, setTicketCount] = useState<string>("1");
  const [source, setSource] = useState<string>("");
  const [destination, setDestination] = useState<string>("");
  const [errors, setErrors] = useState<{
    ticketCount?: string;
    source?: string;
    destination?: string;
  }>({});

  const validateForm = (): boolean => {
    const newErrors: {
      ticketCount?: string;
      source?: string;
      destination?: string;
    } = {};

    if (!ticketCount || parseInt(ticketCount) < 1) {
      newErrors.ticketCount = "Please enter a valid number of tickets";
    }

    if (!source.trim()) {
      newErrors.source = "Please enter a source location";
    }

    if (!destination.trim()) {
      newErrors.destination = "Please enter a destination location";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      onSubmit(parseInt(ticketCount), source, destination);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md mx-auto">
      <div className="space-y-2">
        <Label htmlFor="ticketCount">Number of Tickets</Label>
        <Input
          id="ticketCount"
          type="number"
          value={ticketCount}
          min="1"
          onChange={(e) => setTicketCount(e.target.value)}
          className={errors.ticketCount ? "border-red-500" : ""}
        />
        {errors.ticketCount && (
          <p className="text-sm text-red-500">{errors.ticketCount}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="source">Source Location</Label>
        <Input
          id="source"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          className={errors.source ? "border-red-500" : ""}
          placeholder="Enter source station/location"
        />
        {errors.source && (
          <p className="text-sm text-red-500">{errors.source}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="destination">Destination Location</Label>
        <Input
          id="destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className={errors.destination ? "border-red-500" : ""}
          placeholder="Enter destination station/location"
        />
        {errors.destination && (
          <p className="text-sm text-red-500">{errors.destination}</p>
        )}
      </div>

      <Button 
        type="submit" 
        className="w-full bg-paytm-blue hover:bg-paytm-darkBlue"
      >
        Generate Ticket
      </Button>
    </form>
  );
};

export default TicketForm;
