({
	doInit : function(component, event, helper) {
        //component.set("v.isActive",true);
        helper.loadPickList(component);
	},    
    saveRecord : function(component, event, helper){
        var source = component.get("v.selectedAccountSource");
       //alert(source);
        var acclist = component.get("v.selectedAccounts");
        console.log('=='+acclist);
        //alert(acclist);
        component.set("v.isActive",false);
        helper.updateRecodToDB(component,acclist,source);
        window.location.reload();
	},
    onSelectChange : function(component, event, helper) {
        var selected = component.find("ConId").get("v.value");
        component.set("v.selectedAccountSource",selected);
        
    },
    cancelAccount : function(component, event, helper){  
        component.set("v.isActive",false);
    }
})