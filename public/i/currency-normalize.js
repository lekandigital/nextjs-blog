/*
  currency-normalize.js (cleanup)
  - Unwrap and remove all <span class="metrics">…</span> instances
  - Unescape visible "\$" to "$" in non-math text
  - Never adds any new wrappers
  - Skips KaTeX-rendered math and script/style blocks
*/
(function() {
  function shouldSkip(el) {
    if (!el) return true;
    const tag = el.tagName;
    if (!tag) return true;
    if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'NOSCRIPT' || tag === 'TEXTAREA') return true;
    if (el.closest && el.closest('.katex')) return true;
    return false;
  }

  function unwrapMetrics(root) {
    const nodes = root.querySelectorAll('span.metrics');
    nodes.forEach(span => {
      const parent = span.parentNode;
      if (!parent || shouldSkip(span)) return;
      const frag = document.createDocumentFragment();
      while (span.firstChild) {
        frag.appendChild(span.firstChild);
      }
      parent.replaceChild(frag, span);
    });
  }

  function unescapeDollarText(root) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const el = node.parentElement;
        if (!el || shouldSkip(el)) return NodeFilter.FILTER_REJECT;
        if (!node.nodeValue || node.nodeValue.indexOf('\\$') === -1) return NodeFilter.FILTER_SKIP;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const toFix = [];
    while (walker.nextNode()) toFix.push(walker.currentNode);
    toFix.forEach(n => {
      n.nodeValue = n.nodeValue.replace(/\\\$/g, '$');
    });
  }

  function normalizeCurrencyAndMetrics(root) {
    const target = root || document.body;
    unwrapMetrics(target);
    unescapeDollarText(target);
  }

  // Expose globally; pages already call this after KaTeX auto-render.
  window.normalizeCurrencyAndMetrics = function() { normalizeCurrencyAndMetrics(document.body); };
})();
