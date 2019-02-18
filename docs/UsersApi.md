# OldpApi.UsersApi

All URIs are relative to *https://de.openlegaldata.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usersList**](UsersApi.md#usersList) | **GET** /users/ | 
[**usersMe**](UsersApi.md#usersMe) | **GET** /users/me/ | 
[**usersRead**](UsersApi.md#usersRead) | **GET** /users/{id}/ | 


<a name="usersList"></a>
# **usersList**
> InlineResponse20012 usersList(opts)



API endpoint that allows a user&#39;s profile to be viewed or edited.

### Example
```javascript
var OldpApi = require('oldp-api');
var defaultClient = OldpApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new OldpApi.UsersApi();

var opts = { 
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
apiInstance.usersList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| Number of results to return per page. | [optional] 
 **offset** | **Number**| The initial index from which to return the results. | [optional] 

### Return type

[**InlineResponse20012**](InlineResponse20012.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="usersMe"></a>
# **usersMe**
> InlineResponse20012 usersMe(opts)



Show current user (useful for verifying API key)

### Example
```javascript
var OldpApi = require('oldp-api');
var defaultClient = OldpApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new OldpApi.UsersApi();

var opts = { 
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
apiInstance.usersMe(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| Number of results to return per page. | [optional] 
 **offset** | **Number**| The initial index from which to return the results. | [optional] 

### Return type

[**InlineResponse20012**](InlineResponse20012.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="usersRead"></a>
# **usersRead**
> User usersRead(id)



API endpoint that allows a user&#39;s profile to be viewed or edited.

### Example
```javascript
var OldpApi = require('oldp-api');
var defaultClient = OldpApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new OldpApi.UsersApi();

var id = 56; // Number | A unique integer value identifying this Benutzer/in.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usersRead(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this Benutzer/in. | 

### Return type

[**User**](User.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

