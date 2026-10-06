// ═══════════════════════════════════════════════════════════════════
// VerScript Library Portal — Interactive Application Controller
// ═══════════════════════════════════════════════════════════════════

const POLYSERVER_API = "https://verscript-polyserver.onrender.com/vs-sharp";

let currentLibIndex = 0;
let currentCategoryFilter = "All";

// ─── DOM ELEMENTS ──────────────────────────────────────────────────
const libListEl = document.getElementById('libList');
const mainContentEl = document.getElementById('mainContent');
const libSearchEl = document.getElementById('libSearch');
const categoryPillsEl = document.getElementById('categoryPills');
const sidebarToggleEl = document.getElementById('sidebarToggle');
const sidebarEl = document.getElementById('sidebar');
const sidebarBackdropEl = document.getElementById('sidebarBackdrop');

// ─── INITIALIZATION ────────────────────────────────────────────────
function initLibsApp() {
    renderCategoryPills();
    renderSidebarList(CORE_LIBRARIES);
    setupEventListeners();

    // Check URL Hash routing
    const hash = window.location.hash.replace('#', '');
    if (hash) {
        const foundIdx = CORE_LIBRARIES.findIndex(l => l.id === hash || l.name.toLowerCase() === hash.toLowerCase());
        if (foundIdx !== -1) {
            currentLibIndex = foundIdx;
        }
    }
    loadLibrary(currentLibIndex);
}

// ─── CATEGORY FILTER PILLS ─────────────────────────────────────────
function renderCategoryPills() {
    const categories = ["All", "Core & Math", "Data & Collections", "Testing & Quality", "System & Runtime", "Utilities & Text"];
    categoryPillsEl.innerHTML = categories.map(cat => `
        <button class="cat-pill ${currentCategoryFilter === cat ? 'active' : ''}" data-cat="${escapeHTML(cat)}">
            ${escapeHTML(cat)}
        </button>
    `).join('');

    categoryPillsEl.querySelectorAll('.cat-pill').forEach(btn => {
        btn.addEventListener('click', () => {
            currentCategoryFilter = btn.getAttribute('data-cat');
            categoryPillsEl.querySelectorAll('.cat-pill').forEach(b => b.classList.toggle('active', b === btn));
            filterAndRender();
        });
    });
}

function filterAndRender() {
    const query = (libSearchEl.value || '').toLowerCase().trim();
    const filtered = CORE_LIBRARIES.filter(lib => {
        const matchesCat = currentCategoryFilter === "All" || lib.category === currentCategoryFilter;
        const matchesQuery = !query || 
            lib.name.toLowerCase().includes(query) || 
            lib.summary.toLowerCase().includes(query) ||
            lib.category.toLowerCase().includes(query) ||
            lib.functions.some(f => f.name.toLowerCase().includes(query));
        return matchesCat && matchesQuery;
    });

    renderSidebarList(filtered);
}

// ─── SIDEBAR RENDERING ─────────────────────────────────────────────
function renderSidebarList(libsToRender) {
    libListEl.innerHTML = '';
    if (libsToRender.length === 0) {
        libListEl.innerHTML = `
            <li style="padding: 24px 14px; text-align: center; color: var(--text-muted); font-size: 0.88rem;">
                No libraries match your search filter.
            </li>
        `;
        return;
    }

    let currentSection = null;
    libsToRender.forEach(lib => {
        const originalIndex = CORE_LIBRARIES.findIndex(l => l.id === lib.id);
        if (lib.category !== currentSection) {
            currentSection = lib.category;
            const divider = document.createElement('li');
            divider.className = 'sidebar-section-divider';
            divider.innerHTML = `<span>${escapeHTML(currentSection)}</span>`;
            libListEl.appendChild(divider);
        }

        const li = document.createElement('li');
        li.innerHTML = `
            <button class="lib-item-btn ${originalIndex === currentLibIndex ? 'active' : ''}" data-idx="${originalIndex}">
                <div class="lib-btn-main">
                    <span class="lib-btn-name">${escapeHTML(lib.name)}</span>
                    <span class="lib-btn-badge ${lib.status === 'Embedded Core' ? 'embedded' : 'standard'}">${lib.status === 'Embedded Core' ? '⚡ Core' : '📦 Lib'}</span>
                </div>
                <div class="lib-btn-summary">${escapeHTML(lib.summary)}</div>
            </button>
        `;
        libListEl.appendChild(li);
    });
}

