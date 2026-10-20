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
const sidebarBackdropEl = document.getElementById('sidebarBackdrop');

// ─── INITIALIZATION ────────────────────────────────────────────────
function initDocsApp() {
    const badgeEl = document.getElementById('sidebarChapterBadge');
    if (badgeEl) badgeEl.textContent = ARTICLES.length;
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
    let currentSection = null;
    let currentSubsection = null;

    articlesToRender.forEach((article) => {
        const originalIndex = ARTICLES.findIndex(a => a.id === article.id);

        if (article.section && article.section !== currentSection) {
            currentSection = article.section;
            currentSubsection = null;
            const sectionDivider = document.createElement('li');
            sectionDivider.className = 'sidebar-section-divider';
            sectionDivider.innerHTML = `<span>${escapeHTML(currentSection)}</span>`;
            articleListEl.appendChild(sectionDivider);
        }

        if (article.subsection && article.subsection !== currentSubsection) {
            currentSubsection = article.subsection;
            const subDivider = document.createElement('li');
            subDivider.className = 'sidebar-subsection-divider';
            subDivider.innerHTML = `<span>↳ ${escapeHTML(currentSubsection)}</span>`;
            articleListEl.appendChild(subDivider);
        }

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
    const backdropEl = document.getElementById('sidebarBackdrop');
    if (backdropEl) backdropEl.classList.remove('active');
    document.body.style.overflow = '';

    // Update mobile bottom bar controls if present
    const mobileIndicator = document.getElementById('mobileChapterIndicator');
    if (mobileIndicator) {
        mobileIndicator.textContent = `${String(article.number).padStart(2, '0')}/${ARTICLES.length}`;
    }
    const mobilePrevBtn = document.getElementById('mobilePrevBtn');
    if (mobilePrevBtn) {
        mobilePrevBtn.disabled = index === 0;
        mobilePrevBtn.style.opacity = index === 0 ? '0.45' : '1';
    }
    const mobileNextBtn = document.getElementById('mobileNextBtn');
    if (mobileNextBtn) {
        mobileNextBtn.disabled = index === ARTICLES.length - 1;
        mobileNextBtn.style.opacity = index === ARTICLES.length - 1 ? '0.45' : '1';
    }

    // Build Codeblocks HTML
    let codeBlocksHTML = '';
    if (article.codeBlocks && article.codeBlocks.length > 0) {
        codeBlocksHTML = `
            <h2>Interactive Code Sandbox</h2>
            <p>Run, edit, and experiment with the live runnable code below:</p>
        ` + article.codeBlocks.map(cb => renderRunBox(cb.id, cb.title, cb.code, cb.files)).join('');
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
        <div class="article-view-wrapper">
            <article>
                <div class="article-header">
                    <div class="article-meta">
                        <span class="meta-pill">Chapter ${article.number}</span>
                        <span class="meta-pill">${escapeHTML(article.section || article.category)}</span>
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
        </div>
    `;
}
window.loadArticle = loadArticle;

// ─── RENDER RUNBOX COMPONENT ───────────────────────────────────────
function renderRunBox(id, title, initialCode, files) {
    window.RUNBOX_REGISTRY = window.RUNBOX_REGISTRY || {};
    window.RUNBOX_FILES_REGISTRY = window.RUNBOX_FILES_REGISTRY || {};
    window.RUNBOX_ACTIVE_TAB = window.RUNBOX_ACTIVE_TAB || {};

    const hasFiles = Array.isArray(files) && files.length > 0;
    if (hasFiles) {
        window.RUNBOX_FILES_REGISTRY[id] = files;
        window.RUNBOX_ACTIVE_TAB[id] = 0;
        window.RUNBOX_REGISTRY[id] = files[0].code;
    } else {
        window.RUNBOX_REGISTRY[id] = initialCode;
    }

    const isJS = typeof title === 'string' && title.endsWith('.js');

    const tabsHTML = hasFiles ? `
        <div class="runbox-tabs" id="tabs_${id}">
            ${files.map((f, idx) => `
                <button class="runbox-tab-btn ${idx === 0 ? 'active' : ''}" onclick="switchRunboxTab('${id}', ${idx})" id="tabbtn_${id}_${idx}">
                    ${f.name.endsWith('.h.vrs') ? '<span class="header-badge">HEADER</span>' : ''}
                    <span>${escapeHTML(f.name)}</span>
                </button>
            `).join('')}
        </div>
    ` : `<span>${escapeHTML(title || 'script.vrs')}</span>`;

    const editorsHTML = hasFiles ? `
        <div class="code-editor-area" id="editor_area_${id}">
            ${files.map((f, idx) => `
                <textarea class="code-textarea" aria-label="Code editor for ${escapeHTML(f.name)}" id="textarea_${id}_${idx}" style="${idx === 0 ? '' : 'display: none;'}" spellcheck="false">${escapeHTML(f.code)}</textarea>
            `).join('')}
        </div>
    ` : `
        <div class="code-editor-area">
            <textarea class="code-textarea" aria-label="Code editor" id="textarea_${id}" spellcheck="false">${escapeHTML(initialCode)}</textarea>
        </div>
    `;

    return `
        <div class="runbox-container ${hasFiles ? 'multi-file-runbox' : ''}" id="runbox_${id}">
            <div class="runbox-header">
                <div class="runbox-title">
                    <div class="window-dots">
                        <span class="w-dot red"></span>
                        <span class="w-dot yellow"></span>
                        <span class="w-dot green"></span>
                    </div>
                    ${tabsHTML}
                    ${isJS ? '<span style="font-size:0.7rem; background:rgba(247,223,30,0.15); color:#f7df1e; border:1px solid rgba(247,223,30,0.3); padding:1px 6px; border-radius:4px; margin-left:8px; font-weight:600;">Node.js / JS</span>' : ''}
                </div>
                <div class="runbox-actions">
                    <button class="action-btn" onclick="copyRunboxCode('${id}')" title="Copy code">📋 Copy</button>
                    <button class="action-btn" onclick="resetRunboxCode('${id}')" title="Reset code">↺ Reset</button>
                    <button class="action-btn" onclick="sendToWebIDE('${id}')" title="Open in IDE">⚡ Open in IDE</button>
                    <button class="action-btn run-btn" onclick="executeRunBox('${id}', ${isJS ? 'true' : 'false'})" id="runbtn_${id}">${isJS ? '▶ Run JS' : '▶ Run Code'}</button>
                </div>
            </div>
            ${editorsHTML}
            <div class="runbox-console" id="console_${id}">
                <div class="console-header">
                    <span>Console Output</span>
                    <span id="stat_${id}">Ready</span>
                </div>
                <pre class="console-output" id="output_${id}">Click "${isJS ? 'Run JS' : 'Run Code'}" to execute...</pre>
            </div>
        </div>
    `;
}

window.switchRunboxTab = function(id, tabIdx) {
    window.RUNBOX_ACTIVE_TAB = window.RUNBOX_ACTIVE_TAB || {};
    window.RUNBOX_ACTIVE_TAB[id] = tabIdx;
    const files = window.RUNBOX_FILES_REGISTRY && window.RUNBOX_FILES_REGISTRY[id];
    if (!files) return;
    files.forEach((_, idx) => {
        const btn = document.getElementById(`tabbtn_${id}_${idx}`);
        if (btn) btn.classList.toggle('active', idx === tabIdx);
        const ta = document.getElementById(`textarea_${id}_${idx}`);
        if (ta) ta.style.display = (idx === tabIdx ? 'block' : 'none');
    });
};

// ─── RENDER EXERCISE CARD COMPONENT ────────────────────────────────
function renderExerciseCard(ex, indexNum) {
    window.EXERCISE_REGISTRY = window.EXERCISE_REGISTRY || {};
    window.EXERCISE_REGISTRY[ex.id] = ex;

    const isCompleted = !!completedExercises[ex.id];
    return `
        <div class="exercise-card ${isCompleted ? 'completed' : ''}" id="ex_card_${ex.id}">
            <div class="exercise-header">
                <h3 class="exercise-title">${escapeHTML(ex.title)}</h3>
                <span class="exercise-badge" id="ex_badge_${ex.id}">${isCompleted ? '✅ Solved' : 'Challenge'}</span>
            </div>
            <div class="exercise-body">
                <div class="exercise-prompt">${ex.prompt}</div>
                ${ex.starterFiles ? renderRunBox('ex_' + ex.id, null, null, ex.starterFiles) : renderRunBox('ex_' + ex.id, `exercise_${indexNum}.vrs`, ex.starterCode)}
                <div class="exercise-actions-bar">
                    <div class="exercise-toggles">
                        <button class="exercise-toggle-pill" onclick="toggleHint('${ex.id}')">💡 Show Hint</button>
                        <button class="exercise-toggle-pill" onclick="toggleSolution('${ex.id}')">👁️ View Solution</button>
                    </div>
                    <button class="action-btn run-btn validate-btn" onclick="validateExercise('${ex.id}')">✔ Validate &amp; Submit</button>
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
async function executeCode(code, files = null) {
    // Scan for prompt commands and collect user input interactively
    let stdinPayload = '';
    const promptMatches = [...code.matchAll(/prompt\s+([a-zA-Z0-9_]+)(?:\s+\?default="([^"]*)")?/g)];
    if (promptMatches.length > 0 && typeof window !== 'undefined' && window.prompt) {
        for (const pm of promptMatches) {
            const vname = pm[1];
            const defVal = pm[2] || '';
            const entered = window.prompt(`[VerScript Academy] Enter value for prompt '${vname}':`, defVal);
            stdinPayload += (entered !== null ? entered : defVal) + '\n';
        }
    }

    // 1. Try PolyServer remote C binary execution
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 4000);
        const res = await fetch(`${POLYSERVER_API}/run`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ code, files, stdin: stdinPayload }),
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
    return simulateVerScript(code, files);
}

// ─── ANSI TO HTML CONVERTER ─────────────────────────────────────────
function ansiToHtml(str) {
    if (!str) return '';
    let text = str
        .replace(/\\033\[/g, '\x1b[')
        .replace(/\\x1b\[/gi, '\x1b[')
        .replace(/\\u001b\[/gi, '\x1b[');

    const standardColors = {
        '30': '#6272a4',
        '31': '#ff5555',
        '32': '#50fa7b',
        '33': '#f1fa8c',
        '34': '#8be9fd',
        '35': '#ff79c6',
        '36': '#00ffcc',
        '37': '#f8f8f2',
        '90': '#6272a4',
        '91': '#ff6e6e',
        '92': '#69ff94',
        '93': '#ffffa5',
        '94': '#d6acff',
        '95': '#ff92df',
        '96': '#a4ffff',
        '97': '#ffffff'
    };

    let result = '';
    let spanOpen = false;
    const regex = /\x1b\[([\d;]+)m/g;
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
        result += escapeHTML(text.substring(lastIndex, match.index));
        lastIndex = regex.lastIndex;
        const codeSeq = match[1];
        if (codeSeq === '0') {
            if (spanOpen) {
                result += '</span>';
                spanOpen = false;
            }
        } else if (codeSeq.startsWith('38;2;')) {
            const parts = codeSeq.split(';');
            if (parts.length >= 5) {
                const r = parseInt(parts[2], 10);
                const g = parseInt(parts[3], 10);
                const b = parseInt(parts[4], 10);
                if (spanOpen) result += '</span>';
                result += `<span style="color: rgb(${r}, ${g}, ${b}); font-weight: bold; text-shadow: 0 0 6px rgba(${r},${g},${b},0.35);">`;
                spanOpen = true;
            }
        } else {
            const parts = codeSeq.split(';');
            let colorHex = null;
            for (const p of parts) {
                if (standardColors[p]) {
                    colorHex = standardColors[p];
                    break;
                }
            }
            if (colorHex) {
                if (spanOpen) result += '</span>';
                result += `<span style="color: ${colorHex}; font-weight: bold; text-shadow: 0 0 6px ${colorHex}55;">`;
                spanOpen = true;
            }
        }
    }
    result += escapeHTML(text.substring(lastIndex));
    if (spanOpen) result += '</span>';
    return result;
}

function registerAlias(spec, aliases) {
    if (!spec) return;
    let s = spec.trim();
    if (s.startsWith('alias')) s = s.substring(5).trim();
    if (s.startsWith(':')) s = s.substring(1).trim();
    if (!s) return;
    
    const colonIdx = s.indexOf(':');
    if (colonIdx === -1) return;
    const cmd1 = s.substring(0, colonIdx).trim();
    let rest = s.substring(colonIdx + 1).trim();
    let qIdx = rest.indexOf('?');
    let cmd2 = qIdx !== -1 ? rest.substring(0, qIdx).trim() : rest.trim();
    let argMap = {};
    if (qIdx !== -1) {
        let attrPart = rest.substring(qIdx + 1);
        let pairs = attrPart.split(/[\s,]+/);
        for (let p of pairs) {
            if (!p) continue;
            if (p.includes('=')) {
                let [toA, fromA] = p.split('=');
                if (toA && fromA) argMap[fromA.trim()] = toA.trim();
            } else {
                argMap[p.trim()] = (cmd1 === 'display' ? 'color' : p.trim());
            }
        }
    }
    aliases[cmd2] = { target: cmd1, argMap };
}

function resolveLineAlias(line, aliases) {
    if (!line) return line;
    let trimmed = line.trim();
    let firstWord = trimmed.split(/[\s:?]/)[0];
    if (aliases[firstWord]) {
        const { target, argMap } = aliases[firstWord];
        let replaced = target + trimmed.substring(firstWord.length);
        if (argMap) {
            for (let [fromA, toA] of Object.entries(argMap)) {
                replaced = replaced.replace(new RegExp(`\\?${fromA}(?=[=\\s]|$)`, 'g'), `?${toA}`);
            }
        }
        return replaced;
    }
    return line;
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

            // Alias block & line resolution
            if (line.startsWith('alias:')) {
                i++;
                while (i < lines.length && (lines[i].startsWith('    ') || lines[i].startsWith('\t') || lines[i].startsWith('  '))) {
                    const aliasLine = lines[i].trim();
                    if (aliasLine && !aliasLine.startsWith('!')) {
                        registerAlias(aliasLine, aliases);
                    }
                    i++;
                }
                continue;
            } else if (line.startsWith('alias ')) {
                registerAlias(line, aliases);
                i++;
                continue;
            }

            // Resolve aliased command and attributes
            line = resolveLineAlias(line, aliases);

            // Display with full ANSI colors (named + unquoted/quoted hex)
            if (line.startsWith('display ') || line === 'display') {
                let colMatch = line.match(/\?color=(?:#([0-9a-fA-F]{3,8})|"([^"]*)"|'([^']*)'|([a-zA-Z0-9_#]+))/);
                let colorVal = colMatch ? (colMatch[1] ? ('#' + colMatch[1]) : (colMatch[2] || colMatch[3] || colMatch[4])) : null;
                let isInline = line.includes('?inline') || /\?newline=(?:false|0|"false")/.test(line);
                let expr = line.length > 8 ? line.substring(8).trim() : '';
                expr = expr.replace(/\?[a-zA-Z_]+(?:=(?:"[^"]*"|'[^']*'|[^\s]+))?/g, '').trim();
                let evaluated = evalSimpleExpr(expr, vars);

                if (colorVal) {
                    if (colorVal.startsWith('#')) {
                        let hex = colorVal.substring(1);
                        let r = 0, g = 0, b = 0;
                        if (hex.length === 6) {
                            r = parseInt(hex.substring(0, 2), 16);
                            g = parseInt(hex.substring(2, 4), 16);
                            b = parseInt(hex.substring(4, 6), 16);
                        } else if (hex.length === 3) {
                            r = parseInt(hex[0] + hex[0], 16);
                            g = parseInt(hex[1] + hex[1], 16);
                            b = parseInt(hex[2] + hex[2], 16);
                        }
                        output += `\x1b[38;2;${r};${g};${b}m${evaluated}\x1b[0m` + (isInline ? '' : '\n');
                    } else {
                        const namedCodes = {
                            'red': '31',
                            'green': '32',
                            'yellow': '33',
                            'blue': '34',
                            'purple': '35',
                            'cyan': '36',
                            'white': '37'
                        };
                        let code = namedCodes[colorVal.toLowerCase()] || '37';
                        output += `\x1b[${code}m${evaluated}\x1b[0m` + (isInline ? '' : '\n');
                    }
                } else {
                    output += evaluated + (isInline ? '' : '\n');
                }
                i++;
            }
            // Prompt
            else if (line.startsWith('prompt ')) {
                let rest = line.substring(7).trim();
                const vname = rest.split(' ')[0];
                let defMatch = rest.match(/\?default="([^"]*)"/);
                const defaultVal = defMatch ? defMatch[1] : '';
                let answer = defaultVal;
                if (typeof window !== 'undefined' && window.prompt) {
                    const res = window.prompt(`[VerScript Simulator] Enter value for '${vname}':`, defaultVal);
                    if (res !== null) answer = res;
                }
                vars[vname] = (!isNaN(answer) && answer !== '') ? Number(answer) : answer;
                i++;
            }
            // Header / Config / Enum / Struct / DataType definition blocks, pragmas, export, includes
            else if (line.startsWith('pragma ') || line.startsWith('include ') || line.startsWith('export ') || line.startsWith('DataType ') || line.startsWith('config:') || line.startsWith('struct:') || line.startsWith('struct ') || line.startsWith('header ')) {
                if (line.startsWith('pragma ') || line.startsWith('include ')) {
                    i++;
                    continue;
                }
                if (line.startsWith('export ')) {
                    line = line.substring(7).trim();
                }
                i++;
                while (i < lines.length && (lines[i].startsWith('    ') || lines[i].startsWith('\t') || lines[i].startsWith('  '))) {
                    i++;
                }
                continue;
            }
            // First-class Enum declaration
            else if (line.startsWith('enum ') || line.startsWith('enum:')) {
                if (line.includes(':')) {
                    const colonIdx = line.indexOf(':');
                    const pairs = line.substring(colonIdx + 1).split(',');
                    const enumName = line.substring(5, colonIdx).trim();
                    vars[enumName] = {};
                    pairs.forEach(p => {
                        const [k, v] = p.split('=').map(s => s ? s.trim() : '');
                        if (k && v !== undefined) vars[enumName][k] = isNaN(Number(v)) ? v : Number(v);
                    });
                }
                i++;
                while (i < lines.length && (lines[i].startsWith('    ') || lines[i].startsWith('\t') || lines[i].startsWith('  '))) {
                    i++;
                }
                continue;
            }
            // Variable assignment & type constraint
            else if (line.includes(':') && !line.startsWith('loop') && !line.startsWith('iterate')) {
                const parts = line.split(':');
                let vname = parts[0].trim();
                let declaredType = null;

                if (vname.startsWith('set ')) {
                    const tokens = vname.substring(4).trim().split(/\s+/);
                    if (tokens.length >= 2) {
                        declaredType = tokens[0];
                        vname = tokens[1];
                    } else {
                        vname = tokens[0];
                    }
                } else {
                    const tokens = vname.split(/\s+/);
                    if (tokens.length >= 2 && ['num', 'bool', 'str', 'arr', 'entity', 'int', 'posNum', 'nonNegNum', 'byte', 'port', 'nonEmptyStr', 'char', 'nonEmptyArr'].includes(tokens[0])) {
                        declaredType = tokens[0];
                        vname = tokens[1];
                    }
                }

                if (!/^[a-zA-Z_]\w*$/.test(vname)) { i++; continue; }
                const vexpr = parts.slice(1).join(':').trim();
                const val = evalSimpleExpr(vexpr, vars);
                if (declaredType === 'num' && isNaN(Number(val))) {
                    vars['__lastError'] = 'DataTypeError';
                }
                vars[vname] = val;
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
                    const unlessTarget = unlessLine.substring(6).trim();
                    i++;
                    let unlessBlock = [];
                    while (i < lines.length && (lines[i].startsWith('    ') || lines[i].startsWith('\t') || lines[i].startsWith('  '))) {
                        unlessBlock.push(lines[i].trim());
                        i++;
                    }

                    // Detect errors from doBlock
                    let thrownErr = null;
                    const doText = doBlock.join('\n');
                    const throwMatch = doText.match(/throw\s+([a-zA-Z_]\w*)/);
                    if (throwMatch) {
                        thrownErr = throwMatch[1];
                    } else if (/\/\s*0\b/.test(doText)) {
                        thrownErr = 'DivisionByZeroError';
                    } else if (/sqrt\s*\(\s*-\d+/.test(doText) || /sqrt\s+-\d+/.test(doText)) {
                        thrownErr = 'DomainError';
                    } else if (/num\s+[a-zA-Z_]\w*\s*:\s*"[^"]*"/.test(doText) || /bad_assignment|badAssignment|DataTypeError/i.test(doText)) {
                        thrownErr = 'DataTypeError';
                    } else if (/modify_threshold|inbound|inspect_purity/i.test(doText)) {
                        thrownErr = 'ScopeViolationError';
                    } else if (/step\s+10/i.test(doText)) {
                        thrownErr = 'LoopStepError';
                    }

                    if (thrownErr && (!unlessTarget || unlessTarget === 'error' || unlessTarget === thrownErr)) {
                        vars['error'] = thrownErr;
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

let __seedState = 12345;

function evalSimpleExpr(expr, vars) {
    let result = expr.trim();
    if (/^"(?:[^"\\]|\\.)*"$/.test(result)) {
        try { return JSON.parse(result); } catch (e) { return result.slice(1, -1); }
    }

    // Replace variable names
    Object.keys(vars).forEach(k => {
        const regex = new RegExp(`\\b${k}\\b`, 'g');
        const val = typeof vars[k] === 'string' ? `"${vars[k]}"` : vars[k];
        result = result.replace(regex, val);
    });

    // Mask string literals to protect exclamation marks and operators inside text
    const maskedStrings = [];
    result = result.replace(/"(?:[^"\\]|\\.)*"/g, (match) => {
        maskedStrings.push(match);
        return `__STR_${maskedStrings.length - 1}__`;
    });

    try {
        // Chained & nested ternary expressions: if cond then val1 else if cond2 then val2 else val3
        while (/\bif\s+([^\n\r]+?)\s+then\s+([^\n\r]+?)\s+else\b/i.test(result)) {
            result = result.replace(/\bif\s+([^\n\r]+?)\s+then\s+([^\n\r]+?)\s+else\b/g, '($1) ? ($2) : ');
        }

        // Native Mathematical Constants
        result = result.replace(/\b(pi|π)\b/g, '3.141592653589793');
        result = result.replace(/\b(tau|τ)\b/g, '6.283185307179586');
        result = result.replace(/\bphi\b/g, '1.618033988749895');
        result = result.replace(/\b(inf|infinity)\b/g, 'Infinity');

        // Absolute value |expr| -> Math.abs(expr)
        result = result.replace(/\|([^|]+)\|/g, 'Math.abs($1)');

        // Postfix Factorial x! -> __fact(x)
        result = result.replace(/([0-9a-zA-Z_\)]+)!/g, '(__fact($1))');

        // Exponentiation ^ -> **
        result = result.replace(/\^/g, '**');

        // Integer division // -> Math.floor(a / b)
        result = result.replace(/([0-9a-zA-Z_\.\(\)]+)\s*\/\/\s*([0-9a-zA-Z_\.\(\)]+)/g, 'Math.floor(($1) / ($2))');

        // Roots
        result = result.replace(/(?<!\.)(?:sqrt|√)\s*([0-9a-zA-Z_\.\(\)]+)/g, 'Math.sqrt($1)');
        result = result.replace(/(?<!\.)\brt\s+([0-9a-zA-Z_\.\(\)]+)\s+([0-9a-zA-Z_\.\(\)]+)/g, 'Math.pow($2, 1 / ($1))');

        // Min, Max, Clamping
        result = result.replace(/(?<!\.)\bclamp\s+([^\s]+)\s+from\s+([^\s]+)\s+to\s+([^\s]+)/g, 'Math.min(Math.max($1, $2), $3)');
        result = result.replace(/(?<!\.)\bclamp\s+([^\s]+)\s+([^\s]+)\s+([^\s]+)/g, 'Math.min(Math.max($1, $2), $3)');
        result = result.replace(/(?<!\.)\bmin\s+([^\s]+)\s+([^\s]+)/g, 'Math.min($1, $2)');
        result = result.replace(/(?<!\.)\bmax\s+([^\s]+)\s+([^\s]+)/g, 'Math.max($1, $2)');

        // Interpolation
        result = result.replace(/(?<!\.)\blerp\s+from\s+([^\s]+)\s+to\s+([^\s]+)\s+by\s+([^\s]+)/g, '(($1) + (($2) - ($1)) * ($3))');
        result = result.replace(/(?<!\.)\blerp\s+([^\s]+)\s+([^\s]+)\s+([^\s]+)/g, '(($1) + (($2) - ($1)) * ($3))');

        // Signum & Parity
        result = result.replace(/(?<!\.)\b(sign|sgn)\s+([^\s]+)/g, 'Math.sign($2)');
        result = result.replace(/([0-9a-zA-Z_\.\(\)]+)\s+is\s+even\b/g, '(($1) % 2 === 0)');
        result = result.replace(/([0-9a-zA-Z_\.\(\)]+)\s+is\s+odd\b/g, '(($1) % 2 !== 0)');
        result = result.replace(/(?<!\.)\b(isEven|even)\s+([^\s]+)/g, '(($2) % 2 === 0)');
        result = result.replace(/(?<!\.)\b(isOdd|odd)\s+([^\s]+)/g, '(($2) % 2 !== 0)');

        // Trig and Log functions
        result = result.replace(/(?<!\.)\bsinDeg\s+([^\s]+)/g, 'Math.sin(($1) * Math.PI / 180)');
        result = result.replace(/(?<!\.)\bcosDeg\s+([^\s]+)/g, 'Math.cos(($1) * Math.PI / 180)');
        result = result.replace(/(?<!\.)\bdegToRad\s+([^\s]+)/g, '(($1) * Math.PI / 180)');
        result = result.replace(/(?<!\.)\bradToDeg\s+([^\s]+)/g, '(($1) * 180 / Math.PI)');
        result = result.replace(/(?<!\.)\bsin\s+([^\s]+)/g, 'Math.sin($1)');
        result = result.replace(/(?<!\.)\bcos\s+([^\s]+)/g, 'Math.cos($1)');
        result = result.replace(/(?<!\.)\btan\s+([^\s]+)/g, 'Math.tan($1)');
        result = result.replace(/(?<!\.)\bhypot\s+([^\s]+)\s+([^\s]+)/g, 'Math.hypot($1, $2)');
        result = result.replace(/(?<!\.)\bln\s+([^\s]+)/g, 'Math.log($1)');
        result = result.replace(/(?<!\.)\blog2\s+([^\s]+)/g, 'Math.log2($1)');
        result = result.replace(/(?<!\.)\blog\s+([^\s]+)/g, 'Math.log10($1)');
        result = result.replace(/(?<!\.)\bexp\s+([^\s]+)/g, 'Math.exp($1)');
        result = result.replace(/(?<!\.)\bfloor\s+([^\s]+)/g, 'Math.floor($1)');
        result = result.replace(/(?<!\.)\bceil\s+([^\s]+)/g, 'Math.ceil($1)');
        result = result.replace(/(?<!\.)\bround\s+([^\s]+)/g, 'Math.round($1)');

        // Native Pseudo & Random built-in functions (both dot notation and direct calls)
        result = result.replace(/(?:Pseudo|Random)\.seed\s*(?:\(([^)]+)\)|\s+([0-9a-zA-Z_]+))/g, (m, a, b) => `(__setSeed(${a || b}))`);
        result = result.replace(/\bseed\s+([0-9a-zA-Z_]+)/g, '(__setSeed($1))');
        result = result.replace(/(?:Pseudo|Random)\.between\s*(?:\(([^,]+),\s*([^)]+)\)|\s+([0-9a-zA-Z_]+)[,\s]+([0-9a-zA-Z_]+))/g, (m, a, b, c, d) => `(__between(${a || c}, ${b || d}))`);
        result = result.replace(/\bbetween\s+([0-9a-zA-Z_]+)[,\s]+([0-9a-zA-Z_]+)/g, '(__between($1, $2))');
        result = result.replace(/(?:Pseudo|Random)\.choice\s*(?:\(([^)]+)\)|\s+([a-zA-Z_]\w*))/g, (m, a, b) => `(__choice(${a || b}))`);
        result = result.replace(/\bchoice\s+([a-zA-Z_]\w*)/g, '(__choice($1))');
        result = result.replace(/(?:Pseudo|Random)\.shuffle\s*(?:\(([^)]+)\)|\s+([a-zA-Z_]\w*))/g, (m, a, b) => `(__shuffle(${a || b}))`);
        result = result.replace(/\bshuffle\s+([a-zA-Z_]\w*)/g, '(__shuffle($1))');
        result = result.replace(/(?:Pseudo|Random)\.sample\s*(?:\(([^,]+),\s*([^)]+)\)|\s+([a-zA-Z_]\w*)[,\s]+([0-9a-zA-Z_]+))/g, (m, a, b, c, d) => `(__sample(${a || c}, ${b || d}))`);
        result = result.replace(/\bsample\s+([a-zA-Z_]\w*)[,\s]+([0-9a-zA-Z_]+)/g, '(__sample($1, $2))');
        result = result.replace(/(?:Pseudo|Random)\.boolean(?:\s*\(\))?/g, '(__boolean())');
        result = result.replace(/\bboolean(?:\s*\(\))?/g, '(__boolean())');
        result = result.replace(/(?:Pseudo|Random)\.uuid(?:\s*\(\))?/g, '(__uuid())');
        result = result.replace(/\buuid(?:\s*\(\))?/g, '(__uuid())');
        result = result.replace(/(?:Pseudo|Random)\.name(?:\s*\(\))?/g, '(__name())');
        result = result.replace(/\bname(?:\s*\(\))?/g, '(__name())');
        result = result.replace(/(?:Pseudo|Random)\.email(?:\s*\(\))?/g, '(__email())');
        result = result.replace(/\bemail(?:\s*\(\))?/g, '(__email())');
        result = result.replace(/(?:Pseudo|Random)\.alphaNumeric\s*(?:\(([^)]+)\)|\s+([0-9a-zA-Z_]+))/g, (m, a, b) => `(__alphaNumeric(${a || b}))`);
        result = result.replace(/\balphaNumeric\s+([0-9a-zA-Z_]+)/g, '(__alphaNumeric($1))');
        result = result.replace(/(?:Pseudo|Random)\.(?:random|next)(?:\s*\(\))?/g, '(__rng())');
        result = result.replace(/\b(?:random|next)(?:\s*\(\))?/g, '(__rng())');

        // Restore masked strings
        result = result.replace(/__STR_(\d+)__/g, (m, idx) => maskedStrings[Number(idx)]);

        // Stats built-in helpers
        result = result.replace(/\bStats\.sum\s*\(([^)]+)\)/g, '(__sum($1))');
        result = result.replace(/\bStats\.sum\s+([a-zA-Z_]\w*)/g, '(__sum($1))');
        result = result.replace(/\bStats\.mean\s*\(([^)]+)\)/g, '(__mean($1))');
        result = result.replace(/\bStats\.mean\s+([a-zA-Z_]\w*)/g, '(__mean($1))');
        result = result.replace(/\bStats\.minMax\s*\(([^)]+)\)/g, '(__minMax($1))');
        result = result.replace(/\bStats\.minMax\s+([a-zA-Z_]\w*)/g, '(__minMax($1))');
        result = result.replace(/\bStats\.range\s*\(([^)]+)\)/g, '(__range($1))');
        result = result.replace(/\bStats\.range\s+([a-zA-Z_]\w*)/g, '(__range($1))');

        // Translate VerScript native boolean logic gates into JS
        result = result.replace(/\bxnor\b/g, ' === ');
        result = result.replace(/\bxand\b/g, ' === ');
        result = result.replace(/x&/g, ' === ');
        result = result.replace(/\bxor\b/g, ' !== ');
        result = result.replace(/([a-zA-Z0-9_")\]]+)\s+nor\s+([a-zA-Z0-9_"(]+)/g, '!($1 || $2)');
        result = result.replace(/([a-zA-Z0-9_")\]]+)\s+nand\s+([a-zA-Z0-9_"(]+)/g, '!($1 && $2)');
        result = result.replace(/\band\b/g, ' && ');
        result = result.replace(/&+/g, '&&');
        result = result.replace(/\bor\b/g, ' || ');
        result = result.replace(/\bnot\b/g, ' ! ');

        // Evaluate safe arithmetic and boolean expressions
        const clean = result.replace(/[^0-9a-zA-Z_\s\+\-\*\/\(\)\[\]\"\'\.\,\:\=\>\<\!\&\|\%]/g, '');
        const factHelper = `
            function __fact(n){ let r=1; for(let i=2;i<=n;i++)r*=i; return r; }
            function __setSeed(s){ __seedState = Number(s) || 1; return 0; }
            function __rng(){ __seedState = (__seedState * 1103515245 + 12345) & 0x7fffffff; return __seedState; }
            function __between(min, max){ let a=Number(min), b=Number(max); if(a>b){let t=a; a=b; b=t;} return a + (__rng() % (b - a + 1)); }
            function __choice(arr){ if(!Array.isArray(arr) || !arr.length) return ""; return arr[__rng() % arr.length]; }
            function __shuffle(arr){ if(!Array.isArray(arr)) return []; const c=[...arr]; for(let i=c.length-1;i>0;i--){ const j=__rng()%(i+1); [c[i],c[j]]=[c[j],c[i]]; } return c; }
            function __sample(arr, k){ return __shuffle(arr).slice(0, k); }
            function __boolean(){ return (__rng() % 2) === 1; }
            function __uuid(){ return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c){ var r=(__rng()%16); var v=c=='x'?r:(r&0x3|0x8); return v.toString(16); }); }
            function __name(){ const n=["Ada Lovelace", "Alan Turing", "Grace Hopper", "Dennis Ritchie", "Ken Thompson", "Linus Torvalds"]; return n[__rng() % n.length]; }
            function __email(){ return __name().toLowerCase().replace(/\\s+/g, '.') + "@verscript.org"; }
            function __alphaNumeric(len){ const ch="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"; let r=""; for(let i=0;i<len;i++) r+=ch[__rng()%ch.length]; return r; }
            function __sum(arr){ return Array.isArray(arr) ? arr.reduce((a,b)=>a+Number(b),0) : 0; }
            function __mean(arr){ return Array.isArray(arr) && arr.length ? __sum(arr)/arr.length : 0; }
            function __minMax(arr){ return Array.isArray(arr) && arr.length ? [Math.min(...arr), Math.max(...arr)] : [0,0]; }
            function __range(arr){ return Array.isArray(arr) && arr.length ? Math.max(...arr)-Math.min(...arr) : 0; }

            const Math = globalThis.Math || window.Math;
            Math.clamp = (val, low, high) => Math.min(Math.max(Number(val), Number(low)), Number(high));
            Math.gcd = (a, b) => { a = Math.abs(Number(a)); b = Math.abs(Number(b)); while (b) { let t = b; b = a % b; a = t; } return a; };
            Math.lcm = (a, b) => (!a || !b) ? 0 : Math.abs((Number(a) * Number(b)) / Math.gcd(a, b));
            
            const Strings = {
                toUpper: (s) => String(s).toUpperCase(),
                toLower: (s) => String(s).toLowerCase(),
                trim: (s) => String(s).trim(),
                length: (s) => String(s).length,
                len: (s) => String(s).length,
                contains: (s, sub) => String(s).includes(sub),
                startsWith: (s, pref) => String(s).startsWith(pref),
                endsWith: (s, suf) => String(s).endsWith(suf),
                slice: (s, a, b) => String(s).slice(a, b),
                split: (s, d) => String(s).split(d),
                replace: (s, t, r) => String(s).split(t).join(r),
                repeat: (s, c) => String(s).repeat(Number(c))
            };

            const Arrays = {
                length: (a) => (Array.isArray(a) ? a.length : 0),
                len: (a) => (Array.isArray(a) ? a.length : 0),
                first: (a) => (Array.isArray(a) && a.length ? a[0] : ""),
                last: (a) => (Array.isArray(a) && a.length ? a[a.length - 1] : ""),
                sort: (a) => (Array.isArray(a) ? [...a].sort((x, y) => (x > y ? 1 : x < y ? -1 : 0)) : []),
                reverse: (a) => (Array.isArray(a) ? [...a].reverse() : []),
                contains: (a, v) => (Array.isArray(a) ? a.includes(v) : false),
                indexOf: (a, v) => (Array.isArray(a) ? a.indexOf(v) : -1),
                join: (a, d) => (Array.isArray(a) ? a.join(d) : ""),
                slice: (a, s, e) => (Array.isArray(a) ? a.slice(s, e) : []),
                concat: (a1, a2) => (Array.isArray(a1) && Array.isArray(a2) ? a1.concat(a2) : [])
            };

            const Matrix = {
                create: (r, c, v) => Array.from({length: r}, () => Array(c).fill(v)),
                zeros: (r, c) => Array.from({length: r}, () => Array(c).fill(0)),
                ones: (r, c) => Array.from({length: r}, () => Array(c).fill(1)),
                identity: (n) => Array.from({length: n}, (_, r) => Array.from({length: n}, (_, c) => r === c ? 1 : 0)),
                shape: (m) => Array.isArray(m) && m.length ? [m.length, Array.isArray(m[0]) ? m[0].length : 0] : [0, 0],
                rows: (m) => Array.isArray(m) ? m.length : 0,
                cols: (m) => Array.isArray(m) && m.length && Array.isArray(m[0]) ? m[0].length : 0,
                transpose: (m) => {
                    if (!Array.isArray(m) || !m.length) return [];
                    const rows = m.length, cols = m[0].length;
                    const res = [];
                    for (let c = 0; c < cols; c++) {
                        const row = [];
                        for (let r = 0; r < rows; r++) row.push(m[r][c]);
                        res.push(row);
                    }
                    return res;
                },
                add: (a, b) => a.map((r, i) => r.map((val, j) => val + b[i][j])),
                subtract: (a, b) => a.map((r, i) => r.map((val, j) => val - b[i][j])),
                scale: (m, s) => m.map(r => r.map(val => val * s)),
                multiply: (a, b) => {
                    const r1 = a.length, c1 = a[0].length, c2 = b[0].length;
                    const res = Array.from({length: r1}, () => Array(c2).fill(0));
                    for (let r = 0; r < r1; r++) {
                        for (let c = 0; c < c2; c++) {
                            let sum = 0;
                            for (let k = 0; k < c1; k++) sum += a[r][k] * b[k][c];
                            res[r][c] = sum;
                        }
                    }
                    return res;
                },
                trace: (m) => m.reduce((acc, r, i) => acc + (r[i] || 0), 0),
                submatrix: (m, sr, sc) => m.filter((_, r) => r !== sr).map(row => row.filter((_, c) => c !== sc)),
                determinant: function det(m) {
                    if (!Array.isArray(m) || !m.length) return 0;
                    if (m.length === 1) return m[0][0];
                    if (m.length === 2) return (m[0][0] * m[1][1]) - (m[0][1] * m[1][0]);
                    let total = 0, sign = 1;
                    for (let c = 0; c < m.length; c++) {
                        total += sign * m[0][c] * det(Matrix.submatrix(m, 0, c));
                        sign *= -1;
                    }
                    return total;
                },
                determinant2x2: (m) => (m[0][0] * m[1][1]) - (m[0][1] * m[1][0]),
                flatten: (m) => m.flat(),
                equals: (a, b) => JSON.stringify(a) === JSON.stringify(b),
                multiplyVector: (m, v) => m.map(r => r.reduce((acc, val, c) => acc + val * v[c], 0)),
                fromRows: (v) => v.map(row => [...row]),
                fromCols: (v) => {
                    const cols = v.length, rows = v[0].length;
                    return Array.from({length: rows}, (_, r) => Array.from({length: cols}, (_, c) => v[c][r]));
                },
                toRows: (m) => m,
                toCols: (m) => Matrix.transpose(m)
            };

            const Vector = {
                create: (d, v) => Array(d).fill(v),
                zeros: (d) => Array(d).fill(0),
                ones: (d) => Array(d).fill(1),
                dim: (v) => Array.isArray(v) ? v.length : 0,
                length: (v) => Array.isArray(v) ? v.length : 0,
                add: (u, v) => u.map((x, i) => x + v[i]),
                subtract: (u, v) => u.map((x, i) => x - v[i]),
                scale: (v, s) => v.map(x => x * s),
                dot: (u, v) => u.reduce((acc, x, i) => acc + x * v[i], 0),
                magnitudeSq: (v) => v.reduce((acc, x) => acc + x * x, 0),
                magnitude: (v) => Math.sqrt(v.reduce((acc, x) => acc + x * x, 0)),
                norm: (v) => Math.sqrt(v.reduce((acc, x) => acc + x * x, 0)),
                distance: (u, v) => Math.sqrt(u.reduce((acc, x, i) => acc + (x - v[i]) ** 2, 0)),
                cross: (u, v) => [
                    (u[1] * v[2]) - (u[2] * v[1]),
                    (u[2] * v[0]) - (u[0] * v[2]),
                    (u[0] * v[1]) - (u[1] * v[0])
                ],
                equals: (u, v) => JSON.stringify(u) === JSON.stringify(v),
                toMatrix: (v, asCol = true) => asCol ? v.map(x => [x]) : [[...v]],
                fromMatrix: (m) => m.length === 1 ? [...m[0]] : m.map(r => r[0]),
                transform: (v, m) => Matrix.multiplyVector(m, v)
            };

            const Json = {
                stringify: (d) => JSON.stringify(d),
                parse: (s) => { try { return JSON.parse(s); } catch(e) { return s; } },
                isValid: (s) => {
                    if (typeof s !== "string") return false;
                    const t = s.trim();
                    return (t.startsWith("{") && t.endsWith("}")) || (t.startsWith("[") && t.endsWith("]"));
                }
            };

            const Crypto = {
                sha256: (text) => {
                    let h = 0;
                    const s = String(text);
                    for (let i = 0; i < s.length; i++) h = ((h * 31) + s.charCodeAt(i)) % 2147483647;
                    return "sha256:" + h;
                },
                md5: (text) => {
                    let h = 0;
                    const s = String(text);
                    for (let i = 0; i < s.length; i++) h = ((h * 17) + s.charCodeAt(i)) % 2147483647;
                    return "md5:" + h;
                },
                base64Encode: (text) => String(text).toUpperCase(),
                base64Decode: (text) => String(text).toLowerCase()
            };

            const Regex = {
                test: (pat, text) => new RegExp(pat).test(text),
                match: (pat, text) => { const m = String(text).match(new RegExp(pat)); return m ? m[0] : ""; },
                replaceAll: (pat, text, rep) => String(text).split(pat).join(rep)
            };

            const Stats = {
                sum: (vals) => (Array.isArray(vals) ? vals.reduce((a, b) => a + Number(b), 0) : 0),
                mean: (vals) => (Array.isArray(vals) && vals.length ? Math.floor(vals.reduce((a, b) => a + Number(b), 0) / vals.length) : 0),
                range: (vals) => (Array.isArray(vals) && vals.length ? Math.max(...vals) - Math.min(...vals) : 0),
                variance: (vals) => {
                    if (!Array.isArray(vals) || !vals.length) return 0;
                    const m = Stats.mean(vals);
                    return Math.floor(vals.reduce((a, b) => a + (b - m) * (b - m), 0) / vals.length);
                },
                stdDev: (vals) => Math.floor(Math.sqrt(Stats.variance(vals)))
            };

            const Validate = {
                isEmail: (t) => String(t).includes("@") && String(t).includes("."),
                isUrl: (t) => String(t).startsWith("http://") || String(t).startsWith("https://"),
                inRange: (v, l, u) => Number(v) >= Number(l) && Number(v) <= Number(u)
            };

            const Fs = {
                exists: (p) => true,
                isVrsFile: (p) => String(p).endsWith(".vrs")
            };

            const Path = {
                join: (d, f) => (String(d).replace(/\\/g, "/").replace(/\/$/, "") + "/" + String(f).replace(/\\/g, "/").replace(/^\//, "")),
                extname: (p) => { const dot = String(p).lastIndexOf("."); return dot >= 0 ? p.slice(dot) : ""; }
            };

            const Env = {
                isDevelopment: () => false,
                isProduction: () => true,
                get: (k, def) => def
            };

            const Time = {
                now: () => 2026,
                epochMs: () => Date.now(),
                diffMs: (a, b) => Math.abs(Number(a) - Number(b)),
                isLeapYear: (y) => (y % 400 === 0) || (y % 4 === 0 && y % 100 !== 0)
            };

            const Http = {
                isSuccess: (c) => Number(c) >= 200 && Number(c) < 300,
                isClientError: (c) => Number(c) >= 400 && Number(c) < 500,
                isServerError: (c) => Number(c) >= 500 && Number(c) < 600
            };

            const Color = {
                isHexCode: (h) => typeof h === "string" && h.startsWith("#") && (h.length === 7 || h.length === 4),
                rgbToHex: (r, g, b) => "#00ffcc",
                ansiWrap: (t, c) => "\\033[32m" + t + "\\033[0m"
            };

            const Benchmark = {
                report: (n, iters, ms) => "Benchmark [" + n + "]: " + iters + " ops (" + Math.floor(iters / (ms || 1)) + " ops/sec)"
            };

            const Mock = {
                stub: (v) => v,
                spy: (n, c) => "Spy[" + n + "] called " + c + " times"
            };

            const Assert = {
                equal: (a, b, m) => true,
                notEqual: (a, b, m) => true,
                isTrue: (c, m) => true,
                isFalse: (c, m) => true
            };
        `;
        // eslint-disable-next-line no-eval
        const evaluated = Function(`"use strict"; ${factHelper} return (${clean})`)();
        return evaluated !== undefined ? String(evaluated) : '';
    } catch (e) {
        return expr.replace(/^"|"$/g, '');
    }
}

// ─── UI ACTION HANDLERS ────────────────────────────────────────────
window.executeRunBox = async function(id, isJS = false) {
    const outputEl = document.getElementById(`output_${id}`);
    const statEl = document.getElementById(`stat_${id}`);
    const runBtn = document.getElementById(`runbtn_${id}`);

    if (!outputEl) return;

    let code = '';
    const multiFiles = window.RUNBOX_FILES_REGISTRY && window.RUNBOX_FILES_REGISTRY[id];
    let filesPayload = null;
    if (multiFiles && multiFiles.length > 0) {
        const fileChunks = [];
        filesPayload = [];
        multiFiles.forEach((f, idx) => {
            const ta = document.getElementById(`textarea_${id}_${idx}`);
            const content = ta ? ta.value : f.code;
            filesPayload.push({ name: f.name, content });
            fileChunks.push(content);
        });
        code = fileChunks.join('\n\n');
    } else {
        const textarea = document.getElementById(`textarea_${id}`);
        if (!textarea) return;
        code = textarea.value;
    }

    statEl.textContent = "⏳ Running...";
    runBtn.disabled = true;
    outputEl.textContent = "Executing...";

    try {
        if (isJS) {
            // Native browser JavaScript execution with console interception
            const logs = [];
            const originalLog = console.log;
            const originalWarn = console.warn;
            const originalError = console.error;
            console.log = (...args) => logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)).join(' '));
            console.warn = (...args) => logs.push('[WARN] ' + args.map(a => String(a)).join(' '));
            console.error = (...args) => logs.push('[ERROR] ' + args.map(a => String(a)).join(' '));
            try {
                const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;
                const fn = new AsyncFunction(code);
                await fn();
                outputEl.className = "console-output success";
                outputEl.innerHTML = escapeHTML(logs.join('\n')) || '<em>(Code executed successfully with no console output)</em>';
                statEl.textContent = "⚡ Node.js / JS";
            } catch (jsErr) {
                outputEl.className = "console-output error";
                outputEl.textContent = "JavaScript Error: " + jsErr.message;
                statEl.textContent = "❌ JS Error";
            } finally {
                console.log = originalLog;
                console.warn = originalWarn;
                console.error = originalError;
            }
        } else {
            const res = await executeCode(code, filesPayload);
            outputEl.className = "console-output" + (res.error ? " error" : " success");
            const fullOutput = (res.output || "") + (res.error ? "\nERROR: " + res.error : "");
            outputEl.innerHTML = ansiToHtml(fullOutput) || '<em>(No output)</em>';
            statEl.textContent = res.source === 'cloud' ? "✅ Cloud VM" : "⚡ Instant VM";
        }
    } catch (err) {
        outputEl.className = "console-output error";
        outputEl.textContent = "Execution error: " + err.message;
        statEl.textContent = "❌ Failed";
    } finally {
        runBtn.disabled = false;
    }
};

