(() => {
    const NEXT = 'PageUp';
    const PREV = 'PageDown';

    document.addEventListener('keydown', (event) => {
        if(event.key !== NEXT && event.key !== PREV) {
            return;
        }
        event.preventDefault();

        const currentHash = window.location.hash;
        let currentPageMatched = currentHash.match(/\d/);
        const currentPage = currentPageMatched ? Number(currentPageMatched[0]) : 1;
        const mod = event.key === NEXT ? 1 : -1;
        const nextPageHash = `page-${currentPage + mod}`;

        if (!document.querySelector(`[href="#${nextPageHash}"]`)) {
            return;
        }

        document.location.hash = nextPageHash;
    });
})();