// ─── LOAD LIBRARY VIEW ─────────────────────────────────────────────
function loadLibrary(index) {
    if (index < 0 || index >= CORE_LIBRARIES.length) return;
    currentLibIndex = index;
    const lib = CORE_LIBRARIES[index];

    window.location.hash = lib.id;
    window.scrollTo({ top: 0, behavior: 'smooth' });

    document.querySelectorAll('.lib-item-btn').forEach(btn => {
        btn.classList.toggle('active', parseInt(btn.getAttribute('data-idx')) === currentLibIndex);
    });

    // Close mobile drawer
    sidebarEl.classList.remove('open');
    if (sidebarBackdropEl) sidebarBackdropEl.classList.remove('active');
    document.body.style.overflow = '';

    // Render Meta Partition Inspector
    const metaStaticRows = Object.entries(lib.meta.static).map(([k, v]) => `
        <tr><td><code>${escapeHTML(k)}</code></td><td><span class="type-pill immutable">Immutable</span></td><td><code>${escapeHTML(String(v))}</code></td><td>Static configuration build tag</td></tr>
    `).join('');

    const metaDynamicRows = Object.entries(lib.meta.dynamic).map(([k, v]) => `
        <tr><td><code>${escapeHTML(k)}</code></td><td><span class="type-pill mutable">Mutable</span></td><td><code>${escapeHTML(String(v))}</code></td><td>Internal runtime telemetry counter</td></tr>
    `).join('');

    const metaThisstaticRows = Object.entries(lib.meta.thisstatic).map(([k, v]) => `
        <tr><td><code>${escapeHTML(k)}</code></td><td><span class="type-pill session">Session</span></td><td><code>${escapeHTML(String(v))}</code></td><td>Instance execution timestamp ID</td></tr>
    `).join('');

    // Render Functions Table
    const funcsTableRows = lib.functions.map(f => `
        <tr>
            <td style="font-family: 'Fira Code', monospace; font-weight: 600; color: var(--primary);">${escapeHTML(f.name)}</td>
            <td style="font-family: 'Fira Code', monospace; color: #FFD166;">${escapeHTML(f.params)}</td>
            <td><span class="return-type-pill">${escapeHTML(f.returnType)}</span></td>
            <td><span style="font-family: 'Fira Code', monospace; font-size: 0.85em; color: #06D6A0; background: rgba(6, 214, 160, 0.1); padding: 2px 6px; border-radius: 4px;">${escapeHTML(f.aliases || '—')}</span></td>
            <td>${escapeHTML(f.desc)}</td>
        </tr>
    `).join('');

    mainContentEl.innerHTML = `
        <header class="lib-header">
            <div class="lib-header-badges">
                <span class="lib-badge-cat">${escapeHTML(lib.category)}</span>
                <span class="lib-badge-status ${lib.status === 'Embedded Core' ? 'embedded' : 'standard'}">
                    ${lib.status === 'Embedded Core' ? '⚡ Embedded Core (Virtual Memory)' : '📦 Standard Core Library'}
                </span>
                <span class="lib-badge-version">v${escapeHTML(lib.version)}</span>
            </div>
            <h1 class="lib-title">${escapeHTML(lib.name)}</h1>
            <p class="lib-summary">${escapeHTML(lib.summary)}</p>

            <div class="import-code-box">
                <span class="import-label">LOAD COMMAND:</span>
                <code class="import-syntax">${escapeHTML(lib.loadSyntax)}</code>
                <button class="copy-import-btn" onclick="copyImportSyntax('${escapeTemplateString(lib.loadSyntax)}')">📋 Copy</button>
            </div>
        </header>

        <section class="lib-section">
            <h2>Overview &amp; Architecture</h2>
            <div class="lib-desc-content">${lib.description}</div>
        </section>

        <section class="lib-section">
            <div class="section-title-row">
                <h2>Internal 'meta' Architecture</h2>
                <span class="meta-protection-tag">🔒 Strictly Internal Encapsulated</span>
            </div>
            <p>The <code>${escapeHTML(lib.name)}</code> component maintains encapsulated diagnostic metadata partitioned into immutable static, mutable dynamic, and session thisstatic blocks:</p>
            <div class="table-container">
                <table class="doc-table">
                    <thead>
                        <tr><th>Property</th><th>Partition</th><th>Default Value</th><th>Semantic Role</th></tr>
                    </thead>
                    <tbody>
                        ${metaStaticRows}
                        ${metaDynamicRows}
                        ${metaThisstaticRows}
                    </tbody>
                </table>
            </div>
        </section>

        <section class="lib-section">
            <h2>API Reference &amp; Exported Routines</h2>
            <div class="table-container">
                <table class="doc-table">
                    <thead>
                        <tr><th>Signature</th><th>Parameters</th><th>Return</th><th>Common Aliases</th><th>Description</th></tr>
                    </thead>
                    <tbody>
                        ${funcsTableRows}
                    </tbody>
                </table>
            </div>
        </section>

        <section class="lib-section">
            <h2>Interactive Sandbox</h2>
            <p>Run, test, and modify live VerScript code utilizing <code>${escapeHTML(lib.name)}</code> directly in your browser:</p>
            ${renderRunBox('sandbox_' + lib.id, `test_${lib.name.toLowerCase()}.vrs`, lib.runnableExample)}
        </section>

        <nav class="page-nav">
            ${index > 0 ? `
                <div class="page-nav-card prev" onclick="loadLibrary(${index - 1})">
                    <span class="nav-card-label">‹ Previous Library</span>
                    <span class="nav-card-title">${escapeHTML(CORE_LIBRARIES[index - 1].name)}</span>
                </div>
            ` : '<div></div>'}
            ${index < CORE_LIBRARIES.length - 1 ? `
                <div class="page-nav-card next" onclick="loadLibrary(${index + 1})">
                    <span class="nav-card-label">Next Library ›</span>
                    <span class="nav-card-title">${escapeHTML(CORE_LIBRARIES[index + 1].name)}</span>
                </div>
            ` : '<div></div>'}
        </nav>
    `;
}

