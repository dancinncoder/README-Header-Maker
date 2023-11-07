
import './App.css';
import {useState} from 'react';

function App() {
  const [firstText, setFirstText] = useState("");
  const [secondText, setSecondText] = useState("");
  const [color, setColor] = useState({color: "black"});
  const [textStyle, setTextStyle] = useState("");

  function firstTextHandler (event) {
    setFirstText(event.target.value);
  }

  function secondTextHandler (event) {
    setSecondText(event.target.value);
  }

  function colorPickHandler (event) {
    const pickedColor = event.target.id;
    document.getElementById("background").style.backgroundColor = pickedColor;
    setColor({backgroundColor : {pickedColor}});
  }

  function textStyleHandler (event) {
    const pickedTextStyle =  event.target.id; //bold
    if (pickedTextStyle === "bold"){
        document.getElementById("firstText").style.fontWeight = pickedTextStyle;
      setTextStyle({fontWeight : {pickedTextStyle}});
    } else if (pickedTextStyle === "italic"){
        document.getElementById("firstText").style.fontStyle = pickedTextStyle;
      setTextStyle({fontStyle : {pickedTextStyle}});
    } else if(pickedTextStyle === "medium") {
        document.getElementById("firstText").style.fontSize = pickedTextStyle;
        setTextStyle({fontSize : {pickedTextStyle}});
    } else if (pickedTextStyle === "x-large") {
        document.getElementById("firstText").style.fontSize = pickedTextStyle;
        setTextStyle({fontSize : {pickedTextStyle}});
    } else if (pickedTextStyle === "xx-large"){
        document.getElementById("firstText").style.fontSize = pickedTextStyle;
        setTextStyle({fontSize : {pickedTextStyle}});
    }
    

    // console.log("textStyling", textStyling);
    // console.log("pickedTextStyle", pickedTextStyle);
      
    // 커서가 활성화 되어 있는 Input 태그의 아이디를 가져와 글자속성을 바꾸기

  }
  


  return (
    <div>
      <header>
        <h1>README Header Maker</h1>
      </header>
      <main>
        <div className="edit-area">
          <div id="background" className="preview-box">
            <p id="firstText" className="text-box">{firstText}</p>
            <p id="secondText" className="text-box">{secondText}</p>
          </div>
          <div className="edit-box">
            <div className="edit-input-box">
              <input value={firstText} onChange={(event) => {
                firstTextHandler(event);
                textStyleHandler(event);
              }}/>
              <input value ={secondText} onChange={(event) => {
                secondTextHandler(event);
                textStyleHandler(event);
              }}/>
            </div>
            <div className="edit-tool-box-top">
              <div>txt</div>
              <button id="bold" onClick={textStyleHandler}>Bold</button>
              <button id="italic" onClick={textStyleHandler}><i>i</i></button>
              <button id="medium" onClick={textStyleHandler}>S</button>
              <button id="x-large" onClick={textStyleHandler}>M</button>
              <button id="xx-large" onClick={textStyleHandler}>L</button>
            </div>
            <div className="edit-tool-box-bottom">
              <div>BG</div>
              <button id="white" onClick={colorPickHandler}>⬜</button>
              <button id="black" onClick={colorPickHandler}>⬛</button>
              <button id="blue" onClick={colorPickHandler}>🟦</button>
              <button id="orange" onClick={colorPickHandler}>🟧</button>
              <button id="red" onClick={colorPickHandler}>🟥</button>
            </div>
            <div className="edit-submit-box">
              <button>ERASE</button>
              <button>CREATE</button>
            </div>
          </div>
        </div>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
