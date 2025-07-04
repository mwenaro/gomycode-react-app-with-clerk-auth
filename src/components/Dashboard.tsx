import { RedirectToSignIn, useUser } from "@clerk/clerk-react";
import { useEffect } from "react";

export function Dashboard() {
    
    const auth = useUser()
    if(!auth?.isSignedIn) return <RedirectToSignIn />
    const {user} = auth,
    {firstName, lastName, emailAddresses:[userEmail]} = user
    const email = userEmail?.emailAddress || "No email provided";
useEffect(() => {
    // This effect runs when the component mounts
    console.log("Dashboard component mounted");  

},[])
  return (
    <div>
        <h2>Welcome {firstName} {lastName}</h2>
        <p>Email: {email}</p>
        <p>You are signed in and can access all features.</p>
        <p className="text-gray-600">This is your dashboard.</p>
        <p className="text-gray-600">You can manage your account here.</p>
    </div>
  )
}
