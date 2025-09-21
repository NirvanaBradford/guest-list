import { useState, useEffect } from "react";
import { getGuest } from "../api/guest";

/** Details of Guests */
function GuestDetails({ guestid, setGuestId }) {
  const [guest, setGuest] = useState(null);

  useEffect(() => {
    const syncGuest = async () => {
      const data = await getGuest(guestid);
      setGuest(data);
    };
    syncGuest();
  }, [guestid]);

  if (!guest) {
    return <p>Loading...</p>;
  }

  return (
    <article>
      <h1>{guest.name}</h1>
      <address>
        {guest.email}
        <b></b>
        {guest.phone}
      </address>
      <p>{guest.job}</p>
      <p>{guest.bio}</p>
      <button onClick={() => setGuestId(null)}>Back</button>
    </article>
  );
}
export default GuestDetails;
