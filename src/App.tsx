import React from "react";
import { DefaultValue, useRecoilState, useRecoilValue } from "recoil";
import {createGlobalStyle, DefaultTheme} from "styled-components";
import reset from "styled-reset";
import { hourSelector, minuteState } from "./atoms.tsx";

const GlobalStyle = createGlobalStyle<{theme: DefaultTheme}>`
  ${reset};
  @font-face {
      font-family: 'NEXON Lv2 Gothic';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv2 Gothic.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }
  *{
    font-family: 'NEXON Lv2 Gothic';
  }
  body{
    background-color: #141414;
    color: white;
  }
`

function App() {
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const [hours, setHours] = useRecoilState(hourSelector);
  const onMinutesChange = (event:React.FormEvent<HTMLInputElement>) => {
    // minutes 세팅
    setMinutes(+event.currentTarget.value);
  };
  const onHoursChange = (event:React.FormEvent<HTMLInputElement>) => {
    setHours(event.currentTarget.value)
  };
  return (
    <>
      <GlobalStyle/>
      <div>
        <input 
          value={minutes} 
          onChange={onMinutesChange} 
          type="number" 
          placeholder="Minutes" 
        />
        <input 
          value={hours} 
          onChange={onHoursChange}
          type="number" 
          placeholder="Hours" 
        />
      </div>
    </>
  );
}

export default App