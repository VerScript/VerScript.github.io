// ═══════════════════════════════════════════════════════════════════
//  VerScript Interactive Help Center Engine
// ═══════════════════════════════════════════════════════════════════

(function () {
  const db = window.VERSCRIPT_HELP_DB || [];

  let activeTab = 'all';
  let searchQuery = '';
  let selectedIndex = -1;

  // DOM Elements
  const searchInput = document.getElementById('helpSearchInput');
  const searchClearBtn = document.getElementById('searchClearBtn');
  const suggestionsBox = document.getElementById('autocompleteDropdown');
  const tabsContainer = document.getElementById('filterTabsContainer');
  const resultsGrid = document.getElementById('resultsGrid');
  const resultsCountEl = document.getElementById('resultsCount');
  const modalBackdrop = document.getElementById('helpModal');
  const modalBody = document.getElementById('modalContent');
  const modalCloseBtn = document.getElementById('modalCloseBtn');

  // Tab counts
  function updateTabCounts() {
    const counts = {
      all: db.length,
      keyword: db.filter(i => i.category === 'keyword').length,
      library: db.filter(i => i.category === 'library').length,
      error: db.filter(i => i.category === 'error').length,
      functionality: db.filter(i => i.category === 'functionality').length
    };

    document.querySelectorAll('.filter-tab').forEach(tab => {
      const category = tab.dataset.category;
      const countEl = tab.querySelector('.tab-count');
      if (countEl && counts[category] !== undefined) {
        countEl.textContent = counts[category];
      }
    });
  }

  // Filter function
  function getFilteredItems() {
    return db.filter(item => {
      // Tab filter
      if (activeTab !== 'all' && item.category !== activeTab) {
        return false;
      }

      // Query filter
      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const nameMatch = item.name.toLowerCase().includes(q);
      const titleMatch = item.title.toLowerCase().includes(q);
      const summaryMatch = item.summary.toLowerCase().includes(q);
      const tagsMatch = item.tags && item.tags.some(t => t.toLowerCase().includes(q));
      const syntaxMatch = item.syntax && item.syntax.toLowerCase().includes(q);

      return nameMatch || titleMatch || summaryMatch || tagsMatch || syntaxMatch;
    });
  }

  // Render Result Cards
  function renderResults() {
    const items = getFilteredItems();
    resultsCountEl.textContent = `Showing ${items.length} ${items.length === 1 ? 'topic' : 'topics'}`;

    if (items.length === 0) {
      resultsGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
          <div style="font-size: 2.5rem; margin-bottom: 12px;">🔍</div>
          <h3 style="font-size: 1.25rem; font-weight: 700; color: #fff; margin-bottom: 8px;">No matching topics found</h3>
          <p style="color: #94a3b8; font-size: 0.92rem;">Try searching for a different keyword, library (e.g. Matrix), error name, or programming action (e.g. "print", "loop", "exception").</p>
        </div>
      `;
      return;
    }

    resultsGrid.innerHTML = items.map(item => {
      const badgeClass = `badge-${item.category}`;
      const syntaxSnippet = item.syntax ? `<div class="card-syntax-preview">${escapeHtml(item.syntax.split('\n')[0])}</div>` : '';
      const tagsHtml = (item.tags || []).slice(0, 4).map(t => `<span class="tag-pill">#${escapeHtml(t)}</span>`).join('');

      return `
        <div class="help-card" data-id="${item.id}" onclick="window.openHelpItem('${item.id}')">
          <div>
            <div class="card-header">
              <div class="card-title-group">
                <span class="card-name">${escapeHtml(item.name)}</span>
                <span class="card-subcat">${escapeHtml(item.subcategory || item.category)}</span>
              </div>
              <span class="suggestion-badge ${badgeClass}">${item.category}</span>
            </div>
            <p class="card-summary">${escapeHtml(item.summary)}</p>
            ${syntaxSnippet}
          </div>
          <div class="card-tags">
            ${tagsHtml}
          </div>
        </div>
      `;
    }).join('');
  }

  // Autocomplete Suggestions
  function updateSuggestions() {
    const q = searchQuery.toLowerCase().trim();
    if (!q) {
      suggestionsBox.style.display = 'none';
      selectedIndex = -1;
      return;
    }

    const matches = db.filter(item => {
      const nameMatch = item.name.toLowerCase().includes(q);
      const tagsMatch = item.tags && item.tags.some(t => t.toLowerCase().includes(q));
      return nameMatch || tagsMatch;
    }).slice(0, 6);

    if (matches.length === 0) {
      suggestionsBox.style.display = 'none';
      selectedIndex = -1;
      return;
    }

    suggestionsBox.innerHTML = matches.map((m, idx) => `
      <div class="suggestion-item ${idx === selectedIndex ? 'active' : ''}" data-id="${m.id}" onclick="window.openHelpItem('${m.id}')">
        <div class="suggestion-left">
          <span class="suggestion-name">${escapeHtml(m.name)}</span>
          <span class="suggestion-badge badge-${m.category}">${m.category}</span>
        </div>
        <span class="suggestion-desc">${escapeHtml(m.summary)}</span>
      </div>
    `).join('');

    suggestionsBox.style.display = 'block';
  }

  // Open Detailed Modal
  window.openHelpItem = function (id) {
    const item = db.find(i => i.id === id);
    if (!item) return;

    suggestionsBox.style.display = 'none';
    window.location.hash = item.id;

    let bodyHtml = `
      <div class="modal-header">
        <div class="modal-title-group">
          <span class="modal-title">${escapeHtml(item.name)}</span>
          <span class="suggestion-badge badge-${item.category}">${item.category}</span>
          <span style="font-size: 0.8rem; color: #94a3b8;">${escapeHtml(item.subcategory || '')}</span>
        </div>
        <button class="modal-close-btn" id="modalCloseBtnTop" onclick="window.closeHelpModal()">&times;</button>
      </div>
      <div class="modal-body">
        <div class="modal-section">
          <div class="modal-section-title">Overview</div>
          <p style="font-size: 0.96rem; line-height: 1.6; color: #e2e8f0;">${escapeHtml(item.summary)}</p>
        </div>
    `;

    if (item.syntax) {
      bodyHtml += `
        <div class="modal-section">
          <div class="modal-section-title">Syntax</div>
          <div class="code-block-wrapper">
            <div class="code-header">
              <span class="code-lang-tag">Syntax Signature</span>
            </div>
            <div class="code-content">${escapeHtml(item.syntax)}</div>
          </div>
        </div>
      `;
    }

    if (item.criticality) {
      bodyHtml += `
        <div class="modal-section" style="background: rgba(239, 68, 68, 0.08); border: 1px solid rgba(239, 68, 68, 0.25); border-radius: 10px; padding: 16px;">
          <div style="font-weight: 700; color: #f87171; margin-bottom: 8px;">⚠️ Exception Matrix: Criticality ${item.criticality} | ${item.suppressionTier}</div>
          <div style="font-size: 0.88rem; color: #cbd5e1; margin-bottom: 6px;"><strong>Causes:</strong> ${escapeHtml(item.causes)}</div>
          <div style="font-size: 0.88rem; color: #cbd5e1;"><strong>Remedy:</strong> ${escapeHtml(item.remedy)}</div>
        </div>
      `;
    }

    if (item.functionalities && item.functionalities.length > 0) {
      bodyHtml += `
        <div class="modal-section">
          <div class="modal-section-title">Core Functionalities</div>
          ${item.functionalities.map(fn => `
            <div style="margin-bottom: 16px; background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 8px; padding: 12px;">
              <h4 style="font-size: 0.92rem; font-weight: 700; color: var(--primary); margin-bottom: 4px;">${escapeHtml(fn.title)}</h4>
              <p style="font-size: 0.84rem; color: #94a3b8; margin-bottom: 8px;">${escapeHtml(fn.desc)}</p>
              <div class="code-block-wrapper">
                <div class="code-content" style="padding: 10px;">${escapeHtml(fn.code)}</div>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    }

    if (item.pairedWith && item.pairedWith.length > 0) {
      bodyHtml += `
        <div class="modal-section">
          <div class="modal-section-title">Commonly Paired With</div>
          <div style="display: flex; gap: 8px; flex-wrap: wrap;">
            ${item.pairedWith.map(k => `<span class="tag-pill" style="color: var(--primary); font-family: var(--font-code); font-size: 0.82rem; cursor: pointer;" onclick="window.filterByKeyword('${k}')">${k}</span>`).join('')}
          </div>
        </div>
      `;
    }

    if (item.example) {
      bodyHtml += `
        <div class="modal-section">
          <div class="modal-section-title">Runnable Example Code</div>
          <div class="code-block-wrapper">
            <div class="code-header">
              <span class="code-lang-tag">VerScript</span>
              <button class="copy-btn" onclick="window.copyCode(this)">Copy Code</button>
            </div>
            <div class="code-content" id="exampleCodeBlock">${escapeHtml(item.example)}</div>
          </div>
        </div>
      `;
    }

    bodyHtml += `
        <div style="display: flex; justify-content: flex-end; gap: 12px; margin-top: 24px; padding-top: 16px; border-top: 1px solid rgba(255, 255, 255, 0.06);">
          <a href="https://verscript.github.io/IDE/" target="_blank" rel="noopener noreferrer" class="nav-btn" style="background: rgba(157, 0, 255, 0.15); border-color: #bd00ff; color: #d8b4fe;">⚡ Open & Test in Web IDE</a>
          <button class="nav-btn" onclick="window.closeHelpModal()">Close</button>
        </div>
      </div>
    `;

    modalBody.innerHTML = bodyHtml;
    modalBackdrop.style.display = 'flex';
  };

  window.closeHelpModal = function () {
    modalBackdrop.style.display = 'none';
  };

  window.filterByKeyword = function (keyword) {
    window.closeHelpModal();
    activeTab = 'all';
    document.querySelectorAll('.filter-tab').forEach(t => {
      t.classList.toggle('active', t.dataset.category === 'all');
    });
    searchInput.value = keyword;
    searchQuery = keyword;
    searchClearBtn.style.display = 'block';
    renderResults();
  };

  window.copyCode = function (btn) {
    const block = btn.closest('.code-block-wrapper').querySelector('.code-content');
    if (!block) return;
    navigator.clipboard.writeText(block.textContent).then(() => {
      const orig = btn.textContent;
      btn.textContent = 'Copied! ✓';
      setTimeout(() => btn.textContent = orig, 1800);
    });
  };

  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Event Listeners
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    searchClearBtn.style.display = searchQuery ? 'block' : 'none';
    updateSuggestions();
    renderResults();
  });

  searchInput.addEventListener('keydown', (e) => {
    const items = suggestionsBox.querySelectorAll('.suggestion-item');
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      selectedIndex = Math.min(selectedIndex + 1, items.length - 1);
      updateSuggestions();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      selectedIndex = Math.max(selectedIndex - 1, 0);
      updateSuggestions();
    } else if (e.key === 'Enter') {
      if (selectedIndex >= 0 && items[selectedIndex]) {
        items[selectedIndex].click();
      }
    } else if (e.key === 'Escape') {
      suggestionsBox.style.display = 'none';
    }
  });

  searchClearBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    searchClearBtn.style.display = 'none';
    suggestionsBox.style.display = 'none';
    renderResults();
    searchInput.focus();
  });

  // Global hotkey: '/' or 'Ctrl+H' focuses search
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      window.closeHelpModal();
      suggestionsBox.style.display = 'none';
    }
    if ((e.key === '/' || (e.ctrlKey && e.key.toLowerCase() === 'h')) && document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput.focus();
      searchInput.select();
    }
  });

  // Filter Tabs click
  tabsContainer.addEventListener('click', (e) => {
    const tab = e.target.closest('.filter-tab');
    if (!tab) return;
    document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    activeTab = tab.dataset.category;
    renderResults();
  });

  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) window.closeHelpModal();
  });

  // URL Hash Navigation
  window.addEventListener('hashchange', () => {
    const hash = window.location.hash.replace('#', '');
    if (hash) window.openHelpItem(hash);
  });

  // Init
  updateTabCounts();
  renderResults();

  if (window.location.hash) {
    const hash = window.location.hash.replace('#', '');
    if (hash) window.openHelpItem(hash);
  }
})();
