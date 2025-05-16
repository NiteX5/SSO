document.addEventListener("DOMContentLoaded", () => {
  const disabilityData = [
    { month: "diciembre", value: 15, percentage: 50 },
    { month: "noviembre", value: 8, percentage: 27 },
    { month: "octubre", value: 5, percentage: 17 },
    { month: "septiembre", value: 12, percentage: 40 },
    { month: "agosto", value: 25, percentage: 83 },
    { month: "julio", value: 10, percentage: 33 },
    { month: "junio", value: 8, percentage: 27 },
    { month: "mayo", value: 30, percentage: 100 },
    { month: "abril", value: 5, percentage: 17 },
    { month: "marzo", value: 28, percentage: 93 },
    { month: "febrero", value: 15, percentage: 50 },
    { month: "enero", value: 18, percentage: 60 },
  ]

  const accidentProbabilityData = [
    { rank: 1, icon: "fa-solid fa-truck", area: "Taller de Camiones", count: 850, probability: 25 },
    { rank: 2, icon: "fa-solid fa-hard-hat", area: "Mina", count: 720, probability: 22 },
    { rank: 3, icon: "fa-solid fa-building", area: "Planta", count: 650, probability: 18 },
    { rank: 4, icon: "fa-solid fa-gas-pump", area: "Área de Combustible", count: 450, probability: 12 },
    { rank: 5, icon: "fa-solid fa-building-user", area: "Oficinas Administrativas", count: 400, probability: 8 },
    { rank: 6, icon: "fa-solid fa-warehouse", area: "Almacén", count: 350, probability: 5 },
    { rank: 7, icon: "fa-solid fa-hotel", area: "Hotel", count: 300, probability: 4 },
    { rank: 8, icon: "fa-solid fa-hospital", area: "Hospital", count: 250, probability: 3 },
    { rank: 9, icon: "fa-solid fa-utensils", area: "Casino", count: 200, probability: 2 },
    { rank: 10, icon: "fa-solid fa-door-open", area: "Entrada", count: 150, probability: 1 },
    { rank: 11, icon: "fa-solid fa-bus", area: "Tránsito", count: 100, probability: 0.5 },
  ]

  function renderDisabilityChart() {
    const chartContainer = document.getElementById("disabilityChart")
    chartContainer.innerHTML = ""

    disabilityData.forEach((item) => {
      const row = document.createElement("div")
      row.className = "flex items-center"

      const monthDiv = document.createElement("div")
      monthDiv.className = "w-28 text-sm"
      monthDiv.textContent = item.month

      const barContainer = document.createElement("div")
      barContainer.className = "flex-1 mx-2"

      const bar = document.createElement("div")
      bar.className = "h-5 bg-orange-500 rounded"
      bar.style.width = `${item.percentage}%`

      const valueDiv = document.createElement("div")
      valueDiv.className = "w-8 text-right"
      valueDiv.textContent = item.value

      barContainer.appendChild(bar)
      row.appendChild(monthDiv)
      row.appendChild(barContainer)
      row.appendChild(valueDiv)

      chartContainer.appendChild(row)
    })
  }

  function renderAccidentProbabilityTable() {
    const tableBody = document.getElementById("accidentProbabilityTableBody")
    tableBody.innerHTML = ""

    accidentProbabilityData.forEach((item) => {
      const row = document.createElement("tr")
      row.className = "border-b"

      const rankCell = document.createElement("td")
      rankCell.className = "py-3"
      rankCell.textContent = item.rank

      const areaCell = document.createElement("td")
      areaCell.className = "py-3"

      const areaDiv = document.createElement("div")
      areaDiv.className = "flex items-center"

      const icon = document.createElement("i")
      icon.className = `${item.icon} h-4 w-4`

      const areaSpan = document.createElement("span")
      areaSpan.className = "ml-2"
      areaSpan.textContent = item.area

      areaDiv.appendChild(icon)
      areaDiv.appendChild(areaSpan)
      areaCell.appendChild(areaDiv)

      const countCell = document.createElement("td")
      countCell.className = "py-3"
      countCell.textContent = item.count

      const probabilityCell = document.createElement("td")
      probabilityCell.className = "py-3"
      probabilityCell.textContent = `${item.probability}%`

      row.appendChild(rankCell)
      row.appendChild(areaCell)
      row.appendChild(countCell)
      row.appendChild(probabilityCell)

      tableBody.appendChild(row)
    })
  }

  function refreshAccidentData() {
    const newData = accidentProbabilityData.map((item) => {
      const variationFactor = Math.random() * 0.4 + 0.8
      const newCount = Math.round(item.count * variationFactor)

      const probVariation =
        item.rank <= 3
          ? Math.random() * 10 - 5
          : Math.random() * 4 - 2 

      let newProbability = item.probability + probVariation

      newProbability = Math.max(0.1, newProbability)

      newProbability = newProbability < 5 ? Math.round(newProbability * 10) / 10 : Math.round(newProbability)

      return {
        ...item,
        count: newCount,
        probability: newProbability,
      }
    })

    newData.sort((a, b) => b.probability - a.probability)

    for (let i = 0; i < newData.length; i++) {
      newData[i].rank = i + 1
    }

    accidentProbabilityData.length = 0
    newData.forEach((item) => accidentProbabilityData.push(item))

    renderAccidentProbabilityTable()
  }

  document.getElementById("refreshAccidentData").addEventListener("click", refreshAccidentData)

  renderDisabilityChart()
  renderAccidentProbabilityTable()
})
