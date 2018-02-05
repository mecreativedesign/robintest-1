  
        $("#form-contents").hide();
		var applicationidKey = localStorage.getItem('applicationidKey');
		if(!applicationidKey) {
			applicationidKey = 1;
			$("[name='applicationid']").val(1);
		} else{
			applicationidKey = parseInt(applicationidKey) + 1;
			$("[name='applicationid']").val(applicationidKey);
		}
        
        $("#btn_iaccept")
            .click(function(e) {                                                
                $("#form-contents").show();
                $("#terms-policy").hide();
        });
        if(Modernizr.localstorage){
            // browser supports it
            $(function() {
               
               $("#saveData")
                    .click(function(e) {

                        e.preventDefault();
						
                        var appid = $("[name='applicationid']").val();
						var data = $("#msform").serializeArray();							
						data.pop();
						localStorage.setItem('applicationidKey', applicationidKey);
						localStorage.setItem(data[0].value, JSON.stringify(data));
						
						if($("[name='rules']:checked").val()=='yes') {
													
							alert('Congratulations your account is opened!' + ' and your account number is BANKASIA00' + appid);
						} else{
							alert('Your application rejected! Please contact with +004-454423332' + ' and your account number is BANKASIA00' + appid);
						} 
						location.reload();
                    });
                    

                 $("#retdata")
                    .click(function(e) {
                        e.preventDefault();
                        var trackid = $("#appid").val();
                        
                        var data = localStorage.getItem(trackid);
						if(data) {
							data = JSON.parse(data);

							$.each(data, function(i,obj){
								
								$("[name='" + obj.name +"']").val(obj.value);
							}); 
						} else {
							alert('No matching!');
							return;
						}
                    });
            });
        }        