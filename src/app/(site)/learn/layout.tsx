import Sidebar from '../../../components/Sidebar'

const Layout = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
  return (
    <>
    <div className='flex flex-row'>
        <Sidebar />
        <div className='p-3'>
        {children}
        </div>
    </div>
    </>
  )
}

export default Layout