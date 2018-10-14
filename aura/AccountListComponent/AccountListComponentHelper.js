({
	getAccountList : function(component, event, helper) {
        var action = component.get("c.getAccountList");
        action.setParams({
        });
        action.setCallback(this, function(result){
            var state = result.getState();
            if (component.isValid() && state === "SUCCESS"){
                component.set("v.accountList",result.getReturnValue());   
            }
        });
        $A.enqueueAction(action);
    },
    /*getAccountDetails : function(component, event, selectedAccounts) {
               
        var action = component.get("c.getAccountDetail");
        action.setParams({setOfAccId:selectedAccounts
        });
        action.setCallback(this, function(result){
            var state = result.getState();
            if (component.isValid() && state === "SUCCESS"){
                component.set("v.objAccount",result.getReturnValue());   
            }
        });
        $A.enqueueAction(action);
		
	},*/
    deleteAccount : function(component, selectedAccount) {
        debugger;
        var action = component.get("c.deleteAccount");
        action.setParams({"accountId":selectedAccount
        });
        action.setCallback(this, function(result){
            var state = result.getState();
            if (component.isValid() && state === "SUCCESS"){
                window.location.reload();
            }
        });
        $A.enqueueAction(action);
    },
    deleteAccountsBulk: function(component, accountToDeleteId) {

	 console.log('selectedAccounts-' + accountToDeleteId);
        var action = component.get("c.deleteSelectedAccount");
        action.setParams({setOfAccId:accountToDeleteId
        });
        action.setCallback(this, function(result){
            var state = result.getState();
            if (component.isValid() && state === "SUCCESS")
			{
                if (result.getReturnValue() != '')
				{
					alert('The following error has occurred. while Delete record-->' + result.getReturnValue());
				} 
				else 
				{
					console.log('check it--> delete successful');
				} 
                //helper.doLoad(component, event, helper);
                window.location.reload();
            }
        });
        $A.enqueueAction(action);
 }
})