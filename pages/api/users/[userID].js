import connectMongo from "../../../database/dbConnect";
import { getUser, createUser, deleteUser} from "../../../database/controller";
 
export default async function handler(req, res){
 
    connectMongo().catch(()=> res.status(405).json({error: "Error while connecting to database"}))
 
    // type of request
    const {method} = req;
 
    switch(method){
        case "GET":
            getUser(req, res);
            break;
        case "PUT":
            updateUser(req, res);
            break;
        case "DELETE":
            deleteUser(req, res);
            break;
        default:
            res.setHeader("Allow", ["GET", "PUT", "POST", "DELETE"]);
            res.status(405).end(`Method ${method} Not Allowed`);
            break;
    }
 
}
 
 
 
