function highlight() {
    //Write your code here
const boldWords=document.querySelectorAll('p strong');
	boldWords.forEach(word=>{
		word.style.color='green';
	})
}


function return_normal() {
    //Write your code here
const boldWords=document.querySelectorAll('p strong');
	boldWords.forEach(word=>{
		word.style.color='black'
	})
}
