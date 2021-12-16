
    $( function() {
		$("#txtFromDate").datepicker({
	        numberOfMonths: 1,
	        minDate:0,
	        onSelect: function(selected) {
	          $("#txtToDate").datepicker("option","minDate", selected);
           $("#txtToDate").datepicker("setDate", '+1y');
	        }
	    });
        
	    $("#txtToDate").datepicker({ 
	        numberOfMonths: 1,
            minDate:0,
	        onSelect: function(selected) {
	           $("#txtFromDate").datepicker("option","maxDate", selected)
	        }
	    });  
	   
	});
