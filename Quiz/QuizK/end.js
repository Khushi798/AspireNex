const finalScore = document.getElementById("finalScore");
const usernameInput = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const mostRecentScore = localStorage.getItem("mostRecentScore");

// Load mostRecentScore from localStorage
// TODO: navigate home if no previous score
if (!mostRecentScore) {
  window.location.href = "index.html";
} else {
  finalScore.innerHTML = `${mostRecentScore}<span>pts</span>`;
}

saveHighScore = (e) => {
  console.log("Save high score");
  e.preventDefault();

  // Add the score, sort the array, and splice off starting at position 5
  highScores.push({ score: mostRecentScore, username: usernameInput.value });
  highScores.sort((a, b) => b.score - a.score);
  highScores.splice(5);

  // Save to local storage for next time
  localStorage.setItem("highScores", JSON.stringify(highScores));

  // Go home
  window.location.href = "index.html";
};

usernameInput.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !usernameInput.value;
});

