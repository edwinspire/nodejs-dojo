require([
  "dojo", 
  "dojo/_base/array", 
  "dojo/node!os"
  ], function(dojo, array, os){

    const numCPUs = os.cpus().length;

    console.log('Nodejs '+process.version+' + Dojo Toolkit '+dojo.version);

    process.on('uncaughtException', function(error){
      console.error(error);
    });


////////////////////////////////////////////////////////////
});