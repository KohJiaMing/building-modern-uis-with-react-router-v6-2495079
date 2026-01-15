import { useLocation } from "react-router-dom";
export default function Confirmation() {
  const { state } = useLocation();
  return (
    <div className="container">
      <h1>Thank You!</h1>

      {state && (
        <>
          <h1>Thank you, {state.name}</h1>
          <p>You're now registered for {state.course}.</p>
          <p>We'll email to <strong>{state.email}</strong>.</p>
        </>
      )}
    </div>  
  );
}
