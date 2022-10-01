


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
        const noCell = row.insertCell(0);
        const soranganCell = row.insertCell(1);
        const baturCell = row.insertCell(2);
        const lomaCell = row.insertCell(3);
        const bindoCell = row.insertCell(4);
        const englishCell = row.insertCell(5);
        noCell.innerHTML = "<b>"+index+"</b>";
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