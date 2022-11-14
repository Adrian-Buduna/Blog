import React from "react"
// elements
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import AdminNav from "./AdminNav"

const Layout = ({ children }) => {
    return (
        <div className="grid grid-rows-10 min-h-screen ">

            <div className="row-span-1 bg-teal-800 p-5 border-b-2 border-teal-600 text-orange-500 font-bold text-2xl">
                <Header />
            </div>

            <div className="row-span-8 bg-gray-200 p-2 flex flex-row justify-start items-start gap-4">
                <AdminNav />
                <Main >{children}</Main>
            </div>

            <div className="row-span-1 bg-teal-800 p-4 border-t-2 border-teal-600 text-white font-medium ">
                <Footer />
            </div>
        </div>
    )
}

export const Layouts = React.memo(Layout);