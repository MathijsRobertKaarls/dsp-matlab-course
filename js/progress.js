// Progress tracking via localStorage
const Progress = (() => {
  const KEY = 'dsp-course-progress';

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; }
    catch { return {}; }
  }
  function save(data) {
    localStorage.setItem(KEY, JSON.stringify(data));
  }
  function isComplete(topic) {
    return !!load()[topic];
  }
  function markComplete(topic) {
    const data = load();
    data[topic] = true;
    save(data);
  }
  function markIncomplete(topic) {
    const data = load();
    delete data[topic];
    save(data);
  }
  function toggle(topic) {
    isComplete(topic) ? markIncomplete(topic) : markComplete(topic);
  }

  return { isComplete, markComplete, markIncomplete, toggle };
})();
