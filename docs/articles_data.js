// VerScript Academy Official Curriculum: 69 Distinct, Focused Chapters
// Generated automatically with complete Section -> Subsection -> Chapter taxonomy

var ARTICLES = [
  {
    "id": "ch1-intro",
    "number": 1,
    "section": "Section 1: Getting Started",
    "subsection": "Foundations",
    "title": "Welcome to VerScript",
    "category": "Getting Started",
    "readTime": "3 min read",
    "summary": "A friendly introduction to VerScript: what it is, why it exists, and writing your very first running script.",
    "body": "\n      <h2>What is VerScript?</h2>\n      <p>Imagine a programming language that has the lightning-fast speed and predictability of <strong>C</strong>, but is as clean, readable, and fun to write as <strong>Python</strong>. That is <strong>VerScript</strong>!</p>\n      <p>VerScript is designed to get out of your way: no endless curly braces <code>{}</code>, no missing semicolon errors <code>;</code>, and no bulky runtime files to install. You write clean lines of code, and the engine runs them instantly.</p>\n\n      <div class=\"callout-box tip\">\n        <div class=\"callout-title\">💡 The Core Idea</div>\n        <p>Code should read like clear instructions. Instead of complex syntax rules, VerScript uses clean words and simple indentation to organize your ideas.</p>\n      </div>\n\n      <h2>How VerScript Thinks</h2>\n      <p>When you run a VerScript program, three simple things happen:</p>\n      <table class=\"doc-table\">\n        <thead>\n          <tr><th>Step</th><th>What Happens</th><th>Why It Matters to You</th></tr>\n        </thead>\n        <tbody>\n          <tr><td><strong>1. Read</strong></td><td>The engine scans your lines and strips out notes.</td><td>Clear error messages with exact line numbers if you make a typo.</td></tr>\n          <tr><td><strong>2. Execute</strong></td><td>Your instructions run directly in high-speed native memory.</td><td>Zero lag, instant results, and lightweight resource usage.</td></tr>\n          <tr><td><strong>3. Output</strong></td><td>Results, colors, and messages print to your screen.</td><td>Instant visual feedback to confirm your program is working.</td></tr>\n        </tbody>\n      </table>\n\n      <h2>Your First Command: <code>display</code></h2>\n      <p>To print any message to the screen, we use the <code>display</code> command followed by text in quotes. You can even add vibrant colors by appending <code>?color=green</code> or <code>?color=cyan</code>!</p>\n    ",
    "codeBlocks": [
      {
        "id": "cb_ch1_1",
        "title": "welcome.vrs",
        "code": "! Welcome to your first VerScript program!\ndisplay \"Hello, Explorer! Welcome to VerScript.\" ?color=green\ndisplay \"The native engine is ready for action.\" ?color=cyan"
      }
    ],
    "exercises": [
      {
        "id": "ex_ch1_1",
        "title": "Challenge 1: Print Your First Message",
        "prompt": "Use the <code>display</code> command to print <code>\"Hello World\"</code> in cyan.",
        "starterCode": "! TODO: Print Hello World in cyan\n",
        "hint": "Type display \"Hello World\" ?color=cyan",
        "solution": "display \"Hello World\" ?color=cyan",
        "expectedMatch": {}
      }
    ]
  },
  {
    "id": "ch2-comments",
    "number": 2,
    "section": "Section 1: Getting Started",
    "subsection": "Foundations",
    "title": "Writing Notes & Comments",
    "category": "Getting Started",
    "readTime": "2 min read",
    "summary": "Learn how to document your code using friendly single-line and multi-line comments so anyone can understand your programs.",
    "body": "\n      <h2>Why Do We Use Comments?</h2>\n      <p>Comments are notes written by you, for you and your team. The computer completely ignores them when running your script! They help explain <em>why</em> you wrote something and remind you how your code works when you look back at it weeks later.</p>\n\n      <h2>Two Easy Ways to Write Notes</h2>\n      <ul>\n        <li><strong>Single-Line Notes (<code>!</code>):</strong> Put an exclamation mark at the start of a note. Everything after it on that line is ignored.</li>\n        <li><strong>Multi-Line Blocks (<code>!! ... !!</code>):</strong> Wrap long explanations or headers between double exclamation marks.</li>\n      </ul>\n\n      <div class=\"callout-box note\">\n        <div class=\"callout-title\">📝 Clean Code Tip</div>\n        <p>Good code explains <em>what</em> is happening; good comments explain <em>why</em> you chose to do it that way.</p>\n      </div>\n    ",
    "codeBlocks": [
      {
        "id": "cb_ch2_1",
        "title": "comments_demo.vrs",
        "code": "!!\n  Project: Launch Controller\n  Author: Alex\n!!\n! Check engine sensors\ndisplay \"Sensors calibrated.\" ?color=yellow"
      }
    ],
    "exercises": [
      {
        "id": "ex_ch2_1",
        "title": "Challenge 2: Add a Helpful Note",
        "prompt": "Add a single-line note <code>! Start engine</code> above the display command.",
        "starterCode": "display \"Engine active.\" ?color=green\n",
        "hint": "Add `! Start engine` on the line above.",
        "solution": "! Start engine\ndisplay \"Engine active.\" ?color=green",
        "expectedMatch": {}
      }
    ]
  },
  {
    "id": "ch3-display",
    "number": 3,
    "section": "Section 1: Getting Started",
    "subsection": "Foundations",
    "title": "The Display Command & Colors",
    "category": "Getting Started",
    "readTime": "3 min read",
    "summary": "Master output formatting, standard colors, Truecolor hex codes, and inline printing with the display command.",
    "body": "\n      <h2>Making Your Output Come Alive</h2>\n      <p>Terminal output doesn't have to be boring white text on a black screen. VerScript makes it effortless to style your messages with vivid colors using the <code>?color=</code> tag.</p>\n\n      <h2>Supported Color Formats</h2>\n      <table class=\"doc-table\">\n        <thead>\n          <tr><th>Type</th><th>Example Syntax</th><th>Best For</th></tr>\n        </thead>\n        <tbody>\n          <tr><td><strong>Simple Names</strong></td><td><code>?color=green</code>, <code>?color=cyan</code>, <code>?color=red</code></td><td>Quick status messages and warnings.</td></tr>\n          <tr><td><strong>Hex Truecolor</strong></td><td><code>?color=#00ffcc</code>, <code>?color=#a855f7</code></td><td>Custom branding, dashboards, and rich UI themes.</td></tr>\n          <tr><td><strong>Inline Output</strong></td><td><code>?inline=true</code></td><td>Printing without automatically jumping to the next line.</td></tr>\n        </tbody>\n      </table>\n    ",
    "codeBlocks": [
      {
        "id": "cb_ch3_1",
        "title": "colors.vrs",
        "code": "display \"Success: Server running\" ?color=green\ndisplay \"Warning: High memory load\" ?color=yellow\ndisplay \"Error: Connection timeout\" ?color=red\ndisplay \"Neon glow theme\" ?color=#00ffcc"
      }
    ],
    "exercises": [
      {
        "id": "ex_ch3_1",
        "title": "Challenge 3: Custom Hex Color",
        "prompt": "Display <code>\"Online\"</code> using hex color <code>?color=#22c55e</code>.",
        "starterCode": "! TODO: Print Online in hex color #22c55e\n",
        "hint": "display \"Online\" ?color=#22c55e",
        "solution": "display \"Online\" ?color=#22c55e",
        "expectedMatch": {}
      }
    ]
  },
  {
    "id": "ch4-prompt",
    "number": 4,
    "section": "Section 1: Getting Started",
    "subsection": "Foundations",
    "title": "Interactive Input with Prompt",
    "category": "Getting Started",
    "readTime": "3 min read",
    "summary": "Ask users questions in the terminal, capture their answers into variables, and provide safe fallback defaults.",
    "body": "\n      <h2>The <code>prompt</code> Command</h2>\n      <p>VerScript programs can interact with users through the <code>prompt</code> command. When invoked, it pauses execution and requests input from the console or browser modal, automatically casting numeric inputs into numbers while retaining text as strings.</p>\n\n      <h2>The <code>?default</code> Attribute</h2>\n      <p>Using the <code>?</code> attribute operator, you can specify fallback values if the user presses Enter without typing, or when running non-interactively in headless/server environments:</p>\n      <pre><code>prompt userName ?default=\"Explorer\"\nprompt userPort ?default=\"8080\"\ndisplay \"Welcome, \" + userName + \"! Connecting to port \" + userPort ?color=green</code></pre>\n\n      <div class=\"callout-box tip\">\n        <div class=\"callout-title\">💡 Automated Non-Interactive Fallback</div>\n        <p>In web runtimes (such as this Academy and the Web IDE), <code>prompt</code> launches an interactive dialog. If execution occurs headlessly without standard input, the engine safely resolves to <code>?default</code> rather than stalling.</p>\n      </div>\n  ",
    "codeBlocks": [
      {
        "id": "cb_ch4_1",
        "title": "prompt_demo.vrs",
        "code": "prompt playerName ?default=\"Hero\"\nprompt level ?default=\"1\"\ndisplay \"Player: \" + playerName + \" (Level \" + level + \")\" ?color=cyan"
      }
    ],
    "exercises": [
      {
        "id": "ex_ch4_1",
        "title": "Challenge 4: Prompt with Default",
        "prompt": "Prompt for a variable named <code>role</code> with default <code>\"Admin\"</code>, then display <code>\"Role: \" + role</code>.",
        "starterCode": "! TODO: Prompt role with default \"Admin\"\n",
        "hint": "prompt role ?default=\"Admin\"\ndisplay \"Role: \" + role",
        "solution": "prompt role ?default=\"Admin\"\ndisplay \"Role: \" + role",
        "expectedMatch": {}
      }
    ]
  },
  {
    "id": "ch5-numbers-basic",
    "number": 5,
    "section": "Section 2: Numbers, Math & Logic",
    "subsection": "Basic Arithmetic",
    "title": "Numbers & Basic Arithmetic",
    "category": "Datatypes",
    "readTime": "4 min read",
    "summary": "Learn how VerScript works with whole numbers and master everyday math: addition, subtraction, multiplication, division, and remainder.",
    "body": "\n      <h2>Numbers in VerScript</h2>\n      <p>Computers love numbers! In VerScript, whole numbers (integers like <code>5</code>, <code>42</code>, <code>-10</code>, <code>1000</code>) are first-class values. You can count items, calculate scores, adjust speeds, and track quantities with zero fuss.</p>\n\n      <h2>Everyday Math Operators</h2>\n      <table class=\"doc-table\">\n        <thead>\n          <tr><th>Symbol</th><th>Operation</th><th>Example</th><th>Result</th><th>What It Does</th></tr>\n        </thead>\n        <tbody>\n          <tr><td><code>+</code></td><td>Addition</td><td><code>10 + 5</code></td><td><code>15</code></td><td>Adds two numbers together.</td></tr>\n          <tr><td><code>-</code></td><td>Subtraction</td><td><code>20 - 7</code></td><td><code>13</code></td><td>Subtracts right number from left.</td></tr>\n          <tr><td><code>*</code></td><td>Multiplication</td><td><code>6 * 7</code></td><td><code>42</code></td><td>Multiplies two numbers.</td></tr>\n          <tr><td><code>/</code></td><td>Division</td><td><code>100 / 4</code></td><td><code>25</code></td><td>Divides left by right.</td></tr>\n          <tr><td><code>//</code></td><td>Integer Division</td><td><code>17 // 5</code></td><td><code>3</code></td><td>Divides and discards any fraction.</td></tr>\n          <tr><td><code>%</code></td><td>Remainder (Modulo)</td><td><code>17 % 5</code></td><td><code>2</code></td><td>Finds what is left over after dividing.</td></tr>\n        </tbody>\n      </table>\n\n      <div class=\"callout-box tip\">\n        <div class=\"callout-title\">💡 The Clock Analogy for Modulo (%)</div>\n        <p>Think of <code>%</code> like a 12-hour clock! If it's 10:00 and you add 5 hours, <code>15 % 12</code> gives you <code>3</code>! Modulo is great for looping numbers or checking if a number divides evenly.</p>\n      </div>\n    ",
    "codeBlocks": [
      {
        "id": "cb_ch5_1",
        "title": "basic_math.vrs",
        "code": "set apples: 12\nset friends: 4\nset perFriend: apples / friends\ndisplay \"Each friend gets: \" + perFriend + \" apples.\" ?color=green\n\nset extraApples: 14 % friends\ndisplay \"Leftover apples: \" + extraApples ?color=yellow"
      }
    ],
    "exercises": [
      {
        "id": "ex_ch5_1",
        "title": "Challenge 5: Total Score Calculation",
        "prompt": "Calculate <code>(15 * 4) + 10</code>, store it in <code>score</code>, and display it.",
        "starterCode": "! TODO: Calculate score and display it\n",
        "hint": "set score: (15 * 4) + 10\ndisplay score",
        "solution": "set score: (15 * 4) + 10\ndisplay score",
        "expectedMatch": {}
      }
    ]
  },
  {
    "id": "ch6-powers-roots",
    "number": 6,
    "section": "Section 2: Numbers, Math & Logic",
    "subsection": "Basic Arithmetic",
    "title": "Math Built-ins: Roots, Clamping, Remainder & Constants",
    "category": "Datatypes",
    "readTime": "4 min read",
    "summary": "Easily calculate powers (^), absolute magnitudes (|x|), factorials (!), square roots (sqrt), and keep numbers within safe bounds (clamp).",
    "body": "\n      <h2>Built-in Mathematical Functions & Keywords</h2>\n      <p>VerScript includes a rich set of built-in arithmetic keywords that run directly in native machine instructions without requiring imports:</p>\n\n      <table class=\"doc-table\">\n        <thead>\n          <tr><th>Operation / Keyword</th><th>Syntax Example</th><th>Return Type</th><th>Description</th></tr>\n        </thead>\n        <tbody>\n          <tr><td><code>sqrt</code></td><td><code>sqrt 144</code></td><td>num</td><td>Computes integer square root (12).</td></tr>\n          <tr><td><code>rt</code></td><td><code>rt 3 27</code></td><td>num</td><td>Computes the n-th root (cube root of 27 is 3).</td></tr>\n          <tr><td><code>clamp</code></td><td><code>clamp val from 0 to 100</code></td><td>num</td><td>Restricts a number between lower and upper bounds. Also accepts <code>clamp val 0 100</code>.</td></tr>\n          <tr><td><code>divRem</code></td><td><code>divRem 17 5</code></td><td>arr</td><td>Divides two integers and returns <code>[quotient, remainder]</code> (e.g. <code>[3, 2]</code>).</td></tr>\n          <tr><td><code>sign</code> / <code>sgn</code></td><td><code>sign -42</code></td><td>num</td><td>Returns -1 for negative, 1 for positive, 0 for zero.</td></tr>\n          <tr><td><code>lerp</code></td><td><code>lerp from 10 to 50 by 0</code></td><td>num</td><td>Linear interpolation between two numbers.</td></tr>\n          <tr><td><code>gcd</code> / <code>hcf</code></td><td><code>gcd 24 36</code> or <code>gcd [12, 18, 24]</code></td><td>num</td><td>Greatest Common Divisor (or Highest Common Factor).</td></tr>\n          <tr><td><code>lcm</code></td><td><code>lcm 12 18</code></td><td>num</td><td>Least Common Multiple (36).</td></tr>\n          <tr><td><code>floor</code> / <code>ceil</code></td><td><code>floor 15</code>, <code>ceil 15</code></td><td>num</td><td>Floor and ceiling integer conversions.</td></tr>\n          <tr><td><code>round</code></td><td><code>round 42</code></td><td>num</td><td>Rounds value to nearest integer.</td></tr>\n          <tr><td><code>sin</code> / <code>cos</code> / <code>tan</code></td><td><code>sin 0</code>, <code>cos 0</code>, <code>tan 0</code></td><td>num</td><td>Standard trigonometric functions (radians).</td></tr>\n          <tr><td><code>sinDeg</code> / <code>cosDeg</code></td><td><code>sinDeg 90</code>, <code>cosDeg 0</code></td><td>num</td><td>Degree-based trigonometry.</td></tr>\n          <tr><td><code>degToRad</code> / <code>radToDeg</code></td><td><code>degToRad 180</code>, <code>radToDeg 3</code></td><td>num</td><td>Angle unit conversions.</td></tr>\n          <tr><td><code>hypot</code></td><td><code>hypot 3 4</code></td><td>num</td><td>Hypotenuse Euclidean distance <code>sqrt(a^2 + b^2)</code> (5).</td></tr>\n          <tr><td><code>ln</code> / <code>log</code> / <code>log2</code></td><td><code>ln 10</code>, <code>log 1000 10</code>, <code>log2 64</code></td><td>num</td><td>Natural log, arbitrary base log, and base-2 log.</td></tr>\n          <tr><td><code>exp</code></td><td><code>exp 2</code></td><td>num</td><td>Exponential base-e power <code>e^x</code>.</td></tr>\n          <tr><td><code>pi</code>, <code>tau</code>, <code>phi</code>, <code>inf</code></td><td><code>pi</code>, <code>tau</code>, <code>phi</code>, <code>inf</code></td><td>num</td><td>Mathematical constants: Pi (3), Tau (6), Phi (16180), Infinity (2147483647).</td></tr>\n        </tbody>\n      </table>\n  ",
    "codeBlocks": [
      {
        "id": "cb_ch6_1",
        "title": "math_builtins.vrs",
        "code": "set dr: divRem 29 7\ndisplay \"divRem 29 by 7: \" + dr ?color=green\n\nset c: clamp 150 from 0 to 100\ndisplay \"Clamped 150 to [0, 100]: \" + c ?color=cyan\n\nset g: gcd [18, 27, 36]\ndisplay \"GCD of [18, 27, 36]: \" + g ?color=yellow"
      }
    ],
    "exercises": [
      {
        "id": "ex_ch6_1",
        "title": "Challenge 6: Power & Clamping",
        "prompt": "Calculate <code>2 ^ 5</code>, clamp it between <code>0</code> and <code>20</code>, and display the result.",
        "starterCode": "! Compute 2 ^ 5, clamp to 0..20, and display\n",
        "hint": "set p: 2 ^ 5\nset bounded: clamp p from 0 to 20\ndisplay bounded",
        "solution": "set p: 2 ^ 5\nset bounded: clamp p from 0 to 20\ndisplay bounded",
        "expectedMatch": {}
      }
    ]
  },
  {
    "id": "ch7-booleans",
    "number": 7,
    "section": "Section 2: Numbers, Math & Logic",
    "subsection": "Truth & Logic",
    "title": "Booleans & Comparisons",
    "category": "Datatypes",
    "readTime": "3 min read",
    "summary": "Work with true and false, ask questions with comparison operators (=, !=, >, <), and test conditions.",
    "body": "\n      <h2>True or False?</h2>\n      <p>A <strong>boolean</strong> is the simplest datatype in computer science. It can only have one of two values: <code>true</code> or <code>false</code>. Think of it like a light switch: either it is on, or it is off!</p>\n\n      <h2>Comparison Operators</h2>\n      <p>When you compare two values, VerScript answers with a boolean:</p>\n      <table class=\"doc-table\">\n        <thead>\n          <tr><th>Operator</th><th>Meaning</th><th>Example</th><th>Result</th></tr>\n        </thead>\n        <tbody>\n          <tr><td><code>=</code></td><td>Is equal to</td><td><code>10 = 10</code></td><td><code>true</code></td></tr>\n          <tr><td><code>!=</code></td><td>Is not equal to</td><td><code>10 != 5</code></td><td><code>true</code></td></tr>\n          <tr><td><code>&gt;</code></td><td>Greater than</td><td><code>15 &gt; 8</code></td><td><code>true</code></td></tr>\n          <tr><td><code>&lt;</code></td><td>Less than</td><td><code>3 &lt; 9</code></td><td><code>true</code></td></tr>\n          <tr><td><code>&gt;=</code></td><td>Greater than or equal</td><td><code>10 &gt;= 10</code></td><td><code>true</code></td></tr>\n          <tr><td><code>&lt;=</code></td><td>Less than or equal</td><td><code>4 &lt;= 2</code></td><td><code>false</code></td></tr>\n        </tbody>\n      </table>\n    ",
    "codeBlocks": [
      {
        "id": "cb_ch7_1",
        "title": "comparisons.vrs",
        "code": "set age: 18\nset canVote: age >= 18\ndisplay \"Eligible to vote? \" + canVote ?color=cyan\n\nset passmark: 50\nset score: 72\ndisplay \"Passed exam? \" + (score >= passmark) ?color=green"
      }
    ],
    "exercises": [
      {
        "id": "ex_ch7_1",
        "title": "Challenge 7: Comparison Check",
        "prompt": "Store whether <code>100 > 50</code> in variable <code>isValid</code>, then display <code>isValid</code>.",
        "starterCode": "! TODO: Check if 100 > 50\n",
        "hint": "set isValid: 100 > 50\ndisplay isValid",
        "solution": "set isValid: 100 > 50\ndisplay isValid",
        "expectedMatch": {}
      }
    ]
  },
  {
    "id": "ch8-logic-gates",
    "number": 8,
    "section": "Section 2: Numbers, Math & Logic",
    "subsection": "Truth & Logic",
    "title": "Boolean Algebra & Logic Gates (&, and, or, nor, xor, xnor, is, typeof)",
    "category": "Datatypes",
    "readTime": "4 min read",
    "summary": "Combine multiple conditions effortlessly using native logic gates (&, and, or, nor, xor, not).",
    "body": "\n      <h2>The Complete VerScript Logic Engine</h2>\n      <p>VerScript provides a comprehensive set of boolean and logical operators designed with strict formal logic semantics:</p>\n\n      <table class=\"doc-table\">\n        <thead>\n          <tr><th>Operator</th><th>Name</th><th>True When</th><th>Syntax Example</th></tr>\n        </thead>\n        <tbody>\n          <tr><td><code>&amp;</code></td><td>Logical AND</td><td>Both operands are true.</td><td><code>a &amp; b</code></td></tr>\n          <tr><td><code>and</code> / <code>nand</code></td><td>Negated AND (NAND)</td><td>True unless both operands are true.</td><td><code>a and b</code> or <code>a nand b</code></td></tr>\n          <tr><td><code>or</code></td><td>Logical OR</td><td>Either operand (or both) is true.</td><td><code>a or b</code></td></tr>\n          <tr><td><code>nor</code></td><td>Negated OR (NOR)</td><td>True only when both operands are false.</td><td><code>a nor b</code></td></tr>\n          <tr><td><code>xor</code></td><td>Exclusive OR (XOR)</td><td>Exactly one operand is true, not both.</td><td><code>a xor b</code></td></tr>\n          <tr><td><code>xnor</code> / <code>xand</code></td><td>Logical Equivalence (XNOR)</td><td>Both operands have the exact same truth value.</td><td><code>a xnor b</code> or <code>a xand b</code></td></tr>\n          <tr><td><code>!</code> / <code>not</code></td><td>Logical NOT</td><td>Inverts truth value.</td><td><code>!flag</code></td></tr>\n          <tr><td><code>is even</code> / <code>is odd</code></td><td>Parity Predicates</td><td>Tests if a numeric value is even or odd.</td><td><code>num is even</code>, <code>num is odd</code></td></tr>\n          <tr><td><code>typeof</code></td><td>Type Introspection</td><td>Returns type string (<code>\"num\"</code>, <code>\"str\"</code>, <code>\"bool\"</code>, <code>\"arr\"</code>, <code>\"entity\"</code>).</td><td><code>typeof [1, 2]</code></td></tr>\n        </tbody>\n      </table>\n  ",
    "codeBlocks": [
      {
        "id": "cb_ch8_1",
        "title": "logic_gates.vrs",
        "code": "set p: true\nset q: false\ndisplay \"p & q: \" + (p & q)\ndisplay \"p xor q: \" + (p xor q)\ndisplay \"p xnor q: \" + (p xnor q)\n\nset val: 42\ndisplay \"42 is even: \" + (val is even) ?color=green\ndisplay \"Type of [1, 2]: \" + (typeof [1, 2]) ?color=cyan"
      }
    ],
    "exercises": [
      {
        "id": "ex_ch8_1",
        "title": "Challenge 8: Safe Launch Check",
        "prompt": "Given <code>isFueled: true</code> and <code>clearWeather: true</code>, check both with <code>&</code> and display <code>\"Ready for takeoff\"</code> in green.",
        "starterCode": "set isFueled: true\nset clearWeather: true\n! TODO: Check both conditions\n",
        "hint": "if isFueled & clearWeather then\n  display \"Ready for takeoff\" ?color=green",
        "solution": "set isFueled: true\nset clearWeather: true\nif isFueled & clearWeather then\n  display \"Ready for takeoff\" ?color=green",
        "expectedMatch": {}
      }
    ]
  },
  {
    "id": "ch9-strings",
    "number": 9,
    "section": "Section 3: Text & Collections",
    "subsection": "Working with Text",
    "title": "Strings & Text Formatting",
    "category": "Datatypes",
    "readTime": "3 min read",
    "summary": "Work with text in VerScript: writing quotes, joining text with +, and including numbers inside messages.",
    "body": "\n      <h2>Working with Text</h2>\n      <p>A <strong>string</strong> is just a sequence of characters enclosed in double quotation marks <code>\"...\"</code>. Strings represent names, messages, file paths, URLs, and any other text.</p>\n\n      <h2>Joining Text with <code>+</code></h2>\n      <p>You can glue pieces of text together using the <code>+</code> operator. VerScript automatically converts numbers and booleans into text when you add them to a string!</p>\n    ",
    "codeBlocks": [
      {
        "id": "cb_ch9_1",
        "title": "strings_intro.vrs",
        "code": "set hero: \"Ada Lovelace\"\nset year: 1815\nset bio: hero + \" was born in \" + year + \".\"\ndisplay bio ?color=cyan"
      }
    ],
    "exercises": [
      {
        "id": "ex_ch9_1",
        "title": "Challenge 9: Personalized Greeting",
        "prompt": "Declare <code>name: \"Sam\"</code>, join it to make <code>\"Hello, Sam!\"</code>, and display it.",
        "starterCode": "! Declare name and display personalized greeting\n",
        "hint": "set name: \"Sam\"\ndisplay \"Hello, \" + name + \"!\"",
        "solution": "set name: \"Sam\"\ndisplay \"Hello, \" + name + \"!\"",
        "expectedMatch": {}
      }
    ]
  },
  {
    "id": "ch10-string-methods",
    "number": 10,
    "section": "Section 3: Text & Collections",
    "subsection": "Working with Text",
    "title": "Native String Operations",
    "category": "Datatypes",
    "readTime": "4 min read",
    "summary": "Transform and inspect text using built-in methods: length, uppercase, lowercase, trimming spaces, splitting, and searching.",
    "body": "\n      <h2>Native String Methods</h2>\n      <p>Strings in VerScript are native UTF-8 byte arrays that expose zero-overhead methods called either as member methods (<code>str.method()</code>) or as functions:</p>\n\n      <table class=\"doc-table\">\n        <thead>\n          <tr><th>Method</th><th>Parameters</th><th>Return Type</th><th>Description</th></tr>\n        </thead>\n        <tbody>\n          <tr><td><code>.len()</code> / <code>.length()</code></td><td>none</td><td>num</td><td>Returns character count.</td></tr>\n          <tr><td><code>.isEmpty()</code></td><td>none</td><td>bool</td><td>True if string length is 0.</td></tr>\n          <tr><td><code>.indexOf(sub)</code></td><td><code>sub: str</code></td><td>num</td><td>First 0-based index of substring, or -1.</td></tr>\n          <tr><td><code>.lastIndexOf(sub)</code></td><td><code>sub: str</code></td><td>num</td><td>Last 0-based index of substring, or -1.</td></tr>\n          <tr><td><code>.contains(sub)</code></td><td><code>sub: str</code></td><td>bool</td><td>True if substring occurs within string.</td></tr>\n          <tr><td><code>.startsWith(prefix)</code></td><td><code>prefix: str</code></td><td>bool</td><td>True if string begins with prefix.</td></tr>\n          <tr><td><code>.endsWith(suffix)</code></td><td><code>suffix: str</code></td><td>bool</td><td>True if string finishes with suffix.</td></tr>\n          <tr><td><code>.charCodeAt(index)</code></td><td><code>index: num</code></td><td>num</td><td>ASCII / UTF-8 integer byte code at index.</td></tr>\n          <tr><td><code>.slice(start, end)</code></td><td><code>start: num, end: num</code></td><td>str</td><td>Extracts substring from start up to end.</td></tr>\n          <tr><td><code>.repeat(count)</code></td><td><code>count: num</code></td><td>str</td><td>Repeats string count times.</td></tr>\n          <tr><td><code>.padLeft(len, pad)</code></td><td><code>len: num, pad: str</code></td><td>str</td><td>Pads left side to reach target length.</td></tr>\n          <tr><td><code>.padRight(len, pad)</code></td><td><code>len: num, pad: str</code></td><td>str</td><td>Pads right side to reach target length.</td></tr>\n          <tr><td><code>.trim()</code></td><td>none</td><td>str</td><td>Strips leading and trailing whitespace.</td></tr>\n          <tr><td><code>.toUpper()</code> / <code>.toLower()</code></td><td>none</td><td>str</td><td>Converts text to uppercase or lowercase.</td></tr>\n          <tr><td><code>.replace(target, rep)</code></td><td><code>target: str, rep: str</code></td><td>str</td><td>Replaces occurrences of target with rep.</td></tr>\n          <tr><td><code>.split(sep)</code></td><td><code>sep: str</code></td><td>arr</td><td>Splits string into an array of substrings.</td></tr>\n        </tbody>\n      </table>\n  ",
    "codeBlocks": [
      {
        "id": "cb_ch10_1",
        "title": "string_cleaning.vrs",
        "code": "set messy: \"   alert: system reboot   \"\nset clean: messy.trim().toUpper()\ndisplay clean ?color=yellow\ndisplay \"Character count: \" + clean.length()"
      }
    ],
    "exercises": [
      {
        "id": "ex_ch10_1",
        "title": "Challenge 10: Clean and Uppercase",
        "prompt": "Clean <code>raw: \"  ready  \"</code> with <code>.trim().toUpper()</code> and display it.",
        "starterCode": "set raw: \"  ready  \"\n! Clean and display raw in uppercase\n",
        "hint": "set clean: raw.trim().toUpper()\ndisplay clean",
        "solution": "set raw: \"  ready  \"\nset clean: raw.trim().toUpper()\ndisplay clean",
        "expectedMatch": {}
      }
    ]
  },
  {
    "id": "ch11-arrays",
    "number": 11,
    "section": "Section 3: Text & Collections",
    "subsection": "Working with Lists",
    "title": "Arrays & Ordered Lists",
    "category": "Datatypes",
    "readTime": "4 min read",
    "summary": "Store lists of numbers or words in square brackets [], access items by index, and add or remove elements.",
    "body": "\n      <h2>Native Array Methods</h2>\n      <p>Arrays in VerScript provide built-in vector methods for high-speed manipulation:</p>\n\n      <table class=\"doc-table\">\n        <thead>\n          <tr><th>Method</th><th>Parameters</th><th>Return Type</th><th>Description</th></tr>\n        </thead>\n        <tbody>\n          <tr><td><code>.len()</code> / <code>.length()</code></td><td>none</td><td>num</td><td>Returns number of items in array.</td></tr>\n          <tr><td><code>.isEmpty()</code></td><td>none</td><td>bool</td><td>True if array count is 0.</td></tr>\n          <tr><td><code>.push(item)</code></td><td><code>item: any</code></td><td>num</td><td>Appends an element to the end of the array.</td></tr>\n          <tr><td><code>.pop()</code></td><td>none</td><td>any</td><td>Removes and returns the last element.</td></tr>\n          <tr><td><code>.indexOf(item)</code></td><td><code>item: any</code></td><td>num</td><td>First 0-based index of item, or -1.</td></tr>\n          <tr><td><code>.contains(item)</code></td><td><code>item: any</code></td><td>bool</td><td>True if element exists in array.</td></tr>\n          <tr><td><code>.slice(start, end)</code></td><td><code>start: num, end: num</code></td><td>arr</td><td>Returns sub-array slice.</td></tr>\n          <tr><td><code>.reverse()</code></td><td>none</td><td>arr</td><td>Reverses the elements in-place.</td></tr>\n          <tr><td><code>.sort()</code></td><td>none</td><td>arr</td><td>Sorts numeric or string elements ascending.</td></tr>\n          <tr><td><code>.swap(i, j)</code></td><td><code>i: num, j: num</code></td><td>num</td><td>Swaps items at indices i and j in-place.</td></tr>\n          <tr><td><code>.fill(val, count)</code></td><td><code>val: any, count: num</code></td><td>arr</td><td>Fills array with count repetitions of val.</td></tr>\n          <tr><td><code>.clear()</code></td><td>none</td><td>num</td><td>Removes all items from array.</td></tr>\n          <tr><td><code>.join(sep)</code></td><td><code>sep: str</code></td><td>str</td><td>Concatenates all items separated by delimiter.</td></tr>\n        </tbody>\n      </table>\n  ",
    "codeBlocks": [
      {
        "id": "cb_ch11_1",
        "title": "array_basics.vrs",
        "code": "set scores: [95, 88, 72, 100]\ndisplay \"First score: \" + scores[0] ?color=cyan\ndisplay \"Total tests taken: \" + scores.length()\n\nscores.push(84)\ndisplay \"Updated list: \" + scores ?color=green"
      }
    ],
    "exercises": [
      {
        "id": "ex_ch11_1",
        "title": "Challenge 11: Create and Access a List",
        "prompt": "Create a list <code>planets: [\"Mars\", \"Venus\", \"Earth\"]</code>, and display the first planet.",
        "starterCode": "! TODO: Create planets array and display first element\n",
        "hint": "set planets: [\"Mars\", \"Venus\", \"Earth\"]\ndisplay planets[0]",
        "solution": "set planets: [\"Mars\", \"Venus\", \"Earth\"]\ndisplay planets[0]",
        "expectedMatch": {}
      }
    ]
  },
  {
    "id": "ch12-variables",
    "number": 12,
    "section": "Section 4: Variables & Lifecycles",
    "subsection": "Variables & Storage",
    "title": "Declaring Variables",
    "category": "Variables",
    "readTime": "3 min read",
    "summary": "Learn how to store data in variables using 'set x: val' or shorthand 'x: val', and update their values over time.",
    "body": "\n      <h2>Variables: Labeled Storage Boxes</h2>\n      <p>A variable is like a labeled box where you keep a value so you can use it later. In VerScript, you can declare a variable in two clean ways:</p>\n      <ul>\n        <li><strong>Explicit:</strong> <code>set speed: 60</code></li>\n        <li><strong>Shorthand:</strong> <code>speed: 60</code></li>\n      </ul>\n      <p>Both work identically! When you want to change what's inside the box, just assign a new value to it.</p>\n    ",
    "codeBlocks": [
      {
        "id": "cb_ch12_1",
        "title": "variables_demo.vrs",
        "code": "set points: 10\ndisplay \"Starting points: \" + points\n\npoints: points + 5\ndisplay \"After bonus: \" + points ?color=green"
      }
    ],
    "exercises": [
      {
        "id": "ex_ch12_1",
        "title": "Challenge 12: Updating a Counter",
        "prompt": "Declare <code>counter: 1</code>, increment it by 1, and display it.",
        "starterCode": "! Declare counter and increment it\n",
        "hint": "set counter: 1\ncounter: counter + 1\ndisplay counter",
        "solution": "set counter: 1\ncounter: counter + 1\ndisplay counter",
        "expectedMatch": {}
      }
    ]
  },
  {
    "id": "ch13-type-constraints",
    "number": 13,
    "section": "Section 4: Variables & Lifecycles",
    "subsection": "Variables & Storage",
    "title": "Built-in Type Constraints (num, str, bool, int, posNum, byte, port, char)",
    "category": "Variables",
    "readTime": "3 min read",
    "summary": "Enforce strict data guarantees by locking variables to specific types (num, str, bool, arr).",
    "body": "\n      <h2>Built-in Primitive & Domain Constraints</h2>\n      <p>VerScript provides native runtime-enforced type constraints that guarantee variable invariants without boilerplate manual checks:</p>\n\n      <table class=\"doc-table\">\n        <thead>\n          <tr><th>Constraint</th><th>Base Type</th><th>Enforced Invariant</th><th>Throws on Violation</th></tr>\n        </thead>\n        <tbody>\n          <tr><td><code>num</code></td><td>Numeric</td><td>Must be a valid integer or float.</td><td><code>DataTypeError</code></td></tr>\n          <tr><td><code>str</code></td><td>String</td><td>Must be a string literal.</td><td><code>DataTypeError</code></td></tr>\n          <tr><td><code>bool</code></td><td>Boolean</td><td>Must be <code>true</code> or <code>false</code>.</td><td><code>DataTypeError</code></td></tr>\n          <tr><td><code>arr</code></td><td>Array</td><td>Must be a list/vector <code>[...]</code>.</td><td><code>DataTypeError</code></td></tr>\n          <tr><td><code>entity</code></td><td>Object</td><td>Must be a instantiated entity class.</td><td><code>DataTypeError</code></td></tr>\n          <tr><td><code>int</code></td><td>num</td><td>Must be a numeric integer.</td><td><code>DataTypeError</code></td></tr>\n          <tr><td><code>posNum</code></td><td>num</td><td>Strictly positive number (<code>value &gt; 0</code>).</td><td><code>DataTypeError</code></td></tr>\n          <tr><td><code>nonNegNum</code></td><td>num</td><td>Non-negative number (<code>value &gt;= 0</code>).</td><td><code>DataTypeError</code></td></tr>\n          <tr><td><code>byte</code></td><td>num</td><td>8-bit unsigned integer (<code>0 &lt;= value &lt;= 255</code>).</td><td><code>DataTypeError</code></td></tr>\n          <tr><td><code>port</code></td><td>num</td><td>Valid network port (<code>1 &lt;= value &lt;= 65535</code>).</td><td><code>DataTypeError</code></td></tr>\n          <tr><td><code>char</code></td><td>str</td><td>Single character string (<code>len == 1</code>).</td><td><code>DataTypeError</code></td></tr>\n          <tr><td><code>nonEmptyStr</code></td><td>str</td><td>String with at least one character (<code>len &gt; 0</code>).</td><td><code>DataTypeError</code></td></tr>\n          <tr><td><code>nonEmptyArr</code></td><td>arr</td><td>Array with at least one element (<code>count &gt; 0</code>).</td><td><code>DataTypeError</code></td></tr>\n        </tbody>\n      </table>\n  ",
    "codeBlocks": [
      {
        "id": "cb_ch13_1",
        "title": "type_safety.vrs",
        "code": "num playerLevel: 5\nstr playerName: \"Hero\"\nbool isVIP: true\n\ndisplay playerName + \" (Level \" + playerLevel + \")\" ?color=cyan"
      }
    ],
    "exercises": [
      {
        "id": "ex_ch13_1",
        "title": "Challenge 13: Type-Constrained Variable",
        "prompt": "Declare a strictly typed number <code>num coins: 50</code>, and display it.",
        "starterCode": "! Declare num coins: 50 and display\n",
        "hint": "num coins: 50\ndisplay coins",
        "solution": "num coins: 50\ndisplay coins",
        "expectedMatch": {}
      }
    ]
  },
  {
    "id": "ch14-lifecycles",
    "number": 14,
    "section": "Section 4: Variables & Lifecycles",
    "subsection": "Variables & Storage",
    "title": "Variable Lifecycles (temp, inst, outscope)",
    "category": "Variables",
    "readTime": "4 min read",
    "summary": "Manage memory automatically: use temp for short-lived data, inst for call-stack isolation, and outscope to export data out of blocks.",
    "body": "\n      <h2>Where Does Data Live?</h2>\n      <p>In large applications, creating variables that hang around forever wastes memory. VerScript gives you three clean lifecycle keywords:</p>\n      <table class=\"doc-table\">\n        <thead>\n          <tr><th>Keyword</th><th>Scope / Lifetime</th><th>Ideal Use Case</th></tr>\n        </thead>\n        <tbody>\n          <tr><td><code>temp</code></td><td>Ephemeral (cleared automatically after block)</td><td>Fast intermediate calculations in loops.</td></tr>\n          <tr><td><code>inst</code></td><td>Instance / Call-Stack isolated</td><td>Local routine scratchpads preventing name collisions.</td></tr>\n          <tr><td><code>outscope</code></td><td>Promoted to outer enclosing scope</td><td>Returning or exporting values computed inside nested blocks.</td></tr>\n        </tbody>\n      </table>\n    ",
    "codeBlocks": [
      {
        "id": "cb_ch14_1",
        "title": "scopes.vrs",
        "code": "loop 2\n  temp cacheKey: \"session_token\"\n  display \"Using temp cache: \" + cacheKey ?color=yellow\n\nif true then\n  outscope exportedVal: 42\ndisplay \"Exported outside if block: \" + exportedVal ?color=green"
      }
    ],
    "exercises": [
      {
        "id": "ex_ch14_1",
        "title": "Challenge 14: Exporting a Variable with outscope",
        "prompt": "Inside an <code>if true then</code> block, use <code>outscope result: 100</code>, and display <code>result</code> outside.",
        "starterCode": "if true then\n  ! TODO: use outscope result: 100\n",
        "hint": "if true then\n  outscope result: 100\ndisplay result",
        "solution": "if true then\n  outscope result: 100\ndisplay result",
        "expectedMatch": {}
      }
    ]
  },
  {
    "id": "ch15-if-else",
    "number": 15,
    "section": "Section 5: Control Flow & Decisions",
    "subsection": "Branching Decisions",
    "title": "If-Else Statements",
    "category": "Control Flow",
    "readTime": "3 min read",
    "summary": "Make decisions in your code using if, then, and else blocks with clean, indentation-based syntax.",
    "body": "\n      <h2>Making Decisions</h2>\n      <p>Programs need to react differently depending on what's happening. An <strong>if-else statement</strong> lets your code choose between different paths.</p>\n\n      <h2>Syntax Blueprint</h2>\n      <pre><code>if condition then\n  ! Runs if condition is true\nelse\n  ! Runs if condition is false</code></pre>\n      <p>Notice how easy it is to read: simply indent the lines you want to run inside each branch!</p>\n    ",
    "codeBlocks": [
      {
        "id": "cb_ch15_1",
        "title": "if_else_demo.vrs",
        "code": "set battery: 15\n\nif battery > 20 then\n  display \"Battery healthy.\" ?color=green\nelse\n  display \"Low battery warning!\" ?color=red"
      }
    ],
    "exercises": [
      {
        "id": "ex_ch15_1",
        "title": "Challenge 15: Temperature Alert",
        "prompt": "Given <code>temp: 35</code>, if <code>temp > 30</code> display <code>\"Hot\"</code> else display <code>\"Pleasant\"</code>.",
        "starterCode": "set temp: 35\n! Check temperature and display message\n",
        "hint": "if temp > 30 then\n  display \"Hot\"\nelse\n  display \"Pleasant\"",
        "solution": "set temp: 35\nif temp > 30 then\n  display \"Hot\"\nelse\n  display \"Pleasant\"",
        "expectedMatch": {}
      }
    ]
  },
  {
    "id": "ch16-ternary-expressions",
    "number": 16,
    "section": "Section 5: Control Flow & Decisions",
    "subsection": "Branching Decisions",
    "title": "Chained & Nested Ternary Expressions",
    "category": "Control Flow",
    "readTime": "4 min read",
    "summary": "Write compact one-line decisions and multi-way chained conditions using 'if cond then val else if cond2 then val2 else val3'.",
    "body": "\n      <h2>Decisions as Expressions</h2>\n      <p>Often you want to set a variable directly to one of several choices based on a condition, without writing a multi-line <code>if-else</code> block. In VerScript, you can write:</p>\n      <pre><code>set status: if score >= 50 then \"Pass\" else \"Fail\"</code></pre>\n\n      <h2>Chained Multi-Branch Decisions</h2>\n      <p>You can chain multiple conditions naturally using <code>else if</code>:</p>\n      <pre><code>set grade: if score >= 90 then \"A\" else if score >= 80 then \"B\" else if score >= 70 then \"C\" else \"F\"</code></pre>\n      <p>The engine tests each condition from left to right and evaluates only the matching branch! You can also wrap ternaries in parentheses inside arithmetic formulas: <code>(if active then 10 else 0) + 5</code>.</p>\n    ",
    "codeBlocks": [
      {
        "id": "cb_ch16_1",
        "title": "ternary_showcase.vrs",
        "code": "set temperature: 24\nset weather: if temperature > 30 then \"Scorching\" else if temperature > 20 then \"Warm\" else if temperature > 10 then \"Cool\" else \"Freezing\"\ndisplay \"Current Condition: \" + weather ?color=cyan\n\nset baseBonus: 10\nset totalBonus: (if temperature > 20 then 100 else 20) + baseBonus\ndisplay \"Calculated Bonus: \" + totalBonus ?color=green"
      }
    ],
    "exercises": [
      {
        "id": "ex_ch16_1",
        "title": "Challenge 16: Grade Tier Evaluator",
        "prompt": "Given <code>score: 85</code>, set <code>tier</code> using chained ternary: if >= 90 then \"Platinum\", else if >= 80 then \"Gold\", else \"Silver\". Display tier.",
        "starterCode": "set score: 85\n! Set tier with chained ternary and display it\n",
        "hint": "set tier: if score >= 90 then \"Platinum\" else if score >= 80 then \"Gold\" else \"Silver\"\ndisplay tier",
        "solution": "set score: 85\nset tier: if score >= 90 then \"Platinum\" else if score >= 80 then \"Gold\" else \"Silver\"\ndisplay tier",
        "expectedMatch": {}
      }
    ]
  },
  {
    "id": "ch17-guard-clauses",
    "number": 17,
    "section": "Section 5: Control Flow & Decisions",
    "subsection": "Branching Decisions",
    "title": "Guard Clauses",
    "category": "Control Flow",
    "readTime": "3 min read",
    "summary": "Assert prerequisites early to keep your code flat and avoid deep nested 'pyramid of doom' indentations.",
    "body": "\n      <h2>The Problem with Deep Nesting</h2>\n      <p>When you have to verify five things before doing a task, nesting five <code>if</code> statements makes code drift far to the right. This is known as the <em>pyramid of doom</em>.</p>\n\n      <h2>The Solution: <code>guard</code></h2>\n      <p>A <strong>guard clause</strong> states what MUST be true to continue. If it is NOT true, the <code>else</code> block runs immediately to exit early!</p>\n      <pre><code>guard user.isAuthenticated else\n  display \"Please log in first.\" ?color=red\n  reply false</code></pre>\n    ",
    "codeBlocks": [
      {
        "id": "cb_ch17_1",
        "title": "guard_demo.vrs",
        "code": "def func processOrder amount isStoreOpen\n  guard isStoreOpen else reply 0\n  guard amount > 0 else reply 0\n  display \"Order confirmed: $\" + amount ?color=green\n  reply amount\n\nprocessOrder(75, true)"
      }
    ],
    "exercises": [
      {
        "id": "ex_ch17_1",
        "title": "Challenge 17: Validating Access with guard",
        "prompt": "Write a function <code>checkAccess</code> that uses <code>guard hasCard else</code> to display <code>\"Denied\"</code> and reply 0, otherwise displays <code>\"Approved\"</code> and replies 1.",
        "starterCode": "def func checkAccess hasCard\n  ! Use guard to check hasCard\n",
        "hint": "def func checkAccess hasCard\n  guard hasCard else\n    display \"Denied\"\n    reply 0\n  display \"Approved\"\n  reply 1\ncheckAccess(true)",
        "solution": "def func checkAccess hasCard\n  guard hasCard else\n    display \"Denied\"\n    reply 0\n  display \"Approved\"\n  reply 1\ncheckAccess(true)",
        "expectedMatch": {}
      }
    ]
  },
  {
    "id": "ch18-counted-loops",
    "number": 18,
    "section": "Section 5: Control Flow & Decisions",
    "subsection": "Loops & Repetition",
    "title": "Counted Loops: The 'loop' Command",
    "category": "Control Flow",
    "readTime": "3 min read",
    "summary": "Repeat an action an exact number of times effortlessly using the simple 'loop N' command.",
    "body": "\n      <h2>Repeating Actions Easily</h2>\n      <p>When you know exactly how many times an action should happen (e.g. blink an LED 5 times, ping 3 servers), you don't need a counter variable. Just use <code>loop N</code>!</p>\n      <pre><code>loop 3\n  display \"Beep!\" ?color=cyan</code></pre>\n    ",
    "codeBlocks": [
      {
        "id": "cb_ch18_1",
        "title": "loop_demo.vrs",
        "code": "display \"Starting countdown sequence:\"\nloop 3\n  display \"Tick...\" ?color=yellow\ndisplay \"Liftoff!\" ?color=green"
      }
    ],
    "exercises": [
      {
        "id": "ex_ch18_1",
        "title": "Challenge 18: Repeat 4 Times",
        "prompt": "Use <code>loop 4</code> to display <code>\"Pulse\"</code> in green.",
        "starterCode": "! Repeat display \"Pulse\" ?color=green 4 times\n",
        "hint": "loop 4\n  display \"Pulse\" ?color=green",
        "solution": "loop 4\n  display \"Pulse\" ?color=green",
        "expectedMatch": {}
      }
    ]
  },
  {
    "id": "ch19-iterate-loops",
    "number": 19,
    "section": "Section 5: Control Flow & Decisions",
    "subsection": "Loops & Repetition",
    "title": "Ranged Loops: The 'iterate' Command",
    "category": "Control Flow",
    "readTime": "4 min read",
    "summary": "Step through a range of numbers from start to finish with optional step intervals using 'iterate i from 1 to 10 step 2'.",
    "body": "\n      <h2>Counting with an Index</h2>\n      <p>When you need to know <em>which</em> turn of the loop you are on, use <code>iterate</code>! It creates a temporary counter variable that changes on every cycle:</p>\n      <pre><code>iterate i from 1 to 5\n  display \"Iteration #\" + i</code></pre>\n      <p>You can also count by steps (e.g. <code>step 2</code>) or count backwards!</p>\n    ",
    "codeBlocks": [
      {
        "id": "cb_ch19_1",
        "title": "iterate_demo.vrs",
        "code": "display \"Counting by twos:\"\niterate n from 0 to 8 step 2\n  display \"Number: \" + n ?color=cyan"
      }
    ],
    "exercises": [
      {
        "id": "ex_ch19_1",
        "title": "Challenge 19: Count from 1 to 3",
        "prompt": "Use <code>iterate i from 1 to 3</code> to display each number.",
        "starterCode": "! Count from 1 to 3 and display each\n",
        "hint": "iterate i from 1 to 3\n  display i",
        "solution": "iterate i from 1 to 3\n  display i",
        "expectedMatch": {}
      }
    ]
  },
  {
    "id": "ch20-while-until-loops",
    "number": 20,
    "section": "Section 5: Control Flow & Decisions",
    "subsection": "Loops & Repetition",
    "title": "Condition Loops: While & Until",
    "category": "Control Flow",
    "readTime": "3 min read",
    "summary": "Repeat actions while a condition remains true, or keep running until a target condition is finally reached.",
    "body": "\n      <h2>Looping Based on Conditions</h2>\n      <p>What if you don't know in advance how many times something needs to run? (For example: <em>\"Keep downloading data while connection is active\"</em> or <em>\"Wait until tank is full\"</em>).</p>\n      <ul>\n        <li><code>while condition</code>: Runs as long as condition stays <code>true</code>.</li>\n        <li><code>until condition</code>: Runs until condition becomes <code>true</code> (stops as soon as it's reached!).</li>\n      </ul>\n    ",
    "codeBlocks": [
      {
        "id": "cb_ch20_1",
        "title": "while_until.vrs",
        "code": "set fuel: 10\nwhile fuel > 0\n  display \"Fuel level: \" + fuel\n  fuel: fuel - 3\n\ndisplay \"Refueling complete.\" ?color=green"
      }
    ],
    "exercises": [
      {
        "id": "ex_ch20_1",
        "title": "Challenge 20: While Loop Countdown",
        "prompt": "Start with <code>x: 3</code>. Use <code>while x > 0</code> to display <code>x</code> and decrement <code>x: x - 1</code>.",
        "starterCode": "set x: 3\n! TODO: Write while loop\n",
        "hint": "set x: 3\nwhile x > 0\n  display x\n  x: x - 1",
        "solution": "set x: 3\nwhile x > 0\n  display x\n  x: x - 1",
        "expectedMatch": {}
      }
    ]
  },
  {
    "id": "ch21-pipelines",
    "number": 21,
    "section": "Section 6: Modern Flow & Type Definitions",
    "subsection": "Advanced Flow",
    "title": "Forward Pipelines (|>)",
    "category": "Modern Flow",
    "readTime": "3 min read",
    "summary": "Write clean, readable transformations from left to right using the forward pipeline operator |>.",
    "body": "\n      <h2>The Problem with Nested Calls</h2>\n      <p>When you apply multiple operations to a value, nested function calls read inside-out: <code>display(clean(uppercase(trim(text))))</code>. It's hard to read and easy to misplace parentheses!</p>\n\n      <h2>The Forward Pipeline Operator: <code>|&gt;</code></h2>\n      <p>The pipeline operator passes the result of the left side directly into the function on the right:</p>\n      <pre><code>rawText |> trim |> toUpper |> display</code></pre>\n      <p>Now your code reads like an assembly line: natural, sequential, and crystal clear!</p>\n    ",
    "codeBlocks": [
      {
        "id": "cb_ch21_1",
        "title": "pipeline_demo.vrs",
        "code": "def func doubleVal n\n  reply n * 2\n\ndef func addTen n\n  reply n + 10\n\nset res: 5 |> doubleVal |> addTen\ndisplay \"Pipelined result: \" + res ?color=green"
      }
    ],
    "exercises": [
      {
        "id": "ex_ch21_1",
        "title": "Challenge 21: Pipelined Number",
        "prompt": "Pipe number <code>7</code> into a function <code>inc</code> that returns <code>n + 1</code>, and display the result.",
        "starterCode": "def func inc n\n  reply n + 1\n! Pipe 7 into inc and display\n",
        "hint": "def func inc n\n  reply n + 1\n7 |> inc |> display",
        "solution": "def func inc n\n  reply n + 1\n7 |> inc |> display",
        "expectedMatch": {}
      }
    ]
  },
  {
    "id": "ch22-pattern-matching",
    "number": 22,
    "section": "Section 6: Modern Flow & Type Definitions",
    "subsection": "Advanced Flow",
    "title": "Pattern Matching (match & when)",
    "category": "Modern Flow",
    "readTime": "4 min read",
    "summary": "Replace messy switch or long if-else ladders with declarative, expressive pattern matching.",
    "body": "\n      <h2>Expressive Value Matching</h2>\n      <p>When branching on specific commands, HTTP status codes, or user inputs, <code>match</code> provides a clean, elegant layout:</p>\n      <pre><code>match status\n  when 200: display \"OK\"\n  when 404: display \"Not Found\"\n  else: display \"Unknown Error\"</code></pre>\n    ",
    "codeBlocks": [
      {
        "id": "cb_ch22_1",
        "title": "match_demo.vrs",
        "code": "set action: \"start\"\n\nmatch action\n  when \"start\": display \"Engine starting up...\" ?color=green\n  when \"stop\":  display \"Engine shutting down.\" ?color=yellow\n  else:         display \"Unknown command.\" ?color=red"
      }
    ],
    "exercises": [
      {
        "id": "ex_ch22_1",
        "title": "Challenge 22: Route Matching",
        "prompt": "Match variable <code>code: 200</code>. When 200 display <code>\"Success\"</code>, else display <code>\"Error\"</code>.",
        "starterCode": "set code: 200\n! Match code\n",
        "hint": "set code: 200\nmatch code\n  when 200: display \"Success\"\n  else: display \"Error\"",
        "solution": "set code: 200\nmatch code\n  when 200: display \"Success\"\n  else: display \"Error\"",
        "expectedMatch": {}
      }
    ]
  },
  {
    "id": "ch23-enums",
    "number": 23,
    "section": "Section 6: Modern Flow & Type Definitions",
    "subsection": "Structured Data",
    "title": "Enums: Meaningful Constant Names",
    "category": "Modern Flow",
    "readTime": "3 min read",
    "summary": "Avoid magic numbers by declaring self-documenting enumerated constants like 'enum Status: READY=1, BUSY=2'.",
    "body": "\n      <h2>What are Enums?</h2>\n      <p>Instead of remembering that <code>1</code> means \"Ready\" and <code>2</code> means \"Error\", you can declare an <strong>enum</strong>. It gives human-readable names to constant states!</p>\n      <pre><code>enum Status: READY=1, ERROR=2, OFFLINE=3\ndisplay Status.READY</code></pre>\n    ",
    "codeBlocks": [
      {
        "id": "cb_ch23_1",
        "title": "enums_demo.vrs",
        "code": "enum Priority: LOW=10, MEDIUM=50, HIGH=100\n\nset taskPriority: Priority.HIGH\nif taskPriority >= Priority.HIGH then\n  display \"Critical task scheduled!\" ?color=red"
      }
    ],
    "exercises": [
      {
        "id": "ex_ch23_1",
        "title": "Challenge 23: Declare and Read an Enum",
        "prompt": "Declare <code>enum Mode: DEV=1, PROD=2</code>, and display <code>Mode.PROD</code>.",
        "starterCode": "! Declare Mode enum and display PROD\n",
        "hint": "enum Mode: DEV=1, PROD=2\ndisplay Mode.PROD",
        "solution": "enum Mode: DEV=1, PROD=2\ndisplay Mode.PROD",
        "expectedMatch": {}
      }
    ]
  },
  {
    "id": "ch24-structs",
    "number": 24,
    "section": "Section 6: Modern Flow & Type Definitions",
    "subsection": "Structured Data",
    "title": "Typed Structs: Grouped Fields",
    "category": "Modern Flow",
    "readTime": "4 min read",
    "summary": "Define clean, strongly typed data models like 'struct Point { num x, num y }' to organize related information.",
    "body": "\n      <h2>Grouping Related Information</h2>\n      <p>When you have a user with a name, an age, and an email address, passing them around as three separate variables gets messy. A <strong>struct</strong> groups them into a single record with named, typed fields!</p>\n      <pre><code>struct User {\n  str name\n  num age\n}</code></pre>\n    ",
    "codeBlocks": [
      {
        "id": "cb_ch24_1",
        "title": "struct_demo.vrs",
        "code": "struct Point: x: num, y: num\n\nset pt: Point(10, 25)\ndisplay \"Point coordinates: (\" + pt.x + \", \" + pt.y + \")\" ?color=cyan"
      }
    ],
    "exercises": [
      {
        "id": "ex_ch24_1",
        "title": "Challenge 24: Vector2 Struct",
        "prompt": "Define <code>struct Vec2 { num x, num y }</code>, create <code>v: Vec2(3, 4)</code>, and display <code>v.x + v.y</code>.",
        "starterCode": "! Define Vec2 struct and display sum of coordinates\n",
        "hint": "struct Vec2 {\n  num x\n  num y\n}\nset v: Vec2(3, 4)\ndisplay v.x + v.y",
        "solution": "struct Vec2 {\n  num x\n  num y\n}\nset v: Vec2(3, 4)\ndisplay v.x + v.y",
        "expectedMatch": {}
      }
    ]
  },
  {
    "id": "ch25-datatype-constraints",
    "number": 25,
    "section": "Section 6: Modern Flow & Type Definitions",
    "subsection": "Structured Data",
    "title": "Custom DataType Constraints",
    "category": "Modern Flow",
    "readTime": "3 min read",
    "summary": "Create custom validated types with rules like 'DataType Port: it >= 1 & it <= 65535'.",
    "body": "\n      <h2>Validating Values Automatically</h2>\n      <p>What if you want a type for network ports that guarantees the number is between 1 and 65535? VerScript lets you define custom <strong>DataType</strong> rules where <code>it</code> refers to the assigned value:</p>\n      <pre><code>DataType Port:\n  it >= 1 & it <= 65535\n\nPort webPort: 8080 ! Valid!\nPort badPort: 99999 ! Safely throws DataTypeError!</code></pre>\n    ",
    "codeBlocks": [
      {
        "id": "cb_ch25_1",
        "title": "custom_datatypes.vrs",
        "code": "DataType PositiveNum extends num\n  it > 0\n\nPositiveNum validCount: 15\ndisplay \"Valid count stored: \" + validCount ?color=green"
      }
    ],
    "exercises": [
      {
        "id": "ex_ch25_1",
        "title": "Challenge 25: Age Validator",
        "prompt": "Define <code>DataType AdultAge: it >= 18</code> and declare <code>AdultAge age: 21</code>, then display <code>age</code>.",
        "starterCode": "! Define AdultAge and declare age: 21\n",
        "hint": "DataType AdultAge:\n  it >= 18\nAdultAge age: 21\ndisplay age",
        "solution": "DataType AdultAge:\n  it >= 18\nAdultAge age: 21\ndisplay age",
        "expectedMatch": {}
      }
    ]
  },
  {
    "id": "ch26-functions",
    "number": 26,
    "section": "Section 7: Procedures, Functions & Purity",
    "subsection": "Modular Code",
    "title": "Functions, Return Values & The '?' Attribute Operator",
    "category": "Routines",
    "readTime": "4 min read",
    "summary": "Package reusable calculations into functions with 'def func name arg1 arg2' and return values using 'reply'.",
    "body": "\n      <h2>Defining Functions in VerScript</h2>\n      <p>Functions in VerScript are declared using either <code>def func name(params):</code> or simply <code>func name(params):</code>. They receive arguments and return computed results using the <code>reply</code> command.</p>\n\n      <h2>The <code>?</code> Attribute Operator on Functions & Methods</h2>\n      <p>The question mark <code>?</code> serves as the <strong>Attribute Operator</strong> in VerScript. You can attach optional execution metadata, optimization pragmas, and execution attributes to functions and methods directly following the parameter list:</p>\n\n      <pre><code>! Function with attached execution attributes\nfunc computeTax(amount: num, rate: num) ?pure=true ?memoize=true ?timeout=2000:\n    reply (amount * rate) / 100\n\nfunc fetchRecords(id: num) ?retry=3 ?audit=true ?log=true:\n    reply \"Record #\" + id</code></pre>\n\n      <table class=\"doc-table\">\n        <thead>\n          <tr><th>Attribute</th><th>Typical Values</th><th>Purpose</th></tr>\n        </thead>\n        <tbody>\n          <tr><td><code>?pure</code></td><td><code>true</code>, <code>false</code></td><td>Declares that the routine has no side-effects and depends solely on its inputs.</td></tr>\n          <tr><td><code>?memoize</code></td><td><code>true</code>, <code>false</code></td><td>Enables deterministic caching of return values for identical inputs.</td></tr>\n          <tr><td><code>?timeout</code></td><td>integer ms (e.g. <code>5000</code>)</td><td>Specifies an execution time budget before aborting.</td></tr>\n          <tr><td><code>?retry</code></td><td>integer count (e.g. <code>3</code>)</td><td>Configures automatic retry attempts upon recoverable transient failure.</td></tr>\n          <tr><td><code>?audit</code> / <code>?log</code></td><td><code>true</code>, <code>false</code></td><td>Directs logging interceptors to record execution telemetry.</td></tr>\n        </tbody>\n      </table>\n\n      <h2>The Attribute Operator on Statements</h2>\n      <p>The <code>?</code> attribute operator is also used universally across VerScript statements:</p>\n      <ul>\n        <li><code>display \"Done\" ?color=green ?newline=false ?inline</code> (visual output styling)</li>\n        <li><code>prompt username ?default=\"Guest\"</code> (fallback values)</li>\n        <li><code>throw RuntimeError \"Timeout\" ?msg=\"Network connection lost\"</code> (error metadata)</li>\n      </ul>\n  ",
    "codeBlocks": [
      {
        "id": "cb_ch26_1",
        "title": "function_attributes.vrs",
        "code": "func add(a: num, b: num) ?pure=true ?memoize=true:\n    reply a + b\n\nfunc greet(name: str) ?audit=true:\n    reply \"Hello, \" + name\n\ndisplay add(25, 75) ?color=cyan\ndisplay greet(\"Explorer\") ?color=green"
      }
    ],
    "exercises": [
      {
        "id": "ex_ch26_1",
        "title": "Challenge 26: Multiply Function",
        "prompt": "Define <code>def func mul a b</code> that returns <code>a * b</code>, call <code>mul(6, 7)</code>, and display the result.",
        "starterCode": "! Define mul function and call it\n",
        "hint": "def func mul a b\n  reply a * b\ndisplay mul(6, 7)",
        "solution": "def func mul a b\n  reply a * b\ndisplay mul(6, 7)",
        "expectedMatch": {}
      }
    ]
  },
  {
    "id": "ch27-inbound-purity",
    "number": 27,
    "section": "Section 7: Procedures, Functions & Purity",
    "subsection": "Modular Code",
    "title": "Inbound Purity Contracts",
    "category": "Routines",
    "readTime": "4 min read",
    "summary": "Write pure, side-effect-free code with 'inbound' parameters to guarantee variables cannot be modified by mistake.",
    "body": "\n      <h2>The Peace of Mind of Pure Functions</h2>\n      <p>When you pass a list of users to a function, you want to be 100% confident the function won't accidentally delete or mutate your original list! In VerScript, tagging a parameter with <code>inbound</code> locks it as read-only.</p>\n    ",
    "codeBlocks": [
      {
        "id": "cb_ch27_1",
        "title": "purity_demo.vrs",
        "code": "def func computeAverage inbound scores\n  set sum: 0\n  iterate i from 0 to scores.length() - 1\n    sum: sum + scores[i]\n  reply sum / scores.length()\n\nset grades: [80, 90, 100]\ndisplay \"Average: \" + computeAverage(grades) ?color=cyan"
      }
    ],
    "exercises": [
      {
        "id": "ex_ch27_1",
        "title": "Challenge 27: Pure First Element",
        "prompt": "Define <code>def func getFirst inbound list</code> that returns <code>list[0]</code>, and call it on <code>[10, 20]</code>.",
        "starterCode": "! Define pure getFirst function\n",
        "hint": "def func getFirst inbound list\n  reply list[0]\ndisplay getFirst([10, 20])",
        "solution": "def func getFirst inbound list\n  reply list[0]\ndisplay getFirst([10, 20])",
        "expectedMatch": {}
      }
    ]
  },
  {
    "id": "ch28-methods-outbound",
    "number": 28,
    "section": "Section 7: Procedures, Functions & Purity",
    "subsection": "Modular Code",
    "title": "Methods & Outbound Mutation",
    "category": "Routines",
    "readTime": "4 min read",
    "summary": "Distinguish side-effecting procedures from pure calculations using 'def method' and 'outbound' parameters.",
    "body": "\n      <h2>Methods and Side-Effects</h2>\n      <p>In VerScript, routines designed to mutate outer state, write to files, or emit network packets are designated as <code>method</code> rather than <code>func</code>. Like functions, methods support the <code>?</code> attribute operator:</p>\n\n      <pre><code>method processPayment(account: str, amount: num) ?audit=true ?retry=3 ?log=true:\n    display \"Debiting \" + amount + \" from \" + account ?color=yellow</code></pre>\n\n      <div class=\"callout-box tip\">\n        <div class=\"callout-title\">💡 Pure Func vs Mutating Method</div>\n        <p>A <code>func</code> enforces inbound purity and cannot modify outer variables. A <code>method</code> is permitted to mutate entity state and outer scopes.</p>\n      </div>\n  ",
    "codeBlocks": [
      {
        "id": "cb_ch28_1",
        "title": "methods_demo.vrs",
        "code": "def method grantBonus outbound playerPoints bonus\n  playerPoints: playerPoints + bonus\n\nset myScore: 50\ngrantBonus(myScore, 25)\ndisplay \"Updated score: \" + myScore ?color=green"
      }
    ],
    "exercises": [
      {
        "id": "ex_ch28_1",
        "title": "Challenge 28: Outbound Counter",
        "prompt": "Define <code>def method increment outbound val</code> that sets <code>val: val + 1</code>. Test on <code>c: 5</code> and display <code>c</code>.",
        "starterCode": "set c: 5\n! Define increment method and call on c\n",
        "hint": "def method increment outbound val\n  val: val + 1\nset c: 5\nincrement(c)\ndisplay c",
        "solution": "def method increment outbound val\n  val: val + 1\nset c: 5\nincrement(c)\ndisplay c",
        "expectedMatch": {}
      }
    ]
  },
  {
    "id": "ch29-recursion",
    "number": 29,
    "section": "Section 7: Procedures, Functions & Purity",
    "subsection": "Modular Code",
    "title": "Recursion & Call Stacks",
    "category": "Routines",
    "readTime": "4 min read",
    "summary": "Solve problems by having a function call itself, understanding base conditions and stack limits.",
    "body": "\n      <h2>Functions Calling Themselves</h2>\n      <p><strong>Recursion</strong> happens when a function calls itself to solve a smaller piece of the same problem. Every recursive function needs a <strong>base case</strong>: a condition that stops the calls so it doesn't loop forever!</p>\n    ",
    "codeBlocks": [
      {
        "id": "cb_ch29_1",
        "title": "recursion_demo.vrs",
        "code": "def func countdown n\n  if n = 0 then\n    display \"Blast off!\" ?color=green\n    reply 0\n  display \"Countdown: \" + n ?color=yellow\n  reply countdown(n - 1)\n\ncountdown(3)"
      }
    ],
    "exercises": [
      {
        "id": "ex_ch29_1",
        "title": "Challenge 29: Recursive Sum",
        "prompt": "Write <code>def func sumTo n</code>: if n <= 1 reply 1, else reply n + sumTo(n - 1). Call <code>sumTo(4)</code> and display it.",
        "starterCode": "! Write recursive sumTo function\n",
        "hint": "def func sumTo n\n  if n <= 1 then\n    reply 1\n  reply n + sumTo(n - 1)\ndisplay sumTo(4)",
        "solution": "def func sumTo n\n  if n <= 1 then\n    reply 1\n  reply n + sumTo(n - 1)\ndisplay sumTo(4)",
        "expectedMatch": {}
      }
    ]
  },
  {
    "id": "ch30-entities",
    "number": 30,
    "section": "Section 8: Object-Oriented Programming",
    "subsection": "Entities & Classes",
    "title": "Entities & Dynamic Dictionaries",
    "category": "OOP",
    "readTime": "4 min read",
    "summary": "Store key-value properties dynamically in lightweight dictionary objects using 'entity'.",
    "body": "\n      <h2>Objects with Named Properties</h2>\n      <p>An <strong>entity</strong> in VerScript is a flexible object where you can attach properties on the fly using dot notation: <code>user.name: \"Alice\"</code>. It's like a dictionary or JSON object!</p>\n    ",
    "codeBlocks": [
      {
        "id": "cb_ch30_1",
        "title": "entity_demo.vrs",
        "code": "class Hero(hero_name, hero_hp)\n  dynamic:\n    name: hero_name\n    hp: hero_hp\n\nh: Hero(\"Orion\", 100)\ndisplay \"Hero: \" + h.name + \" - HP: \" + h.hp ?color=cyan"
      }
    ],
    "exercises": [
      {
        "id": "ex_ch30_1",
        "title": "Challenge 30: Create an Entity",
        "prompt": "Create <code>car: entity</code>, set <code>car.brand: \"Tesla\"</code> and <code>car.speed: 120</code>, and display <code>car.brand</code>.",
        "starterCode": "! Create car entity and display brand\n",
        "hint": "set car: entity\ncar.brand: \"Tesla\"\ncar.speed: 120\ndisplay car.brand",
        "solution": "set car: entity\ncar.brand: \"Tesla\"\ncar.speed: 120\ndisplay car.brand",
        "expectedMatch": {}
      }
    ]
  },
  {
    "id": "ch31-classes",
    "number": 31,
    "section": "Section 8: Object-Oriented Programming",
    "subsection": "Entities & Classes",
    "title": "Classes & Encapsulation",
    "category": "OOP",
    "readTime": "4 min read",
    "summary": "Define blueprints for objects with 'class', separating shared immutable state (static:) from per-instance state (dynamic:).",
    "body": "\n      <h2>Blueprints for Reusable Objects</h2>\n      <p>While an entity is created one-by-one, a <strong>class</strong> is a reusable blueprint. In VerScript, a class clearly separates:</p>\n      <ul>\n        <li><code>static:</code> Shared constants or class-wide methods.</li>\n        <li><code>dynamic:</code> Properties and behaviors that belong to each individual object.</li>\n      </ul>\n    ",
    "codeBlocks": [
      {
        "id": "cb_ch31_1",
        "title": "class_blueprint.vrs",
        "code": "class Robot(robot_name)\n  static:\n    public faction: \"Auton\"\n  dynamic:\n    name: robot_name\n    def func greet guest\n      reply \"Greetings, \" + guest + \"!\"\n\nbot: Robot(\"Apex\")\ndisplay bot.greet(\"Captain\") ?color=green"
      }
    ],
    "exercises": [
      {
        "id": "ex_ch31_1",
        "title": "Challenge 31: Simple Class",
        "prompt": "Define <code>class Counter</code> with <code>dynamic: def func tick reply 1</code>. Instantiate <code>c: Counter()</code> and display <code>c.tick()</code>.",
        "starterCode": "! Define Counter class and call tick\n",
        "hint": "class Counter\n  dynamic:\n    def func tick\n      reply 1\nset c: Counter()\ndisplay c.tick()",
        "solution": "class Counter\n  dynamic:\n    def func tick\n      reply 1\nset c: Counter()\ndisplay c.tick()",
        "expectedMatch": {}
      }
    ]
  },
  {
    "id": "ch32-lifecycle-instantiation",
    "number": 32,
    "section": "Section 8: Object-Oriented Programming",
    "subsection": "Entities & Classes",
    "title": "Entity Lifecycles & Instantiation",
    "category": "OOP",
    "readTime": "4 min read",
    "summary": "Create instances of classes, bind methods to data, and inspect object structures at runtime.",
    "body": "\n      <h2>Bringing Blueprints to Life</h2>\n      <p>When you call <code>MyClass()</code>, the engine allocates a fresh entity in memory, binds all dynamic routines to it, and gives you back a fully formed instance.</p>\n    ",
    "codeBlocks": [
      {
        "id": "cb_ch32_1",
        "title": "instantiation.vrs",
        "code": "class Player\n  dynamic:\n    def func info name score\n      reply \"Player \" + name + \" has \" + score + \" points.\"\n\nset p1: Player()\ndisplay p1.info(\"Luna\", 450) ?color=cyan"
      }
    ],
    "exercises": [
      {
        "id": "ex_ch32_1",
        "title": "Challenge 32: Player Setup",
        "prompt": "Create an instance <code>p: Player()</code> from the code block and call <code>p.info(\"Sol\", 500)</code>.",
        "starterCode": "class Player\n  dynamic:\n    def func info name score\n      reply \"Player \" + name + \" has \" + score + \" points.\"\n! TODO: Instantiate and display info\n",
        "hint": "set p: Player()\ndisplay p.info(\"Sol\", 500)",
        "solution": "class Player\n  dynamic:\n    def func info name score\n      reply \"Player \" + name + \" has \" + score + \" points.\"\nset p: Player()\ndisplay p.info(\"Sol\", 500)",
        "expectedMatch": {}
      }
    ]
  },
  {
    "id": "ch33-meta-blocks",
    "number": 33,
    "section": "Section 8: Object-Oriented Programming",
    "subsection": "Entities & Classes",
    "title": "Metaprogramming & Internal 'meta'",
    "category": "OOP",
    "readTime": "4 min read",
    "summary": "Encapsulate private secrets, encryption keys, and internal state safely inside protected meta blocks.",
    "body": "\n      <h2>Guarding Private Implementation Details</h2>\n      <p>Some data should never be exposed to outside code: API master keys, database passwords, or internal state machines. VerScript includes an internal <code>meta</code> partition that can ONLY be accessed from within the class itself!</p>\n    ",
    "codeBlocks": [
      {
        "id": "cb_ch33_1",
        "title": "meta_vault.vrs",
        "code": "lib Vault\n  meta:\n    static:\n      masterKey: \"secret_9981\"\n  dynamic:\n    def func unlock key\n      if key = meta.static.masterKey then\n        reply \"Access Granted\"\n      else\n        reply \"Forbidden\"\n\ndisplay Vault.unlock(\"secret_9981\") ?color=green"
      }
    ],
    "exercises": [
      {
        "id": "ex_ch33_1",
        "title": "Challenge 33: Secure Vault Test",
        "prompt": "Call <code>v.unlock(\"wrong_key\")</code> on the Vault instance and display the result.",
        "starterCode": "class Vault\n  meta:\n    static MASTER_KEY: \"secret_9981\"\n  dynamic:\n    def func unlock key\n      if key = Vault.meta.MASTER_KEY then\n        reply \"Access Granted\"\n      else\n        reply \"Forbidden\"\nset v: Vault()\n! Unlock with wrong key\n",
        "hint": "display v.unlock(\"wrong_key\")",
        "solution": "class Vault\n  meta:\n    static MASTER_KEY: \"secret_9981\"\n  dynamic:\n    def func unlock key\n      if key = Vault.meta.MASTER_KEY then\n        reply \"Access Granted\"\n      else\n        reply \"Forbidden\"\nset v: Vault()\ndisplay v.unlock(\"wrong_key\")",
        "expectedMatch": {}
      }
    ]
  },
  {
    "id": "ch34-do-unless",
    "number": 34,
    "section": "Section 9: Error Handling & Diagnostics",
    "subsection": "Resilient Code",
    "title": "Try-Unless Error Guarding",
    "category": "Error Handling",
    "readTime": "4 min read",
    "summary": "Gracefully catch errors and provide fallback answers using 'do ... unless err' blocks.",
    "body": "\n      <h2>Handling Errors Gracefully</h2>\n      <p>When reading a missing file or dividing by zero, unhandled errors crash programs. The <code>do ... unless err</code> block allows you to attempt risky work and safely catch failures:</p>\n      <pre><code>do\n  set res: 100 / divisor\nunless err\n  display \"Cannot divide by zero: \" + err ?color=red</code></pre>\n    ",
    "codeBlocks": [
      {
        "id": "cb_ch34_1",
        "title": "do_unless_demo.vrs",
        "code": "set divisor: 0\ndo\n  set answer: 50 / divisor\n  display \"Answer: \" + answer\nunless DivisionByZeroError\n  display \"Safely caught DivisionByZeroError!\" ?color=green"
      }
    ],
    "exercises": [
      {
        "id": "ex_ch34_1",
        "title": "Challenge 34: Safe Division",
        "prompt": "Wrap <code>set x: 10 / 0</code> in <code>do ... unless err</code> and display <code>\"Recovered\"</code> in green.",
        "starterCode": "! Wrap 10 / 0 in do .. unless err\n",
        "hint": "do\n  set x: 10 / 0\nunless err\n  display \"Recovered\" ?color=green",
        "solution": "do\n  set x: 10 / 0\nunless err\n  display \"Recovered\" ?color=green",
        "expectedMatch": {}
      }
    ]
  },
  {
    "id": "ch35-error-scopes",
    "number": 35,
    "section": "Section 9: Error Handling & Diagnostics",
    "subsection": "Resilient Code",
    "title": "Error Scopes & Suppression Tiers",
    "category": "Error Handling",
    "readTime": "4 min read",
    "summary": "Control diagnostic strictness across four tiers: ForceErrors, SuppressErrors, CriticalErrors, and scoped suppression.",
    "body": "\n      <h2>Tailoring Error Behavior</h2>\n      <p>During automated testing or production telemetry, you might want to suppress non-fatal warnings while keeping critical memory errors active. VerScript provides four distinct tiers:</p>\n      <ul>\n        <li><code>ForceErrors</code>: Maximum strictness. All errors immediately halt.</li>\n        <li><code>CriticalErrors</code>: Only fatal system and syntax errors halt execution.</li>\n        <li><code>SuppressErrors</code>: Non-critical errors are silenced.</li>\n        <li><code>suppress: high</code>: Scoped suppression for a specific block of code.</li>\n      </ul>\n    ",
    "codeBlocks": [
      {
        "id": "cb_ch35_1",
        "title": "suppression_demo.vrs",
        "code": "CriticalErrors\n! Non-critical errors will be suppressed\nset unknown: 10\ndisplay \"System continuing smoothly.\" ?color=green"
      }
    ],
    "exercises": [
      {
        "id": "ex_ch35_1",
        "title": "Challenge 35: Set Error Mode",
        "prompt": "Activate <code>CriticalErrors</code> and display <code>\"Strict mode active\"</code> in green.",
        "starterCode": "! Set CriticalErrors and display message\n",
        "hint": "CriticalErrors\ndisplay \"Strict mode active\" ?color=green",
        "solution": "CriticalErrors\ndisplay \"Strict mode active\" ?color=green",
        "expectedMatch": {}
      }
    ]
  },
  {
    "id": "ch36-error-directory",
    "number": 36,
    "section": "Section 9: Error Handling & Diagnostics",
    "subsection": "Resilient Code",
    "title": "The Complete Error Directory",
    "category": "Error Handling",
    "readTime": "5 min read",
    "summary": "Exhaustive reference matrix of all 29 VerScript runtime error types, severity tiers (1-10), root causes, and recovery patterns.",
    "body": "\n      <h2>The VerScript Error System & Diagnostics</h2>\n      <p>VerScript is engineered for mission-critical reliability. Every error is strongly typed, categorized, and assigned a deterministic <strong>Severity Point Ranking (1–10)</strong> so your supervisors, watchdogs, and test harnesses know exactly how dangerous an exception is.</p>\n\n      <div class=\"callout-box note\">\n        <div class=\"callout-title\">🛡️ Resilient Recovery with do ... unless</div>\n        <p>Catch any specific error cleanly without crashing your process: <code>do ... unless ErrorName</code>. The trapped error object is automatically bound to the <code>error</code> variable inside the recovery block.</p>\n      </div>\n\n      <h2>Complete Directory of All 29 Runtime Errors</h2>\n      <p>Below is the complete, official directory of all error types supported and thrown by the native VerScript C compiler and virtual machine:</p>\n\n      <table class=\"doc-table\">\n        <thead>\n          <tr>\n            <th>Error Name</th>\n            <th>Severity</th>\n            <th>Category</th>\n            <th>Exact Root Cause & Trigger</th>\n            <th>Recovery Pattern</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr><td><code>MemoryAllocationError</code></td><td><strong>10 / Fatal</strong></td><td>System Memory</td><td>Native heap allocator returned NULL during allocation.</td><td><code>unless MemoryAllocationError</code></td></tr>\n          <tr><td><code>SystemError</code></td><td><strong>9 / Fatal</strong></td><td>OS & Runtime</td><td>Engine reached an internal ceiling (e.g. max routine table entries).</td><td><code>unless SystemError</code></td></tr>\n          <tr><td><code>SyntaxError</code></td><td><strong>8 / High</strong></td><td>Parser</td><td>Malformed token stream, unclosed strings, or missing keyword.</td><td><code>unless SyntaxError</code></td></tr>\n          <tr><td><code>IndentationError</code></td><td><strong>8 / High</strong></td><td>Parser</td><td>Block indentation mismatch between parent and child lines.</td><td><code>unless IndentationError</code></td></tr>\n          <tr><td><code>HeaderMismatchError</code></td><td><strong>8 / High</strong></td><td>Contracts</td><td>Routine parameter count, kind, or implementation missing from header.</td><td><code>unless HeaderMismatchError</code></td></tr>\n          <tr><td><code>InvalidHeaderError</code></td><td><strong>7 / High</strong></td><td>Contracts</td><td>Malformed <code>.h.vrs</code> file, invalid pragma, or broken declaration.</td><td><code>unless InvalidHeaderError</code></td></tr>\n          <tr><td><code>ScopeViolationError</code></td><td><strong>7 / High</strong></td><td>Purity</td><td>Attempting to mutate an <code>inbound</code> parameter or outscope variable.</td><td><code>unless ScopeViolationError</code></td></tr>\n          <tr><td><code>DataTypeError</code></td><td><strong>7 / High</strong></td><td>Type System</td><td>Value fails a custom <code>DataType</code> predicate constraint.</td><td><code>unless DataTypeError</code></td></tr>\n          <tr><td><code>FileError</code></td><td><strong>7 / High</strong></td><td>I/O</td><td>Target header, source file, or library not found on disk.</td><td><code>unless FileError</code></td></tr>\n          <tr><td><code>AsyncError</code></td><td><strong>7 / High</strong></td><td>Concurrency</td><td>Timeout or unhandled rejection inside an async task.</td><td><code>unless AsyncError</code></td></tr>\n          <tr><td><code>ChannelError</code></td><td><strong>7 / High</strong></td><td>Concurrency</td><td>Writing to or reading from an invalid or terminated channel.</td><td><code>unless ChannelError</code></td></tr>\n          <tr><td><code>RuntimeError</code></td><td><strong>6 / High</strong></td><td>Execution</td><td>General runtime execution error or uncategorized fault.</td><td><code>unless RuntimeError</code></td></tr>\n          <tr><td><code>LoopLimitError</code></td><td><strong>6 / Moderate</strong></td><td>Execution</td><td>Loop exceeded maximum allowed execution iterations.</td><td><code>unless LoopLimitError</code></td></tr>\n          <tr><td><code>VisibilityError</code></td><td><strong>6 / Moderate</strong></td><td>OOP</td><td>Calling a <code>private</code> method or property from outside class.</td><td><code>unless VisibilityError</code></td></tr>\n          <tr><td><code>ImmutableError</code></td><td><strong>6 / Moderate</strong></td><td>Variables</td><td>Attempting to reassign a variable declared as <code>const</code>.</td><td><code>unless ImmutableError</code></td></tr>\n          <tr><td><code>EntityError</code></td><td><strong>6 / Moderate</strong></td><td>OOP</td><td>Invalid field access or routine invocation on entity dictionary.</td><td><code>unless EntityError</code></td></tr>\n          <tr><td><code>DomainError</code></td><td><strong>6 / Moderate</strong></td><td>Math</td><td>Math input outside valid domain (e.g. <code>Math.sqrt(-4)</code>).</td><td><code>unless DomainError</code></td></tr>\n          <tr><td><code>OperationError</code></td><td><strong>6 / Moderate</strong></td><td>Linear Algebra</td><td>Inconsistent matrix or vector dimensions during arithmetic (+, -, *).</td><td><code>unless OperationError</code></td></tr>\n          <tr><td><code>InvalidOperandError</code></td><td><strong>5 / Moderate</strong></td><td>Expressions</td><td>Incompatible operand types applied to an arithmetic or bitwise operator.</td><td><code>unless InvalidOperandError</code></td></tr>\n          <tr><td><code>LoopIterationError</code></td><td><strong>5 / Moderate</strong></td><td>Loops</td><td>Modifying the loop index or bounds inside an active loop body.</td><td><code>unless LoopIterationError</code></td></tr>\n          <tr><td><code>LoopStepError</code></td><td><strong>5 / Moderate</strong></td><td>Loops</td><td>Invalid step value (e.g. step 0 or negative without direction).</td><td><code>unless LoopStepError</code></td></tr>\n          <tr><td><code>InvalidErrorNameError</code></td><td><strong>5 / Moderate</strong></td><td>Diagnostics</td><td>Catching or throwing an unknown error name not in the catalog.</td><td><code>unless InvalidErrorNameError</code></td></tr>\n          <tr><td><code>IndexOutOfBoundsError</code></td><td><strong>5 / Moderate</strong></td><td>Collections</td><td>Accessing an array index &lt; 0 or &gt;= length.</td><td><code>unless IndexOutOfBoundsError</code></td></tr>\n          <tr><td><code>AssertError</code></td><td><strong>5 / Moderate</strong></td><td>Testing</td><td>Condition failed in <code>Assert.equal</code> or <code>Assert.isTrue</code>.</td><td><code>unless AssertError</code></td></tr>\n          <tr><td><code>MatchError</code></td><td><strong>5 / Moderate</strong></td><td>Pattern Match</td><td>No pattern arm matched value in <code>match ... with</code> block.</td><td><code>unless MatchError</code></td></tr>\n          <tr><td><code>DivisionByZeroError</code></td><td><strong>4 / Moderate</strong></td><td>Math</td><td>Division or modulo by zero (e.g. <code>x / 0</code>).</td><td><code>unless DivisionByZeroError</code></td></tr>\n          <tr><td><code>LoopDirectionError</code></td><td><strong>4 / Low</strong></td><td>Loops</td><td>Iterating downwards without specifying a negative step.</td><td><code>unless LoopDirectionError</code></td></tr>\n          <tr><td><code>UnassignedVariableError</code></td><td><strong>4 / Low</strong></td><td>Variables</td><td>Reading a variable before initializing it with a value.</td><td><code>unless UnassignedVariableError</code></td></tr>\n          <tr><td><code>UndefinedVariableError</code></td><td><strong>3 / Low</strong></td><td>Variables</td><td>Referencing a variable that has never been declared.</td><td><code>unless UndefinedVariableError</code></td></tr>\n        </tbody>\n      </table>\n\n      <h2>Error Tiers: ForceErrors, CriticalErrors, SuppressErrors</h2>\n      <p>Configure compiler strictness per block or globally:</p>\n      <ul>\n        <li><code>ForceErrors</code>: All warnings escalate into terminating fatal errors.</li>\n        <li><code>CriticalErrors</code>: Standard production mode (halts only on Severity &gt;= 6).</li>\n        <li><code>SuppressErrors</code>: Bypasses non-fatal errors and logs diagnostic telemetry.</li>\n      </ul>\n",
    "codeBlocks": [
      {
        "id": "cb_ch36_1",
        "title": "error_catalog_demo.vrs",
        "code": "do\n  ! Direct symbolic dimension mismatch: 2x2 matrix * 3D vector\n  set m: [[1, 2], [3, 4]]\n  set v: [1, 2, 3]\n  set bad: m * v\nunless OperationError\n  display \"Intercepted OperationError: Dimensions incompatible!\" ?color=green\n\ndo\n  set x: 100 / 0\nunless DivisionByZeroError\n  display \"Intercepted DivisionByZeroError cleanly!\" ?color=cyan"
      }
    ],
    "exercises": [
      {
        "id": "ex_ch36_1",
        "title": "Challenge 36: Catch OperationError",
        "prompt": "Catch an <code>OperationError</code> from adding mismatched vectors <code>[1, 2] + [1, 2, 3]</code> inside <code>do ... unless OperationError</code> and display <code>\"Caught OperationError\"</code>.",
        "starterCode": "! Catch OperationError\n",
        "hint": "do\n  set v: [1, 2] + [1, 2, 3]\nunless OperationError\n  display \"Caught OperationError\" ?color=green",
        "solution": "do\n  set v: [1, 2] + [1, 2, 3]\nunless OperationError\n  display \"Caught OperationError\" ?color=green",
        "expectedMatch": {}
      }
    ]
  },
  {
    "id": "ch37-libraries",
    "number": 37,
    "section": "Section 10: Modules, Headers & Polyglot Engine",
    "subsection": "Architecture & Extensibility",
    "title": "Libraries (.lib.vrs) & Distribution",
    "category": "Modular Architecture",
    "readTime": "4 min read",
    "summary": "Package reusable modules into .lib.vrs files, use 'load Lib', and understand zero-dependency distribution.",
    "body": "\n      <h2>Sharing Code with Libraries</h2>\n      <p>A library in VerScript is defined with <code>lib Name ...</code> inside a file named <code>Name.lib.vrs</code>. When you want to use it in any other file, just write <code>load Name</code>!</p>\n    ",
    "codeBlocks": [
      {
        "id": "cb_ch37_1",
        "title": "library_user.vrs",
        "code": "load Math\ndisplay \"Math.sqrt(144) = \" + Math.sqrt(144) ?color=cyan"
      }
    ],
    "exercises": [
      {
        "id": "ex_ch37_1",
        "title": "Challenge 37: Load and Use a Library",
        "prompt": "Load <code>Math</code> and display <code>Math.gcd(24, 36)</code>.",
        "starterCode": "! Load Math and display gcd\n",
        "hint": "load Math\ndisplay Math.gcd(24, 36)",
        "solution": "load Math\ndisplay Math.gcd(24, 36)",
        "expectedMatch": {}
      }
    ]
  },
  {
    "id": "ch38-headers",
    "number": 38,
    "section": "Section 10: Modules, Headers & Polyglot Engine",
    "subsection": "Architecture & Extensibility",
    "title": "VerScript Headers (.h.vrs) & Language Contracts",
    "category": "Modular Architecture",
    "readTime": "5 min read",
    "summary": "Exhaustive guide to .h.vrs headers: keywords, pragmas, export, config options, structs, prototype enforcement, and companion auto-discovery.",
    "body": "\n      <h2>The VerScript Header Architecture</h2>\n      <p>Professional engineering requires separating <strong>public interface contracts</strong> from <strong>implementation details</strong>. In VerScript, this is achieved through <code>.h.vrs</code> header files. Headers allow teams to define types, schemas, function prototypes, and compiler settings with rigorous compile-time contract verification.</p>\n\n      <h2>Exhaustive Header Keywords & Directives Table</h2>\n      <table class=\"doc-table\">\n        <thead>\n          <tr>\n            <th>Directive / Keyword</th>\n            <th>Scope</th>\n            <th>Purpose & Functionality</th>\n            <th>Example Syntax</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr><td><code>header &lt;Name&gt;:</code></td><td>Header block</td><td>Declares a contract namespace containing function and method prototypes.</td><td><code>header MathContract:</code></td></tr>\n          <tr><td><code>include \"&lt;path&gt;\"</code></td><td>File scope</td><td>Imports and executes a <code>.h.vrs</code> header file into the current translation unit.</td><td><code>include \"calc.h.vrs\"</code></td></tr>\n          <tr><td><code>pragma once</code></td><td>Header top</td><td>Idempotency guard ensuring the header file is evaluated only once, even if included multiple times.</td><td><code>pragma once</code></td></tr>\n          <tr><td><code>pragma strict</code></td><td>Header / Unit</td><td>Enforces strict prototype enforcement; throws <code>HeaderMismatchError</code> on signature differences.</td><td><code>pragma strict</code></td></tr>\n          <tr><td><code>export</code></td><td>Declarations</td><td>Marks functions, structs, or constants as publicly visible outside the module.</td><td><code>export func add(a, b)</code></td></tr>\n          <tr><td><code>config:</code></td><td>Configuration</td><td>Declares engine settings: <code>strict_mode</code>, <code>error_mode</code>, <code>timeout_ms</code>, <code>target_version</code>, <code>log_level</code>.</td><td><code>config:\\n  strict_mode: true</code></td></tr>\n          <tr><td><code>struct &lt;Name&gt;:</code></td><td>Header / Unit</td><td>Declares lightweight, typed schema structures directly inside headers.</td><td><code>struct Point: x: num, y: num</code></td></tr>\n          <tr><td><code>enum &lt;Name&gt;:</code></td><td>Header / Unit</td><td>Declares named enumerations inside headers with automatic integer mapping.</td><td><code>enum Mode: DEV=1, PROD=2</code></td></tr>\n          <tr><td><code>load &lt;Lib&gt;</code></td><td>Header / Unit</td><td>Imports native standard or community libraries directly inside headers.</td><td><code>load Math</code></td></tr>\n          <tr><td><code>func &lt;name&gt;(&lt;args&gt;)</code></td><td>Header block</td><td>Declares a function prototype with exact parameter count and order.</td><td><code>func calculate(x, y)</code></td></tr>\n          <tr><td><code>method &lt;name&gt;(&lt;args&gt;)</code></td><td>Header block</td><td>Declares an object method prototype with mutating semantics.</td><td><code>method update(state)</code></td></tr>\n          <tr><td><code>HeaderMismatchError</code></td><td>Runtime error</td><td>Thrown when routine parameter count or kind fails to match the header prototype, or routine is called without an implementation.</td><td><code>unless HeaderMismatchError</code></td></tr>\n          <tr><td><code>InvalidHeaderError</code></td><td>Compile error</td><td>Thrown when a header file syntax is malformed or invalid pragmas are detected.</td><td><code>unless InvalidHeaderError</code></td></tr>\n        </tbody>\n      </table>\n\n      <h2>Compiler Configuration Options (config:)</h2>\n      <table class=\"doc-table\">\n        <thead>\n          <tr><th>Key</th><th>Type</th><th>Default</th><th>Description</th></tr>\n        </thead>\n        <tbody>\n          <tr><td><code>strict_mode</code></td><td>boolean</td><td><code>false</code></td><td>When <code>true</code>, all undefined variables and missing prototypes trigger immediate termination.</td></tr>\n          <tr><td><code>error_mode</code></td><td>string</td><td><code>\"strict\"</code></td><td>Error handling strategy: <code>\"strict\"</code>, <code>\"warn\"</code>, or <code>\"suppress\"</code>.</td></tr>\n          <tr><td><code>timeout_ms</code></td><td>number</td><td><code>0</code> (none)</td><td>Execution watchdog timeout in milliseconds (e.g. <code>5000</code>).</td></tr>\n          <tr><td><code>target_version</code></td><td>string</td><td><code>\"2.4.0\"</code></td><td>Minimum engine version required for compatibility.</td></tr>\n          <tr><td><code>log_level</code></td><td>string</td><td><code>\"info\"</code></td><td>Internal engine diagnostic verbosity (<code>\"debug\"</code>, <code>\"info\"</code>, <code>\"warn\"</code>).</td></tr>\n        </tbody>\n      </table>\n\n      <h2>Companion Header Auto-Discovery</h2>\n      <p>If you run a script named <code>app.vrs</code>, the VerScript engine automatically checks if a companion header named <code>app.h.vrs</code> exists in the same folder. If found, it preloads and validates the header automatically before executing your script, without needing an explicit <code>include</code> statement!</p>\n",
    "codeBlocks": [
      {
        "id": "cb_ch38_1",
        "title": "dual_file_project",
        "files": [
          {
            "name": "geometry.h.vrs",
            "code": "pragma once\npragma strict\n\nstruct Point:\n    x: num\n    y: num\n\nheader Geometry:\n    func areaSquare(side)\n    func areaRect(w, h)"
          },
          {
            "name": "main.vrs",
            "code": "include \"geometry.h.vrs\"\n\nfunc areaSquare(side):\n    reply side * side\n\nfunc areaRect(w, h):\n    reply w * h\n\nset pt: Point(10, 20)\ndisplay \"Square Area: \" + areaSquare(pt.x) ?color=green\ndisplay \"Rectangle Area: \" + areaRect(pt.x, pt.y) ?color=cyan"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "ex_ch38_1",
        "title": "Challenge 38: Multi-File Header Project",
        "prompt": "Implement the <code>calc.h.vrs</code> contract in <code>main.vrs</code>. In <code>calc.h.vrs</code> declare <code>header Calc: func cube(n)</code>. In <code>main.vrs</code> implement <code>func cube(n): reply n * n * n</code> and display <code>cube(3)</code>.",
        "starterFiles": [
          {
            "name": "calc.h.vrs",
            "code": "pragma once\npragma strict\n\nheader Calc:\n    func cube(n)\n"
          },
          {
            "name": "main.vrs",
            "code": "include \"calc.h.vrs\"\n\nfunc cube(n):\n    reply n * n * n\n\n! Display cube of 3\n"
          }
        ],
        "hint": "display cube(3)",
        "solution": "include \"calc.h.vrs\"\n\nfunc cube(n):\n    reply n * n * n\n\ndisplay cube(3)",
        "expectedMatch": {}
      }
    ]
  },
  {
    "id": "ch39-namespaces",
    "number": 39,
    "section": "Section 10: Modules, Headers & Polyglot Engine",
    "subsection": "Architecture & Extensibility",
    "title": "Library Namespaces & Aliasing",
    "category": "Modular Architecture",
    "readTime": "3 min read",
    "summary": "Prevent naming collisions by importing libraries under custom aliases using 'load Lib as L'.",
    "body": "\n      <h2>Renaming Libraries with 'as'</h2>\n      <p>If two libraries have a function with the same name, or if you simply want a shorter name to type, use <code>load Library as Alias</code>:</p>\n      <pre><code>load Matrix as M\nset id: M.identity(3)</code></pre>\n    ",
    "codeBlocks": [
      {
        "id": "cb_ch39_1",
        "title": "alias_import.vrs",
        "code": "load Matrix as M\nset grid: M.identity(2)\ndisplay \"2x2 Identity via alias M: \" + grid ?color=cyan"
      }
    ],
    "exercises": [
      {
        "id": "ex_ch39_1",
        "title": "Challenge 39: Load as Alias",
        "prompt": "Load <code>Vector as V</code>, call <code>V.zeros(3)</code>, and display the result.",
        "starterCode": "! Load Vector as V and display V.zeros(3)\n",
        "hint": "load Vector as V\ndisplay V.zeros(3)",
        "solution": "load Vector as V\ndisplay V.zeros(3)",
        "expectedMatch": {}
      }
    ]
  },
  {
    "id": "ch40-inject",
    "number": 40,
    "section": "Section 10: Modules, Headers & Polyglot Engine",
    "subsection": "Architecture & Extensibility",
    "title": "Polyglot Code Injection",
    "category": "Modular Architecture",
    "readTime": "4 min read",
    "summary": "Embed foreign code from 100+ languages directly inside your VerScript programs using 'inject'.",
    "body": "\n      <h2>True Polyglot Power</h2>\n      <p>Sometimes you need an existing algorithm written in Python, C, or JavaScript. VerScript allows you to seamlessly inject foreign language blocks:</p>\n      <pre><code>inject python\n  print(\"Executed via embedded Python interpreter!\")</code></pre>\n    ",
    "codeBlocks": [
      {
        "id": "cb_ch40_1",
        "title": "inject_demo.vrs",
        "code": "inject python\n  print(\"Python runtime active inside VerScript.\")\n\ndisplay \"VerScript execution resumed.\" ?color=green"
      }
    ],
    "exercises": [
      {
        "id": "ex_ch40_1",
        "title": "Challenge 40: Inject a Python Print",
        "prompt": "Use <code>inject python</code> to print <code>\"Polyglot Ready\"</code>, followed by display <code>\"Done\"</code> in green.",
        "starterCode": "! Inject python print\n",
        "hint": "inject python\n  print(\"Polyglot Ready\")\ndisplay \"Done\" ?color=green",
        "solution": "inject python\n  print(\"Polyglot Ready\")\ndisplay \"Done\" ?color=green",
        "expectedMatch": {}
      }
    ]
  },
  {
    "id": "ch41-alias-remapping",
    "number": 41,
    "section": "Section 10: Modules, Headers & Polyglot Engine",
    "subsection": "Architecture & Extensibility",
    "title": "Command Aliasing & Custom Syntax",
    "category": "Modular Architecture",
    "readTime": "3 min read",
    "summary": "Create custom language keywords and localized synonyms using 'alias: say: display'.",
    "body": "\n      <h2>Customize Your Vocabulary</h2>\n      <p>VerScript lets you remap command keywords to match your native language or coding habits:</p>\n      <pre><code>alias: say: display\nsay \"Hello from custom keyword!\" ?color=cyan</code></pre>\n    ",
    "codeBlocks": [
      {
        "id": "cb_ch41_1",
        "title": "alias_demo.vrs",
        "code": "alias display: print\nprint \"Custom alias 'print' operational.\" ?color=green"
      }
    ],
    "exercises": [
      {
        "id": "ex_ch41_1",
        "title": "Challenge 41: Create an Alias",
        "prompt": "Create <code>alias: log: display</code>, then use <code>log \"Active\"</code>.",
        "starterCode": "! Create log alias and output Active\n",
        "hint": "alias: log: display\nlog \"Active\"",
        "solution": "alias: log: display\nlog \"Active\"",
        "expectedMatch": {}
      }
    ]
  },
  {
    "id": "ch42-reactive-events",
    "number": 42,
    "section": "Section 11: Asynchronous & Event-Driven Systems",
    "subsection": "Concurrency & Events",
    "title": "Reactive Event Architecture",
    "category": "Asynchronous",
    "readTime": "4 min read",
    "summary": "Emit and listen for system events with 'event', 'emit', and 'on' for reactive decoupled programming.",
    "body": "\n      <h2>Decoupled Communication with Events</h2>\n      <p>Instead of components calling each other directly, they can broadcast <strong>events</strong>. Other parts of the system listen and react when the event fires!</p>\n    ",
    "codeBlocks": [
      {
        "id": "cb_ch42_1",
        "title": "events_demo.vrs",
        "code": "on \"sensor:trigger\" do\n  display \"Alarm sounding! Movement detected.\" ?color=red\n\ndisplay \"Armed. Emitting test event:\"\nemit \"sensor:trigger\""
      }
    ],
    "exercises": [
      {
        "id": "ex_ch42_1",
        "title": "Challenge 42: Emit an Event",
        "prompt": "Listen for <code>\"ping\"</code> with <code>on \"ping\" do display \"pong\"</code>, then <code>emit \"ping\"</code>.",
        "starterCode": "! Set up listener and emit ping\n",
        "hint": "on \"ping\" do\n  display \"pong\"\nemit \"ping\"",
        "solution": "on \"ping\" do\n  display \"pong\"\nemit \"ping\"",
        "expectedMatch": {}
      }
    ]
  },
  {
    "id": "ch43-async-routines",
    "number": 43,
    "section": "Section 11: Asynchronous & Event-Driven Systems",
    "subsection": "Concurrency & Events",
    "title": "Asynchronous Routines & Promises",
    "category": "Asynchronous",
    "readTime": "4 min read",
    "summary": "Launch non-blocking tasks with 'async', track background handles, and await results using 'sync'.",
    "body": "\n      <h2>Non-Blocking Background Tasks</h2>\n      <p>When fetching data from a server or computing a huge prime number, you don't want your whole interface to freeze. The <code>async</code> keyword launches tasks in the background, and <code>sync</code> waits for the final result when you need it.</p>\n    ",
    "codeBlocks": [
      {
        "id": "cb_ch43_1",
        "title": "async_demo.vrs",
        "code": "async func fetchScore\n  reply 100\n\non complete\n  display \"Background task complete!\" ?color=green\n\ndisplay \"Completed result: \" + (sync fetchScore()) ?color=cyan"
      }
    ],
    "exercises": [
      {
        "id": "ex_ch43_1",
        "title": "Challenge 43: Async Execution",
        "prompt": "Define <code>def func getVal reply 42</code>, launch it with <code>async getVal()</code>, unwrap with <code>sync</code>, and display the result.",
        "starterCode": "! Define getVal and await with sync\n",
        "hint": "def func getVal\n  reply 42\nset h: async getVal()\nset v: sync h\ndisplay v",
        "solution": "def func getVal\n  reply 42\nset h: async getVal()\nset v: sync h\ndisplay v",
        "expectedMatch": {}
      }
    ]
  },
  {
    "id": "ch44-channels",
    "number": 44,
    "section": "Section 11: Asynchronous & Event-Driven Systems",
    "subsection": "Concurrency & Events",
    "title": "High-Throughput Channels",
    "category": "Asynchronous",
    "readTime": "4 min read",
    "summary": "Safely stream messages between concurrent threads and routines using FIFO ring-buffer channels (send & recv).",
    "body": "\n      <h2>Native Concurrency Channels (chan, send, recv)</h2>\n      <p>VerScript provides first-class FIFO communication channels for concurrent pipelines:</p>\n\n      <table class=\"doc-table\">\n        <thead>\n          <tr><th>Keyword</th><th>Syntax</th><th>Description</th></tr>\n        </thead>\n        <tbody>\n          <tr><td><code>chan</code></td><td><code>chan queueName</code></td><td>Allocates a 64-slot ring buffer channel.</td></tr>\n          <tr><td><code>send</code></td><td><code>send queueName, value</code></td><td>Pushes a value into the channel tail. Throws <code>ChannelError</code> if full.</td></tr>\n          <tr><td><code>recv</code></td><td><code>recv queueName</code></td><td>Dequeues the next item from channel head. Throws <code>ChannelError</code> if empty.</td></tr>\n        </tbody>\n      </table>\n  ",
    "codeBlocks": [
      {
        "id": "cb_ch44_1",
        "title": "channels_demo.vrs",
        "code": "chan pipeline\nsend pipeline, 100\nsend pipeline, 200\ndisplay \"Channel pipeline initialized with items.\" ?color=green"
      }
    ],
    "exercises": [
      {
        "id": "ex_ch44_1",
        "title": "Challenge 44: Send and Receive",
        "prompt": "Create <code>channel q</code>, send <code>100</code> into <code>q</code>, receive it, and display the received value.",
        "starterCode": "! Create channel q, send 100, recv and display\n",
        "hint": "channel q\nsend q 100\ndisplay recv q",
        "solution": "channel q\nsend q 100\ndisplay recv q",
        "expectedMatch": {}
      }
    ]
  },
  {
    "id": "ch45-math-lib",
    "number": 45,
    "section": "Section 12: Numerics & Linear Algebra Ecosystem",
    "subsection": "Mathematical Engines",
    "title": "The Math Standard Library",
    "category": "Standard Libraries",
    "readTime": "4 min read",
    "summary": "Perform advanced mathematics including trigonometry, rounding, absolute values, square roots, and clamps with 'load Math'.",
    "body": "\n      <h2>The Math Standard Library</h2>\n      <p>Scientific calculations, trigonometry, power functions, and integer arithmetic.</p>\n      \n      <h2>Loading the Module</h2>\n      <p>Import into any file with standard <code>load</code> directive:</p>\n      <pre><code>load Math</code></pre>\n      <p>All routines are available under the <code>Math</code> namespace.</p>\n\n      <h2>Complete Function Catalog Table</h2>\n      <table class=\"doc-table\">\n        <thead>\n          <tr>\n            <th>Function Signature</th>\n            <th>Parameters</th>\n            <th>Return Type</th>\n            <th>Description</th>\n            <th>Example Call</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr><td><code>Math.abs(x)</code></td><td><code>num</code></td><td><code>num</code></td><td>Returns the absolute value (distance from zero).</td><td><code>Math.abs(-42) -> 42</code></td></tr>\n          <tr><td><code>Math.sqrt(x)</code></td><td><code>num</code></td><td><code>num</code></td><td>Computes the non-negative square root.</td><td><code>Math.sqrt(64) -> 8</code></td></tr>\n          <tr><td><code>Math.min(a, b)</code></td><td><code>num, num</code></td><td><code>num</code></td><td>Returns the smaller of two numbers.</td><td><code>Math.min(10, 20) -> 10</code></td></tr>\n          <tr><td><code>Math.max(a, b)</code></td><td><code>num, num</code></td><td><code>num</code></td><td>Returns the larger of two numbers.</td><td><code>Math.max(10, 20) -> 20</code></td></tr>\n          <tr><td><code>Math.clamp(val, low, high)</code></td><td><code>num, num, num</code></td><td><code>num</code></td><td>Constrains value within lower and upper bounds.</td><td><code>Math.clamp(120, 0, 100) -> 100</code></td></tr>\n          <tr><td><code>Math.sign(val)</code></td><td><code>num</code></td><td><code>num</code></td><td>Returns -1 for negative, 1 for positive, 0 for zero.</td><td><code>Math.sign(-15) -> -1</code></td></tr>\n          <tr><td><code>Math.floor(val)</code></td><td><code>num</code></td><td><code>num</code></td><td>Rounds downward to the nearest integer.</td><td><code>Math.floor(7.9) -> 7</code></td></tr>\n          <tr><td><code>Math.ceil(val)</code></td><td><code>num</code></td><td><code>num</code></td><td>Rounds upward to the nearest integer.</td><td><code>Math.ceil(7.1) -> 8</code></td></tr>\n          <tr><td><code>Math.round(val)</code></td><td><code>num</code></td><td><code>num</code></td><td>Rounds to the nearest integer.</td><td><code>Math.round(4.5) -> 5</code></td></tr>\n          <tr><td><code>Math.gcd(a, b)</code></td><td><code>num, num</code></td><td><code>num</code></td><td>Computes greatest common divisor using Euclidean algorithm.</td><td><code>Math.gcd(24, 36) -> 12</code></td></tr>\n          <tr><td><code>Math.lcm(a, b)</code></td><td><code>num, num</code></td><td><code>num</code></td><td>Computes least common multiple.</td><td><code>Math.lcm(4, 6) -> 12</code></td></tr>\n          <tr><td><code>Math.pow(base, exp)</code></td><td><code>num, num</code></td><td><code>num</code></td><td>Raises base to the specified exponent power.</td><td><code>Math.pow(2, 8) -> 256</code></td></tr>\n        </tbody>\n      </table>\n",
    "codeBlocks": [
      {
        "id": "cb_ch45_1",
        "title": "math_demo.vrs",
        "code": "load Math\n\nset root: Math.sqrt(81)\nset bounded: Math.clamp(150, 0, 100)\nset divisor: Math.gcd(48, 64)\n\ndisplay \"Square root of 81: \" + root ?color=green\ndisplay \"Clamped value: \" + bounded ?color=yellow\ndisplay \"GCD of 48 and 64: \" + divisor ?color=cyan"
      }
    ],
    "exercises": [
      {
        "id": "ex_ch45_1",
        "title": "Challenge 45: Hypotenuse Calculation",
        "prompt": "Load <code>Math</code>, compute <code>Math.sqrt(3^2 + 4^2)</code>, and display the resulting hypotenuse.",
        "starterCode": "! Load Math and calculate hypotenuse\n",
        "hint": "load Math\nset hyp: Math.sqrt(9 + 16)\ndisplay hyp",
        "solution": "load Math\nset hyp: Math.sqrt(9 + 16)\ndisplay hyp",
        "expectedMatch": {}
      }
    ]
  },
  {
    "id": "ch46-matrix-lib",
    "number": 46,
    "section": "Section 12: Numerics & Linear Algebra Ecosystem",
    "subsection": "Mathematical Engines",
    "title": "Arbitrary-Dimension Matrices & Determinants",
    "category": "Standard Libraries",
    "readTime": "6 min read",
    "summary": "Construct and manipulate arbitrary M x N dimensional matrices, compute traces, transpositions, and arbitrary N x N determinants with 'load Matrix'.",
    "body": "\n      <h2>The Matrix Standard Library</h2>\n      <p>Native arbitrary-dimension matrix engine supporting n-dimensional matrices, recursive nxn determinants, and direct symbolic arithmetic.</p>\n      \n      <h2>Loading the Module</h2>\n      <p>Import into any file with standard <code>load</code> directive:</p>\n      <pre><code>load Matrix</code></pre>\n      <p>All routines are available under the <code>Matrix</code> namespace.</p>\n\n      <h2>Complete Function Catalog Table</h2>\n      <table class=\"doc-table\">\n        <thead>\n          <tr>\n            <th>Function Signature</th>\n            <th>Parameters</th>\n            <th>Return Type</th>\n            <th>Description</th>\n            <th>Example Call</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr><td><code>Matrix.create(r, c, val)</code></td><td><code>num, num, any</code></td><td><code>arr</code></td><td>Creates a matrix of r rows and c columns filled with val.</td><td><code>Matrix.create(2, 3, 0)</code></td></tr>\n          <tr><td><code>Matrix.zeros(r, c)</code></td><td><code>num, num</code></td><td><code>arr</code></td><td>Creates a matrix of r rows and c cols filled with 0.</td><td><code>Matrix.zeros(3, 3)</code></td></tr>\n          <tr><td><code>Matrix.ones(r, c)</code></td><td><code>num, num</code></td><td><code>arr</code></td><td>Creates a matrix of r rows and c cols filled with 1.</td><td><code>Matrix.ones(2, 2)</code></td></tr>\n          <tr><td><code>Matrix.identity(size)</code></td><td><code>num</code></td><td><code>arr</code></td><td>Generates an identity matrix of size x size.</td><td><code>Matrix.identity(3)</code></td></tr>\n          <tr><td><code>Matrix.shape(mat)</code></td><td><code>arr</code></td><td><code>arr</code></td><td>Returns [rows, cols] dimension tuple of the matrix.</td><td><code>Matrix.shape(M) -> [2, 3]</code></td></tr>\n          <tr><td><code>Matrix.rows(mat)</code></td><td><code>arr</code></td><td><code>num</code></td><td>Returns the total number of rows in the matrix.</td><td><code>Matrix.rows(M) -> 2</code></td></tr>\n          <tr><td><code>Matrix.cols(mat)</code></td><td><code>arr</code></td><td><code>num</code></td><td>Returns the total number of columns in the matrix.</td><td><code>Matrix.cols(M) -> 3</code></td></tr>\n          <tr><td><code>Matrix.transpose(mat)</code></td><td><code>arr</code></td><td><code>arr</code></td><td>Transposes rows into columns.</td><td><code>Matrix.transpose(M)</code></td></tr>\n          <tr><td><code>Matrix.add(a, b)</code></td><td><code>arr, arr</code></td><td><code>arr</code></td><td>Element-wise matrix addition (or use direct: a + b).</td><td><code>Matrix.add(A, B)</code></td></tr>\n          <tr><td><code>Matrix.subtract(a, b)</code></td><td><code>arr, arr</code></td><td><code>arr</code></td><td>Element-wise subtraction (or use direct: a - b).</td><td><code>Matrix.subtract(A, B)</code></td></tr>\n          <tr><td><code>Matrix.scale(mat, f)</code></td><td><code>arr, num</code></td><td><code>arr</code></td><td>Scales all matrix elements by scalar factor f.</td><td><code>Matrix.scale(M, 2)</code></td></tr>\n          <tr><td><code>Matrix.multiply(a, b)</code></td><td><code>arr, arr</code></td><td><code>arr</code></td><td>Matrix dot product multiplication (or direct: a * b).</td><td><code>Matrix.multiply(A, B)</code></td></tr>\n          <tr><td><code>Matrix.trace(mat)</code></td><td><code>arr</code></td><td><code>num</code></td><td>Computes the sum of the main diagonal elements.</td><td><code>Matrix.trace(M)</code></td></tr>\n          <tr><td><code>Matrix.submatrix(mat, r, c)</code></td><td><code>arr, num, num</code></td><td><code>arr</code></td><td>Extracts submatrix excluding row r and col c.</td><td><code>Matrix.submatrix(M, 0, 0)</code></td></tr>\n          <tr><td><code>Matrix.determinant(mat)</code></td><td><code>arr</code></td><td><code>num</code></td><td>Computes exact determinant for ANY nxn square matrix.</td><td><code>Matrix.determinant(M)</code></td></tr>\n          <tr><td><code>Matrix.flatten(mat)</code></td><td><code>arr</code></td><td><code>arr</code></td><td>Flattens 2D matrix into a 1D vector array.</td><td><code>Matrix.flatten(M)</code></td></tr>\n          <tr><td><code>Matrix.equals(a, b)</code></td><td><code>arr, arr</code></td><td><code>bool</code></td><td>Checks deep element-wise equality between matrices.</td><td><code>Matrix.equals(A, B) -> true</code></td></tr>\n          <tr><td><code>Matrix.multiplyVector(mat, vec)</code></td><td><code>arr, arr</code></td><td><code>arr</code></td><td>Multiplies matrix by vector (or direct: mat * vec).</td><td><code>Matrix.multiplyVector(M, v)</code></td></tr>\n          <tr><td><code>Matrix.fromRows(vectors)</code></td><td><code>arr</code></td><td><code>arr</code></td><td>Constructs a matrix from a list of row vectors.</td><td><code>Matrix.fromRows([v1, v2])</code></td></tr>\n          <tr><td><code>Matrix.fromCols(vectors)</code></td><td><code>arr</code></td><td><code>arr</code></td><td>Constructs a matrix from a list of column vectors.</td><td><code>Matrix.fromCols([v1, v2])</code></td></tr>\n          <tr><td><code>Matrix.toRows(mat)</code></td><td><code>arr</code></td><td><code>arr</code></td><td>Extracts matrix rows as an array of vectors.</td><td><code>Matrix.toRows(M)</code></td></tr>\n          <tr><td><code>Matrix.toCols(mat)</code></td><td><code>arr</code></td><td><code>arr</code></td><td>Extracts matrix columns as an array of vectors.</td><td><code>Matrix.toCols(M)</code></td></tr>\n        </tbody>\n      </table>\n",
    "codeBlocks": [
      {
        "id": "cb_ch46_1",
        "title": "matrix_demo.vrs",
        "code": "load Matrix\n\nset A: [[4, 7], [2, 6]]\nset detA: Matrix.determinant(A)\nset trA: Matrix.trace(A)\n\ndisplay \"Matrix A determinant: \" + detA ?color=green\ndisplay \"Matrix A trace: \" + trA ?color=cyan\ndisplay \"Rows count: \" + Matrix.rows(A) ?color=yellow"
      }
    ],
    "exercises": [
      {
        "id": "ex_ch46_1",
        "title": "Challenge 46: 3x3 Determinant",
        "prompt": "Load <code>Matrix</code>, create a 3x3 diagonal matrix <code>[[1, 0, 0], [0, 2, 0], [0, 0, 3]]</code>, calculate its determinant, and display it.",
        "starterCode": "! Load Matrix, create diagonal matrix, display determinant\n",
        "hint": "load Matrix\nset M: [[1, 0, 0], [0, 2, 0], [0, 0, 3]]\ndisplay Matrix.determinant(M)",
        "solution": "load Matrix\nset M: [[1, 0, 0], [0, 2, 0], [0, 0, 3]]\ndisplay Matrix.determinant(M)",
        "expectedMatch": {}
      }
    ]
  },
  {
    "id": "ch47-vector-lib",
    "number": 47,
    "section": "Section 12: Numerics & Linear Algebra Ecosystem",
    "subsection": "Mathematical Engines",
    "title": "Vectors & Symbolic Math Operations",
    "category": "Standard Libraries",
    "readTime": "6 min read",
    "summary": "Native nD vectors, dot products, 3D cross products, and direct symbolic operators (+, -, *) between matrices and vectors with OperationError checks.",
    "body": "\n      <h2>The Vector Standard Library</h2>\n      <p>Complete n-dimensional vector mathematics suite supporting geometric projections, transforms, and direct symbolic arithmetic.</p>\n      \n      <h2>Loading the Module</h2>\n      <p>Import into any file with standard <code>load</code> directive:</p>\n      <pre><code>load Vector</code></pre>\n      <p>All routines are available under the <code>Vector</code> namespace.</p>\n\n      <h2>Complete Function Catalog Table</h2>\n      <table class=\"doc-table\">\n        <thead>\n          <tr>\n            <th>Function Signature</th>\n            <th>Parameters</th>\n            <th>Return Type</th>\n            <th>Description</th>\n            <th>Example Call</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr><td><code>Vector.create(dim, val)</code></td><td><code>num, any</code></td><td><code>arr</code></td><td>Creates an n-dimensional vector filled with val.</td><td><code>Vector.create(4, 0)</code></td></tr>\n          <tr><td><code>Vector.zeros(dim)</code></td><td><code>num</code></td><td><code>arr</code></td><td>Creates an n-dimensional vector filled with zeros.</td><td><code>Vector.zeros(3) -> [0, 0, 0]</code></td></tr>\n          <tr><td><code>Vector.ones(dim)</code></td><td><code>num</code></td><td><code>arr</code></td><td>Creates an n-dimensional vector filled with ones.</td><td><code>Vector.ones(3) -> [1, 1, 1]</code></td></tr>\n          <tr><td><code>Vector.dim(vec)</code></td><td><code>arr</code></td><td><code>num</code></td><td>Returns dimension (element count) of the vector.</td><td><code>Vector.dim(v) -> 3</code></td></tr>\n          <tr><td><code>Vector.length(vec)</code></td><td><code>arr</code></td><td><code>num</code></td><td>Alias for vector dimension count.</td><td><code>Vector.length(v) -> 3</code></td></tr>\n          <tr><td><code>Vector.add(u, v)</code></td><td><code>arr, arr</code></td><td><code>arr</code></td><td>Vector addition (or direct symbolic: u + v).</td><td><code>Vector.add(u, v)</code></td></tr>\n          <tr><td><code>Vector.subtract(u, v)</code></td><td><code>arr, arr</code></td><td><code>arr</code></td><td>Vector subtraction (or direct symbolic: u - v).</td><td><code>Vector.subtract(u, v)</code></td></tr>\n          <tr><td><code>Vector.scale(vec, factor)</code></td><td><code>arr, num</code></td><td><code>arr</code></td><td>Multiplies vector by scalar factor (or direct: v * s).</td><td><code>Vector.scale(v, 2.5)</code></td></tr>\n          <tr><td><code>Vector.dot(u, v)</code></td><td><code>arr, arr</code></td><td><code>num</code></td><td>Computes inner dot product of vectors u and v.</td><td><code>Vector.dot(u, v)</code></td></tr>\n          <tr><td><code>Vector.magnitudeSq(vec)</code></td><td><code>arr</code></td><td><code>num</code></td><td>Computes squared Euclidean norm (dot product with itself).</td><td><code>Vector.magnitudeSq(v)</code></td></tr>\n          <tr><td><code>Vector.magnitude(vec)</code></td><td><code>arr</code></td><td><code>num</code></td><td>Computes Euclidean length/norm of the vector.</td><td><code>Vector.magnitude([3, 4]) -> 5</code></td></tr>\n          <tr><td><code>Vector.norm(vec)</code></td><td><code>arr</code></td><td><code>arr</code></td><td>Returns normalized unit vector with length 1.0.</td><td><code>Vector.norm(v)</code></td></tr>\n          <tr><td><code>Vector.distance(u, v)</code></td><td><code>arr, arr</code></td><td><code>num</code></td><td>Euclidean distance between endpoints of u and v.</td><td><code>Vector.distance(u, v)</code></td></tr>\n          <tr><td><code>Vector.cross(u, v)</code></td><td><code>arr, arr</code></td><td><code>arr</code></td><td>Computes 3D cross product vector perpendicular to u and v.</td><td><code>Vector.cross([1,0,0], [0,1,0])</code></td></tr>\n          <tr><td><code>Vector.equals(u, v)</code></td><td><code>arr, arr</code></td><td><code>bool</code></td><td>Checks exact dimension and element equality.</td><td><code>Vector.equals(u, v)</code></td></tr>\n          <tr><td><code>Vector.toMatrix(vec, asCol)</code></td><td><code>arr, bool</code></td><td><code>arr</code></td><td>Converts vector into a 1-row or 1-col matrix.</td><td><code>Vector.toMatrix(v, true)</code></td></tr>\n          <tr><td><code>Vector.fromMatrix(mat)</code></td><td><code>arr</code></td><td><code>arr</code></td><td>Flattens single-row or single-column matrix to vector.</td><td><code>Vector.fromMatrix(M)</code></td></tr>\n          <tr><td><code>Vector.transform(vec, mat)</code></td><td><code>arr, arr</code></td><td><code>arr</code></td><td>Applies matrix transformation to vector.</td><td><code>Vector.transform(v, M)</code></td></tr>\n        </tbody>\n      </table>\n",
    "codeBlocks": [
      {
        "id": "cb_ch47_1",
        "title": "symbolic_vectors.vrs",
        "code": "load Matrix\nload Vector\n\nset M: [[2, 0], [0, 3]]\nset v: [4, 5]\n\n! Direct symbolic operations!\nset transformed: M * v\nset scaledVec: v * 2\nset dotProduct: v * v\n\ndisplay \"Matrix * Vector = \" + transformed ?color=green\ndisplay \"Scaled Vector = \" + scaledVec ?color=cyan\ndisplay \"Dot Product = \" + dotProduct ?color=yellow"
      }
    ],
    "exercises": [
      {
        "id": "ex_ch47_1",
        "title": "Challenge 47: Symbolic Transformation",
        "prompt": "Create matrix <code>M: [[1, 2], [3, 4]]</code> and vector <code>v: [1, 2]</code>. Multiply them directly with <code>set res: M * v</code> and display <code>res</code>.",
        "starterCode": "! Compute and display M * v\n",
        "hint": "set M: [[1, 2], [3, 4]]\nset v: [1, 2]\nset res: M * v\ndisplay res",
        "solution": "set M: [[1, 2], [3, 4]]\nset v: [1, 2]\nset res: M * v\ndisplay res",
        "expectedMatch": {}
      }
    ]
  },
  {
    "id": "ch48-stats-lib",
    "number": 48,
    "section": "Section 12: Numerics & Linear Algebra Ecosystem",
    "subsection": "Mathematical Engines",
    "title": "The Stats Standard Library",
    "category": "Standard Libraries",
    "readTime": "4 min read",
    "summary": "Compute mean, sum, minMax, and statistical aggregations over datasets with 'load Stats'.",
    "body": "\n      <h2>The Stats Standard Library</h2>\n      <p>Descriptive statistics, distribution metrics, and dispersion analysis.</p>\n      \n      <h2>Loading the Module</h2>\n      <p>Import into any file with standard <code>load</code> directive:</p>\n      <pre><code>load Stats</code></pre>\n      <p>All routines are available under the <code>Stats</code> namespace.</p>\n\n      <h2>Complete Function Catalog Table</h2>\n      <table class=\"doc-table\">\n        <thead>\n          <tr>\n            <th>Function Signature</th>\n            <th>Parameters</th>\n            <th>Return Type</th>\n            <th>Description</th>\n            <th>Example Call</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr><td><code>Stats.sum(values)</code></td><td><code>arr</code></td><td><code>num</code></td><td>Computes total arithmetic sum of an array of numbers.</td><td><code>Stats.sum([10, 20, 30]) -> 60</code></td></tr>\n          <tr><td><code>Stats.mean(values)</code></td><td><code>arr</code></td><td><code>num</code></td><td>Computes arithmetic average of numbers.</td><td><code>Stats.mean([10, 20, 30]) -> 20</code></td></tr>\n          <tr><td><code>Stats.minMax(values)</code></td><td><code>arr</code></td><td><code>arr</code></td><td>Returns a two-element array [min, max].</td><td><code>Stats.minMax([5, 2, 9]) -> [2, 9]</code></td></tr>\n          <tr><td><code>Stats.range(values)</code></td><td><code>arr</code></td><td><code>num</code></td><td>Computes the dispersion range (max - min).</td><td><code>Stats.range([5, 2, 9]) -> 7</code></td></tr>\n          <tr><td><code>Stats.variance(values)</code></td><td><code>arr</code></td><td><code>num</code></td><td>Computes statistical population variance.</td><td><code>Stats.variance([2, 4, 6])</code></td></tr>\n          <tr><td><code>Stats.stdDev(values)</code></td><td><code>arr</code></td><td><code>num</code></td><td>Computes standard deviation (square root of variance).</td><td><code>Stats.stdDev([2, 4, 6])</code></td></tr>\n        </tbody>\n      </table>\n",
    "codeBlocks": [
      {
        "id": "cb_ch48_1",
        "title": "stats_demo.vrs",
        "code": "load Stats\n\nset scores: [85, 92, 78, 95, 88, 92]\n\nset avg: Stats.mean(scores)\nset total: Stats.sum(scores)\nset bounds: Stats.minMax(scores)\n\ndisplay \"Average Score: \" + avg ?color=green\ndisplay \"Total Sum: \" + total ?color=cyan\ndisplay \"Min & Max: \" + bounds ?color=yellow"
      }
    ],
    "exercises": [
      {
        "id": "ex_ch48_1",
        "title": "Challenge 48: Dataset Mean",
        "prompt": "Load <code>Stats</code>, calculate the mean of <code>[10, 20, 30, 40]</code>, and display it.",
        "starterCode": "! Load Stats and calculate mean\n",
        "hint": "load Stats\nset m: Stats.mean([10, 20, 30, 40])\ndisplay m",
        "solution": "load Stats\nset m: Stats.mean([10, 20, 30, 40])\ndisplay m",
        "expectedMatch": {}
      }
    ]
  },
  {
    "id": "ch49-pseudo-lib",
    "number": 49,
    "section": "Section 12: Numerics & Linear Algebra Ecosystem",
    "subsection": "Mathematical Engines",
    "title": "Pseudo-Random Number Generation",
    "category": "Standard Libraries",
    "readTime": "4 min read",
    "summary": "Generate deterministic random sequences, dice rolls, list shuffling, and choices with 'Pseudo'.",
    "body": "\n      <h2>The Pseudo Standard Library</h2>\n      <p>Deterministic pseudo-random number generator, synthetic data generation, and collection shuffling.</p>\n      \n      <h2>Loading the Module</h2>\n      <p>Import into any file with standard <code>load</code> directive:</p>\n      <pre><code>load Pseudo</code></pre>\n      <p>All routines are available under the <code>Pseudo</code> namespace.</p>\n\n      <h2>Complete Function Catalog Table</h2>\n      <table class=\"doc-table\">\n        <thead>\n          <tr>\n            <th>Function Signature</th>\n            <th>Parameters</th>\n            <th>Return Type</th>\n            <th>Description</th>\n            <th>Example Call</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr><td><code>Pseudo.seed(val)</code></td><td><code>num</code></td><td><code>void</code></td><td>Initializes PRNG seed state for deterministic reproducibility.</td><td><code>Pseudo.seed(12345)</code></td></tr>\n          <tr><td><code>Pseudo.between(min, max)</code></td><td><code>num, num</code></td><td><code>num</code></td><td>Generates pseudo-random integer in [min, max].</td><td><code>Pseudo.between(1, 100)</code></td></tr>\n          <tr><td><code>Pseudo.choice(arr)</code></td><td><code>arr</code></td><td><code>any</code></td><td>Selects a random element from the provided array.</td><td><code>Pseudo.choice([\"A\", \"B\"])</code></td></tr>\n          <tr><td><code>Pseudo.shuffle(arr)</code></td><td><code>arr</code></td><td><code>arr</code></td><td>Performs in-place Fisher-Yates array permutation.</td><td><code>Pseudo.shuffle([1, 2, 3])</code></td></tr>\n          <tr><td><code>Pseudo.sample(arr, count)</code></td><td><code>arr, num</code></td><td><code>arr</code></td><td>Extracts count non-repeating random elements.</td><td><code>Pseudo.sample(list, 3)</code></td></tr>\n          <tr><td><code>Pseudo.boolean(prob)</code></td><td><code>num</code></td><td><code>bool</code></td><td>Returns true with probability prob (0.0 to 1.0).</td><td><code>Pseudo.boolean(0.5)</code></td></tr>\n          <tr><td><code>Pseudo.uuid()</code></td><td><code>void</code></td><td><code>str</code></td><td>Generates synthetic RFC4122-compliant v4 UUID string.</td><td><code>Pseudo.uuid()</code></td></tr>\n          <tr><td><code>Pseudo.name()</code></td><td><code>void</code></td><td><code>str</code></td><td>Generates a realistic synthetic full person name.</td><td><code>Pseudo.name() -> \"Alice Carter\"</code></td></tr>\n          <tr><td><code>Pseudo.email()</code></td><td><code>void</code></td><td><code>str</code></td><td>Generates a synthetic email address.</td><td><code>Pseudo.email()</code></td></tr>\n          <tr><td><code>Pseudo.alphaNumeric(len)</code></td><td><code>num</code></td><td><code>str</code></td><td>Generates random alphanumeric string of length len.</td><td><code>Pseudo.alphaNumeric(12)</code></td></tr>\n        </tbody>\n      </table>\n",
    "codeBlocks": [
      {
        "id": "cb_ch49_1",
        "title": "pseudo_demo.vrs",
        "code": "Pseudo.seed 1337\nset roll: Pseudo.between 1, 6\nset picked: (choice [\"apple\", \"banana\", \"cherry\"])\n\ndisplay \"Dice roll: \" + roll ?color=yellow\ndisplay \"Random fruit: \" + picked ?color=green"
      }
    ],
    "exercises": [
      {
        "id": "ex_ch49_1",
        "title": "Challenge 49: Random Range",
        "prompt": "Seed Pseudo with <code>42</code>, generate a random number between 1 and 10 with <code>Pseudo.between 1, 10</code>, and display it.",
        "starterCode": "! Seed Pseudo and generate range\n",
        "hint": "Pseudo.seed 42\ndisplay Pseudo.between 1, 10",
        "solution": "Pseudo.seed 42\ndisplay Pseudo.between 1, 10",
        "expectedMatch": {}
      }
    ]
  },
  {
    "id": "ch50-arrays-lib",
    "number": 50,
    "section": "Section 13: Data & Formats Ecosystem",
    "subsection": "Structures & Serialization",
    "title": "The Arrays Standard Library",
    "category": "Standard Libraries",
    "readTime": "4 min read",
    "summary": "Array operations: push, pop, slice, join, reversing, containment checks, and index queries.",
    "body": "\n      <h2>The Arrays Standard Library</h2>\n      <p>Array manipulation, indexing, sorting, searching, and slicing utilities.</p>\n      \n      <h2>Loading the Module</h2>\n      <p>Import into any file with standard <code>load</code> directive:</p>\n      <pre><code>load Arrays</code></pre>\n      <p>All routines are available under the <code>Arrays</code> namespace.</p>\n\n      <h2>Complete Function Catalog Table</h2>\n      <table class=\"doc-table\">\n        <thead>\n          <tr>\n            <th>Function Signature</th>\n            <th>Parameters</th>\n            <th>Return Type</th>\n            <th>Description</th>\n            <th>Example Call</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr><td><code>Arrays.length(items)</code></td><td><code>arr</code></td><td><code>num</code></td><td>Returns element count in array.</td><td><code>Arrays.length([1, 2, 3]) -> 3</code></td></tr>\n          <tr><td><code>Arrays.len(items)</code></td><td><code>arr</code></td><td><code>num</code></td><td>Short alias for length.</td><td><code>Arrays.len([1, 2, 3]) -> 3</code></td></tr>\n          <tr><td><code>Arrays.push(items, val)</code></td><td><code>arr, any</code></td><td><code>arr</code></td><td>Appends val to end of array and returns updated array.</td><td><code>Arrays.push(arr, 42)</code></td></tr>\n          <tr><td><code>Arrays.pop(items)</code></td><td><code>arr</code></td><td><code>any</code></td><td>Removes and returns last element from array.</td><td><code>Arrays.pop(arr)</code></td></tr>\n          <tr><td><code>Arrays.reverse(items)</code></td><td><code>arr</code></td><td><code>arr</code></td><td>Reverses array elements in place.</td><td><code>Arrays.reverse(arr)</code></td></tr>\n          <tr><td><code>Arrays.sort(items)</code></td><td><code>arr</code></td><td><code>arr</code></td><td>Sorts numbers or strings in ascending order.</td><td><code>Arrays.sort([3, 1, 2]) -> [1, 2, 3]</code></td></tr>\n          <tr><td><code>Arrays.contains(items, val)</code></td><td><code>arr, any</code></td><td><code>bool</code></td><td>Returns true if array contains value.</td><td><code>Arrays.contains([1, 2], 2) -> true</code></td></tr>\n          <tr><td><code>Arrays.indexOf(items, val)</code></td><td><code>arr, any</code></td><td><code>num</code></td><td>Returns zero-based index or -1 if not found.</td><td><code>Arrays.indexOf([10, 20], 20) -> 1</code></td></tr>\n          <tr><td><code>Arrays.join(items, sep)</code></td><td><code>arr, str</code></td><td><code>str</code></td><td>Concatenates elements into a string separated by sep.</td><td><code>Arrays.join([1, 2], \", \")</code></td></tr>\n          <tr><td><code>Arrays.slice(items, start, end)</code></td><td><code>arr, num, num</code></td><td><code>arr</code></td><td>Extracts shallow slice from start to end index.</td><td><code>Arrays.slice(arr, 1, 3)</code></td></tr>\n          <tr><td><code>Arrays.concat(arr1, arr2)</code></td><td><code>arr, arr</code></td><td><code>arr</code></td><td>Merges two arrays into a new combined array.</td><td><code>Arrays.concat([1], [2]) -> [1, 2]</code></td></tr>\n          <tr><td><code>Arrays.first(items)</code></td><td><code>arr</code></td><td><code>any</code></td><td>Returns the first element (index 0).</td><td><code>Arrays.first([10, 20]) -> 10</code></td></tr>\n          <tr><td><code>Arrays.last(items)</code></td><td><code>arr</code></td><td><code>any</code></td><td>Returns the last element (index length - 1).</td><td><code>Arrays.last([10, 20]) -> 20</code></td></tr>\n        </tbody>\n      </table>\n",
    "codeBlocks": [
      {
        "id": "cb_ch50_1",
        "title": "arrays_demo.vrs",
        "code": "set raw: [10, 20, 30]\nraw.push(40)\nset joined: raw.join(\" - \")\nraw.reverse()\n\ndisplay \"Joined: \" + joined ?color=cyan\ndisplay \"Reversed items: \" + raw ?color=green"
      }
    ],
    "exercises": [
      {
        "id": "ex_ch50_1",
        "title": "Challenge 50: Reverse an Array",
        "prompt": "Create <code>set arr: [1, 2, 3, 4]</code>, call <code>arr.reverse()</code>, and display <code>arr</code>.",
        "starterCode": "! Reverse [1, 2, 3, 4]\n",
        "hint": "set arr: [1, 2, 3, 4]\narr.reverse()\ndisplay arr",
        "solution": "set arr: [1, 2, 3, 4]\narr.reverse()\ndisplay arr",
        "expectedMatch": {}
      }
    ]
  },
  {
    "id": "ch51-strings-lib",
    "number": 51,
    "section": "Section 13: Data & Formats Ecosystem",
    "subsection": "Structures & Serialization",
    "title": "The Strings Standard Library",
    "category": "Standard Libraries",
    "readTime": "4 min read",
    "summary": "Text manipulation utilities: splitting, trimming, casing transformations (toUpper/toLower), and padding.",
    "body": "\n      <h2>The Strings Standard Library</h2>\n      <p>Text processing, casing, trimming, searching, splitting, and padding.</p>\n      \n      <h2>Loading the Module</h2>\n      <p>Import into any file with standard <code>load</code> directive:</p>\n      <pre><code>load Strings</code></pre>\n      <p>All routines are available under the <code>Strings</code> namespace.</p>\n\n      <h2>Complete Function Catalog Table</h2>\n      <table class=\"doc-table\">\n        <thead>\n          <tr>\n            <th>Function Signature</th>\n            <th>Parameters</th>\n            <th>Return Type</th>\n            <th>Description</th>\n            <th>Example Call</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr><td><code>Strings.toUpper(text)</code></td><td><code>str</code></td><td><code>str</code></td><td>Converts all characters to uppercase.</td><td><code>Strings.toUpper(\"hi\") -> \"HI\"</code></td></tr>\n          <tr><td><code>Strings.toLower(text)</code></td><td><code>str</code></td><td><code>str</code></td><td>Converts all characters to lowercase.</td><td><code>Strings.toLower(\"HI\") -> \"hi\"</code></td></tr>\n          <tr><td><code>Strings.trim(text)</code></td><td><code>str</code></td><td><code>str</code></td><td>Strips leading and trailing whitespace.</td><td><code>Strings.trim(\"  ok  \") -> \"ok\"</code></td></tr>\n          <tr><td><code>Strings.length(text)</code></td><td><code>str</code></td><td><code>num</code></td><td>Returns character count of the string.</td><td><code>Strings.length(\"hello\") -> 5</code></td></tr>\n          <tr><td><code>Strings.contains(text, needle)</code></td><td><code>str, str</code></td><td><code>bool</code></td><td>Returns true if needle is substring of text.</td><td><code>Strings.contains(\"abc\", \"b\") -> true</code></td></tr>\n          <tr><td><code>Strings.startsWith(text, pre)</code></td><td><code>str, str</code></td><td><code>bool</code></td><td>Checks if string starts with prefix.</td><td><code>Strings.startsWith(\"vrs\", \"v\") -> true</code></td></tr>\n          <tr><td><code>Strings.endsWith(text, suf)</code></td><td><code>str, str</code></td><td><code>bool</code></td><td>Checks if string ends with suffix.</td><td><code>Strings.endsWith(\"main.vrs\", \".vrs\")</code></td></tr>\n          <tr><td><code>Strings.slice(text, s, e)</code></td><td><code>str, num, num</code></td><td><code>str</code></td><td>Extracts substring between indices s and e.</td><td><code>Strings.slice(\"apple\", 0, 3) -> \"app\"</code></td></tr>\n          <tr><td><code>Strings.split(text, delim)</code></td><td><code>str, str</code></td><td><code>arr</code></td><td>Splits string by delimiter into array of tokens.</td><td><code>Strings.split(\"a,b,c\", \",\")</code></td></tr>\n          <tr><td><code>Strings.replace(text, t, r)</code></td><td><code>str, str, str</code></td><td><code>str</code></td><td>Replaces occurrences of target t with replacement r.</td><td><code>Strings.replace(\"foo\", \"o\", \"a\")</code></td></tr>\n          <tr><td><code>Strings.repeat(text, count)</code></td><td><code>str, num</code></td><td><code>str</code></td><td>Repeats string count times.</td><td><code>Strings.repeat(\"=\", 5) -> \"=====\"</code></td></tr>\n        </tbody>\n      </table>\n",
    "codeBlocks": [
      {
        "id": "cb_ch51_1",
        "title": "strings_demo.vrs",
        "code": "set raw: \"  VerScript Engine  \"\nset cleaned: raw.trim()\nset upper: cleaned.toUpper()\n\ndisplay \"Trimmed: [\" + cleaned + \"]\" ?color=yellow\ndisplay \"Upper: \" + upper ?color=green"
      }
    ],
    "exercises": [
      {
        "id": "ex_ch51_1",
        "title": "Challenge 51: String Uppercase",
        "prompt": "Convert <code>'hello world'</code> to uppercase using <code>'hello world'.toUpper()</code>, and display it.",
        "starterCode": "! Convert to uppercase\n",
        "hint": "display 'hello world'.toUpper()",
        "solution": "display 'hello world'.toUpper()",
        "expectedMatch": {}
      }
    ]
  },
  {
    "id": "ch52-json-lib",
    "number": 52,
    "section": "Section 13: Data & Formats Ecosystem",
    "subsection": "Structures & Serialization",
    "title": "The Json Standard Library",
    "category": "Standard Libraries",
    "readTime": "4 min read",
    "summary": "Serialize and parse JSON data structures between text strings and native VerScript objects with 'load Json'.",
    "body": "\n      <h2>The Json Standard Library</h2>\n      <p>JSON serialization, parsing, and payload validation.</p>\n      \n      <h2>Loading the Module</h2>\n      <p>Import into any file with standard <code>load</code> directive:</p>\n      <pre><code>load Json</code></pre>\n      <p>All routines are available under the <code>Json</code> namespace.</p>\n\n      <h2>Complete Function Catalog Table</h2>\n      <table class=\"doc-table\">\n        <thead>\n          <tr>\n            <th>Function Signature</th>\n            <th>Parameters</th>\n            <th>Return Type</th>\n            <th>Description</th>\n            <th>Example Call</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr><td><code>Json.stringify(data)</code></td><td><code>any</code></td><td><code>str</code></td><td>Serializes array, struct, or entity into valid JSON string.</td><td><code>Json.stringify([1, 2, 3])</code></td></tr>\n          <tr><td><code>Json.parse(jsonStr)</code></td><td><code>str</code></td><td><code>any</code></td><td>Parses JSON string into native VerScript data structure.</td><td><code>Json.parse(\"{\\\"x\\\":10}\")</code></td></tr>\n          <tr><td><code>Json.isValid(jsonStr)</code></td><td><code>str</code></td><td><code>bool</code></td><td>Returns true if jsonStr contains valid JSON syntax.</td><td><code>Json.isValid(\"{\\\"a\\\":1}\") -> true</code></td></tr>\n        </tbody>\n      </table>\n",
    "codeBlocks": [
      {
        "id": "cb_ch52_1",
        "title": "json_demo.vrs",
        "code": "load Json\n\nset payload: [1, 2, 3, 4]\nset jsonText: Json.stringify(payload)\n\ndisplay \"Serialized JSON: \" + jsonText ?color=green"
      }
    ],
    "exercises": [
      {
        "id": "ex_ch52_1",
        "title": "Challenge 52: JSON Stringify",
        "prompt": "Load <code>Json</code>, stringify <code>[10, 20]</code>, and display the JSON text.",
        "starterCode": "! Stringify array\n",
        "hint": "load Json\ndisplay Json.stringify([10, 20])",
        "solution": "load Json\ndisplay Json.stringify([10, 20])",
        "expectedMatch": {}
      }
    ]
  },
  {
    "id": "ch53-validate-lib",
    "number": 53,
    "section": "Section 13: Data & Formats Ecosystem",
    "subsection": "Structures & Serialization",
    "title": "The Validate Standard Library",
    "category": "Standard Libraries",
    "readTime": "3 min read",
    "summary": "Verify inputs, emails, URLs, alphanumeric characters, and length constraints with 'load Validate'.",
    "body": "\n      <h2>The Validate Standard Library</h2>\n      <p>Data integrity verification, email/URL format checking, and numeric bounds testing.</p>\n      \n      <h2>Loading the Module</h2>\n      <p>Import into any file with standard <code>load</code> directive:</p>\n      <pre><code>load Validate</code></pre>\n      <p>All routines are available under the <code>Validate</code> namespace.</p>\n\n      <h2>Complete Function Catalog Table</h2>\n      <table class=\"doc-table\">\n        <thead>\n          <tr>\n            <th>Function Signature</th>\n            <th>Parameters</th>\n            <th>Return Type</th>\n            <th>Description</th>\n            <th>Example Call</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr><td><code>Validate.isEmail(text)</code></td><td><code>str</code></td><td><code>bool</code></td><td>Verifies standard email format with user and domain.</td><td><code>Validate.isEmail(\"user@test.org\")</code></td></tr>\n          <tr><td><code>Validate.isUrl(text)</code></td><td><code>str</code></td><td><code>bool</code></td><td>Verifies standard HTTP/HTTPS URL protocol syntax.</td><td><code>Validate.isUrl(\"https://verscript.org\")</code></td></tr>\n          <tr><td><code>Validate.inRange(val, low, high)</code></td><td><code>num, num, num</code></td><td><code>bool</code></td><td>Returns true if val >= low and val <= high.</td><td><code>Validate.inRange(50, 1, 100) -> true</code></td></tr>\n        </tbody>\n      </table>\n",
    "codeBlocks": [
      {
        "id": "cb_ch53_1",
        "title": "validate_demo.vrs",
        "code": "load Validate\n\nset userEmail: \"team@verscript.org\"\nset isValid: Validate.isEmail(userEmail)\n\nif isValid then\n  display \"Email is valid!\" ?color=green\nelse\n  display \"Invalid email address!\" ?color=red"
      }
    ],
    "exercises": [
      {
        "id": "ex_ch53_1",
        "title": "Challenge 53: Validate Email",
        "prompt": "Load <code>Validate</code>, test if <code>'user@test.com'</code> is an email, and display the boolean result.",
        "starterCode": "! Validate email address\n",
        "hint": "load Validate\ndisplay Validate.isEmail('user@test.com')",
        "solution": "load Validate\ndisplay Validate.isEmail('user@test.com')",
        "expectedMatch": {}
      }
    ]
  },
  {
    "id": "ch54-crypto-lib",
    "number": 54,
    "section": "Section 13: Data & Formats Ecosystem",
    "subsection": "Structures & Serialization",
    "title": "The Crypto Standard Library",
    "category": "Standard Libraries",
    "readTime": "4 min read",
    "summary": "Cryptographic hashing, SHA-256, MD5, Base64 encoding/decoding, and HMAC authentication with 'load Crypto'.",
    "body": "\n      <h2>The Crypto Standard Library</h2>\n      <p>Cryptographic digests, hashing algorithms, and Base64 encoding.</p>\n      \n      <h2>Loading the Module</h2>\n      <p>Import into any file with standard <code>load</code> directive:</p>\n      <pre><code>load Crypto</code></pre>\n      <p>All routines are available under the <code>Crypto</code> namespace.</p>\n\n      <h2>Complete Function Catalog Table</h2>\n      <table class=\"doc-table\">\n        <thead>\n          <tr>\n            <th>Function Signature</th>\n            <th>Parameters</th>\n            <th>Return Type</th>\n            <th>Description</th>\n            <th>Example Call</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr><td><code>Crypto.sha256(text)</code></td><td><code>str</code></td><td><code>str</code></td><td>Computes SHA-256 hexadecimal cryptographic hash digest.</td><td><code>Crypto.sha256(\"secret\")</code></td></tr>\n          <tr><td><code>Crypto.md5(text)</code></td><td><code>str</code></td><td><code>str</code></td><td>Computes MD5 hexadecimal hash digest for checksums.</td><td><code>Crypto.md5(\"payload\")</code></td></tr>\n          <tr><td><code>Crypto.base64Encode(text)</code></td><td><code>str</code></td><td><code>str</code></td><td>Encodes raw text string into Base64 format.</td><td><code>Crypto.base64Encode(\"VerScript\")</code></td></tr>\n          <tr><td><code>Crypto.base64Decode(text)</code></td><td><code>str</code></td><td><code>str</code></td><td>Decodes Base64 string back into plaintext.</td><td><code>Crypto.base64Decode(\"VmVyU2NyaXB0\")</code></td></tr>\n        </tbody>\n      </table>\n",
    "codeBlocks": [
      {
        "id": "cb_ch54_1",
        "title": "crypto_demo.vrs",
        "code": "load Crypto\n\nset hash: Crypto.sha256(\"verscript-secret-key\")\nset encoded: Crypto.base64Encode(\"Antigravity\")\n\ndisplay \"SHA-256 Hash: \" + hash ?color=yellow\ndisplay \"Base64 Encoded: \" + encoded ?color=cyan"
      }
    ],
    "exercises": [
      {
        "id": "ex_ch54_1",
        "title": "Challenge 54: Base64 Encode",
        "prompt": "Load <code>Crypto</code>, base64-encode <code>'hello'</code>, and display the encoded string.",
        "starterCode": "! Base64 encode hello\n",
        "hint": "load Crypto\ndisplay Crypto.base64Encode('hello')",
        "solution": "load Crypto\ndisplay Crypto.base64Encode('hello')",
        "expectedMatch": {}
      }
    ]
  },
  {
    "id": "ch55-regex-lib",
    "number": 55,
    "section": "Section 13: Data & Formats Ecosystem",
    "subsection": "Structures & Serialization",
    "title": "The Regex Standard Library",
    "category": "Standard Libraries",
    "readTime": "4 min read",
    "summary": "Regular expression pattern matching, capture groups, testing, and substitutions with 'load Regex'.",
    "body": "\n      <h2>The Regex Standard Library</h2>\n      <p>Regular expression pattern compilation, testing, matching, and replacement.</p>\n      \n      <h2>Loading the Module</h2>\n      <p>Import into any file with standard <code>load</code> directive:</p>\n      <pre><code>load Regex</code></pre>\n      <p>All routines are available under the <code>Regex</code> namespace.</p>\n\n      <h2>Complete Function Catalog Table</h2>\n      <table class=\"doc-table\">\n        <thead>\n          <tr>\n            <th>Function Signature</th>\n            <th>Parameters</th>\n            <th>Return Type</th>\n            <th>Description</th>\n            <th>Example Call</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr><td><code>Regex.test(pattern, text)</code></td><td><code>str, str</code></td><td><code>bool</code></td><td>Returns true if pattern matches text.</td><td><code>Regex.test(\"^[0-9]+$\", \"123\") -> true</code></td></tr>\n          <tr><td><code>Regex.match(pattern, text)</code></td><td><code>str, str</code></td><td><code>arr</code></td><td>Finds matching substring groups.</td><td><code>Regex.match(\"[a-z]+\", \"hello 123\")</code></td></tr>\n          <tr><td><code>Regex.replaceAll(pattern, text, r)</code></td><td><code>str, str, str</code></td><td><code>str</code></td><td>Replaces all matches of pattern in text with r.</td><td><code>Regex.replaceAll(\"[0-9]\", \"a1b2\", \"#\")</code></td></tr>\n        </tbody>\n      </table>\n",
    "codeBlocks": [
      {
        "id": "cb_ch55_1",
        "title": "regex_demo.vrs",
        "code": "load Regex\n\nset sentence: \"Contact support at help@company.org or sales@company.org\"\nset matches: Regex.match(\"[a-zA-Z0-9]+@[a-zA-Z0-9.]+\", sentence)\n\ndisplay \"Found email: \" + matches ?color=green"
      }
    ],
    "exercises": [
      {
        "id": "ex_ch55_1",
        "title": "Challenge 55: Regex Test",
        "prompt": "Load <code>Regex</code>, test if <code>'abc123'</code> contains digits <code>'[0-9]+'</code>, and display the result.",
        "starterCode": "! Test regex pattern\n",
        "hint": "load Regex\ndisplay Regex.test('[0-9]+', 'abc123')",
        "solution": "load Regex\ndisplay Regex.test('[0-9]+', 'abc123')",
        "expectedMatch": {}
      }
    ]
  },
  {
    "id": "ch56-fs-lib",
    "number": 56,
    "section": "Section 14: System & I/O Ecosystem",
    "subsection": "Operating System & Network",
    "title": "The Fs Standard Library",
    "category": "Standard Libraries",
    "readTime": "4 min read",
    "summary": "File system operations: file verification, path inspections, and formats with 'load Fs'.",
    "body": "\n      <h2>The Fs Standard Library</h2>\n      <p>Safe filesystem existence queries and file type inspection.</p>\n      \n      <h2>Loading the Module</h2>\n      <p>Import into any file with standard <code>load</code> directive:</p>\n      <pre><code>load Fs</code></pre>\n      <p>All routines are available under the <code>Fs</code> namespace.</p>\n\n      <h2>Complete Function Catalog Table</h2>\n      <table class=\"doc-table\">\n        <thead>\n          <tr>\n            <th>Function Signature</th>\n            <th>Parameters</th>\n            <th>Return Type</th>\n            <th>Description</th>\n            <th>Example Call</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr><td><code>Fs.exists(filePath)</code></td><td><code>str</code></td><td><code>bool</code></td><td>Returns true if file exists and is accessible on disk.</td><td><code>Fs.exists(\"main.vrs\")</code></td></tr>\n          <tr><td><code>Fs.isVrsFile(filePath)</code></td><td><code>str</code></td><td><code>bool</code></td><td>Returns true if path has a valid .vrs or .h.vrs extension.</td><td><code>Fs.isVrsFile(\"calc.h.vrs\") -> true</code></td></tr>\n        </tbody>\n      </table>\n",
    "codeBlocks": [
      {
        "id": "cb_ch56_1",
        "title": "fs_demo.vrs",
        "code": "load Fs\n\nset isVrs: Fs.isVrsFile(\"main.vrs\")\ndisplay \"Is .vrs file: \" + isVrs ?color=green"
      }
    ],
    "exercises": [
      {
        "id": "ex_ch56_1",
        "title": "Challenge 56: Check VRS File",
        "prompt": "Load <code>Fs</code> and display whether <code>'test.vrs'</code> is a VerScript file.",
        "starterCode": "! Check VRS file extension\n",
        "hint": "load Fs\ndisplay Fs.isVrsFile('test.vrs')",
        "solution": "load Fs\ndisplay Fs.isVrsFile('test.vrs')",
        "expectedMatch": {}
      }
    ]
  },
  {
    "id": "ch57-path-lib",
    "number": 57,
    "section": "Section 14: System & I/O Ecosystem",
    "subsection": "Operating System & Network",
    "title": "The Path Standard Library",
    "category": "Standard Libraries",
    "readTime": "3 min read",
    "summary": "Cross-platform filesystem path joins and extension parsing with 'load Path'.",
    "body": "\n      <h2>The Path Standard Library</h2>\n      <p>Cross-platform filesystem path concatenation and extension extraction.</p>\n      \n      <h2>Loading the Module</h2>\n      <p>Import into any file with standard <code>load</code> directive:</p>\n      <pre><code>load Path</code></pre>\n      <p>All routines are available under the <code>Path</code> namespace.</p>\n\n      <h2>Complete Function Catalog Table</h2>\n      <table class=\"doc-table\">\n        <thead>\n          <tr>\n            <th>Function Signature</th>\n            <th>Parameters</th>\n            <th>Return Type</th>\n            <th>Description</th>\n            <th>Example Call</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr><td><code>Path.join(dir, file)</code></td><td><code>str, str</code></td><td><code>str</code></td><td>Normalizes and joins directory and filename.</td><td><code>Path.join(\"src\", \"main.vrs\")</code></td></tr>\n          <tr><td><code>Path.extname(filePath)</code></td><td><code>str</code></td><td><code>str</code></td><td>Extracts file extension including leading dot.</td><td><code>Path.extname(\"app.vrs\") -> \".vrs\"</code></td></tr>\n        </tbody>\n      </table>\n",
    "codeBlocks": [
      {
        "id": "cb_ch57_1",
        "title": "path_demo.vrs",
        "code": "load Path\n\nset fullPath: Path.join(\"data\", \"settings.json\")\nset ext: Path.extname(fullPath)\n\ndisplay \"Joined Path: \" + fullPath ?color=cyan\ndisplay \"Extension: \" + ext ?color=green"
      }
    ],
    "exercises": [
      {
        "id": "ex_ch57_1",
        "title": "Challenge 57: Path Extension",
        "prompt": "Load <code>Path</code>, get the file extension of <code>'script.vrs'</code>, and display it.",
        "starterCode": "! Get file extension\n",
        "hint": "load Path\ndisplay Path.extname('script.vrs')",
        "solution": "load Path\ndisplay Path.extname('script.vrs')",
        "expectedMatch": {}
      }
    ]
  },
  {
    "id": "ch58-env-lib",
    "number": 58,
    "section": "Section 14: System & I/O Ecosystem",
    "subsection": "Operating System & Network",
    "title": "The Env Standard Library",
    "category": "Standard Libraries",
    "readTime": "3 min read",
    "summary": "Inspect and manage environment variables and runtime flags with 'load Env'.",
    "body": "\n      <h2>The Env Standard Library</h2>\n      <p>Environment variable querying and runtime environment detection.</p>\n      \n      <h2>Loading the Module</h2>\n      <p>Import into any file with standard <code>load</code> directive:</p>\n      <pre><code>load Env</code></pre>\n      <p>All routines are available under the <code>Env</code> namespace.</p>\n\n      <h2>Complete Function Catalog Table</h2>\n      <table class=\"doc-table\">\n        <thead>\n          <tr>\n            <th>Function Signature</th>\n            <th>Parameters</th>\n            <th>Return Type</th>\n            <th>Description</th>\n            <th>Example Call</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr><td><code>Env.get(key, defaultVal)</code></td><td><code>str, str</code></td><td><code>str</code></td><td>Reads environment variable or returns default value.</td><td><code>Env.get(\"PORT\", \"8080\")</code></td></tr>\n          <tr><td><code>Env.isProduction()</code></td><td><code>void</code></td><td><code>bool</code></td><td>Returns true if running in production mode.</td><td><code>Env.isProduction()</code></td></tr>\n          <tr><td><code>Env.isDevelopment()</code></td><td><code>void</code></td><td><code>bool</code></td><td>Returns true if running in development mode.</td><td><code>Env.isDevelopment()</code></td></tr>\n        </tbody>\n      </table>\n",
    "codeBlocks": [
      {
        "id": "cb_ch58_1",
        "title": "env_demo.vrs",
        "code": "load Env\n\nset isDev: Env.isDevelopment()\nset envMode: Env.get(\"MODE\", \"production\")\n\ndisplay \"Development mode: \" + isDev ?color=green\ndisplay \"Environment mode: \" + envMode ?color=cyan"
      }
    ],
    "exercises": [
      {
        "id": "ex_ch58_1",
        "title": "Challenge 58: Env Fallback",
        "prompt": "Load <code>Env</code>, retrieve <code>'MODE'</code> with default <code>'development'</code>, and display it.",
        "starterCode": "! Get env variable with fallback\n",
        "hint": "load Env\ndisplay Env.get('MODE', 'development')",
        "solution": "load Env\ndisplay Env.get('MODE', 'development')",
        "expectedMatch": {}
      }
    ]
  },
  {
    "id": "ch59-time-lib",
    "number": 59,
    "section": "Section 14: System & I/O Ecosystem",
    "subsection": "Operating System & Network",
    "title": "The Time Standard Library",
    "category": "Standard Libraries",
    "readTime": "3 min read",
    "summary": "High-precision timestamps, epoch milliseconds, and leap year calculations with 'load Time'.",
    "body": "\n      <h2>The Time Standard Library</h2>\n      <p>ISO timestamps, millisecond epoch timestamps, and calendar math.</p>\n      \n      <h2>Loading the Module</h2>\n      <p>Import into any file with standard <code>load</code> directive:</p>\n      <pre><code>load Time</code></pre>\n      <p>All routines are available under the <code>Time</code> namespace.</p>\n\n      <h2>Complete Function Catalog Table</h2>\n      <table class=\"doc-table\">\n        <thead>\n          <tr>\n            <th>Function Signature</th>\n            <th>Parameters</th>\n            <th>Return Type</th>\n            <th>Description</th>\n            <th>Example Call</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr><td><code>Time.now()</code></td><td><code>void</code></td><td><code>str</code></td><td>Returns current ISO 8601 UTC timestamp string.</td><td><code>Time.now() -> \"2026-10-20T...\"</code></td></tr>\n          <tr><td><code>Time.epochMs()</code></td><td><code>void</code></td><td><code>num</code></td><td>Returns current Unix epoch time in milliseconds.</td><td><code>Time.epochMs()</code></td></tr>\n          <tr><td><code>Time.diffMs(startMs, endMs)</code></td><td><code>num, num</code></td><td><code>num</code></td><td>Computes duration delta between two millisecond timestamps.</td><td><code>Time.diffMs(t1, t2)</code></td></tr>\n          <tr><td><code>Time.isLeapYear(year)</code></td><td><code>num</code></td><td><code>bool</code></td><td>Returns true if Gregorian calendar year is a leap year.</td><td><code>Time.isLeapYear(2024) -> true</code></td></tr>\n        </tbody>\n      </table>\n",
    "codeBlocks": [
      {
        "id": "cb_ch59_1",
        "title": "time_demo.vrs",
        "code": "load Time\n\nset t0: Time.epochMs()\nset leap: Time.isLeapYear(2028)\n\ndisplay \"Current Epoch MS: \" + t0 ?color=cyan\ndisplay \"2028 is leap year: \" + leap ?color=green"
      }
    ],
    "exercises": [
      {
        "id": "ex_ch59_1",
        "title": "Challenge 59: Current Time",
        "prompt": "Load <code>Time</code>, get current epoch ms with <code>Time.epochMs()</code>, and display whether it is greater than 0.",
        "starterCode": "! Check current time\n",
        "hint": "load Time\nset t: Time.epochMs()\ndisplay t > 0",
        "solution": "load Time\nset t: Time.epochMs()\ndisplay t > 0",
        "expectedMatch": {}
      }
    ]
  },
  {
    "id": "ch60-http-lib",
    "number": 60,
    "section": "Section 14: System & I/O Ecosystem",
    "subsection": "Operating System & Network",
    "title": "The Http Standard Library",
    "category": "Standard Libraries",
    "readTime": "4 min read",
    "summary": "Inspect HTTP status codes, client/server errors, and network responses with 'load Http'.",
    "body": "\n      <h2>The Http Standard Library</h2>\n      <p>HTTP protocol status code classification and network error categories.</p>\n      \n      <h2>Loading the Module</h2>\n      <p>Import into any file with standard <code>load</code> directive:</p>\n      <pre><code>load Http</code></pre>\n      <p>All routines are available under the <code>Http</code> namespace.</p>\n\n      <h2>Complete Function Catalog Table</h2>\n      <table class=\"doc-table\">\n        <thead>\n          <tr>\n            <th>Function Signature</th>\n            <th>Parameters</th>\n            <th>Return Type</th>\n            <th>Description</th>\n            <th>Example Call</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr><td><code>Http.isSuccess(statusCode)</code></td><td><code>num</code></td><td><code>bool</code></td><td>Returns true if status is 2xx (200-299).</td><td><code>Http.isSuccess(200) -> true</code></td></tr>\n          <tr><td><code>Http.isClientError(statusCode)</code></td><td><code>num</code></td><td><code>bool</code></td><td>Returns true if status is 4xx (400-499).</td><td><code>Http.isClientError(404) -> true</code></td></tr>\n          <tr><td><code>Http.isServerError(statusCode)</code></td><td><code>num</code></td><td><code>bool</code></td><td>Returns true if status is 5xx (500-599).</td><td><code>Http.isServerError(500) -> true</code></td></tr>\n        </tbody>\n      </table>\n",
    "codeBlocks": [
      {
        "id": "cb_ch60_1",
        "title": "http_demo.vrs",
        "code": "load Http\n\nset ok: Http.isSuccess(200)\nset clientErr: Http.isClientError(404)\n\ndisplay \"200 is success: \" + ok ?color=green\ndisplay \"404 is client error: \" + clientErr ?color=yellow"
      }
    ],
    "exercises": [
      {
        "id": "ex_ch60_1",
        "title": "Challenge 60: HTTP Response Check",
        "prompt": "Load <code>Http</code>, test if <code>200</code> is success using <code>Http.isSuccess(200)</code>, and display the result.",
        "starterCode": "! Check HTTP success\n",
        "hint": "load Http\ndisplay Http.isSuccess(200)",
        "solution": "load Http\ndisplay Http.isSuccess(200)",
        "expectedMatch": {}
      }
    ]
  },
  {
    "id": "ch61-log-lib",
    "number": 61,
    "section": "Section 15: Developer Tools & Diagnostics",
    "subsection": "Tooling & Quality Assurance",
    "title": "The Log Standard Library",
    "category": "Developer Tools",
    "readTime": "3 min read",
    "summary": "Structured log levels (info, warn, error, debug) with timestamps and subsystem tags with 'load Log'.",
    "body": "\n      <h2>The Log Standard Library</h2>\n      <p>Structured, tiered telemetry logging with timestamps and severity tags.</p>\n      \n      <h2>Loading the Module</h2>\n      <p>Import into any file with standard <code>load</code> directive:</p>\n      <pre><code>load Log</code></pre>\n      <p>All routines are available under the <code>Log</code> namespace.</p>\n\n      <h2>Complete Function Catalog Table</h2>\n      <table class=\"doc-table\">\n        <thead>\n          <tr>\n            <th>Function Signature</th>\n            <th>Parameters</th>\n            <th>Return Type</th>\n            <th>Description</th>\n            <th>Example Call</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr><td><code>Log.info(msg)</code></td><td><code>str</code></td><td><code>void</code></td><td>Logs informational message tagged with [INFO].</td><td><code>Log.info(\"System startup ready\")</code></td></tr>\n          <tr><td><code>Log.warn(msg)</code></td><td><code>str</code></td><td><code>void</code></td><td>Logs warning message tagged with [WARN].</td><td><code>Log.warn(\"Cache high watermark\")</code></td></tr>\n          <tr><td><code>Log.error(msg)</code></td><td><code>str</code></td><td><code>void</code></td><td>Logs error message tagged with [ERROR].</td><td><code>Log.error(\"Connection failed\")</code></td></tr>\n          <tr><td><code>Log.debug(msg)</code></td><td><code>str</code></td><td><code>void</code></td><td>Logs verbose debugging diagnostic message.</td><td><code>Log.debug(\"Packet payload: ...\")</code></td></tr>\n        </tbody>\n      </table>\n",
    "codeBlocks": [
      {
        "id": "cb_ch61_1",
        "title": "log_demo.vrs",
        "code": "load Log\n\nLog.info(\"Database connection established\")\nLog.warn(\"Memory consumption over 80%\")\nLog.error(\"Failed to reach payment gateway\")"
      }
    ],
    "exercises": [
      {
        "id": "ex_ch61_1",
        "title": "Challenge 61: Log Info",
        "prompt": "Load <code>Log</code> and emit an info log: <code>Log.info('System online')</code>.",
        "starterCode": "! Emit info log\n",
        "hint": "load Log\nLog.info('System online')",
        "solution": "load Log\nLog.info('System online')",
        "expectedMatch": {}
      }
    ]
  },
  {
    "id": "ch62-color-lib",
    "number": 62,
    "section": "Section 15: Developer Tools & Diagnostics",
    "subsection": "Tooling & Quality Assurance",
    "title": "The Color Standard Library",
    "category": "Developer Tools",
    "readTime": "3 min read",
    "summary": "Terminal styling with ANSI colors, hex colors, and RGB conversion with 'load Color'.",
    "body": "\n      <h2>The Color Standard Library</h2>\n      <p>ANSI color wrapping, hex code validation, and RGB-to-hex conversion.</p>\n      \n      <h2>Loading the Module</h2>\n      <p>Import into any file with standard <code>load</code> directive:</p>\n      <pre><code>load Color</code></pre>\n      <p>All routines are available under the <code>Color</code> namespace.</p>\n\n      <h2>Complete Function Catalog Table</h2>\n      <table class=\"doc-table\">\n        <thead>\n          <tr>\n            <th>Function Signature</th>\n            <th>Parameters</th>\n            <th>Return Type</th>\n            <th>Description</th>\n            <th>Example Call</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr><td><code>Color.isHexCode(hex)</code></td><td><code>str</code></td><td><code>bool</code></td><td>Returns true if string is valid #RRGGBB format.</td><td><code>Color.isHexCode(\"#00ffcc\") -> true</code></td></tr>\n          <tr><td><code>Color.rgbToHex(r, g, b)</code></td><td><code>num, num, num</code></td><td><code>str</code></td><td>Converts integer RGB values (0-255) to hex code.</td><td><code>Color.rgbToHex(255, 0, 0) -> \"#ff0000\"</code></td></tr>\n          <tr><td><code>Color.ansiWrap(text, colorName)</code></td><td><code>str, str</code></td><td><code>str</code></td><td>Wraps text in terminal ANSI color escape sequences.</td><td><code>Color.ansiWrap(\"OK\", \"green\")</code></td></tr>\n        </tbody>\n      </table>\n",
    "codeBlocks": [
      {
        "id": "cb_ch62_1",
        "title": "color_demo.vrs",
        "code": "load Color\n\nset hex: Color.rgbToHex(56, 189, 248)\nset wrapped: Color.ansiWrap(\"Success\", \"green\")\n\ndisplay \"Hex code: \" + hex ?color=yellow\ndisplay wrapped"
      }
    ],
    "exercises": [
      {
        "id": "ex_ch62_1",
        "title": "Challenge 62: RGB to Hex",
        "prompt": "Load <code>Color</code> and convert RGB <code>255, 0, 0</code> to Hex using <code>Color.rgbToHex(255, 0, 0)</code>.",
        "starterCode": "! Convert RGB to hex\n",
        "hint": "load Color\ndisplay Color.rgbToHex(255, 0, 0)",
        "solution": "load Color\ndisplay Color.rgbToHex(255, 0, 0)",
        "expectedMatch": {}
      }
    ]
  },
  {
    "id": "ch63-console-lib",
    "number": 63,
    "section": "Section 15: Developer Tools & Diagnostics",
    "subsection": "Tooling & Quality Assurance",
    "title": "The Console Standard Library",
    "category": "Developer Tools",
    "readTime": "3 min read",
    "summary": "Interactive console messages, warnings, errors, and success notifications with 'load Console'.",
    "body": "\n      <h2>The Console Standard Library</h2>\n      <p>Unified console logging with formatted styling and alert prefixes.</p>\n      \n      <h2>Loading the Module</h2>\n      <p>Import into any file with standard <code>load</code> directive:</p>\n      <pre><code>load Console</code></pre>\n      <p>All routines are available under the <code>Console</code> namespace.</p>\n\n      <h2>Complete Function Catalog Table</h2>\n      <table class=\"doc-table\">\n        <thead>\n          <tr>\n            <th>Function Signature</th>\n            <th>Parameters</th>\n            <th>Return Type</th>\n            <th>Description</th>\n            <th>Example Call</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr><td><code>Console.log(msg)</code></td><td><code>any</code></td><td><code>void</code></td><td>Prints standard message to stdout console.</td><td><code>Console.log(\"General log message\")</code></td></tr>\n          <tr><td><code>Console.info(msg)</code></td><td><code>any</code></td><td><code>void</code></td><td>Prints cyan-colored informational alert.</td><td><code>Console.info(\"Service initialized\")</code></td></tr>\n          <tr><td><code>Console.warn(msg)</code></td><td><code>any</code></td><td><code>void</code></td><td>Prints yellow warning message.</td><td><code>Console.warn(\"Deprecated routine called\")</code></td></tr>\n          <tr><td><code>Console.error(msg)</code></td><td><code>any</code></td><td><code>void</code></td><td>Prints red error alert message.</td><td><code>Console.error(\"Socket disconnected\")</code></td></tr>\n          <tr><td><code>Console.success(msg)</code></td><td><code>any</code></td><td><code>void</code></td><td>Prints vibrant green success confirmation.</td><td><code>Console.success(\"Build passed 100%\")</code></td></tr>\n        </tbody>\n      </table>\n",
    "codeBlocks": [
      {
        "id": "cb_ch63_1",
        "title": "console_demo.vrs",
        "code": "load Console\n\nConsole.info(\"Initializing system...\")\nConsole.success(\"Services started successfully!\")"
      }
    ],
    "exercises": [
      {
        "id": "ex_ch63_1",
        "title": "Challenge 63: Console Success",
        "prompt": "Load <code>Console</code> and emit <code>Console.success('Ready!')</code>.",
        "starterCode": "! Emit console success\n",
        "hint": "load Console\nConsole.success('Ready!')",
        "solution": "load Console\nConsole.success('Ready!')",
        "expectedMatch": {}
      }
    ]
  },
  {
    "id": "ch64-benchmark-lib",
    "number": 64,
    "section": "Section 15: Developer Tools & Diagnostics",
    "subsection": "Tooling & Quality Assurance",
    "title": "The Benchmark Standard Library",
    "category": "Developer Tools",
    "readTime": "4 min read",
    "summary": "Generate execution reports, measure iterations, and track performance with 'load Benchmark'.",
    "body": "\n      <h2>The Benchmark Standard Library</h2>\n      <p>Precision timing, performance profiling, and iteration reports.</p>\n      \n      <h2>Loading the Module</h2>\n      <p>Import into any file with standard <code>load</code> directive:</p>\n      <pre><code>load Benchmark</code></pre>\n      <p>All routines are available under the <code>Benchmark</code> namespace.</p>\n\n      <h2>Complete Function Catalog Table</h2>\n      <table class=\"doc-table\">\n        <thead>\n          <tr>\n            <th>Function Signature</th>\n            <th>Parameters</th>\n            <th>Return Type</th>\n            <th>Description</th>\n            <th>Example Call</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr><td><code>Benchmark.run(fn, iters)</code></td><td><code>routine, num</code></td><td><code>num</code></td><td>Executes routine iters times and returns elapsed ms.</td><td><code>Benchmark.run(task, 1000)</code></td></tr>\n          <tr><td><code>Benchmark.measure(fn)</code></td><td><code>routine</code></td><td><code>num</code></td><td>Measures execution time of a single routine invocation.</td><td><code>Benchmark.measure(expensiveOp)</code></td></tr>\n          <tr><td><code>Benchmark.report(name, iters, ms)</code></td><td><code>str, num, num</code></td><td><code>void</code></td><td>Prints formatted performance throughput summary.</td><td><code>Benchmark.report(\"Sort\", 1000, 12.5)</code></td></tr>\n        </tbody>\n      </table>\n",
    "codeBlocks": [
      {
        "id": "cb_ch64_1",
        "title": "benchmark_demo.vrs",
        "code": "load Benchmark\n\nBenchmark.report(\"Array Push Loop\", 1000, 15)\ndisplay \"Benchmark report generated\" ?color=green"
      }
    ],
    "exercises": [
      {
        "id": "ex_ch64_1",
        "title": "Challenge 64: Simple Benchmark",
        "prompt": "Load <code>Benchmark</code> and generate a report with <code>Benchmark.report('Task', 100, 5)</code>.",
        "starterCode": "! Generate benchmark report\n",
        "hint": "load Benchmark\nBenchmark.report('Task', 100, 5)",
        "solution": "load Benchmark\nBenchmark.report('Task', 100, 5)",
        "expectedMatch": {}
      }
    ]
  },
  {
    "id": "ch65-mock-lib",
    "number": 65,
    "section": "Section 15: Developer Tools & Diagnostics",
    "subsection": "Tooling & Quality Assurance",
    "title": "The Mock Standard Library",
    "category": "Developer Tools",
    "readTime": "3 min read",
    "summary": "Mock return values, create test spies, and stub dependencies with 'load Mock'.",
    "body": "\n      <h2>The Mock Standard Library</h2>\n      <p>Unit test test doubles, return value stubs, and call counter spies.</p>\n      \n      <h2>Loading the Module</h2>\n      <p>Import into any file with standard <code>load</code> directive:</p>\n      <pre><code>load Mock</code></pre>\n      <p>All routines are available under the <code>Mock</code> namespace.</p>\n\n      <h2>Complete Function Catalog Table</h2>\n      <table class=\"doc-table\">\n        <thead>\n          <tr>\n            <th>Function Signature</th>\n            <th>Parameters</th>\n            <th>Return Type</th>\n            <th>Description</th>\n            <th>Example Call</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr><td><code>Mock.stub(returnValue)</code></td><td><code>any</code></td><td><code>entity</code></td><td>Creates a mock entity that returns fixed returnValue.</td><td><code>Mock.stub(42)</code></td></tr>\n          <tr><td><code>Mock.spy(name, callsCount)</code></td><td><code>str, num</code></td><td><code>entity</code></td><td>Creates a spy recording routine invocation counts.</td><td><code>Mock.spy(\"sendEmail\", 0)</code></td></tr>\n          <tr><td><code>Mock.reset()</code></td><td><code>void</code></td><td><code>void</code></td><td>Resets all active mocks and call counters.</td><td><code>Mock.reset()</code></td></tr>\n        </tbody>\n      </table>\n",
    "codeBlocks": [
      {
        "id": "cb_ch65_1",
        "title": "mock_demo.vrs",
        "code": "load Mock\n\nset stubVal: Mock.stub(\"mock_reply\")\nset s: Mock.spy(\"mailer\", 3)\n\ndisplay \"Stub value: \" + stubVal ?color=green\ndisplay \"Spy call tracker created\" ?color=cyan"
      }
    ],
    "exercises": [
      {
        "id": "ex_ch65_1",
        "title": "Challenge 65: Mock Stub",
        "prompt": "Load <code>Mock</code>, create a stub with <code>Mock.stub(42)</code>, and display the stub value.",
        "starterCode": "! Create stub\n",
        "hint": "load Mock\nset s: Mock.stub(42)\ndisplay s",
        "solution": "load Mock\nset s: Mock.stub(42)\ndisplay s",
        "expectedMatch": {}
      }
    ]
  },
  {
    "id": "ch66-assert-lib",
    "number": 66,
    "section": "Section 15: Developer Tools & Diagnostics",
    "subsection": "Tooling & Quality Assurance",
    "title": "The Assert Standard Library",
    "category": "Developer Tools",
    "readTime": "3 min read",
    "summary": "Strict test assertions: equal, notEqual, isTrue, isFalse, and tolerance checks with 'load Assert'.",
    "body": "\n      <h2>The Assert Standard Library</h2>\n      <p>Industrial-grade unit test assertions throwing AssertError on failure.</p>\n      \n      <h2>Loading the Module</h2>\n      <p>Import into any file with standard <code>load</code> directive:</p>\n      <pre><code>load Assert</code></pre>\n      <p>All routines are available under the <code>Assert</code> namespace.</p>\n\n      <h2>Complete Function Catalog Table</h2>\n      <table class=\"doc-table\">\n        <thead>\n          <tr>\n            <th>Function Signature</th>\n            <th>Parameters</th>\n            <th>Return Type</th>\n            <th>Description</th>\n            <th>Example Call</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr><td><code>Assert.equal(act, exp, msg)</code></td><td><code>any, any, str</code></td><td><code>void</code></td><td>Asserts that actual equals expected (throws AssertError).</td><td><code>Assert.equal(2+2, 4, \"math check\")</code></td></tr>\n          <tr><td><code>Assert.notEqual(act, exp, msg)</code></td><td><code>any, any, str</code></td><td><code>void</code></td><td>Asserts that actual does not equal expected.</td><td><code>Assert.notEqual(1, 2, \"inequality check\")</code></td></tr>\n          <tr><td><code>Assert.isTrue(cond, msg)</code></td><td><code>bool, str</code></td><td><code>void</code></td><td>Asserts that condition evaluates strictly to true.</td><td><code>Assert.isTrue(x > 0, \"positive check\")</code></td></tr>\n          <tr><td><code>Assert.isFalse(cond, msg)</code></td><td><code>bool, str</code></td><td><code>void</code></td><td>Asserts that condition evaluates strictly to false.</td><td><code>Assert.isFalse(x < 0, \"non-negative check\")</code></td></tr>\n        </tbody>\n      </table>\n",
    "codeBlocks": [
      {
        "id": "cb_ch66_1",
        "title": "assert_demo.vrs",
        "code": "load Assert\n\nAssert.isTrue(10 > 5, \"10 must be greater than 5\")\nAssert.equal(2 + 2, 4, \"Arithmetic check\")\n\ndisplay \"All assertions passed successfully!\" ?color=green"
      }
    ],
    "exercises": [
      {
        "id": "ex_ch66_1",
        "title": "Challenge 66: Assert Equal",
        "prompt": "Load <code>Assert</code>, assert that <code>5 * 5 == 25</code>, and display 'Passed'.",
        "starterCode": "! Assert equality\n",
        "hint": "load Assert\nAssert.equal(5 * 5, 25, 'Math valid')\ndisplay 'Passed'",
        "solution": "load Assert\nAssert.equal(5 * 5, 25, 'Math valid')\ndisplay 'Passed'",
        "expectedMatch": {}
      }
    ]
  },
  {
    "id": "ch67-capstone-telemetry",
    "number": 67,
    "section": "Section 16: Grandmaster Systems Capstones",
    "subsection": "Integrated Real-World Systems",
    "title": "Capstone I: Telemetry Engine & Watchdog Supervisor",
    "category": "Capstones",
    "readTime": "8 min read",
    "summary": "Build an industrial telemetry ingest engine combining channels, custom types, and logging supervisors.",
    "body": "\n      <h2>The Mission: Resilient IoT Telemetry</h2>\n      <p>In this capstone, you construct a production-grade telemetry pipeline. Sensors stream metrics into an asynchronous queue, validation filters bad packets, and a supervisor catches anomalies!</p>\n    ",
    "codeBlocks": [
      {
        "id": "cb_ch67_1",
        "title": "telemetry_engine.vrs",
        "code": "load Log\n\nchan metricQueue\nsend metricQueue \"PACKET_101: 42C\"\nsend metricQueue \"PACKET_102: 88C\"\n\nLog.info(\"Received metric: \" + (recv metricQueue))\nLog.warn(\"Overheating detected: \" + (recv metricQueue))"
      }
    ],
    "exercises": [
      {
        "id": "ex_ch67_1",
        "title": "Capstone I Challenge: Packet Processor",
        "prompt": "Create <code>chan q</code>, send <code>'METRIC_OK'</code> into <code>q</code>, receive it, and display the packet with color green.",
        "starterCode": "! Build channel queue and receive packet\n",
        "hint": "chan q\nsend q 'METRIC_OK'\nset msg: recv q\ndisplay msg ?color=green",
        "solution": "chan q\nsend q 'METRIC_OK'\nset msg: recv q\ndisplay msg ?color=green",
        "expectedMatch": {}
      }
    ]
  },
  {
    "id": "ch68-capstone-physics",
    "number": 68,
    "section": "Section 16: Grandmaster Systems Capstones",
    "subsection": "Integrated Real-World Systems",
    "title": "Capstone II: Physics Kernel & Symbolic Matrix Pipelines",
    "category": "Capstones",
    "readTime": "8 min read",
    "summary": "Engineer a high-speed physics simulation kernel using native nD vectors, symbolic transformations (mat * vec), and event triggers.",
    "body": "\n      <h2>The Mission: 2D/3D Kinematics Kernel</h2>\n      <p>Simulating movement in space requires continuous vector updates: acceleration modifies velocity, and velocity updates position. In this capstone, you will use VerScript's native symbolic matrix-vector operations to build a kinematics engine!</p>\n\n      <h2>Symbolic Linear Pipeline</h2>\n      <p>Instead of manually updating coordinates, you transform entities using direct arithmetic:</p>\n      <pre><code>set nextPos: position + (velocity * dt)\nset transformed: rotationMatrix * nextPos</code></pre>\n    ",
    "codeBlocks": [
      {
        "id": "cb_ch68_1",
        "title": "physics_kernel.vrs",
        "code": "load Matrix\nload Vector\n\n! 2D Rotation Matrix (90 degrees counterclockwise)\nset Rot90: [[0, -1], [1, 0]]\n\n! Particle state: Position and Velocity vectors\nset pos: [10, 0]\nset vel: [0, 5]\n\n! Apply 1 tick of kinematics: pos + vel\nset updatedPos: pos + vel\n\n! Rotate particle direction\nset rotated: Rot90 * updatedPos\n\ndisplay \"Updated Position: \" + updatedPos ?color=cyan\ndisplay \"Rotated State: \" + rotated ?color=green"
      }
    ],
    "exercises": [
      {
        "id": "ex_ch68_1",
        "title": "Capstone II Challenge: Vector Translation",
        "prompt": "Declare vectors <code>pos: [5, 10]</code> and <code>delta: [2, 3]</code>. Translate position by adding them <code>pos + delta</code> and display the result.",
        "starterCode": "! Compute pos + delta\n",
        "hint": "set pos: [5, 10]\nset delta: [2, 3]\ndisplay pos + delta",
        "solution": "set pos: [5, 10]\nset delta: [2, 3]\ndisplay pos + delta",
        "expectedMatch": {}
      }
    ]
  },
  {
    "id": "ch69-master-cheatsheet",
    "number": 69,
    "section": "Section 17: Complete Reference",
    "subsection": "Language Reference",
    "title": "Master Language Specification & Complete Directory",
    "category": "Reference",
    "readTime": "10 min read",
    "summary": "The definitive reference manual: complete syntax grammar, operator precedence, all 29 error types, 21 stdlib modules, and compiler directives in full directory table form.",
    "body": "\n      <h2>Master Language Specification & Exhaustive Directory</h2>\n      <p>This master specification unifies the entire VerScript language design into comprehensive reference directory tables.</p>\n\n      <h2>Directory 1: Complete Keyword Directory</h2>\n      <table class=\"doc-table\">\n        <thead>\n          <tr><th>Keyword</th><th>Category</th><th>Description</th></tr>\n        </thead>\n        <tbody>\n          <tr><td><code>display</code></td><td>I/O Statement</td><td>Prints formatted text, expressions, or data structures with ANSI styling.</td></tr>\n          <tr><td><code>prompt</code></td><td>I/O Statement</td><td>Reads interactive user input or falls back to <code>?default</code>.</td></tr>\n          <tr><td><code>set</code></td><td>Assignment</td><td>Declares and assigns standard variables.</td></tr>\n          <tr><td><code>temp</code></td><td>Storage Lifetime</td><td>Declares temporary variable destroyed upon routine or block exit.</td></tr>\n          <tr><td><code>inst</code></td><td>Storage Lifetime</td><td>Declares invocation-scoped variable bound to current stack frame.</td></tr>\n          <tr><td><code>del</code></td><td>Memory Statement</td><td>Explicitly deletes and deallocates a declared variable.</td></tr>\n          <tr><td><code>outscope</code></td><td>Scope Directive</td><td>Hoists variable assignment to parent enclosing scope.</td></tr>\n          <tr><td><code>if</code>, <code>then</code>, <code>else</code></td><td>Conditional</td><td>Standard branching and inline ternary expression syntax.</td></tr>\n          <tr><td><code>guard</code></td><td>Assertion</td><td>Enforces invariant: <code>guard cond else reply/throw</code>.</td></tr>\n          <tr><td><code>loop</code></td><td>Counted Loop</td><td>Executes block N times: <code>loop N:</code>.</td></tr>\n          <tr><td><code>iterate</code>, <code>from</code>, <code>to</code>, <code>by</code></td><td>Ranged Loop</td><td>Range iteration: <code>iterate i from 1 to 10 by 2:</code>.</td></tr>\n          <tr><td><code>while</code>, <code>until</code></td><td>Condition Loops</td><td>Repeats while condition is true, or until condition becomes true.</td></tr>\n          <tr><td><code>def</code>, <code>func</code>, <code>method</code></td><td>Routines</td><td>Declares callable routines, pure functions, and mutating methods.</td></tr>\n          <tr><td><code>inbound</code>, <code>outbound</code></td><td>Purity Specifier</td><td>Declares explicit data-flow and mutation constraints on routines.</td></tr>\n          <tr><td><code>reply</code></td><td>Routine Control</td><td>Returns computed values from functions and methods.</td></tr>\n          <tr><td><code>header</code>, <code>include</code>, <code>export</code></td><td>Architecture</td><td>Header contract definitions (<code>.h.vrs</code>), imports, and symbol exports.</td></tr>\n          <tr><td><code>pragma</code></td><td>Compiler Control</td><td>Directives: <code>pragma once</code>, <code>pragma strict</code>.</td></tr>\n          <tr><td><code>config:</code></td><td>Configuration</td><td>Header compilation block: <code>strict_mode</code>, <code>error_mode</code>, <code>timeout_ms</code>, <code>target_version</code>, <code>log_level</code>.</td></tr>\n          <tr><td><code>enum</code>, <code>struct</code></td><td>Type Definition</td><td>First-class named enumerations and typed data structures.</td></tr>\n          <tr><td><code>class</code>, <code>entity</code></td><td>Object-Oriented</td><td>OOP class definitions and dynamic entity instance creation.</td></tr>\n          <tr><td><code>DataType</code>, <code>extends</code>, <code>it</code></td><td>Type Constraint</td><td>Custom data type definitions with predicate verification using <code>it</code>.</td></tr>\n          <tr><td><code>throw</code></td><td>Error Handling</td><td>Throws runtime error: <code>throw ErrorType \"message\"</code>.</td></tr>\n          <tr><td><code>load</code>, <code>lib</code>, <code>library</code></td><td>Libraries</td><td>Loads standard modules and declares library packages.</td></tr>\n          <tr><td><code>from</code>, <code>import</code>, <code>as</code></td><td>Imports</td><td>Module and sub-library imports: <code>from Lib import Sub as Alias</code>.</td></tr>\n          <tr><td><code>alias</code></td><td>Syntax Aliasing</td><td>Aliases commands or functions to custom keywords.</td></tr>\n          <tr><td><code>inject</code></td><td>Polyglot</td><td>Injects external script execution.</td></tr>\n          <tr><td><code>match</code>, <code>with</code>, <code>case</code></td><td>Pattern Matching</td><td>Structural pattern matching across values and variants.</td></tr>\n          <tr><td><code>async</code>, <code>sync</code></td><td>Asynchronous</td><td>Declares asynchronous routine and awaits async handle value.</td></tr>\n          <tr><td><code>chan</code>, <code>send</code>, <code>recv</code></td><td>Concurrency</td><td>Thread-safe ring-buffer communication channels.</td></tr>\n          <tr><td><code>on</code>, <code>when</code>, <code>emit</code></td><td>Reactive Events</td><td>Event bus subscription and dispatch architecture.</td></tr>\n          <tr><td><code>typeof</code></td><td>Introspection</td><td>Returns type name string (<code>\"num\"</code>, <code>\"str\"</code>, <code>\"bool\"</code>, etc.).</td></tr>\n          <tr><td><code>is</code>, <code>even</code>, <code>odd</code></td><td>Parity Predicate</td><td>Tests numeric parity: <code>x is even</code>, <code>x is odd</code>.</td></tr>\n          <tr><td><code>sqrt</code>, <code>rt</code>, <code>clamp</code>, <code>divRem</code></td><td>Math Built-ins</td><td>Square root, n-th root, interval clamping, quotient & remainder.</td></tr>\n          <tr><td><code>sign</code>, <code>sgn</code>, <code>lerp</code></td><td>Math Built-ins</td><td>Signum function, linear interpolation between endpoints.</td></tr>\n          <tr><td><code>gcd</code>, <code>hcf</code>, <code>lcm</code></td><td>Math Built-ins</td><td>Greatest common divisor and least common multiple.</td></tr>\n          <tr><td><code>sin</code>, <code>cos</code>, <code>tan</code>, <code>hypot</code></td><td>Trigonometry</td><td>Standard trigonometric and Euclidean distance functions.</td></tr>\n          <tr><td><code>sinDeg</code>, <code>cosDeg</code></td><td>Degree Trig</td><td>Degree-based trigonometry.</td></tr>\n          <tr><td><code>degToRad</code>, <code>radToDeg</code></td><td>Angle Conversion</td><td>Degrees to radians and radians to degrees.</td></tr>\n          <tr><td><code>ln</code>, <code>log</code>, <code>log2</code>, <code>exp</code></td><td>Logarithms & Exp</td><td>Natural log, base-N log, base-2 log, and natural exponentiation.</td></tr>\n          <tr><td><code>pi</code>, <code>tau</code>, <code>phi</code>, <code>inf</code></td><td>Math Constants</td><td>Mathematical constants: 3, 6, 16180, 2147483647.</td></tr>\n        </tbody>\n      </table>\n\n      <h2>Directory 2: Operators & Precedence</h2>\n      <table class=\"doc-table\">\n        <thead>\n          <tr><th>Precedence</th><th>Operator</th><th>Name / Syntax</th><th>Associativity</th><th>Description</th></tr>\n        </thead>\n        <tbody>\n          <tr><td>1 (Highest)</td><td><code>()</code>, <code>[]</code>, <code>.</code></td><td>Grouping, Indexing, Member Access</td><td>Left-to-Right</td><td>Parentheses, array subscripting, and dot method invocation.</td></tr>\n          <tr><td>2</td><td><code>?</code></td><td>Attribute Operator</td><td>Left-to-Right</td><td>Attaches metadata attributes to functions, methods, display, and prompt.</td></tr>\n          <tr><td>3</td><td><code>!</code>, <code>not</code>, <code>-</code> (unary)</td><td>Logical NOT, Negation</td><td>Right-to-Left</td><td>Inverts boolean truth or negates numeric value.</td></tr>\n          <tr><td>4</td><td><code>^</code></td><td>Exponentiation</td><td>Right-to-Left</td><td>Raises base to power: <code>2 ^ 8 = 256</code>.</td></tr>\n          <tr><td>5</td><td><code>*</code>, <code>/</code>, <code>//</code>, <code>%</code></td><td>Multiplication, Division, Modulo</td><td>Left-to-Right</td><td>High-speed native integer arithmetic.</td></tr>\n          <tr><td>6</td><td><code>+</code>, <code>-</code></td><td>Addition, Subtraction</td><td>Left-to-Right</td><td>Addition / string concatenation and subtraction.</td></tr>\n          <tr><td>7</td><td><code>==</code>, <code>!=</code>, <code>&lt;</code>, <code>&lt;=</code>, <code>&gt;</code>, <code>&gt;=</code></td><td>Relational Comparisons</td><td>Left-to-Right</td><td>Equality and ordering comparisons.</td></tr>\n          <tr><td>8</td><td><code>is even</code>, <code>is odd</code></td><td>Parity Predicates</td><td>Left-to-Right</td><td>Tests integer parity.</td></tr>\n          <tr><td>9</td><td><code>&amp;</code></td><td>Logical AND</td><td>Left-to-Right</td><td>True if both operands are true.</td></tr>\n          <tr><td>10</td><td><code>and</code> / <code>nand</code></td><td>Negated AND (NAND)</td><td>Left-to-Right</td><td>True unless both operands are true.</td></tr>\n          <tr><td>11</td><td><code>or</code></td><td>Logical OR</td><td>Left-to-Right</td><td>True if either operand is true.</td></tr>\n          <tr><td>12</td><td><code>nor</code></td><td>Negated OR (NOR)</td><td>Left-to-Right</td><td>True only if both operands are false.</td></tr>\n          <tr><td>13</td><td><code>xor</code></td><td>Exclusive OR (XOR)</td><td>Left-to-Right</td><td>True if exactly one operand is true.</td></tr>\n          <tr><td>14</td><td><code>xnor</code> / <code>xand</code></td><td>Equivalence (XNOR)</td><td>Left-to-Right</td><td>True if operands have identical truth values.</td></tr>\n          <tr><td>15</td><td><code>|&gt;</code></td><td>Forward Pipeline</td><td>Left-to-Right</td><td>Pipes expression into function/method argument.</td></tr>\n          <tr><td>16 (Lowest)</td><td><code>if ... then ... else</code></td><td>Inline Ternary Expression</td><td>Right-to-Left</td><td>Conditional value selection.</td></tr>\n        </tbody>\n      </table>\n\n      <h2>Directory 3: All 29 Runtime & Compiler Error Types</h2>\n      <table class=\"doc-table\">\n        <thead>\n          <tr><th>Error Name</th><th>Severity (1-10)</th><th>Category</th><th>Root Cause</th></tr>\n        </thead>\n        <tbody>\n          <tr><td><code>HeaderMismatchError</code></td><td>10</td><td>Contract</td><td>Mismatch in parameter count, type, or kind between header declaration and implementation.</td></tr>\n          <tr><td><code>InvalidHeaderError</code></td><td>9</td><td>Architecture</td><td>Malformed header declaration, illegal statement inside header, or missing companion header.</td></tr>\n          <tr><td><code>MemoryAllocationError</code></td><td>10</td><td>System</td><td>Native memory allocation via malloc/realloc failed on host OS.</td></tr>\n          <tr><td><code>SystemError</code></td><td>9</td><td>System</td><td>Maximum recursion depth, routine registry, or call stack limits exceeded.</td></tr>\n          <tr><td><code>RuntimeError</code></td><td>8</td><td>Runtime</td><td>General execution error or unhandled fault condition.</td></tr>\n          <tr><td><code>SyntaxError</code></td><td>9</td><td>Compiler</td><td>Invalid token, unclosed parenthesis, or malformed statement grammar.</td></tr>\n          <tr><td><code>IndentationError</code></td><td>8</td><td>Compiler</td><td>Inconsistent indentation levels across block hierarchy.</td></tr>\n          <tr><td><code>DataTypeError</code></td><td>8</td><td>Type System</td><td>Type constraint violated for num, str, bool, arr, entity, posNum, byte, port, char, etc.</td></tr>\n          <tr><td><code>UndefinedVariableError</code></td><td>8</td><td>Scope</td><td>Attempted access of variable not declared in current or parent scopes.</td></tr>\n          <tr><td><code>UnassignedVariableError</code></td><td>7</td><td>Scope</td><td>Variable referenced before initialization.</td></tr>\n          <tr><td><code>ScopeViolationError</code></td><td>8</td><td>Scope</td><td>Direct access of private, entity-encapsulated, or out-of-scope symbol.</td></tr>\n          <tr><td><code>VisibilityError</code></td><td>8</td><td>Security</td><td>Calling a private routine outside its containing entity or library.</td></tr>\n          <tr><td><code>DivisionByZeroError</code></td><td>8</td><td>Math</td><td>Division, modulo, or divRem with zero divisor.</td></tr>\n          <tr><td><code>DomainError</code></td><td>7</td><td>Math</td><td>Mathematical argument outside valid domain (e.g. log of negative number).</td></tr>\n          <tr><td><code>IndexOutOfBoundsError</code></td><td>8</td><td>Collection</td><td>Array index is negative or &gt;= array length.</td></tr>\n          <tr><td><code>ImmutableError</code></td><td>8</td><td>Mutability</td><td>Attempted modification of a symbol declared with <code>const</code>.</td></tr>\n          <tr><td><code>FileError</code></td><td>8</td><td>I/O</td><td>File not found, permission denied, or disk write failure.</td></tr>\n          <tr><td><code>ChannelError</code></td><td>8</td><td>Concurrency</td><td>Channel full on send, or channel empty on recv.</td></tr>\n          <tr><td><code>AsyncError</code></td><td>7</td><td>Async</td><td>Failure inside asynchronous task or unresolved promise.</td></tr>\n          <tr><td><code>MatchError</code></td><td>7</td><td>Flow</td><td>Pattern match evaluation found no matching branch and no default.</td></tr>\n          <tr><td><code>EntityError</code></td><td>8</td><td>OOP</td><td>Attempted method call or field access on invalid entity reference.</td></tr>\n          <tr><td><code>LoopLimitError</code></td><td>7</td><td>Loop</td><td>Loop iteration count exceeded compiler-configured maximum limit.</td></tr>\n          <tr><td><code>LoopDirectionError</code></td><td>7</td><td>Loop</td><td>Iterate loop range step direction contradicts start and end boundaries.</td></tr>\n          <tr><td><code>LoopStepError</code></td><td>7</td><td>Loop</td><td>Loop step increment is zero or invalid.</td></tr>\n          <tr><td><code>LoopIterationError</code></td><td>7</td><td>Loop</td><td>Corrupted loop counter state during iteration.</td></tr>\n          <tr><td><code>InvalidOperandError</code></td><td>7</td><td>Type System</td><td>Operator applied to incompatible data types.</td></tr>\n          <tr><td><code>InvalidErrorNameError</code></td><td>8</td><td>Error System</td><td>Throwing an unregistered or unknown error name.</td></tr>\n          <tr><td><code>AssertError</code></td><td>7</td><td>Testing</td><td>Assertion expression evaluated to false.</td></tr>\n          <tr><td><code>AssertionError</code></td><td>7</td><td>Testing</td><td>Alias for AssertError thrown by testing framework.</td></tr>\n        </tbody>\n      </table>\n\n      <h2>Directory 4: All 21 Standard Libraries</h2>\n      <table class=\"doc-table\">\n        <thead>\n          <tr><th>Library Name</th><th>Function Count</th><th>Domain</th><th>Key Capabilities</th></tr>\n        </thead>\n        <tbody>\n          <tr><td><code>Math</code></td><td>17</td><td>Numeric &amp; Trig</td><td>Trigonometry, logarithms, clamping, round, floor, ceil, power, lerp.</td></tr>\n          <tr><td><code>Matrix</code></td><td>12</td><td>Linear Algebra</td><td>Arbitrary dimensions, determinant, inverse, transpose, dot product, trace.</td></tr>\n          <tr><td><code>Vector</code></td><td>11</td><td>Spatial Vector</td><td>Dot, cross, norm, angle, projection, unit vector, distance, lerp.</td></tr>\n          <tr><td><code>Stats</code></td><td>12</td><td>Statistics</td><td>Mean, median, mode, variance, standard deviation, percentile, correlation.</td></tr>\n          <tr><td><code>Pseudo</code></td><td>10</td><td>Random &amp; Mock</td><td>PRNG seed, range sampling, uuid, shuffle, choice, boolean generation.</td></tr>\n          <tr><td><code>Arrays</code></td><td>14</td><td>Collections</td><td>Chunking, flattening, deduplication, sorting, filtering, zip, intersection.</td></tr>\n          <tr><td><code>Strings</code></td><td>15</td><td>Text Processing</td><td>Padding, case transformation, slicing, regex splitting, trimming.</td></tr>\n          <tr><td><code>Json</code></td><td>8</td><td>Serialization</td><td>Parsing JSON strings into entities/arrays and stringifying structures.</td></tr>\n          <tr><td><code>Validate</code></td><td>11</td><td>Validation</td><td>Email, URL, IP, UUID, alphanumeric, and schema verification.</td></tr>\n          <tr><td><code>Crypto</code></td><td>9</td><td>Cryptography</td><td>SHA-256, HMAC, MD5, base64 encoding/decoding, secure tokens.</td></tr>\n          <tr><td><code>Regex</code></td><td>8</td><td>Pattern Matching</td><td>Regular expression testing, extraction, replacement, and splitting.</td></tr>\n          <tr><td><code>Fs</code></td><td>12</td><td>File System</td><td>File read, write, append, delete, directory listing, file stats.</td></tr>\n          <tr><td><code>Path</code></td><td>10</td><td>File Paths</td><td>Join, resolve, basename, dirname, extname, path normalization.</td></tr>\n          <tr><td><code>Env</code></td><td>6</td><td>Environment</td><td>Reading/writing system environment variables, platform detection.</td></tr>\n          <tr><td><code>Time</code></td><td>10</td><td>Clock &amp; Timing</td><td>Epoch timestamps, formatting, monotonic timers, delays, intervals.</td></tr>\n          <tr><td><code>Http</code></td><td>8</td><td>Networking</td><td>HTTP GET, POST, PUT, DELETE with headers, query parameters, bodies.</td></tr>\n          <tr><td><code>Log</code></td><td>8</td><td>Diagnostics</td><td>Structured logging with levels (DEBUG, INFO, WARN, ERROR) and timestamps.</td></tr>\n          <tr><td><code>Color</code></td><td>8</td><td>Terminal Color</td><td>ANSI color escape sequences (RGB, hex, 16-color, bold, underline).</td></tr>\n          <tr><td><code>Console</code></td><td>8</td><td>Terminal I/O</td><td>Interactive tables, progress bars, spinners, clear screen, prompts.</td></tr>\n          <tr><td><code>Benchmark</code></td><td>6</td><td>Performance</td><td>High-precision nanosecond execution timing and throughput profiling.</td></tr>\n          <tr><td><code>Mock</code> / <code>Assert</code></td><td>12</td><td>Test Automation</td><td>Spies, stubs, mock responses, equality assertions, exception testing.</td></tr>\n        </tbody>\n      </table>\n\n      <h2>Directory 5: Pragmas, Compiler Directives & Attributes</h2>\n      <table class=\"doc-table\">\n        <thead>\n          <tr><th>Directive / Attribute</th><th>Syntax Example</th><th>Target Context</th><th>Effect</th></tr>\n        </thead>\n        <tbody>\n          <tr><td><code>?</code> Attribute Operator</td><td><code>func f() ?pure=true ?memoize=true</code></td><td>Routines &amp; Statements</td><td>Attaches optional execution metadata (purity, memoization, timeout, retry, color).</td></tr>\n          <tr><td><code>pragma once</code></td><td><code>pragma once</code></td><td>Headers &amp; Files</td><td>Ensures file is parsed and included at most once per compilation unit.</td></tr>\n          <tr><td><code>pragma strict</code></td><td><code>pragma strict</code></td><td>Headers &amp; Files</td><td>Enforces strict contract mode: all symbols and types must have explicit contracts.</td></tr>\n          <tr><td><code>export</code></td><td><code>export func add(a, b)</code></td><td>Declarations</td><td>Marks routines, structs, or types as public exported symbols.</td></tr>\n          <tr><td><code>config:</code></td><td><code>config:\n    strict_mode: true</code></td><td>Headers (<code>.h.vrs</code>)</td><td>Configures compilation directives: strict_mode, error_mode, timeout_ms, target_version, log_level.</td></tr>\n        </tbody>\n      </table>\n  ",
    "codeBlocks": [
      {
        "id": "cb_ch69_1",
        "title": "master_reference_demo.vrs",
        "code": "load Math\nload Matrix\nload Vector\n\n! 1. Vector and Matrix Symbolic Arithmetic\nset v1: [3, 4]\nset v2: [1, 2]\nset vSum: v1 + v2\nset Rot: [[0, -1], [1, 0]]\nset vRot: Rot * v1\n\n! 2. Scientific Math\nset dist: Math.sqrt(v1[0]^2 + v1[1]^2)\n\ndisplay \"Vector Sum: \" + vSum ?color=green\ndisplay \"Rotated Vector: \" + vRot ?color=cyan\ndisplay \"Magnitude: \" + dist ?color=yellow"
      }
    ],
    "exercises": [
      {
        "id": "ex_ch69_1",
        "title": "Master Reference Certification",
        "prompt": "Display <code>\"VerScript Master Certification Complete\"</code> with color <code>green</code>.",
        "starterCode": "! Display certification\n",
        "hint": "display \"VerScript Master Certification Complete\" ?color=green",
        "solution": "display \"VerScript Master Certification Complete\" ?color=green",
        "expectedMatch": {}
      }
    ]
  }
];
var articlesData = ARTICLES;

if (typeof window !== 'undefined') {
  window.ARTICLES = ARTICLES;
  window.articlesData = ARTICLES;
}

if (typeof global !== 'undefined') {
  global.ARTICLES = ARTICLES;
  global.articlesData = ARTICLES;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = ARTICLES;
}
