

import { printBlogPost, printCodeDrawerPost, printWordMemorization } from "./printPosts.js";
import pathHelperWhenLocal from "./pathHelperWhenLocal.js";

const handleAjaxLinkEvent = () => {
  const links = document.querySelectorAll('a.ajax-link');

  links.forEach(link => {
      link.addEventListener('click', ((e) => {
      e.preventDefault();
      history.replaceState(null, '', e.target.href);
  
      const urlPathname = new URL(location.href).pathname;
  
      if (urlPathname.includes('blog')) printBlogPost.render(true)
      else if (urlPathname.includes('code-drawer')) printCodeDrawerPost.render(true)
      else if (urlPathname.includes('word-memorization')) printWordMemorization.render();
      
      pathHelperWhenLocal();
      handleAjaxLinkEvent();
      }));
  });
};

export default handleAjaxLinkEvent;