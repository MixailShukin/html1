            //CREATE ARRAY
let ng = 5; //2^(ng+2) ng+2 is number of variated cases
var AR = [[0, 0], [1, 0], [0, 1], [1, 1]]; //origin of array
let l = AR.length;
var elem = 0; 
console.log("length of origin:", l); 
for(let n = 0; n < ng; n++){  
for(let i = 0; i < l; i++){  //to double array 
    AR[i].push(0);
    let elem = []; //copy of AR[i] to replace ended element
    for(let j = 0; j < AR[i].length; j++){
       elem.push(AR[i][j]);
    }
    elem[elem.length-1] = 1; // to replace
    AR.push(elem);
    }
console.log(AR);
l = AR.length;
};

// for(let i = 0; i < AR.length; i++){
//    console.log(AR[i]);
// };
console.log("length of Array: ", AR.length);
console.log("length of element: ", AR[1].length);


               //NEGATION DEFENITION 
                                             // 5 means error
let ARn = [4, 3, 2, 1];  //negation function
function n(x){
 if(x<5 & x>0){
   return ARn[x-1];
 }else{console.log("ERROR NEGATION  x: ", x)};
};

              //IMPL DEFENITION
let AR_Impl = [[4, 3, 2 , 1],
               [4, 10, 2, 2],
               [4, 10,  10 ,3],
               [4, 4, 4, 4]];  //table for impl (+) (0) (-)
function impl(k, x, y){
   if(x < 5 & x > 0 & y < 5 & y > 0){
   let v = AR_Impl[4-x][4-y];
   if(v<10){return v;
                     }else{if(k == 0){
                                    return 4;}else{return 3;}};
                                 }else{console.log("ERROR impl   x =", x, " y=", y);}
};  // end of Impl_definirion

function chek_impl(k){
      console.log("k:", k)
   for(let i = 1; i < 5; i++){
      console.log(impl(k, i, 4), impl(k, i, 3),impl(k, i, 2),impl(k, i, 1));
   }
};

             //  L h  DEFENITION
let AR_L = [2, 1, 1, 3];  
function L(k, x){
 if(x<5 & x>0){
   let v = AR_L[x-1];
   if(v<10){return v;
                     }else{if(k == 0){
                                    return 1;}else{return 2;}};

               }else{console.log("ERROR L   x =", x)};
};

            //  M h  DEFENITION
let AR_M = [2, 4, 4, 3];  
function M(k, x){
 if(x<5 & x>0){
   let v = AR_M[x-1];
   if(v<10){return v;
                     }else{if(k == 0){
                                    return 4;}else{return 3;}};

               }else{console.log("ERROR M   x =", x)};
};


            // CHECK
// console.log("L 1 2    :", L(0, 3));
// chek_impl(0);
console.log("impl 1  1:    ", impl(0, 1, 1));
console.log("impl 1  1:    ", impl(1, 1, 1));
// console.log("n 0:    ", n(0));
// console.log("n 4:    ", n(4));
// console.log("n 3:    ", n(3));
// console.log("n 2:    ", n(2));
// console.log("n 1:    ", n(1));

               //Evaluation algoritm
let result = "YES";
let p = 1; // value of variable
let log = "";

