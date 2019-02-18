# OldpApi.CasesApi

All URIs are relative to *https://de.openlegaldata.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**casesCreate**](CasesApi.md#casesCreate) | **POST** /cases/ | 
[**casesDelete**](CasesApi.md#casesDelete) | **DELETE** /cases/{id}/ | 
[**casesList**](CasesApi.md#casesList) | **GET** /cases/ | 
[**casesPartialUpdate**](CasesApi.md#casesPartialUpdate) | **PATCH** /cases/{id}/ | 
[**casesRead**](CasesApi.md#casesRead) | **GET** /cases/{id}/ | 
[**casesSearchList**](CasesApi.md#casesSearchList) | **GET** /cases/search/ | 
[**casesUpdate**](CasesApi.md#casesUpdate) | **PUT** /cases/{id}/ | 


<a name="casesCreate"></a>
# **casesCreate**
> ModelCase casesCreate(data)



List view for cases

### Example
```javascript
var OldpApi = require('oldp-api');
var defaultClient = OldpApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new OldpApi.CasesApi();

var data = new OldpApi.ModelCase(); // ModelCase | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.casesCreate(data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**ModelCase**](ModelCase.md)|  | 

### Return type

[**ModelCase**](ModelCase.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="casesDelete"></a>
# **casesDelete**
> casesDelete(id, )



List view for cases

### Example
```javascript
var OldpApi = require('oldp-api');
var defaultClient = OldpApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new OldpApi.CasesApi();

var id = 56; // Number | A unique integer value identifying this case.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.casesDelete(id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this case. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="casesList"></a>
# **casesList**
> InlineResponse2003 casesList(opts)



List view for cases

### Example
```javascript
var OldpApi = require('oldp-api');
var defaultClient = OldpApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new OldpApi.CasesApi();

var opts = { 
  'ordering': "ordering_example", // String | Which field to use when ordering the results.
  '_date': "_date_example", // String | 
  'slug': "slug_example", // String | 
  'fileNumber': "fileNumber_example", // String | 
  'ecli': "ecli_example", // String | 
  'court': 8.14, // Number | 
  'courtSlug': "courtSlug_example", // String | 
  'courtJurisdiction': "courtJurisdiction_example", // String | 
  'courtLevelOfAppeal': "courtLevelOfAppeal_example", // String | 
  'courtState': "courtState_example", // String | 
  'page': 56, // Number | A page number within the paginated result set.
  'pageSize': 56 // Number | Number of results to return per page.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.casesList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ordering** | **String**| Which field to use when ordering the results. | [optional] 
 **_date** | **String**|  | [optional] 
 **slug** | **String**|  | [optional] 
 **fileNumber** | **String**|  | [optional] 
 **ecli** | **String**|  | [optional] 
 **court** | **Number**|  | [optional] 
 **courtSlug** | **String**|  | [optional] 
 **courtJurisdiction** | **String**|  | [optional] 
 **courtLevelOfAppeal** | **String**|  | [optional] 
 **courtState** | **String**|  | [optional] 
 **page** | **Number**| A page number within the paginated result set. | [optional] 
 **pageSize** | **Number**| Number of results to return per page. | [optional] 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="casesPartialUpdate"></a>
# **casesPartialUpdate**
> ModelCase casesPartialUpdate(id, data)



List view for cases

### Example
```javascript
var OldpApi = require('oldp-api');
var defaultClient = OldpApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new OldpApi.CasesApi();

var id = 56; // Number | A unique integer value identifying this case.

var data = new OldpApi.ModelCase(); // ModelCase | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.casesPartialUpdate(id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this case. | 
 **data** | [**ModelCase**](ModelCase.md)|  | 

### Return type

[**ModelCase**](ModelCase.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="casesRead"></a>
# **casesRead**
> ModelCase casesRead(id, )



List view for cases

### Example
```javascript
var OldpApi = require('oldp-api');
var defaultClient = OldpApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new OldpApi.CasesApi();

var id = 56; // Number | A unique integer value identifying this case.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.casesRead(id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this case. | 

### Return type

[**ModelCase**](ModelCase.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="casesSearchList"></a>
# **casesSearchList**
> InlineResponse2004 casesSearchList(text, opts)



Search view (list only)

### Example
```javascript
var OldpApi = require('oldp-api');
var defaultClient = OldpApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new OldpApi.CasesApi();

var text = "text_example"; // String | Search query on text content (Lucence syntax support).

var opts = { 
  'facetModelName': "facetModelName_example", // String | facet_model_name
  '_date': "_date_example", // String | date
  'courtJurisdiction': "courtJurisdiction_example", // String | court_jurisdiction
  'courtLevelOfAppeal': "courtLevelOfAppeal_example", // String | court_level_of_appeal
  'decisionType': "decisionType_example", // String | decision_type
  'court': "court_example", // String | court
  'page': 56, // Number | A page number within the paginated result set.
  'pageSize': 56 // Number | Number of results to return per page.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.casesSearchList(text, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **text** | **String**| Search query on text content (Lucence syntax support). | 
 **facetModelName** | **String**| facet_model_name | [optional] 
 **_date** | **String**| date | [optional] 
 **courtJurisdiction** | **String**| court_jurisdiction | [optional] 
 **courtLevelOfAppeal** | **String**| court_level_of_appeal | [optional] 
 **decisionType** | **String**| decision_type | [optional] 
 **court** | **String**| court | [optional] 
 **page** | **Number**| A page number within the paginated result set. | [optional] 
 **pageSize** | **Number**| Number of results to return per page. | [optional] 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="casesUpdate"></a>
# **casesUpdate**
> ModelCase casesUpdate(id, data)



List view for cases

### Example
```javascript
var OldpApi = require('oldp-api');
var defaultClient = OldpApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new OldpApi.CasesApi();

var id = 56; // Number | A unique integer value identifying this case.

var data = new OldpApi.ModelCase(); // ModelCase | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.casesUpdate(id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this case. | 
 **data** | [**ModelCase**](ModelCase.md)|  | 

### Return type

[**ModelCase**](ModelCase.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

