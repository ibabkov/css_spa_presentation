(() => {
    const NEXT = 'PageUp';
    const PREV = 'PageDown';
    const SPACE = 32;
    const LEFT = 37;
    const RIGHT = 39;

    document.addEventListener('keydown', (event) => {
        if(
            event.key !== NEXT
            && event.key !== PREV
            && event.keyCode !== SPACE
            && event.keyCode !== LEFT
            && event.keyCode !== RIGHT
        ) {
            return;
        }
        event.preventDefault();
        const currentHash = window.location.hash;
        let currentPageMatched = currentHash.match(/\d/);
        const currentPage = currentPageMatched ? Number(currentPageMatched[0]) : 1;
        const mod =
            event.key === NEXT
            || event.keyCode === SPACE
            || event.keyCode === RIGHT
                ? 1
                : -1;
        const nextPageHash = `slide-${currentPage + mod}`;

        if (!document.querySelector(`[href="#${nextPageHash}"]`)) {
            return;
        }

        document.location.hash = nextPageHash;
    });
})();