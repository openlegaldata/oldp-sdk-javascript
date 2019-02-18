# OldpApi.StatesApi

All URIs are relative to *https://de.openlegaldata.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**statesList**](StatesApi.md#statesList) | **GET** /states/ | 
[**statesRead**](StatesApi.md#statesRead) | **GET** /states/{id}/ | 


<a name="statesList"></a>
# **statesList**
> InlineResponse20011 statesList(opts)





### Example
```javascript
var OldpApi = require('oldp-api');
var defaultClient = OldpApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new OldpApi.StatesApi();

var opts = { 
  'countryId': "countryId_example", // String | 
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
apiInstance.statesList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **countryId** | **String**|  | [optional] 
 **limit** | **Number**| Number of results to return per page. | [optional] 
 **offset** | **Number**| The initial index from which to return the results. | [optional] 

### Return type

[**InlineResponse20011**](InlineResponse20011.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="statesRead"></a>
# **statesRead**
> State statesRead(id)





### Example
```javascript
var OldpApi = require('oldp-api');
var defaultClient = OldpApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new OldpApi.StatesApi();

var id = 56; // Number | A unique integer value identifying this state.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.statesRead(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this state. | 

### Return type

[**State**](State.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

