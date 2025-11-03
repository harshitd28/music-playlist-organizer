# 🎵 Music Playlist Organizer - DSA Project

A comprehensive music playlist management system demonstrating **Data Structures and Algorithms (DSA)** in a working prototype. This project showcases three fundamental data structures with practical applications.

## 📋 Project Overview

This project is a **working web application** that allows users to:
- ✅ Add and search songs in a catalog
- ✅ Create and manage playlists
- ✅ Play, pause, skip songs in a circular manner
- ✅ Get personalized recommendations
- ✅ Visualize DSA operations in real-time

## 🎯 DSA Algorithms Implemented

### 1. **Binary Search Tree (BST)** 🌳
**Purpose:** Efficient song catalog management and searching

**Operations Implemented:**
- `insert()` - Add songs to catalog (O(log n) average case)
- `search()` - Find songs by title (O(log n) average case)
- `getAllSongs()` - In-order traversal for sorted output
- `getHeight()` - Calculate tree height

**Use Case:** 
- Songs are stored in a BST sorted alphabetically by title
- Search functionality uses tree traversal to find matching songs
- Maintains sorted order for efficient retrieval

**Complexity:**
- Insert: O(log n) average, O(n) worst case (unbalanced tree)
- Search: O(log n) average, O(n) worst case
- Space: O(n)

---

### 2. **Circular Queue** 🔄
**Purpose:** Playlist playback management

**Operations Implemented:**
- `enqueue()` - Add songs to playlist
- `dequeue()` - Remove songs from playlist
- `next()` - Move to next song (circular)
- `previous()` - Move to previous song (circular)
- `getCurrent()` - Get currently playing song
- `isEmpty()` - Check if queue is empty
- `clear()` - Empty the entire queue

**Use Case:**
- Playlist uses circular queue for seamless looping
- Next/Previous buttons navigate circularly through songs
- No need to restart when reaching the end of playlist

**Complexity:**
- All operations: O(1)
- Space: O(n) where n is capacity

**Special Feature:**
- Automatically handles wrapping around when reaching queue boundaries
- Tracks current song position separately from front/rear pointers

---

### 3. **Priority Queue (Max Heap)** ⭐
**Purpose:** Generate top-rated song recommendations

**Operations Implemented:**
- `insert()` - Add songs with priority based on rating
- `extractMax()` - Get highest rated song
- `getTopRecommendations(n)` - Get top N recommendations
- `heapifyUp()` - Maintain heap property when inserting
- `heapifyDown()` - Maintain heap property when extracting

**Use Case:**
- Songs are prioritized by their rating (1-10 scale)
- Recommendations always show highest-rated songs first
- Efficient sorting and prioritization

**Complexity:**
- Insert: O(log n)
- ExtractMax: O(log n)
- getTopRecommendations: O(k log n) where k is number of recommendations
- Space: O(n)

---

### 4. **Heap Sort** 🔀
**Purpose:** Shuffle playlist by rating

**Operations:**
- `heapSort()` - Sort songs by rating using heap
- Builds max heap and extracts elements in sorted order

**Use Case:**
- Shuffle feature organizes songs from highest to lowest rating
- Demonstrates in-place sorting algorithm

**Complexity:**
- Time: O(n log n)
- Space: O(1) (in-place sorting)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone or download the project**
   ```bash
   cd Music\ Playlist\ Organizer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the application**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - The application will automatically open at `http://localhost:3000`
   - Or manually navigate to the provided URL

### Usage

#### Adding Songs
1. Fill in the song details:
   - Song Title
   - Artist Name
   - Duration (in seconds)
   - Rating (1-10 scale)
2. Click "Add Song"
3. The song is automatically added to:
   - Song catalog (BST)
   - Current playlist (Circular Queue)
   - Recommendations (Max Heap)

#### Searching Songs
1. Type in the search box
2. Matching songs from the BST catalog will appear
3. Click any result to add it to the playlist

