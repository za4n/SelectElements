

 type element = {
    id : number,
    value : string,

    
  }
type s={
    value :element[],
    select : (id:number)=>void,
    ids:number[],
    remove:(id:number)=>void
}
const open = ()=>{
   const box = document.querySelector('.listItems');
   box?.classList.toggle('active');
   
}

const Single = ({value,select,ids , remove}:s) => {
  return (
    <div>
      <>
      <div className="box"onMouseEnter={open}>
         {value.filter(i=>ids.includes(i.id)).map(item=>{return<button key={item.id} className="item">{item.value} <span onClick={()=>{remove(item.id)}}>X</span> </button>})}
        <span onClick={open} className="close">O</span>
      <div className="listItems">
        <ul>
            {value.map(item=>{return <li className= {ids.includes(item.id) ? "selected":"unselected"} onClick={()=>select(item.id)} key = {item.id}>{item.value}</li>})}
        </ul>
      </div>
      </div>
      
      </>
    </div>
  )
}

export default Single
