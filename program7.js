function capitalizeElement(str, element) {
  if (element === 'first') {
      
      return str.charAt(0).toUpperCase() + str.slice(1);
  } else if (element === 'last') {
      
      return str.slice(0, -1) + str.charAt(str.length - 1).toUpperCase();
  } else if (element === 'middle') {
     
      const middleIndex = (str.length - 1) / 2; 
      return str.slice(0, middleIndex) + 
             str.charAt(middleIndex).toUpperCase() + 
             str.slice(middleIndex + 1);
  } else {
      return str; 
  }
}

console.log(capitalizeElement("hello", "first"));  
console.log(capitalizeElement("hello", "last"));   
console.log(capitalizeElement("hello", "middle")); 
