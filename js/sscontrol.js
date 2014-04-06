<PUBLIC:COMPONENT TAGNAME="xss">
   <PUBLIC:ATTACH EVENT="ondocumentready" ONEVENT="main()" LITERALCONTENT="false"/>
</PUBLIC:COMPONENT>
<SCRIPT>
     function showMap(show, nextbutton, hide, hidebutton) {
						document.getElementById(nextbutton).style.display = 'block';
						document.getElementById(nextbutton).style.visibility = 'visible';
						document.getElementById(show).style.display = 'block';
						document.getElementById(hidebutton).style.display = 'none';
						document.getElementById(hide).style.display = 'none';
					}
</SCRIPT>