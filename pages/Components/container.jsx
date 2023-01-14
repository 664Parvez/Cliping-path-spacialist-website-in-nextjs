import Head from "next/head"

import Snowfall from "react-snowfall"

const container = (props) => {
    return (
        <>  

        <Snowfall style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          zIndex: "999",
        }}
        snowflakeCount={40} 
        />

            <Head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
            </Head>

            <div className="container-fluid">
                {props.children}

            </div>
        </>
    )
}

export default container