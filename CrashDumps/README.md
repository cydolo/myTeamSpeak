## Crashdump

When the client crashes, the error message (crashdump) is sent to  
https://crashdumps-teamspeak-services-com.s3-eu-west-1.amazonaws.com.  

the file for the post information can be found on   
https://files.teamspeak-services.com   

however the file is not so easy to find, because you do not have access to the sub-folder   
https://files.teamspeak-services.com/service-data/ 

**Post**
https://files.teamspeak-services.com/service-data/client-crashdump-postinfo.ini

**[Raw]**

```
[meta]
url="https://crashdumps-teamspeak-services-com.s3-eu-west-1.amazonaws.com"
filefield="file"
mime="application/zip"

[postdata]
key="client/new/${filename}"
AWSAccessKeyId="AKIAJX4NG7J755VJ7KSA"
acl="private"
policy="eyJleHBpcmF0aW9uIjogIjIwMjAtMDEtMDFUMDA6MDA6MDBaIiwKICAiY29uZGl0aW9ucyI6IFsgCiAgICB7ImJ1Y2tldCI6ICJjcmFzaGR1bXBzLXRlYW1zcGVhay1zZXJ2aWNlcy1jb20ifSwgCiAgICBbInN0YXJ0cy13aXRoIiwgIiRrZXkiLCAiY2xpZW50L25ldy8iXSwKICAgIHsiYWNsIjogInByaXZhdGUifSwKICAgIFsic3RhcnRzLXdpdGgiLCAiJENvbnRlbnQtVHlwZSIsICIiXSwKICAgIFsiY29udGVudC1sZW5ndGgtcmFuZ2UiLCAwLCAxMDQ4NTc2XQogIF0KfQ=="
signature="LpcFwsLFeWjzz7il09+1IucLwIk="
content-type=""
```
