/*********************************************************
  AccountAuraController Test class.
********************************************************
  Created By              Ankur Tripathi
  Date                    13-OCT-2018
**********************************************************/

 @isTest 
 public class AccountAuraControllerTest
 {
 
     @TestSetup
     static void createAccounts()
     {
         Account objAcc;
         List<Account> lstAccountToInsert = new List<Account>();
         
         // create 10 new accounts
         for(Integer i = 1; i <= 10; i++)
         {
             objAcc = new Account();
             objAcc.Name = 'Test Account ' + i;
             objAcc.AccountNumber = 'AccNum - ' + i;
             objAcc.AccountSource = 'Web';
             objAcc.AnnualRevenue = 100000 * i;
             objAcc.Type = 'Prospect';
             objAcc.Industry = 'Chemicals';
             lstAccountToInsert.add(objAcc);
         }
         
         insert lstAccountToInsert;
         
         Case objCase = new Case(         
         AccountId = lstAccountToInsert[1].Id,
         Status = 'Working',
         Origin = 'Phone');
         insert objCase;
     }
  
      static testMethod void validateAllMethods()
      {  
          List<Account> lstAccount = AccountAuraController.getAccountList();
          System.AssertEquals(lstAccount.size(),10);      
          List<String> lstAccId = new List<String>{lstAccount[0].id};
          List<String> lstAccIdForBulkDelete = new List<String>{lstAccount[0].Id, lstAccount[1].Id};
          AccountAuraController.displaySelectedRecord(lstAccId);
          AccountAuraController.updateSelectedRecord(lstAccId,'Web');
          AccountAuraController.deleteAccount(lstAccount[0].id);
          AccountAuraController.deleteSelectedAccount(lstAccIdForBulkDelete);
          AccountAuraController.getAllPicklistMethod();
          
          
      }
  }