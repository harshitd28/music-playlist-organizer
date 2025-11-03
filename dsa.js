// ============================================
// DSA IMPLEMENTATIONS FOR MUSIC PLAYLIST ORGANIZER
// ============================================

// ============================================
// 1. BINARY SEARCH TREE (BST) FOR SONG CATALOG
// ============================================
class TreeNode {
    constructor(song) {
        this.song = song;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
        this.size = 0;
    }

    // Insert a song into BST
    insert(song) {
        this.root = this._insertRecursive(this.root, song);
        this.size++;
    }

    _insertRecursive(node, song) {
        // Base case: Create new node if position found
        if (node === null) {
            return new TreeNode(song);
        }

        // Compare song titles for ordering (lexicographically)
        if (song.title.toLowerCase() < node.song.title.toLowerCase()) {
            node.left = this._insertRecursive(node.left, song);
        } else if (song.title.toLowerCase() > node.song.title.toLowerCase()) {
            node.right = this._insertRecursive(node.right, song);
        }
        // If equal, don't insert (avoid duplicates)

        return node;
    }

    // Search for songs by title
    search(query) {
        const results = [];
        this._searchRecursive(this.root, query.toLowerCase(), results);
        return results;
    }

    _searchRecursive(node, query, results) {
        if (node === null) {
            return;
        }

        // Check if current node matches
        if (node.song.title.toLowerCase().includes(query)) {
            results.push(node.song);
        }

        // Traverse both subtrees
        this._searchRecursive(node.left, query, results);
        this._searchRecursive(node.right, query, results);
    }

    // Get all songs in sorted order (In-order traversal)
    getAllSongs() {
        const songs = [];
        this._inOrderTraversal(this.root, songs);
        return songs;
    }

    _inOrderTraversal(node, songs) {
        if (node !== null) {
            this._inOrderTraversal(node.left, songs);
            songs.push(node.song);
            this._inOrderTraversal(node.right, songs);
        }
    }

    // Calculate tree height
    getHeight() {
        return this._calculateHeight(this.root);
    }

    _calculateHeight(node) {
        if (node === null) {
            return 0;
        }
        const leftHeight = this._calculateHeight(node.left);
        const rightHeight = this._calculateHeight(node.right);
        return 1 + Math.max(leftHeight, rightHeight);
    }

    // Visualize BST structure
    visualize() {
        return this._visualizeRecursive(this.root, 0, []);
    }

    _visualizeRecursive(node, level, output) {
        if (node === null) {
            return output;
        }

        const indent = '  '.repeat(level);
        const nodeInfo = `${indent}${level === 0 ? 'ROOT' : level % 2 === 1 ? 'L:' : 'R:'} "${node.song.title}"`;
        output.push(nodeInfo);

        this._visualizeRecursive(node.left, level + 1, output);
        this._visualizeRecursive(node.right, level + 1, output);

        return output;
    }
}

// ============================================
// 2. CIRCULAR QUEUE FOR PLAYLIST PLAYBACK
// ============================================
class CircularQueue {
    constructor(capacity = 100) {
        this.capacity = capacity;
        this.queue = new Array(capacity);
        this.front = 0;
        this.rear = -1;
        this.size = 0;
        this.currentIndex = -1; // Track currently playing song
    }

    // Add song to queue
    enqueue(song) {
        if (this.isFull()) {
            throw new Error('Queue is full');
        }
        
        this.rear = (this.rear + 1) % this.capacity;
        this.queue[this.rear] = song;
        this.size++;
        
        // If this is the first song, set it as current
        if (this.currentIndex === -1) {
            this.currentIndex = this.rear;
        }
    }

    // Remove song from queue
    dequeue() {
        if (this.isEmpty()) {
            throw new Error('Queue is empty');
        }
        
        const song = this.queue[this.front];
        this.queue[this.front] = null;
        this.front = (this.front + 1) % this.capacity;
        this.size--;
        
        return song;
    }

    // Get current song
    getCurrent() {
        if (this.isEmpty()) {
            return null;
        }
        return this.queue[this.currentIndex];
    }

    // Move to next song (circular)
    next() {
        if (this.isEmpty()) {
            return null;
        }
        
        this.currentIndex = (this.currentIndex + 1) % this.capacity;
        
        // Skip to next non-null element
        while (this.queue[this.currentIndex] === null && this.size > 0) {
            this.currentIndex = (this.currentIndex + 1) % this.capacity;
        }
        
        return this.queue[this.currentIndex];
    }

    // Move to previous song (circular)
    previous() {
        if (this.isEmpty()) {
            return null;
        }
        
        this.currentIndex = (this.currentIndex - 1 + this.capacity) % this.capacity;
        
        // Skip to previous non-null element
        while (this.queue[this.currentIndex] === null && this.size > 0) {
            this.currentIndex = (this.currentIndex - 1 + this.capacity) % this.capacity;
        }
        
        return this.queue[this.currentIndex];
    }

    // Check if queue is empty
    isEmpty() {
        return this.size === 0;
    }

    // Check if queue is full
    isFull() {
        return this.size === this.capacity;
    }

    // Get all songs in queue
    getAllSongs() {
        const songs = [];
        for (let i = 0; i < this.capacity; i++) {
            if (this.queue[i] !== null && this.queue[i] !== undefined) {
                songs.push({
                    song: this.queue[i],
                    index: i,
                    isCurrent: i === this.currentIndex
                });
            }
        }
        return songs;
    }

