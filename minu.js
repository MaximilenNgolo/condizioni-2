let temp =prompt(`inserisci la temperatura attuale`)


if (temp <= 0){
    console.log(`non è tanto il freddo quanto l'umidita`);
    
} else if( temp <= -10) {
    console.log(`copriti... ancora ti raffreddi`);
} else if (temp < 20){
    console.log(` non ci sono piu' le mezze stagioni`);

} else if (temp < 30){
    console.log(`mi dia una perroni sudata`);

} else{
    console.log(`lu mare, lu sole, lu ientu`);
    
}






let tempo =prompt(`inserisci la temperatura attuale`)


switch (true){
  case tempo < -10 :
  console.log(`copriti... ancora ti raffreddi`);
  break

  case  tempo < 0 :
  console.log(`non è tanto il freddo quanto l'umidita`);
  break
  
  
  case tempo < 20 :
  console.log(` non ci sono piu' le mezze stagioni`);
  break
  
  case tempo < 30 :
  console.log(`mi dia una perroni sudata`);
  break
  

       
       default:
           console.log(`lu mare, lu sole, lu ientu`);
           



} 



    


    
    
    
    
    

