import React from 'react';
import { Link } from 'react-router';
import '../App.css'; // Optional CSS for styling

const Header = () => {
  return (
    <header className="header">
      <h2>My Projects</h2>
      <nav className='navbar'>
        <ul className="nav-links">
          <li><Link to="/">CountDown-Timer</Link></li>
          <li><Link to="/rating">Rating</Link></li>
          <li><Link to="/memoryGame">Game</Link></li>
          <li><Link to="/tictacgame">Tic-Tac</Link></li>
          {/* <li><Link to="/infiniteScrolling">Scrolling</Link></li> */}
          <li><Link to="/jobboard">Job-Board</Link></li>
          <li><Link to="/dragNdrop">Drag-Drop</Link></li>
          <li><Link to="/folders">Tree-Structure-Folder</Link></li>
          <li><Link to="/progressBar">Progress-Bar</Link></li>
          <li><Link to="/filterdata">FilterList</Link></li>
          <li><Link to="/grid">Grid</Link></li>
          <li><Link to="/converter">Crypto-Converter</Link></li>
          <li><Link to="/transferList">Transfer-List</Link></li>
          <li><Link to="/form">Handle-Form</Link></li>
          <li><Link to="/tab">Costom-Tab</Link></li>
          <li><Link to="/graph">Bar-Graph</Link></li>
          <li><Link to="/comments">Comments</Link></li>

        </ul>
      </nav>
    </header>
  );
};

export default Header;
