import Head from "next/head"
import stylesheet from 'styles/main.scss'

import Header from '../components/Header'

class IndexPage extends React.Component {
    render() {
        return (
            <div>
                <Head>
                    <title>Next.js Starter</title>
                    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,600,600i" rel="stylesheet" />
                </Head>
                <style dangerouslySetInnerHTML={{ __html: stylesheet }} />

                <Header />

                <div>
                    <p>Welcome to Next.js</p>
                </div>

            </div>
        )
    }
}

export default IndexPage
