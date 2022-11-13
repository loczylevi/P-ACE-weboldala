window.addEventListener(('load'), () => {
    if (document.querySelector('#heading') !== null) {
      window.sessionStorage.setItem('Heading', 'displayed');
    }
  })

  if (window.sessionStorage.getItem('Heading')) {
    document.querySelector('#heading').classList.remove('animated')
  }