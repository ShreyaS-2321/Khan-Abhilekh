import { Client, Account,Databases,Storage } from "appwrite";


// Initialize the Appwrite client
const client = new Client();

// Set the endpoint and project ID
client
  .setEndpoint("https://cloud.appwrite.io/v1") // Appwrite API endpoint
  .setProject("67a620ba003853499214"); // Replace with your actual project ID

// Initialize the account instance with the configured client
const account = new Account(client);
const databases = new Databases(client);
const storage = new Storage(client);

async function getUserRole(){
  try{
    const user = await
    account.get();
    console.log(user);

    if(user.labels.includes("admin")
    ){
  console.log("User is an Admin");}
   else if(user.labels.includes("supervisor")){
    console.log("User is a Supervisor");
  }else{
    console.log("User is a Worker");
  }
  }catch(error){
    console.log("Error!!")
  }
}
getUserRole();

// Export account object for usage in other files
export { client, account, databases, storage };
