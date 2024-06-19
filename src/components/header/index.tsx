import Image from 'next/image'
import SearchBar from './Searchbar'
import { AspectRatio } from '../ui/aspect-ratio'
import UserProfile from './profile'


export default function Header({ user }: any) {

    return (
        <header className="flex z-50 w-screen h-16 items-center gap-4 border-b bg-white px-4 lg:h-[60px] lg:px-6 fixed">
            <div className="container flex justify-between items-stretch">

                <div className=' w-40'>
                    <AspectRatio >
                        <Image
                            className='h-full w-full'
                            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/livebench.png`}
                            fill
                            style={{ objectFit: "contain" }}
                            alt="company logo"
                        />
                    </AspectRatio>

                </div>
                <div className=' flex-grow max-w-[500px]'>
                    <SearchBar />
                </div>
                <UserProfile user={user} />

            </div>
        </header>
    )
}