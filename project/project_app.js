(function() {
    'use strict';

    // State
    let projectData = window.VERSCRIPT_PROJECT_DATA || { repos: [], milestones: [], issues: [] };
    let currentView = 'kanban';
    let searchQuery = '';
    let selectedRepo = 'all';
    let selectedMilestone = 'all';
    let selectedPriority = 'all';

    // DOM Elements
    const statTotalIssues = document.getElementById('stat-total-issues');
    const statVelocity = document.getElementById('stat-velocity');
    const statVelocityBar = document.getElementById('stat-velocity-bar');
    const statActiveMilestones = document.getElementById('stat-active-milestones');
    const statClosedMilestones = document.getElementById('stat-closed-milestones');

    const filterSearch = document.getElementById('filter-search');
    const btnClearSearch = document.getElementById('btn-clear-search');
    const filterRepo = document.getElementById('filter-repo');
    const filterMilestone = document.getElementById('filter-milestone');
    const filterPriority = document.getElementById('filter-priority');

    const viewKanbanBtn = document.getElementById('view-kanban-btn');
    const viewRoadmapBtn = document.getElementById('view-roadmap-btn');
    const viewListBtn = document.getElementById('view-list-btn');

    const viewKanban = document.getElementById('view-kanban');
    const viewRoadmap = document.getElementById('view-roadmap');
    const viewList = document.getElementById('view-list');

    const roadmapGrid = document.getElementById('roadmap-milestones-grid');
    const tasksTableBody = document.getElementById('tasks-table-body');

    const taskModal = document.getElementById('task-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const btnSync = document.getElementById('btn-sync');

    // Columns
    const cols = {
        'backlog': { list: document.getElementById('list-backlog'), counter: document.getElementById('count-backlog') },
        'todo': { list: document.getElementById('list-todo'), counter: document.getElementById('count-todo') },
        'in-progress': { list: document.getElementById('list-in-progress'), counter: document.getElementById('count-in-progress') },
        'under-review': { list: document.getElementById('list-under-review'), counter: document.getElementById('count-under-review') },
        'done': { list: document.getElementById('list-done'), counter: document.getElementById('count-done') }
    };

    function init() {
        populateMilestoneDropdown();
        computeKPIs();
        renderActiveView();
        setupEventListeners();
    }

    function populateMilestoneDropdown() {
        const uniqueMilestones = [];
        for (const ms of projectData.milestones) {
            if (!uniqueMilestones.includes(ms.title)) {
                uniqueMilestones.push(ms.title);
            }
        }
        filterMilestone.innerHTML = '<option value="all">All Milestones</option>';
        for (const title of uniqueMilestones) {
            const opt = document.createElement('option');
            opt.value = title;
            opt.textContent = title;
            filterMilestone.appendChild(opt);
        }
    }

    function computeKPIs() {
        const total = projectData.issues.length;
        const done = projectData.issues.filter(i => i.status === 'done').length;
        const velocity = total > 0 ? Math.round((done / total) * 100) : 0;

        const activeMs = projectData.milestones.filter(m => m.state === 'open').length;
        const closedMs = projectData.milestones.filter(m => m.state === 'closed').length;

        statTotalIssues.textContent = total;
        statVelocity.textContent = `${velocity}%`;
        statVelocityBar.style.width = `${velocity}%`;
        statActiveMilestones.textContent = `${activeMs} Active`;
        statClosedMilestones.textContent = `${closedMs} Completed`;
    }

    function getFilteredIssues() {
        return projectData.issues.filter(iss => {
            // Repo filter
            if (selectedRepo !== 'all' && iss.repoId !== selectedRepo) return false;

            // Milestone filter
            if (selectedMilestone !== 'all' && iss.milestone !== selectedMilestone) return false;

            // Priority filter
            if (selectedPriority !== 'all' && iss.priority !== selectedPriority) return false;

            // Search query
            if (searchQuery) {
                const q = searchQuery.toLowerCase();
                const matchTitle = iss.title.toLowerCase().includes(q);
                const matchNum = `#${iss.number}`.includes(q) || `${iss.number}` === q;
                const matchBody = (iss.body || '').toLowerCase().includes(q);
                const matchTags = (iss.labels || []).some(l => l.toLowerCase().includes(q));
                if (!matchTitle && !matchNum && !matchBody && !matchTags) return false;
            }

            return true;
        });
    }

    function renderActiveView() {
        const filtered = getFilteredIssues();

        if (currentView === 'kanban') {
            renderKanban(filtered);
        } else if (currentView === 'roadmap') {
            renderRoadmap();
        } else if (currentView === 'list') {
            renderList(filtered);
        }
    }

    function renderKanban(issues) {
        // Clear all columns
        Object.keys(cols).forEach(k => {
            cols[k].list.innerHTML = '';
            cols[k].counter.textContent = '0';
        });

        const counts = { 'backlog': 0, 'todo': 0, 'in-progress': 0, 'under-review': 0, 'done': 0 };

        issues.forEach(iss => {
            const st = iss.status || 'backlog';
            if (!cols[st]) return;

            counts[st]++;
            const card = createKanbanCard(iss);
            cols[st].list.appendChild(card);
        });

        Object.keys(counts).forEach(k => {
            cols[k].counter.textContent = counts[k];
        });
    }

    function createKanbanCard(iss) {
        const el = document.createElement('div');
        el.className = 'task-card';
        el.dataset.id = iss.id;

        // Tags to display (omit status: and priority:)
        const cleanTags = (iss.labels || [])
            .filter(l => !l.startsWith('status:') && !l.startsWith('priority:'))
            .map(l => l.replace(/^(type|area):/, ''));

        el.innerHTML = `
            <div class="card-top-row">
                <span class="repo-badge" style="color: ${iss.repoColor}; border-color: ${iss.repoColor}44;">
                    ${iss.repoId}
                </span>
                <span class="priority-pill priority-${iss.priority}">
                    ${iss.priority}
                </span>
            </div>
            <div class="card-title">${escapeHtml(iss.title)}</div>
            ${iss.milestone ? `<div class="card-milestone">🎯 ${escapeHtml(iss.milestone)}</div>` : ''}
            <div class="card-bottom-row">
                <span class="issue-number">#${iss.number}</span>
                <div class="card-tags">
                    ${cleanTags.slice(0, 3).map(t => `<span class="tag-pill">${escapeHtml(t)}</span>`).join('')}
                </div>
            </div>
        `;

        el.addEventListener('click', () => openTaskModal(iss));
        return el;
    }

    function renderRoadmap() {
        roadmapGrid.innerHTML = '';
        projectData.milestones.forEach(ms => {
            // Find all issues belonging to this milestone
            const msIssues = projectData.issues.filter(i => i.milestone === ms.title && i.repoId === ms.repoId);
            const total = msIssues.length || (ms.openIssues + ms.closedIssues);
            const closed = msIssues.length ? msIssues.filter(i => i.status === 'done').length : ms.closedIssues;
            const pct = total > 0 ? Math.round((closed / total) * 100) : (ms.state === 'closed' ? 100 : 0);

            const card = document.createElement('div');
            card.className = 'milestone-card';
            card.innerHTML = `
                <div class="ms-header">
                    <div>
                        <div class="repo-badge" style="display: inline-block; margin-bottom: 6px;">${escapeHtml(ms.repoName)}</div>
                        <h3 class="ms-title">${escapeHtml(ms.title)}</h3>
                    </div>
                    <span class="ms-state-badge ms-state-${ms.state}">${ms.state}</span>
                </div>
                <p class="ms-desc">${escapeHtml(ms.description || 'Target milestone for feature development and release.')}</p>
                <div class="ms-progress-bar-bg">
                    <div class="ms-progress-bar-fill" style="width: ${pct}%"></div>
                </div>
                <div class="ms-meta-footer">
                    <span>${closed} of ${total} issues completed (${pct}%)</span>
                    <a href="${ms.htmlUrl}" target="_blank" rel="noopener noreferrer" style="color: var(--color-cyan); text-decoration: none;">View Milestone &rarr;</a>
                </div>
            `;
            roadmapGrid.appendChild(card);
        });
    }

    function renderList(issues) {
        tasksTableBody.innerHTML = '';
        if (issues.length === 0) {
            tasksTableBody.innerHTML = `<tr><td colspan="7" style="text-align: center; padding: 30px; color: var(--text-muted);">No tasks match the active filters.</td></tr>`;
            return;
        }

        issues.forEach(iss => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td style="font-family: var(--font-mono); font-size: 12px; color: var(--text-muted);">#${iss.number}</td>
                <td><a class="tbl-title-link">${escapeHtml(iss.title)}</a></td>
                <td><span class="repo-badge" style="color: ${iss.repoColor}">${iss.repoName}</span></td>
                <td><span class="indicator-${iss.status}" style="display:inline-block; width:6px; height:6px; border-radius:50%; margin-right:6px;"></span>${iss.status}</td>
                <td><span class="priority-pill priority-${iss.priority}">${iss.priority}</span></td>
                <td>${escapeHtml(iss.milestone || '—')}</td>
                <td style="text-align: right;">
                    <a href="${iss.url}" target="_blank" rel="noopener noreferrer" style="color: var(--color-cyan); text-decoration:none;">GitHub &rarr;</a>
                </td>
            `;
            tr.querySelector('.tbl-title-link').addEventListener('click', () => openTaskModal(iss));
            tasksTableBody.appendChild(tr);
        });
    }

    function openTaskModal(iss) {
        document.getElementById('modal-repo-badge').textContent = iss.repoName;
        document.getElementById('modal-repo-badge').style.color = iss.repoColor;
        document.getElementById('modal-issue-num').textContent = `#${iss.number}`;
        
        const statusPill = document.getElementById('modal-status-pill');
        statusPill.textContent = iss.status;
        statusPill.className = `priority-pill priority-${iss.status === 'done' ? 'low' : 'medium'}`;

        const prioPill = document.getElementById('modal-priority-pill');
        prioPill.textContent = `${iss.priority} priority`;
        prioPill.className = `priority-pill priority-${iss.priority}`;

        document.getElementById('modal-title').textContent = iss.title;
        document.getElementById('modal-milestone-val').textContent = iss.milestone || 'None';
        document.getElementById('modal-body').textContent = iss.body || 'No description provided.';

        const tagsContainer = document.getElementById('modal-tags');
        tagsContainer.innerHTML = (iss.labels || []).map(l => `<span class="tag-pill">${escapeHtml(l)}</span>`).join('');

        document.getElementById('modal-date').textContent = iss.closedAt ? `Completed: ${new Date(iss.closedAt).toLocaleDateString()}` : `Opened: ${new Date(iss.createdAt).toLocaleDateString()}`;
        document.getElementById('modal-gh-link').href = iss.url;

        taskModal.classList.add('open');
    }

    function closeTaskModal() {
        taskModal.classList.remove('open');
    }

    function switchView(viewName) {
        currentView = viewName;
        [viewKanbanBtn, viewRoadmapBtn, viewListBtn].forEach(b => b.classList.remove('active'));
        [viewKanban, viewRoadmap, viewList].forEach(v => v.classList.remove('active'));

        if (viewName === 'kanban') {
            viewKanbanBtn.classList.add('active');
            viewKanban.classList.add('active');
        } else if (viewName === 'roadmap') {
            viewRoadmapBtn.classList.add('active');
            viewRoadmap.classList.add('active');
        } else if (viewName === 'list') {
            viewListBtn.classList.add('active');
            viewList.classList.add('active');
        }
        renderActiveView();
    }

    function setupEventListeners() {
        filterSearch.addEventListener('input', (e) => {
            searchQuery = e.target.value.trim();
            if (searchQuery) {
                filterSearch.parentElement.classList.add('has-val');
            } else {
                filterSearch.parentElement.classList.remove('has-val');
            }
            renderActiveView();
        });

        btnClearSearch.addEventListener('click', () => {
            filterSearch.value = '';
            searchQuery = '';
            filterSearch.parentElement.classList.remove('has-val');
            renderActiveView();
        });

        filterRepo.addEventListener('change', (e) => {
            selectedRepo = e.target.value;
            renderActiveView();
        });

        filterMilestone.addEventListener('change', (e) => {
            selectedMilestone = e.target.value;
            renderActiveView();
        });

        filterPriority.addEventListener('change', (e) => {
            selectedPriority = e.target.value;
            renderActiveView();
        });

        viewKanbanBtn.addEventListener('click', () => switchView('kanban'));
        viewRoadmapBtn.addEventListener('click', () => switchView('roadmap'));
        viewListBtn.addEventListener('click', () => switchView('list'));

        modalCloseBtn.addEventListener('click', closeTaskModal);
        taskModal.addEventListener('click', (e) => {
            if (e.target === taskModal) closeTaskModal();
        });
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && taskModal.classList.contains('open')) closeTaskModal();
        });

        // Live API sync
        btnSync.addEventListener('click', async () => {
            btnSync.classList.add('spinning');
            try {
                // Fetch latest issues from VerScript/VerScript
                const res = await fetch('https://api.github.com/repos/VerScript/VerScript/issues?state=all&per_page=30');
                if (res.ok) {
                    const latest = await res.json();
                    console.log(`Fetched ${latest.length} items from GitHub API.`);
                }
            } catch (err) {
                console.warn('API sync fallback to cached state:', err);
            } finally {
                setTimeout(() => {
                    btnSync.classList.remove('spinning');
                    computeKPIs();
                    renderActiveView();
                }, 600);
            }
        });
    }

    function escapeHtml(str) {
        if (!str) return '';
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    // Launch
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
