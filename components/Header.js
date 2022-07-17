import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon, LightningBoltIcon, SearchIcon, UserIcon,
} from '@heroicons/react/outline'

import Image from "next/image";
import HeaderItem from "./HeaderItem";

function Header() {
  return (
    <header className='flex flex-col sm:flex-row m-5 justify-between items-center'>
      {/* <Image 
            className="object-contain"
            src="https://imgur.com/a/UoTyxLN"
            width={200}
            height={100} 
        /> */}
        <h2 className='pl-5 font-sans text-5xl tracking-widest'>FULU</h2>
        <div className="flex flex-grow justify-evenly max-w-2xl pt-8">
            <HeaderItem title='Home' Icon={HomeIcon}/>
            <HeaderItem title='Trending' Icon={LightningBoltIcon}/>
            <HeaderItem title='Verified' Icon={BadgeCheckIcon}/>
            <HeaderItem title='Collections' Icon={CollectionIcon}/>
            <HeaderItem title='Search' Icon={SearchIcon}/>
            <HeaderItem title='Account' Icon={UserIcon}/>
        </div>
    </header>
  )
}

export default Header