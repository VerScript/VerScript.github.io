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
    "id": "lib-xml",
    "name": "Xml",
    "category": "Data & Formats",
    "version": "1.0.0",
    "status": "Loaded Community Package",
    "loadSyntax": "load Xml as xml",
    "summary": "Lightweight XML and HTML DOM parser, node tree builder, and hierarchical query selector.",
    "description": "<code>Xml</code> provides structured document parsing for XML and HTML feeds, configuration files, and web scraping. Features nested sub-libraries <code>Xml.Node</code> and <code>Xml.Query</code> for tree extraction and tag search. Requires explicit loading with <code>load Xml [as xml]</code>.",
    "meta": {
      "static": { "author": "Web & Data WG", "standard": "W3C-XML", "distribution": "packages/Xml.lib.vrs" },
      "dynamic": { "nodesParsed": 0, "architecture": "Sub-Libraries (Xml.Node, Xml.Query)" },
      "thisstatic": { "spec": "XML 1.0" }
    },
    "subLibraries": [
      {
        "name": "Xml.Node",
        "importSyntax": "from Xml import Node  ! or: import Xml.Node as node",
        "desc": "Sub-library for constructing and inspecting XML tag and text nodes.",
        "functions": [
          { "name": "createTag tag attrs children", "params": "tag: str, attrs: arr, children: arr", "returnType": "arr", "desc": "Constructs a tag node descriptor [\"tag\", tag, attrs, children]." },
          { "name": "createText text", "params": "text: str", "returnType": "arr", "desc": "Constructs a raw text node descriptor [\"text\", text, [], []]." },
          { "name": "getTag node", "params": "node: arr", "returnType": "str", "desc": "Returns the tag name string of the target node." },
          { "name": "getChildren node", "params": "node: arr", "returnType": "arr", "desc": "Returns an array of child nodes inside target element." },
          { "name": "isTag node", "params": "node: arr", "returnType": "bool", "desc": "Returns true if node is an element tag node." }
        ]
      },
      {
        "name": "Xml.Query",
        "importSyntax": "from Xml import Query  ! or: import Xml.Query as q",
        "desc": "Sub-library for hierarchical tag query matching and recursive text extraction.",
        "functions": [
          { "name": "findByTag node targetTag", "params": "node: arr, targetTag: str", "returnType": "arr", "desc": "Recursively collects all nodes matching targetTag." },
          { "name": "extractText node", "params": "node: arr", "returnType": "str", "desc": "Recursively concatenates inner text content of node and its descendants." }
        ]
      }
    ],
    "functions": [
      { "name": "parse xmlStr", "params": "xmlStr: str", "returnType": "arr", "desc": "Parses XML/HTML text into an in-memory node hierarchy.", "aliases": "loadXml" },
      { "name": "stringify node", "params": "node: arr", "returnType": "str", "desc": "Serializes an XML node tree back into a formatted XML string.", "aliases": "serialize" },
      { "name": "find node targetTag", "params": "node: arr, targetTag: str", "returnType": "arr", "desc": "Finds all descendant elements matching tag name.", "aliases": "selectTags" },
      { "name": "text node", "params": "node: arr", "returnType": "str", "desc": "Extracts inner text content from element.", "aliases": "textContent" }
    ],
    "codeSnippet": "load Xml as xml\nfrom Xml import Query\n\nset doc: xml.parse(\"<article><title>VerScript Architecture</title><author>Core</author></article>\")\nset titleNode: xml.find(doc, \"title\")[0]\ndisplay \"Title: \" + Query.extractText(titleNode)",
    "interactiveExample": "load Xml as xml\nfrom Xml import Query\n\nset xmlData: \"<config><server><host>127.0.0.1</host><port>8080</port></server></config>\"\nset doc: xml.parse(xmlData)\nset hostNode: xml.find(doc, \"host\")[0]\ndisplay \"Configured Host: \" + Query.extractText(hostNode) ?color=\"green\""
  },
  {
    "id": "lib-sql",
    "name": "Sql",
    "category": "Data & Formats",
    "version": "1.0.0",
    "status": "Loaded Community Package",
    "loadSyntax": "load Sql as sql",
    "summary": "Fluent SQL query generator, parameter sanitization, and in-memory mock table store.",
    "description": "<code>Sql</code> enables type-safe, fluent SQL query construction without string concatenation errors. Houses sub-libraries <code>Sql.Query</code> (fluent builder) and <code>Sql.Table</code> (in-memory relational store). Requires explicit loading with <code>load Sql [as sql]</code>.",
    "meta": {
      "static": { "author": "Database WG", "dialect": "ANSI-SQL", "distribution": "packages/Sql.lib.vrs" },
      "dynamic": { "queriesBuilt": 0, "architecture": "Sub-Libraries (Sql.Query, Sql.Table)" },
      "thisstatic": { "quoting": "Single Quote Sanitization" }
    },
    "subLibraries": [
      {
        "name": "Sql.Query",
        "importSyntax": "from Sql import Query  ! or: import Sql.Query as sq",
        "desc": "Sub-library for declarative fluent query generation.",
        "functions": [
          { "name": "select fields", "params": "fields: arr", "returnType": "arr", "desc": "Initiates query with projection columns." },
          { "name": "from q table", "params": "q: arr, table: str", "returnType": "arr", "desc": "Sets target source table for query." },
          { "name": "where q condition", "params": "q: arr, condition: str", "returnType": "arr", "desc": "Appends WHERE filter predicate to query." },
          { "name": "limit q maxRows", "params": "q: arr, maxRows: num", "returnType": "arr", "desc": "Appends LIMIT ceiling to query." },
          { "name": "build q", "params": "q: arr", "returnType": "str", "desc": "Compiles structured query record into formatted SQL string." }
        ]
      },
      {
        "name": "Sql.Table",
        "importSyntax": "from Sql import Table  ! or: import Sql.Table as tbl",
        "desc": "Sub-library for in-memory mock table storage and record insertion.",
        "functions": [
          { "name": "create name columns", "params": "name: str, columns: arr", "returnType": "arr", "desc": "Allocates table descriptor [name, columns, rows]." },
          { "name": "insert table row", "params": "table: arr, row: arr", "returnType": "bool", "desc": "Appends row tuple to table." },
          { "name": "all table", "params": "table: arr", "returnType": "arr", "desc": "Retrieves all rows in table." },
          { "name": "count table", "params": "table: arr", "returnType": "num", "desc": "Returns row count in table." }
        ]
      }
    ],
    "functions": [
      { "name": "query table cols", "params": "table: str, cols: arr", "returnType": "arr", "desc": "Shorthand for initializing query builder with table and columns." },
      { "name": "sanitize val", "params": "val: any", "returnType": "str", "desc": "Escapes single quotes and formats SQL literals.", "aliases": "escape" },
      { "name": "createTable name cols", "params": "name: str, cols: arr", "returnType": "arr", "desc": "Creates in-memory mock relational table.", "aliases": "table" }
    ],
    "codeSnippet": "load Sql as sql\nimport Sql.Query as sq\n\nset q: sq.select([\"id\", \"email\", \"status\"])\nset q2: sq.from(q, \"users\")\nset q3: sq.where(q2, \"status = 'active'\")\ndisplay \"Query: \" + sq.build(q3)",
    "interactiveExample": "load Sql as sql\nimport Sql.Query as sq\n\nset q: sq.select([\"order_id\", \"amount\", \"created_at\"])\nset q2: sq.from(q, \"orders\")\nset q3: sq.where(q2, \"amount > 100\")\ndisplay \"Generated SQL: \" + sq.build(q3) ?color=\"yellow\""
  },
  {
    "id": "lib-terminalui",
    "name": "TerminalUI",
    "category": "Game & Utilities",
    "version": "1.0.0",
    "status": "Loaded Community Package",
    "loadSyntax": "load TerminalUI as tui",
    "summary": "Console framing, banners, stylized visual boxes, animated spinners, and ASCII progress bars.",
    "description": "<code>TerminalUI</code> provides command-line dashboard styling, status cards, and visual progress indicators for CLI tools and build monitors. Houses sub-libraries <code>TerminalUI.Box</code> and <code>TerminalUI.Bar</code>. Requires explicit loading with <code>load TerminalUI [as tui]</code>.",
    "meta": {
      "static": { "author": "CLI Experience WG", "encoding": "ASCII & UTF-8", "distribution": "packages/TerminalUI.lib.vrs" },
      "dynamic": { "framesRendered": 0, "architecture": "Sub-Libraries (TerminalUI.Box, TerminalUI.Bar)" },
      "thisstatic": { "boxStyle": "Single & Double Line Borders" }
    },
    "subLibraries": [
      {
        "name": "TerminalUI.Box",
        "importSyntax": "from TerminalUI import Box  ! or: import TerminalUI.Box as box",
        "desc": "Sub-library for generating bordered status cards and announcement frames.",
        "functions": [
          { "name": "single text title", "params": "text: str, title: str", "returnType": "str", "desc": "Wraps text in a single-line bordered box with header title." },
          { "name": "double text title", "params": "text: str, title: str", "returnType": "str", "desc": "Wraps text in a double-line bordered box with header title." }
        ]
      },
      {
        "name": "TerminalUI.Bar",
        "importSyntax": "from TerminalUI import Bar  ! or: import TerminalUI.Bar as bar",
        "desc": "Sub-library for visual horizontal percentage progress bars and gauge meters.",
        "functions": [
          { "name": "progress percent width", "params": "percent: num, width: num", "returnType": "str", "desc": "Renders a percentage progress bar [=====    ] 50%." },
          { "name": "meter val min max width", "params": "val: num, min: num, max: num, width: num", "returnType": "str", "desc": "Renders normalized meter bar between bounds." }
        ]
      }
    ],
    "functions": [
      { "name": "banner title subtitle", "params": "title: str, subtitle: str", "returnType": "str", "desc": "Renders high-impact console banner header.", "aliases": "header" },
      { "name": "spinner frameIdx", "params": "frameIdx: num", "returnType": "str", "desc": "Returns cyclic animation spinner character (-, \\, |, /).", "aliases": "tick" },
      { "name": "badge label", "params": "label: str", "returnType": "str", "desc": "Wraps label in bracketed badge [STATUS].", "aliases": "pill" }
    ],
    "codeSnippet": "load TerminalUI as tui\nimport TerminalUI.Box as box\nimport TerminalUI.Bar as bar\n\ndisplay box.single(\"BUILD PIPELINE SUCCESSFUL\", \"STATUS\")\ndisplay bar.progress(85, 20)",
    "interactiveExample": "load TerminalUI as tui\nimport TerminalUI.Bar as bar\n\ndisplay tui.banner(\"VERSCRIPT ARCHITECTURE\", \"Community Package Hub\") ?color=\"cyan\"\ndisplay \"Download Progress: \" + bar.progress(90, 24) ?color=\"green\""
  },
  {
    "id": "lib-archive",
    "name": "Archive",
    "category": "Testing & Concurrency",
    "version": "1.0.0",
    "status": "Loaded Community Package",
    "loadSyntax": "load Archive as arc",
    "summary": "Multi-file packaging archives and semantic versioning parser and comparison utilities.",
    "description": "<code>Archive</code> delivers in-memory archive bundling and semantic version (SemVer) comparison for package distribution. Features sub-libraries <code>Archive.Zip</code> and <code>Archive.Semver</code>. Requires explicit loading with <code>load Archive [as arc]</code>.",
    "meta": {
      "static": { "author": "Package Taskforce", "standard": "SemVer 2.0 & Bundle", "distribution": "packages/Archive.lib.vrs" },
      "dynamic": { "bundlesCreated": 0, "architecture": "Sub-Libraries (Archive.Zip, Archive.Semver)" },
      "thisstatic": { "compression": "In-Memory Stream" }
    },
    "subLibraries": [
      {
        "name": "Archive.Zip",
        "importSyntax": "from Archive import Zip  ! or: import Archive.Zip as zip",
        "desc": "Sub-library for in-memory file packing, extraction, and file cataloging.",
        "functions": [
          { "name": "create", "params": "none", "returnType": "arr", "desc": "Creates empty zip archive record [\\\"zip\\\", [], []]." },
          { "name": "add archive path content", "params": "archive: arr, path: str, content: str", "returnType": "bool", "desc": "Adds virtual file to archive." },
          { "name": "get archive path", "params": "archive: arr, path: str", "returnType": "str", "desc": "Reads content of file inside archive." },
          { "name": "files archive", "params": "archive: arr", "returnType": "arr", "desc": "Returns list of file paths inside archive." }
        ]
      },
      {
        "name": "Archive.Semver",
        "importSyntax": "from Archive import Semver  ! or: import Archive.Semver as sem",
        "desc": "Sub-library for semantic version string parsing and major.minor.patch comparisons.",
        "functions": [
          { "name": "parse verStr", "params": "verStr: str", "returnType": "arr", "desc": "Deconstructs semantic version string into [major, minor, patch] components." },
          { "name": "compare v1 v2", "params": "v1: str, v2: str", "returnType": "num", "desc": "Returns 1 if v1 > v2, -1 if v1 < v2, or 0 if equal." },
          { "name": "isGreater v1 v2", "params": "v1: str, v2: str", "returnType": "bool", "desc": "Returns true if version v1 is strictly newer than v2." }
        ]
      }
    ],
    "functions": [
      { "name": "bundle fileNames fileContents", "params": "fileNames: arr, fileContents: arr", "returnType": "str", "desc": "Bundles multiple files and contents into serialized package string.", "aliases": "pack" },
      { "name": "extract bundleStr", "params": "bundleStr: str", "returnType": "arr", "desc": "Unpacks serialized bundle string into array of [path, content] pairs.", "aliases": "unpack" }
    ],
    "codeSnippet": "load Archive as arc\nfrom Archive import Semver\n\nset newer: Semver.isGreater(\"2.0.0\", \"1.9.9\")\ndisplay \"2.0.0 > 1.9.9: \" + newer",
    "interactiveExample": "load Archive as arc\nfrom Archive import Semver\nfrom Archive import Zip\n\nset z: Zip.create()\nZip.add(z, \"index.vrs\", \"display 'Hello World'\")\ndisplay \"Archive Files: \" + Zip.files(z).join(\", \") ?color=\"cyan\"\ndisplay \"SemVer Check (3.0.0 > 2.5.0): \" + Semver.isGreater(\"3.0.0\", \"2.5.0\") ?color=\"green\""
  },
  {
    "id": "lib-tensor",
    "name": "Tensor",
    "category": "Graphics & 3D",
    "version": "1.0.0",
    "status": "Loaded Community Package",
    "loadSyntax": "load Tensor as tensor",
    "summary": "Vector and matrix linear algebra primitives, activation functions, and neural dot products.",
    "description": "<code>Tensor</code> delivers foundational numerical mathematics for neural networks, game physics vectors, and data transformations. Houses sub-libraries <code>Tensor.Ops</code> and <code>Tensor.Activation</code>. Requires explicit loading with <code>load Tensor [as tensor]</code>.",
    "meta": {
      "static": { "author": "AI & Math WG", "domain": "Linear Algebra & Neural", "distribution": "packages/Tensor.lib.vrs" },
      "dynamic": { "opsExecuted": 0, "architecture": "Sub-Libraries (Tensor.Ops, Tensor.Activation)" },
      "thisstatic": { "precision": "Fixed/Floating Numeric Arrays" }
    },
    "subLibraries": [
      {
        "name": "Tensor.Ops",
        "importSyntax": "from Tensor import Ops  ! or: import Tensor.Ops as ops",
        "desc": "Sub-library for elementwise vector mathematics and vector dot products.",
        "functions": [
          { "name": "add a b", "params": "a: arr, b: arr", "returnType": "arr", "desc": "Computes elementwise addition of two vectors." },
          { "name": "sub a b", "params": "a: arr, b: arr", "returnType": "arr", "desc": "Computes elementwise subtraction of two vectors." },
          { "name": "mul a b", "params": "a: arr, b: arr", "returnType": "arr", "desc": "Computes elementwise multiplication of two vectors." },
          { "name": "dot a b", "params": "a: arr, b: arr", "returnType": "num", "desc": "Computes dot product sum(a[i] * b[i]) of two vectors." },
          { "name": "scale arr factor", "params": "arr: arr, factor: num", "returnType": "arr", "desc": "Multiplies each vector element by scalar factor." }
        ]
      },
      {
        "name": "Tensor.Activation",
        "importSyntax": "from Tensor import Activation  ! or: import Tensor.Activation as act",
        "desc": "Sub-library for neural activation functions and numerical clamping.",
        "functions": [
          { "name": "relu x", "params": "x: num", "returnType": "num", "desc": "Rectified Linear Unit: returns max(0, x)." },
          { "name": "step x", "params": "x: num", "returnType": "num", "desc": "Heaviside step function: returns 1 if x >= 0, else 0." },
          { "name": "clampVal x minVal maxVal", "params": "x: num, minVal: num, maxVal: num", "returnType": "num", "desc": "Constrains value between minVal and maxVal bounds." }
        ]
      }
    ],
    "functions": [
      { "name": "zeros count", "params": "count: num", "returnType": "arr", "desc": "Creates vector filled with count zeros.", "aliases": "zeroVector" },
      { "name": "ones count", "params": "count: num", "returnType": "arr", "desc": "Creates vector filled with count ones.", "aliases": "oneVector" },
      { "name": "dot a b", "params": "a: arr, b: arr", "returnType": "num", "desc": "Computes dot product of two vectors." },
      { "name": "relu x", "params": "x: num", "returnType": "num", "desc": "Applies ReLU non-linear activation." }
    ],
    "codeSnippet": "load Tensor as tensor\nimport Tensor.Ops as ops\nfrom Tensor import Activation\n\nset dot: ops.dot([1, 2, 3], [4, 5, 6])\ndisplay \"Dot Product: \" + dot\ndisplay \"ReLU(-5): \" + Activation.relu(-5)\ndisplay \"ReLU(10): \" + Activation.relu(10)",
    "interactiveExample": "load Tensor as tensor\nimport Tensor.Ops as ops\nfrom Tensor import Activation\n\nset v1: [2, 4, 6]\nset v2: [1, 3, 5]\nset dot: ops.dot(v1, v2)\ndisplay \"Vector Dot Product: \" + dot ?color=\"cyan\"\ndisplay \"ReLU Active: \" + Activation.relu(dot) ?color=\"green\""
  },


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
