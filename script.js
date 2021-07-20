// make an HTML table using tabletop.js


  //var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1EkjGnIGa2Cyw2IcUcdslkNwFCbwX3dc6Ipe7-AMs2ls/edit?usp=sharing';

  var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/19xjSPp6DV6ym9W4lZxGszxrzyDz9d5vw7zOiMrQ6I1Q/edit?usp=sharing';
 
  function init() {
    Tabletop.init( {
      key: publicSpreadsheetUrl,
      callback: showInfo,
      simpleSheet: true 
    } )
  }

 
  function showInfo(data) {

	//alert('Successfully processed!')
    console.log(data);
	console.log(JSON.stringify(data, null, 2));
  
	var html = "<tr>";
		  
	// double for-loops to do rows, cells in a table
	  for ( i = 0; i < data.length; i++ ) {
			  for ( prop in data[i] ) {
		  console.log(prop);
          

					  html += "<td>" + data[i][prop] + "</td>";
		  }
			  html += "</tr><tr>";// a = a+2 ==>  a +=2, html = html + "</tr><tr>" , a= a+1 , a++, a+=1
	  }
	  document.getElementById("test").innerHTML = html;
  
  }

  window.addEventListener('DOMContentLoaded', init)