console.log("                       CHEK STARTED")
for(let p = 1; p < 5; p++){
console.log("                       Chek p=", p)
for(let i = 0; i < AR.length; i++){
   log = "";
                              // list of cheked formuls  (this is in sircle)
   let x  = impl(AR[i][0],  M(AR[i][5], L(AR[i][4], p)),       L(AR[i][3], L(AR[i][2], M(AR[i][1],p)))  ) //LMM->MLM K
   //let x  = impl(AR[i][0] ,       M(AR[i][3], L(AR[i][2], M(AR[i][1],p)))  ,  M(AR[i][6], L(AR[i][5], L(AR[i][4],p)))  )  //MLM->MLL  K
   //let x  = impl(AR[i][0],  M(AR[i][6], L(AR[i][5], L(AR[i][4],p))),       M(AR[i][3], L(AR[i][2], M(AR[i][1],p)))  ) //MLL->MLM  K  F
   //let x = impl(AR[i][0],  M(AR[i][2], M(AR[i][1], p)), L(AR[i][3], M(AR[i][1], p)))   //MM->LM K  F
   //let x  = impl(AR[i][0],  M(AR[i][2], M(AR[i][1], p)),  L(AR[i][3], M(AR[i][2], M(AR[i][1],p)))  ) //MM->LMM  K 
   //let x  = impl(AR[i][0],  M(AR[i][2], M(AR[i][1], p)),  M(AR[i][4], L(AR[i][3], M(AR[i][1],p)))  ) //MM->MLM   K  F
   //let x = impl(AR[i][0],  L(AR[i][1], p),   L(AR[i][2], L(AR[i][1], p))   )  // L->LL  K  Axiom T
   //let x = impl(AR[i][0],  L(AR[i][1], p), L(AR[i][2], M(AR[i][3], p)))       // L->LM  K  Axiom   T
   //let x = impl(AR[i][0], M(AR[i][1], L(AR[i][2], p)),  M(AR[i][3], p))  // ML->M  K   Axiom  T
   //let x  = impl(AR[i][0],  L(AR[i][3], M(AR[i][2], L(AR[i][1],p))) ,  L(AR[i][1], p)  )  //LML->L   K  F
   //let x  = impl(AR[i][0],  M(AR[i][3], L(AR[i][2], M(AR[i][1],p))) ,  L(AR[i][2], M(AR[i][1], p))  )   //MLM->LM   K  F
   //let x  = impl(AR[i][0],  M(AR[i][1], L(AR[i][2], L(AR[i][3],p))) ,  L(AR[i][4], M(AR[i][5], p))  )  //MLL->LM   K  F
   //let x  = impl(AR[i][0],  M(AR[i][2], L(AR[i][1], p)),  L(AR[i][3], M(AR[i][2], L(AR[i][1],p)))  ) //ML->LML  K  F
   //let x  = impl(AR[i][0],  M(AR[i][3], p),  M(AR[i][1], L(AR[i][2], M(AR[i][3],p)))  )    // M-> MLM K  F
   //let x  = impl(AR[i][0],  M(AR[i][4], p),  M(AR[i][1], L(AR[i][2], L(AR[i][3],p)))  )  //M->LML    K  F
   //let x  = impl(AR[i][0],  M(AR[i][4], p),  L(AR[i][1], M(AR[i][2], L(AR[i][3],p)))  )  //M->LML    K   F
   //let x  = impl(AR[i][0],  M(AR[i][4], p),  M(AR[i][1], M(AR[i][2], L(AR[i][3],p)))  )  //M->MML  K   F
   //let x  = impl(AR[i][0],  M(AR[i][3], p),  L(AR[i][1], M(AR[i][2], M(AR[i][3],p)))  )  //M->LMM  K   F
   //let x  = impl(AR[i][0],  L(AR[i][1], M(AR[i][2], M(AR[i][3],p))) ,  L(AR[i][4],  p)  )  //LMM->L  K  F
   //let x = impl(AR[i][0],  M(AR[i][1], p), L(AR[i][2], M(AR[i][1], p)))       // M->LM  K   F
   //let x  = impl(AR[i][5],  M(AR[i][3], L(AR[i][2], L(AR[i][1], L(AR[i][0],p)))) ,  M(AR[i][4], L(AR[i][1], L(AR[i][0],p)))    )  //ML(LL)->M(LL)
   //let x  = impl(AR[i][0],  L(AR[i][1], M(AR[i][2], M(AR[i][3],p))) ,  M(AR[i][4], p)  )  //LMM->M    
   //let x  = impl(AR[i][0],  L(AR[i][4], M(AR[i][5], p)),  L(AR[i][1], M(AR[i][2], M(AR[i][3],p)))  )  //LM->LMM
   //let x  = impl(AR[i][0],  L(AR[i][1], M(AR[i][2], M(AR[i][3],p))) ,  L(AR[i][4], M(AR[i][5], p))  )  //LMM->LM
   //let x = impl(AR[i][0],  L(AR[i][1], M(AR[i][2], p)), M(AR[i][3], L(AR[i][4], p)))   // LM->ML  
   //let x = impl(AR[i][0],  M(AR[i][1], L(AR[i][2], p)), L(AR[i][3], M(AR[i][4], p)))   //ML->LM  F 
   //let x = impl(AR[i][0],  M(AR[i][1], p), M(AR[i][2], L(AR[i][3], p)))       // M->ML
   //let x =  impl(AR[i][0],  L(AR[i][3], p)  , L(AR[i][1], M(AR[i][2], p)))  //L->LM  !
   //let x = impl(AR[i][0], L(AR[i][1], M(AR[i][2], p)),  L(AR[i][3], p))  // LM->L
   //let x = impl(AR[i][0], n(p), impl(AR[i][1], M(AR[i][2], p), M(AR[i][3], L(AR[i][4], p))));
   //let x = impl(AR[i][1],     L(AR[i][2], p),    L( AR[i][3], L(AR[i][2], p) )  );
   //let x = impl(  AR[i][1], p, L(AR[i][2], p) );
   //console.log("i=",i,"  x=", x , "   AR: " , AR[i]);
   log = log + "i="+ i + "  x="+ x + "   AR: " + AR[i];
   if(x < 3){
      log = log + "  NOT ELEMENT   ";
      result = "NO";
      //console.log("NOT ELEMENT   ", AR[i])
      //break;
   }
   console.log(log);
}
}//end of p sircle
console.log("                       ",result);
//Remarkable example: p=1 for     let x = impl(AR[i][0], n(p), impl(AR[i][1], M(AR[i][2], p), M(AR[i][3], L(AR[i][4], p))));




