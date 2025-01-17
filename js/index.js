//1. Change the text of a <p> element using innerHTML.

<p id="text">Original text</p>
<button onCLick="change()">Chance text</button>

<script>
    function change(){
        document.getElementById("text").innerHTML = "changed text"
    }
</script>



//2. Change the color of a <div> when clicked.
<div id="colorDiv" style="background-color: blue"></div>
<button onCLick="change()">Change color</button>

<script>
    function change(){
        document.getElementById("colorDiv").style.backgroundColor = "yellow"
    }
</script>



//3.Change the background color of the webpage when a button is clicked.
<button onCLick="change">change button</button>

<script>
    function change() {
        document.body.style.backgroundColor = "black"
    }
</script>

//4.Add a new <li> to an existing <ul>.
<ul id="list">
    <li>item 1</li>
    <li>item 2</li>
</ul>

<button onCLick="add()">Add item</button>

<script>
    function add() {
        const li = document.createElement("li");
        li.textContent = "new item";
        document.getElementById("list").appendChild(li);
    }
</script>