var ApiUrl = "";
var westurl = {
	vesion:55
};
//alert(westurl.vesion);
// auto url detection
(function() {
   if(westurl.vesion==1){
   	ApiUrl = "http://oms.wm-iot.com";
   }else if(westurl.vesion==3){
    ApiUrl = "http://192.168.1.128:12000/crm/";
   }else if(westurl.vesion==4){
   	ApiUrl = "http://192.168.1.129:8089/crm";
   }else if(westurl.vesion==5){
       ApiUrl = "http://192.168.1.78:8082";
   }else{
   	ApiUrl = "http://192.168.1.216:12000/crm";
   }
})();
