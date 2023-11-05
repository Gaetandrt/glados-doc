import Sidebar from '../../../components/Sidebar'

const Layout = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
  return (
    <>
    <div className='h-screen flex flex-row justify-start'>
        <Sidebar />
        <div className='p-3'>
        {children}
        </div>
    </div>
    </>
  )
}

export default Layout