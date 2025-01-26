public with sharing class RandomLWCHandler {

    @AuraEnabled
    public static String getDevName(Id recordId) {
        return recordId.getSObjectType().getDescribe().getName();
    }
}