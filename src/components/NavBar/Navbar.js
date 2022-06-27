import "./Navbar.css"
export default function Navbar (props) {
  return (
    <header>
      <h4>PLACE LOGO HEAR</h4> <button className="open menu" onClick={props.onClick}></button>
    </header>
  )
}