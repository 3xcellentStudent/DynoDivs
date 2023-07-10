const root = document.querySelector('#root')

window.onload = async () => {
   const response = await fetch('http://localhost:5001/Space')
   const data = await response.json()

   jobWithDOM.getTiles(data)
}

class JobWithDOM{

   getTiles(data){
      data.map(tile => {
         const keys = Object.keys(tile).map(item => item)

         const header = tile[keys[1]]
         const lowerCase = header.toLowerCase()

         root.insertAdjacentHTML('beforeend', `<section class="${lowerCase}"><h2>${header}</h2></section>`)
         const section = document.querySelector(`.${lowerCase}`)
         section.insertAdjacentHTML('beforeend', '<ul style="width: 300px; height: 300px"></ul>')
         const ul = section.querySelector('ul')

         this.insertAtSection(ul, tile)
      })
   }
   
   insertAtSection(ul, tile){
      tile.Tiles.map((item, index) => {
         const keys = Object.keys(item).map(item => item)
         
         const order = item[keys[0]]
         const name = item[keys[1]]
         const width = item[keys[2]]
         const height = item[keys[3]]
         
         const styles = `grid-area:order${order};
         width:${width}px;
         height:${height}px;
         padding:5px;

         box-shadow: inset 0 0 0 2px #fff, inset 0 0 0 4px #000`
         ul.insertAdjacentHTML('beforeend', `<div style="${styles}">${name}</div>`)
      })
   }
}

const jobWithDOM = new JobWithDOM()