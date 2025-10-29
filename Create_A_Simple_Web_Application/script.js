var form = document.getElementById("form");
var input = document.getElementById("input");
var list = document.getElementById("list");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  var text = input.value.trim();
    var li = document.createElement("li");
    li.innerText = text;
    
    var btn = document.createElement("button");

    btn.innerText = "Delete";
    btn.className = "delete-btn";

    btn.onclick = function() {
      li.remove();
    };

    li.appendChild(btn);
    list.appendChild(li);

    input.value = "";
});