// swith(x){
   // case 1:
   //    v = 1;
   //    break;
   // case 2:
   //    v = 10
   //    break;
   // case 3:
   //    v = 10
   //    break;
   // case 4:
   //    v = 4
   //    break;
   // default:
   //    console.log("SWITH M ERROR");
   //    break;
   // }


// // var ng = 3;  //counter of level in game
// var error = 0; //it is the counter of errors
// var A; //0 0 of left-top notation in mouseClick notation
// // A = {x: 8, y: 232};
// A = {x: 0, y: 0}; 
// var sizeImg = {x: 144, y: 90};
// let body1 = document.getElementById("body1"); // it is all blank
// //var d1 = document.getElementById("boll"); // it is jast img
// var num_of_step = 0; //steps in  level 
// var on_off_mouse = false; 
// // var k =0;  // something stuff for program (was used for debagging)
// // var k11 = 0;
// let AR = [];  //main array with parametrs of cards
// let time_of_exposition = 4; 
// let copmlexity = 3; //number of allowed mistakes.
// let start_with = 3; //to start with selected level
// //let stop_game_clear = false;
// let type_of_game = 0;


// function game_director(){
// ng = 3; // now me starting the new game and establish the values of start
// error = 0;
// num_of_step = 0;
// on_off_mouse = false;
// document.getElementById("text_id").innerHTML = " ";
// //clear_all_images(0); // thes was use for restart game in any time of game    


// let selector1 = document.getElementById("selector_time_id");
// console.log("selector time value: ", selector1.value);
// time_of_exposition = selector1.value;
// console.log("time_of_exposition: ", time_of_exposition);
// console.log("game is started");

// let selector2 = document.getElementById("selector_complexity_id");
// console.log("selector complexity value: ", selector2.value);
// copmlexity = selector2.value;
// console.log("copmlexity: ", copmlexity);

