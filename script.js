function firstNonRepeatedChar(str) {
 // Write your code here
var dict = {}
for (let ind =0; ind<=input.length-1; ind++){
  if(dict[input[ind]]==undefined){
    dict[input[ind]]=1;
  }
  else{
    dict[input[ind]]+=1;
  }
}
console.log(dict);
var flag =0;
for (var key in dict){
  if(dict[key] ==1){
	  input =key;
    console.log(key);
    flag=1;
  }
}
if(flag==0){
	input="null"
  console.log("null")
}

}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
