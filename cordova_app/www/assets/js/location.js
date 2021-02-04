
var app = {
    // Application Constructor
        initialize: function () {
            
            document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
            this.angularInformtion();
            //http://169.239.252.207/geo_me/killa.html

     
            this.preChecks();


        },
        // deviceready Event Handler
        //
        // Bind any cordova events here. Common events are:
        // 'pause', 'resume', etc.
        onDeviceReady: function () {
    
            window.localStorage.removeItem("Current_Latitude");
            window.localStorage.removeItem("Current_Longitude");
             

            this.runGeolocation();
            this.preChecks();
        
            

            document.addEventListener("resume", onResume, false);
            function onResume() {
                app.runGeolocation();
                //this.getAllLocationSyncView();
                //app.checkConnection();
            }
            //app.checkConnection();
           // app.deviceInfomation();
    
        }, deviceInfomation: function () {
    
            var os = device.platform;
            var deviceID = device.uuid;
            var serial = device.serial;
           // window.localStorage.removeItem("DeviceID", deviceID);
           // window.localStorage.removeItem("DeviceSerial", serial);
           // window.localStorage.setItem("DeviceID", deviceID);
           // window.localStorage.setItem("DeviceSerial", serial);
    
        }, angularInformtion: function () {
    
           
            
        }, runGeolocation: function () {

            console.log('run geo');

            var onSuccess = function (position) {
                /*alert('Latitude: ' + position.coords.latitude + '\n' +
                 'Longitude: ' + position.coords.longitude + '\n' +
                 'Altitude: ' + position.coords.altitude + '\n' +
                 'Accuracy: ' + position.coords.accuracy + '\n' +
                 'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '\n' +
                 'Heading: ' + position.coords.heading + '\n' +
                 'Speed: ' + position.coords.speed + '\n' +
                 'Timestamp: ' + position.timestamp + '\n');*/
                 
                 window.localStorage.removeItem("Current_Latitude");
                 window.localStorage.removeItem("Current_Longitude");
                
                var longitude = position.coords.longitude
                var latitude = position.coords.latitude;
                //if (longitude != "" && latitude != "") {

                window.localStorage.setItem("Current_Latitude", position.coords.latitude);
                window.localStorage.setItem("Current_Longitude", position.coords.longitude);

               // $('.pageloader').fadeOut('slow');
                
               /* setTimeout(function () {
                    
                   // app.preChecks();
                }, 2000);*/

               // app.preChecks();


                //app.preChecks();

                //} else {
                  //  cordova.plugins.locationAccuracy.request(onRequestSuccess, onRequestFailure, cordova.plugins.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY);
                    navigator.geolocation.getCurrentPosition (onSuccess, onError, { timeout: 15000, enableHighAccuracy: true, maximumAge: 2000 });
                
                //}

            };
            // onError Callback receives a PositionError object
            //
            function onError(error) {

                navigator.geolocation.getCurrentPosition (onSuccess, onError, { timeout: 15000, enableHighAccuracy: true, maximumAge: 2000 });
            }

            navigator.geolocation.getCurrentPosition (onSuccess, onError , { timeout: 15000, enableHighAccuracy: true, maximumAge: 2000 });
            
            
            cordova.plugins.diagnostic.isGpsLocationEnabled(function (enabled) {
    
                if (enabled) {
                    
                    var page_name = location.pathname.substring(location.pathname.lastIndexOf('/')+1);
                    
                    //if(page_name == 'index.html' ){

                       // setTimeout(function(){ window.location = "index.html"; }, 4000);

                       
                   // } 

                    window.localStorage.setItem("Gps_enabled", "1");

                    var onSuccess = function (position) {
                        
                        window.localStorage.removeItem("Current_Latitude");
                        window.localStorage.removeItem("Current_Longitude");
    
                        /*alert('Latitude: ' + position.coords.latitude + '\n' +
                         'Longitude: ' + position.coords.longitude + '\n' +
                         'Altitude: ' + position.coords.altitude + '\n' +
                         'Accuracy: ' + position.coords.accuracy + '\n' +
                         'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '\n' +
                         'Heading: ' + position.coords.heading + '\n' +
                         'Speed: ' + position.coords.speed + '\n' +
                         'Timestamp: ' + position.timestamp + '\n');*/
    
                         
                       
                        var longitude = position.coords.longitude
                        var latitude = position.coords.latitude;
                       // if (longitude != "" && latitude != "") {
    
                            window.localStorage.setItem("Current_Latitude", position.coords.latitude);
                            window.localStorage.setItem("Current_Longitude", position.coords.longitude);

                          
                                $('.pageloader').fadeOut('slow');
                               // app.preChecks();
                           
    
                           
                            //setTimeout(function(){ document.getElementById("loading_loc").style.display = "none"; window.location = "index.html"; }, 5000);

                          //  app.deviceInfomation();
                            //app.preChecks();
    
                      //  } else {
                          
                            //cordova.plugins.locationAccuracy.request(onRequestSuccess, onRequestFailure, cordova.plugins.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY);
                     

					// }
    
                    }

                    
                    // onError Callback receives a PositionError object
                    //
                    function onError(error) {
                        cordova.plugins.locationAccuracy.request(onRequestSuccess, onRequestFailure, cordova.plugins.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY);
                        //navigator.geolocation.getCurrentPosition  (onSuccess, onError, { timeout: 1000, enableHighAccuracy: true, maximumAge: 5000 });
                    }

                    navigator.geolocation.getCurrentPosition  (onSuccess, onError, { timeout: 15000, enableHighAccuracy: true, maximumAge: 2000 });
    
                    
                    
                } else {
                    
                    window.localStorage.setItem("Gps_enabled", "0");
                   
                    function onRequestSuccess(success) {
                        
                       // if(page_name == 'index.html' ){

                            //setTimeout(function(){ window.location = "index.html"; }, 4000);
                           
    
                        //} 
						
                        var onSuccess = function (position) {
                            /*alert('Latitude: ' + position.coords.latitude + '\n' +
                             'Longitude: ' + position.coords.longitude + '\n' +
                             'Altitude: ' + position.coords.altitude + '\n' +
                             'Accuracy: ' + position.coords.accuracy + '\n' +
                             'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '\n' +
                             'Heading: ' + position.coords.heading + '\n' +
                             'Speed: ' + position.coords.speed + '\n' +
                             'Timestamp: ' + position.timestamp + '\n');*/
                             
                             window.localStorage.removeItem("Current_Latitude");
                             window.localStorage.removeItem("Current_Longitude");
                            
                            var longitude = position.coords.longitude
                            var latitude = position.coords.latitude;
                            //if (longitude != "" && latitude != "") {
    
                            window.localStorage.setItem("Current_Latitude", position.coords.latitude);
                            window.localStorage.setItem("Current_Longitude", position.coords.longitude);

                            //$('.pageloader').fadeOut('slow');
                           /* setTimeout(function () {
                                
                            }, 3000);*/

                            
    
                           // setTimeout(function(){ document.getElementById("loading_loc").style.display = "none"; window.location = "index.html"; }, 5000);

                            //app.preChecks();
    
                            //} else {
                              //  cordova.plugins.locationAccuracy.request(onRequestSuccess, onRequestFailure, cordova.plugins.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY);
								navigator.geolocation.getCurrentPosition  (onSuccess, onError, { timeout: 15000, enableHighAccuracy: true, maximumAge: 2000 });
							
							//}
                            
                        };
                        // onError Callback receives a PositionError object
                        //
                        function onError(error) {
                            navigator.geolocation.getCurrentPosition (onSuccess, onError, { timeout: 15000, enableHighAccuracy: true,  maximumAge: 2000 });
                            
                            //navigator.geolocation.getCurrentPosition (onSuccess, onError, { timeout: 1000, enableHighAccuracy: true });
                        }
    
                        navigator.geolocation.getCurrentPosition (onSuccess, onError , { timeout: 15000, enableHighAccuracy: true,  maximumAge: 2000 });
						
						
                    }
    
                    function onRequestFailure(error) {
    
                        if (error.code !== cordova.plugins.locationAccuracy.ERROR_USER_DISAGREED) {
                            if (window.confirm("Lets get your current Location.Switch to the Location Settings")) {
                                cordova.plugins.diagnostic.switchToLocationSettings();
                            }
                        }

                        navigator.geolocation.getCurrentPosition (onSuccess, onError , { timeout: 15000, enableHighAccuracy: true });
                    }
    
                    cordova.plugins.locationAccuracy.request(onRequestSuccess, onRequestFailure, cordova.plugins.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY);
                
                    
                
                }
    
            }, function (error) {
                alert("The following error occurred: " + error);
            });
        }, preChecks: function () {

            

         // let interval =  window.setInterval(function(){

                


                app.checkConnection();



           // }, 4000);  

        }, checkConnection: function(){
    
          var Current_Latitude = window.localStorage.getItem('Current_Latitude');
          var Current_Longitude = window.localStorage.getItem('Current_Longitude');

          if(Current_Latitude === null && Current_Longitude === null){

            cordova.plugins.locationAccuracy.isRequesting(function(requesting){
                //console.log("A request " + (requesting ? "is" : "is not") + " currently in progress");
                
                if(requesting === false){

                  //  location.reload(true); 
                  app.runGeolocation();

                }            
            });
            
           
           // app.runGeolocation();
              
          } else {
      
            
            $('.pageloader').fadeOut('slow');

              getUserLocals(); 

              async function getUserLocals() {
                
                try {
                  
                await  new Vue({
                    el: '#example-1',
                    data: {
                        
                        items: []

                    }, mounted() {
                      
                          this.getImagesFromServer();

                          

                      }, methods : {

                       async getImagesFromServer(){

                           

                           var response = await axios.get('http://localhost:5308/mongo_cloud_get_places_within/'+ Current_Longitude +'/'+ Current_Latitude +'/rtyyw5535');
                 
                           this.items = response.data;

                           console.log(response.data);


                           window.localStorage.setItem('places', JSON.stringify(response.data));
                   

                        }
                        
                      }
                  })

                  
                    //alert(response.data);
                  //alert(response.data)
                  
                } catch (error) {
                  console.error(error);
                  alert(error);
                }

              }

              new Vue.nextTick(function () {
                   
                setTimeout(function(){ 
                    
                    this.swiper = new window.Swiper('.offerslidetab1', {
                        loop: true,
                        lazy: true,
                        autoplay: true,
                        slidesPerView: 'auto',
                        spaceBetween: 0,
                        pagination: {
                            el: '.swiper-pagination',
                            clickable: true,
                        }
                    }) 

                 }, 200);
              })
      
          }

         

         // setTimeout(getUserLocals, 5000)


          /*async function getUserLocals() {
            try {
              const response = await axios.get('http://213.136.79.62:5308/mongo_cloud_get_places_within/'+ Current_Longitude +'/'+ Current_Latitude +'/rtyyw5535');
             
              console.log(response.data);
            } catch (error) {
              console.error(error);
            }
          }*/
    
        },getAllLocationSyncView: function () {
           
            var lat = window.localStorage.getItem("Current_Latitude");
            var lon = window.localStorage.getItem("Current_Longitude");

            var db = new loki('whereweat.json');
            var allplaces = db.addCollection('AllPlaces');
            var mylocation = db.addCollection('MyLocation');

            var storage = window.localStorage;
            var todayDate = new Date().toLocaleString();

            
            var vm = new Vue({
                el: "#vue-instance",
                data: {
                    randomWord: '',
                    locationData: '',
                    mylocationData: '',
                    locationMyData: '', 
                    name:'', 
                    address:'',
                    pname:'', 
                    paddress:'',
                    tagsCounted: '',  
                    hideTag:''
                    
                }, created: function () {

                    this.intervalid1 = setInterval(() => {
                        //app.runGeolocation();
                        this.displayMyData();
                        this.displayAllData();
                        //app.getAllLocationSyncView();
                    }, 8000);

                    window.localStorage.setItem('TagStatus', "0");

                    $(window).on("scroll", function() {
                        var scrollHeight = $(document).height();
                        var scrollPosition = $(window).height() + $(window).scrollTop();
                        if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
                            // when scroll to bottom of the page
                            console.log("bottom")
                        }
                        console.log("scrollHeight:"+scrollHeight)
                    });



                    this.intervalid2 = setInterval(() => {
                        this.checkTags();
                        this.CountTags();
                    }, 1000);
                    
                    this.displayMyData();
                    this.displayAllData();

                    var url = window.location.pathname;
                    var fileName = url.substring(url.lastIndexOf('/')+1); 
                    var storage = window.localStorage;

                    if (fileName == 'profile1.html') {
                        
                        this.pname = localStorage.getItem("Name");
                        this.paddress = localStorage.getItem("Address");

                    } 
                    
                    if (fileName == 'profile.html') {
                        //var baseUrl = (window.location).href; // You can also use document.URL
                        //var profileId = baseUrl.substring(baseUrl.lastIndexOf('=') + 1);
                        //this.profile1(profileId);
                       
                        this.name = localStorage.getItem("Name");
                        this.address = localStorage.getItem("Address");
                        
                    }

                }, methods: {
                    CountTags: function() { 
                        var profileId = localStorage.getItem("ProfileId");
                        
                        axios.get('http://41.215.35.52/ci_email/gettagsProfile.php', {
                            params: {
                                PClubIDs: profileId
                            }
                         }).then(response => {
                            //console.log(response.data[0]['CountTags']);

                            if (!$.trim(response.data)){   
                                
                                this.locationMyData ='';
                               // window.localStorage.setItem('TagStatus', "0");
                               // $('.modal-body-locateme').css('display', 'none');
                              }
                             else{   
                                    
                                this.tagsCounted = response.data[0]['CountTags'];
                            }

                     }).catch(function (error) {
                        $('.internet_connection').css('display', 'block');
                        return false;
                    }); 

 
                     }, TagMe: function() { 
                       var profileId = localStorage.getItem("ProfileId");
                       var DeviceSerial = localStorage.getItem("DeviceSerial");
                       
                        axios.get('http://41.215.35.52/ci_email/tag.php', {
                            params: {
                                profileId: profileId,
                                DeviceSerial: DeviceSerial,
                                date: todayDate
                            }
                        }).then(response => {

                            window.localStorage.setItem('Date', todayDate);
                            window.localStorage.setItem('TagStatus', "1");

                            $('.tagged').css('display', 'block');

                        }).catch(function (error) {
                            swal({
                                title: "Check internet connection..",
                                type: "warning",
                                showCancelButton: false,
                                confirmButtonColor: "#DD6B55",
                                confirmButtonText: "OK",
                                closeOnConfirm: false
                            }, function () {
                                setTimeout(redirect, 0)
                                function redirect() {
                                    window.location = 'profile1.html';
                                }
                            });
                            return false;
                        });


                    },checkTags: function(profileId) {

                        var DeviceSerial = storage.getItem("DeviceSerial");
						var ProfileId = storage.getItem("ProfileId");
                    
                        axios.get('http://41.215.35.52/ci_email/check_tags.php', {
                                params: {
                                    DeviceSerial: DeviceSerial,
									ProfileID: ProfileId
                                }
                        }).then(response => {

                           checkPhone = response.data.length;
						   
                           
                           var storedDate = storage.getItem("Date");
                            var tagStatus = storage.getItem("TagStatus");
                            dt1 = new Date(storedDate); 
                            dt2 = new Date(todayDate);                        

                            var diff =(dt1.getTime() - dt2.getTime()) / 1000;
                            diff /= (60 * 60);
                            var timeDif = Math.abs(Math.round(diff));
							console.log(timeDif);
                            if(checkPhone == "0"){
                                console.log("Hapaa");
                                console.log(checkPhone);
                                window.localStorage.setItem('TagStatus', "0");
                                this.hideTag = "show";

                            } else {

                                window.localStorage.setItem('TagStatus', "1");
                                this.hideTag = "hide";

                            }

                           // if (timeDif < 14 && tagStatus == '1') {
                               // this.hideTag = "hide";
                           // } else {

                                //window.localStorage.setItem('TagStatus', "");
                              //  window.localStorage.setItem('TagStatus', "0");
                               // this.hideTag = "show";
                          //  }

                                 
                        }).catch(function (error) {
                                $('.internet_connection').css('display', 'block');
                                return false;
                        });  
                        
                       

                    },profile1: function(profileId) {

                        var profileName;
                        var profileAddress;

                        db.loadDatabase({}, function () {
                            
                            allplaces = db.getCollection('AllPlaces');
                           
                            var profile = allplaces.find( {'Id': profileId});
                            console.log(profile);
                            profileName = profile[0].Name;
                            profileAddress = profile[0].Address;

                            var storage = window.localStorage;

                            storage.removeItem('ProfileId');
                            storage.setItem('ProfileId', profile[0].Id);
                            storage.removeItem('Instagram_token');
                            storage.removeItem('Instagram_userid');
                            storage.setItem('Instagram_token',  profile[0].Instagram_token);
                            storage.setItem('Instagram_userid',  profile[0].Instagram_userid);

                          });

                        this.name = profileName;
                        this.address = profileAddress;

                        


                    },profile: function(profileId) {

                        var profileName;
                        var profileAddress;

                        db.loadDatabase({}, function () {

                            allplaces = db.getCollection('AllPlaces');
                           
                            var profile = allplaces.find( {'Id': profileId});
                            profileName = profile[0].Name;
                            profileAddress = profile[0].Address;

                            var storage = window.localStorage;

                            storage.removeItem('ProfileId');
                            storage.setItem('ProfileId', profile[0].Id);
                            storage.removeItem('Instagram_token');
                            storage.removeItem('Instagram_userid');
                            storage.setItem('Instagram_token',  profile[0].Instagram_token);
                            storage.setItem('Instagram_userid',  profile[0].Instagram_userid);

                          });

                        this.name = profileName;
                        this.address = profileAddress;

                    },viewMyProfile2: function(dataProfile2) {
                        console.log(dataProfile2.Name);
                       var ProfileId = dataProfile2.Id;
                       var ProfileName = dataProfile2.Name;
                       var ProfileAddress = dataProfile2.Address;
                       var ProfileInstagram_token = dataProfile2.Instagram_token;
                       var ProfileInstagram_userid = dataProfile2.Instagram_userid;

                       var storage = window.localStorage;

                       storage.setItem('Name', dataProfile2.Name);
                       storage.setItem('Address', dataProfile2.Address);
                       storage.setItem('ProfileId', dataProfile2.Id);
                       storage.setItem('Instagram_token',  dataProfile2.Instagram_token);
                       storage.setItem('Instagram_userid', dataProfile2.Instagram_userid);

                       setTimeout(function () {
                        window.location.href = "profile.html"; //will redirect to your blog page (an ex: blog.html)
                     }, 5); //will call the function after 2 secs.

                        /*db.loadDatabase({}, function () {

                            var ProfileIdR = dataProfile2.Id;

                            allplaces = db.getCollection('AllPlaces');
                           
                            var profile = allplaces.find( {'Id': ProfileIdR});

                            profileName = profile[0].Name;
                            profileAddress = profile[0].Address;

                            var storage = window.localStorage;

                            storage.removeItem('Name');
                            storage.setItem('Name', profile[0].Name);
                            storage.removeItem('Address');
                            storage.setItem('Address', profile[0].Address);
                            storage.removeItem('Instagram_token');
                            storage.removeItem('Instagram_userid');
                            storage.setItem('Instagram_token',  profile[0].Instagram_token);
                            storage.setItem('Instagram_userid',  profile[0].Instagram_userid);

                          });*/


                    },
                    viewMyProfile1: function(data) {
                        
                        var storage = window.localStorage;

                            storage.removeItem('ProfileId');
                            storage.setItem('ProfileId',  data.Id);
                            storage.removeItem('Instagram_token');
                            storage.removeItem('Instagram_userid');
                            storage.setItem('Instagram_token',  data.Instagram_token);
                            storage.setItem('Instagram_userid',  data.Instagram_userid);

                            setTimeout(function () {
                                window.location.href = "profile.html"; //will redirect to your blog page (an ex: blog.html)
                             }, 5); //will call the function after 2 secs.
                            
                            //setTimeout(function () {
                             //   window.location.href = "profile1.html"; //will redirect to your blog page (an ex: blog.html)
                            //}, 300); //will call the function after 2 secs.

                        

                       /* axios.get('http://41.215.35.52/ci_email/profileOnload.php', {
                            params: {
                                ClubId: data.Id
                            }
                         }).then(response => {
                            alert(response.data[0]['Insta_token']);
                        allplaces = db.getCollection('AllPlaces');
                        allplaces.clear();
                        
                        
                            
                            allplaces.insert({Name:''+ response.data[0]['Name'] +'', Address:''+ response.data[0]['Address'] +'',Lat:''+ response.data[0]['Lat'] +'',Lon:''+ response.data[0]['Lon'] +'',Instagram_token:''+ response.data[0]['Instagram_token'] +'',Instagram_userid:''+ response.data[0]['Instagram_userid'] +'',Tag:''+ response.data[0]['Tag'] +'',Id:''+ response.data[0]['Id'] +'',})
                            db.saveDatabase();

                        

                            var pushToDataAll;

                            
                            db.loadDatabase({}, function () {
                                
                                allplaces = db.getCollection('AllPlaces');
                                pushToDataAll = allplaces.data;

                            // alert(pushToDataMy);
                                
                            }); 

                            

                           // this.locationMyData = response.data;
                            
                    }).catch(function (error) {
                        $('.internet_connection').css('display', 'block');
                    }); */

                    },redirectHome: function(data) {

                        window.location.href = "index.html"; //will redirect to your blog page (an ex: blog.html)

                    },redirectHome2: function(data) {

                        window.location.href = "index.html"; //will redirect to your blog page (an ex: blog.html)

                    },viewMyProfile: function(data) {
                        
                    
                       var ProfileId = data.Id;
                       var ProfileName = data.Name;
                       var ProfileAddress = data.Address;
                       var ProfileInstagram_token = data.Instagram_token;
                       var ProfileInstagram_userid = data.Instagram_userid;

                       var storage = window.localStorage;

                       storage.setItem('Name', data.Name);
                       storage.setItem('Address', data.Address);
                       storage.setItem('ProfileId', data.Id);
                       storage.setItem('Instagram_token',  data.Instagram_token);
                       storage.setItem('Instagram_userid', data.Instagram_userid);

                       setTimeout(function () {
                        window.location.href = "profile1.html"; //will redirect to your blog page (an ex: blog.html)
                     }, 5); //will call the function after 2 secs.


                       /* axios.get('http://41.215.35.52/ci_email/profileOnload.php', {
                            params: {
                                ClubId: data.Id
                            }
                         }).then(response => {
                            alert(response.data[0]['Insta_token']);
                        allplaces = db.getCollection('AllPlaces');
                        allplaces.clear();
                        
                        
                            
                            allplaces.insert({Name:''+ response.data[0]['Name'] +'', Address:''+ response.data[0]['Address'] +'',Lat:''+ response.data[0]['Lat'] +'',Lon:''+ response.data[0]['Lon'] +'',Instagram_token:''+ response.data[0]['Instagram_token'] +'',Instagram_userid:''+ response.data[0]['Instagram_userid'] +'',Tag:''+ response.data[0]['Tag'] +'',Id:''+ response.data[0]['Id'] +'',})
                            db.saveDatabase();

                        

                            var pushToDataAll;

                            
                            db.loadDatabase({}, function () {
                                
                                allplaces = db.getCollection('AllPlaces');
                                pushToDataAll = allplaces.data;

                            // alert(pushToDataMy);
                                
                            }); 

                            

                           // this.locationMyData = response.data;
                            
                    }).catch(function (error) {
                        $('.internet_connection').css('display', 'block');
                    }); */

                    }, displayMyData: function() {

                        axios.get('http://41.215.35.52/ci_email/get_my_location.php', {
                            params: {
                                Lat: lat,
                                Lon: lon
                            }
                         }).then(response => {
                    
                            if (!$.trim(response.data)){   
                                
                                this.locationMyData ='';
                                $('.modal-body-locateme').css('display', 'none');
                              }
                                else{   
                                    
                                    this.locationMyData = response.data;
                                }

                            
                            
                    }).catch(function (error) {
                        $('.internet_connection').css('display', 'block');
                        return false;
                    }); 


                    },displayAllData: function() {
                      
                        axios.get('http://41.215.35.52/ci_email/get_all_location.php', {
                            params: {
                                Lat: lat,
                                Lon: lon
                            }
                         }).then(response => {
                    
                        allplaces = db.getCollection('AllPlaces');
                        //allplaces.clear();
                        
                        for(var i = 0; i <  response.data.length; i++) {
                            
                            allplaces.insert({Name:''+ response.data[i]['Name'] +'', Address:''+ response.data[i]['Address'] +'',Lat:''+ response.data[i]['Lat'] +'',Lon:''+ response.data[i]['Lon'] +'',Instagram_token:''+ response.data[i]['Instagram_token'] +'',Instagram_userid:''+ response.data[i]['Instagram_userid'] +'',Tag:''+ response.data[i]['Tag'] +'',Id:''+ response.data[i]['Id'] +'',})
                            db.saveDatabase();

                        }

                        var pushToDataAll;
                        db.loadDatabase({}, function () {
                            
                            allplaces = db.getCollection('AllPlaces');
                            pushToDataAll = allplaces.data;

                           // alert(pushToDataMy);
                            
                        });

                       this.locationData =  pushToDataAll;

                            
                    }).catch(function (error) {
                        $('.internet_connection').css('display', 'block');
                        return false;
                    });

    
                  }
                }
            });
    
         },displayAllLocationView: function () {},
       };
    app.initialize();