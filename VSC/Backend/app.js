var express         = require('express');
var bodyParser      = require('body-parser');
var router          = express.Router();
var app             = express();
var swaggerUi       = require('swagger-ui-express');
var swaggerDocument = require('./swagger.json');
var sql             = require('mssql');
//var cors            = require('cors');

// User / getAllUsers / createUser
const config = {
    user:'sa',
    password:'talage',  
    server:"DESKTOP-MAGJ7HQ\\SQLEXPRESS", 
    database:'YTEncyclopedia', 
    //options: { trustedConnection: true },
    //port:1433,
    //stream: true,
};


// User / getAllUsers / createUser
var GetUsers = async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    sql.close();
    var con = await new sql.connect(config,(err)=>{
        if (err){
            res.json(err);  
        }
        else{
            con.request().execute("SP_TEACHER_SelectAll", (err,data)=>{
                if (err){
                    res.json(err);  
                }
                else{
                    res.json(data.recordsets);  
                }
               });
        }
    });
};



var SetUser = async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Content-Type', 'application/json;charset=UTF-8');
    console.log("FirstName :" ,  req.body);
    console.log("FirstName :" ,  req.body.FirstName);
    console.log("LastName  :" ,  req.body.LastName);
};



router.route('/SetUser').post(SetUser);
router.route('/GetUsers').get(GetUsers);

//app.use(cors({origin: 'http://localhost:3000'}));
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(bodyParser.urlencoded({ extended :false }), router);
app.listen(8080,'127.0.0.1'); 

