var conn = $.hdb.getConnection();
var query = 'SELECT * FROM "hana_mta_xs_api.db::error"';
var results = conn.executeQuery(query);
conn.close();

$.response.contentType = "text/json";
$.response.setBody(results);
$.response.status = $.net.http.OK;