// ─── RUNBOX RENDERER ───────────────────────────────────────────────
function renderRunBox(id, filename, initialCode) {
    return `
        <div class="runbox-container" id="runbox_${id}">
            <div class="runbox-header">
                <div class="runbox-title">
                    <div class="window-dots">
                        <span class="w-dot red"></span>
                        <span class="w-dot yellow"></span>
                        <span class="w-dot green"></span>
                    </div>
                    <span>${escapeHTML(filename)}</span>
                </div>
                <div class="runbox-actions">
                    <button class="action-btn" onclick="copyRunboxCode('${id}')" title="Copy code">📋 Copy</button>
                    <button class="action-btn" onclick="resetRunboxCode('${id}', \`${escapeTemplateString(initialCode)}\`)" title="Reset code">↺ Reset</button>
                    <button class="action-btn" onclick="sendToWebIDE('${id}')" title="Open in IDE">⚡ Open in IDE</button>
                    <button class="action-btn run-btn" onclick="executeRunBox('${id}')" id="runbtn_${id}">▶ Run Code</button>
                </div>
            </div>
            <div class="code-editor-area">
                <textarea class="code-textarea" aria-label="Code editor" id="textarea_${id}" spellcheck="false">${escapeHTML(initialCode)}</textarea>
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

// ─── CODE EXECUTION (CLOUD + SIMULATOR FALLBACK) ───────────────────
async function executeCode(code) {
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
            return {
                output: data.output || '',
                error: data.error || '',
                source: 'cloud'
            };
        }
    } catch (e) {
        // Fallback to Instant Simulator
    }
    return {
        output: simulateVerScript(code),
        error: '',
        source: 'simulator'
    };
}

function simulateVerScript(code) {
    const lines = code.split('\n');
    let out = [];
    for (let line of lines) {
        let t = line.trim();
        if (!t || t.startsWith('!')) continue;
        if (t.startsWith('display ')) {
            let expr = t.substring(8).trim();
            // Handle simple display statements in simulation
            expr = expr.replace(/\?color=[^\s]+/g, '').trim();
            try {
                // Remove VerScript string concat pluses when safe
                let cleaned = expr.replace(/"\s*\+\s*/g, '').replace(/\s*\+\s*"/g, '').replace(/"/g, '');
                out.push(cleaned);
            } catch (err) {
                out.push(expr);
            }
        }
    }
    return out.join('\n');
}

// ─── ACTIONS ───────────────────────────────────────────────────────
window.copyImportSyntax = function(syntax) {
    navigator.clipboard?.writeText(syntax);
    window.showToast("📋 Load syntax copied: " + syntax, "info");
};

window.executeRunBox = async function(id) {
    const textarea = document.getElementById(`textarea_${id}`);
    const outputEl = document.getElementById(`output_${id}`);
    const statEl = document.getElementById(`stat_${id}`);
    const runBtn = document.getElementById(`runbtn_${id}`);
    if (!textarea || !outputEl) return;

    statEl.textContent = "⏳ Running...";
    runBtn.disabled = true;
    outputEl.textContent = "Executing...";

    try {
        const res = await executeCode(textarea.value);
        outputEl.className = "console-output" + (res.error ? " error" : " success");
        outputEl.textContent = (res.output || '') + (res.error ? "\nERROR: " + res.error : "") || "(No output)";
        statEl.textContent = res.source === 'cloud' ? "✅ Cloud VM" : "⚡ Instant VM";
    } catch (e) {
        outputEl.className = "console-output error";
        outputEl.textContent = "Execution error: " + e.message;
        statEl.textContent = "❌ Failed";
    } finally {
        runBtn.disabled = false;
    }
};

window.copyRunboxCode = function(id) {
    const textarea = document.getElementById(`textarea_${id}`);
    if (textarea) {
        navigator.clipboard?.writeText(textarea.value);
        window.showToast("📋 Code snippet copied to clipboard!", "info");
    }
};

window.resetRunboxCode = function(id, originalCode) {
    const textarea = document.getElementById(`textarea_${id}`);
    if (textarea) {
        textarea.value = originalCode;
        const outputEl = document.getElementById(`output_${id}`);
        if (outputEl) outputEl.textContent = 'Code reset. Click "Run Code" to execute.';
        window.showToast("↺ Code editor reset", "info");
    }
};

window.sendToWebIDE = function(id) {
    const textarea = document.getElementById(`textarea_${id}`);
    if (textarea) {
        const encoded = btoa(encodeURIComponent(textarea.value));
        window.open(`https://verscript.github.io/IDE/?code=${encoded}`, '_blank');
    }
};

