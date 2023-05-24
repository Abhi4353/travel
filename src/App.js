import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Numbers from "./pages/Numbers";
import New from "./pages/New";
function App() {
  const data = [2,7,8,54,3,5];
  const target = 57;

  const findthetargetlocation = (num, sum) => {
    if (num.length == 1) {
      return "Array length should be more than one";
    } else if (num.length == 0) {
      return "Array cannot be empty";
    }else if(num.length > 2){
      for(let i=0;i<=num.length;i++){
        for(let j=i+1;j<=num.length;j++){
          if(num[i]+num[j] == sum){
           return console.log([i,j])
          }
        }
      }
    }

    return num.length;
  };
  console.log("", findthetargetlocation(data, target));
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/numbers" element={<Numbers />} />
          {/* <Route exact path="/" element={<New />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
