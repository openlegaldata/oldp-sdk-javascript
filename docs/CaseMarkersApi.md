# OldpApi.CaseMarkersApi

All URIs are relative to *https://de.openlegaldata.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**caseMarkersCreate**](CaseMarkersApi.md#caseMarkersCreate) | **POST** /case_markers/ | 
[**caseMarkersDelete**](CaseMarkersApi.md#caseMarkersDelete) | **DELETE** /case_markers/{id}/ | 
[**caseMarkersList**](CaseMarkersApi.md#caseMarkersList) | **GET** /case_markers/ | 
[**caseMarkersPartialUpdate**](CaseMarkersApi.md#caseMarkersPartialUpdate) | **PATCH** /case_markers/{id}/ | 
[**caseMarkersRead**](CaseMarkersApi.md#caseMarkersRead) | **GET** /case_markers/{id}/ | 
[**caseMarkersUpdate**](CaseMarkersApi.md#caseMarkersUpdate) | **PUT** /case_markers/{id}/ | 


<a name="caseMarkersCreate"></a>
# **caseMarkersCreate**
> CaseMarker caseMarkersCreate(data)





### Example
```javascript
var OldpApi = require('oldp-api');
var defaultClient = OldpApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new OldpApi.CaseMarkersApi();

var data = new OldpApi.CaseMarker(); // CaseMarker | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.caseMarkersCreate(data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**CaseMarker**](CaseMarker.md)|  | 

### Return type

[**CaseMarker**](CaseMarker.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="caseMarkersDelete"></a>
# **caseMarkersDelete**
> caseMarkersDelete(id, )





### Example
```javascript
var OldpApi = require('oldp-api');
var defaultClient = OldpApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new OldpApi.CaseMarkersApi();

var id = 56; // Number | A unique integer value identifying this case marker.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.caseMarkersDelete(id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this case marker. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="caseMarkersList"></a>
# **caseMarkersList**
> InlineResponse2002 caseMarkersList(opts)





### Example
```javascript
var OldpApi = require('oldp-api');
var defaultClient = OldpApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new OldpApi.CaseMarkersApi();

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
apiInstance.caseMarkersList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **belongsTo** | **Number**|  | [optional] 
 **label** | **Number**|  | [optional] 
 **limit** | **Number**| Number of results to return per page. | [optional] 
 **offset** | **Number**| The initial index from which to return the results. | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="caseMarkersPartialUpdate"></a>
# **caseMarkersPartialUpdate**
> CaseMarker caseMarkersPartialUpdate(id, data)





### Example
```javascript
var OldpApi = require('oldp-api');
var defaultClient = OldpApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new OldpApi.CaseMarkersApi();

var id = 56; // Number | A unique integer value identifying this case marker.

var data = new OldpApi.CaseMarker(); // CaseMarker | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.caseMarkersPartialUpdate(id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this case marker. | 
 **data** | [**CaseMarker**](CaseMarker.md)|  | 

### Return type

[**CaseMarker**](CaseMarker.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="caseMarkersRead"></a>
# **caseMarkersRead**
> CaseMarker caseMarkersRead(id, )





### Example
```javascript
var OldpApi = require('oldp-api');
var defaultClient = OldpApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new OldpApi.CaseMarkersApi();

var id = 56; // Number | A unique integer value identifying this case marker.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.caseMarkersRead(id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this case marker. | 

### Return type

[**CaseMarker**](CaseMarker.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="caseMarkersUpdate"></a>
# **caseMarkersUpdate**
> CaseMarker caseMarkersUpdate(id, data)





### Example
```javascript
var OldpApi = require('oldp-api');
var defaultClient = OldpApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new OldpApi.CaseMarkersApi();

var id = 56; // Number | A unique integer value identifying this case marker.

var data = new OldpApi.CaseMarker(); // CaseMarker | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.caseMarkersUpdate(id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this case marker. | 
 **data** | [**CaseMarker**](CaseMarker.md)|  | 

### Return type

[**CaseMarker**](CaseMarker.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

