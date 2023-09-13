import { getConnection} from "./../database/database";

const getLanguages = async (req, res) => {
    try{
        const connection = await getConnection();
        const result = await connection.query("SELECT id, name, programmers FROM languages");
        res.json(result);
    } catch (error){
        restart.status(500);
        restart.send(error.message);
    }
};

export const methods = {
    getLanguages
};
