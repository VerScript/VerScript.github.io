// ═══════════════════════════════════════════════════════════════════
//  VerScript Academy — Complete Interactive Documentation Articles
//  Pedagogically Structured into 9 Progressive Learning Sections:
//   Section 1: Getting Started & Setup (Chapters 1-3)
//   Section 2: Language Foundations & Datatypes (Chapters 4-8)
//   Section 3: Execution Control & Branching (Chapters 9-11)
//   Section 4: Procedures, Routines & Purity (Chapters 12-14)
//   Section 5: Object-Oriented Architecture (Chapters 15-17)
//   Section 6: Modular Systems & Code Organization (Chapters 18-20)
//   Section 7: Robustness, Errors & Testing (Chapters 21-23)
//   Section 8: Advanced Tooling & Customizations (Chapters 24-25)
//   Section 9: Capstone & Reference (Chapters 26-27)
// ═══════════════════════════════════════════════════════════════════

const ARTICLES = [
    {
        "id": "ch1-intro",
        "number": 1,
        "section": "Section 1: Getting Started & Setup",
        "title": "Introduction & Language Architecture",
        "category": "Getting Started",
        "readTime": "4 min read",
        "summary": "Discover VerScript's origin, design principles, lightweight native C virtual machine, and execution lifecycle.",
        "body": "\n            <h2>What is VerScript?</h2>\n            <p><strong>VerScript</strong> is an ultra-fast, minimalist scripting language engineered to blend the deterministic execution and speed of native C with the high-level ergonomics of modern dynamic programming languages.</p>\n            <p>VerScript eliminates boilerplate punctuation (such as semicolons and excessive curly braces) in favor of indentation-scoped blocks and declarative statement structures.</p>\n\n            <div class=\"callout-box tip\">\n                <div class=\"callout-title\">💡 Core Architecture Pillars</div>\n                <p>Zero external runtime dependencies beyond standard C99, dynamic typing, integrated attribute system with <code>?key=value</code>, reactive watch conditions, polyglot code injection, and runtime command aliasing.</p>\n            </div>\n\n            <h2>Compilation &amp; VM Pipeline</h2>\n            <p>The VerScript runtime processes source code through a clean two-stage pipeline:</p>\n            <table class=\"doc-table\">\n                <thead>\n                    <tr>\n                        <th>Layer</th>\n                        <th>Component</th>\n                        <th>Responsibility</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td><strong>Frontend</strong></td>\n                        <td><code>lexer.c</code></td>\n                        <td>Tokenizes source code, strips comments, computes line indentation depths, and tokenizes command attributes.</td>\n                    </tr>\n                    <tr>\n                        <td><strong>Backend</strong></td>\n                        <td><code>main.c</code></td>\n                        <td>Executes bytecode instructions, evaluates dynamic expressions, manages symbol tables, and dispatches runtime error scopes.</td>\n                    </tr>\n                    <tr>\n                        <td><strong>Cloud VM</strong></td>\n                        <td><code>PolyServer</code></td>\n                        <td>Unified Express microservice hosting the C compiler engine and VS#-1B neural language synthesis assistant.</td>\n                    </tr>\n                </tbody>\n            </table>\n\n            <h2>Attribute Syntax Overview</h2>\n            <p>Commands in VerScript accept optional attributes prefixed with a question mark <code>?</code> (e.g. <code>?color=\"green\"</code> or unquoted <code>?color=#00ffcc</code>). Attributes configure command execution parameters dynamically without altering expression syntax.</p>\n        ",
        "codeBlocks": [
            {
                "id": "cb_intro_1",
                "title": "sample_intro.vrs",
                "code": "! Welcome to VerScript!\ndisplay \"Hello, Polyglot World!\" ?color=\"cyan\"\ndisplay \"VerScript VM initialized cleanly.\" ?color=\"green\""
            }
        ],
        "exercises": [
            {
                "id": "ex_intro_1",
                "title": "Exercise 1.1: Your First Output",
                "prompt": "Write a program that outputs <code>\"Hello from VerScript!\"</code> with <code>?color=\"green\"</code>.",
                "starterCode": "! TODO: Use 'display' to output \"Hello from VerScript!\" in green\n",
                "hint": "Use `display \"Hello from VerScript!\" ?color=\"green\"`.",
                "solution": "display \"Hello from VerScript!\" ?color=\"green\"",
                "expectedMatch": {}
            },
            {
                "id": "ex_intro_2",
                "title": "Exercise 1.2: Two-line Status Report",
                "prompt": "Display two consecutive lines: first <code>\"System Online\"</code> in cyan, then <code>\"Ready\"</code> in yellow.",
                "starterCode": "! TODO: Write two display statements:\n! 1. \"System Online\" in cyan\n! 2. \"Ready\" in yellow\n",
                "hint": "Write two separate `display` statements on individual lines.",
                "solution": "display \"System Online\" ?color=\"cyan\"\ndisplay \"Ready\" ?color=\"yellow\"",
                "expectedMatch": {}
            },
            {
                "id": "ex_intro_3",
                "title": "Exercise 1.3: Unquoted Hex Attribute",
                "prompt": "Display <code>\"Hex Color Glow\"</code> using unquoted hex color <code>?color=#00ffcc</code>.",
                "starterCode": "! TODO: Display \"Hex Color Glow\" with ?color=#00ffcc without quotes\n",
                "hint": "Attributes like `?color=#00ffcc` do not require quotes.",
                "solution": "display \"Hex Color Glow\" ?color=#00ffcc",
                "expectedMatch": {}
            }
        ]
    },
    {
        "id": "ch2-lexical",
        "number": 2,
        "section": "Section 1: Getting Started & Setup",
        "title": "Lexical Structure & Comments",
        "category": "Fundamentals",
        "readTime": "3 min read",
        "summary": "Understand single-line and multi-line comments, indentation rules, and token boundaries.",
        "body": "\n            <h2>Comments in VerScript</h2>\n            <p>VerScript provides two clean comment forms for documenting code:</p>\n\n            <h3>1. Single-Line Comments (<code>!</code>)</h3>\n            <p>Any statement or inline text starting with an exclamation mark <code>!</code> is ignored by the parser up to the newline.</p>\n\n            <h3>2. Multi-line Block Comments (<code>!! ... !!</code>)</h3>\n            <p>Enclose long documentation blocks between double exclamation marks <code>!!</code>.</p>\n\n            <div class=\"callout-box note\">\n                <div class=\"callout-title\">📝 Indentation Sensitivity</div>\n                <p>VerScript uses 2 or 4 spaces to define nested blocks (for <code>loop</code>, <code>iterate</code>, <code>if</code>, <code>unless</code>, and <code>alias:</code>). Mixing indentation depths triggers an <code>IndentationError</code>.</p>\n            </div>\n        ",
        "codeBlocks": [
            {
                "id": "cb_comments_1",
                "title": "comments.vrs",
                "code": "!!\n  VerScript Architecture Config\n  Version: 1.2\n!!\n! Main execution entrypoint\ndisplay \"Lexical validation active.\" ?color=\"cyan\""
            }
        ],
        "exercises": [
            {
                "id": "ex_comments_1",
                "title": "Exercise 2.1: Documenting with Single-Line Comments",
                "prompt": "Add a single-line comment above a display statement that outputs <code>\"Calculation Active\"</code> in green.",
                "starterCode": "! TODO: Add a descriptive comment starting with !\ndisplay \"Calculation Active\" ?color=\"green\"",
                "hint": "Prefix the first line with `!`.",
                "solution": "! Process status calculation\ndisplay \"Calculation Active\" ?color=\"green\"",
                "expectedMatch": {}
            },
            {
                "id": "ex_comments_2",
                "title": "Exercise 2.2: Multi-line Block Comment",
                "prompt": "Enclose notes within <code>!!</code> and display <code>\"Module Loaded\"</code> in yellow.",
                "starterCode": "! TODO: Wrap these comments in !! ... !!\nModule Header\nVersion 1.0\n\ndisplay \"Module Loaded\" ?color=\"yellow\"",
                "hint": "Place `!!` at start and `!!` at end.",
                "solution": "!!\nModule Header\nVersion 1.0\n!!\ndisplay \"Module Loaded\" ?color=\"yellow\"",
                "expectedMatch": {}
            },
            {
                "id": "ex_comments_3",
                "title": "Exercise 2.3: Inline Trailing Comments",
                "prompt": "Write a display command printing <code>\"Server Online\"</code> in cyan followed by an inline comment <code>! boot log</code>.",
                "starterCode": "! TODO: Write display \"Server Online\" ?color=\"cyan\" with an inline comment\n",
                "hint": "Place `! comment` after the attributes.",
                "solution": "display \"Server Online\" ?color=\"cyan\" ! boot log",
                "expectedMatch": {}
            }
        ]
    },
    {
        "id": "ch6-display-command",
        "number": 3,
        "section": "Section 1: Getting Started & Setup",
        "title": "The Display Command & Formatting Engine",
        "category": "Input & Output",
        "readTime": "6 min read",
        "summary": "Dedicated guide to the display command, named ANSI colors, unquoted/quoted hex colors, Truecolor RGB output, and inline formatting.",
        "body": "\n            <h2>The <code>display</code> Command</h2>\n            <p>The <code>display</code> keyword is VerScript's primary output statement. It evaluates expressions and writes them to standard output with optional formatting attributes.</p>\n\n            <h2>Master Attributes for <code>display</code></h2>\n            <table class=\"doc-table\">\n                <thead>\n                    <tr>\n                        <th>Attribute</th>\n                        <th>Type / Values</th>\n                        <th>Description</th>\n                        <th>Syntax Example</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td><code>?color</code></td>\n                        <td><code>\"name\"</code> or <code>#hex</code></td>\n                        <td>Colors output via ANSI escapes or Truecolor RGB. Supported names: <code>red</code>, <code>green</code>, <code>yellow</code>, <code>blue</code>, <code>purple</code>, <code>cyan</code>, <code>white</code>.</td>\n                        <td><code>display \"Hi\" ?color=\"green\"</code><br><code>display \"Neon\" ?color=#00ffcc</code></td>\n                    </tr>\n                    <tr>\n                        <td><code>?newline</code></td>\n                        <td><code>true</code> | <code>false</code></td>\n                        <td>Whether to append a newline <code>\\n</code> after printing. Defaults to <code>true</code>.</td>\n                        <td><code>display \"Loading...\" ?newline=false</code></td>\n                    </tr>\n                    <tr>\n                        <td><code>?inline</code></td>\n                        <td>Flag (no value)</td>\n                        <td>Shorthand for <code>?newline=false</code> to keep cursor on current line.</td>\n                        <td><code>display \"Connecting: \" ?inline ?color=\"yellow\"</code></td>\n                    </tr>\n                </tbody>\n            </table>\n\n            <h2>Hex Color Values (Quoted &amp; Unquoted)</h2>\n            <p>Hex attributes can be passed with or without quotation marks:</p>\n            <div class=\"code-block\">display \"Pink text\" ?color=#ff007f\ndisplay \"Cyan text\" ?color=\"#00ffff\"\ndisplay \"Short hex\" ?color=#0fc</div>\n            <p>When executed in native C or cloud environments, the engine translates hex values into 24-bit Truecolor escape sequences (<code>\\033[38;2;R;G;Bm</code>), rendering rich gradients across terminals and IDE output windows.</p>\n        ",
        "codeBlocks": [
            {
                "id": "cb_display_1",
                "title": "display_showcase.vrs",
                "code": "! Named ANSI Colors\ndisplay \"Status: Red Alert\" ?color=\"red\"\ndisplay \"Status: Online\" ?color=\"green\"\ndisplay \"Status: Warning\" ?color=\"yellow\"\ndisplay \"Status: Info\" ?color=\"cyan\"\n\n! Truecolor Hex Attributes (No quotes required)\ndisplay \"Neon Magenta Text\" ?color=#ff00aa\ndisplay \"Cyberpunk Lime Text\" ?color=#39ff14\ndisplay \"Electric Blue Text\" ?color=#00d2ff\n\n! Inline printing on the same line\ndisplay \"Progress: [\" ?inline ?color=\"yellow\"\ndisplay \"====>\" ?inline ?color=\"cyan\"\ndisplay \"] Done!\" ?color=\"green\""
            }
        ],
        "exercises": [
            {
                "id": "ex_disp_1",
                "title": "Exercise 6.1: Hex Color Styling",
                "prompt": "Display <code>\"Cyberpunk Matrix Active\"</code> using unquoted hex color <code>?color=#00ffcc</code>.",
                "starterCode": "! TODO: Display \"Cyberpunk Matrix Active\" with ?color=#00ffcc\n",
                "hint": "Use `display \"Cyberpunk Matrix Active\" ?color=#00ffcc`.",
                "solution": "display \"Cyberpunk Matrix Active\" ?color=#00ffcc",
                "expectedMatch": {}
            },
            {
                "id": "ex_disp_2",
                "title": "Exercise 6.2: Segmented Inline Progress",
                "prompt": "Print <code>\"Step 1... \"</code> in yellow using <code>?inline</code>, followed by <code>\"Step 2... \"</code> in cyan using <code>?inline</code>, and finish with <code>\"Complete!\"</code> in green.",
                "starterCode": "! TODO: Print 3 inline segments:\n! 1. \"Step 1... \" (yellow, ?inline)\n! 2. \"Step 2... \" (cyan, ?inline)\n! 3. \"Complete!\" (green)\n",
                "hint": "Use `?inline` on the first two display statements.",
                "solution": "display \"Step 1... \" ?inline ?color=\"yellow\"\ndisplay \"Step 2... \" ?inline ?color=\"cyan\"\ndisplay \"Complete!\" ?color=\"green\"",
                "expectedMatch": {}
            },
            {
                "id": "ex_disp_3",
                "title": "Exercise 6.3: Multi-color Banner",
                "prompt": "Create a 2-line header: line 1 <code>\"=== SYSTEM REPORT ===\"</code> in purple, line 2 <code>\"Core Status: 100%\"</code> in unquoted hex <code>?color=#50fa7b</code>.",
                "starterCode": "! TODO: Create the 2-line header as specified\n",
                "hint": "Write two display commands with purple and hex colors.",
                "solution": "display \"=== SYSTEM REPORT ===\" ?color=\"purple\"\ndisplay \"Core Status: 100%\" ?color=#50fa7b",
                "expectedMatch": {}
            }
        ]
    },
    {
        "id": "ch4-numbers",
        "number": 4,
        "section": "Section 2: Language Foundations & Datatypes",
        "title": "Numbers (num) & Arithmetic Operations",
        "category": "Datatypes",
        "readTime": "5 min read",
        "summary": "Comprehensive guide to numbers in VerScript: numeric literals, binary operations, unary negation, integer division, modulo, and math functions.",
        "body": "\n    <h2>The Numeric Datatype in VerScript</h2>\n    <p>In VerScript, numerical computation is fast, deterministic, and integral to runtime efficiency. Numbers can be declared with dynamic inference or explicitly using the <code>set</code> statement.</p>\n\n    <div class=\"callout-box tip\">\n      <div class=\"callout-title\">💡 Pure Numeric Precision</div>\n      <p>VerScript numbers represent signed 64-bit integer values at the core runtime level, allowing safe arithmetic from <code>-9,223,372,036,854,775,808</code> to <code>9,223,372,036,854,775,807</code>.</p>\n    </div>\n\n    <h2>Arithmetic Operators</h2>\n    <table class=\"doc-table\">\n      <thead>\n        <tr><th>Operator</th><th>Name</th><th>Syntax</th><th>Example</th><th>Result</th></tr>\n      </thead>\n      <tbody>\n        <tr><td><code>+</code></td><td>Addition</td><td><code>a + b</code></td><td><code>14 + 6</code></td><td><code>20</code></td></tr>\n        <tr><td><code>-</code></td><td>Subtraction / Negation</td><td><code>a - b</code>, <code>-a</code></td><td><code>50 - 18</code></td><td><code>32</code></td></tr>\n        <tr><td><code>*</code></td><td>Multiplication</td><td><code>a * b</code></td><td><code>7 * 8</code></td><td><code>56</code></td></tr>\n        <tr><td><code>/</code></td><td>Integer Division</td><td><code>a / b</code></td><td><code>100 / 4</code></td><td><code>25</code></td></tr>\n      </tbody>\n    </table>\n\n    <h2>Division Safety &amp; Zero Guards</h2>\n    <p>Division by zero throws a recoverable <code>DivisionByZeroError</code>. You can catch this error using VerScript's <code>do ... unless</code> block:</p>\n    <pre><code>do\n  set quotient: 100 / divisor\nunless DivisionByZeroError\n  display \"Handled division by zero safely!\" ?color=\"yellow\"</code></pre>\n\n    <h2>The Core Math Library</h2>\n    <p>VerScript includes an embedded <code>Math</code> library loaded with <code>load Math</code> that provides essential functions:</p>\n    <ul>\n      <li><code>Math.abs(n)</code> — Computes absolute value.</li>\n      <li><code>Math.min(a, b)</code> and <code>Math.max(a, b)</code> — Returns minimum or maximum of two values.</li>\n      <li><code>Math.clamp(val, low, high)</code> — Constrains a value within a specified boundary.</li>\n      <li><code>Math.pow(base, exp)</code> — Raises base to integer exponent power.</li>\n      <li><code>Math.gcd(a, b)</code> and <code>Math.lcm(a, b)</code> — Calculates greatest common divisor and least common multiple.</li>\n    </ul>\n  ",
        "codeBlocks": [
            {
                "id": "cb_num_1",
                "title": "numeric_operations.vrs",
                "code": "load Math\n\nset a: 42\nset b: -15\ndisplay \"a + b: \" + (a + b)\ndisplay \"Absolute value of b: \" + (Math.abs(b))\ndisplay \"Clamped: \" + (Math.clamp(a, 0, 30))"
            }
        ],
        "exercises": [
            {
                "id": "ex_num_1",
                "title": "Exercise 4.1: Arithmetic Calculation",
                "prompt": "Declare variable <code>baseVal</code> as <code>25</code>, multiply it by <code>4</code>, subtract <code>10</code>, and display the final result with <code>display result</code>.",
                "starterCode": "! TODO: Calculate (25 * 4) - 10 and display the result\n",
                "hint": "Use `set baseVal: 25` followed by `set result: baseVal * 4 - 10`.",
                "solution": "set baseVal: 25\nset result: baseVal * 4 - 10\ndisplay result",
                "expectedMatch": {}
            }
        ]
    },
    {
        "id": "ch5-booleans",
        "number": 5,
        "section": "Section 2: Language Foundations & Datatypes",
        "title": "Booleans (bool) & Logical Operators",
        "category": "Datatypes",
        "readTime": "5 min read",
        "summary": "Master boolean literals, truth evaluations, relational comparisons, and native logic gates (&, and, or, nor, xor, xnor, xand, x&, not).",
        "body": "\n    <h2>Boolean Primitives</h2>\n    <p>VerScript features first-class boolean primitives: <code>true</code> and <code>false</code>. Booleans are returned by relational comparisons and guard conditional execution blocks.</p>\n\n    <h2>Relational Comparison Operators</h2>\n    <table class=\"doc-table\">\n      <thead>\n        <tr><th>Operator</th><th>Meaning</th><th>Example</th><th>Evaluates To</th></tr>\n      </thead>\n      <tbody>\n        <tr><td><code>=</code></td><td>Equal to</td><td><code>10 = 10</code></td><td><code>true</code></td></tr>\n        <tr><td><code>!=</code> or <code>x=</code></td><td>Not equal to</td><td><code>10 != 20</code></td><td><code>true</code></td></tr>\n        <tr><td><code>&lt;</code></td><td>Less than</td><td><code>5 &lt; 8</code></td><td><code>true</code></td></tr>\n        <tr><td><code>&lt;=</code></td><td>Less than or equal</td><td><code>8 &lt;= 8</code></td><td><code>true</code></td></tr>\n        <tr><td><code>&gt;</code></td><td>Greater than</td><td><code>12 &gt; 7</code></td><td><code>true</code></td></tr>\n        <tr><td><code>&gt;=</code></td><td>Greater than or equal</td><td><code>15 &gt;= 20</code></td><td><code>false</code></td></tr>\n      </tbody>\n    </table>\n\n    <div class=\"callout-box tip\">\n      <div class=\"callout-title\">💡 The 'x=' Operator</div>\n      <p>VerScript supports both <code>!=</code> and the expressive <code>x=</code> operator for inequality testing, matching traditional algorithmic syntax.</p>\n    </div>\n\n    <h2>Native Boolean Logic Gates</h2>\n    <p>VerScript provides first-class native boolean logic gates integrated directly into the core grammar with infix syntax (e.g. <code>cond1 &amp; cond2</code>). The former <code>Logic</code> library is fully removed in favor of these native, high-performance logic gates.</p>\n    \n    <table class=\"doc-table\">\n      <thead>\n        <tr><th>Operator</th><th>Gate Type</th><th>Semantics &amp; Behavior</th><th>Example Syntax</th><th>Evaluates To</th></tr>\n      </thead>\n      <tbody>\n        <tr><td><code>&amp;</code></td><td>Conjunction</td><td><strong>Normal AND</strong>: True only if both operands are truthy</td><td><code>true &amp; false</code></td><td><code>false</code></td></tr>\n        <tr><td><code>and</code></td><td>Negated Conjunction</td><td><strong>Negated AND / NAND</strong>: True unless both operands are truthy</td><td><code>true and true</code></td><td><code>false</code></td></tr>\n        <tr><td><code>or</code></td><td>Disjunction</td><td><strong>Normal OR</strong>: True if at least one operand is truthy</td><td><code>true or false</code></td><td><code>true</code></td></tr>\n        <tr><td><code>nor</code></td><td>Negated Disjunction</td><td><strong>Negated OR / NOR</strong>: True only when both operands are falsy</td><td><code>false nor false</code></td><td><code>true</code></td></tr>\n        <tr><td><code>xor</code></td><td>Exclusive Disjunction</td><td><strong>Exclusive OR</strong>: True if exactly one operand is truthy</td><td><code>true xor false</code></td><td><code>true</code></td></tr>\n        <tr><td><code>xnor</code></td><td>Equivalence</td><td><strong>Exclusive NOR</strong>: True if both operands have identical truth values</td><td><code>true xnor true</code></td><td><code>true</code></td></tr>\n        <tr><td><code>xand</code></td><td>Equivalence</td><td><strong>Exclusive AND</strong>: Synonym for XNOR (identical truth values)</td><td><code>false xand false</code></td><td><code>true</code></td></tr>\n        <tr><td><code>x&amp;</code></td><td>Equivalence</td><td><strong>Symbolic XAND</strong>: Symbol synonym for XNOR (identical truth values)</td><td><code>true x&amp; true</code></td><td><code>true</code></td></tr>\n        <tr><td><code>not</code></td><td>Unary Inversion</td><td><strong>Logical Inversion</strong>: Inverts truth value of subsequent operand</td><td><code>not false</code></td><td><code>true</code></td></tr>\n      </tbody>\n    </table>\n\n    <h2>Truth Table Reference</h2>\n    <table class=\"doc-table\">\n      <thead>\n        <tr><th>A</th><th>B</th><th>A &amp; B</th><th>A and B</th><th>A or B</th><th>A nor B</th><th>A xor B</th><th>A xnor B / A x&amp; B</th></tr>\n      </thead>\n      <tbody>\n        <tr><td><code>true</code></td><td><code>true</code></td><td><code>true</code></td><td><code>false</code></td><td><code>true</code></td><td><code>false</code></td><td><code>false</code></td><td><code>true</code></td></tr>\n        <tr><td><code>true</code></td><td><code>false</code></td><td><code>false</code></td><td><code>true</code></td><td><code>true</code></td><td><code>false</code></td><td><code>true</code></td><td><code>false</code></td></tr>\n        <tr><td><code>false</code></td><td><code>true</code></td><td><code>false</code></td><td><code>true</code></td><td><code>true</code></td><td><code>false</code></td><td><code>true</code></td><td><code>false</code></td></tr>\n        <tr><td><code>false</code></td><td><code>false</code></td><td><code>false</code></td><td><code>true</code></td><td><code>false</code></td><td><code>true</code></td><td><code>false</code></td><td><code>true</code></td></tr>\n      </tbody>\n    </table>\n  ",
        "codeBlocks": [
            {
                "id": "cb_bool_1",
                "title": "boolean_gates.vrs",
                "code": "set isReady: true\nset isBlocked: false\n\ndisplay \"isReady & isBlocked (AND):    \" + (isReady & isBlocked)\ndisplay \"isReady and isBlocked (NAND):  \" + (isReady and isBlocked)\ndisplay \"isReady or isBlocked (OR):     \" + (isReady or isBlocked)\ndisplay \"isReady nor isBlocked (NOR):   \" + (isReady nor isBlocked)\ndisplay \"isReady xor isBlocked (XOR):   \" + (isReady xor isBlocked)\ndisplay \"isReady xnor isBlocked (XNOR): \" + (isReady xnor isBlocked)\ndisplay \"isReady x& isBlocked (X&):     \" + (isReady x& isBlocked)\n\nif isReady & not isBlocked then\n  display \"System operational.\" ?color=\"green\""
            }
        ],
        "exercises": [
            {
                "id": "ex_bool_1",
                "title": "Exercise 5.1: Boolean Logic Gate Check",
                "prompt": "Given <code>is_admin: true</code> and <code>has_token: true</code>, check if both are true using native <code>&</code>. If valid, display <code>\"Access Granted\"</code> in green.",
                "starterCode": "set is_admin: true\nset has_token: true\n! TODO: Check condition with &\n",
                "hint": "Use `if is_admin & has_token then` and `display \"Access Granted\" ?color=\"green\"`.",
                "solution": "set is_admin: true\nset has_token: true\nif is_admin & has_token then\n  display \"Access Granted\" ?color=\"green\"",
                "expectedMatch": {}
            }
        ]
    },
    {
        "id": "ch6-strings",
        "number": 6,
        "section": "Section 2: Language Foundations & Datatypes",
        "title": "Strings (str) & String Manipulation Engine",
        "category": "Datatypes",
        "readTime": "6 min read",
        "summary": "Comprehensive guide to strings in VerScript: string literals, concatenation, interpolation, and the complete camelCase string API.",
        "body": "\n    <h2>First-Class String Engine</h2>\n    <p>Strings in VerScript are UTF-8 encoded text sequences enclosed in double quotation marks <code>\"...\"</code>. Strings support rich concatenation via <code>+</code> and an extensive suite of native camelCase methods.</p>\n\n    <h2>String Concatenation</h2>\n    <p>The <code>+</code> operator automatically concatenates strings with other strings, numbers, booleans, and arrays:</p>\n    <pre><code>set name: \"Ada Lovelace\"\nset year: 1815\ndisplay \"Pioneer: \" + name + \" (Born \" + year + \")\"</code></pre>\n\n    <h2>Native camelCase String Methods</h2>\n    <table class=\"doc-table\">\n      <thead>\n        <tr><th>Method</th><th>Parameters</th><th>Return Type</th><th>Description</th></tr>\n      </thead>\n      <tbody>\n        <tr><td><code>str.len()</code> / <code>str.length()</code></td><td>None</td><td><code>num</code></td><td>Returns character count.</td></tr>\n        <tr><td><code>str.toUpper()</code></td><td>None</td><td><code>str</code></td><td>Returns uppercase copy.</td></tr>\n        <tr><td><code>str.toLower()</code></td><td>None</td><td><code>str</code></td><td>Returns lowercase copy.</td></tr>\n        <tr><td><code>str.trim()</code></td><td>None</td><td><code>str</code></td><td>Strips leading and trailing whitespace.</td></tr>\n        <tr><td><code>str.slice(start, len)</code></td><td><code>start, len</code></td><td><code>str</code></td><td>Extracts substring starting at index with specified length.</td></tr>\n        <tr><td><code>str.indexOf(needle)</code></td><td><code>needle</code></td><td><code>num</code></td><td>Returns 0-based index of needle, or <code>-1</code> if not found.</td></tr>\n        <tr><td><code>str.contains(needle)</code></td><td><code>needle</code></td><td><code>bool</code></td><td>Returns true if needle is found inside string.</td></tr>\n        <tr><td><code>str.padLeft(len, pad)</code></td><td><code>len, pad</code></td><td><code>str</code></td><td>Pads left side of string to target width.</td></tr>\n        <tr><td><code>str.padRight(len, pad)</code></td><td><code>len, pad</code></td><td><code>str</code></td><td>Pads right side of string to target width.</td></tr>\n        <tr><td><code>str.repeat(count)</code></td><td><code>count</code></td><td><code>str</code></td><td>Repeats string count times.</td></tr>\n        <tr><td><code>str.split(delim)</code></td><td><code>delim</code></td><td><code>arr</code></td><td>Splits string by delimiter into an array of tokens.</td></tr>\n      </tbody>\n    </table>\n  ",
        "codeBlocks": [
            {
                "id": "cb_str_1",
                "title": "string_methods.vrs",
                "code": "set raw: \"   VerScript Engine   \"\nset clean: raw.trim()\ndisplay \"Cleaned: '\" + clean + \"'\"\ndisplay \"Uppercase: \" + clean.toUpper()\ndisplay \"Length: \" + clean.len()\ndisplay \"Contains 'Script': \" + (clean.contains(\"Script\"))\nset parts: clean.split(\" \")\ndisplay \"First Word: \" + parts[0]"
            }
        ],
        "exercises": [
            {
                "id": "ex_str_1",
                "title": "Exercise 6.1: String Formatting",
                "prompt": "Declare <code>rawMsg: \"  ready for launch  \"</code>. Trim it, convert to uppercase, and display the result.",
                "starterCode": "! TODO: Trim rawMsg, convert to upper case, and display\n",
                "hint": "Use `set clean: rawMsg.trim()` then `display clean.toUpper()`.",
                "solution": "set rawMsg: \"  ready for launch  \"\nset clean: rawMsg.trim()\ndisplay clean.toUpper()",
                "expectedMatch": {}
            }
        ]
    },
    {
        "id": "ch7-arrays",
        "number": 7,
        "section": "Section 2: Language Foundations & Datatypes",
        "title": "Arrays (arr) & Collection Operations",
        "category": "Data Structures",
        "readTime": "8 min read",
        "summary": "Master VerScript's native arr data type: heterogeneous lists, zero-based indexing, in-place element mutation, and bounds safety.",
        "body": "\n            <h2>The <code>arr</code> Data Type</h2>\n            <p>VerScript introduces first-class dynamic collections through the <code>arr</code> keyword. Unlike static C arrays, VerScript arrays are <strong>heterogeneous</strong>, dynamically resized on the virtual machine heap, and support mixed datatypes (integers, strings, booleans, nested arrays, and entity references) in a single collection.</p>\n\n            <h2>Syntax &amp; Initialization</h2>\n            <p>Arrays are declared using <code>arr &lt;identifier&gt;</code> and initialized using bracket syntax <code>[item1, item2, ...]</code>:</p>\n            <pre class=\"code-block\"><code>arr inventory: [\"Elixir\", 42, true, 999]\narr matrix: [[1, 0], [0, 1]]\narr empty_list</code></pre>\n\n            <h2>0-Based Indexing &amp; Bounds Safety</h2>\n            <p>Array elements are accessed using standard bracket indexing <code>items[index]</code>, starting from index <code>0</code>:</p>\n            <table class=\"doc-table\">\n                <thead>\n                    <tr>\n                        <th>Operation</th>\n                        <th>Syntax</th>\n                        <th>Description &amp; Behavior</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td><strong>Element Read</strong></td>\n                        <td><code>items[0]</code></td>\n                        <td>Reads the element at index 0. Preserves native value and type.</td>\n                    </tr>\n                    <tr>\n                        <td><strong>Element Mutation</strong></td>\n                        <td><code>items[1]: \"New Value\"</code></td>\n                        <td>Mutates the element in-place. Supports replacing with any type.</td>\n                    </tr>\n                    <tr>\n                        <td><strong>Out-of-Bounds Trap</strong></td>\n                        <td><code>do display items[99] unless IndexOutOfBoundsError</code></td>\n                        <td>Accessing negative indices or index &gt;= count raises <code>IndexOutOfBoundsError</code> (Criticality 2/10).</td>\n                    </tr>\n                </tbody>\n            </table>\n\n            <div class=\"callout-box tip\">\n                <div class=\"callout-title\">💡 Element Mutation Semantics</div>\n                <p>Element assignment uses the standard VerScript colon operator: <code>items[idx]: new_val</code>. Memory management is handled automatically by the VM heap tracker.</p>\n            </div>\n\n            <h2>Native Array Methods (Zero Imports, camelCase)</h2>\n            <p>Arrays provide built-in native operations without requiring any library imports. All method names follow the strict <strong>camelCase</strong> standard:</p>\n            <table class=\"doc-table\">\n                <thead>\n                    <tr>\n                        <th>Method</th>\n                        <th>Syntax &amp; Example</th>\n                        <th>Description</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td><code>len()</code></td>\n                        <td><code>items.len()</code></td>\n                        <td>Returns the current element count of the array.</td>\n                    </tr>\n                    <tr>\n                        <td><code>push(val)</code></td>\n                        <td><code>items.push(42)</code></td>\n                        <td>Appends an element to the end of the array.</td>\n                    </tr>\n                    <tr>\n                        <td><code>pop()</code></td>\n                        <td><code>set last: items.pop()</code></td>\n                        <td>Removes and returns the last element.</td>\n                    </tr>\n                    <tr>\n                        <td><code>contains(val)</code></td>\n                        <td><code>items.contains(\"Paladin\")</code></td>\n                        <td>Returns 1 if value exists in array, 0 otherwise.</td>\n                    </tr>\n                    <tr>\n                        <td><code>indexOf(val)</code></td>\n                        <td><code>items.indexOf(2500)</code></td>\n                        <td>Returns 0-based index of first occurrence, or -1 if absent.</td>\n                    </tr>\n                    <tr>\n                        <td><code>slice(start, end)</code></td>\n                        <td><code>items.slice(0, 2)</code></td>\n                        <td>Returns a new sub-array from start index up to end index.</td>\n                    </tr>\n                    <tr>\n                        <td><code>reverse()</code></td>\n                        <td><code>items.reverse()</code></td>\n                        <td>Reverses array elements in-place.</td>\n                    </tr>\n                    <tr>\n                        <td><code>swap(i, j)</code></td>\n                        <td><code>items.swap(0, 2)</code></td>\n                        <td>Swaps elements at index i and j.</td>\n                    </tr>\n                    <tr>\n                        <td><code>join(sep)</code></td>\n                        <td><code>items.join(\" - \")</code></td>\n                        <td>Joins all elements into a formatted string with separator.</td>\n                    </tr>\n                    <tr>\n                        <td><code>clear()</code></td>\n                        <td><code>items.clear()</code></td>\n                        <td>Empties all elements from the array.</td>\n                    </tr>\n                    <tr>\n                        <td><code>isEmpty()</code></td>\n                        <td><code>items.isEmpty()</code></td>\n                        <td>Returns 1 if array length is 0, 0 otherwise.</td>\n                    </tr>\n                </tbody>\n            </table>\n        ",
        "codeBlocks": [
            {
                "id": "cb_ch21_1",
                "title": "arrays_demo.vrs",
                "code": "! VerScript Dynamic Heterogeneous Array Demonstration\narr hero_stats: [100, \"Paladin\", true, 2500]\n\ndisplay \"Initial Hero Stats:\" ?color=#38bdf8\ndisplay hero_stats ?color=#22c55e\n\ndisplay \"Class Name: \" + hero_stats[1] ?color=#a855f7\ndisplay \"HP: \" + hero_stats[0] ?color=#a855f7\n\n! In-place mutation\nhero_stats[0]: 85\nhero_stats[1]: \"Arch-Paladin\"\n\ndisplay \"Updated Stats after damage:\" ?color=#38bdf8\ndisplay hero_stats ?color=#22c55e\n\n! Safe boundary guard\ndo\n    display hero_stats[10]\nunless IndexOutOfBoundsError\n    display \"Protected from IndexOutOfBoundsError!\" ?color=#eab308"
            }
        ],
        "exercises": [
            {
                "id": "ex_ch21_1",
                "title": "Exercise 21.1: Declare and Mutate an Array",
                "prompt": "Declare an array <code>arr scores: [10, 20, 30]</code>. Mutate the second item (index 1) to <code>99</code>, and display the entire array.",
                "starterCode": "! Declare and mutate array\n",
                "hint": "Use `arr scores: [10, 20, 30]`, `scores[1]: 99`, and `display scores`.",
                "solution": "arr scores: [10, 20, 30]\nscores[1]: 99\ndisplay scores",
                "expectedMatch": {}
            }
        ]
    },
    {
        "id": "ch8-entities",
        "number": 8,
        "section": "Section 2: Language Foundations & Datatypes",
        "title": "Entities, Instances & Dynamic Objects",
        "category": "Datatypes",
        "readTime": "5 min read",
        "summary": "Explore dynamic entities: class instantiation, instance states, mutable dynamic properties, method binding, and string serialization.",
        "body": "\n    <h2>What is an Entity?</h2>\n    <p>An <strong>Entity</strong> is an instantiated, stateful object constructed from a <code>class</code> blueprint. Entities encapsulate static class constants and mutable dynamic instance fields.</p>\n\n    <h2>Instantiation &amp; Constructor Parameters</h2>\n    <p>Instantiating a class invokes its constructor, binding constructor arguments into the newly minted entity:</p>\n    <pre><code>class Point(x, y)\n  dynamic:\n    set posX: x\n    set posY: y\n\nset pt: Point(10, 25)\ndisplay \"Point coordinates: (\" + pt.posX + \", \" + pt.posY + \")\"</code></pre>\n\n    <h2>Dynamic Property Access &amp; Mutation</h2>\n    <p>Entity properties defined in the <code>dynamic:</code> section can be inspected and updated using standard dot notation:</p>\n    <pre><code>pt.posX: pt.posX + 5\ndisplay \"Updated X: \" + pt.posX</code></pre>\n\n    <h2>Encapsulation Protection</h2>\n    <p>Properties declared in the <code>static:</code> partition of a class without the <code>public</code> qualifier are strictly private and read-only. Attempting to mutate a static property throws an <code>ImmutableError</code>.</p>\n  ",
        "codeBlocks": [
            {
                "id": "cb_ent_1",
                "title": "entity_demo.vrs",
                "code": "class Robot(name, model)\n  dynamic:\n    set energy: 100\n    def method charge(amount)\n      energy: energy + amount\n      display name + \" charged! Energy: \" + energy\n\nset bot: Robot(\"Atlas\", \"Mk-IV\")\nbot.charge(25)"
            }
        ],
        "exercises": [
            {
                "id": "ex_ent_1",
                "title": "Exercise 8.1: Create an Entity",
                "prompt": "Define a class <code>Counter(start)</code> with dynamic property <code>val: start</code>. Create an instance with <code>10</code> and display <code>inst.val</code>.",
                "starterCode": "! TODO: Define Counter class and instantiate it\n",
                "hint": "Use `class Counter(start)` with `dynamic:` section setting `val: start`.",
                "solution": "class Counter(start)\n  dynamic:\n    set val: start\nset c: Counter(10)\ndisplay c.val",
                "expectedMatch": {}
            }
        ]
    },
    {
        "id": "ch7-prompt",
        "number": 9,
        "section": "Section 3: Execution Control & Branching",
        "title": "Interactive Input & Prompt Attributes",
        "category": "Input & Output",
        "readTime": "4 min read",
        "summary": "Capture interactive user input from standard input with dynamic fallback default attributes.",
        "body": "\n            <h2>The <code>prompt</code> Keyword</h2>\n            <p>The <code>prompt</code> keyword pauses script execution and reads a line from standard input into a target variable.</p>\n\n            <h2>Attributes for <code>prompt</code></h2>\n            <table class=\"doc-table\">\n                <thead>\n                    <tr>\n                        <th>Attribute</th>\n                        <th>Type</th>\n                        <th>Description</th>\n                        <th>Syntax Example</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td><code>?default</code></td>\n                        <td>String / Number</td>\n                        <td>Provides a default fallback value if the user provides empty input (presses Enter without typing).</td>\n                        <td><code>prompt username ?default=\"Guest\"</code></td>\n                    </tr>\n                </tbody>\n            </table>\n\n            <h2>Automatic Type Coercion</h2>\n            <p>If the user enters digits (e.g. <code>42</code>), the runtime automatically parses the value as an <code>Integer</code>. If non-numeric characters are present, it stores a <code>String</code>.</p>\n        ",
        "codeBlocks": [
            {
                "id": "cb_prompt_1",
                "title": "prompt_demo.vrs",
                "code": "! Prompt with default fallback\nprompt username ?default=\"Operator\"\ndisplay \"Welcome, \" + username ?color=\"cyan\"\n\nprompt level ?default=\"1\"\ndisplay \"User Level: \" + level ?color=\"yellow\""
            }
        ],
        "exercises": [
            {
                "id": "ex_prompt_1",
                "title": "Exercise 7.1: User Prompt with Default",
                "prompt": "Prompt for <code>heroName</code> with default <code>?default=\"Anonymous\"</code>, then display <code>\"Hero: \" + heroName</code> in green.",
                "starterCode": "! TODO: Prompt heroName with ?default=\"Anonymous\" and display in green\n",
                "hint": "Use `prompt heroName ?default=\"Anonymous\"`.",
                "solution": "prompt heroName ?default=\"Anonymous\"\ndisplay \"Hero: \" + heroName ?color=\"green\"",
                "expectedMatch": {}
            },
            {
                "id": "ex_prompt_2",
                "title": "Exercise 7.2: Numeric Config Prompt",
                "prompt": "Prompt for <code>port</code> with default <code>?default=\"8080\"</code>, and display <code>\"Listening on port: \" + port</code> in cyan.",
                "starterCode": "! TODO: Prompt port with default 8080 and display\n",
                "hint": "Use `prompt port ?default=\"8080\"`.",
                "solution": "prompt port ?default=\"8080\"\ndisplay \"Listening on port: \" + port ?color=\"cyan\"",
                "expectedMatch": {}
            },
            {
                "id": "ex_prompt_3",
                "title": "Exercise 7.3: Interactive Greeting Pipeline",
                "prompt": "Prompt for <code>city</code> with default <code>\"Neo-Tokyo\"</code>, and display <code>\"Connected to: \" + city</code> with hex color <code>?color=#00e5ff</code>.",
                "starterCode": "! TODO: Prompt city ?default=\"Neo-Tokyo\" and display with ?color=#00e5ff\n",
                "hint": "Use `prompt city ?default=\"Neo-Tokyo\"` and display.",
                "solution": "prompt city ?default=\"Neo-Tokyo\"\ndisplay \"Connected to: \" + city ?color=#00e5ff",
                "expectedMatch": {}
            }
        ]
    },
    {
        "id": "ch8-conditionals",
        "number": 10,
        "section": "Section 3: Execution Control & Branching",
        "title": "Conditional Branching & Guards",
        "category": "Control Flow",
        "readTime": "5 min read",
        "summary": "Master multi-branch logic using if-then, else-if-then, and else blocks.",
        "body": "\n            <h2>Conditional Syntax</h2>\n            <p>VerScript uses declarative <code>if ... then</code> statements scoped by indentation:</p>\n            <div class=\"code-block\">if score >= 90 then\n    display \"Grade: A\" ?color=\"green\"\nelse if score >= 80 then\n    display \"Grade: B\" ?color=\"yellow\"\nelse\n    display \"Grade: C\" ?color=\"red\"</div>\n\n            <div class=\"callout-box tip\">\n                <div class=\"callout-title\">💡 Indentation Rule</div>\n                <p>All statements inside the <code>then</code> or <code>else</code> branch must be indented by 2 or 4 spaces relative to the <code>if</code> keyword.</p>\n            </div>\n        ",
        "codeBlocks": [
            {
                "id": "cb_cond_1",
                "title": "conditionals.vrs",
                "code": "health : 35\n\nif health > 70 then\n    display \"Condition: Healthy\" ?color=\"green\"\nelse if health > 30 then\n    display \"Condition: Caution (Injured)\" ?color=\"yellow\"\nelse\n    display \"Condition: Critical!\" ?color=\"red\""
            }
        ],
        "exercises": [
            {
                "id": "ex_cond_1",
                "title": "Exercise 8.1: Access Gatekeeper",
                "prompt": "Given <code>accessLevel : 5</code>, write an <code>if accessLevel >= 5 then</code> block to display <code>\"Access Granted\"</code> in green, otherwise display <code>\"Access Denied\"</code> in red.",
                "starterCode": "accessLevel : 5\n! TODO: Write if accessLevel >= 5 then ... else ...\n",
                "hint": "Indent the display command inside the `if` block.",
                "solution": "accessLevel : 5\nif accessLevel >= 5 then\n    display \"Access Granted\" ?color=\"green\"\nelse\n    display \"Access Denied\" ?color=\"red\"",
                "expectedMatch": {}
            },
            {
                "id": "ex_cond_2",
                "title": "Exercise 8.2: Multi-tier Score Evaluation",
                "prompt": "Evaluate <code>points : 88</code>: if points >= 90 print <code>\"Gold\"</code> in yellow, else if points >= 75 print <code>\"Silver\"</code> in cyan, else print <code>\"Bronze\"</code> in red.",
                "starterCode": "points : 88\n! TODO: Implement 3-tier branch\n",
                "hint": "Use `else if points >= 75 then`.",
                "solution": "points : 88\nif points >= 90 then\n    display \"Gold\" ?color=\"yellow\"\nelse if points >= 75 then\n    display \"Silver\" ?color=\"cyan\"\nelse\n    display \"Bronze\" ?color=\"red\"",
                "expectedMatch": {}
            },
            {
                "id": "ex_cond_3",
                "title": "Exercise 8.3: Boolean Condition Evaluation",
                "prompt": "Given <code>isServerActive : true</code>, test <code>if isServerActive then</code> and display <code>\"Online\"</code> in green.",
                "starterCode": "isServerActive : true\n! TODO: Check boolean condition and display \"Online\"\n",
                "hint": "Use `if isServerActive then` directly.",
                "solution": "isServerActive : true\nif isServerActive then\n    display \"Online\" ?color=\"green\"",
                "expectedMatch": {}
            }
        ]
    },
    {
        "id": "ch11-loops-iterations",
        "number": 11,
        "section": "Section 3: Execution Control & Branching",
        "title": "Loops & Iterations (loop, iterate, while, until)",
        "category": "Control Flow",
        "readTime": "7 min read",
        "summary": "Comprehensive guide to repetition in VerScript: fixed count loops, range iterations, while guards, and until loops.",
        "body": "\n    <h2>The Four Iteration Constructs</h2>\n    <p>VerScript offers four complementary iteration statements designed for every repetitive computing pattern:</p>\n    <ul>\n      <li><code>loop &lt;count&gt;</code> — Fixed iteration repeating a block N times.</li>\n      <li><code>iterate &lt;var&gt; from &lt;start&gt; to &lt;end&gt; [step &lt;n&gt;]</code> — Deterministic sequence iteration with loop index.</li>\n      <li><code>while &lt;condition&gt;</code> — Guard loop that executes as long as condition evaluates to true.</li>\n      <li><code>until &lt;condition&gt;</code> — Inverse guard loop that executes until condition becomes true.</li>\n    </ul>\n\n    <h2>Stepped Iteration</h2>\n    <pre><code>iterate i from 0 to 10 step 2\n  display \"Even number: \" + i</code></pre>\n\n    <h2>Iterating Over Collections</h2>\n    <p>To iterate over an array in VerScript, combine <code>iterate</code> with collection indexing:</p>\n    <pre><code>set fruits: [\"Apple\", \"Banana\", \"Cherry\"]\niterate i from 0 to fruits.length() - 1\n  display \"Fruit \" + i + \": \" + fruits[i]</code></pre>\n  ",
        "codeBlocks": [
            {
                "id": "cb_loops_all",
                "title": "loops_comprehensive.vrs",
                "code": "display \"=== 1. Fixed Loop ===\"\nloop 3\n  display \"Ping!\" ?color=\"cyan\"\n\ndisplay \"=== 2. Range Iterate ===\"\niterate k from 1 to 4 step 1\n  display \"Step: \" + k\n\ndisplay \"=== 3. While Loop ===\"\nset n: 3\nwhile n > 0\n  display \"Countdown: \" + n\n  n: n - 1"
            }
        ],
        "exercises": [
            {
                "id": "ex_loop_1",
                "title": "Exercise 11.1: Sum with Iterate",
                "prompt": "Using <code>iterate i from 1 to 5</code>, calculate the sum of numbers from 1 to 5 and display the total.",
                "starterCode": "! TODO: Calculate sum 1+2+3+4+5 using iterate\n",
                "hint": "Initialize `set total: 0`, loop with `iterate i from 1 to 5`, add `total: total + i`, and display total.",
                "solution": "set total: 0\niterate i from 1 to 5\n  set total: total + i\ndisplay total",
                "expectedMatch": {}
            }
        ]
    },
    {
        "id": "ch12-functions-purity",
        "number": 12,
        "section": "Section 4: Procedures, Routines & Purity",
        "title": "Custom Functions & Inbound Purity Contracts",
        "category": "Procedures",
        "readTime": "5 min read",
        "summary": "Define custom functions with 'def func', return values via 'reply', and enforce pure inbound contracts preventing side-effects.",
        "body": "\n    <h2>Defining Functions</h2>\n    <p>Functions in VerScript are defined using <code>def func &lt;name&gt; [params...]</code>. Functions return values to their callers using the <code>reply</code> statement.</p>\n\n    <div class=\"callout-box tip\">\n      <div class=\"callout-title\">💡 The 'inbound' Purity Contract</div>\n      <p>By default, all <code>func</code> definitions have <strong>inbound purity</strong>. An inbound function cannot mutate variables defined outside its own lexical scope. Attempting to modify an outer variable triggers a compile-time or runtime <code>ScopeViolationError</code>.</p>\n    </div>\n\n    <h2>Calling Functions</h2>\n    <p>Functions can be invoked in expressions using parenthesized argument lists:</p>\n    <pre><code>def func square(x)\n  reply x * x\n\nset sq: square(8)\ndisplay \"Square of 8 is \" + sq</code></pre>\n  ",
        "codeBlocks": [
            {
                "id": "cb_fn_1",
                "title": "pure_function.vrs",
                "code": "def func calculateTax(subtotal, rate)\n  reply (subtotal * rate) / 100\n\nset tax: calculateTax(250, 8)\ndisplay \"Tax on $250 at 8%: $\" + tax ?color=\"green\""
            }
        ],
        "exercises": [
            {
                "id": "ex_fn_1",
                "title": "Exercise 12.1: Write a Function",
                "prompt": "Define a function <code>def func add(a, b)</code> that returns the sum of <code>a</code> and <code>b</code>. Call <code>add(17, 23)</code> and display the result.",
                "starterCode": "! TODO: Define add function and display add(17, 23)\n",
                "hint": "Use `def func add(a, b)` with `reply a + b` inside.",
                "solution": "def func add(a, b)\n  reply a + b\ndisplay add(17, 23)",
                "expectedMatch": {}
            }
        ]
    },
    {
        "id": "ch13-methods-outbound",
        "number": 13,
        "section": "Section 4: Procedures, Routines & Purity",
        "title": "Methods & Outbound State Mutation",
        "category": "Procedures",
        "readTime": "5 min read",
        "summary": "Understand procedural methods declared with 'def method', outbound state mutations, and early exit replies.",
        "body": "\n    <h2>The Difference Between Func and Method</h2>\n    <p>In VerScript, functions (<code>func</code>) and methods (<code>method</code>) serve distinct, complementary roles:</p>\n    <table class=\"doc-table\">\n      <thead>\n        <tr><th>Feature</th><th><code>def func</code></th><th><code>def method</code></th></tr>\n      </thead>\n      <tbody>\n        <tr><td><strong>Primary Goal</strong></td><td>Compute and return a value</td><td>Perform procedural actions and side-effects</td></tr>\n        <tr><td><strong>Default Purity</strong></td><td>Inbound (pure, no outer mutation)</td><td>Outbound (allowed to mutate outer state)</td></tr>\n        <tr><td><strong>Value Return</strong></td><td>Must return value via <code>reply &lt;val&gt;</code></td><td>Cannot return value (early exit via bare <code>reply</code>)</td></tr>\n        <tr><td><strong>Expression Use</strong></td><td>Can be used in expressions <code>a + f(x)</code></td><td>Called as standalone statement <code>m(x)</code></td></tr>\n      </tbody>\n    </table>\n  ",
        "codeBlocks": [
            {
                "id": "cb_meth_1",
                "title": "outbound_method.vrs",
                "code": "set globalCounter: 0\n\ndef method increment(amount)\n  set globalCounter: globalCounter + amount\n  display \"Counter bumped to: \" + globalCounter\n\nincrement(5)\nincrement(10)"
            }
        ],
        "exercises": [
            {
                "id": "ex_meth_1",
                "title": "Exercise 13.1: State Mutation",
                "prompt": "Define variable <code>level: 1</code> and a method <code>def method levelUp()</code> that increments <code>level</code> by 1. Call <code>levelUp()</code> and display <code>level</code>.",
                "starterCode": "! TODO: Define level and levelUp method\n",
                "hint": "In method body: `set level: level + 1`.",
                "solution": "set level: 1\ndef method levelUp()\n  set level: level + 1\nlevelUp()\ndisplay level",
                "expectedMatch": {}
            }
        ]
    },
    {
        "id": "ch14-recursion-stack",
        "number": 14,
        "section": "Section 4: Procedures, Routines & Purity",
        "title": "Recursive Routines & Call Stack Dynamics",
        "category": "Procedures",
        "readTime": "5 min read",
        "summary": "Design recursive algorithms in VerScript, understand base cases, call frames, and stack overflow protections.",
        "body": "\n    <h2>Recursive Architecture</h2>\n    <p>Functions in VerScript are re-entrant. A function can invoke itself, allocating an independent call frame with its own local scope.</p>\n\n    <h2>Classic Factorial Example</h2>\n    <pre><code>def func factorial(n)\n  if n <= 1 then\n    reply 1\n  set sub: (factorial(n - 1))\n  reply n * sub\n\ndisplay \"Factorial 5: \" + (factorial(5))</code></pre>\n\n    <h2>Stack Overflow Protection</h2>\n    <p>To prevent infinite loops from exhausting physical memory, the VerScript VM enforces a strict stack depth limit of 64 recursive frames. Exceeding this boundary throws a catchable <code>SystemError</code>.</p>\n  ",
        "codeBlocks": [
            {
                "id": "cb_rec_1",
                "title": "fibonacci_recursion.vrs",
                "code": "def func fib(n)\n  if n <= 1 then\n    reply n\n  set a: (fib(n - 1))\n  set b: (fib(n - 2))\n  reply a + b\n\ndisplay \"Fibonacci(7): \" + (fib(7))"
            }
        ],
        "exercises": [
            {
                "id": "ex_rec_1",
                "title": "Exercise 14.1: Recursive Countdown Sum",
                "prompt": "Write a recursive function <code>def func sumTo(n)</code> that returns <code>n + sumTo(n - 1)</code> (base case <code>n = 1</code> returns <code>1</code>). Display <code>sumTo(4)</code>.",
                "starterCode": "! TODO: Write recursive sumTo(n) function\n",
                "hint": "If `n <= 1` reply 1; else reply `n + (sumTo(n - 1))`.",
                "solution": "def func sumTo(n)\n  if n <= 1 then\n    reply 1\n  set s: (sumTo(n - 1))\n  reply n + s\ndisplay sumTo(4)",
                "expectedMatch": {}
            }
        ]
    },
    {
        "id": "ch15-classes-encapsulation",
        "number": 15,
        "section": "Section 5: Object-Oriented Architecture",
        "title": "Classes & Encapsulation (static vs dynamic sections)",
        "category": "OOP",
        "readTime": "6 min read",
        "summary": "Master class definitions in VerScript: static class constants, public and private modifiers, dynamic instance state, and encapsulation rules.",
        "body": "\n    <h2>The Class Blueprint</h2>\n    <p>Classes in VerScript are defined using <code>class ClassName(param1, param2)</code>. The class body is structured into strictly delineated partitions:</p>\n    <ul>\n      <li><code>static:</code> — Class-level constants and immutable configurations shared by all instances.</li>\n      <li><code>dynamic:</code> — Instance-level mutable properties and member routines (<code>def func</code>, <code>def method</code>).</li>\n    </ul>\n\n    <h2>Visibility Modifiers: public vs private</h2>\n    <p>In the <code>static:</code> partition, members are private by default. Prefixing with <code>public</code> exposes the constant for external read access via <code>ClassName.member</code>:</p>\n    <pre><code>class Config\n  static:\n    public maxConnections: 100\n    private secretKey: \"vx-9901\"\n\ndisplay \"Max allowed: \" + Config.maxConnections</code></pre>\n\n    <div class=\"callout-box tip\">\n      <div class=\"callout-title\">💡 Dedicated Library Portal</div>\n      <p>Looking to explore reusable modules and core classes? Visit the dedicated <a href=\"/docs/libs\" target=\"_blank\"><strong>VerScript Library Portal (/docs/libs)</strong></a> for interactive documentation on all standard release libraries.</p>\n    </div>\n  ",
        "codeBlocks": [
            {
                "id": "cb_cls_1",
                "title": "class_definition.vrs",
                "code": "class BankAccount(owner, initialBalance)\n  static:\n    public currency: \"USD\"\n    public minDeposit: 10\n  dynamic:\n    set balance: initialBalance\n    def method deposit(amount)\n      if amount >= BankAccount.minDeposit then\n        balance: balance + amount\n        display \"Deposited $\" + amount + \". New balance: $\" + balance\n\nset acct: BankAccount(\"Alice\", 500)\nacct.deposit(100)"
            }
        ],
        "exercises": [
            {
                "id": "ex_cls_1",
                "title": "Exercise 15.1: Class with Public Static",
                "prompt": "Define a class <code>Car</code> with a <code>static:</code> section containing <code>public wheels: 4</code>. Display <code>Car.wheels</code>.",
                "starterCode": "! TODO: Define Car class with public static wheels\n",
                "hint": "Use `class Car` followed by `static:` indented with `public wheels: 4`.",
                "solution": "class Car\n  static:\n    public wheels: 4\ndisplay Car.wheels",
                "expectedMatch": {}
            }
        ]
    },
    {
        "id": "ch16-entity-lifecycle",
        "number": 16,
        "section": "Section 5: Object-Oriented Architecture",
        "title": "Entity Lifecycle, Method Binding & Instantiation",
        "category": "OOP",
        "readTime": "5 min read",
        "summary": "Understand instance creation, lexical method binding, instance mutation, and private routine isolation in entities.",
        "body": "\n    <h2>Instantiation Lifecycle</h2>\n    <p>When an entity is instantiated via <code>set inst: MyClass(args...)</code>, the VM executes a two-phase initialization sequence:</p>\n    <ol>\n      <li><strong>Allocation &amp; Binding</strong>: The VM allocates the entity structure, clones class metadata, and binds constructor arguments.</li>\n      <li><strong>Method Table Registration</strong>: Member routines declared in <code>dynamic:</code> are bound to the instance so that references to instance variables resolve automatically.</li>\n    </ol>\n  ",
        "codeBlocks": [
            {
                "id": "cb_life_1",
                "title": "entity_methods.vrs",
                "code": "class User(username, role)\n  dynamic:\n    set active: true\n    def func getBadge()\n      reply \"[\" + role + \"] \" + username\n    def method deactivate()\n      active: false\n      display username + \" has been deactivated.\"\n\nset u: User(\"Elena\", \"Engineer\")\ndisplay u.getBadge()\nu.deactivate()"
            }
        ],
        "exercises": [
            {
                "id": "ex_life_1",
                "title": "Exercise 16.1: Instance Method",
                "prompt": "Create a class <code>Greeter(name)</code> with dynamic method <code>def method sayHi()</code> that displays <code>\"Hi \" + name</code>. Instantiate with <code>\"Maya\"</code> and call <code>sayHi()</code>.",
                "starterCode": "! TODO: Define Greeter class and call sayHi\n",
                "hint": "Inside `dynamic:` define `def method sayHi()` with `display \"Hi \" + name`.",
                "solution": "class Greeter(name)\n  dynamic:\n    def method sayHi()\n      display \"Hi \" + name\nset g: Greeter(\"Maya\")\ng.sayHi()",
                "expectedMatch": {}
            }
        ]
    },
    {
        "id": "ch17-metaprogramming-meta",
        "number": 17,
        "section": "Section 5: Object-Oriented Architecture",
        "title": "Metaprogramming & Internal 'meta' Components",
        "category": "OOP",
        "readTime": "7 min read",
        "summary": "Complete guide to VerScript's internal metadata architecture: static, dynamic, and thisstatic partitions, ?override modifiers, auto-diagnostics, and strict visibility protections.",
        "body": "\n    <h2>Internal Metadata Architecture</h2>\n    <p>VerScript introduces a secure, encapsulated <strong>metaprogramming component</strong> for libraries and classes. Metadata allows components to track build tags, runtime diagnostic counters, versions, and author metadata without leaking implementation details.</p>\n\n    <div class=\"callout-box warning\">\n      <div class=\"callout-title\">🔒 Strict Internal Encapsulation Rule</div>\n      <p>Metadata is <strong>strictly internal</strong> to the library or class definition. External access via <code>MyLib.meta</code> or <code>myInst.meta</code> throws a non-bypassable <code>VisibilityError</code>.</p>\n    </div>\n\n    <h2>The Three Metadata Partitions</h2>\n    <p>A <code>meta:</code> block contains up to three specialized sub-partitions:</p>\n    <table class=\"doc-table\">\n      <thead>\n        <tr><th>Partition</th><th>Mutability</th><th>Scope &amp; Lifecycle</th><th>Access Syntax</th></tr>\n      </thead>\n      <tbody>\n        <tr><td><code>static:</code></td><td><strong>Immutable</strong></td><td>Fixed configuration, author, and revision metadata. Mutating throws <code>ImmutableError</code>.</td><td><code>meta.static.key</code></td></tr>\n        <tr><td><code>dynamic:</code></td><td><strong>Mutable</strong></td><td>Internal runtime counters, cache tables, and state indicators. Modifiable via <code>meta.dynamic.key: val</code>.</td><td><code>meta.dynamic.key</code></td></tr>\n        <tr><td><code>thisstatic:</code></td><td><strong>Immutable</strong></td><td>Session/instance identifiers initialized once at load or instantiation time. Mutating throws <code>ImmutableError</code>.</td><td><code>meta.thisstatic.key</code></td></tr>\n      </tbody>\n    </table>\n\n    <h2>Automatic System Metadata</h2>\n    <p>Unless overridden, VerScript automatically injects diagnostic system properties into every component:</p>\n    <ul>\n      <li><code>meta.static.name</code> — Component name (e.g. <code>\"MathEx\"</code>).</li>\n      <li><code>meta.static.kind</code> — Component kind (<code>\"library\"</code> or <code>\"class\"</code>).</li>\n      <li><code>meta.static.version</code> — Semantic version tag (default: <code>\"1.0.0\"</code>).</li>\n      <li><code>meta.static.origin</code> — Origin source identifier (e.g. <code>\"core\"</code> or <code>\"source\"</code>).</li>\n      <li><code>meta.static.symbols</code> — Number of exported routines and properties.</li>\n      <li><code>meta.dynamic.loadCount</code> — Number of times the module was invoked.</li>\n      <li><code>meta.thisstatic.loadedAt</code> — Monotonic runtime execution sequence ID.</li>\n    </ul>\n\n    <h2>The '?override' Modifiers</h2>\n    <p>To strip default system metadata and create completely clean, lightweight components, use the override attributes:</p>\n    <ul>\n      <li><code>meta ?override:</code> — Strips all auto-generated system metadata.</li>\n      <li><code>static ?override:</code> — Strips only static auto-metadata while preserving dynamic telemetry.</li>\n    </ul>\n\n    <div class=\"callout-box tip\">\n      <div class=\"callout-title\">📦 Production Core Libraries Architecture</div>\n      <p>To see how internal <code>meta:</code> components, telemetry counters, and version diagnostics are used across real-world libraries, visit the <a href=\"libs/index.html\"><strong>VerScript Library Documentation Portal (/docs/libs)</strong></a>.</p>\n    </div>\n  ",
        "codeBlocks": [
            {
                "id": "cb_meta_1",
                "title": "metadata_example.vrs",
                "code": "lib ServiceTelemetry\n  meta:\n    static:\n      author: \"Cloud Platform Team\"\n      revision: 42\n    dynamic:\n      requestCount: 0\n    thisstatic:\n      environment: \"PRODUCTION\"\n  dynamic:\n    def method recordRequest()\n      meta.dynamic.requestCount: meta.dynamic.requestCount + 1\n      display \"Request logged. Total: \" + meta.dynamic.requestCount\n    def func getRevision()\n      reply meta.static.revision\n\nServiceTelemetry.recordRequest()\nServiceTelemetry.recordRequest()\ndisplay \"Build Revision: \" + (ServiceTelemetry.getRevision())"
            }
        ],
        "exercises": [
            {
                "id": "ex_meta_1",
                "title": "Exercise 17.1: Internal Metadata Counter",
                "prompt": "Create a library <code>CounterLib</code> with a <code>meta:</code> section containing <code>dynamic: hits: 0</code>. In its <code>dynamic:</code> routine, write a method <code>bump()</code> that increments <code>meta.dynamic.hits: meta.dynamic.hits + 1</code> and displays it.",
                "starterCode": "! TODO: Create CounterLib with metadata counter\n",
                "hint": "Use `meta:` with `dynamic: hits: 0`, and `meta.dynamic.hits: meta.dynamic.hits + 1` inside `bump()`.",
                "solution": "lib CounterLib\n  meta:\n    dynamic:\n      hits: 0\n  dynamic:\n    def method bump()\n      meta.dynamic.hits: meta.dynamic.hits + 1\n      display meta.dynamic.hits\nCounterLib.bump()",
                "expectedMatch": {}
            }
        ]
    },
    {
        "id": "ch18-libraries-distribution",
        "number": 18,
        "section": "Section 6: Modular Systems & Code Organization",
        "title": "Libraries (.lib.vrs) & Core Distribution",
        "category": "Modules",
        "readTime": "6 min read",
        "summary": "Organize reusable modules with '.lib.vrs' naming, resolve embedded core libraries, and explore the dedicated library portal.",
        "body": "\n    <h2>The '.lib.vrs' Convention</h2>\n    <p>VerScript establishes <code>*.lib.vrs</code> as the official file extension for external library files, ensuring standard <code>*.vrs</code> syntax highlighting and tooling compatibility across all editors.</p>\n\n    <div class=\"callout-box tip\">\n      <div class=\"callout-title\">🌐 Dedicated Library Portal</div>\n      <p>Explore the comprehensive suite of 20+ core and community release libraries at the new <a href=\"libs/index.html\"><strong>VerScript Library Documentation Portal (/docs/libs)</strong></a>.</p>\n    </div>\n\n    <h2>Loading Libraries</h2>\n    <p>The <code>load</code> statement searches for libraries using a smart resolution pipeline:</p>\n    <ol>\n      <li><strong>Embedded Core Library</strong>: If target is a built-in module (e.g. <code>Math</code>, <code>Stats</code>, <code>Assert</code>, <code>Time</code>), it loads instantly from virtual memory.</li>\n      <li><strong>Direct File</strong>: <code>&lt;target&gt;</code></li>\n      <li><strong>Library Extension</strong>: <code>&lt;target&gt;.lib.vrs</code></li>\n      <li><strong>Core Libraries Subdirectory</strong>: <code>core_libs/&lt;target&gt;.lib.vrs</code></li>\n      <li><strong>Standard Script</strong>: <code>&lt;target&gt;.vrs</code></li>\n    </ol>\n  ",
        "codeBlocks": [
            {
                "id": "cb_lib_1",
                "title": "load_libraries.vrs",
                "code": "load Stats\nload Math\n\nset numbers: [10, 20, 30, 40]\ndisplay \"Sum:  \" + (Stats.sum numbers)\ndisplay \"Mean: \" + (Stats.mean numbers)\ndisplay \"Abs:  \" + (Math.abs -42)"
            }
        ],
        "exercises": [
            {
                "id": "ex_lib_1",
                "title": "Exercise 18.1: Load and Use Stats",
                "prompt": "Load the embedded <code>Stats</code> library, calculate the sum of <code>[5, 15, 25]</code>, and display the result.",
                "starterCode": "! TODO: Load Stats and calculate sum of [5, 15, 25]\n",
                "hint": "Use `load Stats`, then `display Stats.sum nums`.",
                "solution": "load Stats\nset nums: [5, 15, 25]\ndisplay Stats.sum nums",
                "expectedMatch": {}
            }
        ]
    },
    {
        "id": "ch19-imports-namespaces",
        "number": 19,
        "section": "Section 6: Modular Systems & Code Organization",
        "title": "Unqualified Imports & Namespaces",
        "category": "Modules",
        "readTime": "5 min read",
        "summary": "Understand symbol resolution, unqualified routine access, namespace collision mitigation, and library scope boundaries.",
        "body": "\n    <h2>Namespace Architecture</h2>\n    <p>When a library is loaded via <code>load MyLib</code>, its exported routines and public constants are accessible both qualified (<code>MyLib.routine()</code>) and, where unambiguous, unqualified.</p>\n  ",
        "codeBlocks": [
            {
                "id": "cb_ns_1",
                "title": "namespaces.vrs",
                "code": "load Math\ndisplay \"Qualified: \" + (Math.abs(-50))\ndisplay \"Unqualified: \" + (abs(-50))"
            }
        ],
        "exercises": [
            {
                "id": "ex_ns_1",
                "title": "Exercise 19.1: Unqualified Call",
                "prompt": "Load <code>Math</code> and compute <code>max(100, 250)</code> directly without prefix. Display the result.",
                "starterCode": "! TODO: Call max(100, 250) after loading Math\n",
                "hint": "Use `load Math` and `display max(100, 250)`.",
                "solution": "load Math\ndisplay max(100, 250)",
                "expectedMatch": {}
            }
        ]
    },
    {
        "id": "ch17-inject",
        "number": 20,
        "section": "Section 6: Modular Systems & Code Organization",
        "title": "Polyglot Code Injection (100+ Languages)",
        "category": "Metaprogramming",
        "readTime": "7 min read",
        "summary": "Embed and execute source code from over 100 major languages directly inside VerScript scripts.",
        "body": "\n            <h2>The <code>inject</code> Keyword</h2>\n            <p>The <code>inject</code> statement enables polyglot execution. You can embed raw source code from over 100 programming languages (Python, JavaScript, Rust, C, Go, Java, TypeScript, Ruby, Shell, etc.) seamlessly.</p>\n\n            <h2>Attributes for <code>inject</code></h2>\n            <table class=\"doc-table\">\n                <thead>\n                    <tr>\n                        <th>Attribute</th>\n                        <th>Type</th>\n                        <th>Description</th>\n                        <th>Syntax Example</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td><code>?color</code></td>\n                        <td><code>\"name\"</code> or <code>#hex</code></td>\n                        <td>Colors execution status tags in terminal output.</td>\n                        <td><code>inject python ?color=\"cyan\"</code></td>\n                    </tr>\n                </tbody>\n            </table>\n\n            <h2>Dynamic <code>eval</code> via <code>inject verscript</code></h2>\n            <p>Passing <code>inject verscript</code> (or <code>inject vrs</code> / <code>inject eval</code>) evaluates embedded VerScript code dynamically within the current runtime scope, just like JavaScript's <code>eval()</code>.</p>\n        ",
        "codeBlocks": [
            {
                "id": "cb_inject_1",
                "title": "polyglot_demo.vrs",
                "code": "! 1. Python Code Injection\ninject python ?color=\"yellow\"\n    def calculate_fib(n):\n        return n if n <= 1 else calculate_fib(n-1) + calculate_fib(n-2)\n    print(\"Python Fibonacci Result:\", calculate_fib(10))\n\n! 2. JavaScript Code Injection\ninject javascript ?color=\"cyan\"\n    const sum = [10, 20, 30].reduce((a, b) => a + b, 0);\n    console.log(\"JS Sum:\", sum);\n\n! 3. Dynamic VerScript Eval\ninject verscript\n    eval_msg : \"Evaluated inside dynamic VerScript sub-scope!\"\n    display eval_msg ?color=\"green\""
            }
        ],
        "exercises": [
            {
                "id": "ex_inj_1",
                "title": "Exercise 17.1: Inject Python Script",
                "prompt": "Embed a Python code snippet that calculates <code>2 ** 8</code> using <code>inject python</code>.",
                "starterCode": "! TODO: Write an inject python block\n",
                "hint": "Use `inject python` followed by indented python code.",
                "solution": "inject python ?color=\"yellow\"\n    val = 2 ** 8\n    print(\"Power:\", val)",
                "expectedMatch": {}
            },
            {
                "id": "ex_inj_2",
                "title": "Exercise 17.2: Dynamic VerScript Sub-Execution",
                "prompt": "Use <code>inject verscript</code> to evaluate a dynamic block that sets <code>dyn : 777</code> and displays <code>\"Dynamic Value: \" + dyn</code> in green.",
                "starterCode": "! TODO: Write inject verscript block\n",
                "hint": "Use `inject verscript` with indented VerScript commands.",
                "solution": "inject verscript\n    dyn : 777\n    display \"Dynamic Value: \" + dyn ?color=\"green\"",
                "expectedMatch": {}
            },
            {
                "id": "ex_inj_3",
                "title": "Exercise 17.3: Inject Rust / C Algorithms",
                "prompt": "Embed a Rust function signature inside an <code>inject rust</code> block with <code>?color=\"cyan\"</code>.",
                "starterCode": "! TODO: Write inject rust with ?color=\"cyan\"\n",
                "hint": "Use `inject rust ?color=\"cyan\"`.",
                "solution": "inject rust ?color=\"cyan\"\n    fn compute() -> i32 { 42 }",
                "expectedMatch": {}
            }
        ]
    },
    {
        "id": "ch13-do-unless",
        "number": 21,
        "section": "Section 7: Robustness, Errors & Testing",
        "title": "Try-Unless Architecture & Watch Guards",
        "category": "Exception Handling",
        "readTime": "6 min read",
        "summary": "Harness VerScript's signature do-unless construct, internal reactive line-by-line watch guards, and external condition gates.",
        "body": "\n            <h2>The <code>do ... unless</code> Paradigm</h2>\n            <p>In VerScript, exception handling and condition-gated execution are unified in the <code>do ... unless</code> statement.</p>\n\n            <h2>Mode Modifiers for <code>unless</code></h2>\n            <table class=\"doc-table\">\n                <thead>\n                    <tr>\n                        <th>Modifier</th>\n                        <th>Execution Model</th>\n                        <th>Description</th>\n                        <th>Syntax Example</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td><code>internal</code></td>\n                        <td>Reactive Watch Guard</td>\n                        <td>Monitors expression line-by-line. If condition becomes true after ANY line, execution of <code>do</code> immediately halts and transfers to <code>unless</code>.</td>\n                        <td><code>do<br>&nbsp;&nbsp;...<br>unless internal pressure &gt; 100</code></td>\n                    </tr>\n                    <tr>\n                        <td><code>external</code></td>\n                        <td>Gatekeeper Guard</td>\n                        <td>Evaluates expression once beforehand. If true, runs <code>unless</code> block; if false, runs <code>do</code> block.</td>\n                        <td><code>do<br>&nbsp;&nbsp;...<br>unless external isLocked = true</code></td>\n                    </tr>\n                    <tr>\n                        <td><em>(Default Error)</em></td>\n                        <td>Error Catch Guard</td>\n                        <td>Catches exceptions thrown inside the <code>do</code> block matching an error name or universal <code>error</code>.</td>\n                        <td><code>do<br>&nbsp;&nbsp;...<br>unless DivisionByZeroError</code></td>\n                    </tr>\n                </tbody>\n            </table>\n        ",
        "codeBlocks": [
            {
                "id": "cb_dounless_1",
                "title": "do_unless_demo.vrs",
                "code": "! 1. Reactive Internal Watch Condition\ntemp : 80\ndo\n    display \"Checking reactor core...\" ?color=\"cyan\"\n    temp : temp + 40\n    display \"This line will NOT execute because temp exceeded 100!\" ?color=\"red\"\nunless internal temp > 100\n    display \"WATCHDOG TRIGGERED: Temperature reached \" + temp ?color=\"yellow\"\n\n! 2. Error Catching\ndo\n    display \"Dividing by zero...\" ?color=\"cyan\"\n    bad_val : 100 / 0\nunless DivisionByZeroError\n    display \"Safely caught DivisionByZeroError!\" ?color=\"green\""
            }
        ],
        "exercises": [
            {
                "id": "ex_dounless_1",
                "title": "Exercise 13.1: Catch Division by Zero",
                "prompt": "Wrap a division by zero in <code>do ... unless DivisionByZeroError</code> and display <code>\"Bypassed Zero Error\"</code> in green.",
                "starterCode": "! TODO: Write do ... unless DivisionByZeroError\ndo\n    x : 10 / 0\nunless DivisionByZeroError\n",
                "hint": "Add `display \"Bypassed Zero Error\" ?color=\"green\"` inside the `unless` block.",
                "solution": "do\n    x : 10 / 0\nunless DivisionByZeroError\n    display \"Bypassed Zero Error\" ?color=\"green\"",
                "expectedMatch": {}
            },
            {
                "id": "ex_dounless_2",
                "title": "Exercise 13.2: Reactive Internal Watchdog",
                "prompt": "Declare <code>fuel : 50</code>. Write a <code>do</code> block that subtracts <code>fuel : fuel - 40</code>, with <code>unless internal fuel < 20</code> displaying <code>\"Low Fuel Warning\"</code> in yellow.",
                "starterCode": "fuel : 50\n! TODO: Implement do ... unless internal fuel < 20\n",
                "hint": "Use `unless internal fuel < 20`.",
                "solution": "fuel : 50\ndo\n    fuel : fuel - 40\n    display \"Should not reach here\"\nunless internal fuel < 20\n    display \"Low Fuel Warning\" ?color=\"yellow\"",
                "expectedMatch": {}
            },
            {
                "id": "ex_dounless_3",
                "title": "Exercise 13.3: External Condition Gate",
                "prompt": "Declare <code>isMaintenanceMode : true</code>. Write <code>do ... unless external isMaintenanceMode = true</code> displaying <code>\"System In Maintenance\"</code> in red.",
                "starterCode": "isMaintenanceMode : true\n! TODO: Write do ... unless external isMaintenanceMode = true\n",
                "hint": "Use `unless external isMaintenanceMode = true`.",
                "solution": "isMaintenanceMode : true\ndo\n    display \"Normal system operation\"\nunless external isMaintenanceMode = true\n    display \"System In Maintenance\" ?color=\"red\"",
                "expectedMatch": {}
            }
        ]
    },
    {
        "id": "ch14-error-scopes",
        "number": 22,
        "section": "Section 7: Robustness, Errors & Testing",
        "title": "Error Scopes & Suppression Blocks",
        "category": "Exception Handling",
        "readTime": "5 min read",
        "summary": "Control system tolerance with SuppressErrors, CriticalErrors, and ForceErrors scopes.",
        "body": "\n            <h2>Scoped Error Directives</h2>\n            <p>VerScript provides 3 declarative scoped error directives to control how the runtime treats errors:</p>\n\n            <table class=\"doc-table\">\n                <thead>\n                    <tr>\n                        <th>Scope Directive</th>\n                        <th>Behavior</th>\n                        <th>Use Case</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td><code>SuppressErrors</code></td>\n                        <td>Silently catches all non-critical exceptions; script execution skips the failing instruction and continues uninterrupted.</td>\n                        <td>Resilient batch pipelines, network fallbacks, best-effort evaluations.</td>\n                    </tr>\n                    <tr>\n                        <td><code>CriticalErrors</code></td>\n                        <td>Allows standard exceptions to proceed to <code>unless</code> catch handlers, but immediately crashes on fatal memory or system errors.</td>\n                        <td>Production backend services.</td>\n                    </tr>\n                    <tr>\n                        <td><code>ForceErrors</code></td>\n                        <td>Disables all error bypasses; any runtime issue halts immediately with full diagnostics.</td>\n                        <td>Test suites, validation pipelines, strict debugging.</td>\n                    </tr>\n                </tbody>\n            </table>\n        ",
        "codeBlocks": [
            {
                "id": "cb_scopes_1",
                "title": "error_scopes.vrs",
                "code": "display \"=== 1. SuppressErrors Scope ===\" ?color=\"purple\"\nSuppressErrors\n    display \"Attempting division by zero under SuppressErrors...\" ?color=\"yellow\"\n    bad_val : 50 / 0\n    display \"Notice: Error was suppressed, script continued!\" ?color=\"green\"\n\ndisplay \"=== Pipeline Continues Smoothly ===\" ?color=\"cyan\""
            }
        ],
        "exercises": [
            {
                "id": "ex_scopes_1",
                "title": "Exercise 14.1: Suppress Dangerous Calculations",
                "prompt": "Execute an invalid operation inside a <code>SuppressErrors</code> block and display <code>\"Safe continuation\"</code> in green after it.",
                "starterCode": "! TODO: Write SuppressErrors block containing 10 / 0 and display message\n",
                "hint": "Indent the failing calculation under `SuppressErrors`.",
                "solution": "SuppressErrors\n    bad : 10 / 0\ndisplay \"Safe continuation\" ?color=\"green\"",
                "expectedMatch": {}
            },
            {
                "id": "ex_scopes_2",
                "title": "Exercise 14.2: Multi-step Suppressed Pipeline",
                "prompt": "Inside <code>SuppressErrors</code>, perform two undefined operations, followed by displaying <code>\"Pipeline Finished\"</code> in cyan.",
                "starterCode": "! TODO: Perform 2 failing calculations in SuppressErrors\n",
                "hint": "All failures inside `SuppressErrors` are safely bypassed.",
                "solution": "SuppressErrors\n    x : 10 / 0\n    y : 20 / 0\ndisplay \"Pipeline Finished\" ?color=\"cyan\"",
                "expectedMatch": {}
            },
            {
                "id": "ex_scopes_3",
                "title": "Exercise 14.3: ForceErrors Validation",
                "prompt": "Write a safe calculation under <code>ForceErrors</code> and display <code>\"Strict Verification Passed\"</code> in green.",
                "starterCode": "! TODO: Write a ForceErrors block with valid code\n",
                "hint": "Under `ForceErrors`, valid code runs normally.",
                "solution": "ForceErrors\n    valid : 100 * 2\ndisplay \"Strict Verification Passed\" ?color=\"green\"",
                "expectedMatch": {}
            }
        ]
    },
    {
        "id": "ch16-error-directory",
        "number": 23,
        "section": "Section 7: Robustness, Errors & Testing",
        "title": "Interactive Error Directory & Diagnostics Reference",
        "category": "Diagnostics & Errors",
        "readTime": "10 min read",
        "summary": "A complete interactive reference of all 17 VerScript native errors with trigger conditions, critical classifications, and handling strategies.",
        "body": "\n            <h2>VerScript Complete Error Taxonomy &amp; Diagnostics Architecture</h2>\n            <p>The VerScript virtual machine implements a deterministic, multi-tiered exception taxonomy. Every runtime condition is strongly typed, named, and inspectable via the global <code>error</code> identifier inside <code>unless</code> handlers. The VM evaluates faults along two rigorous metrics: <strong>Criticality Points (1–10)</strong> and <strong>Suppression Levels (0–4)</strong>.</p>\n\n            <h2>The 10-Point Criticality Scoring Framework</h2>\n            <p>Every error in VerScript is assigned an integer <strong>Criticality Point (1 to 10)</strong> score reflecting its threat to virtual machine state stability, memory integrity, and lexical contract purity:</p>\n            <ul>\n                <li><strong>Points 1 – 3 (Low Severity / Semantic Anomaly)</strong>: Localized boundary faults, uninitialized identifier reads, and step calculations. These affect only the current statement and leave the VM heap and call stack entirely pristine.</li>\n                <li><strong>Points 4 – 6 (Moderate Severity / Logic &amp; Purity Faults)</strong>: Arithmetic domain errors, type/operator mismatches, and lexical contract breaches (such as an <code>inbound</code> function violating scope immutability). These corrupt expression evaluations but are safely catchable and recoverable.</li>\n                <li><strong>Points 7 – 8 (High Severity / Metaprogramming Breaches)</strong>: Dynamic syntax alias collisions, unregistered exception names, or failing foreign language polyglot bridges. These require explicit defensive architecture to trap.</li>\n                <li><strong>Points 9 – 10 (Fatal Severity / Structural System Collapse)</strong>: Indentation depth corruptions, token syntax malformations, jump/call stack overflows (&gt;64 frames), and host OS memory exhaustion. These directly threaten process execution and trigger an immediate VM abort.</li>\n            </ul>\n\n            <h2>The 4-Tier Suppression Level Hierarchy</h2>\n            <p>VerScript establishes four runtime <strong>Suppression Levels</strong> that determine what severity of error can be bypassed, masked, or silenced during script execution:</p>\n            <table class=\"doc-table\">\n                <thead>\n                    <tr>\n                        <th>Suppression Tier</th>\n                        <th>Directive / Attribute</th>\n                        <th>Criticality Range</th>\n                        <th>Suppression Behavior</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td><strong>Level 0: Zero-Tolerance</strong></td>\n                        <td><code>ForceErrors</code></td>\n                        <td>None (0 pts)</td>\n                        <td><strong>No errors suppressed</strong>. Any error, even minor 1-point reads, terminates execution immediately. Bypasses <code>unless</code> handlers.</td>\n                    </tr>\n                    <tr>\n                        <td><strong>Level 1: Minor Fault</strong></td>\n                        <td><code>SuppressErrors</code> (Default)</td>\n                        <td>Points 1 – 3</td>\n                        <td>Silently masks minor semantic and iteration faults (e.g. <code>UndefinedVariableError</code> resolves to fallback, loop step errors reset).</td>\n                    </tr>\n                    <tr>\n                        <td><strong>Level 2: Standard Logic</strong></td>\n                        <td><code>CriticalErrors</code></td>\n                        <td>Points 1 – 6</td>\n                        <td>Silently bypasses arithmetic faults and purity contract violations while continuing script execution.</td>\n                    </tr>\n                    <tr>\n                        <td><strong>Level 3: Deep Metaprogramming</strong></td>\n                        <td><code>suppress: high</code> / Scopes</td>\n                        <td>Points 1 – 8</td>\n                        <td>Masks alias collision and polyglot execution failures; logs warnings to telemetry stream without halting.</td>\n                    </tr>\n                    <tr>\n                        <td><strong>Level 4: Unsuppressable Fatal</strong></td>\n                        <td><em>Engine Core Invariant</em></td>\n                        <td>Points 9 – 10</td>\n                        <td><strong>Cannot be suppressed under any directive</strong>. VM halts immediately with line pointer and exit code to prevent memory corruption.</td>\n                    </tr>\n                </tbody>\n            </table>\n\n            <h2>Complete 17-Error Criticality Points &amp; Suppression Matrix</h2>\n            <p>Below is the complete reference matrix mapping every native VerScript error to its Criticality Points, Severity Classification, Raised Suppression Level, and recovery strategy:</p>\n\n            <div class=\"doc-table-wrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Error Identifier</th>\n                            <th>Criticality Points</th>\n                            <th>Severity Class</th>\n                            <th>Raised Suppression Tier</th>\n                            <th>Trigger Condition &amp; VM Impact</th>\n                            <th>Recovery &amp; Mitigation Strategy</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td><code>UndefinedVariableError</code></td>\n                            <td><span class=\"meta-pill\" style=\"background: rgba(80,250,123,0.15); color: #50fa7b; border-color: rgba(80,250,123,0.3);\">1 / 10</span></td>\n                            <td>Minor / Semantic</td>\n                            <td><strong>Level 1 (Minor)</strong></td>\n                            <td>Reading an uninitialized identifier. Evaluates to <code>\"\"</code> or <code>0</code> under suppression.</td>\n                            <td>Define variable before access, use <code>set var: val</code>, or provide default attributes.</td>\n                        </tr>\n                        <tr>\n                            <td><code>LoopDirectionError</code></td>\n                            <td><span class=\"meta-pill\" style=\"background: rgba(80,250,123,0.15); color: #50fa7b; border-color: rgba(80,250,123,0.3);\">2 / 10</span></td>\n                            <td>Minor / Loop</td>\n                            <td><strong>Level 1 (Minor)</strong></td>\n                            <td><code>start &gt; end</code> in ascending <code>iterate</code> loop. Loop body skipped under suppression.</td>\n                            <td>Ensure <code>start &lt;= end</code> or invert range boundary expressions.</td>\n                        </tr>\n                        <tr>\n                            <td><code>LoopIterationError</code></td>\n                            <td><span class=\"meta-pill\" style=\"background: rgba(80,250,123,0.15); color: #50fa7b; border-color: rgba(80,250,123,0.3);\">2 / 10</span></td>\n                            <td>Minor / Loop</td>\n                            <td><strong>Level 1 (Minor)</strong></td>\n                            <td>Non-numeric iteration count in <code>loop</code>. Loop count defaults to 0 under suppression.</td>\n                            <td>Cast or validate count expression to positive integer.</td>\n                        </tr>\n                        <tr>\n                            <td><code>LoopStepError</code></td>\n                            <td><span class=\"meta-pill\" style=\"background: rgba(80,250,123,0.15); color: #50fa7b; border-color: rgba(80,250,123,0.3);\">2 / 10</span></td>\n                            <td>Minor / Loop</td>\n                            <td><strong>Level 1 (Minor)</strong></td>\n                            <td><code>step &lt;= 0</code> or <code>step &gt; count</code>. Step defaults to <code>1</code> under suppression.</td>\n                            <td>Ensure <code>1 &lt;= step &lt;= total_iterations</code>.</td>\n                        </tr>\n                        <tr>\n                            <td><code>RuntimeError</code></td>\n                            <td><span class=\"meta-pill\" style=\"background: rgba(80,250,123,0.15); color: #50fa7b; border-color: rgba(80,250,123,0.3);\">3 / 10</span></td>\n                            <td>Minor / Contextual</td>\n                            <td><strong>Level 1 (Minor)</strong></td>\n                            <td>Invoking <code>throw error</code> outside an active <code>unless</code> handler block.</td>\n                            <td>Only execute rethrows inside valid <code>unless</code> catch blocks.</td>\n                        </tr>\n                        <tr>\n                            <td><code>InvalidOperandError</code></td>\n                            <td><span class=\"meta-pill\" style=\"background: rgba(255,209,102,0.15); color: #ffd166; border-color: rgba(255,209,102,0.3);\">4 / 10</span></td>\n                            <td>Moderate / Types</td>\n                            <td><strong>Level 2 (Standard)</strong></td>\n                            <td>Incompatible operator usage (e.g. string multiplication or unary minus on booleans).</td>\n                            <td>Ensure operands match operator type requirements prior to execution.</td>\n                        </tr>\n                        <tr>\n                            <td><code>DivisionByZeroError</code></td>\n                            <td><span class=\"meta-pill\" style=\"background: rgba(255,209,102,0.15); color: #ffd166; border-color: rgba(255,209,102,0.3);\">5 / 10</span></td>\n                            <td>Moderate / Math</td>\n                            <td><strong>Level 2 (Standard)</strong></td>\n                            <td>Division operator <code>/</code> with divisor evaluating to <code>0</code>. Yields <code>0</code> under suppression.</td>\n                            <td>Guard divisor with <code>if divisor != 0</code> or trap with <code>do ... unless DivisionByZeroError</code>.</td>\n                        </tr>\n                        <tr>\n                            <td><code>ScopeViolationError</code></td>\n                            <td><span class=\"meta-pill\" style=\"background: rgba(255,209,102,0.15); color: #ffd166; border-color: rgba(255,209,102,0.3);\">6 / 10</span></td>\n                            <td>Moderate / Purity</td>\n                            <td><strong>Level 2 (Standard)</strong></td>\n                            <td>An <code>inbound</code> function or method mutates a variable in an outer lexical frame.</td>\n                            <td>Declare routine with <code>outbound</code>, keep mutations purely local, or catch via <code>unless</code>.</td>\n                        </tr>\n                        <tr>\n                            <td><code>InvalidErrorNameError</code></td>\n                            <td><span class=\"meta-pill\" style=\"background: rgba(255,121,198,0.15); color: #ff79c6; border-color: rgba(255,121,198,0.3);\">7 / 10</span></td>\n                            <td>High / Semantic</td>\n                            <td><strong>Level 3 (Deep)</strong></td>\n                            <td>Attempting to throw an unrecognized error symbol not in the taxonomy.</td>\n                            <td>Use recognized error identifiers or raise via <code>throw CustomError ?code=...</code>.</td>\n                        </tr>\n                        <tr>\n                            <td><code>IndentationError</code></td>\n                            <td><span class=\"meta-pill\" style=\"background: rgba(239,71,111,0.18); color: #ef476f; border-color: rgba(239,71,111,0.4);\">9 / 10</span></td>\n                            <td>Fatal / Structural</td>\n                            <td><strong>Level 4 (Unsuppressable)</strong></td>\n                            <td>Mismatched indentation spaces or tabs within indented statement blocks.</td>\n                            <td>Standardize block indentation to 4 spaces or 1 tab throughout the script.</td>\n                        </tr>\n                        <tr>\n                            <td><code>SyntaxError</code></td>\n                            <td><span class=\"meta-pill\" style=\"background: rgba(239,71,111,0.18); color: #ef476f; border-color: rgba(239,71,111,0.4);\">10 / 10</span></td>\n                            <td>Fatal / Structural</td>\n                            <td><strong>Level 4 (Unsuppressable)</strong></td>\n                            <td>Lexer/parser failure: illegal tokens, missing colons, or methods returning values with <code>reply &lt;expr&gt;</code>.</td>\n                            <td>Fix script syntax to strictly adhere to VerScript grammar specification.</td>\n                        </tr>\n                        <tr>\n                            <td><code>SystemError</code></td>\n                            <td><span class=\"meta-pill\" style=\"background: rgba(239,71,111,0.18); color: #ef476f; border-color: rgba(239,71,111,0.4);\">10 / 10</span></td>\n                            <td>Fatal / Virtual Machine</td>\n                            <td><strong>Level 4 (Unsuppressable)</strong></td>\n                            <td>Call stack frame depth exceeding 64 or jump stack overflow across nested <code>do</code> scopes.</td>\n                            <td>Ensure recursive procedures have base-case terminations; flatten deeply nested blocks.</td>\n                        </tr>\n                        <tr>\n                            <td><code>IndexOutOfBoundsError</code></td>\n                            <td><span class=\"meta-pill\" style=\"background: rgba(80,250,123,0.15); color: #50fa7b; border-color: rgba(80,250,123,0.3);\">2 / 10</span></td>\n                            <td>Minor / Boundary</td>\n                            <td><strong>Level 1 (Minor)</strong></td>\n                            <td>Attempting to index an array out of bounds (<code>index &lt; 0</code> or <code>index &gt;= count</code>).</td>\n                            <td>Check array bounds before indexing or guard with <code>do ... unless IndexOutOfBoundsError</code>.</td>\n                        </tr>\n                        <tr>\n                            <td><code>EntityError</code></td>\n                            <td><span class=\"meta-pill\" style=\"background: rgba(80,250,123,0.15); color: #50fa7b; border-color: rgba(80,250,123,0.3);\">3 / 10</span></td>\n                            <td>Minor / Member Resolution</td>\n                            <td><strong>Level 1 (Minor)</strong></td>\n                            <td>Accessing or invoking an undeclared property or method on an instantiated entity.</td>\n                            <td>Ensure member is declared in class <code>static:</code> or <code>dynamic:</code> sections.</td>\n                        </tr>\n                        <tr>\n                            <td><code>ImmutableError</code></td>\n                            <td><span class=\"meta-pill\" style=\"background: rgba(255,209,102,0.15); color: #ffd166; border-color: rgba(255,209,102,0.3);\">6 / 10</span></td>\n                            <td>Moderate / Immutability</td>\n                            <td><strong>Level 2 (Standard)</strong></td>\n                            <td>Mutating an entity static property or modifying an immutable library <code>const</code>.</td>\n                            <td>Mutate dynamic entity properties instead, or treat library constants as read-only.</td>\n                        </tr>\n                        <tr>\n                            <td><code>VisibilityError</code></td>\n                            <td><span class=\"meta-pill\" style=\"background: rgba(255,121,198,0.15); color: #ff79c6; border-color: rgba(255,121,198,0.3);\">7 / 10</span></td>\n                            <td>High / Access Control</td>\n                            <td><strong>Level 3 (Deep)</strong></td>\n                            <td>Accessing private static properties, calling private methods outside an entity, or calling private library routines.</td>\n                            <td>Mark static member with <code>public</code> or invoke routines within their enclosing entity/library scope.</td>\n                        </tr>\n                        <tr>\n                            <td><code>MemoryAllocationError</code></td>\n                            <td><span class=\"meta-pill\" style=\"background: rgba(239,71,111,0.18); color: #ef476f; border-color: rgba(239,71,111,0.4);\">10 / 10</span></td>\n                            <td>Fatal / Virtual Machine</td>\n                            <td><strong>Level 4 (Unsuppressable)</strong></td>\n                            <td>Host operating system memory exhausted during symbol table expansion.</td>\n                            <td>Release resources and reduce memory footprint of large datasets.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h2>How Error Modes Govern Suppression</h2>\n            <p>The VerScript engine evaluates the active error mode against the error's criticality points before deciding whether to dispatch an <code>unless</code> handler or abort:</p>\n            <div class=\"doc-table-wrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Active Mode</th>\n                            <th>Directive</th>\n                            <th>Allowed Suppression Tiers</th>\n                            <th>Critical Errors (Pts 9-10)</th>\n                            <th>Standard Errors (Pts 1-8)</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td><strong>Normal</strong></td>\n                            <td>Default runtime</td>\n                            <td>Tiers 1 – 2 (via <code>unless</code>)</td>\n                            <td>Fatal Abort</td>\n                            <td>Dispatched to matching <code>unless</code> block or fatal abort</td>\n                        </tr>\n                        <tr>\n                            <td><strong>Force</strong></td>\n                            <td><code>ForceErrors</code></td>\n                            <td>Tier 0 Only</td>\n                            <td>Fatal Abort</td>\n                            <td>Fatal Abort immediately (bypasses <code>unless</code> catch blocks)</td>\n                        </tr>\n                        <tr>\n                            <td><strong>Critical</strong></td>\n                            <td><code>CriticalErrors</code></td>\n                            <td>Tiers 1 – 2</td>\n                            <td>Fatal Abort</td>\n                            <td>Suppressed and skipped silently (Points 1–6)</td>\n                        </tr>\n                        <tr>\n                            <td><strong>Suppress</strong></td>\n                            <td><code>SuppressErrors</code></td>\n                            <td>Tiers 1 – 3</td>\n                            <td>Fatal Abort</td>\n                            <td>All non-fatal errors suppressed &amp; skipped silently</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <div class=\"callout-box tip\">\n                <div class=\"callout-title\">💡 Diagnostic Best Practice: Selective Trap Pattern</div>\n                <p>Always trap specific error types (e.g. <code>unless DivisionByZeroError</code> or <code>unless ScopeViolationError</code>) rather than generic catches. This ensures low-criticality faults are cleanly mitigated without masking unexpected structural errors.</p>\n            </div>\n        ",
        "codeBlocks": [
            {
                "id": "cb_ch16_1",
                "title": "diagnostics_workbench.vrs",
                "code": "! VerScript Diagnostics Workbench\ndisplay \"=== VerScript Error Diagnostic Workbench ===\" ?color=#38bdf8\n\n! 1. Intercepting Math Errors\ndo\n    set invalid_calc: 100 / 0\nunless DivisionByZeroError\n    display \"Diagnostics [Math]: Intercepted DivisionByZeroError\" ?color=#f1fa8c\n\n! 2. Intercepting Purity Violations\nset master_key: 1234\ndef func inspect_purity\n    set master_key: 9999 ! Attempting outer mutation\n    reply master_key\n\ndo\n    res: (inspect_purity)\nunless ScopeViolationError\n    display \"Diagnostics [Purity]: Intercepted ScopeViolationError\" ?color=#50fa7b\n\n! 3. Inspecting generic 'error' keyword\ndo\n    throw InvalidOperandError ?msg=\"Invalid matrix dimension\"\nunless error\n    display \"Diagnostics [Generic]: Caught active error: \" + error ?color=#ff79c6"
            }
        ],
        "exercises": [
            {
                "id": "ex_16_1",
                "title": "Exercise 16.1: Scope Guard Exception Interception",
                "prompt": "Write a program with <code>set threshold: 50</code>, an inbound function <code>def func modify_threshold v</code> that executes <code>set threshold: v</code>, and trap the resulting error using <code>do ... unless ScopeViolationError</code> to display <code>\"Handled Scope Violation\"</code>.",
                "starterCode": "! TODO: Write function modifying outer threshold and trap ScopeViolationError\n",
                "hint": "Use `set threshold: 50`, define `def func modify_threshold v`, mutate `set threshold: v`, and wrap `call: (modify_threshold 100)` in `do ... unless ScopeViolationError`.",
                "solution": "set threshold: 50\n\ndef func modify_threshold v\n    set threshold: v\n    reply threshold\n\ndo\n    call: (modify_threshold 100)\nunless ScopeViolationError\n    display \"Handled Scope Violation\"",
                "expectedMatch": {}
            },
            {
                "id": "ex_16_2",
                "title": "Exercise 16.2: Safe Loop Step Validation",
                "prompt": "Write a program that executes an invalid loop <code>loop 5 step 10</code> inside a <code>do</code> block, traps <code>LoopStepError</code> with <code>unless LoopStepError</code>, and prints <code>\"Handled Loop Step Error\"</code> in yellow.",
                "starterCode": "! TODO: Trap LoopStepError from invalid loop\n",
                "hint": "Use `do`, `loop 5 step 10`, `unless LoopStepError`, and `display \"Handled Loop Step Error\" ?color=yellow`.",
                "solution": "do\n    loop 5 step 10\n        display \"step\"\nunless LoopStepError\n    display \"Handled Loop Step Error\" ?color=yellow",
                "expectedMatch": {}
            }
        ]
    },
    {
        "id": "ch18-alias",
        "number": 24,
        "section": "Section 8: Advanced Tooling & Customizations",
        "title": "Alias Remapping & Custom Syntax",
        "category": "Metaprogramming",
        "readTime": "6 min read",
        "summary": "Remap keywords, rename commands, map custom attribute names, and create domain-specific languages with alias.",
        "body": "\n            <h2>The <code>alias</code> Keyword</h2>\n            <p>The <code>alias</code> keyword allows you to customize the grammar of VerScript at runtime:</p>\n            <ul>\n                <li><strong>Single-Line:</strong> <code>alias cmd1: cmd2</code> (renames existing command <code>cmd1</code> to new alias <code>cmd2</code>).</li>\n                <li><strong>Attribute Mapping:</strong> <code>alias cmd1: cmd2 ? arg1=arg3 arg2=arg4</code> (maps original attribute <code>arg1</code> to custom attribute <code>arg3</code>).</li>\n                <li><strong>Multi-Line Block:</strong>\n                    <div class=\"code-block\">alias:\n    display: print\n    loop: repeat\n    iterate: for ? step=by</div>\n                </li>\n            </ul>\n\n            <table class=\"doc-table\">\n                <thead>\n                    <tr>\n                        <th>Alias Rule</th>\n                        <th>Syntax</th>\n                        <th>Expanded Result</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td>Command Rename</td>\n                        <td><code>alias display: print</code></td>\n                        <td><code>print \"Hello\"</code> &rarr; <code>display \"Hello\"</code></td>\n                    </tr>\n                    <tr>\n                        <td>Attribute Mapping</td>\n                        <td><code>alias display: echo ? color=tint</code></td>\n                        <td><code>echo \"Hi\" ?tint=\"cyan\"</code> &rarr; <code>display \"Hi\" ?color=\"cyan\"</code></td>\n                    </tr>\n                </tbody>\n            </table>\n        ",
        "codeBlocks": [
            {
                "id": "cb_alias_1",
                "title": "alias_showcase.vrs",
                "code": "! 1. Single-line command alias\nalias display: print\nprint \"Hello from print alias!\" ?color=\"green\"\n\n! 2. Alias with attribute mapping\nalias display: echo ? color=tint newline=inline\necho \"Segment 1, \" ?tint=\"yellow\" ?inline=false\necho \"Segment 2!\" ?tint=\"cyan\"\n\n! 3. Multi-line alias block\nalias:\n    loop: repeat\n    iterate: for ? step=by\n\nrepeat 2\n    print \"Repeat loop active\" ?color=\"purple\"\n\nfor i from 10 to 30 ?by=10\n    print \"Iterating as for: \" + i ?color=\"yellow\""
            }
        ],
        "exercises": [
            {
                "id": "ex_alias_1",
                "title": "Exercise 18.1: Command Alias",
                "prompt": "Alias <code>display</code> as <code>print</code> and display <code>\"Aliased Output\"</code> in green using <code>print</code>.",
                "starterCode": "! TODO: Define alias display: print and use it\n",
                "hint": "Write `alias display: print` then `print \"Aliased Output\" ?color=\"green\"`.",
                "solution": "alias display: print\nprint \"Aliased Output\" ?color=\"green\"",
                "expectedMatch": {}
            },
            {
                "id": "ex_alias_2",
                "title": "Exercise 18.2: Attribute Remapping",
                "prompt": "Alias <code>display</code> as <code>log</code> with <code>?color=tint</code>, and output <code>\"Mapped Attribute\"</code> using <code>?tint=\"cyan\"</code>.",
                "starterCode": "! TODO: Write alias display: log ? color=tint\n",
                "hint": "Use `alias display: log ? color=tint`.",
                "solution": "alias display: log ? color=tint\nlog \"Mapped Attribute\" ?tint=\"cyan\"",
                "expectedMatch": {}
            },
            {
                "id": "ex_alias_3",
                "title": "Exercise 18.3: Multi-line Alias Block",
                "prompt": "Create an <code>alias:</code> block mapping <code>loop: repeat</code> and execute <code>repeat 2</code> printing <code>\"Pass\"</code>.",
                "starterCode": "! TODO: Create alias: block and execute repeat 2\n",
                "hint": "Indent `loop: repeat` under `alias:`.",
                "solution": "alias:\n    loop: repeat\nrepeat 2\n    display \"Pass\" ?color=\"green\"",
                "expectedMatch": {}
            }
        ]
    },
    {
        "id": "ch25-polyserver-runner",
        "number": 25,
        "section": "Section 8: Advanced Tooling & Customizations",
        "title": "PolyServer Cloud Execution & Web Runner",
        "category": "Tooling",
        "readTime": "5 min read",
        "summary": "Deploying and orchestrating the PolyServer C execution engine, API communication, and frontend web playgrounds.",
        "body": "\n    <h2>PolyServer Architecture</h2>\n    <p>VerScript is fully deployable in modern serverless and containerized cloud environments. PolyServer provides a hardened Node.js/Express bridge that receives VerScript code, spawns the native C VM in an isolated sandbox, and streams execution results back via JSON.</p>\n  ",
        "codeBlocks": [
            {
                "id": "cb_srv_1",
                "title": "api_invocation.js",
                "code": "fetch(\"https://verscript-polyserver.onrender.com/vs-sharp\", {\n  method: \"POST\",\n  headers: { \"Content-Type\": \"application/json\" },\n  body: JSON.stringify({ code: 'display \"Hello from Cloud!\" ?color=\"cyan\"' })\n})\n.then(res => res.json())\n.then(data => console.log(data.output));"
            }
        ],
        "exercises": [
            {
                "id": "ex_srv_1",
                "title": "Exercise 25.1: Cloud Readiness Test",
                "prompt": "Write a program that displays <code>\"Cloud Node Ready\"</code> with attribute <code>?color=\"green\"</code>.",
                "starterCode": "! TODO: Display status report\n",
                "hint": "Use `display \"Cloud Node Ready\" ?color=\"green\"`.",
                "solution": "display \"Cloud Node Ready\" ?color=\"green\"",
                "expectedMatch": {}
            }
        ]
    },
    {
        "id": "ch19-grandmaster-capstone",
        "number": 26,
        "section": "Section 9: Capstone & Reference",
        "title": "Grandmaster Capstone: Complex Systems & Pipelines",
        "category": "Systems Engineering",
        "readTime": "8 min read",
        "summary": "Challenge yourself with 8 complex systems engineering challenges testing the full depth of VerScript capabilities.",
        "body": "\n            <h2>Grandmaster Systems Certification</h2>\n            <p>Welcome to the Grandmaster Capstone. This capstone challenges you to combine reactive watch conditions, stepped loops, suppression scopes, polyglot injection, custom exception hierarchies, and alias metaprogramming into complete, production-grade systems.</p>\n        ",
        "codeBlocks": [
            {
                "id": "cb_capstone_1",
                "title": "capstone_pipeline.vrs",
                "code": "! Grandmaster Systems Engineering Showcase\nalias:\n    display: emit ? color=tint\n    loop: repeat\n\ndo\n    emit \"=== Booting Autonomous Watchdog Core ===\" ?tint=\"purple\"\n    pressure : 120\n    repeat 4\n        emit \"Core Pressure: \" + pressure ?tint=\"cyan\"\n        pressure : pressure + 60\nunless internal pressure > 300\n    emit \"ALERT: Pressure threshold breached at \" + pressure ?tint=\"yellow\""
            }
        ],
        "exercises": [
            {
                "id": "ex_cap_1",
                "title": "Challenge 17.1: Reactor Core Watchdog",
                "prompt": "Create an <code>alias:</code> block mapping <code>display: log ? color=tint</code> and <code>loop: cycle</code>. In a <code>do</code> block, start with <code>coreTemp : 150</code>, run <code>cycle 4</code> adding <code>coreTemp : coreTemp + 60</code>, and catch with <code>unless internal coreTemp > 300</code> displaying <code>\"CRITICAL TEMP SHUTDOWN: \" + coreTemp</code> in yellow.",
                "starterCode": "! TODO: Implement Challenge 17.1\n",
                "hint": "Use `alias:`, `do`, `cycle 4`, and `unless internal coreTemp > 300`.",
                "solution": "alias:\n    display: log ? color=tint\n    loop: cycle\ndo\n    coreTemp : 150\n    cycle 4\n        coreTemp : coreTemp + 60\nunless internal coreTemp > 300\n    log \"CRITICAL TEMP SHUTDOWN: \" + coreTemp ?tint=\"yellow\"",
                "expectedMatch": {}
            },
            {
                "id": "ex_cap_2",
                "title": "Challenge 17.2: Polyglot Matrix Data Bus",
                "prompt": "Build a multi-language pipeline: 1) <code>inject python</code> computing a hash, 2) <code>inject javascript</code> computing an array sum, 3) <code>inject verscript</code> calculating <code>bus_total : 500 + 250</code> and displaying <code>\"Bus Total: \" + bus_total</code> in green.",
                "starterCode": "! TODO: Implement Challenge 17.2\n",
                "hint": "Chain `inject python`, `inject javascript`, and `inject verscript`.",
                "solution": "inject python ?color=\"yellow\"\n    h = sum([ord(c) for c in \"VER\"])\n    print(\"Python Hash:\", h)\n\ninject javascript ?color=\"cyan\"\n    console.log(\"JS Matrix Checksum:\", [1,2,3,4].reduce((a,b)=>a*b, 1))\n\ninject verscript\n    bus_total : 500 + 250\n    display \"Bus Total: \" + bus_total ?color=\"green\"",
                "expectedMatch": {}
            },
            {
                "id": "ex_cap_3",
                "title": "Challenge 17.3: Stepped Sieve Calculation Engine",
                "prompt": "Declare <code>accumulator : 0</code>. Run <code>iterate step_idx from 10 to 50 step 10</code>, adding <code>accumulator : accumulator + step_idx</code>. Display <code>\"Accumulated Sieve Total: \" + accumulator</code> in cyan.",
                "starterCode": "accumulator : 0\n! TODO: Implement Challenge 17.3\n",
                "hint": "Use `step 10` on the iteration.",
                "solution": "accumulator : 0\niterate step_idx from 10 to 50 step 10\n    accumulator : accumulator + step_idx\ndisplay \"Accumulated Sieve Total: \" + accumulator ?color=\"cyan\"",
                "expectedMatch": {}
            },
            {
                "id": "ex_cap_4",
                "title": "Challenge 17.4: Autonomous Network Retry Engine",
                "prompt": "Build an autonomous retry loop: set <code>attempts : 0</code> and <code>max_retries : 3</code>. Run <code>while attempts < max_retries</code> inside <code>SuppressErrors</code>, incrementing <code>attempts : attempts + 1</code> and triggering a simulated division failure. Finally display <code>\"Retries Completed: \" + attempts</code> in green.",
                "starterCode": "attempts : 0\nmax_retries : 3\n! TODO: Implement Challenge 17.4\n",
                "hint": "Inside `while attempts < max_retries`, increment attempts and execute `err : 10 / 0`.",
                "solution": "attempts : 0\nmax_retries : 3\nSuppressErrors\n    while attempts < max_retries\n        attempts : attempts + 1\n        fault : 10 / 0\ndisplay \"Retries Completed: \" + attempts ?color=\"green\"",
                "expectedMatch": {}
            },
            {
                "id": "ex_cap_5",
                "title": "Challenge 17.5: Cascading Custom Error Hierarchy",
                "prompt": "Write a <code>do</code> block that checks <code>sensor_v : 0</code>, throws <code>HardwareFault ?msg=\"Zero Voltage\"</code>, and catch it in <code>unless HardwareFault</code>, displaying <code>\"Fault Captured: \" + error</code> in red.",
                "starterCode": "sensor_v : 0\n! TODO: Implement Challenge 17.5\n",
                "hint": "Use `throw HardwareFault ?msg=\"Zero Voltage\"`.",
                "solution": "sensor_v : 0\ndo\n    if sensor_v = 0 then\n        throw HardwareFault ?msg=\"Zero Voltage\"\nunless HardwareFault\n    display \"Fault Captured: \" + error ?color=\"red\"",
                "expectedMatch": {}
            },
            {
                "id": "ex_cap_6",
                "title": "Challenge 17.6: Self-Healing Memory Cache",
                "prompt": "Simulate a cache: set <code>cache_size : 10</code>, <code>max_capacity : 80</code>. In a <code>do</code> block, run <code>loop 5</code> adding <code>cache_size : cache_size + 20</code>, and catch with <code>unless internal cache_size > max_capacity</code>, purging and displaying <code>\"CACHE EVICTED AT: \" + cache_size</code> in yellow.",
                "starterCode": "cache_size : 10\nmax_capacity : 80\n! TODO: Implement Challenge 17.6\n",
                "hint": "Use `unless internal cache_size > max_capacity`.",
                "solution": "cache_size : 10\nmax_capacity : 80\ndo\n    loop 5\n        cache_size : cache_size + 20\nunless internal cache_size > max_capacity\n    display \"CACHE EVICTED AT: \" + cache_size ?color=\"yellow\"",
                "expectedMatch": {}
            },
            {
                "id": "ex_cap_7",
                "title": "Challenge 17.7: Microservice Route Remapping",
                "prompt": "Create an <code>alias:</code> block mapping <code>display: route_get</code> and <code>prompt: route_post</code>. Use <code>route_post endpoint ?default=\"/api/v1/health\"</code> and <code>route_get \"Route: \" + endpoint</code> in green.",
                "starterCode": "! TODO: Implement Challenge 17.7\n",
                "hint": "Use `alias:` with `display: route_get` and `prompt: route_post`.",
                "solution": "alias:\n    display: route_get\n    prompt: route_post\n\nroute_post endpoint ?default=\"/api/v1/health\"\nroute_get \"Route: \" + endpoint ?color=\"green\"",
                "expectedMatch": {}
            },
            {
                "id": "ex_cap_8",
                "title": "Challenge 17.8: Grandmaster Final Proof of Mastery",
                "prompt": "Combine all skills: 1) <code>alias display: out ? color=col</code>, 2) set <code>total_cycles : 0</code>, 3) iterate <code>c</code> from 1 to 3 with <code>total_cycles : total_cycles + c</code>, 4) print <code>\"Mastery Proof Verified: \" + total_cycles</code> in unquoted hex <code>?col=#00ffcc</code>.",
                "starterCode": "! TODO: Implement Challenge 17.8 Proof of Mastery\n",
                "hint": "Combine alias mapping with iterate and hex output.",
                "solution": "alias display: out ? color=col\ntotal_cycles : 0\niterate c from 1 to 3\n    total_cycles : total_cycles + c\nout \"Mastery Proof Verified: \" + total_cycles ?col=#00ffcc",
                "expectedMatch": {}
            }
        ]
    },
    {
        "id": "ch20-master-cheatsheet",
        "number": 27,
        "section": "Section 9: Capstone & Reference",
        "title": "Master Language Specification & Complete Attribute Cheatsheet",
        "category": "Quick Reference",
        "readTime": "7 min read",
        "summary": "The definitive VerScript reference manual, containing the complete command attribute matrix table, grammar rules, and CLI specification.",
        "body": "\n            <h2>Complete Command &amp; Attribute Matrix Table</h2>\n            <p>Below is the complete, exhaustive reference matrix of all VerScript keywords, their supported attributes, data types, default behaviors, and usage examples:</p>\n\n            <table class=\"doc-table\">\n                <thead>\n                    <tr>\n                        <th>Command / Keyword</th>\n                        <th>Supported Attributes &amp; Modifiers</th>\n                        <th>Accepted Types &amp; Formats</th>\n                        <th>Default Value</th>\n                        <th>Example Syntax</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td><code>display</code></td>\n                        <td><code>?color</code><br><code>?newline</code><br><code>?inline</code></td>\n                        <td>Named (<code>\"red\"</code>, <code>\"green\"</code>, <code>\"yellow\"</code>, <code>\"blue\"</code>, <code>\"purple\"</code>, <code>\"cyan\"</code>, <code>\"white\"</code>) or Hex (<code>#RRGGBB</code>, <code>#RGB</code>, quoted/unquoted)<br>Boolean (<code>true</code> / <code>false</code>)<br>Flag modifier</td>\n                        <td><code>white</code><br><code>true</code><br>N/A</td>\n                        <td><code>display \"Hi\" ?color=#00ffcc</code><br><code>display \"Loading: \" ?inline</code></td>\n                    </tr>\n                    <tr>\n                        <td><code>prompt</code></td>\n                        <td><code>?default</code></td>\n                        <td>String / Number</td>\n                        <td><code>\"\"</code> (empty string)</td>\n                        <td><code>prompt user ?default=\"Guest\"</code></td>\n                    </tr>\n                    <tr>\n                        <td><code>loop</code></td>\n                        <td><code>step N</code></td>\n                        <td>Integer (&gt; 0)</td>\n                        <td><code>1</code></td>\n                        <td><code>loop 10 step 2</code></td>\n                    </tr>\n                    <tr>\n                        <td><code>iterate</code></td>\n                        <td><code>from X to Y</code><br><code>step S</code></td>\n                        <td>Integer bounds<br>Integer step (&gt; 0)</td>\n                        <td>N/A<br><code>1</code></td>\n                        <td><code>iterate i from 1 to 50 step 5</code></td>\n                    </tr>\n                    <tr>\n                        <td><code>while</code></td>\n                        <td><code>step N</code></td>\n                        <td>Integer cadence</td>\n                        <td><code>1</code></td>\n                        <td><code>while count &lt; 10 step 2</code></td>\n                    </tr>\n                    <tr>\n                        <td><code>until</code></td>\n                        <td><code>step N</code></td>\n                        <td>Integer cadence</td>\n                        <td><code>1</code></td>\n                        <td><code>until power &gt;= 100</code></td>\n                    </tr>\n                    <tr>\n                        <td><code>unless</code></td>\n                        <td><code>internal</code><br><code>external</code></td>\n                        <td>Expression / Condition<br>Expression / Condition</td>\n                        <td>Default error catch</td>\n                        <td><code>unless internal temp &gt; 100</code><br><code>unless external isLocked</code></td>\n                    </tr>\n                    <tr>\n                        <td><code>throw</code></td>\n                        <td><code>?msg</code></td>\n                        <td>String (custom error payload)</td>\n                        <td><code>\"User thrown error\"</code></td>\n                        <td><code>throw HardwareFault ?msg=\"Low V\"</code></td>\n                    </tr>\n                    <tr>\n                        <td><code>inject</code></td>\n                        <td><code>[language]</code><br><code>?color</code></td>\n                        <td>100+ Language Identifiers (<code>python</code>, <code>js</code>, <code>rust</code>, <code>c</code>, <code>verscript</code>)<br>Color string/hex</td>\n                        <td>N/A<br><code>\"white\"</code></td>\n                        <td><code>inject python ?color=\"yellow\"</code><br><code>inject verscript</code></td>\n                    </tr>\n                    <tr>\n                        <td><code>alias</code></td>\n                        <td><code>cmd1: cmd2</code><br><code>? orig=new</code><br><code>alias:</code> (block)</td>\n                        <td>Identifier remapping<br>Attribute mapping key-value pairs</td>\n                        <td>N/A</td>\n                        <td><code>alias display: print</code><br><code>alias display: log ? color=tint</code></td>\n                    </tr>\n                    <tr>\n                        <td><code>def</code></td>\n                        <td><code>func</code><br><code>method</code><br><code>inbound</code><br><code>outbound</code></td>\n                        <td>Routine type &amp; purity contract specifiers</td>\n                        <td><code>func</code> (inbound)<br><code>method</code> (outbound)</td>\n                        <td><code>def func add x y</code><br><code>def outbound method log_msg m</code></td>\n                    </tr>\n                    <tr>\n                        <td><code>reply</code></td>\n                        <td><code>[expression]</code></td>\n                        <td>Optional return expression in functions; bare exit in methods</td>\n                        <td>N/A</td>\n                        <td><code>reply x + y</code><br><code>reply ! early exit</code></td>\n                    </tr>\n                    <tr>\n                        <td><code>set</code></td>\n                        <td><code>var : val</code></td>\n                        <td>Explicit variable declaration and assignment keyword</td>\n                        <td>N/A</td>\n                        <td><code>set power : 100</code></td>\n                    </tr>\n                    <tr>\n                        <td><code>SuppressErrors</code></td>\n                        <td>None</td>\n                        <td>Block scope</td>\n                        <td>N/A</td>\n                        <td><code>SuppressErrors<br>&nbsp;&nbsp;bad_call : 10 / 0</code></td>\n                    </tr>\n                    <tr>\n                        <td><code>CriticalErrors</code></td>\n                        <td>None</td>\n                        <td>Block scope</td>\n                        <td>N/A</td>\n                        <td><code>CriticalErrors<br>&nbsp;&nbsp;run_backend()</code></td>\n                    </tr>\n                    <tr>\n                        <td><code>ForceErrors</code></td>\n                        <td>None</td>\n                        <td>Block scope</td>\n                        <td>N/A</td>\n                        <td><code>ForceErrors<br>&nbsp;&nbsp;strict_test()</code></td>\n                    </tr>\n                    <tr>\n                        <td><code>arr</code></td>\n                        <td><code>items: [v1, v2]</code><br><code>items[idx]</code></td>\n                        <td>Dynamic heterogeneous array declaration, indexing &amp; mutation</td>\n                        <td>Empty array</td>\n                        <td><code>arr list: [1, \"two\", true]<br>list[0]: 99</code></td>\n                    </tr>\n                    <tr>\n                        <td><code>class</code></td>\n                        <td><code>(args...)</code><br><code>static:</code><br><code>dynamic:</code></td>\n                        <td>Entity blueprint; static immutable partition, dynamic mutable partition</td>\n                        <td>N/A</td>\n                        <td><code>class Hero(name)<br>&nbsp;&nbsp;dynamic: hp: 100</code></td>\n                    </tr>\n                    <tr>\n                        <td><code>lib</code> / <code>library</code></td>\n                        <td><code>const:</code><br><code>dynamic:</code></td>\n                        <td>Pure functional static library; unqualified member access</td>\n                        <td>N/A</td>\n                        <td><code>lib MathLib<br>&nbsp;&nbsp;const: PI: 314</code></td>\n                    </tr>\n                    <tr>\n                        <td><code>outscope</code></td>\n                        <td><code>var: val</code></td>\n                        <td>Target true global/outer scope from inside entity methods</td>\n                        <td>N/A</td>\n                        <td><code>outscope global_log: 1</code></td>\n                    </tr>\n                </tbody>\n            </table>\n\n            <h2>Grammar &amp; Operator Precedence</h2>\n            <table class=\"doc-table\">\n                <thead>\n                    <tr>\n                        <th>Precedence</th>\n                        <th>Operators</th>\n                        <th>Description</th>\n                        <th>Associativity</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td>1 (Highest)</td>\n                        <td><code>-</code> (unary)</td>\n                        <td>Unary Negation</td>\n                        <td>Right-to-Left</td>\n                    </tr>\n                    <tr>\n                        <td>2</td>\n                        <td><code>*</code>, <code>/</code></td>\n                        <td>Multiplication, Integer Division</td>\n                        <td>Left-to-Right</td>\n                    </tr>\n                    <tr>\n                        <td>3</td>\n                        <td><code>+</code>, <code>-</code></td>\n                        <td>Addition, Subtraction</td>\n                        <td>Left-to-Right</td>\n                    </tr>\n                    <tr>\n                        <td>4</td>\n                        <td><code>=</code>, <code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>, <code>&gt;=</code>, <code>!=</code></td>\n                        <td>Relational &amp; Equality Comparisons</td>\n                        <td>Left-to-Right</td>\n                    </tr>\n                    <tr>\n                        <td>5 (Lowest)</td>\n                        <td><code>:</code>, <code>x=</code></td>\n                        <td>Assignment, In-Place Multiplication</td>\n                        <td>Right-to-Left</td>\n                    </tr>\n                </tbody>\n            </table>\n        ",
        "codeBlocks": [
            {
                "id": "cb_spec_1",
                "title": "master_reference.vrs",
                "code": "! Complete VerScript Language Feature Demonstration\nalias:\n    display: print ? color=tint\n    loop: repeat\n\nSuppressErrors\n    print \"=== VerScript v1.2 Complete Reference ===\" ?tint=#00ffcc\n    repeat 2\n        print \"System certified and verified.\" ?tint=#50fa7b"
            }
        ],
        "exercises": [
            {
                "id": "ex_spec_1",
                "title": "Exercise 20.1: Complete Syntax Verification",
                "prompt": "Using the cheatsheet table as reference, write a program that uses <code>alias display: out ? color=col</code>, runs <code>loop 2</code>, and prints <code>\"Reference Verified\"</code> in unquoted hex <code>?col=#00ffcc</code>.",
                "starterCode": "! TODO: Write program according to Exercise 20.1\n",
                "hint": "Use `alias display: out ? color=col`, `loop 2`, and `out \"Reference Verified\" ?col=#00ffcc`.",
                "solution": "alias display: out ? color=col\nloop 2\n    out \"Reference Verified\" ?col=#00ffcc",
                "expectedMatch": {}
            },
            {
                "id": "ex_spec_2",
                "title": "Exercise 20.2: Comprehensive Attribute Validation",
                "prompt": "Write a program combining <code>prompt client ?default=\"Admin\"</code> and <code>display \"Verified: \" + client ?color=#50fa7b</code>.",
                "starterCode": "! TODO: Combine prompt with default and display with hex color\n",
                "hint": "Use `prompt client ?default=\"Admin\"`.",
                "solution": "prompt client ?default=\"Admin\"\ndisplay \"Verified: \" + client ?color=#50fa7b",
                "expectedMatch": {}
            }
        ]
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ARTICLES };
}
