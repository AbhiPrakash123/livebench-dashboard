import Lab from "./lab-card"
export default function BoardListing({forms,user}:any) {
    const {roles} = user
    return (
        <div className=" container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {forms.map((data:any,index:any) => <Lab key={index} data={data} roles={roles}/>)}
        </div>
    )
}