import React, {useState} from 'react'
export default function TextForm(prop) {
  const [text,setText] = useState('');
  const handleUpClick = () =>{
    let nt = text.toUpperCase();
    setText(nt)
  }
  const handleOnChange = (event)=>{
    setText(event.target.value)
  }
  const handleLoClick = ()=>{
    let lt = text.toLowerCase()
    setText(lt);
  }
  const handleCopy=()=>{
    navigator.clipboard.writeText(text);
  }
  return (
    <>
    <div className="container">
      <div className="mb-3">
      <h3>{prop.title}</h3>
      <textarea className="form-control" id = "myForm" value = {text} onChange = {handleOnChange} rows = "8"></textarea>
      </div>
      <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-2"  onClick = {handleUpClick}>Convert to upper case</button>
      <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-2"  onClick = {handleLoClick} >Convert to lower case</button>
      <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-2"  onClick = {handleCopy} >Copy text</button>
      <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-2"  onClick = {()=>{setText("")}} >Clear text</button>
    </div>
    <div className="container">
      <p>{text.length} characters and {text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words</p>
      <h3>Preview</h3>
      <p>{text.length > 0?text:"Enter to preview"}</p>
    </div>
    </>
  )
}
