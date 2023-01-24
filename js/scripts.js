window.addEventListener("load", function() {
  const form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
  };

  form.onsubmit = function(event) {
    event.preventDefault();
    const characterData = {
      name: document.querySelector("#name").value,
      class: document.querySelector("#class").value,
      race: document.querySelector("#race").value,
    }
    console.log(characterData);
  };

  document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();
    const doc = new jsPDF();
    doc.text("Character Name: " + document.querySelector("#characterName").value, 10, 10);
    doc.text("Character Class: " + document.querySelector("#characterClass").value, 10, 20);
    doc.text("Character Race: " + document.querySelector("#characterRace").value, 10, 30);
    doc.text("Character Background: " + document.querySelector("#characterBackground").value, 10, 40);
    doc.text("Character Alignment: " + document.querySelector("#characterAlignment").value, 10, 50);
    doc.text("Character Level: " + document.querySelector("#characterLevel").value, 10, 60);
    doc.text("Character Experience: " + document.querySelector("#characterExperience").value, 10, 70);
    doc.text("Strength: " + document.querySelector("#strength").value, 10, 80);
    doc.text("Dexterity: " + document.querySelector("#dexterity").value, 10, 90);
    doc.text("Constitution: " + document.querySelector("#constitution").value, 10, 100);
    doc.text("Intelligence: " + document.querySelector("#intelligence").value, 10, 110);
    doc.text("Wisdom: " + document.querySelector("#wisdom").value, 10, 120);
    doc.text("Charisma: " + document.querySelector("#charisma").value, 10, 130);
    doc.text("Armor Class: " + document.querySelector("#armorClass").value, 10, 140);
    doc.text("Initiative: " + document.querySelector("#initiative").value, 10, 150);
    doc.text("Speed: " + document.querySelector("#speed").value, 10, 160);
    doc.text("Hit Points: " + document.querySelector("#hitPoints").value, 10, 170);
    doc.text("Hit Dice: " + document.querySelector("#hitDice").value, 10, 180);
    doc.text("Hit Dice Type: " + document.querySelector("#hitDiceType").value, 10, 190);
    doc.text("Attacks and Spellcasting: " + document.querySelector("#attacksAndSpellcasting").value, 10, 200);
    doc.text("Equipment: " + document.querySelector("#equipment").value, 10, 210);
    doc.text("Personality Traits: " + document.querySelector("#personalityTraits").value, 10, 220);
    doc.text("Ideals: " + document.querySelector("#ideals").value, 10, 230);
    doc.text("Bonds: " + document.querySelector("#bonds").value, 10, 240);
    doc.text("Flaws: " + document.querySelector("#flaws").value, 10, 250);
    doc.text("Features and Traits: " + document.querySelector("#featuresAndTraits").value, 10, 260);
    doc.text("Other Proficiencies and Languages: " + document.querySelector("#otherProficienciesAndLanguages").value, 10, 270);
    doc.text("Spells: " + document.querySelector("#spells").value, 10, 280);
    doc.text("Notes: " + document.querySelector("#notes").value, 10, 290);
    doc.save("character_sheet.pdf");
  };
  

  const doc = new jsPDF();
doc.setProperties({
  title: 'D&D Character Sheet',
  subject: 'Generated using jsPDF',
  author: 'Your Name',
  keywords: 'D&D, character sheet, jsPDF',
});

  function updateOutput(inputId, outputId) {
    const input = document.querySelector(inputId).value;
    const output = document.querySelector(outputId);
    output.innerHTML = input;
  }

  const inputIds = ["#name", "#class", "#race", "#background", "#alignment", "#level", "#experience", "#strength", "#dexterity", "#constitution", "#intelligence", "#wisdom", "#charisma", "#armorClass", "#initiative", "#speed", "#hitPoints", "#hitDice", "#hitDiceType", "#attacksAndSpellcasting", "#equipment", "#personalityTraits", "#ideals", "#bonds", "#flaws", "#featuresAndTraits", "#otherProficienciesAndLanguages"];
  const outputIds = ["#nameOutput", "#classOutput", "#raceOutput", "#backgroundOutput", "#alignmentOutput", "#levelOutput", "#experienceOutput", "#strengthOutput", "#dexterityOutput", "#constitutionOutput", "#intelligenceOutput", "#wisdomOutput", "#charismaOutput", "#armorClassOutput", "#initiativeOutput", "#speedOutput", "#hitPointsOutput", "#hitDiceOutput", "#hitDiceTypeOutput", "#attacksAndSpellcastingOutput", "#equipmentOutput", "#personalityTraitsOutput", "#idealsOutput", "#bondsOutput", "#flawsOutput", "#featuresAndTraitsOutput", "#otherProficienciesAndLanguagesOutput"];

  for (let i = 0; i < inputIds.length; i++) {
    const inputId = inputIds[i];
    const outputId = outputIds[i];
    const input = document.querySelector(inputId);
    input.oninput = function() {
      updateOutput(inputId, outputId);
    }
  }
});
