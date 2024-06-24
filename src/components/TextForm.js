import React, {useState} from 'react'

export default function TextForm(props) {

const [text, setText] = useState('');

const handleUpClick = () => {
    //console.log("upper case was clicked"+ text);
    let newText =text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
}

const handleLoClick = () => {
    //console.log("Lower case was clicked"+ text);
    let newText =text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
}

const handleOnReset = () => {
    //console.log("Reset was clicked"+ text);
    let newText =" ";
    setText(newText);
    props.showAlert("Text Reseted", "success");
}

const handleOnReverse = () => {
    //console.log("Lower case was clicked"+ text);
    let newText =text.split('').reverse().join('');
    setText(newText);
    props.showAlert("Text is Reversed", "success");
}

const handleOnRemoveVowels = () => {
    //console.log("Lower case was clicked"+ text);
    let newText =text.replace(/[AEIOUaeiou]/g , '');
    setText(newText);
    props.showAlert("Vowels removed from Text", "success");
}

const handleOnChange = (event) => {
    //console.log("on change");
    setText(event.target.value);
}

  return (
    <>
    <div className="container" style={{color : props.mode==='light'? 'black':'white'}}>
        <h1 className='mb-4'>{props.heading}</h1>
        
        <div className="mb-3">
        <textarea className="form-control" style={{backgroundColor : props.mode==='dark'? '#13466e':'white', color: props.mode==='light'? 'black':'white'}} id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
        </div>

        <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={handleUpClick} >Convert to UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={handleLoClick} >Convert to UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={handleOnReverse} >Reverse Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={handleOnRemoveVowels} >Remove Vowels from Text</button>

        <button disabled={text.length===0} className="btn btn-primary mx-3" onClick={handleOnReset} >Reset Text</button>
    </div>
    <div className="container my-3" style={{color : props.mode==='light'? 'black':'white'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(/\s+/).filter((element) => element.length !== 0).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element) => element.length !== 0).length} Minutes to read</p>

        <h2>Preview</h2>
        <p style={{ color: props.mode === 'light' ? 'black' : 'white' }}>{text.length>0?text: "Nothing to Preview"}</p>
    </div>
    </>
    
  )
}
