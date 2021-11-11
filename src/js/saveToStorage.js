export default function saveToStorage() {
  const taskBoardElement = document.body.querySelector('.board-wrapper');
  const taskBoardHtml = taskBoardElement.innerHTML;
  window.localStorage.setItem('one', JSON.stringify(taskBoardHtml));
}
