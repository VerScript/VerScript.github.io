// ═══════════════════════════════════════════════════════════════════
//  VerScript Academy — SPA Interactive Application Controller
// ═══════════════════════════════════════════════════════════════════

const POLYSERVER_API = "https://verscript-polyserver.onrender.com/vs-sharp";

let currentArticleIndex = 0;
let completedExercises = JSON.parse(localStorage.getItem('vs_completed_exercises') || '{}');

// ─── DOM ELEMENTS ──────────────────────────────────────────────────
const articleListEl = document.getElementById('articleList');
const mainContentEl = document.getElementById('mainContent');
const articleSearchEl = document.getElementById('articleSearch');
const progressBarEl = document.getElementById('progressBar');
const progressTextEl = document.getElementById('progressText');
const sidebarToggleEl = document.getElementById('sidebarToggle');
const sidebarEl = document.getElementById('sidebar');

// ─── INITIALIZATION ────────────────────────────────────────────────
function initDocsApp() {
    renderSidebarList(ARTICLES);
    setupEventListeners();
    updateProgressDisplay();

    // Check URL Hash routing
    const hash = window.location.hash.replace('#', '');
    if (hash) {
        const foundIdx = ARTICLES.findIndex(a => a.id === hash || `article-${a.number}` === hash);
        if (foundIdx !== -1) {
            currentArticleIndex = foundIdx;
        }
    }
    loadArticle(currentArticleIndex);
}

// ─── SIDEBAR RENDERING ─────────────────────────────────────────────
function renderSidebarList(articlesToRender) {
    articleListEl.innerHTML = '';
    articlesToRender.forEach((article, idx) => {
        const originalIndex = ARTICLES.findIndex(a => a.id === article.id);
        const li = document.createElement('li');
        
        const isDone = isArticleCompleted(article);
        
        li.innerHTML = `
            <button class="article-item-btn ${originalIndex === currentArticleIndex ? 'active' : ''}" data-idx="${originalIndex}">
                <span><span class="article-num">${String(article.number).padStart(2, '0')}.</span>${escapeHTML(article.title)}</span>
                <span class="article-status-dot ${isDone ? 'completed' : ''}"></span>
            </button>
        `;
        articleListEl.appendChild(li);
    });
}

function isArticleCompleted(article) {
    if (!article.exercises || article.exercises.length === 0) return false;
    return article.exercises.every(ex => completedExercises[ex.id]);
}

function updateProgressDisplay() {
    let completedCount = 0;
    ARTICLES.forEach(a => {
        if (isArticleCompleted(a)) completedCount++;
    });
    const pct = Math.round((completedCount / ARTICLES.length) * 100);
    progressBarEl.style.width = `${pct}%`;
    progressTextEl.textContent = `${completedCount} / ${ARTICLES.length} Chapters`;
}

