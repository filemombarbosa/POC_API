var conn = $.hdb.getConnection();
var query = 'SELECT * FROM "hana_mta_api.db::error" WHERE "id" > 1 ORDER BY "id" DESC';
var results = conn.executeQuery(query);
conn.close();

$.response.contentType = "text/json";
$.response.setBody(results);
$.response.status = $.net.http.OK;
