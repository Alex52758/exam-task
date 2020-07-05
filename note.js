let host = 'http://exam-2020-1-api.std-900.ist.mospolytech.ru/api/data1';

var myObj =
{
	init:function(){
		this.load_admArea();
		this.load_district();
	},
	load_admArea:function(){
		var xhr = new XMLHttpRequest();
		xhr.open('GET',host,true);
		xhr.onload = function(){
			var admArea = JSON.parse(xhr.responseText);
			admArea.forEach(function(value) {					
				var op = document.createElement('option');
				op.innerText = value.admArea;ff
				op.setAttribute('value',value.id);
				document.getElementById('admArea').appendChild(op);
			})
        }
        
		xhr.send();
	}
}
