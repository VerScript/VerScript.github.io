// ═══════════════════════════════════════════════════════════════════
// VerScript Release Core Libraries Directory
// Auto-generated specification with 20 comprehensive release libraries.
// ═══════════════════════════════════════════════════════════════════

const CORE_LIBRARIES = [
  {
    "id": "lib-math",
    "name": "Math",
    "category": "Core & Math",
    "version": "1.2.0",
    "status": "Embedded Core",
    "loadSyntax": "load Math",
    "summary": "Built-in mathematical functions, algebraic primitives, trigonometric conversions, and numeric clamping.",
    "description": "The <code>Math</code> library is compiled directly into the VerScript VM core. When loaded via <code>load Math</code>, it is resolved instantly from virtual memory without requiring external file system access. It includes both qualified calls (e.g. <code>Math.abs x</code>) and auto-unqualified routine access.",
    "meta": {
      "static": {
        "author": "VerScript Core Team",
        "revision": 12,
        "kind": "library",
        "origin": "embedded"
      },
      "dynamic": {
        "callCount": 0,
        "lastOp": "none"
      },
      "thisstatic": {
        "loadedAt": "boot"
      }
    },
    "functions": [
      {
        "name": "abs x",
        "params": "x: num",
        "returnType": "num",
        "desc": "Returns the absolute value of x."
      },
      {
        "name": "floor x",
        "params": "x: num",
        "returnType": "num",
        "desc": "Rounds x down to the largest integer less than or equal to x."
      },
      {
        "name": "ceil x",
        "params": "x: num",
        "returnType": "num",
        "desc": "Rounds x up to the smallest integer greater than or equal to x."
      },
      {
        "name": "round x",
        "params": "x: num",
        "returnType": "num",
        "desc": "Rounds x to the nearest integer."
      },
      {
        "name": "pow base exp",
        "params": "base: num, exp: num",
        "returnType": "num",
        "desc": "Calculates base raised to the exponent power."
      },
      {
        "name": "sqrt x",
        "params": "x: num",
        "returnType": "num",
        "desc": "Computes the square root of x."
      },
      {
        "name": "max a b",
        "params": "a: num, b: num",
        "returnType": "num",
        "desc": "Returns the greater of a and b."
      },
      {
        "name": "min a b",
        "params": "a: num, b: num",
        "returnType": "num",
        "desc": "Returns the smaller of a and b."
      },
      {
        "name": "clamp val minVal maxVal",
        "params": "val: num, minVal: num, maxVal: num",
        "returnType": "num",
        "desc": "Restricts val to remain within the range [minVal, maxVal]."
      },
      {
        "name": "sign x",
        "params": "x: num",
        "returnType": "num",
        "desc": "Returns 1 for positive numbers, -1 for negative numbers, and 0 for zero."
      },
      {
        "name": "hypot x y",
        "params": "x: num, y: num",
        "returnType": "num",
        "desc": "Computes the Euclidean norm sqrt(x^2 + y^2)."
      },
      {
        "name": "lerp a b t",
        "params": "a: num, b: num, t: num",
        "returnType": "num",
        "desc": "Linearly interpolates between a and b by ratio t."
      },
      {
        "name": "degToRad deg",
        "params": "deg: num",
        "returnType": "num",
        "desc": "Converts degrees to radians."
      },
      {
        "name": "radToDeg rad",
        "params": "rad: num",
        "returnType": "num",
        "desc": "Converts radians to degrees."
      }
    ],
    "runnableExample": "load Math\n\ndisplay \"=== Math Library Sandbox ===\"\ndisplay \"Math.abs -42.7        = \" + (Math.abs -42.7)\ndisplay \"Math.clamp 150 0 100 = \" + (Math.clamp 150 0 100)\ndisplay \"Math.pow 2 8          = \" + (Math.pow 2 8)\ndisplay \"Math.sqrt 144          = \" + (Math.sqrt 144)\ndisplay \"Math.hypot 3 4        = \" + (Math.hypot 3 4)\ndisplay \"Math.lerp 10 50 0.5  = \" + (Math.lerp 10 50 0.5)"
  },
  {
    "id": "lib-stats",
    "name": "Stats",
    "category": "Core & Math",
    "version": "1.1.0",
    "status": "Embedded Core",
    "loadSyntax": "load Stats",
    "summary": "Descriptive statistics, aggregations, averages, variance, and min/max detection on numeric collections.",
    "description": "The <code>Stats</code> embedded library provides robust collection analysis routines. Optimized for numeric arrays, it performs single-pass or two-pass computations for mean, sum, variance, and standard deviation.",
    "meta": {
      "static": {
        "author": "VerScript Core Team",
        "revision": 8,
        "kind": "library",
        "origin": "embedded"
      },
      "dynamic": {
        "totalBatches": 0
      },
      "thisstatic": {
        "loadedAt": "boot"
      }
    },
    "functions": [
      {
        "name": "sum values",
        "params": "values: arr",
        "returnType": "num",
        "desc": "Calculates the arithmetic sum of all numbers in the collection."
      },
      {
        "name": "mean values",
        "params": "values: arr",
        "returnType": "num",
        "desc": "Computes the average (mean) of all numeric elements."
      },
      {
        "name": "minMax values",
        "params": "values: arr",
        "returnType": "arr",
        "desc": "Returns a 2-element array [min, max] from the given collection."
      },
      {
        "name": "range values",
        "params": "values: arr",
        "returnType": "num",
        "desc": "Calculates the difference between maximum and minimum values."
      },
      {
        "name": "variance values",
        "params": "values: arr",
        "returnType": "num",
        "desc": "Calculates sample variance for the numeric collection."
      },
      {
        "name": "stdDev values",
        "params": "values: arr",
        "returnType": "num",
        "desc": "Computes the standard deviation sqrt(variance)."
      },
      {
        "name": "median values",
        "params": "values: arr",
        "returnType": "num",
        "desc": "Sorts and extracts the middle value of the collection."
      }
    ],
    "runnableExample": "load Stats\n\nset data: [12, 45, 67, 89, 23, 56, 78, 90, 34]\ndisplay \"Dataset: \" + data\ndisplay \"Sum:      \" + (Stats.sum data)\ndisplay \"Mean:     \" + (Stats.mean data)\nset mm: Stats.minMax data\ndisplay \"Min:      \" + mm[0]\ndisplay \"Max:      \" + mm[1]\ndisplay \"Range:    \" + (Stats.range data)"
  },
  {
    "id": "lib-assert",
    "name": "Assert",
    "category": "Testing & Quality",
    "version": "1.2.0",
    "status": "Embedded Core",
    "loadSyntax": "load Assert",
    "summary": "Production-grade assertion harness with test counters, diagnostic mismatch printing, and summary reporting.",
    "description": "Embedded into every VerScript binary, <code>Assert</code> is the standard testing library used in continuous integration and unit test scripts. It automatically tracks passed and failed assertions in internal dynamic metadata.",
    "meta": {
      "static": {
        "author": "VerScript Core Team",
        "revision": 10,
        "kind": "library",
        "origin": "embedded"
      },
      "dynamic": {
        "passedCount": 0,
        "failedCount": 0
      },
      "thisstatic": {
        "loadedAt": "boot"
      }
    },
    "functions": [
      {
        "name": "equals actual expected msg",
        "params": "actual: any, expected: any, msg: str",
        "returnType": "bool",
        "desc": "Asserts that actual equals expected."
      },
      {
        "name": "notEquals actual expected msg",
        "params": "actual: any, expected: any, msg: str",
        "returnType": "bool",
        "desc": "Asserts that actual does not equal expected."
      },
      {
        "name": "true condition msg",
        "params": "condition: bool, msg: str",
        "returnType": "bool",
        "desc": "Asserts that condition evaluates to true."
      },
      {
        "name": "false condition msg",
        "params": "condition: bool, msg: str",
        "returnType": "bool",
        "desc": "Asserts that condition evaluates to false."
      },
      {
        "name": "greaterThan a b msg",
        "params": "a: num, b: num, msg: str",
        "returnType": "bool",
        "desc": "Asserts that a > b."
      },
      {
        "name": "lessThan a b msg",
        "params": "a: num, b: num, msg: str",
        "returnType": "bool",
        "desc": "Asserts that a < b."
      },
      {
        "name": "inRange val low high msg",
        "params": "val: num, low: num, high: num, msg: str",
        "returnType": "bool",
        "desc": "Asserts low <= val <= high."
      },
      {
        "name": "summary",
        "params": "none",
        "returnType": "none",
        "desc": "Prints comprehensive test suite summary with pass/fail counts."
      }
    ],
    "runnableExample": "load Assert\n\nAssert.equals (10 + 5) 15 \"Addition test\"\nAssert.true (50 > 20) \"Inequality guard\"\nAssert.inRange 85 0 100 \"Percentage range\"\n\ndisplay \"Assertions executed successfully!\"\nAssert.summary"
  },
  {
    "id": "lib-random",
    "name": "Random",
    "category": "Core & Math",
    "version": "1.0.0",
    "status": "Standard Core Library",
    "loadSyntax": "load Random",
    "summary": "Pseudo-random number generator, uniform integer sampling, random coin tosses, and array shuffling.",
    "description": "The <code>Random</code> library implements standard linear congruential and Xorshift PRNG algorithms to deliver fast, reproducible random distributions for game logic, simulations, and testing.",
    "meta": {
      "static": {
        "author": "VerScript Core Team",
        "revision": 4,
        "kind": "library",
        "origin": "core"
      },
      "dynamic": {
        "seed": 123456789,
        "generatedCount": 0
      },
      "thisstatic": {
        "loadedAt": "runtime"
      }
    },
    "functions": [
      {
        "name": "int min max",
        "params": "min: num, max: num",
        "returnType": "num",
        "desc": "Generates a pseudo-random integer between min and max inclusive."
      },
      {
        "name": "float min max",
        "params": "min: num, max: num",
        "returnType": "num",
        "desc": "Generates a pseudo-random floating-point number between min and max."
      },
      {
        "name": "boolean",
        "params": "none",
        "returnType": "bool",
        "desc": "Simulates an unbiased coin toss, returning true or false."
      },
      {
        "name": "choice arr",
        "params": "arr: arr",
        "returnType": "any",
        "desc": "Selects a random element from the provided array."
      },
      {
        "name": "sample arr count",
        "params": "arr: arr, count: num",
        "returnType": "arr",
        "desc": "Draws count random elements without replacement."
      },
      {
        "name": "shuffle arr",
        "params": "arr: arr",
        "returnType": "arr",
        "desc": "Returns a randomly shuffled shallow copy using Fisher-Yates."
      }
    ],
    "runnableExample": "load Random\n\ndisplay \"Random Integer (1-100): \" + (Random.int 1 100)\ndisplay \"Coin Flip:             \" + (Random.boolean)\n\nset fruits: [\"Apple\", \"Banana\", \"Cherry\", \"Mango\", \"Dragonfruit\"]\ndisplay \"Random Choice:         \" + (Random.choice fruits)\ndisplay \"Shuffled Array:        \" + (Random.shuffle fruits)"
  },
  {
    "id": "lib-collections",
    "name": "Collections",
    "category": "Data & Collections",
    "version": "1.1.0",
    "status": "Standard Core Library",
    "loadSyntax": "load Collections",
    "summary": "Functional array utilities, set deduplication, chunking, zipping, flattening, and frequency counters.",
    "description": "<code>Collections</code> extends VerScript's native array primitives with higher-level algorithms for data manipulation and restructuring.",
    "meta": {
      "static": {
        "author": "VerScript Core Team",
        "revision": 6,
        "kind": "library",
        "origin": "core"
      },
      "dynamic": {
        "opsCount": 0
      },
      "thisstatic": {
        "loadedAt": "runtime"
      }
    },
    "functions": [
      {
        "name": "unique arr",
        "params": "arr: arr",
        "returnType": "arr",
        "desc": "Returns an array with all duplicate elements removed."
      },
      {
        "name": "flatten arr",
        "params": "arr: arr",
        "returnType": "arr",
        "desc": "Flattens a multi-dimensional array into a 1D collection."
      },
      {
        "name": "chunk arr size",
        "params": "arr: arr, size: num",
        "returnType": "arr",
        "desc": "Splits an array into sub-arrays of maximum size length."
      },
      {
        "name": "zip arrA arrB",
        "params": "arrA: arr, arrB: arr",
        "returnType": "arr",
        "desc": "Combines two arrays into an array of 2-element tuples [a, b]."
      },
      {
        "name": "frequency arr",
        "params": "arr: arr",
        "returnType": "entity",
        "desc": "Counts occurrences of each unique element in the collection."
      }
    ],
    "runnableExample": "load Collections\n\nset tags: [\"dev\", \"prod\", \"dev\", \"staging\", \"prod\", \"test\"]\ndisplay \"Unique Tags:   \" + (Collections.unique(tags))\n\nset pairs: Collections.zip([\"id\", \"name\", \"role\"], [101, \"Aiden\", \"Lead\"])\ndisplay \"Zipped Pairs:  \" + pairs\n\nset chunks: Collections.chunk([1, 2, 3, 4, 5, 6, 7], 3)\ndisplay \"Chunked Array: \" + chunks"
  },
  {
    "id": "lib-sort",
    "name": "Sort",
    "category": "Data & Collections",
    "version": "1.0.0",
    "status": "Standard Core Library",
    "loadSyntax": "load Sort",
    "summary": "High-performance collection sorting algorithms, reverse orders, sortedness guards, and binary search.",
    "description": "The <code>Sort</code> library provides optimized sorting algorithms along with logarithmic binary search on pre-sorted numeric and string arrays.",
    "meta": {
      "static": {
        "author": "VerScript Core Team",
        "revision": 7,
        "kind": "library",
        "origin": "core"
      },
      "dynamic": {
        "comparisons": 0
      },
      "thisstatic": {
        "loadedAt": "runtime"
      }
    },
    "functions": [
      {
        "name": "asc arr",
        "params": "arr: arr",
        "returnType": "arr",
        "desc": "Returns a new array sorted in ascending order."
      },
      {
        "name": "desc arr",
        "params": "arr: arr",
        "returnType": "arr",
        "desc": "Returns a new array sorted in descending order."
      },
      {
        "name": "isSorted arr",
        "params": "arr: arr",
        "returnType": "bool",
        "desc": "Checks if an array is strictly sorted in non-decreasing order."
      },
      {
        "name": "binarySearch sortedArr target",
        "params": "sortedArr: arr, target: any",
        "returnType": "num",
        "desc": "Finds index of target in O(log N) time, or -1 if absent."
      },
      {
        "name": "reverse arr",
        "params": "arr: arr",
        "returnType": "arr",
        "desc": "Returns a new array with elements in reversed order."
      }
    ],
    "runnableExample": "load Sort\n\nset scores: [84, 12, 99, 45, 67, 33]\nset sortedScores: Sort.asc scores\ndisplay \"Sorted Ascending:  \" + sortedScores\ndisplay \"Sorted Descending: \" + (Sort.desc scores)\ndisplay \"Is Sorted?         \" + (Sort.isSorted(sortedScores))\ndisplay \"Binary Search(45): \" + (Sort.binarySearch(sortedScores, 45))"
  },
  {
    "id": "lib-matrix",
    "name": "Matrix",
    "category": "Core & Math",
    "version": "1.0.0",
    "status": "Standard Core Library",
    "loadSyntax": "load Matrix",
    "summary": "2D grid operations, matrix transpositions, identity matrices, and linear algebra transformations.",
    "description": "<code>Matrix</code> provides high-level 2D array and matrix manipulation routines for game boards, physics coordinates, and graphic transformations.",
    "meta": {
      "static": {
        "author": "VerScript Core Team",
        "revision": 3,
        "kind": "library",
        "origin": "core"
      },
      "dynamic": {
        "matricesCreated": 0
      },
      "thisstatic": {
        "loadedAt": "runtime"
      }
    },
    "functions": [
      {
        "name": "create rows cols fillVal",
        "params": "rows: num, cols: num, fillVal: any",
        "returnType": "arr",
        "desc": "Creates a 2D matrix of dimensions rows x cols initialized to fillVal."
      },
      {
        "name": "identity size",
        "params": "size: num",
        "returnType": "arr",
        "desc": "Generates an identity matrix with 1s on diagonal and 0s elsewhere."
      },
      {
        "name": "transpose matrix",
        "params": "matrix: arr",
        "returnType": "arr",
        "desc": "Swaps row and column indices of the matrix."
      },
      {
        "name": "add matA matB",
        "params": "matA: arr, matB: arr",
        "returnType": "arr",
        "desc": "Computes element-wise sum of two matrices."
      },
      {
        "name": "multiplyScalar matrix scalar",
        "params": "matrix: arr, scalar: num",
        "returnType": "arr",
        "desc": "Multiplies every element in the matrix by scalar."
      }
    ],
    "runnableExample": "load Matrix\n\nset id3: Matrix.identity 3\ndisplay \"3x3 Identity Matrix:\"\ndisplay id3\n\nset grid: Matrix.create 2 3 0\ndisplay \"2x3 Zero Grid: \" + grid"
  },
  {
    "id": "lib-stringutil",
    "name": "StringUtil",
    "category": "Utilities & Text",
    "version": "1.3.0",
    "status": "Standard Core Library",
    "loadSyntax": "load StringUtil",
    "summary": "Advanced string padding, URL slugification, word counting, text repetition, and truncation.",
    "description": "Complementing VerScript's built-in string methods (<code>.trim()</code>, <code>.toUpper()</code>, etc.), <code>StringUtil</code> provides utility algorithms for text processing and command-line interfaces.",
    "meta": {
      "static": {
        "author": "VerScript Core Team",
        "revision": 9,
        "kind": "library",
        "origin": "core"
      },
      "dynamic": {
        "stringOps": 0
      },
      "thisstatic": {
        "loadedAt": "runtime"
      }
    },
    "functions": [
      {
        "name": "padLeft str width char",
        "params": "str: str, width: num, char: str",
        "returnType": "str",
        "desc": "Pads the beginning of str with char until it reaches width."
      },
      {
        "name": "padRight str width char",
        "params": "str: str, width: num, char: str",
        "returnType": "str",
        "desc": "Pads the end of str with char until it reaches width."
      },
      {
        "name": "slugify str",
        "params": "str: str",
        "returnType": "str",
        "desc": "Converts text to an SEO-friendly URL slug (lowercase and hyphenated)."
      },
      {
        "name": "capitalize str",
        "params": "str: str",
        "returnType": "str",
        "desc": "Capitalizes the first character of each word."
      },
      {
        "name": "repeat str count",
        "params": "str: str, count: num",
        "returnType": "str",
        "desc": "Repeats str count times."
      },
      {
        "name": "wordCount str",
        "params": "str: str",
        "returnType": "num",
        "desc": "Counts whitespace-delimited words in str."
      },
      {
        "name": "truncate str maxLen",
        "params": "str: str, maxLen: num",
        "returnType": "str",
        "desc": "Truncates str to maxLen and appends '...' if exceeded."
      }
    ],
    "runnableExample": "load StringUtil\n\ndisplay StringUtil.padLeft \"7\" 4 \"0\"\ndisplay StringUtil.padRight \"Title\" 20 \".\"\ndisplay StringUtil.slugify \"VerScript Core Libraries v2.0 Release!\"\ndisplay StringUtil.truncate \"This is an extremely long log message that needs brevity\" 25\ndisplay \"Word Count: \" + (StringUtil.wordCount \"The quick brown fox jumps\")"
  },
  {
    "id": "lib-time",
    "name": "Time",
    "category": "System & Runtime",
    "version": "1.0.0",
    "status": "Standard Core Library",
    "loadSyntax": "load Time",
    "summary": "Monotonic timers, execution latency measurement, and human-readable millisecond duration formatters.",
    "description": "The <code>Time</code> library interfaces with the host platform's monotonic clock to deliver sub-millisecond benchmarking, latency tracking, and timestamp conversions.",
    "meta": {
      "static": {
        "author": "VerScript Core Team",
        "revision": 2,
        "kind": "library",
        "origin": "core"
      },
      "dynamic": {
        "timerRuns": 0
      },
      "thisstatic": {
        "loadedAt": "runtime"
      }
    },
    "functions": [
      {
        "name": "now",
        "params": "none",
        "returnType": "num",
        "desc": "Returns the current high-resolution monotonic timestamp in milliseconds."
      },
      {
        "name": "elapsed startTime",
        "params": "startTime: num",
        "returnType": "num",
        "desc": "Calculates milliseconds elapsed since startTime."
      },
      {
        "name": "formatDuration ms",
        "params": "ms: num",
        "returnType": "str",
        "desc": "Formats milliseconds into human-readable units (e.g. '120ms', '4.2s')."
      },
      {
        "name": "toIsoString",
        "params": "none",
        "returnType": "str",
        "desc": "Returns current ISO-8601 UTC timestamp string."
      }
    ],
    "runnableExample": "load Time\n\nset t0: Time.now\n\n! Simulate computation loop\nset sum: 0\niterate i from 1 to 10000\n  sum: sum + i\n\nset duration: Time.elapsed t0\ndisplay \"Computation finished in: \" + (Time.formatDuration duration)\ndisplay \"Sum Result:               \" + sum"
  },
  {
    "id": "lib-benchmark",
    "name": "Benchmark",
    "category": "Testing & Quality",
    "version": "1.1.0",
    "status": "Standard Core Library",
    "loadSyntax": "load Benchmark",
    "summary": "Automated micro-benchmarking engine, multi-iteration warm-up cycles, and comparative timing reports.",
    "description": "<code>Benchmark</code> enables systematic performance profiling of routines, algorithms, and data structures. It runs warm-up passes to eliminate JIT bias and reports minimum, maximum, and average execution latencies.",
    "meta": {
      "static": {
        "author": "VerScript Core Team",
        "revision": 4,
        "kind": "library",
        "origin": "core"
      },
      "dynamic": {
        "suitesRun": 0
      },
      "thisstatic": {
        "loadedAt": "runtime"
      }
    },
    "functions": [
      {
        "name": "run label iterations routineRef",
        "params": "label: str, iterations: num, routineRef: routine",
        "returnType": "entity",
        "desc": "Executes routineRef for iterations passes, reporting timing metrics."
      },
      {
        "name": "compare labelA routineA labelB routineB iterations",
        "params": "labelA: str, routineA: routine, labelB: str, routineB: routine, iterations: num",
        "returnType": "entity",
        "desc": "Runs comparative latency tests on two rival routines."
      },
      {
        "name": "report",
        "params": "none",
        "returnType": "none",
        "desc": "Prints comprehensive benchmarking results to console."
      }
    ],
    "runnableExample": "load Benchmark\n\ndisplay \"Running Micro-benchmark test...\"\n! Micro-benchmarking helper\nBenchmark.run(\"Loop Accumulation\", 1000, def func()\n  set x: 0\n  iterate j from 1 to 500\n    x: x + 1\n  reply x\n)\nBenchmark.report"
  },
  {
    "id": "lib-path",
    "name": "Path",
    "category": "System & Runtime",
    "version": "1.0.0",
    "status": "Standard Core Library",
    "loadSyntax": "load Path",
    "summary": "Cross-platform path resolution, directory extraction, extension normalization, and absolute path guards.",
    "description": "<code>Path</code> handles file system path string manipulations across Windows (\\) and POSIX (/) environments, standardizing path segments into canonical formats.",
    "meta": {
      "static": {
        "author": "VerScript Core Team",
        "revision": 5,
        "kind": "library",
        "origin": "core"
      },
      "dynamic": {
        "pathsProcessed": 0
      },
      "thisstatic": {
        "loadedAt": "runtime"
      }
    },
    "functions": [
      {
        "name": "join partA partB",
        "params": "partA: str, partB: str",
        "returnType": "str",
        "desc": "Joins two path fragments using the platform-appropriate separator."
      },
      {
        "name": "basename filePath",
        "params": "filePath: str",
        "returnType": "str",
        "desc": "Extracts the filename and extension from a path string."
      },
      {
        "name": "dirname filePath",
        "params": "filePath: str",
        "returnType": "str",
        "desc": "Extracts the parent directory portion of a path string."
      },
      {
        "name": "extname filePath",
        "params": "filePath: str",
        "returnType": "str",
        "desc": "Returns the file extension including the leading dot (e.g. '.vrs')."
      },
      {
        "name": "normalize filePath",
        "params": "filePath: str",
        "returnType": "str",
        "desc": "Resolves '.' and '..' segments and replaces redundant slashes."
      },
      {
        "name": "isAbsolute filePath",
        "params": "filePath: str",
        "returnType": "bool",
        "desc": "Determines whether filePath is an absolute path."
      }
    ],
    "runnableExample": "load Path\n\nset p: \"src/compiler/parser.lib.vrs\"\ndisplay \"Basename:    \" + (Path.basename p)\ndisplay \"Dirname:     \" + (Path.dirname p)\ndisplay \"Extname:     \" + (Path.extname p)\ndisplay \"Path Join:   \" + (Path.join \"workspace/core\" \"math.vrs\")\ndisplay \"Is Absolute: \" + (Path.isAbsolute p)"
  },
  {
    "id": "lib-env",
    "name": "Env",
    "category": "System & Runtime",
    "version": "1.0.0",
    "status": "Standard Core Library",
    "loadSyntax": "load Env",
    "summary": "Environment variable reader, operating system diagnostics, architecture flags, and platform detectors.",
    "description": "<code>Env</code> provides direct access to host process environment variables and host platform diagnostics.",
    "meta": {
      "static": {
        "author": "VerScript Core Team",
        "revision": 3,
        "kind": "library",
        "origin": "core"
      },
      "dynamic": {
        "envLookups": 0
      },
      "thisstatic": {
        "loadedAt": "runtime"
      }
    },
    "functions": [
      {
        "name": "get key defaultVal",
        "params": "key: str, defaultVal: str",
        "returnType": "str",
        "desc": "Retrieves value of environment variable key, or defaultVal if absent."
      },
      {
        "name": "has key",
        "params": "key: str",
        "returnType": "bool",
        "desc": "Checks whether environment variable key is defined in the host process."
      },
      {
        "name": "os",
        "params": "none",
        "returnType": "str",
        "desc": "Returns host operating system identifier ('windows', 'linux', 'darwin')."
      },
      {
        "name": "arch",
        "params": "none",
        "returnType": "str",
        "desc": "Returns CPU architecture string ('x64', 'arm64')."
      },
      {
        "name": "isWindows",
        "params": "none",
        "returnType": "bool",
        "desc": "Returns true if running on Microsoft Windows."
      },
      {
        "name": "isLinux",
        "params": "none",
        "returnType": "bool",
        "desc": "Returns true if running on Linux."
      },
      {
        "name": "isMacOS",
        "params": "none",
        "returnType": "bool",
        "desc": "Returns true if running on Apple macOS."
      }
    ],
    "runnableExample": "load Env\n\ndisplay \"Host OS:       \" + (Env.os)\ndisplay \"Architecture:  \" + (Env.arch)\ndisplay \"Is Windows?    \" + (Env.isWindows)\ndisplay \"USER / HOME:   \" + (Env.get \"USER\" (Env.get \"USERNAME\" \"DefaultDev\"))"
  },
  {
    "id": "lib-console",
    "name": "Console",
    "category": "Utilities & Text",
    "version": "1.2.0",
    "status": "Standard Core Library",
    "loadSyntax": "load Console",
    "summary": "Formatted ANSI CLI rendering, banner boxes, table layout printers, divider rules, and progress bars.",
    "description": "<code>Console</code> delivers beautiful command-line interface tools with colored boxes, dividers, tabular column alignment, and terminal status badges.",
    "meta": {
      "static": {
        "author": "VerScript Core Team",
        "revision": 8,
        "kind": "library",
        "origin": "core"
      },
      "dynamic": {
        "linesDrawn": 0
      },
      "thisstatic": {
        "loadedAt": "runtime"
      }
    },
    "functions": [
      {
        "name": "banner title",
        "params": "title: str",
        "returnType": "none",
        "desc": "Prints a bold boxed header banner with double borders."
      },
      {
        "name": "divider char width",
        "params": "char: str, width: num",
        "returnType": "none",
        "desc": "Prints a repeated horizontal divider rule."
      },
      {
        "name": "badge type text",
        "params": "type: str, text: str",
        "returnType": "none",
        "desc": "Prints an ANSI-colored status badge (INFO, WARN, SUCCESS, ERROR)."
      },
      {
        "name": "progressBar current total width",
        "params": "current: num, total: num, width: num",
        "returnType": "none",
        "desc": "Prints a dynamic terminal progress bar [====>   ] 60%."
      }
    ],
    "runnableExample": "load Console\n\nConsole.banner \"VerScript Telemetry v2.0\"\nConsole.badge \"SUCCESS\" \"All build checks passed successfully!\"\nConsole.badge \"WARN\" \"Cache hit ratio below 80%\"\nConsole.divider \"-\" 40\nConsole.progressBar 75 100 25"
  },
  {
    "id": "lib-json",
    "name": "Json",
    "category": "Utilities & Text",
    "version": "1.0.0",
    "status": "Standard Core Library",
    "loadSyntax": "load Json",
    "summary": "Lightweight JSON-like serialization, pretty-printing with indentation, and key-value string parsing.",
    "description": "The <code>Json</code> library serializes native VerScript arrays, entities, and primitive types to formatted JSON representations and parses basic JSON key-value streams.",
    "meta": {
      "static": {
        "author": "VerScript Core Team",
        "revision": 3,
        "kind": "library",
        "origin": "core"
      },
      "dynamic": {
        "parseCount": 0
      },
      "thisstatic": {
        "loadedAt": "runtime"
      }
    },
    "functions": [
      {
        "name": "stringify val",
        "params": "val: any",
        "returnType": "str",
        "desc": "Converts val into a compact single-line JSON string."
      },
      {
        "name": "prettify val indent",
        "params": "val: any, indent: num",
        "returnType": "str",
        "desc": "Formats val into human-readable multi-line JSON with indentation."
      },
      {
        "name": "parseKeyValues rawText",
        "params": "rawText: str",
        "returnType": "entity",
        "desc": "Parses simple key-value pairs into a VerScript dynamic entity."
      }
    ],
    "runnableExample": "load Json\n\nset config: [\n  \"host\": \"127.0.0.1\",\n  \"port\": 8080,\n  \"debug\": true\n]\ndisplay \"Compact JSON: \" + (Json.stringify config)\ndisplay \"Formatted JSON:\"\ndisplay Json.prettify config 2"
  },
  {
    "id": "lib-regex",
    "name": "Regex",
    "category": "Utilities & Text",
    "version": "1.0.0",
    "status": "Standard Core Library",
    "loadSyntax": "load Regex",
    "summary": "Pattern matching helpers, email/alphanumeric guards, string escaping, and token extractors.",
    "description": "<code>Regex</code> provides string validation utilities, token extraction routines, and regex pattern builders.",
    "meta": {
      "static": {
        "author": "VerScript Core Team",
        "revision": 4,
        "kind": "library",
        "origin": "core"
      },
      "dynamic": {
        "matchesCount": 0
      },
      "thisstatic": {
        "loadedAt": "runtime"
      }
    },
    "functions": [
      {
        "name": "isEmail str",
        "params": "str: str",
        "returnType": "bool",
        "desc": "Validates if str matches standard email syntax."
      },
      {
        "name": "isNumeric str",
        "params": "str: str",
        "returnType": "bool",
        "desc": "Validates if str consists solely of digits or valid decimals."
      },
      {
        "name": "isAlpha str",
        "params": "str: str",
        "returnType": "bool",
        "desc": "Checks if str contains only alphabetic characters."
      },
      {
        "name": "isAlphanumeric str",
        "params": "str: str",
        "returnType": "bool",
        "desc": "Checks if str contains only alphanumeric characters."
      },
      {
        "name": "escape str",
        "params": "str: str",
        "returnType": "str",
        "desc": "Escapes regex special characters in str for literal matching."
      }
    ],
    "runnableExample": "load Regex\n\ndisplay \"user@domain.com is email?   \" + (Regex.isEmail \"user@domain.com\")\ndisplay \"invalid-email is email?     \" + (Regex.isEmail \"invalid-email\")\ndisplay \"'12345' is numeric?         \" + (Regex.isNumeric \"12345\")\ndisplay \"'alpha123' is alphanumeric? \" + (Regex.isAlphanumeric \"alpha123\")"
  },
  {
    "id": "lib-csv",
    "name": "Csv",
    "category": "Data & Collections",
    "version": "1.0.0",
    "status": "Standard Core Library",
    "loadSyntax": "load Csv",
    "summary": "Tabular comma-separated values parsing, column indexing, row filtering, and CSV string generation.",
    "description": "<code>Csv</code> parses tabular text files and comma-delimited streams into structured 2D arrays, supporting custom delimiters and row transformations.",
    "meta": {
      "static": {
        "author": "VerScript Core Team",
        "revision": 5,
        "kind": "library",
        "origin": "core"
      },
      "dynamic": {
        "rowsParsed": 0
      },
      "thisstatic": {
        "loadedAt": "runtime"
      }
    },
    "functions": [
      {
        "name": "parse csvText",
        "params": "csvText: str",
        "returnType": "arr",
        "desc": "Parses CSV text into a 2D array of row records."
      },
      {
        "name": "stringify records delimiter",
        "params": "records: arr, delimiter: str",
        "returnType": "str",
        "desc": "Serializes a 2D array of rows into a CSV string."
      },
      {
        "name": "getColumn records colIndex",
        "params": "records: arr, colIndex: num",
        "returnType": "arr",
        "desc": "Extracts an entire column across all rows as a 1D array."
      },
      {
        "name": "filterByColumn records colIndex expectedVal",
        "params": "records: arr, colIndex: num, expectedVal: any",
        "returnType": "arr",
        "desc": "Filters rows where colIndex equals expectedVal."
      }
    ],
    "runnableExample": "load Csv\n\nset rawCsv: \"id,name,role\n1,Elena,Lead\n2,Marcus,Developer\n3,Sarah,Designer\"\nset table: Csv.parse rawCsv\ndisplay \"Parsed Rows: \" + table.length()\ndisplay \"Names:       \" + (Csv.getColumn table 1)"
  },
  {
    "id": "lib-crypto",
    "name": "Crypto",
    "category": "System & Runtime",
    "version": "1.0.0",
    "status": "Standard Core Library",
    "loadSyntax": "load Crypto",
    "summary": "Checksum calculation (CRC32), fast string hashing, Caesar cipher obfuscation, and random token generators.",
    "description": "<code>Crypto</code> provides hashing and checksum primitives for data integrity verification, cache key generation, and light data obfuscation.",
    "meta": {
      "static": {
        "author": "VerScript Core Team",
        "revision": 2,
        "kind": "library",
        "origin": "core"
      },
      "dynamic": {
        "hashesCalculated": 0
      },
      "thisstatic": {
        "loadedAt": "runtime"
      }
    },
    "functions": [
      {
        "name": "crc32 str",
        "params": "str: str",
        "returnType": "num",
        "desc": "Calculates the 32-bit Cyclic Redundancy Check checksum."
      },
      {
        "name": "hashFast str",
        "params": "str: str",
        "returnType": "num",
        "desc": "Computes a 32-bit FNV-1a non-cryptographic hash for hash tables."
      },
      {
        "name": "caesar str shift",
        "params": "str: str, shift: num",
        "returnType": "str",
        "desc": "Rotates alphabetic characters by shift positions."
      },
      {
        "name": "token length",
        "params": "length: num",
        "returnType": "str",
        "desc": "Generates an alphanumeric pseudo-random verification token."
      }
    ],
    "runnableExample": "load Crypto\n\nset text: \"VerScript Core Payload\"\ndisplay \"CRC32 Checksum: \" + (Crypto.crc32 text)\ndisplay \"Fast Hash:      \" + (Crypto.hashFast text)\ndisplay \"Caesar (+3):    \" + (Crypto.caesar text 3)\ndisplay \"Random Token:   \" + (Crypto.token 16)"
  },
  {
    "id": "lib-mock",
    "name": "Mock",
    "category": "Testing & Quality",
    "version": "1.0.0",
    "status": "Standard Core Library",
    "loadSyntax": "load Mock",
    "summary": "Synthetic mock data generators for unit tests, fake user profiles, synthetic transactions, and call spies.",
    "description": "<code>Mock</code> generates realistic test fixtures for rapid prototyping and automated testing without external databases.",
    "meta": {
      "static": {
        "author": "VerScript Core Team",
        "revision": 3,
        "kind": "library",
        "origin": "core"
      },
      "dynamic": {
        "mocksGenerated": 0
      },
      "thisstatic": {
        "loadedAt": "runtime"
      }
    },
    "functions": [
      {
        "name": "user",
        "params": "none",
        "returnType": "entity",
        "desc": "Generates a synthetic user profile with id, name, and email."
      },
      {
        "name": "transaction",
        "params": "none",
        "returnType": "entity",
        "desc": "Generates a synthetic financial transaction record."
      },
      {
        "name": "records count type",
        "params": "count: num, type: str",
        "returnType": "arr",
        "desc": "Generates an array of count synthetic entities."
      }
    ],
    "runnableExample": "load Mock\n\nset fakeUser: Mock.user\ndisplay \"Mock User:        \" + fakeUser\nset fakeTx: Mock.transaction\ndisplay \"Mock Transaction: \" + fakeTx"
  },
  {
    "id": "lib-io",
    "name": "IO",
    "category": "System & Runtime",
    "version": "1.0.0",
    "status": "Standard Core Library",
    "loadSyntax": "load IO",
    "summary": "File path verification, memory buffer emulation, and temporary storage abstractions.",
    "description": "The <code>IO</code> library provides input/output abstractions and memory stream buffers for VerScript applications.",
    "meta": {
      "static": {
        "author": "VerScript Core Team",
        "revision": 2,
        "kind": "library",
        "origin": "core"
      },
      "dynamic": {
        "buffersAllocated": 0
      },
      "thisstatic": {
        "loadedAt": "runtime"
      }
    },
    "functions": [
      {
        "name": "exists path",
        "params": "path: str",
        "returnType": "bool",
        "desc": "Checks whether a file exists at the given path."
      },
      {
        "name": "buffer size",
        "params": "size: num",
        "returnType": "entity",
        "desc": "Allocates a fixed-capacity byte memory buffer."
      }
    ],
    "runnableExample": "load IO\n\ndisplay \"Check compiler file: \" + (IO.exists \"src/main.c\")\nset buf: IO.buffer 64\ndisplay \"Allocated Buffer:    \" + buf"
  },
  {
    "id": "lib-color",
    "name": "Color",
    "category": "Utilities & Text",
    "version": "1.0.0",
    "status": "Standard Core Library",
    "loadSyntax": "load Color",
    "summary": "RGB, Hex, and ANSI color space calculations, color lightening, darkening, and linear blending.",
    "description": "<code>Color</code> provides color conversions and palette blending helpers for GUI themes and ANSI terminal display formatting.",
    "meta": {
      "static": {
        "author": "VerScript Core Team",
        "revision": 3,
        "kind": "library",
        "origin": "core"
      },
      "dynamic": {
        "colorsCalculated": 0
      },
      "thisstatic": {
        "loadedAt": "runtime"
      }
    },
    "functions": [
      {
        "name": "hexToRgb hexStr",
        "params": "hexStr: str",
        "returnType": "arr",
        "desc": "Converts '#RRGGBB' to an array [r, g, b]."
      },
      {
        "name": "rgbToHex r g b",
        "params": "r: num, g: num, b: num",
        "returnType": "str",
        "desc": "Converts RGB components to a hex string '#RRGGBB'."
      },
      {
        "name": "lighten hexStr percent",
        "params": "hexStr: str, percent: num",
        "returnType": "str",
        "desc": "Increases color brightness by percent."
      },
      {
        "name": "darken hexStr percent",
        "params": "hexStr: str, percent: num",
        "returnType": "str",
        "desc": "Decreases color brightness by percent."
      },
      {
        "name": "blend hexA hexB ratio",
        "params": "hexA: str, hexB: str, ratio: num",
        "returnType": "str",
        "desc": "Linearly interpolates between two colors by ratio."
      }
    ],
    "runnableExample": "load Color\n\nset rgb: Color.hexToRgb \"#00FFCC\"\ndisplay \"Hex #00FFCC to RGB: \" + rgb\ndisplay \"Lightened (+20%):   \" + (Color.lighten \"#00FFCC\" 20)\ndisplay \"Darkened (-30%):    \" + (Color.darken \"#00FFCC\" 30)\ndisplay \"Blended:            \" + (Color.blend \"#00FFCC\" \"#9D00FF\" 0.5)"
  }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CORE_LIBRARIES };
}
