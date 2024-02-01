if (process.client) {
  const CSSescape = require('css.escape')

  if (!window.CSS) {
    window.CSS = {}
  }

  window.CSS.escape = CSSescape.escape
}
