import React from 'react';
function Home(props){
    return(
        <body style={{backgroundColor: props.bgcolor}}>
        <div class="container-fluid">
            <h1><center>Hello, and Welcome</center></h1>
            <h6><center>This is a fun website to play by changing background colors!</center></h6>
        </div>
        </body>

    );
}
export default Home;