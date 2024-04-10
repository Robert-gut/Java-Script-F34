async function privatbank(url){
  try {
    const response = await fetch(url)
    const data = await response.json()
    
    const table = document.querySelector('tbody')
    table.innerHTML = ''
    data.forEach(currency => {
      const tr = document.createElement('tr')
      tr.innerHTML = `
      <td>${currency.ccy}</td>
      <td>${currency.base_ccy}</td>
      <td>${currency.buy}</td>
      <td>${currency.sale}</td>
      `
      table.appendChild(tr)
    });
  } catch (error) {
    console.error(error)
  }
}

const url = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5'
privatbank(url)

setInterval(()=>privatbank(url),60000)