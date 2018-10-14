({
	loadPickList : function(component) {
        debugger;
		var action = component.get("c.getAllPicklistMethod");        
        action.setCallback(this, function(result){
            var state = result.getState();
            if (component.isValid() && state === "SUCCESS")
            {
                if(result.getReturnValue()!=undefined){
                    var mapOfPicklist = result.getReturnValue(); 
                    component.set("v.conditionalSanctionOptions", mapOfPicklist['Conditions']);
                                        
                } 
            }
        });
        $A.enqueueAction(action);
	},
    updateRecodToDB : function(component,acclist,source) {
       var action = component.get("c.updateSelectedRecord");
        action.setParams({"setOfAccId":acclist,"accountSource":source
        });
        action.setCallback(this, function(result){
            var state = result.getState();
            if (component.isValid() && state === "SUCCESS"){
                console.log('update successfully');   
            }
        });
        $A.enqueueAction(action);
	}
})