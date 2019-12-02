import React from 'react';
import Userdetails from './userDetails';
import More from './more';
import Faker from 'faker';

const App = () => {

  let style={ 
    padding: "60px 0px 60px"
    
}
  return(

    <div className="container" style={style}>
       
       <div className="row">
       <More>
       <Userdetails username="Priyanka" profile="DEVELOPER" imgUrl={Faker.image.avatar()}/>
       </More>

       <More>
       <Userdetails username="Ashwini" profile="PROGRAMMER" imgUrl={Faker.image.avatar()}/> 
       </More>

       <More>
       <Userdetails username="Madhuri" profile="TESTER" imgUrl={Faker.image.avatar()}/>
       
       </More>

       </div>
      
      <hr/>

      <div className="row">
        <More>
            <Userdetails username="Neha" profile="MANAGER"imgUrl={Faker.image.avatar()} />
        </More>

        <More>
            <Userdetails username="Amruta" profile="ADMIN" imgUrl={Faker.image.avatar()}/>
        </More>

        <More>
            <Userdetails username="Pallavi" profile="HR" imgUrl={Faker.image.avatar()}/>
        </More>
       </div>

    </div>
  )
};

export default App;
