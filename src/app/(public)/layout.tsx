import { GuestLayout } from '@root/src/layouts'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <GuestLayout>
            {children}
        </GuestLayout>
    )
}

export default layout
