
import './App.css';
import {useState} from 'react';
import { useEffect } from 'react';
import { useRef} from 'react';


function App() {
  const [firstText, setFirstText] = useState("");
  const [secondText, setSecondText] = useState("");
  const [color, setColor] = useState({color: "white"});
  const [textStyle, setTextStyle] = useState("");
  const firstTextBox = useRef("");
  
  function Erase (event){
    setFirstText("");
    setSecondText("");
    setColor({color: "black"});
    setTextStyle("");
  }

  useEffect(()=> {
    firstTextBox.current.focus();
    console.log("포커스되었다!");
  }, []);


  function firstTextHandler (event) {
    setFirstText(event.target.value);
  }

  function secondTextHandler (event) {
    setSecondText(event.target.value);
  }

  function colorPickHandler (event) {
    const pickedColor = event.target.id;
    document.getElementById("background").style.backgroundColor = pickedColor;
    // setColor({backgroundColor : {pickedColor}});
  }

  function textStyleHandler (event) {
    const pickedTextStyle =  event.target.id; //bold
    if (pickedTextStyle === "bold"){
        document.getElementById("firstText").style.fontWeight = pickedTextStyle;
      // setTextStyle({fontWeight : {pickedTextStyle}});
    } else if (pickedTextStyle === "italic"){
        document.getElementById("firstText").style.fontStyle = pickedTextStyle;
      // setTextStyle({fontStyle : {pickedTextStyle}});
    } else if(pickedTextStyle === "medium") {
        document.getElementById("firstText").style.fontSize = pickedTextStyle;
        // setTextStyle({fontSize : {pickedTextStyle}});
    } else if (pickedTextStyle === "x-large") {
        document.getElementById("firstText").style.fontSize = pickedTextStyle;
        // setTextStyle({fontSize : {pickedTextStyle}});
    } else if (pickedTextStyle === "xx-large"){
        document.getElementById("firstText").style.fontSize = pickedTextStyle;
        // setTextStyle({fontSize : {pickedTextStyle}});
    }
    

    // console.log("textStyling", textStyling);
    // console.log("pickedTextStyle", pickedTextStyle);
      
    // 커서가 활성화 되어 있는 Input 태그의 아이디를 가져와 글자속성을 바꾸기
    // useState 를 통해서 변화주는 코드로 바꾸기 현재는 DOM 직접 접근을 통해서 변화됨

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
              <input ref={firstTextBox} value={firstText} onChange={(event) => {
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
              <button alt="white" id="white" onClick={colorPickHandler}></button>
              <button alt="black" id="black" onClick={colorPickHandler}></button>
              <button alt="blue" id="#d4faff" className="blue" onClick={colorPickHandler}></button>
              <button alt="orange" id="#fceaca" className="orange" onClick={colorPickHandler}></button>
              <button alt="red" id="#f5e1e1" className="red" onClick={colorPickHandler}></button>
            </div>
            <div className="edit-submit-box">
              <button onClick={Erase}>ERASE</button>
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




// import './App.css';
// import {useState} from 'react';
// import { useEffect } from 'react';
// import { useRef} from 'react';

// function App() {
//   const [firstText, setFirstText] = useState("");
//   const [secondText, setSecondText] = useState("");
//   const [color, setColor] = useState({color: "black"});
//   const [textStyle, setTextStyle] = useState("");
//   const firstTextBox = useRef("");

//   useEffect(()=> {
//     firstTextBox.current.focus();
//     console.log("포커스되었다!");
//   }, []);


//   function firstTextHandler (event) {
//     setFirstText(event.target.value);
//   }

//   function secondTextHandler (event) {
//     setSecondText(event.target.value);
//   }

//   function colorPickHandler (event) {
//     const pickedColor = event.target.id;
//     document.getElementById("background").style.backgroundColor = pickedColor;
//     setColor({backgroundColor : {pickedColor}});
//   }

//   function textStyleHandler (event) {
//     const pickedTextStyle =  event.target.id; //bold
//     if (pickedTextStyle === "bold"){
//         document.getElementById("firstText").style.fontWeight = pickedTextStyle;
//       setTextStyle({fontWeight : {pickedTextStyle}});
//     } else if (pickedTextStyle === "italic"){
//         document.getElementById("firstText").style.fontStyle = pickedTextStyle;
//       setTextStyle({fontStyle : {pickedTextStyle}});
//     } else if(pickedTextStyle === "medium") {
//         document.getElementById("firstText").style.fontSize = pickedTextStyle;
//         setTextStyle({fontSize : {pickedTextStyle}});
//     } else if (pickedTextStyle === "x-large") {
//         document.getElementById("firstText").style.fontSize = pickedTextStyle;
//         setTextStyle({fontSize : {pickedTextStyle}});
//     } else if (pickedTextStyle === "xx-large"){
//         document.getElementById("firstText").style.fontSize = pickedTextStyle;
//         setTextStyle({fontSize : {pickedTextStyle}});
//     }
    

//     // console.log("textStyling", textStyling);
//     // console.log("pickedTextStyle", pickedTextStyle);
      
//     // 커서가 활성화 되어 있는 Input 태그의 아이디를 가져와 글자속성을 바꾸기

//   }
  


//   return (
//     <div>
//       <header>
//         <h1>README Header Maker</h1>
//       </header>
//       <main>
//         <div className="edit-area">
//           <div id="background" className="preview-box">
//             <p id="firstText" className="text-box">{firstText}</p>
//             <p id="secondText" className="text-box">{secondText}</p>
//           </div>
//           <div className="edit-box">
//             <div className="edit-input-box">
//               <input ref={firstTextBox} value={firstText} onChange={(event) => {
//                 firstTextHandler(event);
//                 textStyleHandler(event);
//               }}/>
//               <input value ={secondText} onChange={(event) => {
//                 secondTextHandler(event);
//                 textStyleHandler(event);
//               }}/>
//             </div>
//             <div className="edit-tool-box-top">
//               <div>txt</div>
//               <button id="bold" onClick={textStyleHandler}>Bold</button>
//               <button id="italic" onClick={textStyleHandler}><i>i</i></button>
//               <button id="medium" onClick={textStyleHandler}>S</button>
//               <button id="x-large" onClick={textStyleHandler}>M</button>
//               <button id="xx-large" onClick={textStyleHandler}>L</button>
//             </div>
//             <div className="edit-tool-box-bottom">
//               <div>BG</div>
//               <button id="white" onClick={colorPickHandler}>⬜</button>
//               <button id="black" onClick={colorPickHandler}>⬛</button>
//               <button id="blue" onClick={colorPickHandler}>🟦</button>
//               <button id="orange" onClick={colorPickHandler}>🟧</button>
//               <button id="red" onClick={colorPickHandler}>🟥</button>
//             </div>
//             <div className="edit-submit-box">
//               <button>ERASE</button>
//               <button>CREATE</button>
//             </div>
//           </div>
//         </div>
//       </main>
//       <footer>

//       </footer>
//     </div>
//   );
// }

// export default App;