window.showToast = function(message, type = 'info', duration = 3000) {
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

// ─── EVENT LISTENERS ───────────────────────────────────────────────
function setupEventListeners() {
    libSearchEl.addEventListener('input', () => {
        filterAndRender();
    });

    window.toggleSidebar = function(open) {
        const isOpen = typeof open === 'boolean' ? open : !sidebarEl.classList.contains('open');
        sidebarEl.classList.toggle('open', isOpen);
        if (sidebarBackdropEl) sidebarBackdropEl.classList.toggle('active', isOpen);
        document.body.style.overflow = isOpen && window.innerWidth <= 900 ? 'hidden' : '';
    };

    if (sidebarToggleEl) {
        sidebarToggleEl.addEventListener('click', () => window.toggleSidebar());
    }

    if (sidebarBackdropEl) {
        sidebarBackdropEl.addEventListener('click', () => window.toggleSidebar(false));
    }

    libListEl.addEventListener('click', (e) => {
        const btn = e.target.closest('.lib-item-btn');
        if (btn) {
            const idx = parseInt(btn.getAttribute('data-idx'));
            loadLibrary(idx);
            if (window.innerWidth <= 900) window.toggleSidebar(false);
        }
    });

    window.addEventListener('hashchange', () => {
        const hash = window.location.hash.replace('#', '');
        const foundIdx = CORE_LIBRARIES.findIndex(l => l.id === hash || l.name.toLowerCase() === hash.toLowerCase());
        if (foundIdx !== -1 && foundIdx !== currentLibIndex) {
            loadLibrary(foundIdx);
            if (window.innerWidth <= 900) window.toggleSidebar(false);
        }
    });

    window.addEventListener('keydown', (e) => {
        const activeTag = document.activeElement ? document.activeElement.tagName : '';
        const isEditing = ['INPUT', 'TEXTAREA'].includes(activeTag);
        if ((e.key === '/' || (e.ctrlKey && e.key.toLowerCase() === 'k')) && !isEditing) {
            e.preventDefault();
            libSearchEl.focus();
            libSearchEl.select();
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

window.addEventListener('DOMContentLoaded', initLibsApp);
