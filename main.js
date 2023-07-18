import './style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = /*html*/`

<canvas id="canvas-image-blending"></canvas>
  <nav>
    <div class="sidebar-top">
      <span class="shrink-btn">
        <i class='bx bx-chevron-left'></i>
      </span>
      <img src="./img/logo.png" class="logo" alt="">
      <h3 class="hide">Gudia</h3>
    </div>

    <div class="search">
      <i class='bx bx-search'></i>
      <input type="text" class="hide" placeholder="Quick Search ...">
    </div>

    <div class="sidebar-links">
      <ul>
        <div class="active-tab"></div>
        <li class="tooltip-element" data-tooltip="0">
          <a href="#" class="active" data-active="0">
            <div class="icon">
              <i class='bx bx-tachometer'></i>
              <i class='bx bxs-tachometer'></i>
            </div>
            <span class="link hide">Dashboard</span>
          </a>
        </li>
        <li class="tooltip-element" data-tooltip="1">
          <a href="#" data-active="1">
            <div class="icon">
              <i class='bx bx-folder'></i>
              <i class='bx bxs-folder'></i>
            </div>
            <span class="link hide">Projects</span>
          </a>
        </li>
        <li class="tooltip-element" data-tooltip="2">
          <a hrefL	I	G="#" data-active="2">
            <div class="icon">
              <i class='bx bx-message-square-detail'></i>
              <i class='bx bxs-message-square-detail'></i>
            </div>
            <span class="link hide">Messages</span>
          </a>
        </li>
        <li class="tooltip-element" data-tooltip="3">
          <a href="#" data-active="3">
            <div class="icon">
              <i class='bx bx-bar-chart-square'></i>
              <i class='bx bxs-bar-chart-square'></i>
            </div>
            <span class="link hide">Analytics</span>
          </a>
        </li>
        <div class="tooltip">
          <span class="show">Dashboard</span>
          <span>Projects</span>
          <span>Messages</span>
          <span>Analytics</span>
        </div>
      </ul>

      <h4 class="hide">Shortcuts</h4>

      <ul>
        <li class="tooltip-element" data-tooltip="0">
          <a href="#" data-active="4">
            <div class="icon">
              <i class='bx bx-notepad'></i>
              <i class='bx bxs-notepad'></i>
            </div>
            <span class="link hide">Tasks</span>
          </a>
        </li>
        <li class="tooltip-element" data-tooltip="1">
          <a href="#" data-active="5">
            <div class="icon">
              <i class='bx bx-help-circle'></i>
              <i class='bx bxs-help-circle'></i>
            </div>
            <span class="link hide">Help</span>
          </a>
        </li>
        <li class="tooltip-element" data-tooltip="2">
          <a href="#" data-active="6">
            <div class="icon">
              <i class='bx bx-cog'></i>
              <i class='bx bxs-cog'></i>
            </div>
            <span class="link hide">Settings</span>
          </a>
        </li>
        <div class="tooltip">
          <script src="https://cdnjs.cloudflare.com/ajax/libs/granim/2.0.0/granim.min.js"
            integrity="sha512-CmlPTWm5+a1Gt2YSNk2rGZVvbH3Zge6imS7M4/vrhC8d+A1RcehmLxWMqUdv8aEu7pwfTo74EtnrR+8Cf8KdCA=="
            crossorigin="anonymous" referrerpolicy="no-referrer"></script>
          <span class="show">Tasks</span>
          <span>Help</span>
          <span>Settings</span>
        </div>
      </ul>
    </div>

    <div class="sidebar-footer">
      <a href="#" class="account tooltip-element" data-tooltip="0">
        <i class='bx bx-user'></i>
      </a>
      <div class="admin-user tooltip-element" data-tooltip="1">
        <div class="admin-profile hide">
          <script src="https://cdnjs.cloudflare.com/ajax/libs/granim/2.0.0/granim.min.js"
            integrity="sha512-CmlPTWm5+a1Gt2YSNk2rGZVvbH3Zge6imS7M4/vrhC8d+A1RcehmLxWMqUdv8aEu7pwfTo74EtnrR+8Cf8KdCA=="
            crossorigin="anonymous" referrerpolicy="no-referrer"></script>
          <img src="./img/face-1.png" alt="">
          <div class="admin-info">
            <h3>Muster</h3>
            <h5>Admin</h5>
          </div>
        </div>
        <a href="#" class="log-out">
          <i class='bx bx-log-out'></i>
        </a>
      </div>
      <div class="tooltip">
        <span class="show">Salar-DCi</span>
        <span>Logout</span>
      </div>
    </div>
  </nav>
  <main>
    <h1 class="teyping">
      <span>L</span>
      <span>I</span>
      <span>G</span>
      <span>H</span>
      <span>T</span>
      <span>I</span>
      <span>N</span>
      <span>G</span>
    </h1>
    <p class="text">
      Coming Soon...
    </p>
    <p class="copyright">
      &copy; 2023-24 - <span>DCI-Salar</span> All Rights Reserved.
    </p>
  </main>
  <section>
    <button class="chatbot-toggler">
      <span class="material-symbols-rounded">mode_comment</span>
      <span class="material-symbols-outlined">close</span>
    </button>
    <div class="chatbot">
      <header>
        <h2>Chatbot</h2>
        <span class="close-btn material-symbols-outlined">close</span>
      </header>
      <ul class="chatbox">
        <li class="chat incoming">
          <span class="material-symbols-outlined">smart_toy</span>
          <p>Hi there 👋<br>How can I help you today?</p>
        </li>
      </ul>
      <div class="chat-input">
        <textarea placeholder="Enter a message..." spellcheck="false" required></textarea>
        <span id="send-btn" class="material-symbols-rounded">send</span>
      </div>
    </div>
  </section>
`
setupCounter(document.querySelector('#counter'))
