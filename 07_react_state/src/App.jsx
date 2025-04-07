import React from "react";
import CounterUseState from "./components/CounterUseState";
import Profile from "./components/Profile";
import TodoList from "./components/TodoList";
import UserProvider from "./components/UserProvider";
import UserProfile from "./components/UserProfile";
import UpdateUser from "./components/UpdateUser";
import CounterZustand from "./components/CounterZustand";

const App = () => {
  return (
    <div>
      <h1>useState</h1>
      <CounterUseState />
      <hr />
      <Profile />
      <hr />
      <TodoList />
      <h1 style={{ marginTop: "100px" }}>useContext</h1>
      <hr />
      <UserProvider>
        <UserProfile />
        <UpdateUser />
      </UserProvider>
      <hr />
      <h1>Zustand</h1>
      <CounterZustand />
    </div>
  );
};

export default App;
