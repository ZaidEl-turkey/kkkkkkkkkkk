document.getElementById('addBtn').addEventListener('click', addGoal);

function addGoal() {
    const goalInput = document.getElementById('goalInput');
    const goalText = goalInput.value.trim();
    
    if (goalText === '') {
        return;
    }
    
    const li = document.createElement('li');
    li.innerHTML = `${goalText} <button onclick="removeGoal(this)">Delete</button>`;
    document.getElementById('goalList').appendChild(li);
    
    goalInput.value = '';
}

function removeGoal(button) {
    button.parentElement.remove();
}
const resetBtn =document.getElementById("resetBtn");
const increaseBtn =document.getElementById("increaseBtn");
const countlabel =document.getElementById("countlabel");
let count =0 ;

increaseBtn.onclick= function(){
    count++;
    countlabel.textContent=count;

}

resetBtn.onclick= function(){
    count=0;
    countlabel.textContent=count;

}
