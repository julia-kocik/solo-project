{
  const navLinks = document.querySelectorAll('.links ul li a');
  const pages = document.querySelectorAll('.page');
  const hamburger = document.querySelector('.hamburger-btn a');
  const sidebarContent = document.querySelector('.sidebar');

  const initPages = () => {
    const idFromHash = window.location.hash.replace('#', '');

    let pageMatchingHash = pages[0].id;

    for (let page of pages) {
      if (page.id == idFromHash) {
        pageMatchingHash = page.id;
        break;
      }
    }

    activatePage(pageMatchingHash);

    for (const link of navLinks) {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const id = event.currentTarget.getAttribute('href').replace('#', '');
        activatePage(id);
        window.location.hash = '#/' + id;
      });
    }
  };

  const activatePage = (pageId) => {
    for (let page of pages) {
      page.classList.toggle('page-active', page.id == pageId);
    }
    for (let link of navLinks) {
      link.classList.toggle(
        'link-active',
        link.getAttribute('href') == '#' + pageId
      );
    }
  };

  const initSidebar = () => {
    hamburger.addEventListener('click', () => {
      sidebarContent.classList.toggle('sidebar-active');
    });
  };

  const app = () => {
    initPages();
    initSidebar();
  };

  app();
}