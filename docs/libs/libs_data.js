// ═══════════════════════════════════════════════════════════════════
// VerScript Community Packages & Ecosystem Extension Directory
// 
// NOTICE: All 20 Core Standard Libraries (Strings, Math, Arrays,
// Json, Crypto, Time, Fs, Path, Env, Regex, Log, Benchmark,
// Validate, Color, Console, Matrix, Mock, Http, Stats, Assert)
// have officially graduated into FIRST-CLASS NATIVE ENGINE BUILT-INS!
//
// This portal now serves as the Community Package Registry, Extension
// Authoring Specification, and Ecosystem Library Directory.
// ═══════════════════════════════════════════════════════════════════

const CORE_LIBRARIES = [
  {
    "id": "lib-virtualfs",
    "name": "VirtualFS",
    "category": "File & Storage",
    "version": "1.0.0",
    "status": "Loaded Community Package",
    "loadSyntax": "load VirtualFS as vfs",
    "summary": "In-memory hierarchical virtual filesystem with nested sub-libraries (VirtualFS.Path, VirtualFS.Node), isolated sandboxing, file CRUD, directory listing, and state persistence.",
    "description": "<code>VirtualFS</code> is the premier VerScript community package for in-memory file trees and sandboxed virtual environments. It demonstrates VerScript's <strong>Sub-Library Architecture</strong> (nested libraries inside libraries), selective imports (<code>from VirtualFS import Path</code>, <code>import VirtualFS.Path as p</code>), and stateful dynamic routines. Requires explicit loading with <code>load VirtualFS [as vfs]</code>.",
    "meta": {
      "static": {
        "author": "VerScript Community Ecosystem",
        "standard": "VRS-VFS-2026",
        "distribution": "packages/VirtualFS.lib.vrs"
      },
      "dynamic": {
        "activeMount": "/",
        "architecture": "Sub-Libraries (VirtualFS.Path, VirtualFS.Node)"
      },
      "thisstatic": {
        "storage": "In-Memory RAM Tree"
      }
    },
    "subLibraries": [
      {
        "name": "VirtualFS.Path",
        "importSyntax": "from VirtualFS import Path  ! or: import VirtualFS.Path as p",
        "desc": "Sub-library for path normalization, concatenation, directory name resolution, extension extraction, and basename calculation.",
        "functions": [
          { "name": "join a b", "params": "a: str, b: str", "returnType": "str", "desc": "Joins two path segments with standard forward slashes.", "aliases": "combine" },
          { "name": "normalize path", "params": "path: str", "returnType": "str", "desc": "Resolves redundant trailing slashes and ensures standard root prefix.", "aliases": "cleanPath" },
          { "name": "dirname path", "params": "path: str", "returnType": "str", "desc": "Returns directory path of target file or folder.", "aliases": "parentDir" },
          { "name": "basename path", "params": "path: str", "returnType": "str", "desc": "Returns filename or final path component.", "aliases": "fileName" },
          { "name": "extname path", "params": "path: str", "returnType": "str", "desc": "Returns file extension (including dot) or empty string.", "aliases": "fileExt" }
        ]
      },
      {
        "name": "VirtualFS.Node",
        "importSyntax": "from VirtualFS import Node  ! or: import VirtualFS.Node as n",
        "desc": "Sub-library for constructing file and directory AST/inode node records.",
        "functions": [
          { "name": "createFile name content", "params": "name: str, content: str", "returnType": "arr", "desc": "Constructs a file descriptor node [\"file\", name, content].", "aliases": "mkFileNode" },
          { "name": "createDir name", "params": "name: str", "returnType": "arr", "desc": "Constructs a directory descriptor node [\"dir\", name, []].", "aliases": "mkDirNode" },
          { "name": "isDirNode node", "params": "node: arr", "returnType": "bool", "desc": "Returns true if node represents a directory node.", "aliases": "checkDir" }
        ]
      }
    ],
    "functions": [
      { "name": "pwd", "params": "none", "returnType": "str", "desc": "Returns the current working directory inside the virtual filesystem.", "aliases": "cwd" },
      { "name": "cd target", "params": "target: str", "returnType": "str", "desc": "Changes working directory to target (supports '..' and absolute/relative paths).", "aliases": "chdir" },
      { "name": "mkdir path", "params": "path: str", "returnType": "bool", "desc": "Creates directory recursively in virtual filesystem tree.", "aliases": "makeDirectory" },
      { "name": "writeFile path content", "params": "path: str, content: str", "returnType": "bool", "desc": "Writes content string to path, auto-creating parent directories.", "aliases": "write" },
      { "name": "readFile path", "params": "path: str", "returnType": "str", "desc": "Reads and returns content string of virtual file. Throws FileError if absent.", "aliases": "read" },
      { "name": "appendFile path text", "params": "path: str, text: str", "returnType": "bool", "desc": "Appends text to existing virtual file, creating if nonexistent.", "aliases": "append" },
      { "name": "deleteFile path", "params": "path: str", "returnType": "bool", "desc": "Deletes file or directory from virtual file system.", "aliases": "rm" },
      { "name": "ls path", "params": "path: str", "returnType": "arr", "desc": "Returns child file and folder names inside target directory.", "aliases": "list" },
      { "name": "exists path", "params": "path: str", "returnType": "bool", "desc": "Returns true if virtual file or directory exists at path.", "aliases": "has" },
      { "name": "isDir path", "params": "path: str", "returnType": "bool", "desc": "Returns true if path exists and is a directory.", "aliases": "directoryExists" },
      { "name": "isFile path", "params": "path: str", "returnType": "bool", "desc": "Returns true if path exists and is a regular file.", "aliases": "fileExists" },
      { "name": "size path", "params": "path: str", "returnType": "num", "desc": "Returns character length of virtual file.", "aliases": "fileLength" },
      { "name": "exportJson", "params": "none", "returnType": "str", "desc": "Serializes virtual filesystem state into persistent snapshot string.", "aliases": "snapshot" },
      { "name": "importJson snapshot", "params": "snapshot: str", "returnType": "bool", "desc": "Restores virtual filesystem tree from snapshot string.", "aliases": "restore" },
      { "name": "reset", "params": "none", "returnType": "bool", "desc": "Resets virtual filesystem to clean root directory with no files.", "aliases": "clear" }
    ],
    "codeSnippet": "! Loading VirtualFS with alias and using sub-library\nload VirtualFS as vfs\nfrom VirtualFS import Path\n\nvfs.mkdir(\"/etc/nginx\")\nvfs.writeFile(\"/etc/nginx/nginx.conf\", \"worker_processes 4;\")\nset conf: vfs.readFile(\"/etc/nginx/nginx.conf\")\ndisplay \"Read Config: \" + conf\n\nset joined: Path.join(\"/var/log\", \"vfs.log\")\ndisplay \"Joined Path: \" + joined",
    "interactiveExample": "! Interactive VirtualFS Demo\nload VirtualFS as vfs\n\nvfs.mkdir(\"/var/www\")\nvfs.writeFile(\"/var/www/index.html\", \"<h1>Welcome to VerScript VFS!</h1>\")\n\ndisplay \"PWD: \" + vfs.pwd() ?color=\"cyan\"\ndisplay \"File Exists: \" + vfs.exists(\"/var/www/index.html\") ?color=\"green\"\ndisplay \"Content: \" + vfs.readFile(\"/var/www/index.html\") ?color=\"yellow\""
  },

  {
    "id": "lib-package-spec",
    "name": "CommunityPackageSpec",
    "category": "Authoring & Specs",
    "version": "1.0.0",
    "status": "Specification",
    "loadSyntax": "! Architecture Specification for VerScript Packages",
    "summary": "Official specification for authoring, distributing, and naming modular VerScript packages (.lib.vrs).",
    "description": "VerScript community libraries are self-contained modular files ending with <code>.lib.vrs</code>. Unlike built-in native modules which are compiled directly into the C VM engine, community packages are distributed as plain source files and loaded dynamically on-demand using <code>load \"PackageName\"</code> or <code>import \"PackageName\"</code>.",
    "meta": {
      "static": {
        "author": "VerScript Ecosystem Committee",
        "standard": "VRS-PKG-2026",
        "distribution": "community"
      },
      "dynamic": {
        "activeRegistry": "VerScript-Org"
      },
      "thisstatic": {
        "specVersion": "1.0.0"
      }
    },
    "functions": [
      {
        "name": "manifest",
        "params": "none",
        "returnType": "arr",
        "desc": "Returns specification compliance keys required in package meta blocks.",
        "aliases": "specKeys"
      },
      {
        "name": "resolve candidateName",
        "params": "candidateName: str",
        "returnType": "str",
        "desc": "Resolves local directory paths and relative paths for package loading.",
        "aliases": "resolvePath"
      }
    ],
    "codeSnippet": "! Example: Structure of a Community VerScript Library\nlib CommunityStarter\n  const:\n    VERSION: \"1.0.0\"\n    AUTHOR: \"Community Contributor\"\n  dynamic:\n    def func greet user\n      reply \"Hello, \" + user + \" from Community Package!\"\n\ndisplay CommunityStarter.greet(\"Architect\")",
    "interactiveExample": "lib DemoSpec\n  const:\n    NAME: \"DemoSpec\"\n    KIND: \"Community\"\n  dynamic:\n    def func check\n      reply \"Package specification valid!\"\n\ndisplay DemoSpec.check()"
  },
  {
    "id": "lib-vector3d",
    "name": "Vector3D",
    "category": "Graphics & 3D",
    "version": "1.2.0",
    "status": "Community Package",
    "loadSyntax": "load \"Vector3D\"",
    "summary": "3D spatial geometry, dot and cross products, vector distance, magnitude, and normalization.",
    "description": "The <code>Vector3D</code> community package provides lightweight, allocation-free 3D vector calculations for game engines, physics simulations, and computer graphics applications written in VerScript.",
    "meta": {
      "static": {
        "author": "Graphics WG",
        "domain": "Spatial Math"
      },
      "dynamic": {
        "opsComputed": 0
      },
      "thisstatic": {
        "precision": "64-bit float"
      }
    },
    "functions": [
      {
        "name": "dot v1 v2",
        "params": "v1: arr, v2: arr",
        "returnType": "num",
        "desc": "Computes the scalar dot product of two 3D vectors [x, y, z].",
        "aliases": "scalarProduct"
      },
      {
        "name": "cross v1 v2",
        "params": "v1: arr, v2: arr",
        "returnType": "arr",
        "desc": "Computes the 3D cross product vector perpendicular to both inputs.",
        "aliases": "vectorProduct"
      },
      {
        "name": "magnitude v",
        "params": "v: arr",
        "returnType": "num",
        "desc": "Calculates the Euclidean length/norm of a 3D vector.",
        "aliases": "length, norm"
      },
      {
        "name": "dist v1 v2",
        "params": "v1: arr, v2: arr",
        "returnType": "num",
        "desc": "Calculates the straight-line Euclidean distance between two spatial points.",
        "aliases": "distance"
      }
    ],
    "codeSnippet": "lib Vector3D\n  dynamic:\n    def func dot a b\n      reply (a[0] * b[0]) + (a[1] * b[1]) + (a[2] * b[2])\n    def func dist a b\n      set dx: a[0] - b[0]\n      set dy: a[1] - b[1]\n      set dz: a[2] - b[2]\n      reply sqrt((dx * dx) + (dy * dy) + (dz * dz))\n\nset p1: [10, 0, 0]\nset p2: [10, 20, 0]\ndisplay \"Distance: \" + Vector3D.dist(p1, p2)",
    "interactiveExample": "lib Vector3D\n  dynamic:\n    def func dot a b\n      reply (a[0] * b[0]) + (a[1] * b[1]) + (a[2] * b[2])\n\nset v1: [1, 2, 3]\nset v2: [4, 5, 6]\ndisplay \"Vector Dot Product: \" + Vector3D.dot(v1, v2) ?color=\"cyan\""
  },
  {
    "id": "lib-csv-parser",
    "name": "CsvParser",
    "category": "Data & Formats",
    "version": "1.0.4",
    "status": "Community Package",
    "loadSyntax": "load \"CsvParser\"",
    "summary": "Fast tabular CSV parsing, delimiter splitting, header extraction, and record serialization.",
    "description": "A high-performance CSV processing library written for extracting structured datasets, handling quoted fields, splitting records into arrays of tokens, and formatting matrices back into standard CSV text.",
    "meta": {
      "static": {
        "author": "Data Platform Team",
        "format": "RFC 4180"
      },
      "dynamic": {
        "parsedRows": 0
      },
      "thisstatic": {
        "standardDelimiter": ","
      }
    },
    "functions": [
      {
        "name": "parseLine rowText delimiter",
        "params": "rowText: str, delimiter: str",
        "returnType": "arr",
        "desc": "Splits a single CSV row into constituent token strings.",
        "aliases": "splitRow"
      },
      {
        "name": "formatRow items delimiter",
        "params": "items: arr, delimiter: str",
        "returnType": "str",
        "desc": "Serializes an array of values into a single delimited row string.",
        "aliases": "joinRow"
      }
    ],
    "codeSnippet": "lib CsvParser\n  dynamic:\n    def func parseLine line delimiter\n      reply line.split(delimiter)\n    def func formatRow fields delimiter\n      reply fields.join(delimiter)\n\nset line: \"Alice,Engineer,San Francisco,140000\"\nset tokens: CsvParser.parseLine(line, \",\")\ndisplay \"Name: \" + tokens[0] + \" | Role: \" + tokens[1]",
    "interactiveExample": "lib CsvParser\n  dynamic:\n    def func parseLine line delimiter\n      reply line.split(delimiter)\n\nset row: \"ID-101|SensorAlpha|Optimal|98.6\"\nset cols: CsvParser.parseLine(row, \"|\")\ndisplay \"Decoded Status: \" + cols[2] ?color=\"green\""
  },
  {
    "id": "lib-ascii-art",
    "name": "AsciiArt",
    "category": "Game & Utilities",
    "version": "1.1.0",
    "status": "Community Package",
    "loadSyntax": "load \"AsciiArt\"",
    "summary": "Terminal banners, stylized text headers, framed announcement boxes, and progress bars.",
    "description": "The <code>AsciiArt</code> package delivers rich command-line presentation tools for terminal applications, build logs, and console dashboards. Formats text inside double-line borders, produces stylized headers, and generates horizontal progress bars.",
    "meta": {
      "static": {
        "author": "CLI Tools WG",
        "encoding": "UTF-8 & ASCII"
      },
      "dynamic": {
        "bannersPrinted": 0
      },
      "thisstatic": {
        "boxStyle": "double"
      }
    },
    "functions": [
      {
        "name": "box text title",
        "params": "text: str, title: str",
        "returnType": "str",
        "desc": "Renders text wrapped inside an elegant framed box.",
        "aliases": "frame"
      },
      {
        "name": "progressBar percent width",
        "params": "percent: num, width: num",
        "returnType": "str",
        "desc": "Generates a textual progress bar string with brackets and fill characters.",
        "aliases": "progress"
      }
    ],
    "codeSnippet": "lib AsciiArt\n  dynamic:\n    def func box text\n      set border: \"=\" * (text.length() + 4)\n      reply border + \"\\n| \" + text + \" |\\n\" + border\n\ndisplay AsciiArt.box(\"VERSCRIPT NATIVE ENGINE ONLINE\") ?color=\"cyan\"",
    "interactiveExample": "lib AsciiArt\n  dynamic:\n    def func banner title\n      set bar: \"========================================\"\n      reply bar + \"\\n  \" + title + \"\\n\" + bar\n\ndisplay AsciiArt.banner(\"COMMUNITY PACKAGE SYSTEM\") ?color=\"purple\""
  },
  {
    "id": "lib-game-utils",
    "name": "GameUtils",
    "category": "Game & Utilities",
    "version": "1.0.2",
    "status": "Community Package",
    "loadSyntax": "load \"GameUtils\"",
    "summary": "2D Axis-Aligned Bounding Box (AABB) collision detection, velocity clamping, and grid stepping.",
    "description": "Essential primitives for game developers building 2D arcade games, simulations, and grid engines in VerScript. Includes rectangle overlap tests, position wrap-around, and distance checks.",
    "meta": {
      "static": {
        "author": "GameDev Community",
        "target": "2D Engines"
      },
      "dynamic": {
        "collisionsTested": 0
      },
      "thisstatic": {
        "engine": "AABB 2D"
      }
    },
    "functions": [
      {
        "name": "checkAABB r1 r2",
        "params": "r1: arr, r2: arr",
        "returnType": "bool",
        "desc": "Returns true if two rectangles [x, y, width, height] overlap.",
        "aliases": "intersects, collides"
      },
      {
        "name": "wrapCoord val min max",
        "params": "val: num, min: num, max: num",
        "returnType": "num",
        "desc": "Wraps coordinate around screen boundary (toroidal space).",
        "aliases": "wrap"
      }
    ],
    "codeSnippet": "lib GameUtils\n  dynamic:\n    def func checkAABB r1 r2\n      set xOverlap: (r1[0] < (r2[0] + r2[2])) & ((r1[0] + r1[2]) > r2[0])\n      set yOverlap: (r1[1] < (r2[1] + r2[3])) & ((r1[1] + r1[3]) > r2[1])\n      reply xOverlap & yOverlap\n\nset player: [10, 10, 32, 32]\nset enemy: [20, 20, 32, 32]\ndisplay \"Collision: \" + GameUtils.checkAABB(player, enemy)",
    "interactiveExample": "lib GameUtils\n  dynamic:\n    def func checkAABB r1 r2\n      set xOverlap: (r1[0] < (r2[0] + r2[2])) & ((r1[0] + r1[2]) > r2[0])\n      set yOverlap: (r1[1] < (r2[1] + r2[3])) & ((r1[1] + r1[3]) > r2[1])\n      reply xOverlap & yOverlap\n\nset box1: [0, 0, 10, 10]\nset box2: [5, 5, 10, 10]\nif GameUtils.checkAABB(box1, box2) then\n  display \"HIT: Overlap Detected!\" ?color=\"red\"\nelse\n  display \"CLEAR: No Collision\" ?color=\"green\""
  },
  {
    "id": "lib-sql-builder",
    "name": "SqlBuilder",
    "category": "Data & Formats",
    "version": "1.0.1",
    "status": "Community Package",
    "loadSyntax": "load \"SqlBuilder\"",
    "summary": "Fluent declarative SQL query builder with table projection, WHERE filters, and LIMIT clauses.",
    "description": "Construct sanitized SQL query strings programmatically without fragile string concatenations. Supports SELECT projections, dynamic WHERE constraints, ORDER BY clauses, and parameterized queries.",
    "meta": {
      "static": {
        "author": "Backend WG",
        "dialect": "ANSI SQL"
      },
      "dynamic": {
        "queriesBuilt": 0
      },
      "thisstatic": {
        "quoting": "standard"
      }
    },
    "functions": [
      {
        "name": "select table fields",
        "params": "table: str, fields: arr",
        "returnType": "str",
        "desc": "Builds a standard SELECT statement string.",
        "aliases": "querySelect"
      },
      {
        "name": "where clause query",
        "params": "clause: str, query: str",
        "returnType": "str",
        "desc": "Appends a WHERE filter condition onto a base query string.",
        "aliases": "filter"
      }
    ],
    "codeSnippet": "lib SqlBuilder\n  dynamic:\n    def func select table cols\n      reply \"SELECT \" + cols.join(\", \") + \" FROM \" + table\n    def func where query condition\n      reply query + \" WHERE \" + condition\n\nset q: SqlBuilder.select(\"users\", [\"id\", \"username\", \"email\"])\nset finalQ: SqlBuilder.where(q, \"active = 1\")\ndisplay finalQ",
    "interactiveExample": "lib SqlBuilder\n  dynamic:\n    def func select table cols\n      reply \"SELECT \" + cols.join(\", \") + \" FROM \" + table\n\nset query: SqlBuilder.select(\"audit_logs\", [\"timestamp\", \"action\", \"user_id\"])\ndisplay \"Generated Query: \" + query ?color=\"yellow\""
  },
  {
    "id": "lib-async-queue",
    "name": "AsyncQueue",
    "category": "Testing & Concurrency",
    "version": "1.0.0",
    "status": "Community Package",
    "loadSyntax": "load \"AsyncQueue\"",
    "summary": "In-memory task queues, priority task scheduling, and batch worker dispatchers.",
    "description": "A lightweight task queue abstraction constructed on top of VerScript FIFO channels. Facilitates decoupling asynchronous worker producers from consumers with backpressure management.",
    "meta": {
      "static": {
        "author": "Concurrency Taskforce",
        "engine": "Channel-backed"
      },
      "dynamic": {
        "enqueuedTasks": 0
      },
      "thisstatic": {
        "maxDepth": 1024
      }
    },
    "functions": [
      {
        "name": "enqueue items val",
        "params": "items: arr, val: any",
        "returnType": "num",
        "desc": "Appends a task payload onto the queue array.",
        "aliases": "pushTask"
      },
      {
        "name": "dequeue items",
        "params": "items: arr",
        "returnType": "any",
        "desc": "Pops and returns the oldest task payload from the queue.",
        "aliases": "nextTask"
      }
    ],
    "codeSnippet": "lib AsyncQueue\n  dynamic:\n    def func enqueue q item\n      reply q.push(item)\n    def func dequeue q\n      reply q.pop()\n\nset tasks: []\nAsyncQueue.enqueue(tasks, \"ProcessImageJob\")\nAsyncQueue.enqueue(tasks, \"SendEmailJob\")\ndisplay \"Queue size: \" + tasks.length()",
    "interactiveExample": "lib AsyncQueue\n  dynamic:\n    def func enqueue q item\n      reply q.push(item)\n\nset workQueue: []\nAsyncQueue.enqueue(workQueue, \"ComputeMetrics\")\nAsyncQueue.enqueue(workQueue, \"PersistAudit\")\ndisplay \"Pending Tasks: \" + workQueue.join(\" -> \") ?color=\"cyan\""
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CORE_LIBRARIES };
}
