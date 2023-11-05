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
        <div className='flex-grow px-28 pt-10'>
        {children}

        </div>
    </div>
    </>
  )
}

export default Layout