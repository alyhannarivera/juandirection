$(function() 
		{ 
			$.ajax
			({
				url:'sample.xml',
				dataType:'xml',
				type:'GET',
				success:function(xml) 
				{
					var collection =[];
					$(xml).find('item').each(function() 
					{
						var $title = $(this).find("title").text();
						
						var $des = $(this).find("description").text();
						
						var $guid = $(this).find("guid").text();
						
						var pubDate = new Date($(this).find("pubDate").text());
						var day = pubDate.getDate();
						var month = pubDate.getMonth() + 1;
						var year = pubDate.getFullYear();
						var $date = day + '/' + month + '/' + year;

						var temp =
						{
							guid : $guid,
							street : $title,
							traffic : $des
						};
						
						collection.push(temp);
					})
					return collection;
				},
				error:function() 
				{
					alert("I am sorry, But I can't fetch that feed");
				}
			});
		});