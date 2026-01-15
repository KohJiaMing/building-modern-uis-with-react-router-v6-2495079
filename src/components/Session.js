import { useParams } from "react-router-dom";
import { getSession } from "../api";

export default function Session() {
  // Replace the placeholder catId and sessionId variables with a React Router Hook
  const { catId, sessionId } = useParams();

  const { name, desc, speaker } = getSession({ catId, sessionId });

  return (
    <>
      <h2>Module</h2>
      <h3>{name}</h3>
      <p>{desc}</p>

      <h4>{speaker.name}</h4>
      <span>
        {speaker.title}
      </span>
      <p>{speaker.bio}</p>
    </>
  );
}
