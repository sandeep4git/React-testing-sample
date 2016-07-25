/**
 * Created by sandeeptc on 7/14/16.
 */

var app=angular.module("myApp",[])
               .controller("myModule",function($scope,$http){
                   console.log("Hello, World from Controller");

               var refresh=function() {

                   $http.get('/contactList').success(function (response) {
                       console.log("I got the data I requested");
                       $scope.contactList = response;
                       $scope.contact="";
                   });
               };
               refresh();

                   $scope.addContact=function(){

                        console.log($scope.contact);
                       $http.post('/contactList',$scope.contact).success(function(response){
                            console.log(response);
                            refresh();
                       });
                   };

                   $scope.displayContact=function(id){
                       console.log(id);
                       $http.get('/contactList/display/'+id).success(function (response) {
                           console.log(response);
                           $scope.contact1 = response;
                            //console.log(contact1)
                      });
                   };
                   $scope.light_box=false;
                    $scope.myFunction=function(){
                            $scope.light_box=true;
                        }

                   $scope.lightbox_off=function(){
                      $scope.light_box=false;
                   }


                   $scope.col3=false;
                   $scope.show_col3=function(){
                      $scope.col3=true;
                   }
                   $scope.update=function(id){
                       console.log(id);
                       $http.post('/contactList/update/'+id,$scope.contact1).success(function(response){
                        refresh();
                       })
                   };

               });



                //function myFunction(){
                  //  document.getElementById("light").style.display='block';
                //}







/*


 person1={
 name:"Sandeep",
 email:"abcd@gmail.com",
 number:"573-789-1477"
 },

 person2={
 name:"Will",
 email:"will@gmail.com",
 number:"573-789-1488"
 },

 person3={
 name:"Claire",
 email:"claire@gmail.com",
 number:"573-789-1499"
 }
 var contactList=[person1,person2,person3];
 $scope.contactList=contactList;


 $(document).ready(function(){
 $("#name_list").hover(function(){
 $(this).css("background-color", "blue");
 }, function(){
 $(this).css("background-color", "white");
 });
 });

 */