// let selector3 = document.getElementById("selector_start_with_id"); //to start with selected level 
// console.log("selector_start_level_id: ", selector3.value);
// start_with = selector3.value;
// console.log("start_level: ", start_with);

// let selector4 = document.getElementById("type_of_game_id");
// console.log("type_of_game_id: ", selector4.value);
// type_of_game = selector4.value;
// console.log("type_of_game : ", type_of_game);

// console.log("game is started");
// ng = start_with - 1; //to start with selected level
// start_level();
// };

// function start_level(){
//     document.getElementById("text_id").innerHTML = " "; //to clear label bofore start game
//     console.log("level is started");
//     // if(ng>3){
//     //     k11++; // for compare with k;
//     // }
//     // k = 0;
//     ng++; //ng++ it is a lenght of array( and sequense )
//     error = 0;
    
//         //current sheck of array 
//         console.log("showAR_in_console started");
//         showAR_in_console();
//         console.log("showAR_in_console stoped");
//         AR=[]; //to clear the array before start of game
//         console.log("showAR_in_console started");
//         showAR_in_console();
//         console.log("showAR_in_console stoped");
//     // creation of array 
//     for(let i = 0; i < ng; i++){
//     AR.push({x: Math.random(), y: Math.random(), z: i, lin: 0});
//     }
//     function showAR_in_console(){ //to show array in console
//         for(let i = 0; i < AR.length; i++){
//         console.log(`AR[${i}] = `, AR[i].x, " ", AR[i].y, " ",AR[i].z, " ",AR[i].lin, " ",);};  
//                       };
//     // to show array in browser
//     function showAR_in_browser(){  
//         //console.log("showAR_in_browser started");
//         for(let i = 0; i<AR.length; i++){
//         AR[i].lin = document.createElement('div');
//         AR[i].lin.className = "alertboll";
//         let k;                    // variable for value of ID 
//         let k1 = AR[i].z;
//         k = "b" + k1;             // ID is b+№of_element
//         AR[i].lin.setAttribute('id', k);
//         document.body.append(AR[i].lin);
//         AR[i].lin.style.top = "0px"
//         AR[i].lin.style.left = 100+652*AR[i].x+"px"; 
//         AR[i].lin.style.top = 50+452*AR[i].y+"px";
//         // d1.style.left = 0+"px";
//         // d1.style.top = 0+"px";
//         }
//         console.log("type of game", type_of_game);
//         if(type_of_game<1){ //to decide regim of game (blinde game if type_of_game = 1)
//             show_cards_with_numbers();
//         }else{
//             hide_the_numbers();
//         };

//         function show_cards_with_numbers(){
//             for(let i = 0; i<AR.length; i++){ //to show cards with numbers
//             AR[i].lin.style.backgroundImage = `url(image/b${i+1}.png)`;  
//         };
//         };
        
//     };

//     showAR_in_browser();
//     show_coordinate_of_imeges_in_console();
    
//     function show_coordinate_of_imeges_in_console(){
//         console.log("show_coordinate_of_imeges_in_console started");
//         //console.log(window.document.getElementById("boll").clientLeft);
//         for(let i = 0; i<AR.length; i++){
//             console.log("img"+i+"  "+ "top: ",AR[i].lin.style.top,"   left: ",AR[i].lin.style.left,"   id: ",AR[i].lin.id);
//         }
//     }


//     //timer
//     let t = 0;
//     function timer(q){
//         console.log("timer was stArted");
//         let timeID = setInterval(function ns(){
//             console.log("t:" , t);
//             document.getElementById("time").innerHTML = t;
//             t++;
//             if(t == q){
//             clearInterval(timeID); 
//             console.log("timer was stOped1");
//             hide_the_numbers();
//             document.getElementById("time").innerHTML = 0;   
//             };
//             }, 1000);
//         // console.log("timer was stOped2");
        
//     }

//     timer(time_of_exposition);
//     // console.log("Hi");

