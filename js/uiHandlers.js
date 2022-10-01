


  function clearWords() {
    const tableBody = document.getElementById("table-words").getElementsByTagName('tbody')[0];
    tableBody.textContent = "";
  }

  function displayWords(data) {
    const tableBody = document.getElementById("table-words").getElementsByTagName('tbody')[0];

    let index = 0;
    data.forEach(word => {
        const row = tableBody.insertRow(index);
        index++;
        const soranganCell = row.insertCell(0);
        const baturCell = row.insertCell(1);
        const lomaCell = row.insertCell(2);
        const bindoCell = row.insertCell(3);
        const englishCell = row.insertCell(4);
        soranganCell.innerHTML = word.sorangan;
        baturCell.innerHTML = word.batur; 
        lomaCell.innerHTML = word.loma; 
        bindoCell.innerHTML = word.bindo; 
        englishCell.innerHTML = word.english; 
    });
  }

  function searchWords() {
    const substring = document.getElementById('substring').value;
    if (substring == "") {
        getAllWords(
        function (data) {
            clearWords();
            displayWords(data);
        }, 
        function () {
          console.log("Error");
        }
      );
    } else {
        getWordsBySubstring(
          substring,
          function (data) {
            clearWords();
            displayWords(data);
          },
          function () {
            console.log("Error");
          }
        )
    }
  }