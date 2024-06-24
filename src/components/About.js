import React, {useState} from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState(
    //     {
    //         color:'black',
    //         backgroundColor: 'white',
    //     }
    // );


let myStyle ={
    color: props.mode === 'dark'?'white':'black',
    backgroundColor: props.mode === 'dark'?'#042743':'white'
}

  return (
    <div className="container" style={myStyle}>
        <h1>About </h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Introduction to TextUtils</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={myStyle}>
                <div className="accordion-body" style={myStyle}>
                    <strong>TextUtils</strong> is a handy app for all your text needs. 
                    It lets you count words and characters, change text to uppercase or lowercase, remove vowels, and reverse text. 
                    Easy to use and perfect for students, writers, and anyone who works with text.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Text Manipulation Tools</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={myStyle}> 
                <div className="accordion-body" style={myStyle}>
                        With <strong>TextUtils</strong>, you can quickly count words and characters in your text. 
                        Need to switch between uppercase and lowercase? Just one click and it's done. 
                        You can also remove vowels or reverse your text effortlessly, making your text editing tasks simple and fast.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>User-Friendly Design</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={myStyle}>
                <div className="accordion-body" style={myStyle}>
                    <strong> TextUtils </strong> is designed to be user-friendly. 
                    It offers both light and dark modes, so you can choose what works best for you. 
                    The clean and simple interface ensures that anyone can use it without any hassle.
                </div>
                </div>

            </div>
            
            
</div>
    </div>
  )
}
