import Link from "next/link"

const icon = (<svg xmlns="http://www.w3.org/2000/svg" width="28" height="20" viewBox="0 0 28 20" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.414 3.33337C18.414 5.94618 15.9315 8.19805 12.4754 8.72021L8.05739 9.38762C7.66511 9.44696 7.38307 9.70229 7.38228 9.99879C7.38149 10.2954 7.66218 10.5515 8.05413 10.612L12.2593 11.26C15.7173 11.793 18.1958 14.0504 18.1958 16.6667H19.8833C19.8833 13.4581 16.8438 10.6899 12.6031 10.0363L12.4077 10.0061L12.8125 9.94496C17.0545 9.30412 20.1015 6.54024 20.1015 3.33337H18.414Z" fill="#333D42"/>
</svg>)

export default function ArrowLink({name,path}:{name:string,path:`/${string}`}){
    return (
        <Link href={path}>
            <div className="flex hover:border-[#FCD961] items-center px-4 py-1 border-3 border-gray-700 rounded-xl">
                {name}
                {icon}
            </div>
        </Link>
    )
}