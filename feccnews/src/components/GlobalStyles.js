import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html{
  font-size: 10px;
  color: #4F5665;
  &::-webkit-scrollbar{
            width: .9rem;
        }
    &::-webkit-scrollbar-thumb{
            background-color:  #000000;
        }
    &::-webkit-scrollbar-track {
    background: white;
        }
        
}
body{
    background-color: #ffffff;
    font-family: 'Rubik', sans-serif;
    
}
a{
  text-decoration: none;
  font-size: 1.1rem;
  color: #4F5665;
}
ul {
  list-style: none;
}
  
`;

export default GlobalStyles;
