/* ------------------------------------------------------------------
   EDITION CONFIG — the only file to touch when a new GINA report drops.
   1. Create a new folder, e.g. content/gina-2027/, with the same 5 files
      (meta.js, topics.js, data.js, learning.js, whatsnew.js) — see SCHEMA.md.
   2. Add the edition to the list below.
   3. Change activeEdition to the new id.
   Older editions stay loadable in read-only "archive" mode.
------------------------------------------------------------------- */
window.GINA = window.GINA || { editions: {} };
window.GINA.register = function (edition, part, value) {
  window.GINA.editions[edition] = window.GINA.editions[edition] || {};
  window.GINA.editions[edition][part] = value;
};

window.GINA.config = {
  activeEdition: "2026",
  editions: [
    {
      id: "2026",
      label: "GINA 2026",
      released: "May 2026",
      source: "Global Strategy for Asthma Management and Prevention, 2026 update",
      folder: "content/gina-2026",
      files: ["meta.js", "topics.js", "data.js", "learning.js", "whatsnew.js", "consultant.js"]
    }
    /* Example for the next edition:
    ,{ id: "2027", label: "GINA 2027", released: "May 2027",
       source: "Global Strategy for Asthma Management and Prevention, 2027 update",
       folder: "content/gina-2027",
       files: ["meta.js","topics.js","data.js","learning.js","whatsnew.js"] }
    */
  ]
};
