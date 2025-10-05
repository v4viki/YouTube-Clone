import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import {
  FaBell, FaUserCircle, FaMicrophone, FaYoutube, FaHome, FaHistory, FaPlay, FaClock, FaThumbsUp, FaFire, FaMusic, FaGamepad, FaNewspaper, FaFilm, FaLaptop, FaSmile, FaGraduationCap, FaFlask, FaDumbbell, FaPlane
} from "react-icons/fa";
import { MdOutlineSubscriptions } from "react-icons/md";
import axios from 'axios';
import "./App.css";
import "./index.css";



const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [videos, setVideos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showCreateMenu, setShowCreateMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const sidebar = document.querySelector(".sidebar");
      const hamburger = document.querySelector(".menu-button");

      if (isMenuOpen && sidebar && !sidebar.contains(event.target) && !hamburger.contains(event.target)) {
        setIsMenuOpen(true);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Fetch videos on component mount
  useEffect(() => {
    fetchVideos("trending");
  }, []);

  useEffect(() => {
    fetchVideos(selectedCategory === "music" ? "trending" : selectedCategory);
  }, [selectedCategory]);

  const fetchVideos = async (query) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
      );

      const fetchedVideos = response.data.items.map(item => ({
        id: item.id.videoId,
        src: `https://www.youtube.com/embed/${item.id.videoId}`,
        title: item.snippet.title,
        channel: item.snippet.channelTitle,
        views: "N/A",
        uploaded: item.snippet.publishedAt,
        isShort: item.snippet.title.length < 20
      }));

      setVideos(fetchedVideos);
    } catch (error) {
      console.error("Error fetching videos: ", error);
    }
  };

  const handleSearch = () => {
    fetchVideos(searchQuery);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const categories = ["All", "Music", "Gaming", "Sports", "News", "Movies", "Tech", "Comedy", "Education", "Science", "Fitness", "Lifestyle", "Travel"];

  const filteredVideos = videos.filter(video =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const longVideos = filteredVideos.filter(video => !video.isShort);
  const shortVideos = filteredVideos.filter(video => video.isShort);

  return (
    <div className="flex bg-[#181818] min-h-screen text-white">
      {/* Sidebar */}
      <div className={`sidebar ${isMenuOpen ? "active" : ""}`}>
        <button
          className="absolute top-2 right-2 text-white text-xl menu-button"
          onClick={() => setIsMenuOpen(false)}
        >
         <AiOutlineMenu className="ml-40"/>
        </button>
        {/* Sidebar content */}
        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-2 p-2 hover:bg-gray-800 rounded cursor-pointer">
            <FaHome />
            <span>Home</span>
          </div>
          <div className="flex items-center space-x-2 p-2 hover:bg-gray-800 rounded cursor-pointer">
            <MdOutlineSubscriptions />
            <span>Subscriptions</span>
          </div>
          <hr className="border-gray-700" />
          <div className="flex items-center space-x-2 p-2 hover:bg-gray-800 rounded cursor-pointer">
            <FaHistory />
            <span>History</span>
          </div>
          <div className="flex items-center space-x-2 p-2 hover:bg-gray-800 rounded cursor-pointer">
            <FaPlay />
            <span>Playlists</span>
          </div>
          <div className="flex items-center space-x-2 p-2 hover:bg-gray-800 rounded cursor-pointer">
            <FaClock />
            <span>Watch Later</span>
          </div>
          <div className="flex items-center space-x-2 p-2 hover:bg-gray-800 rounded cursor-pointer">
            <FaThumbsUp />
            <span>Liked Videos</span>
          </div>
          <hr className="border-gray-700" />
          <div className="flex items-center space-x-2 p-2 hover:bg-gray-800 rounded cursor-pointer">
            <FaFire />
            <span>Trending</span>
          </div>
          <div className="flex items-center space-x-2 p-2 hover:bg-gray-800 rounded cursor-pointer">
            <FaMusic />
            <span>Music</span>
          </div>
          <div className="flex items-center space-x-2 p-2 hover:bg-gray-800 rounded cursor-pointer">
            <FaGamepad />
            <span>Gaming</span>
          </div>
          <div className="flex items-center space-x-2 p-2 hover:bg-gray-800 rounded cursor-pointer">
            <FaNewspaper />
            <span>News</span>
          </div>
          <div className="flex items-center space-x-2 p-2 hover:bg-gray-800 rounded cursor-pointer">
            <FaFilm />
            <span>Movies</span>
          </div>
          <div className="flex items-center space-x-2 p-2 hover:bg-gray-800 rounded cursor-pointer">
            <FaLaptop />
            <span>Tech</span>
          </div>
          <div className="flex items-center space-x-2 p-2 hover:bg-gray-800 rounded cursor-pointer">
            <FaSmile />
            <span>Comedy</span>
          </div>
          <div className="flex items-center space-x-2 p-2 hover:bg-gray-800 rounded cursor-pointer">
            <FaGraduationCap />
            <span>Education</span>
          </div>
          <div className="flex items-center space-x-2 p-2 hover:bg-gray-800 rounded cursor-pointer">
            <FaFlask />
            <span>Science</span>
          </div>
          <div className="flex items-center space-x-2 p-2 hover:bg-gray-800 rounded cursor-pointer">
            <FaDumbbell />
            <span>Fitness</span>
          </div>
          <div className="flex items-center space-x-2 p-2 hover:bg-gray-800 rounded cursor-pointer">
            <FaPlane />
            <span>Travel</span>
          </div>
        </div>
      </div>

      {/* Backdrop for sidebar */}
      {isMenuOpen && (
        <div
          className="backdrop"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      <div className={`content ${isMenuOpen ? "ml-64" : "ml-0"}`}>
        {/* Header Section */}
        <div className="header">
          {/* Left Section: Menu & YouTube Logo */}
          <div className="flex items-center space-x-4">
            <AiOutlineMenu
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="menu-button"
            />
            <img
              src="https://freepnglogo.com/images/all_img/youtube-logo-png-image.png"
              alt="YouTube Logo"
              className="pl-6 w-18  h-8 text-white cursor-pointer" />
          </div>

          {/* Middle Section: Search Bar */}
          <div className="search-container">
            <input
              type="text"
              placeholder="Search videos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={handleSearch}>
              <AiOutlineSearch className="text-white" />
            </button>
            <button
              onClick={() => console.log("Voice search activated")}
            >
              <FaMicrophone className="text-white" />
            </button>
          </div>

          {/* Right Section: Create Button, Bell Icon & Account Icon */}
          <div className="flex items-center space-x-4">
            <button
              className="create-button"
              onClick={() => setShowCreateMenu(!showCreateMenu)}
            >
              + Create
            </button>
            {showCreateMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
                <div className="p-2 hover:bg-gray-200 cursor-pointer">Upload Video</div>
                <div className="p-2 hover:bg-gray-200 cursor-pointer">Go Live</div>
              </div>
            )}
            <FaBell
              className="notification-button"
              onClick={() => setShowNotifications(!showNotifications)}
            />
            
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-64 bg-white text-black rounded shadow-lg">
                <div className="p-2 hover:bg-gray-200 cursor-pointer">No new notifications</div>
              </div>
            )}
            <FaUserCircle
              className="user-button"
              onClick={() => setShowUserMenu(!showUserMenu)}
            />
            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
                <div className="p-2 hover:bg-gray-200 cursor-pointer">Your Channel</div>
                <div className="p-2 hover:bg-gray-200 cursor-pointer">Sign Out</div>
              </div>
            )}
          </div>
        </div>

        {/* Scrollable Category Buttons */}
        <div className="pl-5 flex overflow-x-auto py-2 space-x-4 mb-6">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full cursor-pointer ${selectedCategory === category ? "bg-[#383838]" : "bg-[#202020]"} text-white hover:bg-[#383838]`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Long Videos Section */}
        <div className="video-grid">
          {longVideos.map(video => (
            <div key={video.id} className="video-card">
              <iframe
                src={video.src}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay hidden; clipboard-write; encrypted-media; gyroscope;"
                allowFullScreen
              ></iframe>
              <div className="mt-2">
                <p className="text-white font-semibold">{video.title}</p>
                <p className="text-gray-400 text-sm">{video.channel}</p>
                <p className="text-gray-400 text-xs">
                  {video.views} • {video.uploaded}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Short Videos Section */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2"><FaYoutube className="bg-red-800 size-5"></FaYoutube> Short Videos</h2>
          <div className="video-grid">
            {shortVideos.map(video => (
              <div key={video.id} className="video-card">
                <iframe
                  src={video.src}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay hidden; clipboard-write; encrypted-media; gyroscope;"
                  allowFullScreen
                ></iframe>
                <div className="mt-2">
                  <p className="text-white font-semibold">{video.title}</p>
                  <p className="text-gray-400 text-sm">{video.channel}</p>
                  <p className="text-gray-400 text-xs">
                    {video.views} • {video.uploaded}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