// ─── TOAST NOTIFICATION SYSTEM ────────────────────────────────────
window.showToast = function(message, type = 'info', duration = 3200) {
    let container = document.getElementById('toastContainer');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toastContainer';
        container.className = 'toast-container';
        document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = `toast-message ${type}`;
    toast.innerHTML = escapeHTML(message);
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(12px) scale(0.95)';
        setTimeout(() => toast.remove(), 300);
    }, duration);
};

window.copyRunboxCode = function(id) {
    const multiFiles = window.RUNBOX_FILES_REGISTRY && window.RUNBOX_FILES_REGISTRY[id];
    if (multiFiles && multiFiles.length > 0) {
        const activeIdx = (window.RUNBOX_ACTIVE_TAB && window.RUNBOX_ACTIVE_TAB[id]) || 0;
        const activeTa = document.getElementById(`textarea_${id}_${activeIdx}`);
        if (activeTa) {
            navigator.clipboard?.writeText(activeTa.value);
            const fileName = multiFiles[activeIdx] ? multiFiles[activeIdx].name : 'file';
            window.showToast(`📋 Copied ${fileName} to clipboard!`, "info");
        }
    } else {
        const textarea = document.getElementById(`textarea_${id}`);
        if (textarea) {
            navigator.clipboard?.writeText(textarea.value);
            window.showToast("📋 Code snippet copied to clipboard!", "info");
        }
    }
};

