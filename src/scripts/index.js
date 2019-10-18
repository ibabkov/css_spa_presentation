(() => {
    const NEXT = 'PageDown';
    const PREV = 'PageUp';
    const SPACE = 32;
    const LEFT = 37;
    const RIGHT = 39;

    const isNavKey = (event) => {
      return event.key !== NEXT
          && event.key !== PREV
          && event.keyCode !== SPACE
          && event.keyCode !== LEFT
          && event.keyCode !== RIGHT;
    };
    const getWayMod = (event) => {
      return event.key === NEXT
      || event.keyCode === SPACE
      || event.keyCode === RIGHT
        ? 1
        : -1;
    };
    const getNextPageHash = (event) => {
      const currentHash = window.location.hash;
      const currentPageMatched = currentHash.match(/\d+/);
      const currentPage = currentPageMatched ? Number(currentPageMatched[0]) : 1;
      const mod = getWayMod(event);
      return `slide-${currentPage + mod}`;
    };

    document.addEventListener('keydown', (event) => {
        // if this is not navigation key - do nothing
        if(isNavKey(event)) {
            return;
        }

        // prevent scrolling
        event.preventDefault();

        const nextPageHash = getNextPageHash(event);

        // if there's no necessary selector  - do nothing
        if (!document.querySelector(`[href="#${nextPageHash}"]`)) {
            return;
        }

        document.location.hash = nextPageHash;
    });
})();