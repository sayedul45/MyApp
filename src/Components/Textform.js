import React ,{useState} from 'react'

export default function Textform(props) {
    const [Text, setText] = useState('Enter your text')
    const handleUpChange =(event)=>{
      console.log('On change granted')
      setText(event.target.value)
    }
    const handleUpClick =()=>{
        let newText=Text.toUpperCase();
        setText(newText)
    }
    const handlelowclick=()=>{
      let newText=Text.toLowerCase();
      setText(newText)
    }
    const handleClearClick =()=>{
      let newText="";
      setText(newText)
    }
    const handleCopy=()=>
    {
      var Text=document.getElementById("mybox")
      Text.select();
      navigator.clipboard.writeText(Text.value)
    }
    const  handleSpace=()=>{
      var newText=Text.split(/[ ]+/)
      setText(newText.join(" "))
    }
  return (
         <>
    <div className="mb-3">
         <label for="exampleFormControlInput1" className="form-label">Email address</label>
         <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
     </div>
     <div className="mb-2" style={{color: props.mode==='dark'?'white':'#8e92bd'}}>
          <h2>{props.heading}</h2>
          <div className="text">
          <label for="mybox" className="form-label">Example textarea</label>
          <textarea className="form-control" id="mybox" onChange={handleUpChange} value={Text} style={{backgroundColor: props.mode==='light'?'#ebe7dd':'white',color: props.mode==='dark'?'white':'#8e92bd'}} rows="8"></textarea> <br />
          </div>
           <div className="btn-toolbar" style={{color: props.mode==='dark'?'white':'#8e92bd'}}>
           <button type="button" className="btn btn-primary mx-1" onClick={handlelowclick}>Lowercase </button>
           <button type="button" className="btn btn-primary mx-1" onClick={handleUpClick}>Uppercase </button>  
           <button type="button" className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text </button>  
           <button type="button" className="btn btn-primary mx-1" onClick={handleCopy}>CopyText </button>  
           <button type="button" className="btn btn-primary mx-1" onClick={handleSpace}>RemoveSpace</button>  
           </div>
    </div>
    <div className="container my-1" style={{color: props.mode==='dark'?'white':'#8e92bd'}}>
      <h1>Your Text Summary</h1>
      <p>{Text.split(" ").length-1} words and {Text.length} characters</p>
      <p>{0.01*Text.split(" ").length}minuties taken for read</p>
      <h3>Preview</h3>
      <p>{Text}</p>
    </div>
    </>
  )
}
