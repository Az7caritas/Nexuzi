async function getPlayerCount() {
    const response = await fetch("https://games.roblox.com/v1/games/72308689229926");
    const data = await response.json();
    document.getElementById("player-count").innerText = data.playing || "0";
}
getPlayerCount();