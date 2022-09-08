import { DiGithubBadge } from "react-icons/di";
import { GoPerson } from "react-icons/go"
export default function Footer() {
    
    
    return(
        <>
        <div className="absolute bottom-0 w-screen justify-center flex flex-row gap-x-7 bg-black bg-opacity-50">
            <DiGithubBadge color="white" size="3rem"/>
            <GoPerson color="white" size="3rem"/>

        </div>
        </>
    )
}