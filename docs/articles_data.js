// ═══════════════════════════════════════════════════════════════════
//  VerScript Academy — Complete Interactive Documentation Articles
//  Divided into 6 Rigorous Skill Tiers / Sections:
//   1. Fundamentals (Ch 1-5)
//   2. Input & Output Mastery (Ch 6-7)
//   3. Control Flow & Iteration (Ch 8-11)
//   4. Advanced Exception Architecture (Ch 12-14)
//   5. Polyglot & Metaprogramming (Ch 15-16)
//   6. Applied Systems & Reference (Ch 17-18)
// ═══════════════════════════════════════════════════════════════════

const ARTICLES = [
    // ═══════════════════════════════════════════════════════════════
    // SECTION 1: FUNDAMENTALS
    // ═══════════════════════════════════════════════════════════════
    {
        id: "ch1-intro",
        number: 1,
        section: "Section 1: Fundamentals",
        title: "Introduction & Language Architecture",
        category: "Getting Started",
        readTime: "4 min read",
        summary: "Discover VerScript's origin, design principles, lightweight native C virtual machine, and execution lifecycle.",
        body: `
            <h2>What is VerScript?</h2>
            <p><strong>VerScript</strong> is an ultra-fast, minimalist scripting language engineered to blend the deterministic execution and speed of native C with the high-level ergonomics of modern dynamic programming languages.</p>
            <p>VerScript eliminates boilerplate punctuation (such as semicolons and excessive curly braces) in favor of indentation-scoped blocks and declarative statement structures.</p>

            <div class="callout-box tip">
                <div class="callout-title">💡 Core Architecture Pillars</div>
                <p>Zero external runtime dependencies beyond standard C99, dynamic typing, integrated attribute system with <code>?key=value</code>, reactive watch conditions, polyglot code injection, and runtime command aliasing.</p>
            </div>

            <h2>Compilation &amp; VM Pipeline</h2>
            <p>The VerScript runtime processes source code through a clean two-stage pipeline:</p>
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Layer</th>
                        <th>Component</th>
                        <th>Responsibility</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Frontend</strong></td>
                        <td><code>lexer.c</code></td>
                        <td>Tokenizes source code, strips comments, computes line indentation depths, and tokenizes command attributes.</td>
                    </tr>
                    <tr>
                        <td><strong>Backend</strong></td>
                        <td><code>main.c</code></td>
                        <td>Executes bytecode instructions, evaluates dynamic expressions, manages symbol tables, and dispatches runtime error scopes.</td>
                    </tr>
                    <tr>
                        <td><strong>Cloud VM</strong></td>
                        <td><code>PolyServer</code></td>
                        <td>Unified Express microservice hosting the C compiler engine and VS#-1B neural language synthesis assistant.</td>
                    </tr>
                </tbody>
            </table>

            <h2>Attribute Syntax Overview</h2>
            <p>Commands in VerScript accept optional attributes prefixed with a question mark <code>?</code> (e.g. <code>?color="green"</code> or unquoted <code>?color=#00ffcc</code>). Attributes configure command execution parameters dynamically without altering expression syntax.</p>
        `,
        codeBlocks: [
            {
                id: "cb_intro_1",
                title: "sample_intro.vrs",
                code: `! Welcome to VerScript!
display "Hello, Polyglot World!" ?color="cyan"
display "VerScript VM initialized cleanly." ?color="green"`
            }
        ],
        exercises: [
            {
                id: "ex_intro_1",
                title: "Exercise 1.1: Your First Output",
                prompt: "Write a program that outputs <code>\"Hello from VerScript!\"</code> with <code>?color=\"green\"</code>.",
                starterCode: `! TODO: Use 'display' to output "Hello from VerScript!" in green
`,
                hint: "Use `display \"Hello from VerScript!\" ?color=\"green\"`.",
                solution: `display "Hello from VerScript!" ?color="green"`,
                expectedMatch: /Hello from VerScript!/i
            },
            {
                id: "ex_intro_2",
                title: "Exercise 1.2: Two-line Status Report",
                prompt: "Display two consecutive lines: first <code>\"System Online\"</code> in cyan, then <code>\"Ready\"</code> in yellow.",
                starterCode: `! TODO: Write two display statements:
! 1. "System Online" in cyan
! 2. "Ready" in yellow
`,
                hint: "Write two separate `display` statements on individual lines.",
                solution: `display "System Online" ?color="cyan"
display "Ready" ?color="yellow"`,
                expectedMatch: /System Online[\s\S]*Ready/i
            },
            {
                id: "ex_intro_3",
                title: "Exercise 1.3: Unquoted Hex Attribute",
                prompt: "Display <code>\"Hex Color Glow\"</code> using unquoted hex color <code>?color=#00ffcc</code>.",
                starterCode: `! TODO: Display "Hex Color Glow" with ?color=#00ffcc without quotes
`,
                hint: "Attributes like `?color=#00ffcc` do not require quotes.",
                solution: `display "Hex Color Glow" ?color=#00ffcc`,
                expectedMatch: /Hex Color Glow/i
            }
        ]
    },

    {
        id: "ch2-lexical",
        number: 2,
        section: "Section 1: Fundamentals",
        title: "Lexical Structure & Comments",
        category: "Fundamentals",
        readTime: "3 min read",
        summary: "Understand single-line and multi-line comments, indentation rules, and token boundaries.",
        body: `
            <h2>Comments in VerScript</h2>
            <p>VerScript provides two clean comment forms for documenting code:</p>

            <h3>1. Single-Line Comments (<code>!</code>)</h3>
            <p>Any statement or inline text starting with an exclamation mark <code>!</code> is ignored by the parser up to the newline.</p>

            <h3>2. Multi-line Block Comments (<code>!! ... !!</code>)</h3>
            <p>Enclose long documentation blocks between double exclamation marks <code>!!</code>.</p>

            <div class="callout-box note">
                <div class="callout-title">📝 Indentation Sensitivity</div>
                <p>VerScript uses 2 or 4 spaces to define nested blocks (for <code>loop</code>, <code>iterate</code>, <code>if</code>, <code>unless</code>, and <code>alias:</code>). Mixing indentation depths triggers an <code>IndentationError</code>.</p>
            </div>
        `,
        codeBlocks: [
            {
                id: "cb_comments_1",
                title: "comments.vrs",
                code: `!!
  VerScript Architecture Config
  Version: 1.2
!!
! Main execution entrypoint
display "Lexical validation active." ?color="cyan"`
            }
        ],
        exercises: [
            {
                id: "ex_comments_1",
                title: "Exercise 2.1: Documenting with Single-Line Comments",
                prompt: "Add a single-line comment above a display statement that outputs <code>\"Calculation Active\"</code> in green.",
                starterCode: `! TODO: Add a descriptive comment starting with !
display "Calculation Active" ?color="green"`,
                hint: "Prefix the first line with `!`.",
                solution: `! Process status calculation
display "Calculation Active" ?color="green"`,
                expectedMatch: /Calculation Active/i
            },
            {
                id: "ex_comments_2",
                title: "Exercise 2.2: Multi-line Block Comment",
                prompt: "Enclose notes within <code>!!</code> and display <code>\"Module Loaded\"</code> in yellow.",
                starterCode: `! TODO: Wrap these comments in !! ... !!
Module Header
Version 1.0

display "Module Loaded" ?color="yellow"`,
                hint: "Place `!!` at start and `!!` at end.",
                solution: `!!
Module Header
Version 1.0
!!
display "Module Loaded" ?color="yellow"`,
                expectedMatch: /Module Loaded/i
            },
            {
                id: "ex_comments_3",
                title: "Exercise 2.3: Inline Trailing Comments",
                prompt: "Write a display command printing <code>\"Server Online\"</code> in cyan followed by an inline comment <code>! boot log</code>.",
                starterCode: `! TODO: Write display "Server Online" ?color="cyan" with an inline comment
`,
                hint: "Place `! comment` after the attributes.",
                solution: `display "Server Online" ?color="cyan" ! boot log`,
                expectedMatch: /Server Online/i
            }
        ]
    },

    {
        id: "ch3-variables",
        number: 3,
        section: "Section 1: Fundamentals",
        title: "Variables, Dynamic Typing & Scope",
        category: "Fundamentals",
        readTime: "5 min read",
        summary: "Master variable assignment with the colon operator, dynamic typing, and memory semantics.",
        body: `
            <h2>Variable Assignment (<code>identifier : expression</code>)</h2>
            <p>In VerScript, variables are declared and mutated using the colon operator <code>:</code>. Keywords like <code>var</code>, <code>let</code>, or <code>const</code> are unnecessary.</p>

            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Data Type</th>
                        <th>Example</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Integer</strong></td>
                        <td><code>score : 100</code></td>
                        <td>64-bit signed integer numeric values.</td>
                    </tr>
                    <tr>
                        <td><strong>String</strong></td>
                        <td><code>user : "Nova"</code></td>
                        <td>UTF-8 text wrapped in double quotes.</td>
                    </tr>
                    <tr>
                        <td><strong>Boolean</strong></td>
                        <td><code>isReady : true</code></td>
                        <td>Literal <code>true</code> or <code>false</code>.</td>
                    </tr>
                </tbody>
            </table>

            <h2>Dynamic Re-typing</h2>
            <p>Variables hold dynamic types and can transition seamlessly across types during execution:</p>
            <div class="code-block">data : 42
data : "Forty-Two"
data : true</div>
        `,
        codeBlocks: [
            {
                id: "cb_vars_1",
                title: "variables_demo.vrs",
                code: `hero : "Atlas"
power : 9000
active : true

display "Hero: " + hero ?color="cyan"
display "Power Level: " + power ?color="yellow"
display "Active State: " + active ?color="green"`
            }
        ],
        exercises: [
            {
                id: "ex_vars_1",
                title: "Exercise 3.1: Declare Player Profile",
                prompt: "Declare <code>playerName : \"Atlas\"</code> and <code>score : 250</code>, then display <code>\"Player: \" + playerName</code> in cyan.",
                starterCode: `! TODO: Declare playerName and score
! Display "Player: " + playerName with ?color="cyan"
`,
                hint: "Use `name : \"Atlas\"` and `display \"Player: \" + playerName ?color=\"cyan\"`.",
                solution: `playerName : "Atlas"
score : 250
display "Player: " + playerName ?color="cyan"`,
                expectedMatch: /Player: Atlas/i
            },
            {
                id: "ex_vars_2",
                title: "Exercise 3.2: Dynamic Reassignment",
                prompt: "Assign <code>status : 1</code>, display it, then reassign <code>status : \"Online\"</code> and display it in green.",
                starterCode: `! TODO: Assign status : 1, display it, reassign status : "Online", display in green
`,
                hint: "Assign `status : 1`, display, then `status : \"Online\"`.",
                solution: `status : 1
display "Initial Status: " + status
status : "Online"
display "Updated Status: " + status ?color="green"`,
                expectedMatch: /Initial Status: 1[\s\S]*Updated Status: Online/i
            },
            {
                id: "ex_vars_3",
                title: "Exercise 3.3: Boolean Flags",
                prompt: "Create a boolean variable <code>isOperational : true</code> and display <code>\"System Operational: \" + isOperational</code> in purple.",
                starterCode: `! TODO: Declare isOperational : true and display in purple
`,
                hint: "Booleans stringify directly to `\"true\"` or `\"false\"`.",
                solution: `isOperational : true
display "System Operational: " + isOperational ?color="purple"`,
                expectedMatch: /System Operational: true/i
            }
        ]
    },

    {
        id: "ch4-expressions",
        number: 4,
        section: "Section 1: Fundamentals",
        title: "Arithmetic, Expressions & Operators",
        category: "Fundamentals",
        readTime: "4 min read",
        summary: "Understand binary arithmetic operators, unary minus, precedence rules, and automatic string concatenation.",
        body: `
            <h2>Operators &amp; Arithmetic</h2>
            <p>VerScript supports standard mathematical arithmetic:</p>
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Operator</th>
                        <th>Operation</th>
                        <th>Example</th>
                        <th>Output</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>+</code></td>
                        <td>Addition / Concatenation</td>
                        <td><code>10 + 20</code> / <code>"Score: " + 99</code></td>
                        <td><code>30</code> / <code>"Score: 99"</code></td>
                    </tr>
                    <tr>
                        <td><code>-</code></td>
                        <td>Subtraction / Unary Negation</td>
                        <td><code>50 - 15</code> / <code>-5</code></td>
                        <td><code>35</code> / <code>-5</code></td>
                    </tr>
                    <tr>
                        <td><code>*</code></td>
                        <td>Multiplication</td>
                        <td><code>6 * 7</code></td>
                        <td><code>42</code></td>
                    </tr>
                    <tr>
                        <td><code>/</code></td>
                        <td>Integer Division</td>
                        <td><code>100 / 4</code></td>
                        <td><code>25</code></td>
                    </tr>
                </tbody>
            </table>

            <h2>Automatic String Concatenation</h2>
            <p>Using the <code>+</code> operator with a string automatically converts numbers and booleans to strings:</p>
            <div class="code-block">msg : "Result is: " + (20 + 22)  ! "Result is: 42"</div>
        `,
        codeBlocks: [
            {
                id: "cb_expr_1",
                title: "expressions.vrs",
                code: `a : 15
b : 4
sum : a + b
product : a * b
ratio : a / b

display "Sum: " + sum ?color="cyan"
display "Product: " + product ?color="yellow"
display "Ratio: " + ratio ?color="green"`
            }
        ],
        exercises: [
            {
                id: "ex_expr_1",
                title: "Exercise 4.1: Compute Total Price",
                prompt: "Given <code>price : 45</code> and <code>qty : 3</code>, calculate <code>total : price * qty</code> and display <code>\"Total: $\" + total</code> in green.",
                starterCode: `price : 45
qty : 3
! TODO: Calculate total and display "Total: $" + total in green
`,
                hint: "Assign `total : price * qty`.",
                solution: `price : 45
qty : 3
total : price * qty
display "Total: $" + total ?color="green"`,
                expectedMatch: /Total: \$135/i
            },
            {
                id: "ex_expr_2",
                title: "Exercise 4.2: Unary Negation",
                prompt: "Create a negative number <code>delta : -25</code>, compute <code>final : 100 + delta</code>, and display <code>\"Final: \" + final</code> in yellow.",
                starterCode: `! TODO: Declare delta : -25, compute final : 100 + delta, and display in yellow
`,
                hint: "Use `-25` for unary negation.",
                solution: `delta : -25
final : 100 + delta
display "Final: " + final ?color="yellow"`,
                expectedMatch: /Final: 75/i
            },
            {
                id: "ex_expr_3",
                title: "Exercise 4.3: Multi-term Concatenation",
                prompt: "Display <code>\"Result: \" + (10 * 5 + 8)</code> in cyan.",
                starterCode: `! TODO: Output "Result: " + (10 * 5 + 8) in cyan
`,
                hint: "Compute arithmetic and concatenate in a single display command.",
                solution: `display "Result: " + (10 * 5 + 8) ?color="cyan"`,
                expectedMatch: /Result: 58/i
            }
        ]
    },

    {
        id: "ch5-comparisons",
        number: 5,
        section: "Section 1: Fundamentals",
        title: "Comparisons & Logical Guards",
        category: "Fundamentals",
        readTime: "4 min read",
        summary: "Master equality, inequality, inequality symbol x=, and numeric comparisons.",
        body: `
            <h2>Comparison Operators</h2>
            <p>VerScript provides clean comparison operators:</p>
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Operator</th>
                        <th>Comparison</th>
                        <th>Example</th>
                        <th>Result</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>=</code></td>
                        <td>Equality</td>
                        <td><code>10 = 10</code></td>
                        <td><code>true</code></td>
                    </tr>
                    <tr>
                        <td><code>x=</code></td>
                        <td>Inequality (Not Equal)</td>
                        <td><code>5 x= 10</code></td>
                        <td><code>true</code></td>
                    </tr>
                    <tr>
                        <td><code>&gt;</code></td>
                        <td>Greater Than</td>
                        <td><code>20 &gt; 10</code></td>
                        <td><code>true</code></td>
                    </tr>
                    <tr>
                        <td><code>&lt;</code></td>
                        <td>Less Than</td>
                        <td><code>5 &lt; 15</code></td>
                        <td><code>true</code></td>
                    </tr>
                    <tr>
                        <td><code>&gt;=</code></td>
                        <td>Greater Than or Equal</td>
                        <td><code>10 &gt;= 10</code></td>
                        <td><code>true</code></td>
                    </tr>
                    <tr>
                        <td><code>&lt;=</code></td>
                        <td>Less Than or Equal</td>
                        <td><code>9 &lt;= 10</code></td>
                        <td><code>true</code></td>
                    </tr>
                </tbody>
            </table>
        `,
        codeBlocks: [
            {
                id: "cb_comp_1",
                title: "comparisons.vrs",
                code: `score : 85
passing : 70

isPassing : score >= passing
isPerfect : score = 100
isNotZero : score x= 0

display "Passed: " + isPassing ?color="green"
display "Perfect Score: " + isPerfect ?color="yellow"
display "Non-Zero Score: " + isNotZero ?color="cyan"`
            }
        ],
        exercises: [
            {
                id: "ex_comp_1",
                title: "Exercise 5.1: Inequality Guard",
                prompt: "Check if <code>val : 42</code> is not equal to 0 using the <code>x=</code> operator and display the boolean result in cyan.",
                starterCode: `val : 42
! TODO: Check if val x= 0 and display result in cyan
`,
                hint: "Use `result : val x= 0` and display it.",
                solution: `val : 42
result : val x= 0
display "Not Zero: " + result ?color="cyan"`,
                expectedMatch: /Not Zero: true/i
            },
            {
                id: "ex_comp_2",
                title: "Exercise 5.2: Threshold Check",
                prompt: "Given <code>temp : 105</code> and <code>threshold : 100</code>, check if <code>temp > threshold</code> and display <code>\"Overheated: \" + isOver</code> in red.",
                starterCode: `temp : 105
threshold : 100
! TODO: Check temp > threshold and display in red
`,
                hint: "Assign `isOver : temp > threshold`.",
                solution: `temp : 105
threshold : 100
isOver : temp > threshold
display "Overheated: " + isOver ?color="red"`,
                expectedMatch: /Overheated: true/i
            },
            {
                id: "ex_comp_3",
                title: "Exercise 5.3: String Equality",
                prompt: "Compare <code>role : \"admin\"</code> with <code>\"admin\"</code> using <code>=</code> and display <code>\"Is Admin: \" + (role = \"admin\")</code> in green.",
                starterCode: `role : "admin"
! TODO: Compare role = "admin" and display in green
`,
                hint: "Use `role = \"admin\"`.",
                solution: `role : "admin"
display "Is Admin: " + (role = "admin") ?color="green"`,
                expectedMatch: /Is Admin: true/i
            }
        ]
    },

    // ═══════════════════════════════════════════════════════════════
    // SECTION 2: INPUT & OUTPUT MASTERY
    // ═══════════════════════════════════════════════════════════════
    {
        id: "ch6-display-command",
        number: 6,
        section: "Section 2: Input & Output Mastery",
        title: "The Display Command & Formatting Engine",
        category: "Input & Output",
        readTime: "6 min read",
        summary: "Dedicated guide to the display command, named ANSI colors, unquoted/quoted hex colors, Truecolor RGB output, and inline formatting.",
        body: `
            <h2>The <code>display</code> Command</h2>
            <p>The <code>display</code> keyword is VerScript's primary output statement. It evaluates expressions and writes them to standard output with optional formatting attributes.</p>

            <h2>Master Attributes for <code>display</code></h2>
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Attribute</th>
                        <th>Type / Values</th>
                        <th>Description</th>
                        <th>Syntax Example</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>?color</code></td>
                        <td><code>"name"</code> or <code>#hex</code></td>
                        <td>Colors output via ANSI escapes or Truecolor RGB. Supported names: <code>red</code>, <code>green</code>, <code>yellow</code>, <code>blue</code>, <code>purple</code>, <code>cyan</code>, <code>white</code>.</td>
                        <td><code>display "Hi" ?color="green"</code><br><code>display "Neon" ?color=#00ffcc</code></td>
                    </tr>
                    <tr>
                        <td><code>?newline</code></td>
                        <td><code>true</code> | <code>false</code></td>
                        <td>Whether to append a newline <code>\\n</code> after printing. Defaults to <code>true</code>.</td>
                        <td><code>display "Loading..." ?newline=false</code></td>
                    </tr>
                    <tr>
                        <td><code>?inline</code></td>
                        <td>Flag (no value)</td>
                        <td>Shorthand for <code>?newline=false</code> to keep cursor on current line.</td>
                        <td><code>display "Connecting: " ?inline ?color="yellow"</code></td>
                    </tr>
                </tbody>
            </table>

            <h2>Hex Color Values (Quoted &amp; Unquoted)</h2>
            <p>Hex attributes can be passed with or without quotation marks:</p>
            <div class="code-block">display "Pink text" ?color=#ff007f
display "Cyan text" ?color="#00ffff"
display "Short hex" ?color=#0fc</div>
            <p>When executed in native C or cloud environments, the engine translates hex values into 24-bit Truecolor escape sequences (<code>\\033[38;2;R;G;Bm</code>), rendering rich gradients across terminals and IDE output windows.</p>
        `,
        codeBlocks: [
            {
                id: "cb_display_1",
                title: "display_showcase.vrs",
                code: `! Named ANSI Colors
display "Status: Red Alert" ?color="red"
display "Status: Online" ?color="green"
display "Status: Warning" ?color="yellow"
display "Status: Info" ?color="cyan"

! Truecolor Hex Attributes (No quotes required)
display "Neon Magenta Text" ?color=#ff00aa
display "Cyberpunk Lime Text" ?color=#39ff14
display "Electric Blue Text" ?color=#00d2ff

! Inline printing on the same line
display "Progress: [" ?inline ?color="yellow"
display "====>" ?inline ?color="cyan"
display "] Done!" ?color="green"`
            }
        ],
        exercises: [
            {
                id: "ex_disp_1",
                title: "Exercise 6.1: Hex Color Styling",
                prompt: "Display <code>\"Cyberpunk Matrix Active\"</code> using unquoted hex color <code>?color=#00ffcc</code>.",
                starterCode: `! TODO: Display "Cyberpunk Matrix Active" with ?color=#00ffcc
`,
                hint: "Use `display \"Cyberpunk Matrix Active\" ?color=#00ffcc`.",
                solution: `display "Cyberpunk Matrix Active" ?color=#00ffcc`,
                expectedMatch: /Cyberpunk Matrix Active/i
            },
            {
                id: "ex_disp_2",
                title: "Exercise 6.2: Segmented Inline Progress",
                prompt: "Print <code>\"Step 1... \"</code> in yellow using <code>?inline</code>, followed by <code>\"Step 2... \"</code> in cyan using <code>?inline</code>, and finish with <code>\"Complete!\"</code> in green.",
                starterCode: `! TODO: Print 3 inline segments:
! 1. "Step 1... " (yellow, ?inline)
! 2. "Step 2... " (cyan, ?inline)
! 3. "Complete!" (green)
`,
                hint: "Use `?inline` on the first two display statements.",
                solution: `display "Step 1... " ?inline ?color="yellow"
display "Step 2... " ?inline ?color="cyan"
display "Complete!" ?color="green"`,
                expectedMatch: /Step 1\.\.\. Step 2\.\.\. Complete!/i
            },
            {
                id: "ex_disp_3",
                title: "Exercise 6.3: Multi-color Banner",
                prompt: "Create a 2-line header: line 1 <code>\"=== SYSTEM REPORT ===\"</code> in purple, line 2 <code>\"Core Status: 100%\"</code> in unquoted hex <code>?color=#50fa7b</code>.",
                starterCode: `! TODO: Create the 2-line header as specified
`,
                hint: "Write two display commands with purple and hex colors.",
                solution: `display "=== SYSTEM REPORT ===" ?color="purple"
display "Core Status: 100%" ?color=#50fa7b`,
                expectedMatch: /=== SYSTEM REPORT ===[\s\S]*Core Status: 100%/i
            }
        ]
    },

    {
        id: "ch7-prompt",
        number: 7,
        section: "Section 2: Input & Output Mastery",
        title: "Interactive Input & Prompt Attributes",
        category: "Input & Output",
        readTime: "4 min read",
        summary: "Capture interactive user input from standard input with dynamic fallback default attributes.",
        body: `
            <h2>The <code>prompt</code> Keyword</h2>
            <p>The <code>prompt</code> keyword pauses script execution and reads a line from standard input into a target variable.</p>

            <h2>Attributes for <code>prompt</code></h2>
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Attribute</th>
                        <th>Type</th>
                        <th>Description</th>
                        <th>Syntax Example</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>?default</code></td>
                        <td>String / Number</td>
                        <td>Provides a default fallback value if the user provides empty input (presses Enter without typing).</td>
                        <td><code>prompt username ?default="Guest"</code></td>
                    </tr>
                </tbody>
            </table>

            <h2>Automatic Type Coercion</h2>
            <p>If the user enters digits (e.g. <code>42</code>), the runtime automatically parses the value as an <code>Integer</code>. If non-numeric characters are present, it stores a <code>String</code>.</p>
        `,
        codeBlocks: [
            {
                id: "cb_prompt_1",
                title: "prompt_demo.vrs",
                code: `! Prompt with default fallback
prompt username ?default="Operator"
display "Welcome, " + username ?color="cyan"

prompt level ?default="1"
display "User Level: " + level ?color="yellow"`
            }
        ],
        exercises: [
            {
                id: "ex_prompt_1",
                title: "Exercise 7.1: User Prompt with Default",
                prompt: "Prompt for <code>heroName</code> with default <code>?default=\"Anonymous\"</code>, then display <code>\"Hero: \" + heroName</code> in green.",
                starterCode: `! TODO: Prompt heroName with ?default="Anonymous" and display in green
`,
                hint: "Use `prompt heroName ?default=\"Anonymous\"`.",
                solution: `prompt heroName ?default="Anonymous"
display "Hero: " + heroName ?color="green"`,
                expectedMatch: /Hero:/i
            },
            {
                id: "ex_prompt_2",
                title: "Exercise 7.2: Numeric Config Prompt",
                prompt: "Prompt for <code>port</code> with default <code>?default=\"8080\"</code>, and display <code>\"Listening on port: \" + port</code> in cyan.",
                starterCode: `! TODO: Prompt port with default 8080 and display
`,
                hint: "Use `prompt port ?default=\"8080\"`.",
                solution: `prompt port ?default="8080"
display "Listening on port: " + port ?color="cyan"`,
                expectedMatch: /Listening on port:/i
            },
            {
                id: "ex_prompt_3",
                title: "Exercise 7.3: Interactive Greeting Pipeline",
                prompt: "Prompt for <code>city</code> with default <code>\"Neo-Tokyo\"</code>, and display <code>\"Connected to: \" + city</code> with hex color <code>?color=#00e5ff</code>.",
                starterCode: `! TODO: Prompt city ?default="Neo-Tokyo" and display with ?color=#00e5ff
`,
                hint: "Use `prompt city ?default=\"Neo-Tokyo\"` and display.",
                solution: `prompt city ?default="Neo-Tokyo"
display "Connected to: " + city ?color=#00e5ff`,
                expectedMatch: /Connected to:/i
            }
        ]
    },

    // ═══════════════════════════════════════════════════════════════
    // SECTION 3: CONTROL FLOW & ITERATION
    // ═══════════════════════════════════════════════════════════════
    {
        id: "ch8-conditionals",
        number: 8,
        section: "Section 3: Control Flow & Iteration",
        title: "Conditional Branching & Guards",
        category: "Control Flow",
        readTime: "5 min read",
        summary: "Master multi-branch logic using if-then, else-if-then, and else blocks.",
        body: `
            <h2>Conditional Syntax</h2>
            <p>VerScript uses declarative <code>if ... then</code> statements scoped by indentation:</p>
            <div class="code-block">if score >= 90 then
    display "Grade: A" ?color="green"
else if score >= 80 then
    display "Grade: B" ?color="yellow"
else
    display "Grade: C" ?color="red"</div>

            <div class="callout-box tip">
                <div class="callout-title">💡 Indentation Rule</div>
                <p>All statements inside the <code>then</code> or <code>else</code> branch must be indented by 2 or 4 spaces relative to the <code>if</code> keyword.</p>
            </div>
        `,
        codeBlocks: [
            {
                id: "cb_cond_1",
                title: "conditionals.vrs",
                code: `health : 35

if health > 70 then
    display "Condition: Healthy" ?color="green"
else if health > 30 then
    display "Condition: Caution (Injured)" ?color="yellow"
else
    display "Condition: Critical!" ?color="red"`
            }
        ],
        exercises: [
            {
                id: "ex_cond_1",
                title: "Exercise 8.1: Access Gatekeeper",
                prompt: "Given <code>accessLevel : 5</code>, write an <code>if accessLevel >= 5 then</code> block to display <code>\"Access Granted\"</code> in green, otherwise display <code>\"Access Denied\"</code> in red.",
                starterCode: `accessLevel : 5
! TODO: Write if accessLevel >= 5 then ... else ...
`,
                hint: "Indent the display command inside the `if` block.",
                solution: `accessLevel : 5
if accessLevel >= 5 then
    display "Access Granted" ?color="green"
else
    display "Access Denied" ?color="red"`,
                expectedMatch: /Access Granted/i
            },
            {
                id: "ex_cond_2",
                title: "Exercise 8.2: Multi-tier Score Evaluation",
                prompt: "Evaluate <code>points : 88</code>: if points >= 90 print <code>\"Gold\"</code> in yellow, else if points >= 75 print <code>\"Silver\"</code> in cyan, else print <code>\"Bronze\"</code> in red.",
                starterCode: `points : 88
! TODO: Implement 3-tier branch
`,
                hint: "Use `else if points >= 75 then`.",
                solution: `points : 88
if points >= 90 then
    display "Gold" ?color="yellow"
else if points >= 75 then
    display "Silver" ?color="cyan"
else
    display "Bronze" ?color="red"`,
                expectedMatch: /Silver/i
            },
            {
                id: "ex_cond_3",
                title: "Exercise 8.3: Boolean Condition Evaluation",
                prompt: "Given <code>isServerActive : true</code>, test <code>if isServerActive then</code> and display <code>\"Online\"</code> in green.",
                starterCode: `isServerActive : true
! TODO: Check boolean condition and display "Online"
`,
                hint: "Use `if isServerActive then` directly.",
                solution: `isServerActive : true
if isServerActive then
    display "Online" ?color="green"`,
                expectedMatch: /Online/i
            }
        ]
    },

    {
        id: "ch9-loops",
        number: 9,
        section: "Section 3: Control Flow & Iteration",
        title: "Count Loops & Stepped Repetition",
        category: "Control Flow",
        readTime: "5 min read",
        summary: "Execute fixed count repetitions with the loop keyword and step size constraints.",
        body: `
            <h2>The <code>loop</code> Keyword</h2>
            <p>The <code>loop</code> keyword repeats an indented block a specified number of times.</p>

            <h2>Attributes &amp; Modifiers for <code>loop</code></h2>
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Modifier / Attribute</th>
                        <th>Type</th>
                        <th>Description</th>
                        <th>Syntax Example</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>step N</code></td>
                        <td>Integer</td>
                        <td>Advances the loop counter by <code>N</code> units per iteration instead of 1.</td>
                        <td><code>loop 10 step 2</code></td>
                    </tr>
                </tbody>
            </table>

            <div class="code-block">loop 4
    display "Pinging node..." ?color="cyan"</div>
        `,
        codeBlocks: [
            {
                id: "cb_loop_1",
                title: "loop_demo.vrs",
                code: `display "=== Pulse Loop (4 Cycles) ===" ?color="purple"
loop 4
    display "Heartbeat tick" ?color="green"

display "=== Stepped Loop (Step 2) ===" ?color="yellow"
loop 6 step 2
    display "Stepped tick (+2)" ?color="cyan"`
            }
        ],
        exercises: [
            {
                id: "ex_loop_1",
                title: "Exercise 9.1: Basic Count Loop",
                prompt: "Write a loop that prints <code>\"Repeating action\"</code> 3 times in yellow.",
                starterCode: `! TODO: Write loop 3 and print "Repeating action" in yellow
`,
                hint: "Use `loop 3` followed by indented display.",
                solution: `loop 3
    display "Repeating action" ?color="yellow"`,
                expectedMatch: /(Repeating action[\s\S]*){3}/i
            },
            {
                id: "ex_loop_2",
                title: "Exercise 9.2: Stepped Count Loop",
                prompt: "Write a loop <code>loop 10 step 3</code> that displays <code>\"Step pulse\"</code> in cyan.",
                starterCode: `! TODO: Write loop 10 step 3
`,
                hint: "Use `loop 10 step 3`.",
                solution: `loop 10 step 3
    display "Step pulse" ?color="cyan"`,
                expectedMatch: /Step pulse/i
            },
            {
                id: "ex_loop_3",
                title: "Exercise 9.3: Nested Loops",
                prompt: "Write an outer <code>loop 2</code> and an inner <code>loop 2</code> displaying <code>\"Grid cell\"</code> in green.",
                starterCode: `! TODO: Create nested loop 2 inside loop 2
`,
                hint: "Indent the inner loop by 2 or 4 spaces, and its body further.",
                solution: `loop 2
    loop 2
        display "Grid cell" ?color="green"`,
                expectedMatch: /(Grid cell[\s\S]*){4}/i
            }
        ]
    },

    {
        id: "ch10-iterate",
        number: 10,
        section: "Section 3: Control Flow & Iteration",
        title: "Range Iterations & Variable Sequences",
        category: "Control Flow",
        readTime: "5 min read",
        summary: "Iterate across numerical ranges with automatic index binding and step modifiers.",
        body: `
            <h2>The <code>iterate</code> Keyword</h2>
            <p>The <code>iterate</code> keyword binds an iterator variable across an inclusive integer range from start to end:</p>
            <div class="code-block">iterate idx from 1 to 5
    display "Index: " + idx ?color="cyan"</div>

            <h2>Modifiers for <code>iterate</code></h2>
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Modifier / Attribute</th>
                        <th>Type</th>
                        <th>Description</th>
                        <th>Syntax Example</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>from X to Y</code></td>
                        <td>Integers</td>
                        <td>Defines inclusive lower and upper numeric boundaries.</td>
                        <td><code>iterate i from 10 to 50</code></td>
                    </tr>
                    <tr>
                        <td><code>step S</code></td>
                        <td>Integer</td>
                        <td>Increments iterator variable by <code>S</code> after each pass.</td>
                        <td><code>iterate i from 0 to 100 step 20</code></td>
                    </tr>
                </tbody>
            </table>
        `,
        codeBlocks: [
            {
                id: "cb_iter_1",
                title: "iterate_demo.vrs",
                code: `display "=== Sequential Counting ===" ?color="purple"
iterate i from 1 to 4
    display "Count: " + i ?color="green"

display "=== Stepped Sequence (+5) ===" ?color="yellow"
iterate x from 10 to 30 step 5
    display "Value at step: " + x ?color="cyan"`
            }
        ],
        exercises: [
            {
                id: "ex_iter_1",
                title: "Exercise 10.1: Standard Range Iteration",
                prompt: "Iterate <code>i</code> from 1 to 4 and display <code>\"Iteration: \" + i</code> in cyan.",
                starterCode: `! TODO: Write iterate i from 1 to 4
`,
                hint: "Use `iterate i from 1 to 4`.",
                solution: `iterate i from 1 to 4
    display "Iteration: " + i ?color="cyan"`,
                expectedMatch: /Iteration: 1[\s\S]*Iteration: 4/i
            },
            {
                id: "ex_iter_2",
                title: "Exercise 10.2: Stepped Range Sequence",
                prompt: "Iterate <code>val</code> from 10 to 40 step 10 and display <code>\"Val: \" + val</code> in yellow.",
                starterCode: `! TODO: Write iterate val from 10 to 40 step 10
`,
                hint: "Use `step 10` after the `to 40` bound.",
                solution: `iterate val from 10 to 40 step 10
    display "Val: " + val ?color="yellow"`,
                expectedMatch: /Val: 10[\s\S]*Val: 40/i
            },
            {
                id: "ex_iter_3",
                title: "Exercise 10.3: Accumulating Sum",
                prompt: "Declare <code>sum : 0</code>. Iterate <code>n</code> from 1 to 5, accumulating <code>sum : sum + n</code>, and display <code>\"Final Sum: \" + sum</code> in green.",
                starterCode: `sum : 0
! TODO: Iterate n from 1 to 5, add to sum, and display final sum
`,
                hint: "Inside loop: `sum : sum + n`.",
                solution: `sum : 0
iterate n from 1 to 5
    sum : sum + n
display "Final Sum: " + sum ?color="green"`,
                expectedMatch: /Final Sum: 15/i
            }
        ]
    },

    {
        id: "ch11-while-until",
        number: 11,
        section: "Section 3: Control Flow & Iteration",
        title: "Dynamic Guard Loops: While & Until",
        category: "Control Flow",
        readTime: "5 min read",
        summary: "Execute dynamic condition-driven loops with while and until statements.",
        body: `
            <h2><code>while</code> vs <code>until</code> Loops</h2>
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Keyword</th>
                        <th>Condition Rule</th>
                        <th>Syntax Example</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>while</code></td>
                        <td>Executes repeatedly as long as the condition evaluates to <code>true</code>.</td>
                        <td><code>while count &lt; 5</code></td>
                    </tr>
                    <tr>
                        <td><code>until</code></td>
                        <td>Executes repeatedly until the condition becomes <code>true</code> (runs while false).</td>
                        <td><code>until energy &gt;= 100</code></td>
                    </tr>
                </tbody>
            </table>

            <h2>Step Modifier on While / Until</h2>
            <p>Both <code>while</code> and <code>until</code> accept an optional <code>step N</code> modifier to gate execution cadence.</p>
        `,
        codeBlocks: [
            {
                id: "cb_while_1",
                title: "while_until_demo.vrs",
                code: `! While loop
count : 1
while count <= 3
    display "While tick: " + count ?color="cyan"
    count : count + 1

! Until loop
energy : 10
until energy >= 40
    display "Charging: " + energy ?color="yellow"
    energy : energy + 15
display "Fully charged!" ?color="green"`
            }
        ],
        exercises: [
            {
                id: "ex_while_1",
                title: "Exercise 11.1: While Loop Counter",
                prompt: "Declare <code>k : 1</code>. Run <code>while k <= 3</code>, display <code>\"K: \" + k</code> in cyan, and increment <code>k : k + 1</code>.",
                starterCode: `k : 1
! TODO: Write while loop up to k <= 3
`,
                hint: "Remember to increment `k : k + 1` inside the loop body.",
                solution: `k : 1
while k <= 3
    display "K: " + k ?color="cyan"
    k : k + 1`,
                expectedMatch: /K: 1[\s\S]*K: 3/i
            },
            {
                id: "ex_while_2",
                title: "Exercise 11.2: Until Loop Battery Charge",
                prompt: "Declare <code>power : 20</code>. Run <code>until power >= 60</code>, incrementing <code>power : power + 20</code> and displaying <code>\"Power: \" + power</code> in yellow.",
                starterCode: `power : 20
! TODO: Write until power >= 60 loop
`,
                hint: "Use `until power >= 60`.",
                solution: `power : 20
until power >= 60
    display "Power: " + power ?color="yellow"
    power : power + 20`,
                expectedMatch: /Power: 20[\s\S]*Power: 40/i
            },
            {
                id: "ex_while_3",
                title: "Exercise 11.3: Convergence Loop",
                prompt: "Declare <code>n : 64</code>. While <code>n > 8</code>, divide <code>n : n / 2</code> and display <code>\"n: \" + n</code> in green.",
                starterCode: `n : 64
! TODO: While n > 8 divide by 2
`,
                hint: "Use `while n > 8` and `n : n / 2`.",
                solution: `n : 64
while n > 8
    n : n / 2
    display "n: " + n ?color="green"`,
                expectedMatch: /n: 32[\s\S]*n: 8/i
            }
        ]
    },

    // ═══════════════════════════════════════════════════════════════
    // SECTION 4: ADVANCED EXCEPTION ARCHITECTURE
    // ═══════════════════════════════════════════════════════════════
    {
        id: "ch12-do-unless",
        number: 12,
        section: "Section 4: Advanced Exception Architecture",
        title: "Try-Unless Architecture & Watch Guards",
        category: "Exception Handling",
        readTime: "6 min read",
        summary: "Harness VerScript's signature do-unless construct, internal reactive line-by-line watch guards, and external condition gates.",
        body: `
            <h2>The <code>do ... unless</code> Paradigm</h2>
            <p>In VerScript, exception handling and condition-gated execution are unified in the <code>do ... unless</code> statement.</p>

            <h2>Mode Modifiers for <code>unless</code></h2>
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Modifier</th>
                        <th>Execution Model</th>
                        <th>Description</th>
                        <th>Syntax Example</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>internal</code></td>
                        <td>Reactive Watch Guard</td>
                        <td>Monitors expression line-by-line. If condition becomes true after ANY line, execution of <code>do</code> immediately halts and transfers to <code>unless</code>.</td>
                        <td><code>do<br>&nbsp;&nbsp;...<br>unless internal pressure &gt; 100</code></td>
                    </tr>
                    <tr>
                        <td><code>external</code></td>
                        <td>Gatekeeper Guard</td>
                        <td>Evaluates expression once beforehand. If true, runs <code>unless</code> block; if false, runs <code>do</code> block.</td>
                        <td><code>do<br>&nbsp;&nbsp;...<br>unless external isLocked = true</code></td>
                    </tr>
                    <tr>
                        <td><em>(Default Error)</em></td>
                        <td>Error Catch Guard</td>
                        <td>Catches exceptions thrown inside the <code>do</code> block matching an error name or universal <code>error</code>.</td>
                        <td><code>do<br>&nbsp;&nbsp;...<br>unless DivisionByZeroError</code></td>
                    </tr>
                </tbody>
            </table>
        `,
        codeBlocks: [
            {
                id: "cb_dounless_1",
                title: "do_unless_demo.vrs",
                code: `! 1. Reactive Internal Watch Condition
temp : 80
do
    display "Checking reactor core..." ?color="cyan"
    temp : temp + 40
    display "This line will NOT execute because temp exceeded 100!" ?color="red"
unless internal temp > 100
    display "WATCHDOG TRIGGERED: Temperature reached " + temp ?color="yellow"

! 2. Error Catching
do
    display "Dividing by zero..." ?color="cyan"
    bad_val : 100 / 0
unless DivisionByZeroError
    display "Safely caught DivisionByZeroError!" ?color="green"`
            }
        ],
        exercises: [
            {
                id: "ex_dounless_1",
                title: "Exercise 12.1: Catch Division by Zero",
                prompt: "Wrap a division by zero in <code>do ... unless DivisionByZeroError</code> and display <code>\"Bypassed Zero Error\"</code> in green.",
                starterCode: `! TODO: Write do ... unless DivisionByZeroError
do
    x : 10 / 0
unless DivisionByZeroError
`,
                hint: "Add `display \"Bypassed Zero Error\" ?color=\"green\"` inside the `unless` block.",
                solution: `do
    x : 10 / 0
unless DivisionByZeroError
    display "Bypassed Zero Error" ?color="green"`,
                expectedMatch: /Bypassed Zero Error/i
            },
            {
                id: "ex_dounless_2",
                title: "Exercise 12.2: Reactive Internal Watchdog",
                prompt: "Declare <code>fuel : 50</code>. Write a <code>do</code> block that subtracts <code>fuel : fuel - 40</code>, with <code>unless internal fuel < 20</code> displaying <code>\"Low Fuel Warning\"</code> in yellow.",
                starterCode: `fuel : 50
! TODO: Implement do ... unless internal fuel < 20
`,
                hint: "Use `unless internal fuel < 20`.",
                solution: `fuel : 50
do
    fuel : fuel - 40
    display "Should not reach here"
unless internal fuel < 20
    display "Low Fuel Warning" ?color="yellow"`,
                expectedMatch: /Low Fuel Warning/i
            },
            {
                id: "ex_dounless_3",
                title: "Exercise 12.3: External Condition Gate",
                prompt: "Declare <code>isMaintenanceMode : true</code>. Write <code>do ... unless external isMaintenanceMode = true</code> displaying <code>\"System In Maintenance\"</code> in red.",
                starterCode: `isMaintenanceMode : true
! TODO: Write do ... unless external isMaintenanceMode = true
`,
                hint: "Use `unless external isMaintenanceMode = true`.",
                solution: `isMaintenanceMode : true
do
    display "Normal system operation"
unless external isMaintenanceMode = true
    display "System In Maintenance" ?color="red"`,
                expectedMatch: /System In Maintenance/i
            }
        ]
    },

    {
        id: "ch13-error-scopes",
        number: 13,
        section: "Section 4: Advanced Exception Architecture",
        title: "Error Scopes & Suppression Blocks",
        category: "Exception Handling",
        readTime: "5 min read",
        summary: "Control system tolerance with SuppressErrors, CriticalErrors, and ForceErrors scopes.",
        body: `
            <h2>Scoped Error Directives</h2>
            <p>VerScript provides 3 declarative scoped error directives to control how the runtime treats errors:</p>

            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Scope Directive</th>
                        <th>Behavior</th>
                        <th>Use Case</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>SuppressErrors</code></td>
                        <td>Silently catches all non-critical exceptions; script execution skips the failing instruction and continues uninterrupted.</td>
                        <td>Resilient batch pipelines, network fallbacks, best-effort evaluations.</td>
                    </tr>
                    <tr>
                        <td><code>CriticalErrors</code></td>
                        <td>Allows standard exceptions to proceed to <code>unless</code> catch handlers, but immediately crashes on fatal memory or system errors.</td>
                        <td>Production backend services.</td>
                    </tr>
                    <tr>
                        <td><code>ForceErrors</code></td>
                        <td>Disables all error bypasses; any runtime issue halts immediately with full diagnostics.</td>
                        <td>Test suites, validation pipelines, strict debugging.</td>
                    </tr>
                </tbody>
            </table>
        `,
        codeBlocks: [
            {
                id: "cb_scopes_1",
                title: "error_scopes.vrs",
                code: `display "=== 1. SuppressErrors Scope ===" ?color="purple"
SuppressErrors
    display "Attempting division by zero under SuppressErrors..." ?color="yellow"
    bad_val : 50 / 0
    display "Notice: Error was suppressed, script continued!" ?color="green"

display "=== Pipeline Continues Smoothly ===" ?color="cyan"`
            }
        ],
        exercises: [
            {
                id: "ex_scopes_1",
                title: "Exercise 13.1: Suppress Dangerous Calculations",
                prompt: "Execute an invalid operation inside a <code>SuppressErrors</code> block and display <code>\"Safe continuation\"</code> in green after it.",
                starterCode: `! TODO: Write SuppressErrors block containing 10 / 0 and display message
`,
                hint: "Indent the failing calculation under `SuppressErrors`.",
                solution: `SuppressErrors
    bad : 10 / 0
display "Safe continuation" ?color="green"`,
                expectedMatch: /Safe continuation/i
            },
            {
                id: "ex_scopes_2",
                title: "Exercise 13.2: Multi-step Suppressed Pipeline",
                prompt: "Inside <code>SuppressErrors</code>, perform two undefined operations, followed by displaying <code>\"Pipeline Finished\"</code> in cyan.",
                starterCode: `! TODO: Perform 2 failing calculations in SuppressErrors
`,
                hint: "All failures inside `SuppressErrors` are safely bypassed.",
                solution: `SuppressErrors
    x : 10 / 0
    y : 20 / 0
display "Pipeline Finished" ?color="cyan"`,
                expectedMatch: /Pipeline Finished/i
            },
            {
                id: "ex_scopes_3",
                title: "Exercise 13.3: ForceErrors Validation",
                prompt: "Write a safe calculation under <code>ForceErrors</code> and display <code>\"Strict Verification Passed\"</code> in green.",
                starterCode: `! TODO: Write a ForceErrors block with valid code
`,
                hint: "Under `ForceErrors`, valid code runs normally.",
                solution: `ForceErrors
    valid : 100 * 2
display "Strict Verification Passed" ?color="green"`,
                expectedMatch: /Strict Verification Passed/i
            }
        ]
    },

    {
        id: "ch14-custom-exceptions",
        number: 14,
        section: "Section 4: Advanced Exception Architecture",
        title: "Custom Exceptions, Signals & Attributes",
        category: "Exception Handling",
        readTime: "5 min read",
        summary: "Throw custom named exceptions with message attributes and catch or rethrow errors.",
        body: `
            <h2>The <code>throw</code> Statement</h2>
            <p>Use <code>throw</code> to emit custom exception signals.</p>

            <h2>Attributes for <code>throw</code></h2>
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Attribute</th>
                        <th>Type</th>
                        <th>Description</th>
                        <th>Syntax Example</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>?msg</code></td>
                        <td>String</td>
                        <td>Attaches a descriptive custom error payload to the exception.</td>
                        <td><code>throw HardwareFault ?msg="Sensor timeout"</code></td>
                    </tr>
                </tbody>
            </table>

            <h2>Rethrowing Errors (<code>throw error</code>)</h2>
            <p>Inside an <code>unless</code> catch handler, calling <code>throw error</code> re-propagates the currently active exception up the call stack.</p>
        `,
        codeBlocks: [
            {
                id: "cb_throw_1",
                title: "custom_throw.vrs",
                code: `do
    display "Verifying sensor reading..." ?color="cyan"
    throw SensorFailure ?msg="Voltage dropped below 3.3V"
unless SensorFailure
    display "Caught custom exception: " + error ?color="yellow"`
            }
        ],
        exercises: [
            {
                id: "ex_throw_1",
                title: "Exercise 14.1: Throw Custom Exception",
                prompt: "Throw a <code>NetworkTimeout</code> exception with <code>?msg=\"Connection lost\"</code> inside a <code>do ... unless NetworkTimeout</code> block and print <code>\"Recovered from Timeout\"</code> in green.",
                starterCode: `! TODO: Throw NetworkTimeout ?msg="Connection lost" and catch it
`,
                hint: "Use `throw NetworkTimeout ?msg=\"Connection lost\"`.",
                solution: `do
    throw NetworkTimeout ?msg="Connection lost"
unless NetworkTimeout
    display "Recovered from Timeout" ?color="green"`,
                expectedMatch: /Recovered from Timeout/i
            },
            {
                id: "ex_throw_2",
                title: "Exercise 14.2: Catch Universal Error",
                prompt: "Throw a custom <code>InvalidStateError</code> and catch it using the universal <code>unless error</code> catch handler, displaying <code>\"Caught: \" + error</code>.",
                starterCode: `! TODO: Throw InvalidStateError and catch with unless error
`,
                hint: "`unless error` catches any thrown exception.",
                solution: `do
    throw InvalidStateError ?msg="Bad state"
unless error
    display "Caught: " + error ?color="yellow"`,
                expectedMatch: /Caught: InvalidStateError/i
            },
            {
                id: "ex_throw_3",
                title: "Exercise 14.3: Custom Authorization Fault",
                prompt: "Given <code>isAuth : false</code>, check if not auth and throw <code>AuthError ?msg=\"Denied\"</code>, catching and displaying in red.",
                starterCode: `isAuth : false
! TODO: If not isAuth throw AuthError and catch
`,
                hint: "Use `do` with `if isAuth = false then throw AuthError ?msg=\"Denied\"`.",
                solution: `isAuth : false
do
    if isAuth = false then
        throw AuthError ?msg="Denied"
unless AuthError
    display "Caught Auth Fault" ?color="red"`,
                expectedMatch: /Caught Auth Fault/i
            }
        ]
    },

    // ═══════════════════════════════════════════════════════════════
    // SECTION 5: POLYGLOT & METAPROGRAMMING
    // ═══════════════════════════════════════════════════════════════
    {
        id: "ch15-inject",
        number: 15,
        section: "Section 5: Polyglot & Metaprogramming",
        title: "Polyglot Code Injection (100+ Languages)",
        category: "Metaprogramming",
        readTime: "6 min read",
        summary: "Embed and execute source code from over 100 major languages directly inside VerScript scripts.",
        body: `
            <h2>The <code>inject</code> Keyword</h2>
            <p>The <code>inject</code> statement enables polyglot execution. You can embed raw source code from over 100 programming languages (Python, JavaScript, Rust, C, Go, Java, TypeScript, Ruby, Shell, etc.) seamlessly.</p>

            <h2>Attributes for <code>inject</code></h2>
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Attribute</th>
                        <th>Type</th>
                        <th>Description</th>
                        <th>Syntax Example</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>?color</code></td>
                        <td><code>"name"</code> or <code>#hex</code></td>
                        <td>Colors execution status tags in terminal output.</td>
                        <td><code>inject python ?color="cyan"</code></td>
                    </tr>
                </tbody>
            </table>

            <h2>Dynamic <code>eval</code> via <code>inject verscript</code></h2>
            <p>Passing <code>inject verscript</code> (or <code>inject vrs</code> / <code>inject eval</code>) evaluates embedded VerScript code dynamically within the current runtime scope, just like JavaScript's <code>eval()</code>.</p>
        `,
        codeBlocks: [
            {
                id: "cb_inject_1",
                title: "polyglot_demo.vrs",
                code: `! 1. Python Code Injection
inject python ?color="yellow"
    def calculate_fib(n):
        return n if n <= 1 else calculate_fib(n-1) + calculate_fib(n-2)
    print("Python Fibonacci Result:", calculate_fib(10))

! 2. JavaScript Code Injection
inject javascript ?color="cyan"
    const sum = [10, 20, 30].reduce((a, b) => a + b, 0);
    console.log("JS Sum:", sum);

! 3. Dynamic VerScript Eval
inject verscript
    eval_msg : "Evaluated inside dynamic VerScript sub-scope!"
    display eval_msg ?color="green"`
            }
        ],
        exercises: [
            {
                id: "ex_inj_1",
                title: "Exercise 15.1: Inject Python Script",
                prompt: "Embed a Python code snippet that calculates <code>2 ** 8</code> using <code>inject python</code>.",
                starterCode: `! TODO: Write an inject python block
`,
                hint: "Use `inject python` followed by indented python code.",
                solution: `inject python ?color="yellow"
    val = 2 ** 8
    print("Power:", val)`,
                expectedMatch: /\[Inject:python\]|Power:/i
            },
            {
                id: "ex_inj_2",
                title: "Exercise 15.2: Dynamic VerScript Sub-Execution",
                prompt: "Use <code>inject verscript</code> to evaluate a dynamic block that sets <code>dyn : 777</code> and displays <code>\"Dynamic Value: \" + dyn</code> in green.",
                starterCode: `! TODO: Write inject verscript block
`,
                hint: "Use `inject verscript` with indented VerScript commands.",
                solution: `inject verscript
    dyn : 777
    display "Dynamic Value: " + dyn ?color="green"`,
                expectedMatch: /Dynamic Value: 777/i
            },
            {
                id: "ex_inj_3",
                title: "Exercise 15.3: Inject Rust / C Algorithms",
                prompt: "Embed a Rust function signature inside an <code>inject rust</code> block with <code>?color=\"cyan\"</code>.",
                starterCode: `! TODO: Write inject rust with ?color="cyan"
`,
                hint: "Use `inject rust ?color=\"cyan\"`.",
                solution: `inject rust ?color="cyan"
    fn compute() -> i32 { 42 }`,
                expectedMatch: /\[Inject:rust\]/i
            }
        ]
    },

    {
        id: "ch16-alias",
        number: 16,
        section: "Section 5: Polyglot & Metaprogramming",
        title: "Alias Remapping & Custom Syntax",
        category: "Metaprogramming",
        readTime: "6 min read",
        summary: "Remap keywords, rename commands, map custom attribute names, and create domain-specific languages with alias.",
        body: `
            <h2>The <code>alias</code> Keyword</h2>
            <p>The <code>alias</code> keyword allows you to customize the grammar of VerScript at runtime:</p>
            <ul>
                <li><strong>Single-Line:</strong> <code>alias cmd1: cmd2</code> (renames existing command <code>cmd1</code> to new alias <code>cmd2</code>).</li>
                <li><strong>Attribute Mapping:</strong> <code>alias cmd1: cmd2 ? arg1=arg3 arg2=arg4</code> (maps original attribute <code>arg1</code> to custom attribute <code>arg3</code>).</li>
                <li><strong>Multi-Line Block:</strong>
                    <div class="code-block">alias:
    display: print
    loop: repeat
    iterate: for ? step=by</div>
                </li>
            </ul>

            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Alias Rule</th>
                        <th>Syntax</th>
                        <th>Expanded Result</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Command Rename</td>
                        <td><code>alias display: print</code></td>
                        <td><code>print "Hello"</code> &rarr; <code>display "Hello"</code></td>
                    </tr>
                    <tr>
                        <td>Attribute Mapping</td>
                        <td><code>alias display: echo ? color=tint</code></td>
                        <td><code>echo "Hi" ?tint="cyan"</code> &rarr; <code>display "Hi" ?color="cyan"</code></td>
                    </tr>
                </tbody>
            </table>
        `,
        codeBlocks: [
            {
                id: "cb_alias_1",
                title: "alias_showcase.vrs",
                code: `! 1. Single-line command alias
alias display: print
print "Hello from print alias!" ?color="green"

! 2. Alias with attribute mapping
alias display: echo ? color=tint newline=inline
echo "Segment 1, " ?tint="yellow" ?inline=false
echo "Segment 2!" ?tint="cyan"

! 3. Multi-line alias block
alias:
    loop: repeat
    iterate: for ? step=by

repeat 2
    print "Repeat loop active" ?color="purple"

for i from 10 to 30 ?by=10
    print "Iterating as for: " + i ?color="yellow"`
            }
        ],
        exercises: [
            {
                id: "ex_alias_1",
                title: "Exercise 16.1: Command Alias",
                prompt: "Alias <code>display</code> as <code>print</code> and display <code>\"Aliased Output\"</code> in green using <code>print</code>.",
                starterCode: `! TODO: Define alias display: print and use it
`,
                hint: "Write `alias display: print` then `print \"Aliased Output\" ?color=\"green\"`.",
                solution: `alias display: print
print "Aliased Output" ?color="green"`,
                expectedMatch: /Aliased Output/i
            },
            {
                id: "ex_alias_2",
                title: "Exercise 16.2: Attribute Remapping",
                prompt: "Alias <code>display</code> as <code>log</code> with <code>?color=tint</code>, and output <code>\"Mapped Attribute\"</code> using <code>?tint=\"cyan\"</code>.",
                starterCode: `! TODO: Write alias display: log ? color=tint
`,
                hint: "Use `alias display: log ? color=tint`.",
                solution: `alias display: log ? color=tint
log "Mapped Attribute" ?tint="cyan"`,
                expectedMatch: /Mapped Attribute/i
            },
            {
                id: "ex_alias_3",
                title: "Exercise 16.3: Multi-line Alias Block",
                prompt: "Create an <code>alias:</code> block mapping <code>loop: repeat</code> and execute <code>repeat 2</code> printing <code>\"Pass\"</code>.",
                starterCode: `! TODO: Create alias: block and execute repeat 2
`,
                hint: "Indent `loop: repeat` under `alias:`.",
                solution: `alias:
    loop: repeat
repeat 2
    display "Pass" ?color="green"`,
                expectedMatch: /(Pass[\s\S]*){2}/i
            }
        ]
    },

    // ═══════════════════════════════════════════════════════════════
    // SECTION 6: APPLIED SYSTEMS & REFERENCE
    // ═══════════════════════════════════════════════════════════════
    {
        id: "ch17-grandmaster-capstone",
        number: 17,
        section: "Section 6: Applied Systems & Reference",
        title: "Grandmaster Capstone: Complex Systems & Pipelines",
        category: "Systems Engineering",
        readTime: "8 min read",
        summary: "Challenge yourself with 8 complex systems engineering challenges testing the full depth of VerScript capabilities.",
        body: `
            <h2>Grandmaster Systems Certification</h2>
            <p>Welcome to the Grandmaster Capstone. This capstone challenges you to combine reactive watch conditions, stepped loops, suppression scopes, polyglot injection, custom exception hierarchies, and alias metaprogramming into complete, production-grade systems.</p>
        `,
        codeBlocks: [
            {
                id: "cb_capstone_1",
                title: "capstone_pipeline.vrs",
                code: `! Grandmaster Systems Engineering Showcase
alias:
    display: emit ? color=tint
    loop: repeat

do
    emit "=== Booting Autonomous Watchdog Core ===" ?tint="purple"
    pressure : 120
    repeat 4
        emit "Core Pressure: " + pressure ?tint="cyan"
        pressure : pressure + 60
unless internal pressure > 300
    emit "ALERT: Pressure threshold breached at " + pressure ?tint="yellow"`
            }
        ],
        exercises: [
            {
                id: "ex_cap_1",
                title: "Challenge 17.1: Reactor Core Watchdog",
                prompt: "Create an <code>alias:</code> block mapping <code>display: log ? color=tint</code> and <code>loop: cycle</code>. In a <code>do</code> block, start with <code>coreTemp : 150</code>, run <code>cycle 4</code> adding <code>coreTemp : coreTemp + 60</code>, and catch with <code>unless internal coreTemp > 300</code> displaying <code>\"CRITICAL TEMP SHUTDOWN: \" + coreTemp</code> in yellow.",
                starterCode: `! TODO: Implement Challenge 17.1
`,
                hint: "Use `alias:`, `do`, `cycle 4`, and `unless internal coreTemp > 300`.",
                solution: `alias:
    display: log ? color=tint
    loop: cycle
do
    coreTemp : 150
    cycle 4
        coreTemp : coreTemp + 60
unless internal coreTemp > 300
    log "CRITICAL TEMP SHUTDOWN: " + coreTemp ?tint="yellow"`,
                expectedMatch: /CRITICAL TEMP SHUTDOWN: 330/i
            },
            {
                id: "ex_cap_2",
                title: "Challenge 17.2: Polyglot Matrix Data Bus",
                prompt: "Build a multi-language pipeline: 1) <code>inject python</code> computing a hash, 2) <code>inject javascript</code> computing an array sum, 3) <code>inject verscript</code> calculating <code>bus_total : 500 + 250</code> and displaying <code>\"Bus Total: \" + bus_total</code> in green.",
                starterCode: `! TODO: Implement Challenge 17.2
`,
                hint: "Chain `inject python`, `inject javascript`, and `inject verscript`.",
                solution: `inject python ?color="yellow"
    h = sum([ord(c) for c in "VER"])
    print("Python Hash:", h)

inject javascript ?color="cyan"
    console.log("JS Matrix Checksum:", [1,2,3,4].reduce((a,b)=>a*b, 1))

inject verscript
    bus_total : 500 + 250
    display "Bus Total: " + bus_total ?color="green"`,
                expectedMatch: /Bus Total: 750/i
            },
            {
                id: "ex_cap_3",
                title: "Challenge 17.3: Stepped Sieve Calculation Engine",
                prompt: "Declare <code>accumulator : 0</code>. Run <code>iterate step_idx from 10 to 50 step 10</code>, adding <code>accumulator : accumulator + step_idx</code>. Display <code>\"Accumulated Sieve Total: \" + accumulator</code> in cyan.",
                starterCode: `accumulator : 0
! TODO: Implement Challenge 17.3
`,
                hint: "Use `step 10` on the iteration.",
                solution: `accumulator : 0
iterate step_idx from 10 to 50 step 10
    accumulator : accumulator + step_idx
display "Accumulated Sieve Total: " + accumulator ?color="cyan"`,
                expectedMatch: /Accumulated Sieve Total: 150/i
            },
            {
                id: "ex_cap_4",
                title: "Challenge 17.4: Autonomous Network Retry Engine",
                prompt: "Build an autonomous retry loop: set <code>attempts : 0</code> and <code>max_retries : 3</code>. Run <code>while attempts < max_retries</code> inside <code>SuppressErrors</code>, incrementing <code>attempts : attempts + 1</code> and triggering a simulated division failure. Finally display <code>\"Retries Completed: \" + attempts</code> in green.",
                starterCode: `attempts : 0
max_retries : 3
! TODO: Implement Challenge 17.4
`,
                hint: "Inside `while attempts < max_retries`, increment attempts and execute `err : 10 / 0`.",
                solution: `attempts : 0
max_retries : 3
SuppressErrors
    while attempts < max_retries
        attempts : attempts + 1
        fault : 10 / 0
display "Retries Completed: " + attempts ?color="green"`,
                expectedMatch: /Retries Completed: 3/i
            },
            {
                id: "ex_cap_5",
                title: "Challenge 17.5: Cascading Custom Error Hierarchy",
                prompt: "Write a <code>do</code> block that checks <code>sensor_v : 0</code>, throws <code>HardwareFault ?msg=\"Zero Voltage\"</code>, and catch it in <code>unless HardwareFault</code>, displaying <code>\"Fault Captured: \" + error</code> in red.",
                starterCode: `sensor_v : 0
! TODO: Implement Challenge 17.5
`,
                hint: "Use `throw HardwareFault ?msg=\"Zero Voltage\"`.",
                solution: `sensor_v : 0
do
    if sensor_v = 0 then
        throw HardwareFault ?msg="Zero Voltage"
unless HardwareFault
    display "Fault Captured: " + error ?color="red"`,
                expectedMatch: /Fault Captured: HardwareFault/i
            },
            {
                id: "ex_cap_6",
                title: "Challenge 17.6: Self-Healing Memory Cache",
                prompt: "Simulate a cache: set <code>cache_size : 10</code>, <code>max_capacity : 80</code>. In a <code>do</code> block, run <code>loop 5</code> adding <code>cache_size : cache_size + 20</code>, and catch with <code>unless internal cache_size > max_capacity</code>, purging and displaying <code>\"CACHE EVICTED AT: \" + cache_size</code> in yellow.",
                starterCode: `cache_size : 10
max_capacity : 80
! TODO: Implement Challenge 17.6
`,
                hint: "Use `unless internal cache_size > max_capacity`.",
                solution: `cache_size : 10
max_capacity : 80
do
    loop 5
        cache_size : cache_size + 20
unless internal cache_size > max_capacity
    display "CACHE EVICTED AT: " + cache_size ?color="yellow"`,
                expectedMatch: /CACHE EVICTED AT: 90/i
            },
            {
                id: "ex_cap_7",
                title: "Challenge 17.7: Microservice Route Remapping",
                prompt: "Create an <code>alias:</code> block mapping <code>display: route_get</code> and <code>prompt: route_post</code>. Use <code>route_post endpoint ?default=\"/api/v1/health\"</code> and <code>route_get \"Route: \" + endpoint</code> in green.",
                starterCode: `! TODO: Implement Challenge 17.7
`,
                hint: "Use `alias:` with `display: route_get` and `prompt: route_post`.",
                solution: `alias:
    display: route_get
    prompt: route_post

route_post endpoint ?default="/api/v1/health"
route_get "Route: " + endpoint ?color="green"`,
                expectedMatch: /Route: \/api\/v1\/health/i
            },
            {
                id: "ex_cap_8",
                title: "Challenge 17.8: Grandmaster Final Proof of Mastery",
                prompt: "Combine all skills: 1) <code>alias display: out ? color=col</code>, 2) set <code>total_cycles : 0</code>, 3) iterate <code>c</code> from 1 to 3 with <code>total_cycles : total_cycles + c</code>, 4) print <code>\"Mastery Proof Verified: \" + total_cycles</code> in unquoted hex <code>?col=#00ffcc</code>.",
                starterCode: `! TODO: Implement Challenge 17.8 Proof of Mastery
`,
                hint: "Combine alias mapping with iterate and hex output.",
                solution: `alias display: out ? color=col
total_cycles : 0
iterate c from 1 to 3
    total_cycles : total_cycles + c
out "Mastery Proof Verified: " + total_cycles ?col=#00ffcc`,
                expectedMatch: /Mastery Proof Verified: 6/i
            }
        ]
    },

    {
        id: "ch18-master-cheatsheet",
        number: 18,
        section: "Section 6: Applied Systems & Reference",
        title: "Master Language Specification & Complete Attribute Cheatsheet",
        category: "Quick Reference",
        readTime: "7 min read",
        summary: "The definitive VerScript reference manual, containing the complete command attribute matrix table, grammar rules, and CLI specification.",
        body: `
            <h2>Complete Command &amp; Attribute Matrix Table</h2>
            <p>Below is the complete, exhaustive reference matrix of all VerScript keywords, their supported attributes, data types, default behaviors, and usage examples:</p>

            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Command / Keyword</th>
                        <th>Supported Attributes &amp; Modifiers</th>
                        <th>Accepted Types &amp; Formats</th>
                        <th>Default Value</th>
                        <th>Example Syntax</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>display</code></td>
                        <td><code>?color</code><br><code>?newline</code><br><code>?inline</code></td>
                        <td>Named (<code>"red"</code>, <code>"green"</code>, <code>"yellow"</code>, <code>"blue"</code>, <code>"purple"</code>, <code>"cyan"</code>, <code>"white"</code>) or Hex (<code>#RRGGBB</code>, <code>#RGB</code>, quoted/unquoted)<br>Boolean (<code>true</code> / <code>false</code>)<br>Flag modifier</td>
                        <td><code>white</code><br><code>true</code><br>N/A</td>
                        <td><code>display "Hi" ?color=#00ffcc</code><br><code>display "Loading: " ?inline</code></td>
                    </tr>
                    <tr>
                        <td><code>prompt</code></td>
                        <td><code>?default</code></td>
                        <td>String / Number</td>
                        <td><code>""</code> (empty string)</td>
                        <td><code>prompt user ?default="Guest"</code></td>
                    </tr>
                    <tr>
                        <td><code>loop</code></td>
                        <td><code>step N</code></td>
                        <td>Integer (&gt; 0)</td>
                        <td><code>1</code></td>
                        <td><code>loop 10 step 2</code></td>
                    </tr>
                    <tr>
                        <td><code>iterate</code></td>
                        <td><code>from X to Y</code><br><code>step S</code></td>
                        <td>Integer bounds<br>Integer step (&gt; 0)</td>
                        <td>N/A<br><code>1</code></td>
                        <td><code>iterate i from 1 to 50 step 5</code></td>
                    </tr>
                    <tr>
                        <td><code>while</code></td>
                        <td><code>step N</code></td>
                        <td>Integer cadence</td>
                        <td><code>1</code></td>
                        <td><code>while count &lt; 10 step 2</code></td>
                    </tr>
                    <tr>
                        <td><code>until</code></td>
                        <td><code>step N</code></td>
                        <td>Integer cadence</td>
                        <td><code>1</code></td>
                        <td><code>until power &gt;= 100</code></td>
                    </tr>
                    <tr>
                        <td><code>unless</code></td>
                        <td><code>internal</code><br><code>external</code></td>
                        <td>Expression / Condition<br>Expression / Condition</td>
                        <td>Default error catch</td>
                        <td><code>unless internal temp &gt; 100</code><br><code>unless external isLocked</code></td>
                    </tr>
                    <tr>
                        <td><code>throw</code></td>
                        <td><code>?msg</code></td>
                        <td>String (custom error payload)</td>
                        <td><code>"User thrown error"</code></td>
                        <td><code>throw HardwareFault ?msg="Low V"</code></td>
                    </tr>
                    <tr>
                        <td><code>inject</code></td>
                        <td><code>[language]</code><br><code>?color</code></td>
                        <td>100+ Language Identifiers (<code>python</code>, <code>js</code>, <code>rust</code>, <code>c</code>, <code>verscript</code>)<br>Color string/hex</td>
                        <td>N/A<br><code>"white"</code></td>
                        <td><code>inject python ?color="yellow"</code><br><code>inject verscript</code></td>
                    </tr>
                    <tr>
                        <td><code>alias</code></td>
                        <td><code>cmd1: cmd2</code><br><code>? orig=new</code><br><code>alias:</code> (block)</td>
                        <td>Identifier remapping<br>Attribute mapping key-value pairs</td>
                        <td>N/A</td>
                        <td><code>alias display: print</code><br><code>alias display: log ? color=tint</code></td>
                    </tr>
                    <tr>
                        <td><code>SuppressErrors</code></td>
                        <td>None</td>
                        <td>Block scope</td>
                        <td>N/A</td>
                        <td><code>SuppressErrors<br>&nbsp;&nbsp;bad_call : 10 / 0</code></td>
                    </tr>
                    <tr>
                        <td><code>CriticalErrors</code></td>
                        <td>None</td>
                        <td>Block scope</td>
                        <td>N/A</td>
                        <td><code>CriticalErrors<br>&nbsp;&nbsp;run_backend()</code></td>
                    </tr>
                    <tr>
                        <td><code>ForceErrors</code></td>
                        <td>None</td>
                        <td>Block scope</td>
                        <td>N/A</td>
                        <td><code>ForceErrors<br>&nbsp;&nbsp;strict_test()</code></td>
                    </tr>
                </tbody>
            </table>

            <h2>Grammar &amp; Operator Precedence</h2>
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Precedence</th>
                        <th>Operators</th>
                        <th>Description</th>
                        <th>Associativity</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1 (Highest)</td>
                        <td><code>-</code> (unary)</td>
                        <td>Unary Negation</td>
                        <td>Right-to-Left</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td><code>*</code>, <code>/</code></td>
                        <td>Multiplication, Integer Division</td>
                        <td>Left-to-Right</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td><code>+</code>, <code>-</code></td>
                        <td>Addition / String Concatenation, Subtraction</td>
                        <td>Left-to-Right</td>
                    </tr>
                    <tr>
                        <td>4 (Lowest)</td>
                        <td><code>=</code>, <code>x=</code>, <code>&gt;</code>, <code>&lt;</code>, <code>&gt;=</code>, <code>&lt;=</code></td>
                        <td>Equality, Inequality, Relational</td>
                        <td>Left-to-Right</td>
                    </tr>
                </tbody>
            </table>
        `,
        codeBlocks: [
            {
                id: "cb_spec_1",
                title: "master_reference.vrs",
                code: `! Complete VerScript Language Feature Demonstration
alias:
    display: print ? color=tint
    loop: repeat

SuppressErrors
    print "=== VerScript v1.2 Complete Reference ===" ?tint=#00ffcc
    repeat 2
        print "System certified and verified." ?tint=#50fa7b`
            }
        ],
        exercises: [
            {
                id: "ex_spec_1",
                title: "Exercise 18.1: Complete Syntax Verification",
                prompt: "Using the cheatsheet table as reference, write a program that uses <code>alias display: out ? color=col</code>, runs <code>loop 2</code>, and prints <code>\"Reference Verified\"</code> in unquoted hex <code>?col=#00ffcc</code>.",
                starterCode: `! TODO: Write program according to Exercise 18.1
`,
                hint: "Use `alias display: out ? color=col`, `loop 2`, and `out \"Reference Verified\" ?col=#00ffcc`.",
                solution: `alias display: out ? color=col
loop 2
    out "Reference Verified" ?col=#00ffcc`,
                expectedMatch: /Reference Verified/i
            },
            {
                id: "ex_spec_2",
                title: "Exercise 18.2: Comprehensive Attribute Validation",
                prompt: "Write a program combining <code>prompt client ?default=\"Admin\"</code> and <code>display \"Verified: \" + client ?color=#50fa7b</code>.",
                starterCode: `! TODO: Combine prompt with default and display with hex color
`,
                hint: "Use `prompt client ?default=\"Admin\"`.",
                solution: `prompt client ?default="Admin"
display "Verified: " + client ?color=#50fa7b`,
                expectedMatch: /Verified:/i
            }
        ]
    }
];