#### Managing Playlist
1. **Shuffle**: Click "Shuffle" to sort playlist by rating using heap sort
2. **Clear**: Remove all songs from playlist
3. View visualizations in the algorithm panel

#### Playing Songs
1. Click ▶️ to start/pause playback
2. Click ⏭️ to play next song (circular)
3. Click ⏮️ to play previous song (circular)

#### Recommendations
- Top 5 highest-rated songs automatically displayed
- Updates when new songs are added

---

## 📊 Algorithm Visualization

The application includes **real-time visualization** of DSA operations:
- See when songs are added to different structures
- Track search operations in BST
- Monitor circular queue navigation
- Watch heap operations during shuffle

Visualizations appear in the center panel's "Algorithm Visualization" section.

---

## 🏗️ Project Structure

```
Music Playlist Organizer/
├── index.html          # Main HTML structure
├── styles.css          # Modern UI styling
├── dsa.js             # DSA implementations (BST, Queue, Heap)
├── app.js             # Application logic and UI interactions
├── package.json       # Project configuration
└── README.md          # This file
```

---

## 💡 Key Learning Outcomes

This project demonstrates:

1. **Real-world DSA applications**
   - How data structures solve practical problems
   - Trade-offs between different algorithms

2. **Time and Space Complexity**
   - Understanding Big-O notation in action
   - Optimal algorithm selection

3. **Data Structure Integration**
   - Multiple structures working together
   - Efficient data management strategies

4. **Algorithm Visualization**
   - Visual understanding of operations
   - Debugging and comprehension aid

---

## 🎨 Features

### User Interface
- 🎨 **Modern Premium Design** with gradient colors
- 📱 **Mobile-Responsive** layout
- 🌙 **Dark Theme** optimized for extended use
- ✨ **Smooth Animations** and transitions
- 📊 **Real-time Statistics** display

### Functionality
- ✅ Full CRUD operations on songs
- 🔍 Fast search with BST
- 🔄 Seamless circular playback
- ⭐ Smart recommendations
- 📈 Live statistics tracking
- 🎬 Visual algorithm execution

---

## 🔬 Technical Details

### Data Structures Comparison

| Structure | Use Case | Insert | Search | Extract Max | Space |
|-----------|----------|--------|--------|-------------|-------|
| **BST** | Song catalog | O(log n) | O(log n) | - | O(n) |
| **Circular Queue** | Playlist | O(1) | - | O(1) | O(n) |
| **Max Heap** | Recommendations | O(log n) | - | O(log n) | O(n) |

### Sample Songs Included
- Bohemian Rhapsody - Queen (Rating: 10)
- Hotel California - Eagles (Rating: 9)
- Stairway to Heaven - Led Zeppelin (Rating: 10)
- Imagine - John Lennon (Rating: 8)
- Billie Jean - Michael Jackson (Rating: 9)
- Like a Rolling Stone - Bob Dylan (Rating: 8)
- Smells Like Teen Spirit - Nirvana (Rating: 9)

---

## 📝 Future Enhancements

Potential additions for extended learning:
- [ ] AVL Tree for self-balancing BST
- [ ] Graph algorithms for music recommendation engine
- [ ] Hash table for O(1) artist lookup
- [ ] Trie for autocomplete search
- [ ] Merge sort comparison
- [ ] Dijkstra's algorithm for playlist generation

---

## 🎓 Educational Value

This project serves as an excellent resource for:
- **Students** learning DSA
- **Developers** understanding algorithm applications
- **Educators** demonstrating concepts visually
- **Interview preparation** for DSA questions

---

## 📄 License

MIT License - Feel free to use this project for learning and education.

---

## 👨‍💻 Author

Created as a DSA project demonstrating practical implementations of fundamental data structures and algorithms.

---

## 🙏 Acknowledgments

- Algorithms and data structures based on standard computer science textbooks
- UI inspired by modern music streaming applications
- Educational resources from various DSA courses

---

**Built with ❤️ for DSA Learning**

*"The best way to learn algorithms is to implement them in a real project!"*

