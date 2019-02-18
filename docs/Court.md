# OldpApi.Court

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] 
**name** | **String** | Full name of the court with location | 
**courtType** | **String** | Court type AG,VG,... | [optional] 
**city** | **Number** | Court belongs to this city, if null court is state-level | [optional] 
**state** | **Number** | Court belongs to this state (derive country of this field) | 
**code** | **String** | Unique court identifier based on ECLI (e.g. BVerfG) | 
**slug** | **String** | Type &amp; city name as lowercase | 
**description** | **String** |  | [optional] 
**image** | **String** |  | [optional] 
**homepage** | **String** | Official court homepage | [optional] 
**streetAddress** | **String** | Street address with house number | [optional] 
**postalCode** | **String** | Postal code (ZIP code) | [optional] 
**addressLocality** | **String** | Locality (city name) | [optional] 
**telephone** | **String** | Telephone number | [optional] 
**faxNumber** | **String** | Fax number | [optional] 
**jurisdiction** | **String** | Jurisdiction of court (ordinary, civil, ...) | [optional] 
**levelOfAppeal** | **String** | Subject-matter jurisdiction (local, federal, high court, ...) | [optional] 


