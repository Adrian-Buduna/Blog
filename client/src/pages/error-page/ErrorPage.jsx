import React from 'react'
import { Layout } from '../../layout'
import { Link } from 'react-router-dom'

import "./style.css"

const ErrorPage = () => {
    return (
        <Layout>
            <div className="container">
                <div className='error-box'>
                    <h1>404 - Not Found</h1>

                    <Link>
                        <span>
                            The page you are looking for does not exist.
                        </span>
                        <span>
                            Go Back Home
                        </span>
                    </Link>
                </div>
            </div>
        </Layout>
    )
}

export default ErrorPage