//     // function to hide the numbers   use blank cards
//     function hide_the_numbers(){ 
//       console.log("  hide_the_numbers() is started"); 
//       //console.log("AR[3].lin",AR[3].lin);
//       for(let i = 0; i < AR.length; i++){
//        AR[i].lin.style.backgroundImage = "url(image/boll0.png)"; 

//       }
//       console.log("  hide_the_numbers() is performed");
//       on_off_mouse = true;
//       console.log("on_off_mouse: ", on_off_mouse);
//     }
//     // hide_the_numbers();

// }


// document.addEventListener("click", func); 
//     function func(event){
//     if(on_off_mouse == true){
//     //console.log(AR);
//     console.log("Mouse_on");
//     clickProcessor(event.pageX-A.x, event.pageY-A.y);  // call of clickProcessor   
//     }else{console.log("mouse_off");};
//     }


//     function clickProcessor(left, top){
//         console.log("Arg's of Processor_  ", "left:", left,"    top: ", top);
//         if(num_of_step<AR.length){
//             if(left > parseInt(AR[num_of_step].lin.style.left) && left < parseInt(AR[num_of_step].lin.style.left)+sizeImg.x && top > parseInt(AR[num_of_step].lin.style.top) && top < parseInt(AR[num_of_step].lin.style.top)+sizeImg.y){
//             console.log("yes!");
//                                 if(num_of_step == AR.length-1){
//                                             document.getElementById("text_id").innerHTML = "CLICK ANYWHERE!";
//                                                                 };
//             AR[num_of_step].lin.style.backgroundImage = "url(image/boll1.png)";
//             num_of_step++;} else {
//             error++;
//             console.log("it is error number: ", error);
//             red_color();
//             if(error > copmlexity){
//                 game_over();
//             }
            
//            };  
//         }else{
//             console.log("you win!");
//             document.getElementById("text_id").innerHTML = "CLICK ANYWHERE!";
//             clear_all_images();

//             num_of_step = 0;
//             on_off_mouse = false;
//             console.log("on_off_mouse: ", on_off_mouse);
//              };

//     } // end of func event



// document.addEventListener("keydown", direction);
//     function direction(event){
//             if(event.keyCode == 13){                            //  Enter for clear all images
//                         console.log("Enter was passed");
//                         //k++;
//                         console.log("AR.length: ", AR.length);
//                         for(let i = 0; i<AR.length; i++){
//                             console.log("error in 166");
//                             body1.removeChild(AR[i].lin);   //error here!
//                         };
//                         };
//                     };


// function clear_all_images(a){
//     console.log("clear_all_images was started");
//                         //k++;
//                         console.log("AR.length: ", AR.length);
//                         for(let i = 0; i<AR.length; i++){
//                             console.log("error in 167");
//                             body1.removeChild(AR[i].lin);   //error here!
//                         };
//                         if(ng>0 && a!== 0){  //if game is over then  next_level must not be loanched. 
//                             next_level();
//                         };
// };



// function next_level(){
//     if(error < copmlexity+1){
//         start_level();
//     }else{console.log("game over");}
// };

// function game_over(){
//     on_off_mouse = false;
//     document.getElementById("text_id").innerHTML = "GAME OVER.  Now your best result is sequense of lenght: "+(ng-1) ;
//     console.log("GAME OVER", "You level is:  ", ng-4); //print number of level (ng-3) before ng = 0 
//     ng = 0;
//     clear_all_images();
//                     };

// function red_color(){
//         let c1 = document.getElementById("header_id");
//         let c2 = document.getElementById("footer_id");
//         // let c3 = document.getElementById("body1");
//         c1.style.backgroundColor = "red";
//         c2.style.backgroundColor = "red";
//         // c3.style.backgroundColor = "red";
//         setTimeout(function() {c1.style.backgroundColor = "green"; 
//         c2.style.backgroundColor ="green";
//         // c2.style.backgroundColor ="green";
//             }, 500);
//                                                     };
    


