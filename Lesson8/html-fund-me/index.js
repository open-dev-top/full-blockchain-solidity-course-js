async function connect() {
  if (typeof window.ethereum !== "undefined") {
    console.log("Your metamask has been detected!");
    await window.ethereum.request({
      method: "eth_requestAccounts",
      params: [],
    });
    console.log("Your metamask has been conected!");
    document.getElementById("connectButton").innerHTML = "CONNECTED";
  } else {
    console.log("Please install a metamask.");
    document.getElementById("connectButton").innerHTML = "ERROR";
  }
}
