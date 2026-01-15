import { useParams, NavLink, Outlet } from "react-router-dom";
import { getCategory } from "../api";
export default function Category() {
  const { catId } = useParams();
  const category = getCategory(catId);

  
  return (
    <>
      <h1>{category.name} Diploma</h1>
      <ul className="session-list">
        {category.sessions.map((session) => (
          <li className="session">
            <NavLink className={({ isActive}) => isActive ? "session-active" : null}
            to={session.id}>
              <p className="session-name">{session.name}</p>
            </NavLink>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
}
