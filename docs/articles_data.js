// VerScript Academy Official Curriculum: 69 Distinct, Focused Chapters
// Generated automatically with complete Section -> Subsection -> Chapter taxonomy

const articlesData = [
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
    "body": "\n      <h2>Talking to Your Users</h2>\n      <p>Programs become magical when they respond to what people type. The <code>prompt</code> command pauses the program, shows a friendly question, and saves whatever the user types into a variable.</p>\n\n      <h2>Safe Fallback Defaults</h2>\n      <p>What if the user just presses Enter without typing anything? You can provide a safe default with <code>?default=\"Guest\"</code>!</p>\n    ",
    "codeBlocks": [
      {
        "id": "cb_ch4_1",
        "title": "input.vrs",
        "code": "prompt username ?default=\"Explorer\"\ndisplay \"Welcome back, \" + username ?color=cyan"
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
    "title": "Powers, Roots & Clamping",
    "category": "Datatypes",
    "readTime": "4 min read",
    "summary": "Easily calculate powers (^), absolute magnitudes (|x|), factorials (!), square roots (sqrt), and keep numbers within safe bounds (clamp).",
    "body": "\n      <h2>Taking Math Further</h2>\n      <p>Sometimes you need more than just plus and minus: calculating exponential growth, checking how far a number is from zero, or preventing a player's health from going above 100.</p>\n\n      <h2>Helpful Mathematical Tools</h2>\n      <table class=\"doc-table\">\n        <thead>\n          <tr><th>Feature</th><th>Syntax</th><th>Example</th><th>Result</th><th>Description</th></tr>\n        </thead>\n        <tbody>\n          <tr><td><strong>Power</strong></td><td><code>^</code></td><td><code>2 ^ 4</code></td><td><code>16</code></td><td>Multiplies 2 by itself 4 times.</td></tr>\n          <tr><td><strong>Absolute Value</strong></td><td><code>|x|</code></td><td><code>|-25|</code></td><td><code>25</code></td><td>Distance from zero (always positive).</td></tr>\n          <tr><td><strong>Factorial</strong></td><td><code>n!</code></td><td><code>4!</code></td><td><code>24</code></td><td>4 * 3 * 2 * 1. (Must touch number!)</td></tr>\n          <tr><td><strong>Square Root</strong></td><td><code>sqrt n</code></td><td><code>sqrt 81</code></td><td><code>9</code></td><td>Number that multiplied by itself makes n.</td></tr>\n          <tr><td><strong>Clamping</strong></td><td><code>clamp val low high</code></td><td><code>clamp 120 0 100</code></td><td><code>100</code></td><td>Forces value to stay between min and max.</td></tr>\n          <tr><td><strong>Even / Odd</strong></td><td><code>n is even</code></td><td><code>8 is even</code></td><td><code>true</code></td><td>Checks whether number is divisible by 2.</td></tr>\n        </tbody>\n      </table>\n    ",
    "codeBlocks": [
      {
        "id": "cb_ch6_1",
        "title": "powers_and_bounds.vrs",
        "code": "set baseDamage: 5\nset critMultiplier: 2 ^ 3\nset rawTotal: baseDamage * critMultiplier\ndisplay \"Critical Hit: \" + rawTotal ?color=yellow\n\n! Ensure health stays between 0 and 100\nset currentHp: clamp 150 from 0 to 100\ndisplay \"Clamped HP: \" + currentHp ?color=green"
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
    "title": "Logic Gates: AND, OR, NOT",
    "category": "Datatypes",
    "readTime": "4 min read",
    "summary": "Combine multiple conditions effortlessly using native logic gates (&, and, or, nor, xor, not).",
    "body": "\n      <h2>Combining Conditions</h2>\n      <p>In the real world, decisions often rely on multiple facts: <em>\"If you have a boarding pass <strong>AND</strong> your passport is valid, you may board the plane.\"</em></p>\n\n      <h2>Native Logic Operators</h2>\n      <table class=\"doc-table\">\n        <thead>\n          <tr><th>Operator</th><th>Name</th><th>How It Works</th><th>Example</th><th>Result</th></tr>\n        </thead>\n        <tbody>\n          <tr><td><code>&amp;</code></td><td>AND</td><td>True only if <strong>both</strong> sides are true.</td><td><code>true &amp; false</code></td><td><code>false</code></td></tr>\n          <tr><td><code>or</code></td><td>OR</td><td>True if <strong>at least one</strong> side is true.</td><td><code>true or false</code></td><td><code>true</code></td></tr>\n          <tr><td><code>not</code></td><td>NOT</td><td>Flips true to false, and false to true.</td><td><code>not false</code></td><td><code>true</code></td></tr>\n          <tr><td><code>xor</code></td><td>XOR</td><td>True if <strong>exactly one</strong> side is true (exclusive).</td><td><code>true xor true</code></td><td><code>false</code></td></tr>\n          <tr><td><code>and</code></td><td>NAND</td><td>Negated AND (true unless both are true).</td><td><code>true and true</code></td><td><code>false</code></td></tr>\n          <tr><td><code>nor</code></td><td>NOR</td><td>Negated OR (true only if both are false).</td><td><code>false nor false</code></td><td><code>true</code></td></tr>\n        </tbody>\n      </table>\n    ",
    "codeBlocks": [
      {
        "id": "cb_ch8_1",
        "title": "logic_demo.vrs",
        "code": "set hasKeycard: true\nset knowsPin: true\n\nif hasKeycard & knowsPin then\n  display \"Vault door unlocked!\" ?color=green\nelse\n  display \"Access Denied.\" ?color=red"
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
    "body": "\n      <h2>Built-in Text Tools</h2>\n      <p>Strings come with powerful methods you can call using the dot <code>.</code> syntax:</p>\n      <table class=\"doc-table\">\n        <thead>\n          <tr><th>Method</th><th>Example</th><th>Result</th><th>What It Does</th></tr>\n        </thead>\n        <tbody>\n          <tr><td><code>.length()</code></td><td><code>\"Cat\".length()</code></td><td><code>3</code></td><td>Counts number of characters.</td></tr>\n          <tr><td><code>.toUpper()</code></td><td><code>\"hi\".toUpper()</code></td><td><code>\"HI\"</code></td><td>Converts text to uppercase.</td></tr>\n          <tr><td><code>.toLower()</code></td><td><code>\"HI\".toLower()</code></td><td><code>\"hi\"</code></td><td>Converts text to lowercase.</td></tr>\n          <tr><td><code>.trim()</code></td><td><code>\"  ok  \".trim()</code></td><td><code>\"ok\"</code></td><td>Removes spaces from beginning and end.</td></tr>\n          <tr><td><code>.contains(w)</code></td><td><code>\"Hello\".contains(\"ell\")</code></td><td><code>true</code></td><td>Checks if text contains word.</td></tr>\n          <tr><td><code>.split(sep)</code></td><td><code>\"a,b,c\".split(\",\")</code></td><td><code>[\"a\", \"b\", \"c\"]</code></td><td>Breaks text into a list.</td></tr>\n        </tbody>\n      </table>\n    ",
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
    "body": "\n      <h2>Lists of Items</h2>\n      <p>An <strong>array</strong> is an ordered list of values enclosed in square brackets <code>[...]</code>. You can keep scores, usernames, coordinates, or inventory items grouped together under a single name.</p>\n\n      <h2>Indexing: Starting at Zero</h2>\n      <p>Like almost all modern programming languages, VerScript numbers items starting from <strong>0</strong>:</p>\n      <ul>\n        <li><code>items[0]</code> is the <strong>first</strong> item.</li>\n        <li><code>items[1]</code> is the <strong>second</strong> item.</li>\n        <li><code>items.length()</code> tells you how many items are in the list.</li>\n      </ul>\n\n      <h2>Adding & Removing</h2>\n      <ul>\n        <li><code>items.push(newVal)</code> adds an item to the end of the list.</li>\n        <li><code>items.pop()</code> removes the last item from the list.</li>\n      </ul>\n    ",
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
    "title": "Type Constraints (num, str, bool)",
    "category": "Variables",
    "readTime": "3 min read",
    "summary": "Enforce strict data guarantees by locking variables to specific types (num, str, bool, arr).",
    "body": "\n      <h2>Preventing Accidental Bugs</h2>\n      <p>Normally, variables can hold any kind of data. But what if you want to guarantee that a <code>score</code> variable ONLY ever holds numbers, never accidental words?</p>\n      <p>VerScript lets you prefix variable declarations with a type tag: <code>num</code>, <code>str</code>, <code>bool</code>, or <code>arr</code>. If someone tries to store a word in a <code>num</code> variable, the engine safely flags a <code>DataTypeError</code>!</p>\n    ",
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
    "title": "Functions & Return Values",
    "category": "Routines",
    "readTime": "4 min read",
    "summary": "Package reusable calculations into functions with 'def func name arg1 arg2' and return values using 'reply'.",
    "body": "\n      <h2>Why Package Code into Functions?</h2>\n      <p>Instead of rewriting the same five lines of math ten times across your program, you wrap them inside a <strong>function</strong>! Give it a name, pass in inputs (called arguments), and send back the result with <code>reply</code>.</p>\n      <pre><code>def func calculateTax amount rate\n  reply (amount * rate) / 100</code></pre>\n    ",
    "codeBlocks": [
      {
        "id": "cb_ch26_1",
        "title": "functions_demo.vrs",
        "code": "def func addNumbers a b\n  reply a + b\n\nset total: addNumbers(15, 27)\ndisplay \"Total sum: \" + total ?color=green"
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
    "body": "\n      <h2>When You Need to Modify Data</h2>\n      <p>While functions are pure calculators, <strong>methods</strong> are designed to change state (e.g. updating a player's inventory or writing to a file). Marking a parameter as <code>outbound</code> explicitly declares that the caller's variable will be updated.</p>\n    ",
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
    "summary": "Complete reference matrix of all 28 VerScript runtime errors, including OperationError, syntax codes, and criticality rankings.",
    "body": "\n      <h2>The Error Directory & Criticality Matrix</h2>\n      <p>Every runtime error in VerScript has a clear, descriptive name and criticality ranking (1-10):</p>\n      <table class=\"doc-table\">\n        <thead>\n          <tr><th>Error Name</th><th>Points (1-10)</th><th>Typical Cause</th></tr>\n        </thead>\n        <tbody>\n          <tr><td><code>OperationError</code></td><td>5 / Moderate</td><td>Inconsistent dimensions for matrix or vector arithmetic (+, -, *).</td></tr>\n          <tr><td><code>DivisionByZeroError</code></td><td>4 / Moderate</td><td>Dividing or modding by zero (e.g. <code>10 / 0</code>).</td></tr>\n          <tr><td><code>DataTypeError</code></td><td>6 / High</td><td>Assigning an incompatible value to a type-constrained variable.</td></tr>\n          <tr><td><code>UndefinedVariableError</code></td><td>3 / Low</td><td>Reading a variable that has not been declared.</td></tr>\n          <tr><td><code>SyntaxError</code></td><td>8 / High</td><td>Malformed expression or missing required keyword.</td></tr>\n          <tr><td><code>MemoryAllocationError</code></td><td>10 / Fatal</td><td>Out of native memory or allocator failure.</td></tr>\n        </tbody>\n      </table>\n    ",
    "codeBlocks": [
      {
        "id": "cb_ch36_1",
        "title": "error_inspect.vrs",
        "code": "do\n  ! Intentional dimension mismatch: 2D matrix * 3D vector\n  set m: [[1, 2], [3, 4]]\n  set v: [1, 2, 3]\n  set bad: m * v\nunless OperationError\n  display \"Intercepted OperationError!\" ?color=green"
      }
    ],
    "exercises": [
      {
        "id": "ex_ch36_1",
        "title": "Challenge 36: Catch OperationError",
        "prompt": "Catch an <code>OperationError</code> from <code>[1, 2] + [1, 2, 3]</code> inside <code>do ... unless err</code> and display <code>\"Caught: \" + err</code>.",
        "starterCode": "! Catch OperationError\n",
        "hint": "do\n  set x: [1, 2] + [1, 2, 3]\nunless err\n  display \"Caught: \" + err",
        "solution": "do\n  set x: [1, 2] + [1, 2, 3]\nunless err\n  display \"Caught: \" + err",
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
    "title": "VerScript Headers (.h.vrs)",
    "category": "Modular Architecture",
    "readTime": "5 min read",
    "summary": "Separate interface declarations from implementations using .h.vrs header files. Test with dual-file interactive editors!",
    "body": "\n      <h2>Separating Interfaces from Implementation</h2>\n      <p>Just like in professional C and C++ projects, VerScript allows you to declare functions, types, and constants in a <strong>header file</strong> (<code>.h.vrs</code>), keeping your main application file clean and focused on high-level logic!</p>\n\n      <h2>Interactive Dual-File Sandbox</h2>\n      <p>Use the tabs in the code sandbox below to switch between <code>geometry.h.vrs</code> and <code>main.vrs</code> and run both files together!</p>\n    ",
    "codeBlocks": [
      {
        "id": "cb_ch38_1",
        "title": "dual_file_project",
        "files": [
          {
            "name": "tests/geometry.h.vrs",
            "code": "header Geometry\n  def func areaSquare side\n  def func areaRect w h"
          },
          {
            "name": "main.vrs",
            "code": "include \"tests/app_config.h.vrs\"\n\ndisplay \"Config Header Version: \" + APP_VERSION ?color=green\ndisplay \"Max Retries: \" + MAX_RETRIES ?color=cyan"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "ex_ch38_1",
        "title": "Challenge 38: Multi-File Header Project",
        "prompt": "In <code>calc.h.vrs</code> declare <code>header Calc def func cube n</code>. In <code>main.vrs</code> implement <code>Calc.cube</code> as <code>n * n * n</code> and display <code>Calc.cube(3)</code>.",
        "starterFiles": [
          {
            "name": "calc.h.vrs",
            "code": "header Calc\n  def func cube n"
          },
          {
            "name": "main.vrs",
            "code": "load Calc\ndef func Calc.cube n reply n * n * n\n! TODO: Display Calc.cube(3)\n"
          }
        ],
        "hint": "display Calc.cube(3)",
        "solution": "display Calc.cube(3)",
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
    "body": "\n      <h2>Safe Communication Pipelines</h2>\n      <p>When multiple routines run simultaneously, sharing memory can cause race conditions. <strong>Channels</strong> provide safe, queue-based pipes: one routine puts data into the pipe with <code>send</code>, and another pulls it out with <code>recv</code>!</p>\n    ",
    "codeBlocks": [
      {
        "id": "cb_ch44_1",
        "title": "channels_demo.vrs",
        "code": "chan stream\nsend stream \"packet_alpha\"\nsend stream \"packet_beta\"\n\ndisplay \"Received: \" + (recv stream) ?color=cyan\ndisplay \"Received: \" + (recv stream) ?color=green"
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
    "body": "\n      <h2>Beyond Basic Arithmetic</h2>\n      <p>While VerScript provides built-in operators like <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, and <code>^</code>, scientific calculations require functions like sine, cosine, roots, and rounding. These live in the <code>Math</code> standard library.</p>\n      \n      <h2>Loading the Math Library</h2>\n      <p>Import the module at the top of your program with:</p>\n      <pre><code>load Math</code></pre>\n      <p>Now all mathematical utilities are available under the <code>Math</code> namespace!</p>\n\n      <table class=\"doc-table\">\n        <thead>\n          <tr><th>Function</th><th>Description</th><th>Example</th></tr>\n        </thead>\n        <tbody>\n          <tr><td><code>Math.abs(x)</code></td><td>Distance from zero (always positive)</td><td><code>Math.abs(-42) -> 42</code></td></tr>\n          <tr><td><code>Math.sqrt(x)</code></td><td>Square root of a number</td><td><code>Math.sqrt(64) -> 8</code></td></tr>\n          <tr><td><code>Math.clamp(val, min, max)</code></td><td>Constrains value within bounds</td><td><code>Math.clamp(120, 0, 100) -> 100</code></td></tr>\n          <tr><td><code>Math.gcd(a, b)</code></td><td>Greatest common divisor</td><td><code>Math.gcd(24, 36) -> 12</code></td></tr>\n          <tr><td><code>Math.lcm(a, b)</code></td><td>Least common multiple</td><td><code>Math.lcm(4, 6) -> 12</code></td></tr>\n        </tbody>\n      </table>\n    ",
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
    "body": "\n      <h2>Working with 2D Grids of Numbers</h2>\n      <p>A <strong>Matrix</strong> is a rectangular grid of numbers organized into rows and columns. In machine learning, graphics, and physics simulations, matrices represent coordinates, rotations, and linear transformations.</p>\n      \n      <h2>Creating Matrices</h2>\n      <p>Import the library with <code>load Matrix</code>. In VerScript, nested arrays are naturally matrices, or you can generate zero/identity matrices:</p>\n      <pre><code>load Matrix\nset A: [[4, 7], [2, 6]]\nset id: Matrix.identity(3) ! 3x3 identity matrix</code></pre>\n\n      <h2>Arbitrary N x N Determinant</h2>\n      <p>Computing whether a system has a unique solution requires the <strong>determinant</strong>. In VerScript, you don't need fixed-size functions: <code>Matrix.determinant(mat)</code> automatically handles any square $N \times N$ matrix using recursive cofactor expansion!</p>\n    ",
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
    "body": "\n      <h2>Native nD Vectors</h2>\n      <p>A <strong>Vector</strong> represents a magnitude and a direction in space. Whether working in 2D game mechanics, 3D physics, or 100-dimensional data science, the <code>Vector</code> library supports arbitrary dimensions.</p>\n\n      <h2>Direct Symbolic Operators</h2>\n      <p>Rather than writing verbose function chains like <code>Matrix.add(A, B)</code>, VerScript natively allows <strong>direct symbolic operators</strong>:</p>\n      <ul>\n        <li><code>mat + mat</code> &mdash; Element-wise matrix addition</li>\n        <li><code>mat - mat</code> &mdash; Element-wise matrix subtraction</li>\n        <li><code>mat * mat</code> &mdash; Standard algebraic matrix multiplication</li>\n        <li><code>mat * vec</code> &mdash; Matrix-vector transformation (yields a Vector)</li>\n        <li><code>vec * mat</code> &mdash; Vector-matrix row projection</li>\n        <li><code>vec + vec</code> / <code>vec - vec</code> &mdash; Vector translation</li>\n        <li><code>vec * vec</code> &mdash; Vector dot product (scalar result)</li>\n        <li><code>mat * 2</code> / <code>vec * 5</code> &mdash; Uniform scalar scaling</li>\n      </ul>\n\n      <div class=\"callout-box warning\">\n        <div class=\"callout-title\">⚠️ Dimension Consistency & OperationError</div>\n        <p>If you attempt to multiply a $2 \times 3$ matrix by a 4-dimensional vector, or add matrices of differing dimensions, VerScript immediately raises an <code>OperationError</code>!</p>\n      </div>\n    ",
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
    "body": "\n      <h2>Analyzing Datasets</h2>\n      <p>Data science begins with descriptive statistics. The <code>Stats</code> module offers high-speed statistical summaries over numeric arrays.</p>\n    ",
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
    "body": "\n      <h2>Repeatable Randomness</h2>\n      <p>Games and simulations need randomness, but debugging needs <strong>reproducibility</strong>! The <code>Pseudo</code> engine implements high-quality PRNG algorithms with seed support.</p>\n    ",
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
    "body": "\n      <h2>Native Array Transformations</h2>\n      <p>VerScript arrays provide built-in methods for dynamic additions, removals, joining, and manipulations.</p>\n    ",
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
    "body": "\n      <h2>Text Engineering</h2>\n      <p>Strings support rich operations including trimming whitespace, casing conversions, and delimiter splitting.</p>\n    ",
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
    "body": "\n      <h2>Universal Data Interchange</h2>\n      <p>JSON is the industry standard for exchanging data with web APIs, databases, and configuration files. VerScript provides high-speed parsing and serialization through <code>Json</code>.</p>\n    ",
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
    "body": "\n      <h2>Input Sanitization & Validation</h2>\n      <p>Prevent errors before processing data. The <code>Validate</code> library provides reliable predicates for user forms, configuration parameters, and network packets.</p>\n    ",
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
    "body": "\n      <h2>Hashing and Encoding</h2>\n      <p>Protect passwords, verify file integrity, and encode binary streams with the <code>Crypto</code> library.</p>\n    ",
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
    "body": "\n      <h2>Pattern Matching with Regular Expressions</h2>\n      <p>Match complex textual patterns, extract tokens, and perform regex substitutions with <code>Regex</code>.</p>\n    ",
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
    "body": "\n      <h2>Persistent File Verification</h2>\n      <p>Inspect files and directory structures safely using the <code>Fs</code> library.</p>\n    ",
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
    "body": "\n      <h2>Cross-Platform File Paths</h2>\n      <p>Different operating systems use different separators. The <code>Path</code> library handles cross-platform path normalization automatically.</p>\n    ",
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
    "body": "\n      <h2>Accessing System Environment</h2>\n      <p>Applications frequently read configuration values (like <code>PORT</code> or <code>API_KEY</code>) from the operating system environment. The <code>Env</code> library provides access with fallback defaults.</p>\n    ",
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
    "body": "\n      <h2>Handling Dates & Durations</h2>\n      <p>Measure benchmark elapsed time or query calendar arithmetic with the <code>Time</code> module.</p>\n    ",
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
    "body": "\n      <h2>Network & Web Requests</h2>\n      <p>Validate response codes and handle HTTP network logic seamlessly using the <code>Http</code> library.</p>\n    ",
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
    "body": "\n      <h2>Structured Logging</h2>\n      <p>When running servers and complex apps, plain print statements get messy. The <code>Log</code> library adds automatic timestamps, log severity tags, and formatting.</p>\n    ",
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
    "body": "\n      <h2>Terminal Aesthetics</h2>\n      <p>Format terminal output with colors and custom RGB styles using <code>Color</code>.</p>\n    ",
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
    "body": "\n      <h2>Terminal User Interfaces</h2>\n      <p>Build beautiful CLI applications with structured console helpers using <code>Console</code>.</p>\n    ",
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
    "body": "\n      <h2>Measuring Code Speed</h2>\n      <p>Never guess whether an optimization worked. The <code>Benchmark</code> library formats execution reports.</p>\n    ",
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
    "body": "\n      <h2>Isolated Unit Testing</h2>\n      <p>Test your business logic in isolation without making real network or database calls by replacing dependencies with <strong>Mocks</strong> and <strong>Spies</strong>.</p>\n    ",
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
    "body": "\n      <h2>Automated Verification</h2>\n      <p>Build reliable test suites that fail fast if an expectation is broken. The <code>Assert</code> library throws clear assertion errors when expectations fail.</p>\n    ",
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
    "title": "Master Language Specification & Complete Cheatsheet",
    "category": "Reference",
    "readTime": "10 min read",
    "summary": "The definitive reference manual: complete syntax grammar, operator precedence, all 28 error types, 21 stdlib modules, and compiler flags.",
    "body": "\n      <h2>VerScript Complete Grammar & Reference</h2>\n      <p>This master reference catalogs the entire VerScript language specification for quick reference during development.</p>\n\n      <h2>Core Keywords</h2>\n      <table class=\"doc-table\">\n        <thead>\n          <tr><th>Keyword Category</th><th>Keywords</th></tr>\n        </thead>\n        <tbody>\n          <tr><td><strong>Declarations</strong></td><td><code>set</code>, <code>def</code>, <code>func</code>, <code>struct</code>, <code>DataType</code>, <code>enum</code>, <code>class</code>, <code>entity</code></td></tr>\n          <tr><td><strong>Control Flow</strong></td><td><code>if</code>, <code>then</code>, <code>else</code>, <code>while</code>, <code>loop</code>, <code>to</code>, <code>as</code>, <code>step</code>, <code>do</code></td></tr>\n          <tr><td><strong>Execution</strong></td><td><code>display</code>, <code>reply</code>, <code>break</code>, <code>continue</code>, <code>pass</code>, <code>exit</code></td></tr>\n          <tr><td><strong>Error Handling</strong></td><td><code>try</code>, <code>catch</code>, <code>finally</code>, <code>raise</code>, <code>on error goto</code></td></tr>\n          <tr><td><strong>Concurrency</strong></td><td><code>async</code>, <code>await</code>, <code>chan</code>, <code>send</code>, <code>recv</code>, <code>event</code>, <code>emit</code></td></tr>\n          <tr><td><strong>Modules & Modular</strong></td><td><code>load</code>, <code>import</code>, <code>export</code>, <code>from</code>, <code>header</code>, <code>interface</code></td></tr>\n        </tbody>\n      </table>\n\n      <h2>Standard Error Hierarchy (All 28 Error Types)</h2>\n      <p>VerScript categorizes runtime issues into strictly named error domains:</p>\n      <p><code>Error</code>, <code>TypeError</code>, <code>ValueError</code>, <code>KeyError</code>, <code>IndexError</code>, <code>AttributeError</code>, <code>SyntaxError</code>, <code>NameError</code>, <code>ZeroDivisionError</code>, <code>IOError</code>, <code>FileNotFoundError</code>, <code>ImportError</code>, <code>RuntimeError</code>, <code>TimeoutError</code>, <code>AssertionError</code>, <code>ChannelError</code>, <code>EventError</code>, <code>ConstraintError</code>, <code>InterfaceError</code>, <code>ContractError</code>, <code>PurityError</code>, <code>ImmutabilityError</code>, <code>ConstError</code>, <code>HeaderMismatchError</code>, <code>StructFieldCountError</code>, <code>InvalidHeaderError</code>, <code>RangeError</code>, <code>OperationError</code>.</p>\n\n      <h2>The 21 Native Standard Libraries</h2>\n      <p>All included out-of-the-box with zero third-party dependencies:</p>\n      <p><code>Math</code>, <code>Matrix</code>, <code>Vector</code>, <code>Stats</code>, <code>Pseudo</code>, <code>Arrays</code>, <code>Strings</code>, <code>Json</code>, <code>Validate</code>, <code>Crypto</code>, <code>Regex</code>, <code>Fs</code>, <code>Path</code>, <code>Env</code>, <code>Time</code>, <code>Http</code>, <code>Log</code>, <code>Color</code>, <code>Console</code>, <code>Benchmark</code>, <code>Mock</code>, <code>Assert</code>.</p>\n    ",
    "codeBlocks": [
      {
        "id": "cb_ch69_1",
        "title": "master_reference_sample.vrs",
        "code": "load Math\nload Vector\n\nDataType Positive extends num\n  it > 0\n\nset v1: [3, 4]\nset v2: [1, 2]\nset combined: v1 + v2\n\ndisplay \"Vector Sum: \" + combined ?color=green\ndisplay \"Square Root of 25: \" + Math.sqrt(25) ?color=cyan"
      }
    ],
    "exercises": [
      {
        "id": "ex_ch69_1",
        "title": "Master Reference Capstone Check",
        "prompt": "Display <code>'VerScript Master Certification Complete'</code> with color green.",
        "starterCode": "! Display graduation message\n",
        "hint": "display 'VerScript Master Certification Complete' ?color=green",
        "solution": "display 'VerScript Master Certification Complete' ?color=green",
        "expectedMatch": {}
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = articlesData;
}
