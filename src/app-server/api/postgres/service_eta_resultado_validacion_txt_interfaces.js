// Dojo 1.7+ (AMD)
require(["dojo/_base/lang", "api/postgres/oms", "dojo/_base/array", "dojo/Deferred"], function(lang, OMS, array, Deferred){
	lang.extend(OMS, {
/////////////////////////////////////////
service_eta_resultado_validacion_txt_interfaces: function(DeviceKey, events){
	var deferred = new Deferred();

	console.log('>>>>>>>>>>>>>>>> service_eta_resultado_validacion_txt_interfaces', events);

	this.query("SELECT * FROM services.fun_eta_resultado_validacion_txt_interfaces($1::TEXT, $2::JSON);", [DeviceKey, JSON.stringify(events)]).then(function(results){

		if(results.rows.length > 0){
			deferred.resolve(results.rows);
		}else{
			deferred.resolve([]);
		}

				///////////
			}, function(error){
				console.trace(error);
				deferred.reject(error);
			});

	return deferred.promise;
}  



});
});