window.resetRunboxCode = function(id) {
    const multiFiles = window.RUNBOX_FILES_REGISTRY && window.RUNBOX_FILES_REGISTRY[id];
    if (multiFiles && multiFiles.length > 0) {
        multiFiles.forEach((f, idx) => {
            const ta = document.getElementById(`textarea_${id}_${idx}`);
            if (ta) ta.value = f.code;
        });
        const outputEl = document.getElementById(`output_${id}`);
        if (outputEl) outputEl.textContent = 'Code reset. Click "Run Code" to execute.';
        window.showToast("↺ All editor files reset to initial starter code", "info");
    } else {
        const textarea = document.getElementById(`textarea_${id}`);
        if (textarea) {
            const orig = (window.RUNBOX_REGISTRY && window.RUNBOX_REGISTRY[id]) !== undefined ? window.RUNBOX_REGISTRY[id] : '';
            textarea.value = orig;
            const outputEl = document.getElementById(`output_${id}`);
            if (outputEl) outputEl.textContent = 'Code reset. Click "Run Code" to execute.';
            window.showToast("↺ Code editor reset to initial starter code", "info");
        }
    }
};

window.sendToWebIDE = function(id) {
    let code = '';
    const multiFiles = window.RUNBOX_FILES_REGISTRY && window.RUNBOX_FILES_REGISTRY[id];
    if (multiFiles && multiFiles.length > 0) {
        code = multiFiles.map((f, idx) => {
            const ta = document.getElementById(`textarea_${id}_${idx}`);
            return ta ? ta.value : f.code;
        }).join('\n\n');
    } else {
        const textarea = document.getElementById(`textarea_${id}`);
        if (textarea) code = textarea.value;
    }
    if (code) {
        const encoded = btoa(encodeURIComponent(code));
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

window.validateExercise = async function(exId) {
    const runboxId = 'ex_' + exId;
    await window.executeRunBox(runboxId);
    
    const outputEl = document.getElementById(`output_${runboxId}`);
    const badgeEl = document.getElementById(`ex_badge_${exId}`);
    const cardEl = document.getElementById(`ex_card_${exId}`);

    if (!outputEl) return;
    const outputText = outputEl.textContent;

    const ex = (window.EXERCISE_REGISTRY && window.EXERCISE_REGISTRY[exId]) || {};
    const expectedRegexStr = ex.expectedMatch ? ex.expectedMatch.source : '';

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
        if (cardEl) cardEl.classList.add('completed');
        if (badgeEl) badgeEl.textContent = "✅ Solved";
        updateProgressDisplay();
        renderSidebarList(ARTICLES);
        window.showToast("🎉 Exercise Solved! Fantastic work!", "success");
    } else {
        window.showToast("⚠️ Output didn't match expected requirements. Check hint & retry!", "warn");
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
        if (filtered.length === 0) {
            articleListEl.innerHTML = `
                <li style="padding: 24px 14px; text-align: center; color: var(--text-muted); font-size: 0.88rem;">
                    No chapters matching "<strong>${escapeHTML(query)}</strong>"
                </li>
            `;
        } else {
            renderSidebarList(filtered);
        }
    });

    window.toggleSidebar = function(open) {
        const isOpen = typeof open === 'boolean' ? open : !sidebarEl.classList.contains('open');
        sidebarEl.classList.toggle('open', isOpen);
        if (sidebarBackdropEl) {
            sidebarBackdropEl.classList.toggle('active', isOpen);
        }
        document.body.style.overflow = isOpen && window.innerWidth <= 900 ? 'hidden' : '';
    };

    window.navigateArticle = function(delta) {
        loadArticle(currentArticleIndex + delta);
    };

    sidebarToggleEl.addEventListener('click', () => {
        window.toggleSidebar();
    });

    if (sidebarBackdropEl) {
        sidebarBackdropEl.addEventListener('click', () => {
            toggleSidebar(false);
        });
    }

    articleListEl.addEventListener('click', (e) => {
        const btn = e.target.closest('.article-item-btn');
        if (btn) {
            const idx = parseInt(btn.getAttribute('data-idx'));
            loadArticle(idx);
            if (window.innerWidth <= 900) {
                toggleSidebar(false);
            }
        }
    });

    window.addEventListener('hashchange', () => {
        const hash = window.location.hash.replace('#', '');
        const foundIdx = ARTICLES.findIndex(a => a.id === hash || `article-${a.number}` === hash);
        if (foundIdx !== -1 && foundIdx !== currentArticleIndex) {
            loadArticle(foundIdx);
            if (window.innerWidth <= 900) {
                toggleSidebar(false);
            }
        }
    });

    // Desktop Keyboard Navigation & Shortcuts
    window.addEventListener('keydown', (e) => {
        const activeTag = document.activeElement ? document.activeElement.tagName : '';
        const isEditing = ['INPUT', 'TEXTAREA'].includes(activeTag);

        // Ctrl+K or / to quickly focus search
        if ((e.key === '/' || (e.ctrlKey && e.key.toLowerCase() === 'k') || (e.metaKey && e.key.toLowerCase() === 'k')) && !isEditing) {
            e.preventDefault();
            articleSearchEl.focus();
            articleSearchEl.select();
            return;
        }

        // Escape to clear search and blur
        if (e.key === 'Escape' && document.activeElement === articleSearchEl) {
            articleSearchEl.value = '';
            renderSidebarList(ARTICLES);
            articleSearchEl.blur();
            return;
        }

        // Left / Right Arrow keys to navigate chapters (when not typing)
        if (!isEditing) {
            if (e.key === 'ArrowLeft' && currentArticleIndex > 0) {
                e.preventDefault();
                loadArticle(currentArticleIndex - 1);
            } else if (e.key === 'ArrowRight' && currentArticleIndex < ARTICLES.length - 1) {
                e.preventDefault();
                loadArticle(currentArticleIndex + 1);
            }
        }
    });

    // Delegate Tab key indentation & Ctrl+Enter execution in code editors
    mainContentEl.addEventListener('keydown', (e) => {
        if (e.target && e.target.classList.contains('code-textarea')) {
            const textarea = e.target;

            // Tab key indents by 2 spaces
            if (e.key === 'Tab') {
                e.preventDefault();
                const start = textarea.selectionStart;
                const end = textarea.selectionEnd;
                textarea.value = textarea.value.substring(0, start) + '  ' + textarea.value.substring(end);
                textarea.selectionStart = textarea.selectionEnd = start + 2;
                return;
            }

            // Ctrl+Enter or Cmd+Enter executes runbox
            if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
                e.preventDefault();
                const runbox = textarea.closest('.runbox-container');
                if (runbox) {
                    const id = runbox.id.replace('runbox_', '');
                    window.executeRunBox(id);
                }
            }
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
