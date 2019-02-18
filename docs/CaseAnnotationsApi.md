# OldpApi.CaseAnnotationsApi

All URIs are relative to *https://de.openlegaldata.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**caseAnnotationsCreate**](CaseAnnotationsApi.md#caseAnnotationsCreate) | **POST** /case_annotations/ | 
[**caseAnnotationsDelete**](CaseAnnotationsApi.md#caseAnnotationsDelete) | **DELETE** /case_annotations/{id}/ | 
[**caseAnnotationsList**](CaseAnnotationsApi.md#caseAnnotationsList) | **GET** /case_annotations/ | 
[**caseAnnotationsPartialUpdate**](CaseAnnotationsApi.md#caseAnnotationsPartialUpdate) | **PATCH** /case_annotations/{id}/ | 
[**caseAnnotationsRead**](CaseAnnotationsApi.md#caseAnnotationsRead) | **GET** /case_annotations/{id}/ | 
[**caseAnnotationsUpdate**](CaseAnnotationsApi.md#caseAnnotationsUpdate) | **PUT** /case_annotations/{id}/ | 


<a name="caseAnnotationsCreate"></a>
# **caseAnnotationsCreate**
> CaseAnnotation caseAnnotationsCreate(data)





### Example
```javascript
var OldpApi = require('oldp-api');
var defaultClient = OldpApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new OldpApi.CaseAnnotationsApi();

var data = new OldpApi.CaseAnnotation(); // CaseAnnotation | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.caseAnnotationsCreate(data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**CaseAnnotation**](CaseAnnotation.md)|  | 

### Return type

[**CaseAnnotation**](CaseAnnotation.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="caseAnnotationsDelete"></a>
# **caseAnnotationsDelete**
> caseAnnotationsDelete(id, )





### Example
```javascript
var OldpApi = require('oldp-api');
var defaultClient = OldpApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new OldpApi.CaseAnnotationsApi();

var id = 56; // Number | A unique integer value identifying this case annotation.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.caseAnnotationsDelete(id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this case annotation. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="caseAnnotationsList"></a>
# **caseAnnotationsList**
> InlineResponse2001 caseAnnotationsList(opts)





### Example
```javascript
var OldpApi = require('oldp-api');
var defaultClient = OldpApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new OldpApi.CaseAnnotationsApi();

var opts = { 
  'belongsTo': 8.14, // Number | 
  'label': 8.14, // Number | 
  'limit': 56, // Number | Number of results to return per page.
  'offset': 56 // Number | The initial index from which to return the results.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.caseAnnotationsList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **belongsTo** | **Number**|  | [optional] 
 **label** | **Number**|  | [optional] 
 **limit** | **Number**| Number of results to return per page. | [optional] 
 **offset** | **Number**| The initial index from which to return the results. | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="caseAnnotationsPartialUpdate"></a>
# **caseAnnotationsPartialUpdate**
> CaseAnnotation caseAnnotationsPartialUpdate(id, data)





### Example
```javascript
var OldpApi = require('oldp-api');
var defaultClient = OldpApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new OldpApi.CaseAnnotationsApi();

var id = 56; // Number | A unique integer value identifying this case annotation.

var data = new OldpApi.CaseAnnotation(); // CaseAnnotation | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.caseAnnotationsPartialUpdate(id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this case annotation. | 
 **data** | [**CaseAnnotation**](CaseAnnotation.md)|  | 

### Return type

[**CaseAnnotation**](CaseAnnotation.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="caseAnnotationsRead"></a>
# **caseAnnotationsRead**
> CaseAnnotation caseAnnotationsRead(id, )





### Example
```javascript
var OldpApi = require('oldp-api');
var defaultClient = OldpApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new OldpApi.CaseAnnotationsApi();

var id = 56; // Number | A unique integer value identifying this case annotation.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.caseAnnotationsRead(id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this case annotation. | 

### Return type

[**CaseAnnotation**](CaseAnnotation.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="caseAnnotationsUpdate"></a>
# **caseAnnotationsUpdate**
> CaseAnnotation caseAnnotationsUpdate(id, data)





### Example
```javascript
var OldpApi = require('oldp-api');
var defaultClient = OldpApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new OldpApi.CaseAnnotationsApi();

var id = 56; // Number | A unique integer value identifying this case annotation.

var data = new OldpApi.CaseAnnotation(); // CaseAnnotation | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.caseAnnotationsUpdate(id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this case annotation. | 
 **data** | [**CaseAnnotation**](CaseAnnotation.md)|  | 

### Return type

[**CaseAnnotation**](CaseAnnotation.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

