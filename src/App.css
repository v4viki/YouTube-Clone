/* ========== General Styles ========== */
:root {
  --primary: #121212;   /* Background */
  --secondary: #ffffff; /* Text */
  --sidebar-bg: #181818;
  --card-bg: #202020;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, sans-serif;
  background-color: var(--primary);
  color: var(--secondary);
  overflow-x: hidden; /* Prevent horizontal scroll */
}

.App {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* ========== Header ========== */
.header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: var(--sidebar-bg);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.search-container {
  display: flex;
  align-items: center;
  flex: 1 1 250px;
  max-width: 400px;
  margin-top: 10px;
}

.search-container input {
  flex: 1;
  padding: 8px 12px;
  border: none;
  border-radius: 20px;
  background-color: var(--card-bg);
  color: white;
  outline: none;
}

.search-container button {
  background: none;
  border: none;
  cursor: pointer;
  margin-left: 5px;
}

/* ========== Sidebar ========== */
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  max-width: 80%;
  height: 100vh;
  background-color: var(--sidebar-bg);
  overflow-y: auto;
  padding: 10px;
  transition: transform 0.3s ease-in-out;
  z-index: 1200;
  transform: translateX(-100%);
}

.sidebar.active {
  transform: translateX(0);
}

.sidebar div {
  margin-top: 20px;
  padding: 10px;
  cursor: pointer;
  transition: background 0.3s;
  border-radius: 8px;
}

.sidebar div:hover {
  background-color: #333;
}

/* ========== Hamburger Menu ========== */
.menu-button {
  position: fixed;
  top: 10px;
  left: 10px;
  z-index: 1300;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
}

/* ========== Backdrop ========== */
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  z-index: 1100;
  display: none;
  transition: opacity 0.3s ease-in-out;
}

.backdrop.active {
  display: block;
}

/* ========== Video Grid ========== */
.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 15px;
  padding: 20px;
}

.video-card {
  background-color: var(--card-bg);
  padding: 10px;
  border-radius: 10px;
  overflow: hidden;
}

.video-card iframe {
  width: 100%;
  height: 180px;
  border-radius: 10px;
}

/* ========== Scrollbar Customization ========== */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track { background: #181818; }
::-webkit-scrollbar-thumb { background: #555; border-radius: 10px; }
::-webkit-scrollbar-thumb:hover { background: #888; }

/* ========== Responsive ========== */
@media (max-width: 1024px) {
  .sidebar { width: 220px; }
  .search-container { max-width: 300px; }
}

@media (max-width: 768px) {
  .sidebar { width: 200px; }
  .video-card iframe { height: 160px; }
}

@media (max-width: 480px) {
  .search-container { display: none; }
  .video-grid { grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); }
  .video-card iframe { height: 120px; }
}

/* ========== Prevent overflow ========== */
body, .App, .video-grid, .header {
  max-width: 100%;
  overflow-x: hidden;
}
