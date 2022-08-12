module.exports = function check(str, bracketsConfig){
  let countA = 0;
  let countB = 0;
  let countC = 0;
  let countD = 0;
  
  for (let i = 0; i < str.length; i++){
    if(str[i] == '('){
      countA++
    }if(str[i] == '['){
      countB++
    }if(str[i] == '{'){
      countC++
    }if(str[i] == '|'){
      countD++
    }if(str[i] == ')'){
      if(countA == 0){
        return false
      }else{
        countA--
      }
    }if(str[i] == ']'){
      if(countB == 0){
        return false
      }else{
        countB--
      }
    }if(str[i] == '}'){
      if(countC == 0){
        return false
      }else{
        countC--
      }
    }if(str[i] == '|'){
      if(countD == 0){
        return false
      }else{
        countD--
      }
    }
  }
  
    if (countA == 0 && countB ==0 && countC == 0 && countD == 0){
      return true
    }else{
      return false
    }
}
