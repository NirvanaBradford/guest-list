import { useState } from "react";
import GuestDetails from "./Guests/GuestDetails";
import GuestList from "./Guests/GuestList";

export default function App() {
  const [guestid, setGuestId] = useState(null);
  return (
    <main>
      {guestid ? (
        <GuestDetails guestid={guestid} setGuestId={setGuestId} />
      ) : (
        <GuestList setGuestId={setGuestId} />
      )}
    </main>
  );
}