    // Clear the queue
    clear() {
        this.queue = new Array(this.capacity);
        this.front = 0;
        this.rear = -1;
        this.size = 0;
        this.currentIndex = -1;
    }

    // Visualize queue structure
    visualize() {
        const visualization = [];
        visualization.push('Circular Queue Structure:');
        visualization.push(`Front: ${this.front}, Rear: ${this.rear}, Size: ${this.size}`);
        visualization.push(`Current Index: ${this.currentIndex}`);
        
        const songs = this.getAllSongs();
        if (songs.length === 0) {
            visualization.push('Queue is empty');
        } else {
            songs.forEach(({ song, index, isCurrent }) => {
                const marker = isCurrent ? '▶ ' : '  ';
                visualization.push(`${marker}[${index}] ${song.title} - ${song.artist}`);
            });
        }
        
        return visualization;
    }
}

// ============================================
// 3. PRIORITY QUEUE (HEAP) FOR RECOMMENDATIONS
// ============================================
class MaxHeap {
    constructor() {
        this.heap = [];
    }

    // Get parent index
    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    // Get left child index
    getLeftChildIndex(index) {
        return 2 * index + 1;
    }

    // Get right child index
    getRightChildIndex(index) {
        return 2 * index + 2;
    }

    // Swap two elements
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    // Insert a song into heap (priority based on rating)
    insert(song) {
        this.heap.push(song);
        this.heapifyUp();
    }

    // Heapify up to maintain heap property
    heapifyUp() {
        let index = this.heap.length - 1;
        
        while (index > 0) {
            const parentIndex = this.getParentIndex(index);
            
            if (this.heap[parentIndex].rating >= this.heap[index].rating) {
                break;
            }
            
            this.swap(parentIndex, index);
            index = parentIndex;
        }
    }

    // Extract max (get highest rated song)
    extractMax() {
        if (this.heap.length === 0) {
            return null;
        }
        
        if (this.heap.length === 1) {
            return this.heap.pop();
        }
        
        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        
        return max;
    }

    // Heapify down to maintain heap property
    heapifyDown() {
        let index = 0;
        
        while (this.getLeftChildIndex(index) < this.heap.length) {
            let largerChildIndex = this.getLeftChildIndex(index);
            const rightChildIndex = this.getRightChildIndex(index);
            
            if (rightChildIndex < this.heap.length && 
                this.heap[rightChildIndex].rating > this.heap[largerChildIndex].rating) {
                largerChildIndex = rightChildIndex;
            }
            
            if (this.heap[index].rating >= this.heap[largerChildIndex].rating) {
                break;
            }
            
            this.swap(index, largerChildIndex);
            index = largerChildIndex;
        }
    }

    // Get top N recommendations
    getTopRecommendations(n = 5) {
        const tempHeap = [...this.heap];
        const recommendations = [];
        
        while (recommendations.length < n && tempHeap.length > 0) {
            // Find max in temp heap
            let maxIndex = 0;
            for (let i = 1; i < tempHeap.length; i++) {
                if (tempHeap[i].rating > tempHeap[maxIndex].rating) {
                    maxIndex = i;
                }
            }
            recommendations.push(tempHeap[maxIndex]);
            tempHeap.splice(maxIndex, 1);
        }
        
        return recommendations;
    }

    // Visualize heap structure
    visualize() {
        if (this.heap.length === 0) {
            return ['Heap is empty'];
        }
        
        const visualization = [];
        visualization.push('Heap Structure (Priority Queue):');
        
        // Display heap as tree-like structure
        this._visualizeRecursive(0, 0, visualization);
        
        return visualization;
    }

    _visualizeRecursive(index, level, output) {
        if (index >= this.heap.length) {
            return;
        }
        
        const indent = '  '.repeat(level);
        const song = this.heap[index];
        const nodeInfo = `${indent}${level === 0 ? 'ROOT' : ''} Rating: ${song.rating} | "${song.title}"`;
        output.push(nodeInfo);
        
        const leftChild = this.getLeftChildIndex(index);
        const rightChild = this.getRightChildIndex(index);
        
        if (leftChild < this.heap.length) {
            output.push(`${indent}├─ Left:`);
            this._visualizeRecursive(leftChild, level + 1, output);
        }
        
        if (rightChild < this.heap.length) {
            output.push(`${indent}└─ Right:`);
            this._visualizeRecursive(rightChild, level + 1, output);
        }
    }
}

// ============================================
// 4. SORTING ALGORITHM - HEAP SORT (for shuffle)
// ============================================
function heapSort(songs) {
    const sorted = [...songs];
    
    // Build max heap
    const n = sorted.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(sorted, n, i);
    }
    
    // Extract elements from heap one by one
    for (let i = n - 1; i > 0; i--) {
        [sorted[0], sorted[i]] = [sorted[i], sorted[0]];
        heapify(sorted, i, 0);
    }
    
    return sorted;
}

function heapify(arr, n, i) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    
    if (left < n && arr[left].rating > arr[largest].rating) {
        largest = left;
    }
    
    if (right < n && arr[right].rating > arr[largest].rating) {
        largest = right;
    }
    
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest);
    }
}

// Export all classes for use in app.js
window.DSA = {
    BinarySearchTree,
    CircularQueue,
    MaxHeap,
    heapSort
};

