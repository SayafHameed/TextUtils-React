import React from "react";
import { useState } from "react";
function TextForm(props) {
 
  const toUpper=()=> {
    newtext(text.toUpperCase())
    // console.log(text.split(" "))
    // newtext("hfyfibsfuysvwfiywbfuyv")
    if(text===''){
      props.show('No text in box','danger')
    }
    else{
     props.show('Converted to Uppercase','success')
  }
  }
  const toLower=()=> {
    newtext(text.toLowerCase())
    if(text===''){
      props.show('No text in box','danger')
    }
    else{
     props.show('Converted to Lowercase','success')
  }
  }
  const [text, newtext] = useState("");
  const handleOnChange=(e)=>{
    // console.log("......")
    newtext(e.target.value)
  }
  const resetText=()=>{
    newtext("")
    if(text===''){
      props.show('Text already cleared','danger')
    }
    else{
     props.show('Text cleared','success')
  }
  }
  function totalwords() {
   
    let words=text.split(" ").length-1;
    if( text.startsWith(" ")){
      words=words-1;
    }
   
    
    return words;
  }
  const copyText=()=>{
    // textCopied();
    var copyText = document.getElementById("floatingTextarea2");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
    if(text===''){
      props.show('No text in box','danger')
    }
    else{
     props.show('Copied to clipboard','success')
  }
    
  }
  // const textCopied=()=>{
  //   return 'Text Copied'
  // }
  
  return (
    <div className={`bg-${props.mode.backgroundColor} text-${props.mode.color} p-4`}>
      <h1>{props.heading}</h1>
      <textarea
        className={`form-control py-4 px-4  my-2 bg-${props.mode.backgroundColor} text-${props.mode.color}`}
        placeholder="Leave a text here..."
        id="floatingTextarea2"
        style={{ height: 100 }}
        // defaultValue={text}
        value={text}
        onChange={handleOnChange}
      />
      <div className="d-flex gap-2">
      <button className="btn btn-primary  p-2 w-100  " onClick={toUpper}>Convert to UpperCase</button>
        <button className="btn btn-primary p-2 w-100" onClick={toLower}>Convert to LowerCase</button>
         <button className="btn btn-primary p-2 w-100" onClick={resetText}>Reset</button>
        <button className="btn btn-primary p-2 w-100" onClick={copyText}>Copy</button>
      </div>
      <div className="Container">
        <h3 className="my-2">Text summary:</h3>
        <p>{totalwords()} words and {text.length} characters</p>
        </div>
        <h2>Preview: </h2><p>{text.length>0?text:'Enter the text in box to preview here..'}</p>
        {/* <p>{textCopied}</p> */}
    </div>
  );
}

export default TextForm;
