import '../styles/global.css'
import Nav from '@components/Nav'


export const metadata ={
    title  :"PromptShare",
    description: "Discover and share ai prompts with global"

}
const Layout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <div>
                <div></div>
            </div>
            <main className='flex flex-col justify-center items-center'>
                <Nav/>
                {children}
            </main>
        </body>
    </html>
  )
}

export default Layout