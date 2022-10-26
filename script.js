let isExplorer = true
function changeCard(event) {
  const cardEvent = event.currentTarget
  const backgroundImage = isExplorer ? "ignite" : "explorer"
  isExplorer = !isExplorer
  cardEvent.style.backgroundImage = `url(./assets/bg-${backgroundImage}.svg)`
}
