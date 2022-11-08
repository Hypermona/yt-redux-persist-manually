import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { add } from "./store/userSlice";
import { persistor } from "./store";

function App() {
  const [user, setUser] = useState("");
  const [persist, setPersist] = useState(true);
  const users = useSelector((state) => state.users);

  const handlePersist = () => {
    if (persist) {
      persistor.pause();
      setPersist(false);
    } else {
      persistor.persist();
      setPersist(true);
    }
  };

  console.log(users);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h4>users</h4>
      {users?.map((user, i) => (
        <p key={i}>{user}</p>
      ))}
      <br />
      <label>Username</label>
      <input type="text" value={user} onChange={(e) => setUser(e.target.value)} />
      <button onClick={() => dispatch(add(user))}>Add {user}</button>
      <br />
      <div>
        {"<h1> persistance </h1>"}
        <button onClick={handlePersist}>{persist ? "Turn Off" : " Turn On"}</button>
      </div>
    </div>
  );
}

export default App;
