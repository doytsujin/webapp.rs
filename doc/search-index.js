var N=null,E="",T="t",U="u",searchIndex={};
var R=["The server configuration","The logger configuration","webapp","The database configuration","webapp::protocol","username","password","Logout","webapp::schema::sessions","webapp::config","to_owned","clone_into","try_from","try_into","borrow_mut","result","type_id","webapp::protocol::model","borrow","typeid","webapp::protocol::request","webapp::protocol::response","selection","predicate","webapp::schema::sessions::columns","logincredentials","loginsession","formatter","all_columns","join_target","into_update_target","updatetarget","walk_ast","queryresult","as_query","serialize","deserialize","ServerConfig","LogConfig","PostgresConfig","LoginCredentials","LoginSession","fallible","shouldrender","RootComponent"];
searchIndex["app"]={"doc":E,"i":[],"p":[]};
searchIndex["backend"]={"doc":E,"i":[],"p":[]};
searchIndex["webapp"]={"doc":"The core library","i":[[0,"config",R[2],"Configuration related structures",N,N],[3,"Config",R[9],"The global configuration",N,N],[12,"server",E,R[0],0,N],[12,"log",E,R[1],0,N],[12,"postgres",E,R[3],0,N],[3,R[37],E,R[0],N,N],[12,"url",E,"The full server URL",1,N],[12,"cert",E,"The server certificate",1,N],[12,"key",E,"The server key",1,N],[12,"redirect_from",E,"The redirecting URLs",1,N],[3,R[38],E,R[1],N,N],[12,"actix_web",E,"The logging level of actix-web",2,N],[12,R[2],E,"The logging level of the application",2,N],[3,R[39],E,R[3],N,N],[12,"host",E,"The full host to the database",3,N],[12,R[5],E,"The username for the database",3,N],[12,R[6],E,"The password for the database",3,N],[12,"database",E,"The database to be used",3,N],[11,"from_file",E,"Creates a new `Config` instance using the parameters found…",0,[[["str"]],[R[42]]]],[0,"protocol",R[2],"The main protocol handling",N,N],[0,"model",R[4],"Basic models",N,N],[3,"Session",R[17],"A session representation",N,N],[12,"token",E,"The actual session token",4,N],[11,"new",E,"Create a new session from a given token",4,[[[T]],["self"]]],[0,"request",R[4],"Request messages",N,N],[3,R[40],R[20],"The credentials based login request",N,N],[12,R[5],E,"The username",5,N],[12,R[6],E,"The password",5,N],[3,R[41],E,"The session based login request",N,N],[12,"0",E,E,6,N],[3,R[7],E,"The logout request",N,N],[12,"0",E,E,7,N],[0,"response",R[4],"Response specific implementations",N,N],[3,"Login",R[21],"The login response",N,N],[12,"0",E,E,8,N],[3,R[7],E,"The logout response",N,N],[0,"schema",R[2],E,N,N],[0,"sessions","webapp::schema","Representation of the `sessions` table.",N,N],[3,"table",R[8],"The actual table struct",N,N],[0,"dsl",E,"Re-exports all of the columns of this table, as well as…",N,N],[0,"columns",E,"Contains all of the columns of this table",N,N],[3,"star",R[24],"Represents `table_name.*`, which is sometimes needed for…",N,N],[3,"token",E,"The `token` column of the `sessions` table.",N,N],[6,"SqlType",R[8],"The SQL type of all of the columns on this table",N,N],[6,"BoxedQuery",E,"Helper type for representing a boxed query from this table",N,N],[17,R[28],E,"A tuple of all of the columns on this table",N,N],[11,"star",E,"Represents `table_name.*`, which is sometimes necessary…",9,[[["self"]],["star"]]],[17,"CONFIG_FILENAME",R[2],"The global config file name",N,N],[17,"API_URL_LOGIN_CREDENTIALS",E,E,N,N],[17,"API_URL_LOGIN_SESSION",E,E,N,N],[17,"API_URL_LOGOUT",E,E,N,N],[11,"from",R[9],E,0,[[[T]],[T]]],[11,R[10],E,E,0,[[["self"]],[T]]],[11,R[11],E,E,0,[[["self"],[T]]]],[11,"into",E,E,0,[[],[U]]],[11,R[12],E,E,0,[[[U]],[R[15]]]],[11,R[13],E,E,0,[[],[R[15]]]],[11,R[14],E,E,0,[[["self"]],[T]]],[11,R[18],E,E,0,[[["self"]],[T]]],[11,R[16],E,E,0,[[["self"]],[R[19]]]],[11,"from",E,E,1,[[[T]],[T]]],[11,R[10],E,E,1,[[["self"]],[T]]],[11,R[11],E,E,1,[[["self"],[T]]]],[11,"into",E,E,1,[[],[U]]],[11,R[12],E,E,1,[[[U]],[R[15]]]],[11,R[13],E,E,1,[[],[R[15]]]],[11,R[14],E,E,1,[[["self"]],[T]]],[11,R[18],E,E,1,[[["self"]],[T]]],[11,R[16],E,E,1,[[["self"]],[R[19]]]],[11,"from",E,E,2,[[[T]],[T]]],[11,R[10],E,E,2,[[["self"]],[T]]],[11,R[11],E,E,2,[[["self"],[T]]]],[11,"into",E,E,2,[[],[U]]],[11,R[12],E,E,2,[[[U]],[R[15]]]],[11,R[13],E,E,2,[[],[R[15]]]],[11,R[14],E,E,2,[[["self"]],[T]]],[11,R[18],E,E,2,[[["self"]],[T]]],[11,R[16],E,E,2,[[["self"]],[R[19]]]],[11,"from",E,E,3,[[[T]],[T]]],[11,R[10],E,E,3,[[["self"]],[T]]],[11,R[11],E,E,3,[[["self"],[T]]]],[11,"into",E,E,3,[[],[U]]],[11,R[12],E,E,3,[[[U]],[R[15]]]],[11,R[13],E,E,3,[[],[R[15]]]],[11,R[14],E,E,3,[[["self"]],[T]]],[11,R[18],E,E,3,[[["self"]],[T]]],[11,R[16],E,E,3,[[["self"]],[R[19]]]],[11,"from",R[17],E,4,[[[T]],[T]]],[11,"into",E,E,4,[[],[U]]],[11,R[12],E,E,4,[[[U]],[R[15]]]],[11,R[13],E,E,4,[[],[R[15]]]],[11,R[14],E,E,4,[[["self"]],[T]]],[11,R[18],E,E,4,[[["self"]],[T]]],[11,R[16],E,E,4,[[["self"]],[R[19]]]],[11,"from",R[20],E,5,[[[T]],[T]]],[11,"into",E,E,5,[[],[U]]],[11,R[12],E,E,5,[[[U]],[R[15]]]],[11,R[13],E,E,5,[[],[R[15]]]],[11,R[14],E,E,5,[[["self"]],[T]]],[11,R[18],E,E,5,[[["self"]],[T]]],[11,R[16],E,E,5,[[["self"]],[R[19]]]],[11,"from",E,E,6,[[[T]],[T]]],[11,"into",E,E,6,[[],[U]]],[11,R[12],E,E,6,[[[U]],[R[15]]]],[11,R[13],E,E,6,[[],[R[15]]]],[11,R[14],E,E,6,[[["self"]],[T]]],[11,R[18],E,E,6,[[["self"]],[T]]],[11,R[16],E,E,6,[[["self"]],[R[19]]]],[11,"from",E,E,7,[[[T]],[T]]],[11,"into",E,E,7,[[],[U]]],[11,R[12],E,E,7,[[[U]],[R[15]]]],[11,R[13],E,E,7,[[],[R[15]]]],[11,R[14],E,E,7,[[["self"]],[T]]],[11,R[18],E,E,7,[[["self"]],[T]]],[11,R[16],E,E,7,[[["self"]],[R[19]]]],[11,"from",R[21],E,8,[[[T]],[T]]],[11,"into",E,E,8,[[],[U]]],[11,R[12],E,E,8,[[[U]],[R[15]]]],[11,R[13],E,E,8,[[],[R[15]]]],[11,R[14],E,E,8,[[["self"]],[T]]],[11,R[18],E,E,8,[[["self"]],[T]]],[11,R[16],E,E,8,[[["self"]],[R[19]]]],[11,"from",E,E,10,[[[T]],[T]]],[11,"into",E,E,10,[[],[U]]],[11,R[12],E,E,10,[[[U]],[R[15]]]],[11,R[13],E,E,10,[[],[R[15]]]],[11,R[14],E,E,10,[[["self"]],[T]]],[11,R[18],E,E,10,[[["self"]],[T]]],[11,R[16],E,E,10,[[["self"]],[R[19]]]],[11,"from",R[8],E,9,[[[T]],[T]]],[11,R[10],E,E,9,[[["self"]],[T]]],[11,R[11],E,E,9,[[["self"],[T]]]],[11,"into",E,E,9,[[],[U]]],[11,R[12],E,E,9,[[[U]],[R[15]]]],[11,R[13],E,E,9,[[],[R[15]]]],[11,R[14],E,E,9,[[["self"]],[T]]],[11,R[18],E,E,9,[[["self"]],[T]]],[11,R[16],E,E,9,[[["self"]],[R[19]]]],[11,"group_by",E,E,9,[[["expr"]]]],[11,"filter",E,E,9,[[[R[23]]]]],[11,R[29],E,E,9,[[["onclausewrapper"]]]],[11,R[30],E,E,9,[[],[R[31]]]],[11,R[34],E,E,9,[[]]],[11,"select",E,E,9,[[[R[22]]]]],[11,"offset",E,E,9,[[["i64"]]]],[11,"with_lock",E,E,9,[[["lock"]]]],[11,"internal_load",E,E,9,[[["conn"]],[["error"],[R[15],["vec","error"]],["vec"]]]],[11,"find",E,E,9,[[["pk"]]]],[11,"internal_into_boxed",E,E,9,[[]]],[11,"distinct_on",E,E,9,[[[R[22]]]]],[11,"then_order_by",E,E,9,[[["expr"]]]],[11,"for_update",E,E,9,[[]]],[11,"or_filter",E,E,9,[[[R[23]]]]],[11,"distinct",E,E,9,[[]]],[11,"limit",E,E,9,[[["i64"]]]],[11,"order",E,E,9,[[["expr"]]]],[11,"from",R[24],E,11,[[[T]],[T]]],[11,R[10],E,E,11,[[["self"]],[T]]],[11,R[11],E,E,11,[[["self"],[T]]]],[11,"into",E,E,11,[[],[U]]],[11,R[12],E,E,11,[[[U]],[R[15]]]],[11,R[13],E,E,11,[[],[R[15]]]],[11,R[14],E,E,11,[[["self"]],[T]]],[11,R[18],E,E,11,[[["self"]],[T]]],[11,R[16],E,E,11,[[["self"]],[R[19]]]],[11,"from",E,E,12,[[[T]],[T]]],[11,R[10],E,E,12,[[["self"]],[T]]],[11,R[11],E,E,12,[[["self"],[T]]]],[11,"into",E,E,12,[[],[U]]],[11,R[12],E,E,12,[[[U]],[R[15]]]],[11,R[13],E,E,12,[[],[R[15]]]],[11,R[14],E,E,12,[[["self"]],[T]]],[11,R[18],E,E,12,[[["self"]],[T]]],[11,R[16],E,E,12,[[["self"]],[R[19]]]],[11,"execute",E,E,12,[[[T],["conn"]],[["error"],["usize"],[R[15],["usize","error"]]]]],[11,"default",E,E,12,[[],["token"]]],[11,"clone",R[9],E,0,[[["self"]],["config"]]],[11,"clone",E,E,1,[[["self"]],["serverconfig"]]],[11,"clone",E,E,2,[[["self"]],["logconfig"]]],[11,"clone",E,E,3,[[["self"]],["postgresconfig"]]],[11,"clone",R[8],E,9,[[["self"]],["table"]]],[11,"clone",R[24],E,11,[[["self"]],["star"]]],[11,"clone",E,E,12,[[["self"]],["token"]]],[11,"eq",R[17],E,4,[[["self"],["session"]],["bool"]]],[11,"ne",E,E,4,[[["self"],["session"]],["bool"]]],[11,"eq",R[20],E,5,[[["self"],[R[25]]],["bool"]]],[11,"ne",E,E,5,[[["self"],[R[25]]],["bool"]]],[11,"eq",E,E,6,[[["self"],[R[26]]],["bool"]]],[11,"ne",E,E,6,[[["self"],[R[26]]],["bool"]]],[11,"eq",E,E,7,[[["self"],["logout"]],["bool"]]],[11,"ne",E,E,7,[[["self"],["logout"]],["bool"]]],[11,"eq",R[21],E,8,[[["self"],["login"]],["bool"]]],[11,"ne",E,E,8,[[["self"],["login"]],["bool"]]],[11,"eq",E,E,10,[[["self"],["logout"]],["bool"]]],[11,"fmt",R[17],E,4,[[["self"],[R[27]]],[R[15]]]],[11,"fmt",R[20],E,5,[[["self"],[R[27]]],[R[15]]]],[11,"fmt",E,E,6,[[["self"],[R[27]]],[R[15]]]],[11,"fmt",E,E,7,[[["self"],[R[27]]],[R[15]]]],[11,"fmt",R[21],E,8,[[["self"],[R[27]]],[R[15]]]],[11,"fmt",E,E,10,[[["self"],[R[27]]],[R[15]]]],[11,"fmt",R[8],E,9,[[["self"],[R[27]]],[R[15]]]],[11,"fmt",R[24],E,11,[[["self"],[R[27]]],[R[15]]]],[11,"fmt",E,E,12,[[["self"],[R[27]]],[R[15]]]],[11,"eq_all",E,E,12,[[[T]]]],[11,"values",R[17],E,4,[[]]],[11,"values",R[8],E,9,[[]]],[11,"table",E,E,9,[[]]],[11,"from_clause",E,E,9,[[["self"]]]],[11,"default_selection",E,E,9,[[["self"]]]],[11,"primary_key",E,E,9,[[["self"]]]],[11,R[28],E,E,9,[[]]],[11,R[29],E,E,9,[[["join"]]]],[11,R[29],E,E,9,[[["joinon"]]]],[11,R[29],E,E,9,[[["selectstatement"]]]],[11,R[29],E,E,9,[[["boxedselectstatement"]]]],[11,"build",R[17],E,4,[[],["self"]]],[11,R[30],R[8],E,9,[[],[R[31]]]],[11,R[32],R[24],E,11,[[["self"],["astpass"]],[R[33]]]],[11,R[32],E,E,12,[[["self"],["astpass"]],[R[33]]]],[11,R[34],R[8],E,9,[[]]],[11,R[35],R[17],E,4,[[["self"],["__s"]],[R[15]]]],[11,R[35],R[20],E,5,[[["self"],["__s"]],[R[15]]]],[11,R[35],E,E,6,[[["self"],["__s"]],[R[15]]]],[11,R[35],E,E,7,[[["self"],["__s"]],[R[15]]]],[11,R[35],R[21],E,8,[[["self"],["__s"]],[R[15]]]],[11,R[35],E,E,10,[[["self"],["__s"]],[R[15]]]],[11,R[36],R[9],E,0,[[["__d"]],[R[15]]]],[11,R[36],E,E,1,[[["__d"]],[R[15]]]],[11,R[36],E,E,2,[[["__d"]],[R[15]]]],[11,R[36],E,E,3,[[["__d"]],[R[15]]]],[11,R[36],R[17],E,4,[[["__d"]],[R[15]]]],[11,R[36],R[20],E,5,[[["__d"]],[R[15]]]],[11,R[36],E,E,6,[[["__d"]],[R[15]]]],[11,R[36],E,E,7,[[["__d"]],[R[15]]]],[11,R[36],R[21],E,8,[[["__d"]],[R[15]]]],[11,R[36],E,E,10,[[["__d"]],[R[15]]]]],"p":[[3,"Config"],[3,R[37]],[3,R[38]],[3,R[39]],[3,"Session"],[3,R[40]],[3,R[41]],[3,R[7]],[3,"Login"],[3,"table"],[3,R[7]],[3,"star"],[3,"token"]]};
searchIndex["webapp_backend"]={"doc":"The backend library","i":[[3,"Server","webapp_backend","The server instance",N,N],[11,"from_config",E,"Create a new server instance",0,[[["config"]],[R[42]]]],[11,"start",E,"Start the server",0,[[],[R[42]]]],[11,"url_to_socket_addrs",E,"Convert an `Url` to a vector of `SocketAddr`",0,[[["url"]],[[R[42],["vec"]],["vec",["socketaddr"]]]]],[11,"from",E,E,0,[[[T]],[T]]],[11,"into",E,E,0,[[],[U]]],[11,R[12],E,E,0,[[[U]],[R[15]]]],[11,R[13],E,E,0,[[],[R[15]]]],[11,R[14],E,E,0,[[["self"]],[T]]],[11,R[18],E,E,0,[[["self"]],[T]]],[11,R[16],E,E,0,[[["self"]],[R[19]]]],[11,"vzip",E,E,0,[[],["v"]]]],"p":[[3,"Server"]]};
searchIndex["webapp_frontend"]={"doc":"The frontend library","i":[[3,R[44],"webapp_frontend","Data Model for the Root Component",N,N],[5,"init_logger",E,"Initialize the static logger",N,[[],[R[42]]]],[14,"fetch",E,"Generic API fetch macro",N,N],[11,"from",E,E,0,[[[T]],[T]]],[11,"into",E,E,0,[[],[U]]],[11,R[12],E,E,0,[[[U]],[R[15]]]],[11,R[13],E,E,0,[[],[R[15]]]],[11,R[14],E,E,0,[[["self"]],[T]]],[11,R[18],E,E,0,[[["self"]],[T]]],[11,R[16],E,E,0,[[["self"]],[R[19]]]],[11,R[13],E,E,0,[[],[R[15]]]],[11,"view",E,E,0,[[["self"]],["html"]]],[11,"create",E,E,0,[[["componentlink"]],["self"]]],[11,"change",E,E,0,[[["self"]],[R[43]]]],[11,"update",E,E,0,[[["self"]],[R[43]]]]],"p":[[3,R[44]]]};
initSearch(searchIndex);addSearchOptions(searchIndex);