let tableo = document.getElementById('tableo'), tablec = document.getElementById('tablec'), table = document.
getElementById('table');
var bodyheight = document.getElementById('body').scrollHeight;
tableo.onclick = function(){
   table.style.display = 'block';
   table.style.height = bodyheight + 'px';
}
tablec.onclick = function(){
   table.style.display = 'none';
}