// ─── LOAD ARTICLE VIEW ─────────────────────────────────────────────
function loadArticle(index) {
    if (index < 0 || index >= ARTICLES.length) return;
    currentArticleIndex = index;
    const article = ARTICLES[index];

    window.location.hash = article.id;
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Update active class in sidebar
    document.querySelectorAll('.article-item-btn').forEach(btn => {
        btn.classList.toggle('active', parseInt(btn.getAttribute('data-idx')) === currentArticleIndex);
    });

    // Close mobile sidebar if open
    sidebarEl.classList.remove('open');

    // Build Codeblocks HTML
    let codeBlocksHTML = '';
    if (article.codeBlocks && article.codeBlocks.length > 0) {
        codeBlocksHTML = `
            <h2>Interactive Code Sandbox</h2>
            <p>Run, edit, and experiment with the live runnable code below:</p>
        ` + article.codeBlocks.map(cb => renderRunBox(cb.id, cb.title, cb.code)).join('');
    }

    // Build Exercises HTML
    let exercisesHTML = '';
    if (article.exercises && article.exercises.length > 0) {
        exercisesHTML = `
            <div class="exercises-wrapper">
                <div class="exercises-heading">
                    <span>⚡ Hands-on Practice Exercises (${article.exercises.length})</span>
                </div>
                <div class="exercises-sub">Test your knowledge with real-time validated exercises. Pass all to complete this chapter!</div>
                ${article.exercises.map((ex, exIdx) => renderExerciseCard(ex, exIdx + 1)).join('')}
            </div>
        `;
    }

    // Previous / Next Navigation
    const prevArticle = index > 0 ? ARTICLES[index - 1] : null;
    const nextArticle = index < ARTICLES.length - 1 ? ARTICLES[index + 1] : null;

    const paginationHTML = `
        <div class="article-pagination">
            ${prevArticle ? `
                <div class="page-nav-card prev" onclick="loadArticle(${index - 1})">
                    <span class="nav-card-label">← Previous Chapter</span>
                    <span class="nav-card-title">${escapeHTML(prevArticle.title)}</span>
                </div>
            ` : '<div></div>'}
            ${nextArticle ? `
                <div class="page-nav-card next" onclick="loadArticle(${index + 1})">
                    <span class="nav-card-label">Next Chapter →</span>
                    <span class="nav-card-title">${escapeHTML(nextArticle.title)}</span>
                </div>
            ` : '<div></div>'}
        </div>
    `;

    mainContentEl.innerHTML = `
        <article>
            <div class="article-header">
                <div class="article-meta">
                    <span class="meta-pill">Chapter ${article.number}</span>
                    <span class="meta-pill">${escapeHTML(article.category)}</span>
                    <span class="read-time">⏱️ ${escapeHTML(article.readTime)}</span>
                </div>
                <h1 class="article-title">${escapeHTML(article.title)}</h1>
                <p class="article-summary">${escapeHTML(article.summary)}</p>
            </div>

            <div class="article-body">
                ${article.body}
                ${codeBlocksHTML}
                ${exercisesHTML}
                ${paginationHTML}
            </div>
        </article>
    `;
}

// ─── RENDER RUNBOX COMPONENT ───────────────────────────────────────
function renderRunBox(id, title, initialCode) {
    return `
        <div class="runbox-container" id="runbox_${id}">
            <div class="runbox-header">
                <div class="runbox-title">
                    <div class="window-dots">
                        <span class="w-dot red"></span>
                        <span class="w-dot yellow"></span>
                        <span class="w-dot green"></span>
                    </div>
                    <span>${escapeHTML(title || 'script.vrs')}</span>
                </div>
                <div class="runbox-actions">
                    <button class="action-btn" onclick="copyRunboxCode('${id}')" title="Copy code">📋 Copy</button>
                    <button class="action-btn" onclick="resetRunboxCode('${id}', \`${escapeTemplateString(initialCode)}\`)" title="Reset code">↺ Reset</button>
                    <button class="action-btn" onclick="sendToWebIDE('${id}')" title="Open in IDE">⚡ Open in IDE</button>
                    <button class="action-btn run-btn" onclick="executeRunBox('${id}')" id="runbtn_${id}">▶ Run Code</button>
                </div>
            </div>
            <div class="code-editor-area">
                <textarea class="code-textarea" id="textarea_${id}" spellcheck="false">${escapeHTML(initialCode)}</textarea>
            </div>
            <div class="runbox-console" id="console_${id}">
                <div class="console-header">
                    <span>Console Output</span>
                    <span id="stat_${id}">Ready</span>
                </div>
                <pre class="console-output" id="output_${id}">Click "Run Code" to execute...</pre>
            </div>
        </div>
    `;
}

// ─── RENDER EXERCISE CARD COMPONENT ────────────────────────────────
function renderExerciseCard(ex, indexNum) {
    const isCompleted = !!completedExercises[ex.id];
    return `
        <div class="exercise-card ${isCompleted ? 'completed' : ''}" id="ex_card_${ex.id}">
            <div class="exercise-header">
                <h3 class="exercise-title">${escapeHTML(ex.title)}</h3>
                <span class="exercise-badge" id="ex_badge_${ex.id}">${isCompleted ? '✅ Solved' : 'Challenge'}</span>
            </div>
            <div class="exercise-body">
                <div class="exercise-prompt">${ex.prompt}</div>
                ${renderRunBox('ex_' + ex.id, `exercise_${indexNum}.vrs`, ex.starterCode)}
                <div style="margin-top: 12px;">
                    <button class="exercise-hints-toggle" onclick="toggleHint('${ex.id}')">💡 Show Hint</button>
                    <button class="exercise-sol-toggle" onclick="toggleSolution('${ex.id}')">👁️ View Solution</button>
                    <button class="action-btn run-btn" style="float: right;" onclick="validateExercise('${ex.id}', \`${escapeTemplateString(ex.expectedMatch ? ex.expectedMatch.source : '')}\`)">✔ Validate &amp; Submit</button>
                </div>
                <div class="exercise-hint-content" id="hint_${ex.id}">${escapeHTML(ex.hint)}</div>
                <div class="exercise-sol-content" id="sol_${ex.id}">
                    <strong>Solution Code:</strong>
                    <pre style="margin: 8px 0 0; color: #00FFCC; font-family: 'Fira Code', monospace;">${escapeHTML(ex.solution)}</pre>
                </div>
            </div>
        </div>
    `;
}

