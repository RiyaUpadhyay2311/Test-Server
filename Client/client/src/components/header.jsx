import React from "react";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">🧠 QuizPortal</div>

      <nav>
        <a href="/">Home</a>
        <a href="/quiz">Quizzes</a>
        <a href="/leaderboard">Leaderboard</a>
        <a href="/login">Login</a>
      </nav>
    </header>
  );
}

export default Header;