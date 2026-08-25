// ═══════════════════════════════════════════════════════════════════
//  VerScript Academy — Complete Interactive Documentation Articles
// ═══════════════════════════════════════════════════════════════════

const ARTICLES = [
    {
        id: "intro-overview",
        number: 1,
        title: "Introduction & Language Architecture",
        category: "Getting Started",
        readTime: "4 min read",
        summary: "Discover VerScript's origin, design principles, lightweight C architecture, and modern VM capabilities.",
        body: `
            <h2>What is VerScript?</h2>
            <p><strong>VerScript</strong> is a minimal, elegant scripting language designed from the ground up to offer the performance and predictability of native C with the ergonomics of modern high-level dynamic languages.</p>
            <p>Originally designed for clean embedded scripting, algorithmic exploration, and polyglot integration, VerScript eliminates standard syntactic baggage (such as semicolons and excessive curly braces) in favor of clean indentation and declarative statement structures.</p>

            <div class="callout-box tip">
                <div class="callout-title">💡 Key Design Goals</div>
                <p>Zero dependencies beyond standard C, dynamic typing with string concatenation, native reactive watch condition guards, polyglot code injection, and runtime command aliases.</p>
            </div>

            <h2>Architecture Overview</h2>
            <p>VerScript's runtime is structured across two primary layers:</p>
            <ul>
                <li><strong>Lexer &amp; Parser (Compiler Engine):</strong> Tokenizes source scripts line by line, resolves indentation levels, and strips comments before execution.</li>
                <li><strong>Dynamic Virtual Machine &amp; Symbol Table:</strong> Manages runtime variables, dynamic expressions, call frames, error suppression scopes, and command dispatching.</li>
            </ul>

            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Component</th>
                        <th>Function</th>
                        <th>Implementation</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>lexer.c</code></td>
                        <td>Tokenizer &amp; Scanner</td>
                        <td>Lookahead scanner converting text to <code>Token</code> structs.</td>
                    </tr>
                    <tr>
                        <td><code>main.c</code></td>
                        <td>VM &amp; Evaluator</td>
                        <td>Block evaluation, expression parser, variable hashmap.</td>
                    </tr>
                    <tr>
                        <td><code>PolyServer</code></td>
                        <td>Remote Cloud Runner</td>
                        <td>Express backend orchestrating C VM binaries &amp; VS#-1B AI.</td>
                    </tr>
                </tbody>
            </table>
        `,
        codeBlocks: [
            {
                id: "cb_intro_1",
                title: "sample_intro.vrs",
                code: `! Welcome to VerScript!
display "Hello, Polyglot World!" ?color="cyan"
display "VerScript VM v1.2.0 initialized cleanly." ?color="green"`
            }
        ],
        exercises: [
            {
                id: "ex_intro_1",
                title: "Exercise 1.1: Your First Output",
                prompt: "Write a VerScript program that displays <code>\"Hello from VerScript!\"</code> in green color.",
                starterCode: `! TODO: Use the 'display' keyword to output "Hello from VerScript!" with ?color="green"
`,
                hint: "Use the `display` keyword followed by your string and the `?color=\"green\"` attribute.",
                solution: `display "Hello from VerScript!" ?color="green"`,
                expectedMatch: /Hello from VerScript!/i
            },
            {
                id: "ex_intro_2",
                title: "Exercise 1.2: Two-line Status Report",
                prompt: "Display two consecutive lines: first display <code>\"System Online\"</code> in cyan, then display <code>\"Ready\"</code> in yellow.",
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
                title: "Exercise 1.3: Inline Printing",
                prompt: "Use the <code>?newline=false</code> (or <code>?inline</code>) attribute to print <code>\"Loading... \"</code> without a newline, followed by <code>\"Done!\"</code> on the same line.",
                starterCode: `! TODO: Print "Loading... " with ?newline=false and ?color="yellow"
! Then print "Done!" with ?color="green" on the next line
`,
                hint: "The first `display` uses `?newline=false`, and the second one finishes the line.",
                solution: `display "Loading... " ?newline=false ?color="yellow"
display "Done!" ?color="green"`,
                expectedMatch: /Loading\.\.\. Done!/i
            }
        ]
    },

    {
        id: "syntax-comments",
        number: 2,
        title: "Comments & Lexical Structure",
        category: "Fundamentals",
        readTime: "3 min read",
        summary: "Master single-line and multi-line block comments, whitespace rules, and indentation guidelines.",
        body: `
            <h2>Comments in VerScript</h2>
            <p>VerScript provides two forms of comments for documenting your codebase:</p>

            <h3>1. Single-Line Comments (<code>!</code>)</h3>
            <p>Any line or trailing segment beginning with an exclamation mark <code>!</code> is ignored by the parser up to the end of that line.</p>

            <h3>2. Multiline Block Comments (<code>!! ... !!</code>)</h3>
            <p>For extensive module documentation, function descriptions, or temporarily disabling code blocks, enclose lines between double exclamation marks <code>!!</code>.</p>

            <div class="callout-box note">
                <div class="callout-title">📝 Indentation Sensitivity</div>
                <p>VerScript uses clean indentation (2 or 4 spaces) for scoping blocks (such as <code>loop</code>, <code>iterate</code>, <code>if</code>, and <code>alias:</code>). Mixing inconsistent indentation levels triggers an <code>IndentationError</code>.</p>
            </div>
        `,
        codeBlocks: [
            {
                id: "cb_comments_1",
                title: "comments_demo.vrs",
                code: `!!
  Module: Application Configuration
  Author: VerScript Developer
  Version: 1.2
!!

! Display welcome message
display "Comments demo active" ?color="cyan"`
            }
        ],
        exercises: [
            {
                id: "ex_comments_1",
                title: "Exercise 2.1: Add Single-Line Comments",
                prompt: "Add a single-line comment above the display command describing what it prints, then print <code>\"Calculation active\"</code> in green.",
                starterCode: `! TODO: Add a single-line comment here starting with !
display "Calculation active" ?color="green"`,
                hint: "Prefix your comment line with `!`.",
                solution: `! Print calculation status
display "Calculation active" ?color="green"`,
                expectedMatch: /Calculation active/i
            },
            {
                id: "ex_comments_2",
                title: "Exercise 2.2: Wrap Documentation in Block Comments",
                prompt: "Wrap lines describing a module in a multiline <code>!!</code> comment block and print <code>\"Docs OK\"</code>.",
                starterCode: `! TODO: Convert these 3 lines into a block comment using !! at start and !! at end
Header Notes
Version 1.0

display "Docs OK" ?color="cyan"`,
                hint: "Enclose your notes between `!!` at start and `!!` at end.",
                solution: `!!
Header Notes
Version 1.0
!!
display "Docs OK" ?color="cyan"`,
                expectedMatch: /Docs OK/i
            },
            {
                id: "ex_comments_3",
                title: "Exercise 2.3: Inline Commenting",
                prompt: "Place an inline comment at the end of the line after displaying <code>\"Server Started\"</code>.",
                starterCode: `! TODO: Display "Server Started" in green and append an inline comment starting with !
`,
                hint: "Place `! comment text` after the command attributes.",
                solution: `display "Server Started" ?color="green" ! Initial boot display`,
                expectedMatch: /Server Started/i
            }
        ]
    },

    {
        id: "variables-types",
        number: 3,
        title: "Variables & Dynamic Typing",
        category: "Fundamentals",
        readTime: "5 min read",
        summary: "Understand variable declarations, dynamic typing across strings, integers, booleans, and mutation.",
        body: `
            <h2>Variable Declarations (<code>name : value</code>)</h2>
            <p>In VerScript, variables are assigned and updated using the colon operator <code>:</code>. You do not need keyword declarations like <code>var</code> or <code>let</code>.</p>

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
                        <td>64-bit signed numeric integers.</td>
                    </tr>
                    <tr>
                        <td><strong>String</strong></td>
                        <td><code>name : "Nova"</code></td>
                        <td>UTF-8 text wrapped in double quotes.</td>
                    </tr>
                    <tr>
                        <td><strong>Boolean</strong></td>
                        <td><code>isActive : true</code></td>
                        <td>Literal <code>true</code> or <code>false</code>.</td>
                    </tr>
                </tbody>
            </table>

            <h2>Dynamic Reassignment</h2>
            <p>Variables are dynamically typed and can be assigned different types over their lifecycle:</p>
            <div class="code-block">data : 42
data : "Forty-two"</div>
        `,
        codeBlocks: [
            {
                id: "cb_vars_1",
                title: "variables.vrs",
                code: `user : "Alice"
level : 10
unlocked : true

display "User: " + user ?color="cyan"
display "Level: " + level ?color="yellow"
display "Status: " + unlocked ?color="green"`
            }
        ],
        exercises: [
            {
                id: "ex_vars_1",
                title: "Exercise 3.1: Declare Player Stats",
                prompt: "Create a variable <code>playerName : \"Atlas\"</code> and <code>health : 100</code>, then display <code>\"Player: \" + playerName</code>.",
                starterCode: `! TODO: Declare playerName and health
! Then display "Player: " + playerName
`,
                hint: "Use `name : value` syntax for assignments.",
                solution: `playerName : "Atlas"
health : 100
display "Player: " + playerName ?color="cyan"`,
                expectedMatch: /Player: Atlas/i
            },
            {
                id: "ex_vars_2",
                title: "Exercise 3.2: Reassign a Variable",
                prompt: "Initialize <code>status : \"offline\"</code>, then reassign it to <code>\"online\"</code> and display <code>\"Status: \" + status</code>.",
                starterCode: `status : "offline"
! TODO: Reassign status to "online" and display "Status: " + status in green
`,
                hint: "Reassign the variable on the next line using `status : \"online\"`.",
                solution: `status : "offline"
status : "online"
display "Status: " + status ?color="green"`,
                expectedMatch: /Status: online/i
            },
            {
                id: "ex_vars_3",
                title: "Exercise 3.3: Boolean Flags",
                prompt: "Create a boolean variable <code>ready : true</code> and display <code>\"Ready: \" + ready</code>.",
                starterCode: `! TODO: Declare boolean ready : true and display "Ready: " + ready
`,
                hint: "Set `ready : true` and concatenate with string.",
                solution: `ready : true
display "Ready: " + ready ?color="purple"`,
                expectedMatch: /Ready: true/i
            }
        ]
    },

    {
        id: "arithmetic-operators",
        number: 4,
        title: "Arithmetic & String Operators",
        category: "Fundamentals",
        readTime: "5 min read",
        summary: "Perform addition, subtraction, multiplication, division, and automatic string concatenation.",
        body: `
            <h2>Mathematical Operators</h2>
            <p>VerScript supports standard math operators with standard arithmetic precedence rules:</p>
            <ul>
                <li><code>+</code> (Addition &amp; String Concatenation)</li>
                <li><code>-</code> (Subtraction)</li>
                <li><code>*</code> (Multiplication)</li>
                <li><code>/</code> (Integer Division)</li>
            </ul>

            <h2>Heterogeneous Concatenation</h2>
            <p>When using the <code>+</code> operator with a string and an integer or boolean, VerScript automatically stringifies the operand for seamless concatenation.</p>
        `,
        codeBlocks: [
            {
                id: "cb_arith_1",
                title: "math_demo.vrs",
                code: `a : 15
b : 5

display "Sum: " + (a + b) ?color="cyan"
display "Product: " + (a * b) ?color="yellow"
display "Division: " + (a / b) ?color="green"`
            }
        ],
        exercises: [
            {
                id: "ex_arith_1",
                title: "Exercise 4.1: Compute Rectangle Area",
                prompt: "Calculate the area of a rectangle with <code>width : 8</code> and <code>height : 6</code>. Display <code>\"Area: \" + (width * height)</code>.",
                starterCode: `width : 8
height : 6
! TODO: Calculate area : width * height and display "Area: " + area
`,
                hint: "Multiply `width * height` and display.",
                solution: `width : 8
height : 6
area : width * height
display "Area: " + area ?color="green"`,
                expectedMatch: /Area: 48/i
            },
            {
                id: "ex_arith_2",
                title: "Exercise 4.2: Average Calculation",
                prompt: "Compute the average of <code>score1 : 80</code> and <code>score2 : 100</code>. Display <code>\"Average: \" + ((score1 + score2) / 2)</code>.",
                starterCode: `score1 : 80
score2 : 100
! TODO: Calculate average of score1 and score2, then display "Average: " + avg
`,
                hint: "Enclose the sum in parentheses before dividing by 2.",
                solution: `score1 : 80
score2 : 100
avg : (score1 + score2) / 2
display "Average: " + avg ?color="cyan"`,
                expectedMatch: /Average: 90/i
            },
            {
                id: "ex_arith_3",
                title: "Exercise 4.3: Compound String Assembly",
                prompt: "Join three variables (<code>prefix : \"ID-\"</code>, <code>num : 77</code>, <code>suffix : \"-X\"</code>) into a single code string.",
                starterCode: `prefix : "ID-"
num : 77
suffix : "-X"
! TODO: Concatenate prefix, num, and suffix into a variable 'code' and display "Code: " + code
`,
                hint: "Use the `+` operator across all three variables.",
                solution: `prefix : "ID-"
num : 77
suffix : "-X"
code : prefix + num + suffix
display "Code: " + code ?color="yellow"`,
                expectedMatch: /Code: ID-77-X/i
            }
        ]
    },

    {
        id: "io-prompt",
        number: 5,
        title: "Standard I/O & Prompting",
        category: "Input & Output",
        readTime: "4 min read",
        summary: "Read user input with prompt, configure fallback defaults, and format colored terminal output.",
        body: `
            <h2>Reading Input with <code>prompt</code></h2>
            <p>Use <code>prompt [varName]</code> to read a line of input from standard input (stdin). If numeric text is entered, it is automatically parsed into an integer; otherwise, it remains a string.</p>

            <h3>Default Fallback Attributes (<code>?default="val"</code>)</h3>
            <p>You can supply a default fallback value if the user submits an empty line:</p>
            <div class="code-block"><span class="token-keyword">prompt</span> username <span class="token-operator">?default="Guest"</span></div>
        `,
        codeBlocks: [
            {
                id: "cb_io_1",
                title: "io_sample.vrs",
                code: `display "=== User Login Portal ===" ?color="cyan"
prompt username ?default="GuestCoder"
display "Welcome back, " + username + "!" ?color="green"`
            }
        ],
        exercises: [
            {
                id: "ex_io_1",
                title: "Exercise 5.1: Interactive Prompt",
                prompt: "Prompt for a variable <code>city</code> with default <code>\"Tokyo\"</code> and display <code>\"Location: \" + city</code>.",
                starterCode: `! TODO: Prompt for 'city' with ?default="Tokyo"
! Then display "Location: " + city in cyan
`,
                hint: "Use `prompt city ?default=\"Tokyo\"`.",
                solution: `prompt city ?default="Tokyo"
display "Location: " + city ?color="cyan"`,
                expectedMatch: /Location: Tokyo/i
            },
            {
                id: "ex_io_2",
                title: "Exercise 5.2: Numeric Prompt Handling",
                prompt: "Prompt for <code>userAge</code> with default <code>\"21\"</code> and display <code>\"Next year age: \" + (userAge + 1)</code>.",
                starterCode: `! TODO: Prompt userAge with default="21" and display the incremented age
`,
                hint: "VerScript automatically parses numeric strings from prompts into integers for math.",
                solution: `prompt userAge ?default="21"
display "Next year age: " + (userAge + 1) ?color="yellow"`,
                expectedMatch: /Next year age: 22/i
            },
            {
                id: "ex_io_3",
                title: "Exercise 5.3: Multi-Segment Output",
                prompt: "Print three segments on the same line using <code>?newline=false</code>, ending with <code>\"COMPLETE\"</code> in green.",
                starterCode: `! TODO: Print "[1/3] Init, ", "[2/3] Sync, ", and "[3/3] COMPLETE" on one line
`,
                hint: "Use `?newline=false` on first two displays.",
                solution: `display "[1/3] Init, " ?newline=false ?color="yellow"
display "[2/3] Sync, " ?newline=false ?color="cyan"
display "[3/3] COMPLETE" ?color="green"`,
                expectedMatch: /Init,.*Sync,.*COMPLETE/i
            }
        ]
    },

    {
        id: "control-flow-conditionals",
        number: 6,
        title: "Conditionals (<code>if / else if / else</code>)",
        category: "Control Flow",
        readTime: "5 min read",
        summary: "Construct conditional branches using if-then, else-if-then, and else fallback blocks.",
        body: `
            <h2>Conditional Syntax</h2>
            <p>VerScript uses clear, expressive <code>if [condition] then</code> syntax followed by an indented statement block.</p>
            <div class="code-block"><span class="token-keyword">if</span> score &gt; 90 <span class="token-keyword">then</span>
    <span class="token-keyword">display</span> <span class="token-string">"Grade A"</span>
<span class="token-keyword">else if</span> score &gt; 75 <span class="token-keyword">then</span>
    <span class="token-keyword">display</span> <span class="token-string">"Grade B"</span>
<span class="token-keyword">else</span>
    <span class="token-keyword">display</span> <span class="token-string">"Keep Practicing"</span></div>
        `,
        codeBlocks: [
            {
                id: "cb_cond_1",
                title: "conditions.vrs",
                code: `points : 85

if points >= 80 then
    display "Achievement Unlocked: Gold Badge!" ?color="yellow"
else
    display "Keep working toward your badge." ?color="cyan"`
            }
        ],
        exercises: [
            {
                id: "ex_cond_1",
                title: "Exercise 6.1: Check Passing Score",
                prompt: "Check if <code>score : 72</code> is greater than or equal to <code>50</code>. If so, display <code>\"Passed!\"</code> in green.",
                starterCode: `score : 72
! TODO: Write an if condition checking if score >= 50, and display "Passed!" in green
`,
                hint: "Use `if score >= 50 then` followed by indented display.",
                solution: `score : 72
if score >= 50 then
    display "Passed!" ?color="green"`,
                expectedMatch: /Passed!/i
            },
            {
                id: "ex_cond_2",
                title: "Exercise 6.2: Three-Way Branching",
                prompt: "Check <code>temp : 32</code>. If temp > 30 print \"Hot\", else if temp > 15 print \"Warm\", else print \"Cold\".",
                starterCode: `temp : 32
! TODO: Implement 3-way if/else if/else branches checking temperature thresholds
`,
                hint: "Chain `if ... then`, `else if ... then`, and `else`.",
                solution: `temp : 32
if temp > 30 then
    display "Hot" ?color="red"
else if temp > 15 then
    display "Warm" ?color="yellow"
else
    display "Cold" ?color="cyan"`,
                expectedMatch: /Hot/i
            },
            {
                id: "ex_cond_3",
                title: "Exercise 6.3: Equality Check",
                prompt: "Given <code>code : \"VIP\"</code>, check if <code>code == \"VIP\"</code> and display <code>\"Access Granted\"</code> in green.",
                starterCode: `code : "VIP"
! TODO: If code is "VIP", display "Access Granted" in green
`,
                hint: "Use `==` operator for comparison.",
                solution: `code : "VIP"
if code == "VIP" then
    display "Access Granted" ?color="green"`,
                expectedMatch: /Access Granted/i
            }
        ]
    },

    {
        id: "loops-iterations",
        number: 7,
        title: "Loop & Iteration Constructs",
        category: "Control Flow",
        readTime: "6 min read",
        summary: "Execute fixed count loops, stepped bounds iterations, and loop step overrides.",
        body: `
            <h2>Fixed Count Loops (<code>loop n</code>)</h2>
            <p>Repeats the indented block <code>n</code> times:</p>
            <div class="code-block"><span class="token-keyword">loop</span> 3
    <span class="token-keyword">display</span> <span class="token-string">"Pulse tick"</span></div>

            <h2>Variable Iteration (<code>iterate i from x to y step z</code>)</h2>
            <p>Iterates with a named loop index variable across bounds:</p>
            <div class="code-block"><span class="token-keyword">iterate</span> i <span class="token-keyword">from</span> 1 <span class="token-keyword">to</span> 10 <span class="token-keyword">step</span> 2
    <span class="token-keyword">display</span> <span class="token-string">"Step: "</span> + i</div>
        `,
        codeBlocks: [
            {
                id: "cb_loops_1",
                title: "loop_sample.vrs",
                code: `display "=== 3-count loop ===" ?color="cyan"
loop 3
    display "Tick..." ?color="green"

display "=== Stepped Iteration ===" ?color="purple"
iterate val from 2 to 8 step 2
    display "Even: " + val ?color="yellow"`
            }
        ],
        exercises: [
            {
                id: "ex_loop_1",
                title: "Exercise 7.1: Repeat a Notification",
                prompt: "Use <code>loop 4</code> to display <code>\"Ping!\"</code> 4 times in yellow.",
                starterCode: `! TODO: Write a loop repeating 4 times to output "Ping!" in yellow
`,
                hint: "Write `loop 4` and indent the display statement.",
                solution: `loop 4
    display "Ping!" ?color="yellow"`,
                expectedMatch: /Ping![\s\S]*Ping!/i
            },
            {
                id: "ex_loop_2",
                title: "Exercise 7.2: Count from 1 to 5",
                prompt: "Use <code>iterate n from 1 to 5</code> to display <code>\"Count: \" + n</code>.",
                starterCode: `! TODO: Use iterate to count from 1 to 5 and display "Count: " + n
`,
                hint: "Use `iterate n from 1 to 5`.",
                solution: `iterate n from 1 to 5
    display "Count: " + n ?color="cyan"`,
                expectedMatch: /Count: 1[\s\S]*Count: 5/i
            },
            {
                id: "ex_loop_3",
                title: "Exercise 7.3: Stepped Odd Numbers",
                prompt: "Iterate <code>odd from 1 to 7 step 2</code> and display each odd number.",
                starterCode: `! TODO: Iterate odd numbers from 1 to 7 with step 2
`,
                hint: "Add `step 2` to the iterate statement.",
                solution: `iterate odd from 1 to 7 step 2
    display "Odd: " + odd ?color="green"`,
                expectedMatch: /Odd: 1[\s\S]*Odd: 7/i
            }
        ]
    },

    {
        id: "while-until-loops",
        number: 8,
        title: "Conditional Loops (<code>while</code> &amp; <code>until</code>)",
        category: "Control Flow",
        readTime: "5 min read",
        summary: "Master while-true execution loops, until-true termination guards, and loop step controls.",
        body: `
            <h2>While Loops (<code>while [condition]</code>)</h2>
            <p>Executes as long as the condition evaluates to true:</p>
            <div class="code-block">count : 1
<span class="token-keyword">while</span> count &lt;= 3
    <span class="token-keyword">display</span> <span class="token-string">"Count: "</span> + count
    count : count + 1</div>

            <h2>Until Loops (<code>until [condition]</code>)</h2>
            <p>Executes repeatedly <em>until</em> the condition becomes true (inverse condition loop):</p>
            <div class="code-block">power : 1
<span class="token-keyword">until</span> power &gt; 10
    <span class="token-keyword">display</span> <span class="token-string">"Power: "</span> + power
    power : power * 2</div>
        `,
        codeBlocks: [
            {
                id: "cb_while_1",
                title: "while_until.vrs",
                code: `num : 0
while num < 3
    display "While cycle: " + num ?color="cyan"
    num : num + 1

limit : 1
until limit >= 4
    display "Until limit: " + limit ?color="yellow"
    limit : limit + 1`
            }
        ],
        exercises: [
            {
                id: "ex_while_1",
                title: "Exercise 8.1: While Countdown",
                prompt: "Initialize <code>timer : 3</code> and use <code>while timer > 0</code> to display <code>\"T-minus: \" + timer</code> and decrement timer.",
                starterCode: `timer : 3
! TODO: Write while loop checking timer > 0, display "T-minus: " + timer in red, and decrement timer
`,
                hint: "Decrement `timer : timer - 1` inside the loop body.",
                solution: `timer : 3
while timer > 0
    display "T-minus: " + timer ?color="red"
    timer : timer - 1`,
                expectedMatch: /T-minus: 3[\s\S]*T-minus: 1/i
            },
            {
                id: "ex_while_2",
                title: "Exercise 8.2: Until Target Reached",
                prompt: "Initialize <code>val : 1</code> and loop with <code>until val >= 5</code>, doubling <code>val</code> on each iteration.",
                starterCode: `val : 1
! TODO: Write until loop terminating when val >= 5, displaying "Val: " + val and doubling val
`,
                hint: "Use `val : val * 2` inside the until loop.",
                solution: `val : 1
until val >= 5
    display "Val: " + val ?color="green"
    val : val * 2`,
                expectedMatch: /Val: 1[\s\S]*Val: 4/i
            },
            {
                id: "ex_while_3",
                title: "Exercise 8.3: Stepped While Loop",
                prompt: "Use <code>while idx < 6 step 2</code> to step by 2 on each loop iteration.",
                starterCode: `idx : 0
! TODO: Write while loop with step 2 modifier
`,
                hint: "Add `step 2` after the while condition.",
                solution: `idx : 0
while idx < 6 step 2
    display "Stepped: " + idx ?color="purple"
    idx : idx + 1`,
                expectedMatch: /Stepped:/i
            }
        ]
    },

    {
        id: "exception-handling",
        number: 9,
        title: "Exceptions (<code>do-unless [error]</code>)",
        category: "Error Handling",
        readTime: "5 min read",
        summary: "Handle runtime exceptions gracefully with named error catching and custom throw attributes.",
        body: `
            <h2>Try-Catch via <code>do-unless</code></h2>
            <p>VerScript introduces structured exception management using the <code>do</code> block paired with a matching <code>unless [ErrorName]</code> handler.</p>

            <div class="code-block"><span class="token-keyword">do</span>
    <span class="token-keyword">throw</span> CustomCalculationError <span class="token-operator">?msg="Divide by zero detected"</span>
<span class="token-keyword">unless</span> CustomCalculationError
    <span class="token-keyword">display</span> <span class="token-string">"Intercepted error: "</span> + <span class="token-keyword">error</span> ?color="green"</div>

            <h2>Rethrowing and Error Symbols</h2>
            <p>Inside an <code>unless</code> block, the special variable <code>error</code> holds the caught error's name as a string.</p>
        `,
        codeBlocks: [
            {
                id: "cb_except_1",
                title: "exceptions.vrs",
                code: `display "=== Exception Catching Demo ===" ?color="cyan"

do
    display "Attempting critical calculation..." ?color="yellow"
    throw DivisionByZeroError ?msg="Math division failure in module"
unless DivisionByZeroError
    display "Caught expected error: " + error ?color="green"
    display "Fallback routine engaged." ?color="cyan"`
            }
        ],
        exercises: [
            {
                id: "ex_except_1",
                title: "Exercise 9.1: Catch a Named Error",
                prompt: "Throw <code>NetworkTimeoutError</code> inside a <code>do</code> block and catch it with <code>unless NetworkTimeoutError</code>.",
                starterCode: `! TODO: Write a do block that throws NetworkTimeoutError, and catch it in an unless block
`,
                hint: "Match the error name in `throw` and `unless`.",
                solution: `do
    throw NetworkTimeoutError ?msg="Connection timed out"
unless NetworkTimeoutError
    display "Handled: " + error ?color="green"`,
                expectedMatch: /Handled: NetworkTimeoutError/i
            },
            {
                id: "ex_except_2",
                title: "Exercise 9.2: Catch Generic Error",
                prompt: "Use <code>unless error</code> to catch any thrown exception as a wildcard catch-all.",
                starterCode: `! TODO: Throw InvalidKeyError in do block, and catch with wildcard 'unless error'
`,
                hint: "`unless error` acts as a universal exception catcher.",
                solution: `do
    throw InvalidKeyError ?msg="Bad auth key"
unless error
    display "Generic error catcher caught: " + error ?color="yellow"`,
                expectedMatch: /Generic error catcher/i
            },
            {
                id: "ex_except_3",
                title: "Exercise 9.3: Error with Custom Message",
                prompt: "Throw an error with <code>?msg=\"File missing\"</code> and display the success recovery message.",
                starterCode: `! TODO: Throw FileNotFound with ?msg="File missing" in a do block, and catch it
`,
                hint: "Add `?msg=\"...\"` to the `throw` statement.",
                solution: `do
    throw FileNotFound ?msg="File missing"
unless FileNotFound
    display "Recovered from missing file" ?color="cyan"`,
                expectedMatch: /Recovered from missing file/i
            }
        ]
    },

    {
        id: "reactive-watch-guards",
        number: 10,
        title: "Reactive Condition Watch Guards",
        category: "Advanced Features",
        readTime: "5 min read",
        summary: "Monitor reactive variable changes with do-unless internal and external condition watch modes.",
        body: `
            <h2>Reactive Internal Watch (<code>unless internal [condition]</code>)</h2>
            <p>An <code>internal</code> condition guard continuously tests a boolean condition <em>after every single statement</em> executed inside the <code>do</code> block. The instant the condition becomes true, execution abruptly breaks from the <code>do</code> block and branches to the <code>unless</code> handler!</p>

            <div class="code-block"><span class="token-keyword">do</span>
    count : 0
    count : count + 10
    count : count + 50
<span class="token-keyword">unless internal</span> count &gt; 25
    <span class="token-keyword">display</span> <span class="token-string">"Triggered immediately when count exceeded 25!"</span></div>

            <h2>External Guard Mode (<code>unless external [condition]</code>)</h2>
            <p>Tests the condition strictly beforehand like a classic guard fallback.</p>
        `,
        codeBlocks: [
            {
                id: "cb_watch_1",
                title: "watch_guard.vrs",
                code: `display "=== Reactive Watch Demo ===" ?color="cyan"

alarm : false
do
    display "Step 1: Normal" ?color="green"
    alarm : true
    display "Step 2: This will be intercepted!" ?color="red"
unless internal alarm == true
    display "Reactive watch triggered! Handled alarm state." ?color="yellow"`
            }
        ],
        exercises: [
            {
                id: "ex_watch_1",
                title: "Exercise 10.1: Reactive Threshold Trigger",
                prompt: "Set <code>fuel : 100</code>. In a <code>do</code> block, reduce fuel to <code>10</code>. Use <code>unless internal fuel < 20</code> to catch the low fuel state.",
                starterCode: `fuel : 100
! TODO: Create do block modifying fuel to 10, with 'unless internal fuel < 20' guard
`,
                hint: "Set `fuel : 10` inside the do block.",
                solution: `fuel : 100
do
    display "Consuming fuel..." ?color="cyan"
    fuel : 10
    display "This line will not run" ?color="red"
unless internal fuel < 20
    display "Warning: Low Fuel Detected!" ?color="yellow"`,
                expectedMatch: /Low Fuel Detected!/i
            },
            {
                id: "ex_watch_2",
                title: "Exercise 10.2: External Guard Check",
                prompt: "Use <code>unless external isLocked == true</code> to check a locked flag beforehand.",
                starterCode: `isLocked : true
! TODO: Create do block with 'unless external isLocked == true'
`,
                hint: "Because `isLocked` is true, the `unless` block executes directly.",
                solution: `isLocked : true
do
    display "Opening door..." ?color="green"
unless external isLocked == true
    display "Door is locked! Cannot open." ?color="red"`,
                expectedMatch: /Door is locked!/i
            },
            {
                id: "ex_watch_3",
                title: "Exercise 10.3: Multi-step Watch",
                prompt: "Create an internal watch that halts when <code>voltage > 240</code>.",
                starterCode: `voltage : 120
! TODO: Write a do block that increments voltage to 250 with 'unless internal voltage > 240'
`,
                hint: "Setting voltage to 250 trips the watch condition immediately.",
                solution: `voltage : 120
do
    voltage : 200
    voltage : 250
unless internal voltage > 240
    display "Surge protector engaged!" ?color="green"`,
                expectedMatch: /Surge protector engaged!/i
            }
        ]
    },

    {
        id: "error-modes",
        number: 11,
        title: "Error Modes Scopes",
        category: "Error Handling",
        readTime: "4 min read",
        summary: "Control runtime error strictness with ForceErrors, CriticalErrors, and SuppressErrors.",
        body: `
            <h2>Scoped Error Directives</h2>
            <p>VerScript allows changing error handling behavior across specific code scopes:</p>

            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Block Directive</th>
                        <th>Behavior</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>SuppressErrors</code></td>
                        <td>Ignores runtime errors and skips failed statements without crashing.</td>
                    </tr>
                    <tr>
                        <td><code>CriticalErrors</code></td>
                        <td>Halts only on severe system faults; ignores minor warnings.</td>
                    </tr>
                    <tr>
                        <td><code>ForceErrors</code></td>
                        <td>Strict mode: halts immediately on any error or ambiguity.</td>
                    </tr>
                </tbody>
            </table>
        `,
        codeBlocks: [
            {
                id: "cb_modes_1",
                title: "error_modes.vrs",
                code: `display "=== Suppress Errors Demo ===" ?color="cyan"

SuppressErrors
    throw IgnoredError ?msg="This error will be silently skipped"
    display "Executing safely inside SuppressErrors scope." ?color="green"`
            }
        ],
        exercises: [
            {
                id: "ex_modes_1",
                title: "Exercise 11.1: Suppress an Error",
                prompt: "Wrap a throw in <code>SuppressErrors</code> block and display <code>\"Completed gracefully\"</code> after the block.",
                starterCode: `! TODO: Write SuppressErrors block containing a throw, then display "Completed gracefully"
`,
                hint: "Indent the throw statement under `SuppressErrors`.",
                solution: `SuppressErrors
    throw MinorWarning
display "Completed gracefully" ?color="green"`,
                expectedMatch: /Completed gracefully/i
            },
            {
                id: "ex_modes_2",
                title: "Exercise 11.2: Force Errors Scope",
                prompt: "Display <code>\"ForceErrors active\"</code> inside a <code>ForceErrors</code> block.",
                starterCode: `! TODO: Use ForceErrors block to wrap a display statement
`,
                hint: "Use `ForceErrors` as the block header.",
                solution: `ForceErrors
    display "ForceErrors active" ?color="cyan"`,
                expectedMatch: /ForceErrors active/i
            },
            {
                id: "ex_modes_3",
                title: "Exercise 11.3: Critical Errors Scope",
                prompt: "Execute a calculation inside a <code>CriticalErrors</code> block.",
                starterCode: `! TODO: Perform val : 100 * 2 inside CriticalErrors and display "Calculated: " + val
`,
                hint: "Indent statements under `CriticalErrors`.",
                solution: `CriticalErrors
    val : 100 * 2
    display "Calculated: " + val ?color="yellow"`,
                expectedMatch: /Calculated: 200/i
            }
        ]
    },

    {
        id: "command-attributes",
        number: 12,
        title: "Command Attributes & Kwargs",
        category: "Language Features",
        readTime: "5 min read",
        summary: "Attach keyword arguments to commands with ?key=value for ANSI colors, prompt fallbacks, and step overrides.",
        body: `
            <h2>Command Attributes Syntax (<code>?key=val</code>)</h2>
            <p>Commands in VerScript accept optional modifiers and keyword arguments using the <code>?</code> prefix.</p>

            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Command</th>
                        <th>Attribute</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>display</code></td>
                        <td><code>?color="green"|"red"|"yellow"|"cyan"|"purple"|"blue"</code></td>
                        <td>ANSI color output styling.</td>
                    </tr>
                    <tr>
                        <td><code>display</code></td>
                        <td><code>?newline=false</code> (or <code>?inline</code>)</td>
                        <td>Suppresses newline for segment printing.</td>
                    </tr>
                    <tr>
                        <td><code>prompt</code></td>
                        <td><code>?default="value"</code></td>
                        <td>Fallback input value if empty.</td>
                    </tr>
                    <tr>
                        <td><code>throw</code></td>
                        <td><code>?msg="custom error text"</code></td>
                        <td>Attaches error explanation.</td>
                    </tr>
                </tbody>
            </table>
        `,
        codeBlocks: [
            {
                id: "cb_attr_1",
                title: "attributes.vrs",
                code: `display "ANSI Green Output" ?color="green"
display "ANSI Purple Output" ?color="purple"
display "Segment A, " ?newline=false ?color="yellow"
display "Segment B (End)" ?color="cyan"`
            }
        ],
        exercises: [
            {
                id: "ex_attr_1",
                title: "Exercise 12.1: Rainbow Output",
                prompt: "Display <code>\"Cyan Text\"</code> in cyan and <code>\"Red Text\"</code> in red.",
                starterCode: `! TODO: Write two display lines: "Cyan Text" with ?color="cyan", "Red Text" with ?color="red"
`,
                hint: "Use `?color=\"cyan\"` and `?color=\"red\"`.",
                solution: `display "Cyan Text" ?color="cyan"
display "Red Text" ?color="red"`,
                expectedMatch: /Cyan Text[\s\S]*Red Text/i
            },
            {
                id: "ex_attr_2",
                title: "Exercise 12.2: Inline Progress Bar",
                prompt: "Print <code>\"[====\"</code>, <code>\"====] \"</code>, and <code>\"100%\"</code> on one line using <code>?newline=false</code>.",
                starterCode: `! TODO: Assemble an inline progress bar on one line with ?newline=false
`,
                hint: "Use `?newline=false` on first two displays.",
                solution: `display "[====" ?newline=false ?color="yellow"
display "====] " ?newline=false ?color="yellow"
display "100%" ?color="green"`,
                expectedMatch: /\[========\] 100%/i
            },
            {
                id: "ex_attr_3",
                title: "Exercise 12.3: Prompt with Custom Default",
                prompt: "Prompt for <code>serverPort</code> with default <code>\"8080\"</code> and display it.",
                starterCode: `! TODO: Prompt serverPort with ?default="8080" and display "Port: " + serverPort
`,
                hint: "Use `?default=\"8080\"`.",
                solution: `prompt serverPort ?default="8080"
display "Port: " + serverPort ?color="purple"`,
                expectedMatch: /Port: 8080/i
            }
        ]
    },

    {
        id: "polyglot-injection",
        number: 13,
        title: "Polyglot Code Injection (<code>inject</code>)",
        category: "Polyglot Runtime",
        readTime: "6 min read",
        summary: "Inject and evaluate code from 100+ languages directly inside VerScript with dynamic eval.",
        body: `
            <h2>Polyglot Runtime Engine (<code>inject [lang]</code>)</h2>
            <p>VerScript allows embedding source code written in <strong>100+ programming languages</strong> directly inside your VerScript code:</p>

            <div class="code-block"><span class="token-keyword">inject</span> python
    import math
    print(f"Pi calculation: {math.pi}")</div>

            <h2>Dynamic VerScript Evaluation (<code>inject verscript</code>)</h2>
            <p>Passing <code>verscript</code>, <code>vrs</code>, or <code>eval</code> evaluates nested VerScript source dynamically at runtime (equivalent to <code>eval()</code> in JavaScript):</p>
            <div class="code-block"><span class="token-keyword">inject</span> verscript
    <span class="token-keyword">display</span> <span class="token-string">"Dynamically evaluated VerScript block!"</span></div>
        `,
        codeBlocks: [
            {
                id: "cb_inject_1",
                title: "polyglot_demo.vrs",
                code: `display "=== Polyglot Injection Demo ===" ?color="cyan"

inject python
    data = [x * 2 for x in range(4)]
    print(f"Python list: {data}")

inject verscript
    display "Dynamically evaluated inside VerScript!" ?color="green"`
            }
        ],
        exercises: [
            {
                id: "ex_inj_1",
                title: "Exercise 13.1: Python Injection",
                prompt: "Use <code>inject python</code> to print <code>\"Hello from Python VM\"</code>.",
                starterCode: `! TODO: Write an 'inject python' block printing "Hello from Python VM"
`,
                hint: "Indent the python code block under `inject python`.",
                solution: `inject python
    print("Hello from Python VM")`,
                expectedMatch: /Hello from Python VM|Evaluated.*line/i
            },
            {
                id: "ex_inj_2",
                title: "Exercise 13.2: Dynamic VerScript Eval",
                prompt: "Use <code>inject verscript</code> to dynamically run a <code>display \"Nested dynamic code\"</code> statement.",
                starterCode: `! TODO: Use inject verscript to dynamically execute a display command
`,
                hint: "Use `inject verscript` followed by indented VerScript commands.",
                solution: `inject verscript
    display "Nested dynamic code" ?color="green"`,
                expectedMatch: /Nested dynamic code/i
            },
            {
                id: "ex_inj_3",
                title: "Exercise 13.3: JavaScript Injection",
                prompt: "Inject a JavaScript block that calculates <code>5 * 5</code>.",
                starterCode: `! TODO: Use inject javascript to log the result of 5 * 5
`,
                hint: "Write `inject javascript` and indent the JS code.",
                solution: `inject javascript
    console.log("Result: " + (5 * 5));`,
                expectedMatch: /Result: 25|Evaluated.*line/i
            }
        ]
    },

    {
        id: "command-aliases",
        number: 14,
        title: "Command Aliases (<code>alias</code>) &amp; Remapping",
        category: "Language Customization",
        readTime: "6 min read",
        summary: "Rebind command keywords and map attribute signatures with single-line, attribute, and multi-line alias blocks.",
        body: `
            <h2>The <code>alias</code> Keyword</h2>
            <p>VerScript allows renaming commands and translating attribute arguments dynamically at runtime:</p>

            <h3>1. Single-Line Alias</h3>
            <div class="code-block"><span class="token-keyword">alias</span> display: print
<span class="token-keyword">print</span> <span class="token-string">"Printed via alias!"</span> ?color="green"</div>

            <h3>2. Attribute / Argument Remapping</h3>
            <p>Remap caller attributes into canonical command attributes:</p>
            <div class="code-block"><span class="token-keyword">alias</span> display: echo ? color=tint newline=inline
<span class="token-keyword">echo</span> <span class="token-string">"Echoed message!"</span> ?tint="cyan" ?inline=true</div>

            <h3>3. Multi-Line Alias Blocks</h3>
            <div class="code-block"><span class="token-keyword">alias:</span>
    display: print
    loop: repeat
    iterate: for ? step=by

<span class="token-keyword">repeat</span> 2
    <span class="token-keyword">print</span> <span class="token-string">"Repeated!"</span> ?color="purple"</div>
        `,
        codeBlocks: [
            {
                id: "cb_alias_1",
                title: "alias_sample.vrs",
                code: `display "=== Alias Demo ===" ?color="cyan"

alias display: print
print "Hello from 'print' alias!" ?color="green"

alias:
    loop: repeat

repeat 2
    print "Loop aliased to repeat" ?color="yellow"`
            }
        ],
        exercises: [
            {
                id: "ex_alias_1",
                title: "Exercise 14.1: Simple Command Alias",
                prompt: "Alias <code>display</code> to <code>log</code> and print <code>\"Log message\"</code> in green.",
                starterCode: `! TODO: Alias display to log, then call log "Log message" ?color="green"
`,
                hint: "Use `alias display: log` then use `log \"...\"`.",
                solution: `alias display: log
log "Log message" ?color="green"`,
                expectedMatch: /Log message/i
            },
            {
                id: "ex_alias_2",
                title: "Exercise 14.2: Attribute Remapping",
                prompt: "Alias <code>display: echo ? color=tint</code> and call <code>echo \"Tinted\" ?tint=\"cyan\"</code>.",
                starterCode: `! TODO: Rebind display: echo with ?color=tint mapping, and execute echo "Tinted" ?tint="cyan"
`,
                hint: "The alias maps `?tint` to `?color`.",
                solution: `alias display: echo ? color=tint
echo "Tinted" ?tint="cyan"`,
                expectedMatch: /Tinted/i
            },
            {
                id: "ex_alias_3",
                title: "Exercise 14.3: Multi-Line Alias Block",
                prompt: "Define a multi-line <code>alias:</code> block aliasing <code>loop: repeat</code> and run a 2-iteration loop.",
                starterCode: `! TODO: Define multi-line alias: block aliasing loop to repeat, then run repeat 2
`,
                hint: "Use `alias:` followed by indented `loop: repeat`.",
                solution: `alias:
    loop: repeat

repeat 2
    display "Repetition" ?color="yellow"`,
                expectedMatch: /Repetition[\s\S]*Repetition/i
            }
        ]
    },

    {
        id: "ai-assistant-vs-sharp",
        number: 15,
        title: "VS#-1B AI Assistant & Tooling",
        category: "Tooling & Ecosystem",
        readTime: "4 min read",
        summary: "Leverage the 1-Billion parameter VS#-1B neural AI model for code generation, syntax repair, and explanations.",
        body: `
            <h2>The VS#-1B Neural Assistant</h2>
            <p>VerScript is integrated directly with <strong>VS#-1B</strong>, a custom transformer neural architecture trained specifically on VerScript syntax, AST rules, and polyglot translation.</p>

            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Specification</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Parameters</strong></td>
                        <td>1.0 Billion (1B) Parameters</td>
                    </tr>
                    <tr>
                        <td><strong>Context Window</strong></td>
                        <td>4,096 Tokens</td>
                    </tr>
                    <tr>
                        <td><strong>Capabilities</strong></td>
                        <td>Real-time code repair, syntax completions, multi-line comment generation.</td>
                    </tr>
                </tbody>
            </table>
        `,
        codeBlocks: [
            {
                id: "cb_ai_1",
                title: "ai_tooling.vrs",
                code: `! Code generated and formatted with VS#-1B
display "VS#-1B Neural Model Connected" ?color="cyan"
display "Ready to analyze VerScript AST." ?color="green"`
            }
        ],
        exercises: [
            {
                id: "ex_ai_1",
                title: "Exercise 15.1: Write Self-Documenting Code",
                prompt: "Write a short script with header comments, variable assignments, and a styled display output for <code>\"Agent: \" + player + \" | Score: \" + score</code>.",
                starterCode: `! TODO: Initialize player : "Agent-01", score : 500, and display formatted stats
`,
                hint: "Assemble variables into a clean display message.",
                solution: `! Player initialization
player : "Agent-01"
score : 500
display "Agent: " + player + " | Score: " + score ?color="cyan"`,
                expectedMatch: /Agent: Agent-01/i
            },
            {
                id: "ex_ai_2",
                title: "Exercise 15.2: Safe Execution Wrapper",
                prompt: "Combine <code>do-unless</code> with colorized output for a robust execution routine displaying <code>\"Routine started\"</code>.",
                starterCode: `! TODO: Wrap display "Routine started" in a do-unless error block
`,
                hint: "Use `do` and `unless error`.",
                solution: `do
    display "Routine started" ?color="green"
unless error
    display "Error handled" ?color="red"`,
                expectedMatch: /Routine started/i
            },
            {
                id: "ex_ai_3",
                title: "Exercise 15.3: Complete Pipeline",
                prompt: "Create an alias <code>display: print</code>, iterate across 3 items, and display <code>\"Item #\" + i</code> in purple.",
                starterCode: `! TODO: Create alias display: print and iterate i from 1 to 3 displaying "Item #" + i
`,
                hint: "Alias display to print then iterate.",
                solution: `alias display: print
iterate i from 1 to 3
    print "Item #" + i ?color="purple"`,
                expectedMatch: /Item #1[\s\S]*Item #3/i
            }
        ]
    },

    {
        id: "complete-reference",
        number: 16,
        title: "Language Specification & Cheat Sheet",
        category: "Reference",
        readTime: "5 min read",
        summary: "A complete master reference table of all VerScript keywords, operators, attributes, and syntax rules.",
        body: `
            <h2>Master Keyword Index</h2>
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Keyword</th>
                        <th>Category</th>
                        <th>Syntax Example</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td><code>display</code></td><td>I/O</td><td><code>display "Hello" ?color="green"</code></td></tr>
                    <tr><td><code>prompt</code></td><td>I/O</td><td><code>prompt var ?default="Guest"</code></td></tr>
                    <tr><td><code>loop</code></td><td>Control</td><td><code>loop 5</code></td></tr>
                    <tr><td><code>iterate</code></td><td>Control</td><td><code>iterate i from 1 to 10 step 2</code></td></tr>
                    <tr><td><code>while</code></td><td>Control</td><td><code>while cond step n</code></td></tr>
                    <tr><td><code>until</code></td><td>Control</td><td><code>until cond step n</code></td></tr>
                    <tr><td><code>if / else if / else</code></td><td>Control</td><td><code>if x &gt; 0 then</code></td></tr>
                    <tr><td><code>do / unless</code></td><td>Exceptions</td><td><code>do ... unless ErrorName</code></td></tr>
                    <tr><td><code>throw</code></td><td>Exceptions</td><td><code>throw ErrorName ?msg="detail"</code></td></tr>
                    <tr><td><code>inject</code></td><td>Polyglot</td><td><code>inject python</code></td></tr>
                    <tr><td><code>alias</code></td><td>Custom</td><td><code>alias display: print</code></td></tr>
                    <tr><td><code>SuppressErrors</code></td><td>Directives</td><td><code>SuppressErrors</code></td></tr>
                    <tr><td><code>ForceErrors</code></td><td>Directives</td><td><code>ForceErrors</code></td></tr>
                </tbody>
            </table>
        `,
        codeBlocks: [
            {
                id: "cb_ref_1",
                title: "master_showcase.vrs",
                code: `! Master Showcase of VerScript v1.2.0
alias display: print ? color=tint

print "=== VerScript Master Engine Active ===" ?tint="cyan"

iterate i from 1 to 3
    print "Engine Core #" + i ?tint="green"

print "All systems operational!" ?tint="yellow"`
            }
        ],
        exercises: [
            {
                id: "ex_ref_1",
                title: "Exercise 16.1: Comprehensive Test Script",
                prompt: "Write a script combining <code>alias display: print</code>, <code>iterate k from 1 to 3</code>, and display <code>\"Step \" + k</code>.",
                starterCode: `! TODO: Combine alias display: print with iterate k from 1 to 3
`,
                hint: "Use `alias display: print` then iterate.",
                solution: `alias display: print
iterate k from 1 to 3
    print "Step " + k ?color="cyan"`,
                expectedMatch: /Step 1[\s\S]*Step 3/i
            },
            {
                id: "ex_ref_2",
                title: "Exercise 16.2: Exception & Fallback Test",
                prompt: "Implement a <code>do-unless</code> block with <code>?msg</code> attribute and print <code>\"Recovery Test Succeeded\"</code> in green.",
                starterCode: `! TODO: Throw RecoveryTest error and handle it in unless block
`,
                hint: "Catch `RecoveryTest` and display success.",
                solution: `do
    throw RecoveryTest ?msg="Testing fallback"
unless RecoveryTest
    display "Recovery Test Succeeded" ?color="green"`,
                expectedMatch: /Recovery Test Succeeded/i
            },
            {
                id: "ex_ref_3",
                title: "Exercise 16.3: Master Certification Script",
                prompt: "Display <code>\"VerScript Certification Completed!\"</code> in green.",
                starterCode: `! TODO: Display "VerScript Certification Completed!" in green
`,
                hint: "Display the certification text in green.",
                solution: `display "VerScript Certification Completed!" ?color="green"`,
                expectedMatch: /VerScript Certification Completed!/i
            }
        ]
    },

    {
        id: "grandmaster-capstone",
        number: 17,
        title: "Grandmaster Capstone: Complex Systems & Pipelines",
        category: "Expert Capstone",
        readTime: "12 min read",
        summary: "Build complex multi-stage architectures: state machines, reactive memory caches, autonomous retry engines, and polyglot streaming pipelines.",
        body: `
            <h2>The Grandmaster Challenge</h2>
            <p>Welcome to the final capstone chapter of the VerScript Academy. In this section, you will write complex real-world programs combining all advanced features of VerScript: multi-tier state machines, reactive watch guards, nested polyglot pipelines, custom error scopes, and dynamic command aliases.</p>

            <div class="callout-box warn">
                <div class="callout-title">⚔️ High Complexity Warning</div>
                <p>These exercises require multi-statement algorithmic coordination, nested scopes, error interception, and dynamic attribute translations. No pre-written answers are given — you must build the systems from specifications!</p>
            </div>

            <h2>Architecture Matrix</h2>
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>System Pattern</th>
                        <th>VerScript Mechanisms</th>
                        <th>Real-world Analog</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Reactive State Machine</strong></td>
                        <td><code>do ... unless internal [condition]</code> + multi-line <code>alias:</code></td>
                        <td>Circuit Breaker / Watchdog Timer</td>
                    </tr>
                    <tr>
                        <td><strong>Polyglot Stream Pipeline</strong></td>
                        <td><code>inject python</code> + <code>inject javascript</code> + <code>inject verscript</code></td>
                        <td>Multi-language Microservice Bus</td>
                    </tr>
                    <tr>
                        <td><strong>Autonomous Retry Orchestrator</strong></td>
                        <td><code>SuppressErrors</code> + <code>while ... step</code> + <code>throw ?msg</code></td>
                        <td>Exponential Backoff Network Client</td>
                    </tr>
                </tbody>
            </table>
        `,
        codeBlocks: [
            {
                id: "cb_capstone_1",
                title: "reactor_orchestrator.vrs",
                code: `! Grandmaster Capstone: Reactor Multi-Tier Orchestrator
alias:
    display: log ? color=tint newline=inline
    loop: repeat

log "=== Reactor System Boot ===" ?tint="cyan"
log "\n"

core_temp : 120
containment_breach : false

do
    log "[Stage 1] Initializing coolant flow... " ?tint="yellow" ?inline=true
    core_temp : core_temp + 80
    log "Temp: " + core_temp + "C\n" ?tint="cyan"
    
    log "[Stage 2] Power surge injection... " ?tint="yellow" ?inline=true
    core_temp : core_temp + 150
    log "Temp: " + core_temp + "C\n" ?tint="red"
unless internal core_temp > 300
    log "[ALARM] Emergency Cryo-Vent Engaged! Reactor Stabilized.\n" ?tint="green"
    core_temp : 95
    log "Stabilized Temp: " + core_temp + "C\n" ?tint="cyan"`
            }
        ],
        exercises: [
            {
                id: "ex_capstone_1",
                title: "Challenge 17.1: Multi-tier Reactor Core Watchdog",
                prompt: `Build an industrial reactor watchdog system:
1. Define a multi-line <code>alias:</code> block aliasing <code>display: log ? color=tint</code>.
2. Initialize <code>pressure : 50</code> and <code>critical_alert : false</code>.
3. In a <code>do</code> block, increment pressure to <code>120</code>, then <code>220</code>, then <code>320</code>.
4. Set a reactive guard <code>unless internal pressure > 300</code> that halts the core and outputs <code>"[VENT-OPEN] Pressure Dropped! Core Safe."</code> in green.`,
                starterCode: `! Grandmaster Challenge 17.1: Multi-tier Reactor Core Watchdog
! TODO: Implement the reactor state machine as specified in the prompt:
`,
                hint: "Set up the multi-line alias block first, then use `unless internal pressure > 300` on the do block.",
                solution: `alias:
    display: log ? color=tint

pressure : 50
critical_alert : false

do
    log "Normal: " + pressure ?tint="cyan"
    pressure : 120
    pressure : 220
    pressure : 320
unless internal pressure > 300
    log "[VENT-OPEN] Pressure Dropped! Core Safe." ?tint="green"`,
                expectedMatch: /VENT-OPEN.*Pressure Dropped! Core Safe/i
            },
            {
                id: "ex_capstone_2",
                title: "Challenge 17.2: Polyglot Matrix Data Bus",
                prompt: `Create an interconnected polyglot processing pipeline:
1. Alias <code>display: emit ? color=hue</code>.
2. <code>inject python</code> to calculate squares <code>[1, 4, 9, 16]</code>.
3. <code>inject javascript</code> to process a timestamp.
4. <code>inject verscript</code> to output <code>"[VERIFIED] Polyglot Bus Clean"</code> in cyan.`,
                starterCode: `! Grandmaster Challenge 17.2: Polyglot Matrix Data Bus
! TODO: Build the multi-language injected pipeline
`,
                hint: "Use alias, then `inject python`, `inject javascript`, and `inject verscript` sequentially.",
                solution: `alias display: emit ? color=hue

emit "Starting Polyglot Pipeline..." ?hue="yellow"

inject python
    data = [x**2 for x in [1, 2, 3, 4]]
    print("Python computed:", data)

inject javascript
    console.log("JavaScript timestamp verified.");

inject verscript
    display "[VERIFIED] Polyglot Bus Clean" ?color="cyan"`,
                expectedMatch: /VERIFIED.*Polyglot Bus Clean/i
            },
            {
                id: "ex_capstone_3",
                title: "Challenge 17.3: Stepped Sieve Calculation Engine",
                prompt: `Build a stepped calculation algorithm:
1. Initialize <code>accumulator : 0</code> and <code>checksum : 1</code>.
2. Use <code>iterate step_idx from 10 to 50 step 10</code>.
3. On each iteration, add <code>step_idx</code> to <code>accumulator</code> and multiply <code>checksum : checksum * 2</code>.
4. After iteration finishes, display <code>"Accumulator: " + accumulator + " | Checksum: " + checksum</code> in purple.`,
                starterCode: `! Grandmaster Challenge 17.3: Stepped Sieve Calculation Engine
! TODO: Implement the iterative accumulator and checksum algorithm
`,
                hint: "Iterate from 10 to 50 with step 10 (will run for 10, 20, 30, 40, 50). Accumulator will equal 150, Checksum will equal 32.",
                solution: `accumulator : 0
checksum : 1

iterate step_idx from 10 to 50 step 10
    accumulator : accumulator + step_idx
    checksum : checksum * 2

display "Accumulator: " + accumulator + " | Checksum: " + checksum ?color="purple"`,
                expectedMatch: /Accumulator: 150 \| Checksum: 32/i
            },
            {
                id: "ex_capstone_4",
                title: "Challenge 17.4: Autonomous Network Retry Engine",
                prompt: `Build an autonomous retry loop:
1. Initialize <code>attempts : 0</code> and <code>max_retries : 3</code> and <code>connected : false</code>.
2. Inside <code>SuppressErrors</code>, use a <code>while attempts < max_retries</code> loop.
3. Increment <code>attempts</code> by 1, display <code>"Connecting attempt " + attempts</code>.
4. If attempts == 3, set <code>connected : true</code>.
5. After the loop, if connected is true, display <code>"[ESTABLISHED] Session Secured"</code> in green.`,
                starterCode: `! Grandmaster Challenge 17.4: Autonomous Network Retry Engine
! TODO: Build the retry orchestrator with SuppressErrors and while loop
`,
                hint: "Use `attempts : attempts + 1` inside while loop and set `connected : true` when attempts reaches 3.",
                solution: `attempts : 0
max_retries : 3
connected : false

SuppressErrors
    while attempts < max_retries
        attempts : attempts + 1
        display "Connecting attempt " + attempts ?color="yellow"
        if attempts == 3 then
            connected : true

if connected == true then
    display "[ESTABLISHED] Session Secured" ?color="green"`,
                expectedMatch: /ESTABLISHED.*Session Secured/i
            },
            {
                id: "ex_capstone_5",
                title: "Challenge 17.5: Cascading Custom Error Hierarchy",
                prompt: `Build a multi-level fallback error recovery system:
1. Outer <code>do</code> block throws <code>HardwareFault</code> with <code>?msg="Sensor Failure"</code>.
2. The <code>unless HardwareFault</code> catches it and logs <code>"Sensor Fault Recovered"</code> in yellow, then re-runs backup check.
3. Display final state <code>"[RESTORED] System operational"</code> in green.`,
                starterCode: `! Grandmaster Challenge 17.5: Cascading Custom Error Hierarchy
! TODO: Write the nested exception recovery pipeline
`,
                hint: "Use `do` with `throw HardwareFault ?msg=\"Sensor Failure\"` and catch with `unless HardwareFault`.",
                solution: `do
    display "Starting sensor diagnostics..." ?color="cyan"
    throw HardwareFault ?msg="Sensor Failure"
unless HardwareFault
    display "Sensor Fault Recovered: " + error ?color="yellow"
    display "[RESTORED] System operational" ?color="green"`,
                expectedMatch: /RESTORED.*System operational/i
            },
            {
                id: "ex_capstone_6",
                title: "Challenge 17.6: Self-Healing Memory Cache Eviction",
                prompt: `Simulate a LRU memory cache eviction engine:
1. Set <code>cache_size : 0</code> and <code>max_capacity : 3</code>.
2. In a <code>do</code> block, add items: <code>cache_size : cache_size + 1</code>, then <code>+ 2</code>, then <code>+ 2</code> (total 5).
3. Set guard <code>unless internal cache_size > max_capacity</code>.
4. In the handler, evict items (<code>cache_size : 2</code>) and display <code>"[EVICTION] Evicted excess entries. Cache size: " + cache_size</code> in cyan.`,
                starterCode: `! Grandmaster Challenge 17.6: Self-Healing Memory Cache Eviction
! TODO: Implement the memory cache monitor and eviction handler
`,
                hint: "The internal watch condition `cache_size > max_capacity` trips as soon as capacity exceeds 3.",
                solution: `cache_size : 0
max_capacity : 3

do
    cache_size : cache_size + 1
    cache_size : cache_size + 2
    cache_size : cache_size + 2
unless internal cache_size > max_capacity
    cache_size : 2
    display "[EVICTION] Evicted excess entries. Cache size: " + cache_size ?color="cyan"`,
                expectedMatch: /EVICTION.*Cache size: 2/i
            },
            {
                id: "ex_capstone_7",
                title: "Challenge 17.7: Microservice Dynamic Route Matrix",
                prompt: `Build an aliased microservice command router:
1. Multi-line <code>alias:</code> remapping <code>display: route_get</code> and <code>prompt: route_post</code>.
2. Call <code>route_post endpoint ?default="/api/v1/auth"</code>.
3. Call <code>route_get "[DISPATCH:GET] Endpoint mapped to: " + endpoint</code> in purple.`,
                starterCode: `! Grandmaster Challenge 17.7: Microservice Dynamic Route Matrix
! TODO: Set up the routing aliases and dispatch routine
`,
                hint: "Use multi-line `alias:` block with `display: route_get` and `prompt: route_post`.",
                solution: `alias:
    display: route_get
    prompt: route_post

route_post endpoint ?default="/api/v1/auth"
route_get "[DISPATCH:GET] Endpoint mapped to: " + endpoint ?color="purple"`,
                expectedMatch: /DISPATCH:GET.*Endpoint mapped to: \/api\/v1\/auth/i
            },
            {
                id: "ex_capstone_8",
                title: "Challenge 17.8: Grandmaster Final Proof of Mastery",
                prompt: `Write a comprehensive master pipeline integrating:
- A multi-line <code>alias:</code> block (remapping display to log and loop to repeat)
- A 3-iteration repeat loop
- An internal exception catch with custom <code>?msg</code>
- A final certification display <code>"=== [GRANDMASTER CERTIFIED: VERIFIED] ==="</code> in green.`,
                starterCode: `! Grandmaster Challenge 17.8: Final Proof of Mastery
! TODO: Write the complete master integration pipeline
`,
                hint: "Combine all VerScript language capabilities into a single cohesive script.",
                solution: `alias:
    display: log ? color=tint
    loop: repeat

log "Initiating Grandmaster Proof Matrix..." ?tint="cyan"

repeat 3
    log "Processing cluster node..." ?tint="yellow"

do
    throw ValidationPass ?msg="All assertions verified"
unless ValidationPass
    log "=== [GRANDMASTER CERTIFIED: VERIFIED] ===" ?tint="green"`,
                expectedMatch: /GRANDMASTER CERTIFIED: VERIFIED/i
            }
        ]
    }
];