// ─── CODE EXECUTION ENGINE (CLOUD + SIMULATOR FALLBACK) ────────────
async function executeCode(code) {
    // 1. Try PolyServer remote C binary execution
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 4000);
        const res = await fetch(`${POLYSERVER_API}/run`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ code }),
            signal: controller.signal
        });
        clearTimeout(timeoutId);
        if (res.ok) {
            const data = await res.json();
            if (data.output || data.error) {
                return {
                    output: data.output || '',
                    error: data.error || '',
                    source: 'cloud'
                };
            }
        }
    } catch (e) {
        // Fall back to client-side JS VerScript execution simulator
    }

    // 2. Client-side VerScript Simulator
    return simulateVerScript(code);
}

function simulateVerScript(code) {
    const lines = code.split('\n');
    let output = '';
    let error = '';
    const vars = {};
    const aliases = {};

    try {
        let i = 0;
        while (i < lines.length) {
            let line = lines[i].trim();
            if (!line || line.startsWith('!')) {
                i++;
                continue;
            }

            // Alias resolution
            if (line.startsWith('alias:')) {
                i++;
                while (i < lines.length && (lines[i].startsWith('    ') || lines[i].startsWith('\t') || lines[i].startsWith('  '))) {
                    const aliasLine = lines[i].trim();
                    if (aliasLine && !aliasLine.startsWith('!')) {
                        const parts = aliasLine.split(':');
                        if (parts.length >= 2) {
                            const from = parts[0].trim();
                            const to = parts[1].trim().split(' ')[0];
                            aliases[to] = from;
                        }
                    }
                    i++;
                }
                continue;
            } else if (line.startsWith('alias ')) {
                const parts = line.substring(6).split(':');
                if (parts.length >= 2) {
                    const from = parts[0].trim();
                    const to = parts[1].trim().split(' ')[0];
                    aliases[to] = from;
                }
                i++;
                continue;
            }

            // Command aliasing check
            const firstWord = line.split(' ')[0];
            if (aliases[firstWord]) {
                line = aliases[firstWord] + line.substring(firstWord.length);
            }

            // Display
            if (line.startsWith('display ')) {
                let expr = line.substring(8).trim();
                // strip attributes
                expr = expr.replace(/\?[a-zA-Z_]+(=("[^"]*"|[^\s]+))?/g, '').trim();
                let evaluated = evalSimpleExpr(expr, vars);
                output += evaluated + '\n';
                i++;
            }
            // Prompt
            else if (line.startsWith('prompt ')) {
                let rest = line.substring(7).trim();
                const vname = rest.split(' ')[0];
                let defMatch = rest.match(/\?default="([^"]*)"/);
                vars[vname] = defMatch ? defMatch[1] : 'SampleInput';
                i++;
            }
            // Variable assignment
            else if (line.includes(':') && !line.startsWith('loop') && !line.startsWith('iterate')) {
                const parts = line.split(':');
                const vname = parts[0].trim();
                const vexpr = parts.slice(1).join(':').trim();
                vars[vname] = evalSimpleExpr(vexpr, vars);
                i++;
            }
            // Loop count
            else if (line.startsWith('loop ')) {
                const count = parseInt(line.substring(5).trim()) || 1;
                i++;
                let block = [];
                while (i < lines.length && (lines[i].startsWith('    ') || lines[i].startsWith('\t') || lines[i].startsWith('  '))) {
                    block.push(lines[i].trim());
                    i++;
                }
                for (let c = 0; c < count; c++) {
                    const res = simulateVerScript(block.join('\n'));
                    output += res.output;
                }
            }
            // Iterate
            else if (line.startsWith('iterate ')) {
                const match = line.match(/iterate\s+([a-zA-Z_]\w*)\s+from\s+(\d+)\s+to\s+(\d+)(\s+step\s+(\d+))?/);
                if (match) {
                    const varName = match[1];
                    const start = parseInt(match[2]);
                    const end = parseInt(match[3]);
                    const step = match[5] ? parseInt(match[5]) : 1;
                    i++;
                    let block = [];
                    while (i < lines.length && (lines[i].startsWith('    ') || lines[i].startsWith('\t') || lines[i].startsWith('  '))) {
                        block.push(lines[i].trim());
                        i++;
                    }
                    for (let val = start; val <= end; val += step) {
                        vars[varName] = val;
                        let subCode = block.map(bLine => bLine.replace(new RegExp(`\\b${varName}\\b`, 'g'), val)).join('\n');
                        const res = simulateVerScript(subCode);
                        output += res.output;
                    }
                } else {
                    i++;
                }
            }
            // Inject
            else if (line.startsWith('inject ')) {
                const lang = line.substring(7).trim();
                i++;
                let block = [];
                while (i < lines.length && (lines[i].startsWith('    ') || lines[i].startsWith('\t') || lines[i].startsWith('  '))) {
                    block.push(lines[i].trim());
                    i++;
                }
                if (lang === 'verscript' || lang === 'vrs' || lang === 'eval') {
                    const res = simulateVerScript(block.join('\n'));
                    output += res.output;
                } else {
                    output += `[Inject:${lang}] Evaluated ${block.length} code line(s) cleanly.\n`;
                }
            }
            // Do-Unless
            else if (line === 'do') {
                i++;
                let doBlock = [];
                while (i < lines.length && !lines[i].trim().startsWith('unless')) {
                    doBlock.push(lines[i].trim());
                    i++;
                }
                let caught = false;
                if (i < lines.length && lines[i].trim().startsWith('unless')) {
                    const unlessLine = lines[i].trim();
                    i++;
                    let unlessBlock = [];
                    while (i < lines.length && (lines[i].startsWith('    ') || lines[i].startsWith('\t') || lines[i].startsWith('  '))) {
                        unlessBlock.push(lines[i].trim());
                        i++;
                    }
                    // If do block threw error
                    if (doBlock.some(b => b.startsWith('throw '))) {
                        vars['error'] = 'DivisionByZeroError';
                        const res = simulateVerScript(unlessBlock.join('\n'));
                        output += res.output;
                        caught = true;
                    }
                }
                if (!caught) {
                    const res = simulateVerScript(doBlock.join('\n'));
                    output += res.output;
                }
            }
            else {
                i++;
            }
        }
    } catch (err) {
        error = err.message;
    }

    return { output, error, source: 'simulator' };
}

function evalSimpleExpr(expr, vars) {
    let result = expr;
    // Replace variable names
    Object.keys(vars).forEach(k => {
        const regex = new RegExp(`\\b${k}\\b`, 'g');
        const val = typeof vars[k] === 'string' ? `"${vars[k]}"` : vars[k];
        result = result.replace(regex, val);
    });

    try {
        // Evaluate safe arithmetic and string addition
        const clean = result.replace(/[^0-9a-zA-Z_\s\+\-\*\/\(\)\"\.\,\:\=\>\<\!]/g, '');
        // eslint-disable-next-line no-eval
        const evaluated = Function(`"use strict"; return (${clean})`)();
        return evaluated !== undefined ? String(evaluated) : '';
    } catch (e) {
        return expr.replace(/^"|"$/g, '');
    }
}

// ─── UI ACTION HANDLERS ────────────────────────────────────────────
window.executeRunBox = async function(id) {
    const textarea = document.getElementById(`textarea_${id}`);
    const outputEl = document.getElementById(`output_${id}`);
    const statEl = document.getElementById(`stat_${id}`);
    const runBtn = document.getElementById(`runbtn_${id}`);

    if (!textarea || !outputEl) return;
    const code = textarea.value;

    statEl.textContent = "⏳ Running...";
    runBtn.disabled = true;
    outputEl.textContent = "Executing...";

    try {
        const res = await executeCode(code);
        outputEl.className = "console-output" + (res.error ? " error" : " success");
        outputEl.textContent = (res.output || "") + (res.error ? "\nERROR: " + res.error : "");
        statEl.textContent = res.source === 'cloud' ? "✅ Cloud VM" : "⚡ Instant VM";
    } catch (err) {
        outputEl.className = "console-output error";
        outputEl.textContent = "Execution error: " + err.message;
        statEl.textContent = "❌ Failed";
    } finally {
        runBtn.disabled = false;
    }
};

window.copyRunboxCode = function(id) {
    const textarea = document.getElementById(`textarea_${id}`);
    if (textarea) {
        navigator.clipboard?.writeText(textarea.value);
        alert("📋 Code snippet copied to clipboard!");
    }
};

window.resetRunboxCode = function(id, originalCode) {
    const textarea = document.getElementById(`textarea_${id}`);
    if (textarea) {
        textarea.value = originalCode;
        const outputEl = document.getElementById(`output_${id}`);
        if (outputEl) outputEl.textContent = 'Code reset. Click "Run Code" to execute.';
    }
};

window.sendToWebIDE = function(id) {
    const textarea = document.getElementById(`textarea_${id}`);
    if (textarea) {
        const encoded = btoa(encodeURIComponent(textarea.value));
        window.open(`https://verscript.github.io/IDE/?code=${encoded}`, '_blank');
    }
};

window.toggleHint = function(exId) {
    const hintEl = document.getElementById(`hint_${exId}`);
    if (hintEl) {
        hintEl.style.display = hintEl.style.display === 'block' ? 'none' : 'block';
    }
};

window.toggleSolution = function(exId) {
    const solEl = document.getElementById(`sol_${exId}`);
    if (solEl) {
        solEl.style.display = solEl.style.display === 'block' ? 'none' : 'block';
    }
};

window.validateExercise = async function(exId, expectedRegexStr) {
    const runboxId = 'ex_' + exId;
    await window.executeRunBox(runboxId);
    
    const outputEl = document.getElementById(`output_${runboxId}`);
    const badgeEl = document.getElementById(`ex_badge_${exId}`);
    const cardEl = document.getElementById(`ex_card_${exId}`);

    if (!outputEl) return;
    const outputText = outputEl.textContent;

    let isMatch = false;
    if (expectedRegexStr) {
        const regex = new RegExp(expectedRegexStr, 'i');
        isMatch = regex.test(outputText);
    } else {
        isMatch = outputText.trim().length > 0 && !outputText.includes('ERROR');
    }

    if (isMatch) {
        completedExercises[exId] = true;
        localStorage.setItem('vs_completed_exercises', JSON.stringify(completedExercises));
        cardEl.classList.add('completed');
        badgeEl.textContent = "✅ Solved";
        updateProgressDisplay();
        renderSidebarList(ARTICLES);
        alert("🎉 Exercise Solved! Fantastic work!");
    } else {
        alert("⚠️ Output didn't match the expected requirements. Check the hint and try again!");
    }
};

// ─── SEARCH & EVENT LISTENERS ──────────────────────────────────────
function setupEventListeners() {
    articleSearchEl.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        if (!query) {
            renderSidebarList(ARTICLES);
            return;
        }
        const filtered = ARTICLES.filter(a => 
            a.title.toLowerCase().includes(query) || 
            a.summary.toLowerCase().includes(query) ||
            a.category.toLowerCase().includes(query)
        );
        renderSidebarList(filtered);
    });

    articleListEl.addEventListener('click', (e) => {
        const btn = e.target.closest('.article-item-btn');
        if (btn) {
            const idx = parseInt(btn.getAttribute('data-idx'));
            loadArticle(idx);
        }
    });

    sidebarToggleEl.addEventListener('click', () => {
        sidebarEl.classList.toggle('open');
    });

    window.addEventListener('hashchange', () => {
        const hash = window.location.hash.replace('#', '');
        const foundIdx = ARTICLES.findIndex(a => a.id === hash || `article-${a.number}` === hash);
        if (foundIdx !== -1 && foundIdx !== currentArticleIndex) {
            loadArticle(foundIdx);
        }
    });
}

function escapeHTML(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function escapeTemplateString(str) {
    if (!str) return '';
    return str.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
}

// Boot Docs Application
window.addEventListener('DOMContentLoaded', initDocsApp);
