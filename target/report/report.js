$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("qa/quotation/qaquotation.feature");
formatter.feature({
  "line": 2,
  "name": "QA Quotation Engine - Create a new member and create a new quote, verify verify the member.",
  "description": "\nAs a  admin\nI want to utilise endpoint of the QA Quotation Engine API\u0027s\nSo I can create new member\u0026  create quote to the member and verify the member",
  "id": "qa-quotation-engine---create-a-new-member-and-create-a-new-quote,-verify-verify-the-member.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@qaquatation"
    }
  ]
});
formatter.before({
  "duration": 375671240,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Verify as a admin i can Create and verify the member",
  "description": "",
  "id": "qa-quotation-engine---create-a-new-member-and-create-a-new-quote,-verify-verify-the-member.;verify-as-a-admin-i-can-create-and-verify-the-member",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "Create a new member using the POST request",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Create a new quote for the member using POST request",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Verify the the existing member",
  "keyword": "And "
});
formatter.match({
  "location": "QaQuotationSteps.createANewMemberPostRequest()"
});
formatter.result({
  "duration": 2854680000,
  "status": "passed"
});
formatter.match({
  "location": "QaQuotationSteps.createANewQuoteForMemberPOSTRequest()"
});
formatter.result({
  "duration": 2884075669,
  "status": "passed"
});
formatter.match({
  "location": "QaQuotationSteps.thenVerifyTheMemberWasCreatedWithCorrectData()"
});
formatter.result({
  "duration": 1429613646,
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nExpected status code \u003c200\u003e but was \u003c400\u003e.\n\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:83)\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:77)\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallConstructor(CallSiteArray.java:59)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:238)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:250)\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:494)\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:656)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:210)\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:59)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:169)\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:125)\n\tat io.restassured.specification.ResponseSpecification$statusCode$0.callCurrent(Unknown Source)\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:133)\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.statusCode(ValidatableResponseOptionsImpl.java:119)\n\tat com.qa.quotation.apitest.stepDefinitions.QaQuotationSteps.thenVerifyTheMemberWasCreatedWithCorrectData(QaQuotationSteps.java:63)\n\tat ✽.And Verify the the existing member(qa/quotation/qaquotation.feature:12)\n",
  "status": "failed"
});
formatter.after({
  "duration": 55322,
  "status": "passed"
});
});