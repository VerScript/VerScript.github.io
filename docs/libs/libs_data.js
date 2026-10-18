// ═══════════════════════════════════════════════════════════════════
// VerScript Community Libraries & Extension Packages Dataset
// ═══════════════════════════════════════════════════════════════════

const CORE_LIBRARIES = [
  {
    "id": "lib-xml",
    "name": "Xml",
    "category": "Data & Formats",
    "version": "1.0.0",
    "status": "Loaded Community Package",
    "loadSyntax": "load Xml as xml",
    "summary": "Beginner-friendly DOM markup parser with nested sub-libraries for inspecting nodes, attributes, and tags.",
    "description": "<code>Xml</code> makes working with XML documents easy and intuitive. Instead of wrestling with complex regular expressions, you can parse XML text into a structured tree and use sub-libraries <code>Xml.Node</code> and <code>Xml.Query</code> to search for tags and read attributes with simple, clean functions. Requires explicit loading with <code>load Xml [as xml]</code>.",
    "beginnerGuide": {
      "analogy": "Think of an XML document like a set of nested storage boxes with name labels. The outer <team> tag is a big box, and inside are smaller boxes like <member> and <role>. The Xml package lets you open any box, read the note inside, or inspect tags glued to the side (called attributes) without having to write tricky search patterns yourself.",
      "whatItDoes": "Parses XML strings into readable node objects, allows direct tag querying, and provides helper functions to read attributes like id='101' and inner text.",
      "fastTrack": [
        {
          "step": "1. Load Package",
          "desc": "Type <code>load Xml as xml</code> at the top of your program."
        },
        {
          "step": "2. Import Sub-Libraries",
          "desc": "Use <code>from Xml import Query</code> or <code>import Xml.Node as node</code>."
        },
        {
          "step": "3. Parse & Read",
          "desc": "Call <code>set doc: xml.parse(...)</code> then <code>Query.textOf(doc, 'tag')</code> to extract values!"
        }
      ],
      "proTip": "Use <code>Query.textOf(doc, 'tag')</code> whenever you just want the string inside a tag! It automatically searches the tree and returns the inner text.",
      "gotcha": "Remember that every opened tag must have a matching closing tag (e.g. <user> must close with </user>). If a tag is unclosed, the parser will treat everything following it as part of that tag."
    },
    "meta": {
      "static": {
        "author": "Web Tools WG",
        "standard": "XML 1.0 Subsets",
        "distribution": "packages/Xml.lib.vrs"
      },
      "dynamic": {
        "parseCount": 0,
        "architecture": "Sub-Libraries (Xml.Node, Xml.Query)"
      },
      "thisstatic": {
        "parserEngine": "Recursive Descendant DOM"
      }
    },
    "subLibraries": [
      {
        "name": "Xml.Node",
        "importSyntax": "from Xml import Node  ! or: import Xml.Node as node",
        "desc": "Sub-library for inspecting individual XML nodes: read node tag names, inner text, and tag attributes.",
        "functions": [
          {
            "name": "tag node",
            "params": "node: arr",
            "returnType": "str",
            "desc": "Returns the tag name of the node (e.g., 'user')."
          },
          {
            "name": "text node",
            "params": "node: arr",
            "returnType": "str",
            "desc": "Returns the raw inner text content inside the node."
          },
          {
            "name": "attr node key",
            "params": "node: arr, key: str",
            "returnType": "str",
            "desc": "Retrieves the value of a specific attribute (e.g., role='admin')."
          },
          {
            "name": "children node",
            "params": "node: arr",
            "returnType": "arr",
            "desc": "Returns a list of all child node objects nested inside this node."
          }
        ]
      },
      {
        "name": "Xml.Query",
        "importSyntax": "from Xml import Query  ! or: import Xml.Query as q",
        "desc": "Sub-library for searching the XML tree: find elements by tag name and directly retrieve values.",
        "functions": [
          {
            "name": "find root tag",
            "params": "root: arr, tag: str",
            "returnType": "arr",
            "desc": "Recursively searches the XML tree and returns the first matching node."
          },
          {
            "name": "textOf root tag",
            "params": "root: arr, tag: str",
            "returnType": "str",
            "desc": "Finds the first node matching tag and immediately returns its text content."
          }
        ]
      }
    ],
    "functions": [
      {
        "name": "parse xmlStr",
        "params": "xmlStr: str",
        "returnType": "arr",
        "desc": "Parses an XML string into a root node object.",
        "aliases": "fromXml"
      },
      {
        "name": "find root tag",
        "params": "root: arr, tag: str",
        "returnType": "arr",
        "desc": "Alias for Xml.Query.find."
      },
      {
        "name": "textOf root tag",
        "params": "root: arr, tag: str",
        "returnType": "str",
        "desc": "Alias for Xml.Query.textOf."
      }
    ],
    "codeBlocks": [
      {
        "id": "cb_xml_quickstart",
        "title": "1. Quick Start: 60-Second Hello World",
        "desc": "Parse a basic XML greeting string and print the inner message directly with Query.textOf.",
        "code": "load Xml as xml\nfrom Xml import Query\n\n! 1. Parse an XML string into a document tree\nset doc: xml.parse(\"<greeting><msg>Welcome to VerScript!</msg></greeting>\")\n\n! 2. Extract text directly using Query.textOf\nset message: Query.textOf(doc, \"msg\")\ndisplay \"Extracted Greeting: \" + message ?color=\"cyan\""
      },
      {
        "id": "cb_xml_sublibs",
        "title": "2. Exploring Sub-Libraries: Nodes & Attributes",
        "desc": "Learn how Xml.Node inspects attributes (like port='8080') while Xml.Query navigates elements.",
        "code": "load Xml as xml\nimport Xml.Node as node\nimport Xml.Query as q\n\nset xmlData: \"<server env='production' port='8080'><host>api.verscript.org</host></server>\"\nset doc: xml.parse(xmlData)\n\n! Read attributes from the root node\nset environment: node.attr(doc, \"env\")\nset portNumber: node.attr(doc, \"port\")\nset hostName: q.textOf(doc, \"host\")\n\ndisplay \"Target Host:        \" + hostName ?color=\"cyan\"\ndisplay \"Port:               \" + portNumber ?color=\"yellow\"\ndisplay \"Environment Tier:   [\" + environment + \"]\" ?color=\"green\""
      },
      {
        "id": "cb_xml_project",
        "title": "3. Practical Mini-Project: Team Directory Reader",
        "desc": "A realistic example showing how to inspect nested nodes and display a styled member card.",
        "code": "load Xml as xml\nfrom Xml import Node\nfrom Xml import Query\n\nset usersXml: \"<team><member id='101' role='Lead Architect'><name>Ada Lovelace</name><status>Active</status></member></team>\"\nset root: xml.parse(usersXml)\n\nset memberNode: Query.find(root, \"member\")\nset memberName: Query.textOf(memberNode, \"name\")\nset memberRole: Node.attr(memberNode, \"role\")\nset memberStatus: Query.textOf(memberNode, \"status\")\n\ndisplay \"====================================\" ?color=\"magenta\"\ndisplay \"       TEAM MEMBER PROFILE          \" ?color=\"magenta\"\ndisplay \"====================================\" ?color=\"magenta\"\ndisplay \"Name:   \" + memberName ?color=\"cyan\"\ndisplay \"Role:   \" + memberRole ?color=\"yellow\"\ndisplay \"Status: \" + memberStatus ?color=\"green\""
      }
    ],
    "interactiveExample": "load Xml as xml\nfrom Xml import Query\nimport Xml.Node as node\n\nset data: \"<app name='VerScript'><author status='Verified'>Community</author><version>2.0.0</version></app>\"\nset root: xml.parse(data)\n\ndisplay \"Application: \" + node.attr(root, \"name\") ?color=\"cyan\"\ndisplay \"Author:      \" + Query.textOf(root, \"author\") ?color=\"yellow\"\ndisplay \"Version:     \" + Query.textOf(root, \"version\") ?color=\"green\""
  },

  {
    "id": "lib-sql",
    "name": "Sql",
    "category": "Data & Formats",
    "version": "1.0.0",
    "status": "Loaded Community Package",
    "loadSyntax": "load Sql as sql",
    "summary": "Fluent SQL query constructor and in-memory mock tables with nested sub-libraries Sql.Query and Sql.Table.",
    "description": "<code>Sql</code> makes assembling database queries foolproof and safe. Instead of manually stitching together error-prone SQL strings, you can snap queries together step-by-step using <code>Sql.Query</code>, sanitize user input, and simulate lightweight database tables in memory with <code>Sql.Table</code>. Requires explicit loading with <code>load Sql [as sql]</code>.",
    "beginnerGuide": {
      "analogy": "Writing raw SQL strings by hand can be messy—forgetting a space or comma can cause syntax errors. Think of Sql like a set of building blocks for database queries. You snap on a .select(), snap on a .from(), snap on a .where(), and it neatly builds the clean, safe SQL statement for you!",
      "whatItDoes": "Constructs SQL strings using a chained builder pattern, sanitizes untrusted user inputs, and maintains in-memory table records with row insertion and counting.",
      "fastTrack": [
        {
          "step": "1. Load Package",
          "desc": "Type <code>load Sql as sql</code> to make SQL tools available."
        },
        {
          "step": "2. Import Sub-Libraries",
          "desc": "Use <code>from Sql import Query</code> or <code>import Sql.Table as tbl</code>."
        },
        {
          "step": "3. Build & Print",
          "desc": "Call <code>Query.select()</code>, chain your clauses, and call <code>Query.build(q)</code>!"
        }
      ],
      "proTip": "Always use <code>sql.sanitize(userInput)</code> before adding user search terms into your queries! This escapes quotes and guards against SQL injection.",
      "gotcha": "In VerScript, query objects are immutable records. When you call <code>Query.where(q, 'active = 1')</code>, be sure to store the result back into your variable: <code>set q: Query.where(q, 'active = 1')</code>."
    },
    "meta": {
      "static": {
        "author": "Database Taskforce",
        "standard": "ANSI SQL-92",
        "distribution": "packages/Sql.lib.vrs"
      },
      "dynamic": {
        "queriesBuilt": 0,
        "architecture": "Sub-Libraries (Sql.Query, Sql.Table)"
      },
      "thisstatic": {
        "dialect": "Universal ANSI"
      }
    },
    "subLibraries": [
      {
        "name": "Sql.Query",
        "importSyntax": "from Sql import Query  ! or: import Sql.Query as q",
        "desc": "Sub-library for fluent, step-by-step SQL statement construction.",
        "functions": [
          {
            "name": "select columns",
            "params": "columns: str",
            "returnType": "arr",
            "desc": "Initializes a query with the specified SELECT column list."
          },
          {
            "name": "from query table",
            "params": "query: arr, table: str",
            "returnType": "arr",
            "desc": "Attaches a target table name to the query."
          },
          {
            "name": "where query condition",
            "params": "query: arr, condition: str",
            "returnType": "arr",
            "desc": "Appends a WHERE filter clause to the query."
          },
          {
            "name": "limit query count",
            "params": "query: arr, count: num",
            "returnType": "arr",
            "desc": "Restricts maximum rows returned with a LIMIT clause."
          },
          {
            "name": "build query",
            "params": "query: arr",
            "returnType": "str",
            "desc": "Compiles all clauses into a formatted, ready-to-run SQL string."
          }
        ]
      },
      {
        "name": "Sql.Table",
        "importSyntax": "from Sql import Table  ! or: import Sql.Table as tbl",
        "desc": "Sub-library for creating and querying lightweight in-memory database tables.",
        "functions": [
          {
            "name": "create name columns",
            "params": "name: str, columns: arr",
            "returnType": "arr",
            "desc": "Creates a new in-memory table schema."
          },
          {
            "name": "name table",
            "params": "table: arr",
            "returnType": "str",
            "desc": "Returns the name of the table."
          },
          {
            "name": "insert table row",
            "params": "table: arr, row: arr",
            "returnType": "bool",
            "desc": "Appends a new data row to the table."
          },
          {
            "name": "count table",
            "params": "table: arr",
            "returnType": "num",
            "desc": "Returns the total number of rows currently in the table."
          }
        ]
      }
    ],
    "functions": [
      {
        "name": "sanitize input",
        "params": "input: str",
        "returnType": "str",
        "desc": "Escapes single quotes to prevent SQL injection vulnerabilities.",
        "aliases": "clean"
      },
      {
        "name": "quickSelect table columns",
        "params": "table: str, columns: str",
        "returnType": "str",
        "desc": "Constructs a simple SELECT query in one shot."
      }
    ],
    "codeBlocks": [
      {
        "id": "cb_sql_quickstart",
        "title": "1. Quick Start: Assembling a SQL Statement",
        "desc": "Build a clean, formatted SQL query with SELECT, FROM, and WHERE clauses in just 4 steps.",
        "code": "load Sql as sql\nfrom Sql import Query\n\n! 1. Initialize query with columns to select\nset q: Query.select(\"id, username, email\")\n\n! 2. Attach table and filter conditions\nset q: Query.from(q, \"users\")\nset q: Query.where(q, \"active = 1\")\nset q: Query.limit(q, 10)\n\n! 3. Compile and print final SQL\nset sqlStr: Query.build(q)\ndisplay \"Generated Query:\" ?color=\"cyan\"\ndisplay sqlStr ?color=\"green\""
      },
      {
        "id": "cb_sql_sublibs",
        "title": "2. Exploring Sub-Libraries: In-Memory Mock Tables",
        "desc": "Create an in-memory table with Sql.Table, insert test rows, and check the record count.",
        "code": "load Sql as sql\nimport Sql.Table as tbl\n\n! Create a mock database table in memory\nset developers: tbl.create(\"developers\", [\"id\", \"name\", \"skill\"])\n\n! Insert records into table\ntbl.insert(developers, [1, \"Guido\", \"Compiler Design\"])\ntbl.insert(developers, [2, \"Grace\", \"Systems Programming\"])\ntbl.insert(developers, [3, \"Dennis\", \"Kernel Engineering\"])\n\ndisplay \"Table Name:  \" + tbl.name(developers) ?color=\"yellow\"\ndisplay \"Total Rows:  \" + tbl.count(developers) ?color=\"green\""
      },
      {
        "id": "cb_sql_project",
        "title": "3. Practical Mini-Project: Safe Product Search Engine",
        "desc": "Sanitize user-provided search terms and build a safe query with price constraints.",
        "code": "load Sql as sql\nfrom Sql import Query\n\n! Simulate user input from a search form\nset userInput: \"Gaming Laptop\"\nset cleanKeyword: sql.sanitize(userInput)\n\nset q: Query.select(\"sku, title, price, in_stock\")\nset q: Query.from(q, \"inventory\")\nset q: Query.where(q, \"category = '\" + cleanKeyword + \"' AND price < 1500\")\nset q: Query.limit(q, 5)\n\ndisplay \"====================================\" ?color=\"magenta\"\ndisplay \"   SAFE DATABASE SEARCH QUERY       \" ?color=\"magenta\"\ndisplay \"====================================\" ?color=\"magenta\"\ndisplay Query.build(q) ?color=\"cyan\""
      }
    ],
    "interactiveExample": "load Sql as sql\nfrom Sql import Query\n\nset q: Query.select(\"name, balance\")\nset q: Query.from(q, \"accounts\")\nset q: Query.where(q, \"balance > 5000\")\nset q: Query.limit(q, 5)\n\ndisplay \"Built SQL: \" + Query.build(q) ?color=\"green\""
  },

  {
    "id": "lib-terminalui",
    "name": "TerminalUI",
    "category": "Game & Utilities",
    "version": "1.0.0",
    "status": "Loaded Community Package",
    "loadSyntax": "load TerminalUI as tui",
    "summary": "Terminal UI styling suite featuring sub-libraries TerminalUI.Box for border frames and TerminalUI.Bar for progress meters.",
    "description": "<code>TerminalUI</code> transforms standard command-line output into polished, visual dashboards. Use <code>TerminalUI.Box</code> to wrap text in single or double-lined frames, <code>TerminalUI.Bar</code> to display percentage progress indicators, and top-level helpers for banners and status badges. Requires explicit loading with <code>load TerminalUI [as tui]</code>.",
    "beginnerGuide": {
      "analogy": "Imagine transforming a plain, boring command line into a sleek, graphical cockpit. TerminalUI gives you instant border framing, visual progress bars, loading spinners, and colored notification badges without needing complex terminal control libraries.",
      "whatItDoes": "Generates aligned text boxes, percentage-based progress bars, metric gauges, and visual badges for console tools and interactive scripts.",
      "fastTrack": [
        {
          "step": "1. Load Package",
          "desc": "Type <code>load TerminalUI as tui</code> at the start of your script."
        },
        {
          "step": "2. Import Sub-Libraries",
          "desc": "Use <code>from TerminalUI import Box</code> and <code>from TerminalUI import Bar</code>."
        },
        {
          "step": "3. Draw & Display",
          "desc": "Call <code>Box.single('Hello')</code> or <code>Bar.progress(75, 20)</code> and print with <code>display</code>!"
        }
      ],
      "proTip": "Combine <code>tui.banner()</code> with VerScript's ANSI styling tags (like <code>?color=\"cyan\"</code>) to make your CLI tools look professional.",
      "gotcha": "In VerScript, strings cannot be multiplied with numeric *. Use string repetition with <code>.repeat(n)</code> instead. TerminalUI does this automatically for you!"
    },
    "meta": {
      "static": {
        "author": "CLI Experience WG",
        "standard": "ANSI / UTF-8 Frames",
        "distribution": "packages/TerminalUI.lib.vrs"
      },
      "dynamic": {
        "framesRendered": 0,
        "architecture": "Sub-Libraries (TerminalUI.Box, TerminalUI.Bar)"
      },
      "thisstatic": {
        "frameStyle": "Double & Single Line Border"
      }
    },
    "subLibraries": [
      {
        "name": "TerminalUI.Box",
        "importSyntax": "from TerminalUI import Box  ! or: import TerminalUI.Box as box",
        "desc": "Sub-library for generating aligned text framing cards and borders.",
        "functions": [
          {
            "name": "single text title",
            "params": "text: str, title: str",
            "returnType": "str",
            "desc": "Wraps text in a single-lined rectangular border frame (+-+)."
          },
          {
            "name": "double text title",
            "params": "text: str, title: str",
            "returnType": "str",
            "desc": "Wraps text in a prominent double-lined border frame (#=#)."
          }
        ]
      },
      {
        "name": "TerminalUI.Bar",
        "importSyntax": "from TerminalUI import Bar  ! or: import TerminalUI.Bar as bar",
        "desc": "Sub-library for rendering visual progress bars and fraction meters.",
        "functions": [
          {
            "name": "progress percent width",
            "params": "percent: num, width: num",
            "returnType": "str",
            "desc": "Renders an ASCII progress bar [========  ] with percentage label."
          },
          {
            "name": "meter current max width",
            "params": "current: num, max: num, width: num",
            "returnType": "str",
            "desc": "Renders a fraction gauge [####----] showing current/max value."
          }
        ]
      }
    ],
    "functions": [
      {
        "name": "banner text subtitle",
        "params": "text: str, subtitle: str",
        "returnType": "str",
        "desc": "Generates a bold full-width terminal header banner.",
        "aliases": "header"
      },
      {
        "name": "badge label",
        "params": "label: str",
        "returnType": "str",
        "desc": "Wraps a label in bracketed badge format [STATUS].",
        "aliases": "pill"
      }
    ],
    "codeBlocks": [
      {
        "id": "cb_tui_quickstart",
        "title": "1. Quick Start: Progress Bars & Status Badges",
        "desc": "Display a clean status badge and a visual 75% progress bar in under 4 lines of code.",
        "code": "load TerminalUI as tui\nimport TerminalUI.Bar as bar\n\ndisplay tui.badge(\"SUCCESS\") + \" Asset compilation complete\" ?color=\"green\"\ndisplay \"Download Progress: \" + bar.progress(75, 20) ?color=\"cyan\"\ndisplay \"Memory Usage:      \" + bar.meter(42, 100, 20) ?color=\"yellow\""
      },
      {
        "id": "cb_tui_sublibs",
        "title": "2. Exploring Sub-Libraries: Framed Boxes",
        "desc": "Compare single-lined vs double-lined status frames using TerminalUI.Box.",
        "code": "load TerminalUI as tui\nfrom TerminalUI import Box\n\n! Create a single-lined notification card\ndisplay Box.single(\"SERVER STARTUP: PORT 3000\", \"INFO\") ?color=\"cyan\"\n\n! Create a prominent double-lined status card\ndisplay Box.double(\"DATABASE BACKUP SUCCESSFUL\", \"STATUS\") ?color=\"green\""
      },
      {
        "id": "cb_tui_project",
        "title": "3. Practical Mini-Project: Deployment Dashboard",
        "desc": "Build a multi-step CLI deployment tracker with banners, cards, and step progress.",
        "code": "load TerminalUI as tui\nfrom TerminalUI import Box\nfrom TerminalUI import Bar\n\ndisplay tui.banner(\"VERSCRIPT DEPLOY ENGINE\", \"v2.0 Cloud Runtime\") ?color=\"magenta\"\ndisplay Box.single(\"Target: production-us-east-1\", \"DEPLOY\") ?color=\"yellow\"\n\ndisplay \"Step 1/3: Compiling AST Bytecode  \" + Bar.progress(100, 16) ?color=\"green\"\ndisplay \"Step 2/3: Uploading Distribution \" + Bar.progress(85, 16) ?color=\"cyan\"\ndisplay \"Step 3/3: Running Health Checks   \" + Bar.progress(40, 16) ?color=\"yellow\"\n\ndisplay \"\n\" + tui.badge(\"LIVE\") + \" Service responding in 12ms\" ?color=\"green\""
      }
    ],
    "interactiveExample": "load TerminalUI as tui\nfrom TerminalUI import Box\nfrom TerminalUI import Bar\n\ndisplay tui.banner(\"VERSCRIPT RUNTIME\", \"Community Packages\") ?color=\"cyan\"\ndisplay Box.single(\"All Systems Operational\", \"HEALTH\") ?color=\"green\"\ndisplay \"Optimization: \" + Bar.progress(90, 24) ?color=\"yellow\""
  },

  {
    "id": "lib-archive",
    "name": "Archive",
    "category": "Testing & Concurrency",
    "version": "1.0.0",
    "status": "Loaded Community Package",
    "loadSyntax": "load Archive as arc",
    "summary": "Multi-file packaging archives and semantic versioning parser with sub-libraries Archive.Zip and Archive.Semver.",
    "description": "<code>Archive</code> delivers in-memory archive bundling and semantic version (SemVer) comparison for package distribution. Features sub-libraries <code>Archive.Zip</code> for bundling virtual files and <code>Archive.Semver</code> for version comparisons. Requires explicit loading with <code>load Archive [as arc]</code>.",
    "beginnerGuide": {
      "analogy": "Think of Archive as a digital shipping crate. It packages multiple text files together into one compact bundle that you can save or send over a network. It also includes a smart version inspector (Archive.Semver) to check whether an update is newer (e.g. 2.0.1 vs 1.9.8).",
      "whatItDoes": "Packs multiple files into an in-memory zip archive, unpacks them on demand, and parses SemVer strings for greater/lesser version checks.",
      "fastTrack": [
        {
          "step": "1. Load Package",
          "desc": "Type <code>load Archive as arc</code> to enable archive tools."
        },
        {
          "step": "2. Import Sub-Libraries",
          "desc": "Use <code>from Archive import Zip</code> and <code>from Archive import Semver</code>."
        },
        {
          "step": "3. Pack & Check",
          "desc": "Create an archive with <code>Zip.create()</code> and check versions with <code>Semver.isGreater()</code>!"
        }
      ],
      "proTip": "Use <code>Semver.isGreater('2.1.0', '2.0.9')</code> before installing packages to guarantee you never downgrade a dependency by accident.",
      "gotcha": "Semantic version strings should follow major.minor.patch format (e.g. 1.2.3). Make sure not to pass extra words or letters directly to Semver.compare."
    },
    "meta": {
      "static": {
        "author": "Package Taskforce",
        "standard": "SemVer 2.0 & Bundle",
        "distribution": "packages/Archive.lib.vrs"
      },
      "dynamic": {
        "bundlesCreated": 0,
        "architecture": "Sub-Libraries (Archive.Zip, Archive.Semver)"
      },
      "thisstatic": {
        "compression": "In-Memory Stream"
      }
    },
    "subLibraries": [
      {
        "name": "Archive.Zip",
        "importSyntax": "from Archive import Zip  ! or: import Archive.Zip as zip",
        "desc": "Sub-library for in-memory file packing, extraction, and file cataloging.",
        "functions": [
          {
            "name": "create",
            "params": "none",
            "returnType": "arr",
            "desc": "Creates an empty in-memory zip archive record [\"zip\", [], []]."
          },
          {
            "name": "add archive path content",
            "params": "archive: arr, path: str, content: str",
            "returnType": "bool",
            "desc": "Adds a virtual file into the archive."
          },
          {
            "name": "get archive path",
            "params": "archive: arr, path: str",
            "returnType": "str",
            "desc": "Reads and returns the content of a file inside the archive."
          },
          {
            "name": "files archive",
            "params": "archive: arr",
            "returnType": "arr",
            "desc": "Returns a list of all file paths stored in the archive."
          }
        ]
      },
      {
        "name": "Archive.Semver",
        "importSyntax": "from Archive import Semver  ! or: import Archive.Semver as sem",
        "desc": "Sub-library for semantic version string parsing and major.minor.patch comparisons.",
        "functions": [
          {
            "name": "parse verStr",
            "params": "verStr: str",
            "returnType": "arr",
            "desc": "Deconstructs a version string into [major, minor, patch] integer components."
          },
          {
            "name": "compare v1 v2",
            "params": "v1: str, v2: str",
            "returnType": "num",
            "desc": "Returns 1 if v1 > v2, -1 if v1 < v2, or 0 if both are identical."
          },
          {
            "name": "isGreater v1 v2",
            "params": "v1: str, v2: str",
            "returnType": "bool",
            "desc": "Returns true if version v1 is strictly newer than v2."
          }
        ]
      }
    ],
    "functions": [
      {
        "name": "bundle fileNames fileContents",
        "params": "fileNames: arr, fileContents: arr",
        "returnType": "str",
        "desc": "Bundles multiple files and contents into a serialized package string.",
        "aliases": "pack"
      },
      {
        "name": "extract bundleStr",
        "params": "bundleStr: str",
        "returnType": "arr",
        "desc": "Unpacks a serialized bundle string into an array of [path, content] pairs.",
        "aliases": "unpack"
      }
    ],
    "codeBlocks": [
      {
        "id": "cb_arc_quickstart",
        "title": "1. Quick Start: Semantic Version Comparison",
        "desc": "Check whether a new software release is newer than your current installation.",
        "code": "load Archive as arc\nfrom Archive import Semver\n\nset currentVersion:  \"1.4.2\"\nset incomingVersion: \"2.0.0\"\n\nset hasUpgrade: Semver.isGreater(incomingVersion, currentVersion)\ndisplay \"Current Version:   \" + currentVersion ?color=\"yellow\"\ndisplay \"Incoming Version:  \" + incomingVersion ?color=\"cyan\"\ndisplay \"Is Upgrade Newer?  \" + hasUpgrade ?color=\"green\""
      },
      {
        "id": "cb_arc_sublibs",
        "title": "2. Exploring Sub-Libraries: In-Memory Multi-File Zip",
        "desc": "Package multiple virtual files into an in-memory zip archive and read them back.",
        "code": "load Archive as arc\nfrom Archive import Zip\n\n! Create an empty zip archive\nset myZip: Zip.create()\n\n! Add virtual files to the archive\nZip.add(myZip, \"index.vrs\", \"display 'Hello World'\")\nZip.add(myZip, \"config.json\", \"{ 'debug': true }\")\n\ndisplay \"Archive Files:     \" + Zip.files(myZip).join(\", \") ?color=\"cyan\"\ndisplay \"Read index.vrs:    \" + Zip.get(myZip, \"index.vrs\") ?color=\"green\""
      },
      {
        "id": "cb_arc_project",
        "title": "3. Practical Mini-Project: Package Release Validator",
        "desc": "Verify that incoming dependencies meet version thresholds before bundling release files.",
        "code": "load Archive as arc\nfrom Archive import Semver\n\nset pkgName: \"MathUtils\"\nset pkgVer: \"3.2.0\"\nset requiredVer: \"3.0.0\"\n\nif Semver.isGreater(pkgVer, requiredVer) then\n    set files: [\"math.lib.vrs\", \"README.md\"]\n    set contents: [\"lib MathUtils...\", \"Math utilities for VerScript.\"]\n    set bundleData: arc.bundle(files, contents)\n\n    display \"====================================\" ?color=\"magenta\"\n    display \"    PACKAGE RELEASE PIPELINE        \" ?color=\"magenta\"\n    display \"====================================\" ?color=\"magenta\"\n    display \"Package:       \" + pkgName + \" v\" + pkgVer ?color=\"cyan\"\n    display \"Check:         Meets minimum requirement\" ?color=\"green\"\n    display \"Bundle Size:   \" + bundleData.length() + \" chars\" ?color=\"yellow\"\nend"
      }
    ],
    "interactiveExample": "load Archive as arc\nfrom Archive import Semver\nfrom Archive import Zip\n\nset z: Zip.create()\nZip.add(z, \"main.vrs\", \"display 'Hello World'\")\n\ndisplay \"Archive Catalog: \" + Zip.files(z).join(\", \") ?color=\"cyan\"\ndisplay \"SemVer Check:    2.1.0 > 1.9.5: \" + Semver.isGreater(\"2.1.0\", \"1.9.5\") ?color=\"green\""
  },

  {
    "id": "lib-tensor",
    "name": "Tensor",
    "category": "Graphics & 3D",
    "version": "1.0.0",
    "status": "Loaded Community Package",
    "loadSyntax": "load Tensor as tensor",
    "summary": "Vector and matrix linear algebra primitives, activation functions, and neural dot products with Tensor.Ops and Tensor.Activation.",
    "description": "<code>Tensor</code> delivers foundational numerical mathematics for neural networks, physics vectors, and data transformations. Houses sub-libraries <code>Tensor.Ops</code> for vector mathematics and <code>Tensor.Activation</code> for neural activation functions. Requires explicit loading with <code>load Tensor [as tensor]</code>.",
    "beginnerGuide": {
      "analogy": "If standard math is like doing calculations one number at a time, Tensor is like doing math on an entire conveyor belt of numbers at once. Instead of writing loops to add or multiply lists, Tensor.Ops calculates the whole list in one shot, and Tensor.Activation applies AI filters like ReLU.",
      "whatItDoes": "Performs vector arithmetic, computes dot products, generates zeros/ones vectors, and applies activation filters used in machine learning.",
      "fastTrack": [
        {
          "step": "1. Load Package",
          "desc": "Type <code>load Tensor as tensor</code> to load numerical tools."
        },
        {
          "step": "2. Import Sub-Libraries",
          "desc": "Use <code>from Tensor import Ops</code> and <code>from Tensor import Activation</code>."
        },
        {
          "step": "3. Compute",
          "desc": "Calculate dot products with <code>Ops.dot(v1, v2)</code> or activate with <code>Activation.relu(x)</code>!"
        }
      ],
      "proTip": "In neural networks, Activation.relu(x) turns any negative number into 0 while keeping positive numbers untouched (max(0, x)). It is the most popular activation function in modern AI!",
      "gotcha": "Vector addition and dot products require both arrays to have equal lengths. For example, [1, 2, 3] and [4, 5, 6] both have 3 elements."
    },
    "meta": {
      "static": {
        "author": "AI & Math WG",
        "domain": "Linear Algebra & Neural",
        "distribution": "packages/Tensor.lib.vrs"
      },
      "dynamic": {
        "opsExecuted": 0,
        "architecture": "Sub-Libraries (Tensor.Ops, Tensor.Activation)"
      },
      "thisstatic": {
        "precision": "Fixed/Floating Numeric Arrays"
      }
    },
    "subLibraries": [
      {
        "name": "Tensor.Ops",
        "importSyntax": "from Tensor import Ops  ! or: import Tensor.Ops as ops",
        "desc": "Sub-library for elementwise vector mathematics and vector dot products.",
        "functions": [
          {
            "name": "add a b",
            "params": "a: arr, b: arr",
            "returnType": "arr",
            "desc": "Computes elementwise addition of two vectors."
          },
          {
            "name": "sub a b",
            "params": "a: arr, b: arr",
            "returnType": "arr",
            "desc": "Computes elementwise subtraction of two vectors."
          },
          {
            "name": "mul a b",
            "params": "a: arr, b: arr",
            "returnType": "arr",
            "desc": "Computes elementwise multiplication of two vectors."
          },
          {
            "name": "dot a b",
            "params": "a: arr, b: arr",
            "returnType": "num",
            "desc": "Computes the dot product sum(a[i] * b[i]) of two vectors."
          },
          {
            "name": "scale arr factor",
            "params": "arr: arr, factor: num",
            "returnType": "arr",
            "desc": "Multiplies each vector element by a scalar factor."
          }
        ]
      },
      {
        "name": "Tensor.Activation",
        "importSyntax": "from Tensor import Activation  ! or: import Tensor.Activation as act",
        "desc": "Sub-library for neural activation functions and numerical clamping.",
        "functions": [
          {
            "name": "relu x",
            "params": "x: num",
            "returnType": "num",
            "desc": "Rectified Linear Unit: returns max(0, x)."
          },
          {
            "name": "step x",
            "params": "x: num",
            "returnType": "num",
            "desc": "Heaviside step function: returns 1 if x >= 0, else 0."
          },
          {
            "name": "clampVal x minVal maxVal",
            "params": "x: num, minVal: num, maxVal: num",
            "returnType": "num",
            "desc": "Constrains a value between minVal and maxVal bounds."
          }
        ]
      }
    ],
    "functions": [
      {
        "name": "zeros count",
        "params": "count: num",
        "returnType": "arr",
        "desc": "Creates a vector filled with count zeros.",
        "aliases": "zeroVector"
      },
      {
        "name": "ones count",
        "params": "count: num",
        "returnType": "arr",
        "desc": "Creates a vector filled with count ones.",
        "aliases": "oneVector"
      },
      {
        "name": "dot a b",
        "params": "a: arr, b: arr",
        "returnType": "num",
        "desc": "Computes the dot product of two vectors."
      },
      {
        "name": "relu x",
        "params": "x: num",
        "returnType": "num",
        "desc": "Applies ReLU non-linear activation."
      }
    ],
    "codeBlocks": [
      {
        "id": "cb_tensor_quickstart",
        "title": "1. Quick Start: Computing a Vector Dot Product",
        "desc": "Multiply and sum matching elements of two vectors to calculate a single score.",
        "code": "load Tensor as tensor\nfrom Tensor import Ops\n\nset weights: [2, 3, -1]\nset inputs:  [4, 2, 5]\n\n! Dot product: (2*4) + (3*2) + (-1*5) = 8 + 6 - 5 = 9\nset score: Ops.dot(weights, inputs)\ndisplay \"Weighted Dot Product Score: \" + score ?color=\"green\""
      },
      {
        "id": "cb_tensor_sublibs",
        "title": "2. Exploring Sub-Libraries: Vector Math & ReLU",
        "desc": "Use Tensor.Ops for vector addition and scaling, and Tensor.Activation for ReLU filters.",
        "code": "load Tensor as tensor\nimport Tensor.Ops as ops\nimport Tensor.Activation as act\n\nset v1: [10, -5, 20]\nset v2: [2, 3, 4]\n\nset added: ops.add(v1, v2)\nset scaled: ops.scale(v1, 2)\n\ndisplay \"Vector Addition: [\" + added.join(\", \") + \"]\" ?color=\"cyan\"\ndisplay \"Vector Scaled x2: [\" + scaled.join(\", \") + \"]\" ?color=\"yellow\"\ndisplay \"ReLU on -5: \" + act.relu(-5) + \" (filtered to 0)\" ?color=\"magenta\"\ndisplay \"ReLU on 20: \" + act.relu(20) ?color=\"green\""
      },
      {
        "id": "cb_tensor_project",
        "title": "3. Practical Mini-Project: AI Loan Approval Classifier",
        "desc": "A simplified single-layer perceptron calculating weighted credit approval.",
        "code": "load Tensor as tensor\nfrom Tensor import Ops\nfrom Tensor import Activation\n\n! Feature inputs: [Age/100, Income/100k, CreditScore/1000]\nset applicant: [0.28, 0.75, 0.82]\nset weights:   [0.20, 0.50, 0.80]\nset bias: -0.40\n\nset rawScore: Ops.dot(applicant, weights) + bias\nset prediction: Activation.relu(rawScore)\n\ndisplay \"====================================\" ?color=\"magenta\"\ndisplay \"   AI CREDIT APPROVAL INFERENCE     \" ?color=\"magenta\"\ndisplay \"====================================\" ?color=\"magenta\"\ndisplay \"Raw Weighted Score: \" + rawScore ?color=\"yellow\"\ndisplay \"Activated Output:   \" + prediction ?color=\"green\"\nif prediction > 0.5 then\n    display \"Decision: APPROVED FOR FINANCING\" ?color=\"green\"\nelse\n    display \"Decision: MANUAL REVIEW REQUIRED\" ?color=\"red\"\nend"
      }
    ],
    "interactiveExample": "load Tensor as tensor\nimport Tensor.Ops as ops\nfrom Tensor import Activation\n\nset v1: [2, 4, 6]\nset v2: [1, 3, 5]\nset dot: ops.dot(v1, v2)\n\ndisplay \"Vector Dot Product: \" + dot ?color=\"cyan\"\ndisplay \"ReLU Filter Active: \" + Activation.relu(dot) ?color=\"green\""
  },

  {
    "id": "lib-virtualfs",
    "name": "VirtualFS",
    "category": "File & Storage",
    "version": "1.0.0",
    "status": "Loaded Community Package",
    "loadSyntax": "load VirtualFS as vfs",
    "summary": "In-memory sandboxed filesystem with nested sub-libraries VirtualFS.Path and VirtualFS.Node, file CRUD, and JSON snapshots.",
    "description": "<code>VirtualFS</code> gives you a complete, sandboxed file system inside RAM. Create directories, write and read files, inspect file trees, and serialize the entire disk to JSON snapshots without ever touching physical storage. Features sub-libraries <code>VirtualFS.Path</code> and <code>VirtualFS.Node</code>. Requires explicit loading with <code>load VirtualFS [as vfs]</code>.",
    "beginnerGuide": {
      "analogy": "Imagine having an entire hard drive inside your computer's RAM. You can create folders, write files, read them, and delete them, without touching your real physical hard disk. If you reset it, everything cleanly resets. It's perfect for testing, sandboxes, and file simulations.",
      "whatItDoes": "Provides in-memory folder creation, file writing/reading/appending, path utilities (join, basename, dirname), and complete JSON snapshot backups.",
      "fastTrack": [
        {
          "step": "1. Load Package",
          "desc": "Type <code>load VirtualFS as vfs</code> at the top of your program."
        },
        {
          "step": "2. Import Sub-Libraries",
          "desc": "Use <code>from VirtualFS import Path</code> or <code>import VirtualFS.Path as p</code>."
        },
        {
          "step": "3. Create & Read",
          "desc": "Call <code>vfs.mkdir('/data')</code>, <code>vfs.writeFile('/data/test.txt', 'Hello')</code>, and read it back!"
        }
      ],
      "proTip": "Use <code>vfs.exportState()</code> to capture a full JSON backup of your virtual drive, and restore it anytime using <code>vfs.importState(snapshot)</code>!",
      "gotcha": "Virtual paths always use forward slashes (e.g. /home/user/project). Backslashes like \\ are automatically normalized to / by the library."
    },
    "meta": {
      "static": {
        "author": "System Tools WG",
        "standard": "VFS-1.0 Hierarchy",
        "distribution": "packages/VirtualFS.lib.vrs"
      },
      "dynamic": {
        "totalOps": 0,
        "architecture": "Sub-Libraries (VirtualFS.Path, VirtualFS.Node)"
      },
      "thisstatic": {
        "storageBackend": "RAM In-Memory Node Tree"
      }
    },
    "subLibraries": [
      {
        "name": "VirtualFS.Path",
        "importSyntax": "from VirtualFS import Path  ! or: import VirtualFS.Path as p",
        "desc": "Sub-library for virtual path manipulation, combining directory paths, and extracting filenames.",
        "functions": [
          {
            "name": "join dir file",
            "params": "dir: str, file: str",
            "returnType": "str",
            "desc": "Joins directory and filename into a normalized virtual path."
          },
          {
            "name": "basename path",
            "params": "path: str",
            "returnType": "str",
            "desc": "Extracts the trailing filename from a path (e.g. '/var/log/audit.log' -> 'audit.log')."
          },
          {
            "name": "dirname path",
            "params": "path: str",
            "returnType": "str",
            "desc": "Extracts the directory portion of a path (e.g. '/var/log/audit.log' -> '/var/log')."
          },
          {
            "name": "normalize path",
            "params": "path: str",
            "returnType": "str",
            "desc": "Normalizes duplicate slashes and Windows backslashes into standard Unix slashes."
          }
        ]
      },
      {
        "name": "VirtualFS.Node",
        "importSyntax": "from VirtualFS import Node  ! or: import VirtualFS.Node as node",
        "desc": "Sub-library for creating raw file and directory node structures.",
        "functions": [
          {
            "name": "createFile path content",
            "params": "path: str, content: str",
            "returnType": "arr",
            "desc": "Creates a raw file node record [\"file\", path, content]."
          },
          {
            "name": "createDir path",
            "params": "path: str",
            "returnType": "arr",
            "desc": "Creates a raw directory node record [\"dir\", path]."
          }
        ]
      }
    ],
    "functions": [
      {
        "name": "mkdir path",
        "params": "path: str",
        "returnType": "bool",
        "desc": "Creates a new virtual directory in memory."
      },
      {
        "name": "writeFile path content",
        "params": "path: str, content: str",
        "returnType": "bool",
        "desc": "Writes text content to a virtual file."
      },
      {
        "name": "readFile path",
        "params": "path: str",
        "returnType": "str",
        "desc": "Reads text content from a virtual file."
      },
      {
        "name": "appendFile path content",
        "params": "path: str, content: str",
        "returnType": "bool",
        "desc": "Appends text to the end of an existing virtual file."
      },
      {
        "name": "deleteFile path",
        "params": "path: str",
        "returnType": "bool",
        "desc": "Deletes a virtual file from memory."
      },
      {
        "name": "exists path",
        "params": "path: str",
        "returnType": "bool",
        "desc": "Returns true if a file or directory exists at path."
      },
      {
        "name": "isDir path",
        "params": "path: str",
        "returnType": "bool",
        "desc": "Returns true if path is a directory."
      },
      {
        "name": "isFile path",
        "params": "path: str",
        "returnType": "bool",
        "desc": "Returns true if path is a regular file."
      },
      {
        "name": "ls path",
        "params": "path: str",
        "returnType": "arr",
        "desc": "Lists all file and directory entries inside path."
      },
      {
        "name": "pwd",
        "params": "none",
        "returnType": "str",
        "desc": "Returns current working directory."
      },
      {
        "name": "exportState",
        "params": "none",
        "returnType": "str",
        "desc": "Serializes the entire virtual filesystem state into a JSON string."
      },
      {
        "name": "importState jsonStr",
        "params": "jsonStr: str",
        "returnType": "bool",
        "desc": "Restores virtual filesystem state from a JSON string."
      },
      {
        "name": "reset",
        "params": "none",
        "returnType": "bool",
        "desc": "Clears all files and restores root directory."
      }
    ],
    "codeBlocks": [
      {
        "id": "cb_vfs_quickstart",
        "title": "1. Quick Start: Virtual File CRUD Operations",
        "desc": "Create a virtual folder, write a file, and read it back without touching physical disk storage.",
        "code": "load VirtualFS as vfs\n\n! 1. Create a virtual folder in memory\nvfs.mkdir(\"/workspace\")\n\n! 2. Write a virtual file\nvfs.writeFile(\"/workspace/hello.txt\", \"Hello from RAM VirtualFS!\")\n\n! 3. Read it back\nset content: vfs.readFile(\"/workspace/hello.txt\")\ndisplay \"Virtual File Content: \" + content ?color=\"green\"\ndisplay \"File Exists?          \" + vfs.exists(\"/workspace/hello.txt\") ?color=\"cyan\""
      },
      {
        "id": "cb_vfs_sublibs",
        "title": "2. Exploring Sub-Libraries: VirtualFS.Path",
        "desc": "Use VirtualFS.Path to safely join paths and extract directory names and basenames.",
        "code": "load VirtualFS as vfs\nfrom VirtualFS import Path\n\nset folder: \"/var/log\"\nset logFile: \"audit.log\"\nset fullPath: Path.join(folder, logFile)\n\ndisplay \"Joined Path:   \" + fullPath ?color=\"cyan\"\ndisplay \"Base Filename: \" + Path.basename(fullPath) ?color=\"yellow\"\ndisplay \"Directory:     \" + Path.dirname(fullPath) ?color=\"green\""
      },
      {
        "id": "cb_vfs_project",
        "title": "3. Practical Mini-Project: Isolated Backup & Snapshot Sandbox",
        "desc": "Take a full JSON snapshot of your virtual disk, wipe it, and restore it instantly.",
        "code": "load VirtualFS as vfs\n\n! Setup initial project files\nvfs.mkdir(\"/project\")\nvfs.writeFile(\"/project/index.vrs\", \"display 'v1'\")\nvfs.writeFile(\"/project/readme.md\", \"# Project Documentation\")\n\n! Take a JSON snapshot of the filesystem\nset snapshot: vfs.exportState()\ndisplay \"Filesystem snapshot created (length: \" + snapshot.length() + \" chars)\" ?color=\"yellow\"\n\n! Simulate accidental wipe or reset\nvfs.reset()\ndisplay \"After reset: exists? \" + vfs.exists(\"/project/index.vrs\") ?color=\"red\"\n\n! Instant restoration from snapshot\nvfs.importState(snapshot)\ndisplay \"After snapshot restore: exists? \" + vfs.exists(\"/project/index.vrs\") ?color=\"green\"\ndisplay \"Restored Readme: \" + vfs.readFile(\"/project/readme.md\") ?color=\"cyan\""
      }
    ],
    "interactiveExample": "load VirtualFS as vfs\nfrom VirtualFS import Path\n\nvfs.mkdir(\"/configs\")\nvfs.writeFile(\"/configs/app.json\", \"{ \"mode\": \"production\" }\")\n\nset full: Path.join(\"/configs\", \"app.json\")\ndisplay \"Virtual Path: \" + full ?color=\"cyan\"\ndisplay \"File Content: \" + vfs.readFile(full) ?color=\"green\""
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
