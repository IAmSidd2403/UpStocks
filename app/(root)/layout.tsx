import Header from "@/components/Header";


const Layout = ({children}:{children : React.ReactNode}) => {
    return (
        <main className="min-h-screen text-grey-400">
            {/*Header*/}
            <Header />
            <div className='w-full px-6 py-10'>
                {children}
            </div>

        </main>
    )
}
export default Layout
