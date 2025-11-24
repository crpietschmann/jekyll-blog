(function(){
  function getQueryParam(name){
    const params = new URLSearchParams(window.location.search);
    return params.get(name) || '';
  }

  function escapeHtml(str){
    return str.replace(/[&<>\"]+/g, function(c){
      return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]);
    });
  }

  function highlight(text, query){
    if(!query) return text;
    try {
      const re = new RegExp('('+query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')+')','ig');
      return text.replace(re, '<mark>$1</mark>');
    } catch(e){ return text; }
  }

  async function run(){
    const q = getQueryParam('q').trim();
    document.getElementById('search-query').textContent = q || '(empty)';
    if(!q){ return; }

    // Fetch index
    const base = window.__BASEURL__ || '';
    const res = await fetch(base + '/search.json', { cache: 'no-cache' });
    const data = await res.json();

    // Build Fuse index
    const fuse = new Fuse(data, {
      includeScore: true,
      threshold: 0.4,
      ignoreLocation: true,
      keys: [
        { name: 'title', weight: 0.6 },
        { name: 'content', weight: 0.3 },
        { name: 'categories', weight: 0.1 }
      ]
    });

    const results = fuse.search(q).slice(0, 20);
    const container = document.getElementById('search-results');
    container.innerHTML = '';

    if(results.length === 0){
      container.innerHTML = '<div class="alert alert-warning">No results found.</div>';
      return;
    }

    for(const r of results){
      const item = r.item;
      const title = escapeHtml(item.title || 'Untitled');
      const content = (item.content || '').toString();
      const snippet = escapeHtml(content.substring(0, 200)) + (content.length > 200 ? '…' : '');
      const html = `
        <a class="list-group-item list-group-item-action" href="${item.url}">
          <h5 class="mb-1">${highlight(title, q)}</h5>
          <p class="mb-1 text-body-secondary">${highlight(snippet, q)}</p>
        </a>`;
      container.insertAdjacentHTML('beforeend', html);
    }
  }

  document.addEventListener('DOMContentLoaded', run);
})();
