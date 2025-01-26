const storyData = {
    start: {
      text: "You find yourself at a crossroads in a dark forest. Which path do you take?",
      choices: [
        { text: "Take the left path", next: "leftPath" },
        { text: "Take the right path", next: "rightPath" },
      ],
    },
    leftPath: {
      text: "You encounter a friendly traveler who offers to guide you. What do you do?",
      choices: [
        { text: "Follow the traveler", next: "travelerGuide" },
        { text: "Decline and continue alone", next: "continueAlone" },
      ],
    },
    rightPath: {
      text: "You find a mysterious cave. Do you go inside?",
      choices: [
        { text: "Enter the cave", next: "enterCave" },
        { text: "Stay outside", next: "stayOutside" },
      ],
    },
    travelerGuide: {
      text: "The traveler leads you to a hidden village. The villagers invite you to stay and share their wisdom. Do you accept?",
      choices: [
        { text: "Stay in the village", next: "stayVillage" },
        { text: "Continue your journey", next: "journeyAlone" },
      ],
    },
    continueAlone: {
      text: "You get lost in the forest and have to turn back. The End.",
      choices: [],
    },
    enterCave: {
      text: "Inside the cave, you find a treasure chest. However, a shadowy figure appears. Do you open the chest or confront the figure?",
      choices: [
        { text: "Open the chest", next: "openChest" },
        { text: "Confront the figure", next: "confrontFigure" },
      ],
    },
    stayOutside: {
      text: "You decide to camp outside and rest. During the night, you hear strange noises. Do you investigate or stay in your tent?",
      choices: [
        { text: "Investigate the noise", next: "investigateNoise" },
        { text: "Stay in the tent", next: "stayTent" },
      ],
    },
    stayVillage: {
      text: "You spend your days learning from the villagers and live a peaceful life. The End.",
      choices: [],
    },
    journeyAlone: {
      text: "You continue your journey and eventually find your way out of the forest, wiser from your experiences. The End.",
      choices: [],
    },
    openChest: {
      text: "The chest is filled with gold and jewels. You leave the cave as a rich adventurer. The End.",
      choices: [],
    },
    confrontFigure: {
      text: "The shadowy figure turns out to be a guardian spirit. Impressed by your bravery, it grants you safe passage out of the forest. The End.",
      choices: [],
    },
    investigateNoise: {
      text: "You find a group of animals huddled together. They seem friendly and guide you to a safe path. The End.",
      choices: [],
    },
    stayTent: {
      text: "You remain in the tent and wake up safely in the morning, ready to continue your journey. The End.",
      choices: [],
    },
  };
  
  let currentStep = localStorage.getItem("storyStep") || "start";
  
  function updateProgress() {
    const progressKeys = Object.keys(storyData);
    const progress = (progressKeys.indexOf(currentStep) / (progressKeys.length - 1)) * 100;
    document.getElementById("progress-bar").style.width = `${progress}%`;
  }
  
  function loadStep(stepKey) {
    currentStep = stepKey;
    localStorage.setItem("storyStep", currentStep);
  
    const step = storyData[stepKey];
    const storyText = document.getElementById("story-text");
    const choicesContainer = document.getElementById("choices");
  
    storyText.textContent = step.text;
    choicesContainer.innerHTML = "";
  
    step.choices.forEach((choice) => {
      const button = document.createElement("button");
      button.classList.add("choice-button");
      button.textContent = choice.text;
      button.addEventListener("click", () => loadStep(choice.next));
      choicesContainer.appendChild(button);
    });
  
    updateProgress();
  }
  
  document.getElementById("reset-button").addEventListener("click", () => {
    currentStep = "start";
    localStorage.removeItem("storyStep");
    loadStep(currentStep);
  });
  
  loadStep(currentStep);
  